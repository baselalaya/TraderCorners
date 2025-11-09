import { marketData } from "@/lib/market-data";
import { useQuotes } from "@/providers/QuotesProvider";
import { motion } from "framer-motion";

type MarketGroup = keyof typeof marketData;

type Props = {
  title: string;
  group: MarketGroup;
  symbols?: string[]; // optional subset filter
};

export default function RelatedMarkets({ title, group, symbols }: Props) {
  const quotes = useQuotes();
  // When explicit symbols provided, bypass static marketData filtering and build rows from symbols list
  const data = (symbols && symbols.length > 0)
    ? symbols.map((s) => ({
        symbol: s,
        icon: brandIcon(s),
        price: "",
        change: "",
        isPositive: true,
        volume: "",
      }))
    : marketData[group];

  if (!data.length) return null;

  return (
    <section className="mt-12">
      <div className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-2xl md:text-3xl font-semibold">{title}</h3>
        </div>
        <div className="grid gap-3">
          {data.map((item, index) => (
            <motion.div
              key={item.symbol}
              className="group relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-6 hover:bg-card/60 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-sm md:text-base font-bold text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-base md:text-lg">{item.symbol}</div>
                    <div className="text-xs text-muted-foreground">{group.charAt(0).toUpperCase() + group.slice(1)}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 items-center text-right">
                  <div>
                    <div className="text-xs text-muted-foreground">Price</div>
                    {(() => {
                      const key = toQuoteKey(item.symbol);
                      const q = (quotes as any)[key];
                      const p = Number(q?.price);
                      if (Number.isFinite(p)) {
                        return (
                          <div className="font-mono font-bold">{formatPriceLikeHero(p, key, group)}</div>
                        );
                      }
                      return <span className="text-muted-foreground">—</span>;
                    })()}
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">24h</div>
                    {(() => {
                      const key = toQuoteKey(item.symbol);
                      const q = (quotes as any)[key];
                      const price = Number(q?.price);
                      const prev = Number(q?.prev);
                      const pctField = Number((q as any)?.changePercent24h);
                      let pct: number | null = null;
                      if (Number.isFinite(pctField)) {
                        pct = pctField;
                      } else if (Number.isFinite(price) && Number.isFinite(prev) && prev !== 0) {
                        pct = ((price - prev) / prev) * 100;
                      }
                      if (pct == null) {
                        // Fallback to static if live delta unknown
                        return (
                          <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${item.isPositive ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                            <span className="text-xs">{item.isPositive ? '↗' : '↘'}</span>
                            {item.change}
                          </div>
                        );
                      }
                      const up = pct >= 0;
                      return (
                        <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${up ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                          <span className="text-xs">{up ? '↗' : '↘'}</span>
                          {pct.toFixed(2)}%
                        </div>
                      );
                    })()}
                  </div>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Normalize display symbol to quotes key (matches HeroPriceTicket logic + mappings)
function toQuoteKey(display: string): string {
  const s = String(display).trim().toUpperCase();
  // Map common commodities display names to symbols used by quotes
  if (s === 'GOLD') return 'XAUUSD';
  if (s === 'SILVER') return 'XAGUSD';
  if (s === 'CRUDE OIL' || s === 'WTI' || s === 'WTI CRUDE (CL)') return 'CL';
  // Remove slash for FX and crypto pairs e.g., EUR/USD -> EURUSD, BTC/USD -> BTCUSD
  return s.replaceAll('/', '');
}

function formatPriceLikeHero(n: number, key: string, group: string) {
  // FX formatting like HeroPriceTicket
  if (group === 'forex' || key.length === 6) {
    const isJPY = key.endsWith('JPY');
    return new Intl.NumberFormat(undefined, { minimumFractionDigits: isJPY ? 2 : 4, maximumFractionDigits: isJPY ? 3 : 5 }).format(n);
  }
  // Commodities fixed 2 decimals
  if (group === 'commodities' || key === 'XAUUSD' || key === 'XAGUSD' || key === 'CL') {
    return new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
  }
  // Crypto 2–3 decimals
  if (group === 'crypto') {
    return new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 3 }).format(n);
  }
  // Default fallback
  return new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 }).format(n);
}
function brandIcon(sym: string): string {
  const s = String(sym).toUpperCase();
  const map: Record<string, string> = {
    // Stocks
    AAPL: "A",
    MSFT: "M",
    NVDA: "N",
    AMZN: "A",
    TSLA: "T",
    META: "M",
    GOOGL: "G",
    GOOG: "G",
    // Indices
    "^GSPC": "S&P",
    "^NDX": "NDX",
    "^DJI": "DJI",
    // FX
    "EUR/USD": "€/$",
    "GBP/USD": "£/$",
    "USD/JPY": "$/¥",
    "AUD/USD": "A/$",
    // Commodities/Crypto
    "XAU/USD": "Au",
    GOLD: "Au",
    "XAG/USD": "Ag",
    SILVER: "Ag",
    "CRUDE OIL": "🛢",
    BTC: "₿",
    "BTC/USD": "₿",
    ETH: "Ξ",
    "ETH/USD": "Ξ",
  };
  return map[s] || s.slice(0, 2);
}

// volume formatting removed with column
