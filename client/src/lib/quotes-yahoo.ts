export type YQuote = { symbol: string; price: number; ts: number };

// Keep it lean: 4 high-reliability symbols
const CORE_SYMBOLS = ["EURUSD=X", "GBPUSD=X", "USDJPY=X", "XAUUSD=X"];
const EXT_SYMBOLS: string[] = [];

function buildUrl(symbols: string[]) {
  const isDev = import.meta.env.DEV;
  const base = isDev ? "/api/yahoo-spark" : "https://query1.finance.yahoo.com/v7/finance/spark";
  const u = new URL(base);
  u.searchParams.set("symbols", symbols.join(","));
  u.searchParams.set("range", "1d");
  u.searchParams.set("interval", "1m");
  u.searchParams.set("corsDomain", "finance.yahoo.com");
  return u.toString();
}

async function fetchBatch(symbols: string[]): Promise<YQuote[]> {
  const url = buildUrl(symbols);
  try {
    const res = await fetch(url, { headers: { "Accept": "application/json" } });
    if (!res.ok) {
      if (import.meta.env.DEV) console.warn("Yahoo request failed", res.status);
      return [];
    }
    const json = await res.json();
    const result = json?.spark?.result as any[] | undefined;
    if (!Array.isArray(result)) return [];
    const quotes: YQuote[] = [];
    for (const r of result) {
      const s = r?.symbol as string;
      const closes = r?.response?.[0]?.indicators?.quote?.[0]?.close as number[] | undefined;
      const timestamps = r?.response?.[0]?.timestamp as number[] | undefined;
      if (!s || !closes || !closes.length) continue;
      const price = closes[closes.length - 1];
      const ts = timestamps && timestamps.length ? timestamps[timestamps.length - 1] * 1000 : Date.now();
      quotes.push({ symbol: s, price, ts });
    }
    if (import.meta.env.DEV) console.log("Yahoo batch ok", symbols.length, "->", quotes.length);
    return quotes;
  } catch (e) {
    if (import.meta.env.DEV) console.warn("Yahoo fetch error", e);
    return [];
  }
}

export async function fetchYahooQuotes(): Promise<YQuote[]> {
  let core = await fetchBatch(CORE_SYMBOLS);
  if ((!core || core.length === 0) && import.meta.env.DEV) {
    console.log("Yahoo batch empty, trying per-symbol fallback");
  }
  // Per-symbol fallback if batch is empty
  if (!core || core.length === 0) {
    const out: YQuote[] = [];
    for (const s of CORE_SYMBOLS) {
      const r = await fetchBatch([s]);
      if (r && r.length) out.push(...r);
    }
    core = out;
  }
  const ext = await fetchBatch(EXT_SYMBOLS);
  return [...core, ...ext];
}

export function startYahooPolling(cb: (quotes: YQuote[]) => void, intervalMs = 20000) {
  let timer: any = null;
  let stopped = false;
  const tick = async (retryCount = 0) => {
    try {
      const data = await fetchYahooQuotes();
      if (!stopped) cb(data);
      // If empty, perform up to 2 quick retries at 3s and 6s
      if (!stopped && (!data || data.length === 0) && retryCount < 2) {
        const delay = (retryCount + 1) * 3000;
        if (import.meta.env.DEV) console.log("Yahoo request empty, retry in", delay, "ms");
        timer = setTimeout(() => tick(retryCount + 1), delay);
        return;
      }
    } catch {
      // ignore
    } finally {
      if (!stopped) timer = setTimeout(() => tick(0), intervalMs);
    }
  };
  tick(0);
  return () => { stopped = true; if (timer) clearTimeout(timer); };
}
