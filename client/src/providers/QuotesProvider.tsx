import React from "react";

type Quote = { symbol: string; price: number; bid?: number; ask?: number; ts?: number };
type QuotesMap = Record<string, Quote>;

type Ctx = {
  quotes: QuotesMap;
  get: (symbol: string) => Quote | undefined;
};

const QuotesContext = React.createContext<Ctx | null>(null);

export function QuotesProvider({ children }: { children: React.ReactNode }) {
  const [quotes, setQuotes] = React.useState<QuotesMap>({});

  React.useEffect(() => {
    let es: EventSource | null = null;
    let poll: any = null;
    let aborted = false;

    const apply = (items: any[]) => {
      if (!Array.isArray(items) || !items.length) return;
      setQuotes((prev) => {
        const next: QuotesMap = { ...prev };
        for (const it of items) {
          const key = String(it.symbol || it.display || "").toUpperCase().replaceAll("/", "");
          if (!key) continue;
          const price = Number(it.price ?? it.bid ?? it.ask);
          if (!Number.isFinite(price)) continue;
          next[key] = { symbol: key, price, bid: Number(it.bid), ask: Number(it.ask), ts: Number(it.ts) };
        }
        return next;
      });
    };

    const startSSE = () => {
      try {
        es = new EventSource(`/api/quotes/events`);
        es.onmessage = (ev) => {
          try { const j = JSON.parse(ev.data); apply(j.items); } catch {}
        };
        es.onerror = () => {
          es?.close();
          es = null;
          startPoll();
        };
      } catch {
        startPoll();
      }
    };

    const startPoll = () => {
      if (poll) return;
      const load = async () => {
        try {
          const res = await fetch(`/api/quotes`, { cache: "no-store" });
          if (!res.ok) return;
          const j = await res.json();
          apply(j.items);
        } catch {}
      };
      load();
      poll = setInterval(load, 15000);
    };

    startSSE();

    return () => {
      aborted = true;
      es?.close();
      if (poll) clearInterval(poll);
    };
  }, []);

  const get = React.useCallback((symbol: string) => {
    const key = String(symbol).toUpperCase().replaceAll("/", "");
    return quotes[key];
  }, [quotes]);

  const value = React.useMemo<Ctx>(() => ({ quotes, get }), [quotes, get]);
  return <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>;
}

export function useQuote(symbol: string): Quote | undefined {
  const ctx = React.useContext(QuotesContext);
  if (!ctx) return undefined;
  return ctx.get(symbol);
}

export function useQuotes(): QuotesMap {
  const ctx = React.useContext(QuotesContext);
  return ctx?.quotes || {};
}

