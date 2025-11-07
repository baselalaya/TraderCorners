export type TDQuote = { symbol: string; price: number; ts: number };

// Twelve Data /price endpoint expects plain symbols
const DEFAULT_SYMBOLS = ["EURUSD", "GBPUSD", "USDJPY", "XAUUSD"];

function buildUrl(symbols: string[]) {
  const base = import.meta.env.VITE_TWELVEDATA_BASE || "https://api.twelvedata.com";
  const key = import.meta.env.VITE_TWELVEDATA_API_KEY;
  const u = new URL(`${base}/price`);
  u.searchParams.set("symbol", symbols.join(","));
  u.searchParams.set("apikey", key || "");
  return u.toString();
}

export async function fetchTDQuotes(symbols: string[] = DEFAULT_SYMBOLS): Promise<TDQuote[]> {
  const key = import.meta.env.VITE_TWELVEDATA_API_KEY;
  if (!key) {
    if (import.meta.env.DEV) console.warn("TwelveData: missing VITE_TWELVEDATA_API_KEY");
    return [];
  }
  const url = buildUrl(symbols);
  if (import.meta.env.DEV) console.log("TwelveData request:", url);
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (res.status === 429) {
    // Signal rate limit by returning special marker in price -1
    if (import.meta.env.DEV) console.warn("TwelveData: rate limited (429)");
    // Return empty to let caller handle backoff
    return [];
  }
  if (!res.ok) return [];
  const json = await res.json();
  const now = Date.now();
  const out: TDQuote[] = [];
  // Twelve Data returns either an object per symbol keyed by symbol, or a single object
  if (symbols.length > 1 && typeof json === "object") {
    for (const s of symbols) {
      const entry = json[s];
      const p = entry?.price ?? entry?.close ?? entry?.value;
      if (p != null) out.push({ symbol: s, price: Number(p), ts: now });
    }
  } else if (json && json.price != null) {
    out.push({ symbol: symbols[0], price: Number(json.price), ts: now });
  }
  return out;
}

export function startTDPolling(cb: (quotes: TDQuote[]) => void, symbols: string[] = DEFAULT_SYMBOLS, intervalMs = 30000) {
  let timer: any = null;
  let stopped = false;
  let pausedUntil = 0;
  const tick = async () => {
    try {
      const now = Date.now();
      if (now < pausedUntil) {
        // still backing off
        return;
      }
      const data = await fetchTDQuotes(symbols);
      if (!stopped) cb(data);
      // If rate limited (empty data and not ok), back off for 60s
      if ((!data || data.length === 0) && resyncBackoffNeeded()) {
        pausedUntil = Date.now() + 60000; // 60s
      }
    } catch {}
    finally {
      if (!stopped) {
        const jitter = Math.floor(Math.random() * 5000); // 0-5s jitter
        timer = setTimeout(tick, intervalMs + jitter);
      }
    }
  };
  // fire immediately
  tick();
  return () => { stopped = true; if (timer) clearTimeout(timer); };
}

function resyncBackoffNeeded() {
  // Placeholder hook for smarter detection; currently always backoff on empty.
  return true;
}
