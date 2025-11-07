import { useEffect, useMemo, useRef, useState } from "react";
import { startTDPolling, TDQuote } from "@/lib/quotes-twelvedata";
import { startTDWebSocket } from "@/lib/quotes-twelvedata-ws";

type Conf = { sym: string; dp: number; display: string };

const CONFIG: Conf[] = [
  { sym: "EURUSD", dp: 5, display: "EURUSD" },
  { sym: "GBPUSD", dp: 5, display: "GBPUSD" },
  { sym: "USDJPY", dp: 2, display: "USDJPY" },
  { sym: "XAUUSD", dp: 2, display: "XAUUSD" },
];

export type QuoteItem = { display: string; price: string; change: string; isUp: boolean };

export function useLiveQuotes() {
  const [items, setItems] = useState<QuoteItem[]>(CONFIG.map(c => ({ display: c.display, price: "—", change: "", isUp: true })));
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<'connecting'|'ok'|'error'|'no-key'|'rate_limited'>("connecting");

  // Track first observed prices to compute % change
  const base = useRef<Record<string, number>>({});
  const latestRef = useRef<Record<string, { price: number; changePct: number; isUp: boolean }>>({});
  const mapWsToKey = useMemo(() => ({
    "EUR/USD": "EURUSD",
    "GBP/USD": "GBPUSD",
    "USD/JPY": "USDJPY",
    "XAU/USD": "XAUUSD",
  } as Record<string,string>), []);
  const wsSymbols = useMemo(() => Object.keys(mapWsToKey), [mapWsToKey]);

  const hasTD = Boolean(import.meta.env.VITE_TWELVEDATA_API_KEY);
  const tdWsUrl = import.meta.env.VITE_TWELVEDATA_WS as string | undefined;

  useEffect(() => {
    setLoading(true);
    if (!hasTD) {
      setStatus('no-key');
      setLoading(false);
      return;
    }
    // Prefer WebSocket if WS URL is set, with REST backfill safety net
    if (tdWsUrl && hasTD) {
      const baseMap = base.current; // baseline per symbol for % calc
      const stopWs = startTDWebSocket(wsSymbols, (q) => {
        const key = mapWsToKey[q.symbol];
        if (!key) return;
        const prev = baseMap[key] ?? q.price;
        if (baseMap[key] === undefined) baseMap[key] = q.price;
        const diff = q.price - prev;
        const pct = prev ? (diff / prev) * 100 : 0;
        latestRef.current[key] = { price: q.price, changePct: pct, isUp: diff >= 0 };
        setItems(prevItems => {
          const next = CONFIG.map(({ sym, dp, display }) => {
            const l = latestRef.current[sym];
            if (!l) {
              const existing = prevItems.find(it => it.display === display);
              return existing ?? { display, price: "—", change: "", isUp: true };
            }
            return { display, price: l.price.toFixed(dp), change: `${l.isUp ? "+" : ""}${l.changePct.toFixed(2)}%`, isUp: l.isUp };
          });
          return next;
        });
        setLastUpdated(new Date().toLocaleTimeString());
        setLoading(false);
        setStatus('ok');
      }, { url: tdWsUrl });

      // REST backfill every ~30s with jitter, merges into latest map
      const stopRest = startTDPolling((quotes: TDQuote[]) => {
        const map = new Map(quotes.map(q => [q.symbol, q] as const));
        let changed = false;
        map.forEach((q, sym) => {
          const prev = baseMap[sym] ?? q.price;
          if (baseMap[sym] === undefined) baseMap[sym] = q.price;
          const diff = q.price - prev;
          const pct = prev ? (diff / prev) * 100 : 0;
          latestRef.current[sym] = { price: q.price, changePct: pct, isUp: diff >= 0 };
          changed = true;
        });
        if (changed) {
          setItems(prevItems => CONFIG.map(({ sym, dp, display }) => {
            const l = latestRef.current[sym];
            if (!l) {
              const existing = prevItems.find(it => it.display === display);
              return existing ?? { display, price: "—", change: "", isUp: true };
            }
            return { display, price: l.price.toFixed(dp), change: `${l.isUp ? "+" : ""}${l.changePct.toFixed(2)}%`, isUp: l.isUp };
          }));
          setLastUpdated(new Date().toLocaleTimeString());
          setLoading(false);
          setStatus('ok');
        }
      }, CONFIG.map(c => c.sym), 30000);

      return () => { stopWs(); stopRest(); };
    } else if (hasTD) {
      const stop = startTDPolling((quotes: TDQuote[]) => {
        const map = new Map(quotes.map(q => [q.symbol, q] as const));
        const next = CONFIG.map(({ sym, dp, display }) => {
          const q = map.get(sym);
          if (!q) return { display, price: "—", change: "", isUp: true };
          const prev = base.current[sym] ?? q.price;
          if (base.current[sym] === undefined) base.current[sym] = q.price;
          const diff = q.price - prev;
          const pct = prev ? (diff / prev) * 100 : 0;
          return { display, price: q.price.toFixed(dp), change: `${diff >= 0 ? "+" : ""}${pct.toFixed(2)}%`, isUp: diff >= 0 };
        });
        setItems(next);
        setLastUpdated(new Date().toLocaleTimeString());
        setLoading(false);
        const anyPrice = next.some(i => i.price !== '—');
        setStatus(anyPrice ? 'ok' : 'rate_limited');
      }, CONFIG.map(c => c.sym), 10000);
      return () => { stop(); };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (import.meta.env.DEV) {
    // Lightweight dev logs to help diagnose provider selection and data flow
    // eslint-disable-next-line no-console
    console.log("Quotes provider:", "twelvedata (rest-forced)");
  }

  return { items, lastUpdated, loading, status };
}
