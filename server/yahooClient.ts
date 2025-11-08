import fetch from "node-fetch";

export type YFNormalized = {
  symbol: string; // EURUSD, USDJPY, XAUUSD, BTCUSD
  bid: number;
  ask: number;
  price: number;
  ts: number;
};

const YF_ENDPOINTS = [
  "https://query1.finance.yahoo.com/v7/finance/quote",
  "https://query2.finance.yahoo.com/v7/finance/quote"
];

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
  const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0 Safari/537.36",
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://finance.yahoo.com/",
    "Origin": "https://finance.yahoo.com",
  } as Record<string,string>;

  let json: any = null;
  let lastStatus = 0;
  for (const ep of YF_ENDPOINTS) {
    const url = `${ep}?symbols=${encodeURIComponent(tickers.join(","))}`;
    const res = await fetch(url, { headers });
    lastStatus = res.status;
    if (res.ok) {
      json = await res.json();
      break;
    }
    if (res.status === 401 || res.status === 403) {
      // try next endpoint
      continue;
    } else {
      // non-auth error, break
      break;
    }
  }
  if (!json) {
    if (lastStatus === 401 || lastStatus === 403) return [];
    throw new Error(`Yahoo quotes failed ${lastStatus || 'unknown'}`);
  }
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
