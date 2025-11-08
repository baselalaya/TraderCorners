import type { Express } from "express";
import { WebSocketServer } from "ws";
import { quotesHub } from "../quotesHub";
import { fetchAVSnapshot } from "../avClient";

const DEFAULT_SYMBOLS = (process.env.QUOTES_SYMBOLS?.split(',').map(s => s.trim()).filter(Boolean) || ["EUR/USD", "GBP/USD", "USD/JPY", "XAU/USD"]);

export function mountQuotesRoutes(app: Express, server: import("http").Server) {
  // Upstream WS disabled (Alpha Vantage has no WS); rely on polling

  let pollTimer: NodeJS.Timeout | null = null;

  app.get("/api/quotes", async (_req, res) => {
    const latest = quotesHub.getLatestArray();
    if (latest.length === 0) {
      try {
        const snap = await fetchAVSnapshot(DEFAULT_SYMBOLS);
        if (snap.length) {
          quotesHub.broadcast(snap);
          res.json({ items: snap });
        } else {
          res.json({ items: [] });
        }
        // kick off periodic polling to simulate streaming
        if (!pollTimer) {
          const interval = process.env.NODE_ENV === 'development' ? 5000 : 15000;
          pollTimer = setInterval(async () => {
            try {
              const upd = await fetchAVSnapshot(DEFAULT_SYMBOLS);
              if (upd.length) quotesHub.broadcast(upd);
            } catch {}
          }, interval);
        }
      } catch (e: any) {
        res.status(502).json({ items: [], message: e?.message || "Upstream error" });
      }
    } else {
      res.json({ items: latest });
    }
  });

  // SSE fallback for environments without WS upgrade support
  app.get('/api/quotes/events', async (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders?.();

    const write = (items: any[]) => {
      res.write(`data: ${JSON.stringify({ items })}\n\n`);
    }
    // send initial snapshot
    try {
      const latest = quotesHub.getLatestArray();
      if (latest.length) write(latest);
      else write(await fetchTDSnapshot(DEFAULT_SYMBOLS));
    } catch {}

    const handler = (items: any[]) => write(items);
    // naive subscription: reuse broadcast by wrapping send
    const origBroadcast = quotesHub.broadcast.bind(quotesHub);
    (quotesHub as any).broadcast = (items: any[]) => {
      handler(items);
      return origBroadcast(items);
    };

    req.on('close', () => {
      (quotesHub as any).broadcast = origBroadcast;
      res.end();
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
