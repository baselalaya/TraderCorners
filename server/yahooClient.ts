import fetch from "node-fetch";

export type YFNormalized = {
  symbol: string; // EURUSD, USDJPY, XAUUSD, BTCUSD
  bid: number;
  ask: number;
  price: number;
  ts: number;
};

const YF_ENDPOINT = "https://query1.finance.yahoo.com/v7/finance/quote";

const YMAP: Record<string, string> = {
  "EUR/USD": "EURUSD=X",
  "USD/JPY": "JPY=X", // Yahoo also supports USDJPY=X; JPY=X yields USD/JPY price
  "XAU/USD": "XAUUSD=X",
  "GBP/USD": "GBPUSD=X",
  "BTC/USD": "BTC-USD",
};

function toYFSymbol(pair: string): string | null {
  return YMAP[pair] || null;
}

function normalizeSymbolFromY(ticker: string): string {
  if (ticker === "BTC-USD") return "BTCUSD";
  if (ticker.endsWith("=X")) return ticker.replace("=X", "");
  return ticker.replaceAll("/", "");
}

export async function fetchYahooSnapshot(pairs: string[]): Promise<YFNormalized[]> {
  const tickers = pairs.map(toYFSymbol).filter((s): s is string => Boolean(s));
  if (tickers.length === 0) return [];
  const url = `${YF_ENDPOINT}?symbols=${encodeURIComponent(tickers.join(","))}`;
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`Yahoo quotes failed ${res.status}`);
  const json = await res.json();
  const list = json?.quoteResponse?.result || [];
  const now = Date.now();
  const out: YFNormalized[] = [];
  for (const r of list) {
    const price = Number(r.regularMarketPrice ?? r.postMarketPrice ?? r.preMarketPrice);
    const bid = Number(r.bid ?? price);
    const ask = Number(r.ask ?? price);
    if (!Number.isFinite(price)) continue;
    const sym = normalizeSymbolFromY(String(r.symbol));
    out.push({ symbol: sym, bid, ask, price: (bid + ask) / 2 || price, ts: now });
  }
  return out;
}

