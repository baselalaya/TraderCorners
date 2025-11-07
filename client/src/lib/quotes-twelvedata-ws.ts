type Quote = { symbol: string; price: number; ts: number };

export function startTDWebSocket(
  symbols: string[],
  onQuote: (q: Quote) => void,
  opts: { url?: string } = {}
) {
  const url = opts.url || import.meta.env.VITE_TWELVEDATA_WS;
  let ws: WebSocket | null = null;
  let stopped = false;
  let backoff = 1000;

  const connect = () => {
    if (!url) return;
    ws = new WebSocket(url);
    ws.onopen = () => {
      backoff = 1000;
      const sub = {
        action: "subscribe",
        params: { symbols: symbols.join(",") },
      } as any;
      ws?.send(JSON.stringify(sub));
    };
    ws.onmessage = (ev) => {
      try {
        const msg = JSON.parse(ev.data);
        if (msg?.event === "price" && msg?.symbol && msg?.price != null) {
          onQuote({ symbol: msg.symbol, price: Number(msg.price), ts: Date.now() });
        }
      } catch {}
    };
    ws.onclose = () => {
      if (stopped) return;
      setTimeout(connect, backoff);
      backoff = Math.min(backoff * 2, 30000);
    };
    ws.onerror = () => {
      try { ws?.close(); } catch {}
    };
  };

  connect();
  return () => { stopped = true; try { ws?.close(); } catch {} };
}

