import type { Express } from "express";
import { WebSocketServer } from "ws";
import { quotesHub } from "../quotesHub";
import { connectTDWS, fetchTDSnapshot } from "../tdClient";

const DEFAULT_SYMBOLS = ["EUR/USD", "GBP/USD", "USD/JPY", "XAU/USD"];

export function mountQuotesRoutes(app: Express, server: import("http").Server) {
  let upstreamStop: (() => void) | null = null;
  let upstreamStarted = false;

  async function ensureUpstream() {
    if (upstreamStarted) return;
    upstreamStarted = true;
    upstreamStop = connectTDWS({
      symbols: DEFAULT_SYMBOLS,
      onTick: (items) => quotesHub.broadcast(items),
      onError: () => {},
    });
  }

  app.get("/quotes", async (_req, res) => {
    const latest = quotesHub.getLatestArray();
    if (latest.length === 0) {
      try {
        const snap = await fetchTDSnapshot(DEFAULT_SYMBOLS);
        for (const it of snap) { /* seed cache */ }
        res.json({ items: snap });
      } catch (e: any) {
        res.status(502).json({ items: [], message: e?.message || "Upstream error" });
      }
    } else {
      res.json({ items: latest });
    }
  });

  // SSE fallback for environments without WS upgrade support
  app.get('/quotes/events', async (req, res) => {
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
    if (request.url && new URL(request.url, "http://localhost").pathname === "/quotes") {
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
