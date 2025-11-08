"use client";
import React from "react";
import { fetcher } from "../lib/fetcher";

export type CryptoId = "bitcoin" | "ethereum" | string;

type Props = {
  ids?: CryptoId[];
  vsCurrency?: "usd" | "aed" | "eur";
  refreshMs?: number;
  className?: string;
};

type Prices = Record<string, { [k: string]: number } & { usd?: number; eur?: number; aed?: number; usd_24h_change?: number; eur_24h_change?: number; aed_24h_change?: number }>;

function formatNumber(n: number, currency: string) {
  try {
    return new Intl.NumberFormat(undefined, { style: "currency", currency: currency.toUpperCase() }).format(n);
  } catch {
    return n.toLocaleString();
  }
}

const CryptoPriceStrip: React.FC<Props> = ({
  ids = ["bitcoin", "ethereum"],
  vsCurrency = "usd",
  refreshMs = 30000,
  className = "",
}) => {
  const [data, setData] = React.useState<Prices | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  const load = React.useCallback(async () => {
    try {
      setError(null);
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(ids.join(","))}&vs_currencies=${encodeURIComponent(vsCurrency)}&include_24hr_change=true`;
      const json = await fetcher<Prices>(url, { cache: "no-store" });
      setData(json);
    } catch (e: any) {
      setError("Temporarily unavailable");
    } finally {
      setLoading(false);
    }
  }, [ids, vsCurrency]);

  React.useEffect(() => {
    let mounted = true;
    load();
    const t = setInterval(() => mounted && load(), Math.max(5000, refreshMs));
    return () => {
      mounted = false;
      clearInterval(t);
    };
  }, [load, refreshMs]);

  const items = ids.map((id) => {
    const d = data?.[id];
    const price = d?.[vsCurrency];
    const changeKey = `${vsCurrency}_24h_change` as const;
    const change = (d as any)?.[changeKey] as number | undefined;
    return { id, price, change };
  });

  return (
    <div className={"flex flex-col gap-2 " + className} aria-label="Crypto prices strip">
      <div className="relative">
        <div className="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-700 py-1" role="list">
          {loading && (
            <div className="flex gap-2" aria-hidden>
              {Array.from({ length: ids.length }).map((_, i) => (
                <div key={i} className="h-9 w-28 animate-pulse rounded-md bg-neutral-800/60" />
              ))}
            </div>
          )}
          {!loading && error && (
            <div role="status" aria-live="polite" className="text-sm text-neutral-400 px-2 py-1">
              {error}
            </div>
          )}
          {!loading && !error && (
            <>
              {items.map(({ id, price, change }) => {
                const sym = id.toUpperCase().slice(0, 4);
                const hasPrice = typeof price === "number" && isFinite(price);
                const pretty = hasPrice ? formatNumber(price!, vsCurrency) : "—";
                const hasChange = typeof change === "number" && isFinite(change);
                const pos = (change ?? 0) >= 0;
                return (
                  <div
                    key={id}
                    role="listitem"
                    className="whitespace-nowrap rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm flex items-center gap-2"
                    aria-label={`${id} price`}
                  >
                    <span className="font-medium text-neutral-100">{sym}</span>
                    <span className="text-neutral-200">{pretty}</span>
                    {hasChange && (
                      <span className={pos ? "text-emerald-400" : "text-red-400"} aria-label="24h change">
                        {pos ? "+" : ""}
                        {change!.toFixed(2)}%
                      </span>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className="text-xs text-neutral-500 flex items-center gap-2">
        <span>Data by</span>
        <a href="https://www.coingecko.com" target="_blank" rel="nofollow noopener noreferrer" className="underline-offset-2 hover:underline">
          CoinGecko
        </a>
      </div>
    </div>
  );
};

export default CryptoPriceStrip;

