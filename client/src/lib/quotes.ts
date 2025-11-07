type Quote = {
  symbol: string;
  price: number;
  ts: number;
};

const DEFAULT_SYMBOLS = [
  // FX
  "EURUSD", "GBPUSD", "USDJPY", "XAUUSD", "XAGUSD",
  // Crypto
  "BINANCE:BTCUSDT", "BINANCE:ETHUSDT",
  // Indices (Finnhub uses indices as ^ symbols or specific codes; REST fallback will try common ones)
  "^GSPC", "^NDX", "^FTSE",
  // Oil (tickers vary across providers; leave for REST fallback)
];

export type QuotesState = {
  [symbol: string]: Quote | undefined;
};

export function createQuotesFeed(symbols: string[] = DEFAULT_SYMBOLS) {
  const wsUrl: string | undefined = import.meta.env.VITE_FINNHUB_WS;
  const restBase: string = import.meta.env.VITE_FINNHUB_REST || "https://finnhub.io/api/v1";
  const apiKey: string | undefined = import.meta.env.VITE_FINNHUB_KEY;

  let ws: WebSocket | null = null;
  let reconnectTimer: any = null;
  let closed = false;
  const listeners = new Set<(state: QuotesState) => void>();
  const state: QuotesState = {};

  function notify() {
    listeners.forEach(l => l({ ...state }));
  }

  function connect() {
    if (!wsUrl) return; // no WS
    ws = new WebSocket(wsUrl);
    ws.onopen = () => {
      symbols.forEach(s => ws?.send(JSON.stringify({ type: "subscribe", symbol: s })));
    };
    ws.onmessage = (ev) => {
      try {
        const msg = JSON.parse(ev.data);
        if (msg.type === "trade" && Array.isArray(msg.data)) {
          msg.data.forEach((t: any) => {
            const sym = t.s as string;
            const price = t.p as number;
            const ts = t.t as number;
            state[sym] = { symbol: sym, price, ts };
          });
          notify();
        }
      } catch {}
    };
    ws.onclose = () => {
      if (closed) return;
      reconnectTimer = setTimeout(connect, 3000);
    };
    ws.onerror = () => {
      try { ws?.close(); } catch {}
    };
  }

  async function pollREST() {
    if (!apiKey) return;
    try {
      await Promise.all(symbols.map(async (s) => {
        // Try quote endpoint; supports stocks/forex/crypto with different symbol formats
        const u = new URL(`${restBase}/quote`);
        u.searchParams.set("symbol", s);
        u.searchParams.set("token", apiKey);
        const res = await fetch(u.toString());
        if (!res.ok) return;
        const q = await res.json();
        const price = q.c || q.p || q.last || q.price;
        if (price) {
          state[s] = { symbol: s, price: Number(price), ts: Date.now() };
        }
      }));
      notify();
    } catch {}
  }

  let poller: any = null;

  function start() {
    if (wsUrl) connect();
    // REST fallback and also prime values periodically
    if (apiKey) {
      pollREST();
      poller = setInterval(pollREST, 10000);
    }
  }

  function stop() {
    closed = true;
    if (reconnectTimer) clearTimeout(reconnectTimer);
    if (poller) clearInterval(poller);
    try { ws?.close(); } catch {}
  }

  function subscribe(listener: (state: QuotesState) => void) {
    listeners.add(listener);
    listener({ ...state });
    return () => listeners.delete(listener);
  }

  return { start, stop, subscribe };
}

