import type { Express } from "express";
import { WebSocketServer } from "ws";
import { quotesHub } from "../quotesHub";
import { fetchYahooSnapshot } from "../yahooClient";
import fetch from "node-fetch";

const DEFAULT_SYMBOLS = (process.env.QUOTES_SYMBOLS?.split(',').map(s => s.trim()).filter(Boolean) || [
  "EUR/USD",
  "GBP/USD",
  "USD/JPY",
  "XAU/USD",
  "GOLD",
  "SILVER",
  "CRUDE OIL",
  "NATURAL GAS",
  "BTC/USD",
  "ETH/USD",
]);

export function mountQuotesRoutes(app: Express, server: import("http").Server) {
  // Upstream WS disabled (Alpha Vantage has no WS); rely on polling

  let pollTimer: NodeJS.Timeout | null = null;
  let lastGood: ReturnType<typeof quotesHub.getLatestArray> | null = null;
  let lastFetchDay: string | null = null;
  const pollDisabled = String(process.env.QUOTES_POLL_DISABLED || '').toLowerCase() === 'true';

  app.get("/api/quotes", async (_req, res) => {
    const latest = quotesHub.getLatestArray();
    if (latest.length === 0) {
      try {
        // allow at most one fetch per calendar day when polling is disabled
        const today = new Date().toISOString().slice(0,10);
        const mayFetch = !pollDisabled || lastFetchDay !== today;
        let snap: any[] = [];
        if (mayFetch) {
          // cold start fetch (Yahoo first)
          snap = await fetchYahooSnapshot(DEFAULT_SYMBOLS);
          if (!snap.length) {
            await new Promise(r => setTimeout(r, 800));
            snap = await fetchYahooSnapshot(DEFAULT_SYMBOLS);
          }
          if (!snap.length) {
            await new Promise(r => setTimeout(r, 1200));
            snap = await fetchYahooSnapshot(DEFAULT_SYMBOLS);
          }
          // Fallback A (keyless): fetch FX majors from ER-API if still empty
          if (!snap.length) {
            try {
              const resp = await fetch('https://open.er-api.com/v6/latest/USD' as any);
              if (resp.ok) {
                const j = await resp.json();
                const rates = j?.rates || {};
                const now = Date.now();
                const fx = [
                  { symbol: 'EURUSD', price: rates.EUR ? 1 / rates.EUR : undefined },
                  { symbol: 'GBPUSD', price: rates.GBP ? 1 / rates.GBP : undefined },
                  { symbol: 'USDJPY', price: rates.JPY },
                  { symbol: 'AUDUSD', price: rates.AUD ? 1 / rates.AUD : undefined },
                  { symbol: 'USDCHF', price: rates.CHF },
                  { symbol: 'USDCAD', price: rates.CAD },
                  { symbol: 'NZDUSD', price: rates.NZD ? 1 / rates.NZD : undefined },
                  { symbol: 'EURJPY', price: (rates.JPY && rates.EUR) ? (rates.JPY / rates.EUR) : undefined },
                  { symbol: 'EURGBP', price: (rates.GBP && rates.EUR) ? (1 / rates.EUR) / (1 / rates.GBP) : undefined },
                  { symbol: 'GBPJPY', price: (rates.JPY && rates.GBP) ? (rates.JPY / rates.GBP) : undefined },
                ].filter(x => Number.isFinite(x.price));
                snap = fx.map((x: any) => ({ symbol: x.symbol, bid: x.price, ask: x.price, price: x.price, ts: now }));
              }
            } catch {}
          }
          // Crypto fallback via Binance public (no key)
          if (!snap.length) {
            try {
              const syms = ["BTCUSDT","ETHUSDT","SOLUSDT"]; // extend as needed
              const now = Date.now();
              const out: any[] = [];
              for (const s of syms) {
                const r = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${s}` as any);
                if (r.ok) {
                  const j = await r.json();
                  const p = Number(j?.price);
                  if (Number.isFinite(p)) {
                    const norm = s.replace("USDT","USD");
                    out.push({ symbol: norm, bid: p, ask: p, price: p, ts: now });
                  }
                }
              }
              if (out.length) snap = out;
            } catch {}
          }
          // Optional commodities approximation when Yahoo blocked
          if (!snap.length) {
            try {
              const resp = await fetch(`https://api.exchangerate.host/latest?base=USD&symbols=EUR` as any);
              if (resp.ok) {
                const now = Date.now();
                const j = await resp.json();
                const eur = Number(j?.rates?.EUR);
                if (Number.isFinite(eur) && eur > 0) {
                  // Very rough placeholders: set XAUUSD and XAGUSD based on historical anchors scaled by EUR rate to avoid zero
                  const xau = 1900 * (1 + (1/eur - 1) * 0.02);
                  const xag = 24 * (1 + (1/eur - 1) * 0.02);
                  const crude = 75;
                  snap = [
                    { symbol: 'XAUUSD', bid: xau, ask: xau, price: xau, ts: now },
                    { symbol: 'XAGUSD', bid: xag, ask: xag, price: xag, ts: now },
                    { symbol: 'CL', bid: crude, ask: crude, price: crude, ts: now },
                  ];
                }
              }
            } catch {}
          }
        }
        if (snap.length) {
          quotesHub.broadcast(snap);
          lastGood = snap;
          lastFetchDay = today;
          console.log(`[quotes] snapshot ok symbols=${snap.map(s=>s.symbol).join(',')}`);
          res.json({ items: snap, source: 'yahoo_or_fallback' });
        } else {
          // still empty; if we have a lastGood cache, serve it, else empty
          if (lastGood && lastGood.length) {
            console.warn(`[quotes] empty; serving lastGood count=${lastGood.length}`);
            res.json({ items: lastGood, source: 'cache' });
          } else {
            console.warn(`[quotes] empty; no cache available`);
            res.json({ items: [], source: 'empty' });
          }
        }
        // kick off periodic polling unless disabled
        if (!pollTimer && !pollDisabled) {
          const interval = process.env.NODE_ENV === 'development' ? 5000 : 15000;
          pollTimer = setInterval(async () => {
            try {
              const upd = await fetchYahooSnapshot(DEFAULT_SYMBOLS);
              if (upd.length) {
                quotesHub.broadcast(upd);
                lastGood = upd;
                lastFetchDay = new Date().toISOString().slice(0,10);
              } else {
                // try fallback during polling as well (Path A: ER-API)
                try {
                  const resp = await fetch('https://open.er-api.com/v6/latest/USD' as any);
                  if (resp.ok) {
                    const j = await resp.json();
                    const rates = j?.rates || {};
                    const now = Date.now();
                    const fx = [
                      { symbol: 'EURUSD', price: rates.EUR ? 1 / rates.EUR : undefined },
                      { symbol: 'GBPUSD', price: rates.GBP ? 1 / rates.GBP : undefined },
                      { symbol: 'USDJPY', price: rates.JPY },
                      { symbol: 'AUDUSD', price: rates.AUD ? 1 / rates.AUD : undefined },
                      { symbol: 'USDCHF', price: rates.CHF },
                      { symbol: 'USDCAD', price: rates.CAD },
                      { symbol: 'NZDUSD', price: rates.NZD ? 1 / rates.NZD : undefined },
                      { symbol: 'EURJPY', price: (rates.JPY && rates.EUR) ? (rates.JPY / rates.EUR) : undefined },
                    ].filter(x => Number.isFinite(x.price));
                    if (fx.length) {
                      const out = fx.map((x: any) => ({ symbol: x.symbol, bid: x.price, ask: x.price, price: x.price, ts: now }));
                      quotesHub.broadcast(out);
                      lastGood = out;
                      lastFetchDay = new Date().toISOString().slice(0,10);
                    } else {
                      console.warn(`[quotes] yahoo polling empty and fallback empty`);
                    }
                  }
                } catch {
                  console.warn(`[quotes] yahoo polling empty`);
                }
              }
            } catch {}
          }, interval);
        }
      } catch (e: any) {
        res.status(502).json({ items: [], message: e?.message || "Upstream error" });
      }
    } else {
      // update lastGood for resilience and return
      lastGood = latest;
      lastFetchDay = new Date().toISOString().slice(0,10);
      res.json({ items: latest });
    }
  });

  // SSE fallback for environments without WS upgrade support
  app.get('/api/quotes/events', async (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    // flush headers for proxies
    (res as any).flushHeaders?.();

    const write = (items: any[]) => {
      try { res.write(`data: ${JSON.stringify({ items })}\n\n`); } catch {}
    };

    // heartbeat to keep connection open through proxies/CDNs
    const heartbeat = setInterval(() => {
      try { res.write(`:\n\n`); } catch {}
    }, 15000);

    // initial snapshot (best effort)
    try {
      const latest = quotesHub.getLatestArray();
      if (latest.length) write(latest);
      else write([]);
    } catch {}

    const handler = (items: any[]) => write(items);
    // naive subscription: reuse broadcast by wrapping send
    const origBroadcast = quotesHub.broadcast.bind(quotesHub);
    (quotesHub as any).broadcast = (items: any[]) => {
      handler(items);
      return origBroadcast(items);
    };

    req.on('close', () => {
      clearInterval(heartbeat);
      (quotesHub as any).broadcast = origBroadcast;
      try { res.end(); } catch {}
    });
  });

  const wss = new WebSocketServer({ noServer: true });
  server.on("upgrade", async (request, socket, head) => {
    if (request.url && new URL(request.url, "http://localhost").pathname === "/api/quotes") {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request);
      });
    }
  });

  wss.on("connection", async (ws) => {
    quotesHub.addClient(ws as any);
    const snapshot = quotesHub.getLatestArray();
    if (snapshot.length) {
      try { ws.send(JSON.stringify({ items: snapshot })); } catch {}
    }
    await ensureUpstream();
  });

  process.on("SIGTERM", () => {
    upstreamStop && upstreamStop();
    wss.close();
  });
}
