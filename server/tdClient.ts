import WebSocket from "ws";
import fetch from "node-fetch";

export type TDNormalized = {
  symbol: string; // e.g. EURUSD
  bid: number;
  ask: number;
  price: number;
  ts: number;
};

type ConnectArgs = {
  symbols: string[];
  onTick: (items: TDNormalized[]) => void;
  onOpen?: () => void;
  onError?: (err: any) => void;
  onClose?: () => void;
};

const TD_WS_URL = process.env.TD_WS_URL as string;
const TD_API_KEY = process.env.TD_API_KEY as string;
const TD_REST_BASE = process.env.TD_REST_BASE as string;

function normalizeSymbol(s: string) {
  return s.replaceAll("/", "");
}

function normalizeTick(msg: any): TDNormalized | null {
  const { p, a, b, t } = msg || {};
  const symRaw = msg?.s || msg?.symbol || msg?.ev; // TD uses s sometimes; keep flexible
  if (!symRaw) return null;
  const sym = normalizeSymbol(String(symRaw));
  const bid = Number(b);
  const ask = Number(a);
  const mid = (bid + ask) / 2;
  const ts = Number(t) || Date.now();
  if (!Number.isFinite(bid) || !Number.isFinite(ask)) return null;
  return { symbol: sym, bid, ask, price: Number.isFinite(mid) ? mid : Number(p) || bid, ts };
}

export function connectTDWS({ symbols, onTick, onOpen, onError, onClose }: ConnectArgs) {
  let ws: WebSocket | null = null;
  let closed = false;
  let backoff = 1000;

  const targetUrl = TD_WS_URL?.includes("apikey=") ? TD_WS_URL : `${TD_WS_URL}?apikey=${TD_API_KEY}`;
  const subscribePayload = {
    action: "subscribe",
    params: symbols.join(","),
  };

  const open = () => {
    if (closed) return;
    ws = new WebSocket(targetUrl);

    ws.on("open", () => {
      ws?.send(JSON.stringify(subscribePayload));
      backoff = 1000;
      onOpen && onOpen();
    });

    ws.on("message", (data: WebSocket.RawData) => {
      try {
        const txt = data.toString();
        const parsed = JSON.parse(txt);
        const arr = Array.isArray(parsed) ? parsed : [parsed];
        const items: TDNormalized[] = [];
        for (const m of arr) {
          const n = normalizeTick(m);
          if (n) items.push(n);
        }
        if (items.length) onTick(items);
      } catch (e) {
        onError && onError(e);
      }
    });

    ws.on("error", (err) => {
      onError && onError(err);
    });

    ws.on("close", () => {
      onClose && onClose();
      if (closed) return;
      setTimeout(open, Math.min(backoff, 30000));
      backoff = Math.min(backoff * 2, 30000);
    });
  };

  open();

  return () => {
    closed = true;
    ws?.close();
  };
}

export async function fetchTDSnapshot(symbols: string[]): Promise<TDNormalized[]> {
  const q = symbols.map((s) => normalizeSymbol(s)).join(",");
  const url = `${TD_REST_BASE}/price?symbol=${encodeURIComponent(q)}&apikey=${TD_API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`TD snapshot failed ${res.status}`);
  const json = await res.json();
  const now = Date.now();

  // Twelve Data REST can return an object or array per symbol; normalize
  const toArray = Array.isArray(json) ? json : json?.data || Object.values(json || {});
  const items: TDNormalized[] = [];
  for (const entry of toArray) {
    const symbolRaw = entry?.symbol ?? entry?.s;
    const sym = normalizeSymbol(String(symbolRaw));
    const bid = Number(entry?.bid ?? entry?.b ?? entry?.price);
    const ask = Number(entry?.ask ?? entry?.a ?? entry?.price);
    if (!Number.isFinite(bid) || !Number.isFinite(ask)) continue;
    const price = (bid + ask) / 2;
    items.push({ symbol: sym, bid, ask, price, ts: now });
  }
  return items;
}

