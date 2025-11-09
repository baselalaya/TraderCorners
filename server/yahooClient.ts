import fetch from "node-fetch";

export type YFNormalized = {
  symbol: string; // EURUSD, USDJPY, XAUUSD, BTCUSD
  bid: number;
  ask: number;
  price: number;
  ts: number;
  changePercent24h?: number;
  volume24h?: number;
};

const YF_ENDPOINTS = [
  "https://query1.finance.yahoo.com/v7/finance/quote",
  "https://query2.finance.yahoo.com/v7/finance/quote"
];

const YMAP: Record<string, string> = {
  "EUR/USD": "EURUSD=X",
  // Prefer explicit cross tickers for consistency
  "USD/JPY": "USDJPY=X",
  "XAU/USD": "XAUUSD=X",
  "GBP/USD": "GBPUSD=X",
  "BTC/USD": "BTC-USD",
  "ETH/USD": "ETH-USD",
  // Commodities mapping for reliability
  "GOLD": "GC=F", // Gold Futures
  "SILVER": "SI=F", // Silver Futures
  "CRUDE OIL": "CL=F", // WTI Crude Oil Futures
  "NATURAL GAS": "NG=F",
  // explicit normalized commodity symbols
  "XAG/USD": "XAGUSD=X",
  "CL": "CL=F",
  "BZ": "BZ=F",
};

function toYFSymbol(pair: string): string | null {
  // If known mapping exists, use it; otherwise pass through for equities/indices
  return YMAP[pair] || pair;
}

function normalizeSymbolFromY(ticker: string): string {
  if (ticker === "BTC-USD") return "BTCUSD";
  if (ticker.endsWith("=X")) return ticker.replace("=X", "");
  return ticker.replaceAll("/", "");
}

function uniq<T>(arr: T[]): T[] { return Array.from(new Set(arr)); }

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export async function fetchYahooSnapshot(pairs: string[]): Promise<YFNormalized[]> {
  const primary = pairs.map(toYFSymbol).filter((s): s is string => Boolean(s));
  // Provide alternates for some instruments to improve hit rate
  const alternateMap: Record<string, string[]> = {
    "XAU/USD": ["GC=F"],
    "GOLD": ["XAUUSD=X"],
    "SILVER": ["XAGUSD=X", "SI=F"],
    "CRUDE OIL": ["BZ=F", "CL=F"],
    "NATURAL GAS": ["NG=F"],
    "USD/JPY": ["JPY=X", "USDJPY=X"],
  };
  const alternates = pairs.flatMap(p => alternateMap[p] || []);
  const tickers = uniq([...primary, ...alternates]).filter(Boolean);
  if (tickers.length === 0) return [];
  const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0 Safari/537.36",
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://finance.yahoo.com/",
    "Origin": "https://finance.yahoo.com",
  } as Record<string,string>;

  const lists: any[] = [];
  let lastStatus = 0;
  for (const chunkTickers of chunk(tickers, 6)) {
    let gotOne = false;
    for (const ep of YF_ENDPOINTS) {
      const url = `${ep}?symbols=${encodeURIComponent(chunkTickers.join(","))}`;
      const res = await fetch(url, { headers });
      lastStatus = res.status;
      if (res.ok) {
        const json = await res.json();
        const part = json?.quoteResponse?.result || [];
        lists.push(...part);
        gotOne = true;
        break;
      }
      if (res.status === 401 || res.status === 403) {
        continue;
      } else {
        break;
      }
    }
    if (!gotOne && (lastStatus === 401 || lastStatus === 403)) {
      // continue with next chunk; nothing we can do for auth errors
      continue;
    }
  }
  const list = lists;
  const now = Date.now();
  const out: YFNormalized[] = [];
  for (const r of list) {
    const price = Number(r.regularMarketPrice ?? r.postMarketPrice ?? r.preMarketPrice);
    const bid = Number(r.bid ?? price);
    const ask = Number(r.ask ?? price);
    if (!Number.isFinite(price)) continue;
    const sym = normalizeSymbolFromY(String(r.symbol));
    const pct = Number(r.regularMarketChangePercent ?? r.postMarketChangePercent ?? r.preMarketChangePercent);
    const vol = Number(r.regularMarketVolume ?? r.averageDailyVolume3Month ?? r.averageDailyVolume10Day);
    out.push({ symbol: sym, bid, ask, price: (bid + ask) / 2 || price, ts: now, 
      ...(Number.isFinite(pct) ? { changePercent24h: pct } : {}),
      ...(Number.isFinite(vol) ? { volume24h: vol } : {}),
    });
  }
  return out;
}
