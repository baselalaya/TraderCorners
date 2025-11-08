import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { marketData } from "@/lib/market-data";
import CryptoPriceStrip from "@/components/CryptoPriceStrip";
import { fetcher } from "@/lib/fetcher";
import { useQuotes } from "@/providers/QuotesProvider";

type MarketType = 'forex' | 'crypto' | 'commodities';

export default function MarketsSection() {
  const [activeMarket, setActiveMarket] = useState<MarketType>('forex');

  const tabs = [
    { id: 'forex' as MarketType, label: 'Forex' },
    { id: 'crypto' as MarketType, label: 'Crypto' },
    { id: 'commodities' as MarketType, label: 'Commodities' },
  ];

  const [fx, setFx] = useState(marketData.forex);
  const [commod, setCommod] = useState(marketData.commodities);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const quotes = useQuotes();

  // Prefer live quotes from provider; fall back to one-off fetch
  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        // If provider has data, map it; else do a one-off fetch
        const res = Object.keys(quotes).length ? null : await fetch(`/api/quotes`).catch(() => null as any);
        if (res && res.ok) {
          const json = await res.json();
          const items: any[] = Array.isArray(json?.items) ? json.items : [];
          const map = Object.fromEntries(items.map(i => [String(i.display || i.symbol || ''), i]));
          const nextFx = marketData.forex.map(x => {
            const m = map[x.symbol.replace("/", "")] || map[x.symbol];
            const price = Number(m?.price);
            const change = Number(m?.change);
            return {
              ...x,
              price: Number.isFinite(price) ? String(price) : x.price,
              change: Number.isFinite(change) ? `${change >= 0 ? '+' : ''}${change.toFixed(2)}%` : x.change,
              isPositive: Number.isFinite(change) ? change >= 0 : x.isPositive,
            };
          });
          const nextCom = marketData.commodities.map(x => {
            const aliases = [x.symbol, x.symbol.replace(' ', ''), x.symbol.replace(' ', '_'), x.symbol.toUpperCase()];
            const m = aliases.reduce((acc, k) => acc || map[k], null as any);
            const price = Number(m?.price);
            const change = Number(m?.change);
            return {
              ...x,
              price: Number.isFinite(price) ? `$${price}` : x.price,
              change: Number.isFinite(change) ? `${change >= 0 ? '+' : ''}${change.toFixed(2)}%` : x.change,
              isPositive: Number.isFinite(change) ? change >= 0 : x.isPositive,
            };
          });
          if (mounted) { setFx(nextFx); setCommod(nextCom); }
        } else if (Object.keys(quotes).length) {
          const map = quotes as any;
          const nextFx = marketData.forex.map(x => {
            const key = x.symbol.toUpperCase().replace('/', '');
            const q = map[key];
            const price = Number(q?.price);
            return {
              ...x,
              price: Number.isFinite(price) ? String(price) : x.price,
              // change not provided by backend fallback; keep previous styling
              change: x.change,
              isPositive: x.isPositive,
            };
          });
          if (mounted) setFx(nextFx);
        }
      } catch (e) {
        setError('Live data unavailable');
      } finally { setLoading(false); }
    };
    load();
    const t = setInterval(load, 30000);
    return () => { mounted = false; clearInterval(t); };
  }, [quotes]);

  const currentData = useMemo(() => {
    if (activeMarket === 'forex') return fx;
    if (activeMarket === 'commodities') return commod;
    // Build crypto list from provider (BTCUSD, ETHUSD, SOLUSD by default)
    if (activeMarket === 'crypto') {
      const syms = ["BTC/USD","ETH/USD","SOL/USD"];
      return syms.map((sym) => {
        const key = sym.toUpperCase().replace('/', '');
        const q = (quotes as any)[key];
        const price = Number(q?.price);
        return {
          symbol: sym,
          icon: sym.startsWith('BTC') ? '₿' : sym.startsWith('ETH') ? 'Ξ' : '◎',
          price: Number.isFinite(price) ? new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 3 }).format(price) : '—',
          change: '—',
          isPositive: true,
          volume: '—',
        } as any;
      });
    }
    return marketData.crypto;
  }, [activeMarket, fx, commod, quotes]);

  const formatFxPrice = (val: string | number, sym: string) => {
    const n = typeof val === 'string' ? Number(val.replace(/[^0-9.\-]/g, '')) : Number(val);
    if (!Number.isFinite(n)) return typeof val === 'string' ? val : '—';
    const key = sym.toUpperCase().replace('/', '');
    const isJPY = key.endsWith('JPY');
    return new Intl.NumberFormat(undefined, { minimumFractionDigits: isJPY ? 2 : 4, maximumFractionDigits: isJPY ? 3 : 5 }).format(n);
  };

  return (
    <section id="markets" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Real-Time Data
          </motion.div>
          
          <motion.h2 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Live Markets
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Real-time pricing across all major asset classes with institutional-grade data feeds
          </motion.p>
        </div>
        
        <motion.div 
          className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-4 md:p-8 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {/* Market Tabs */}
          <div className="flex flex-wrap justify-center mb-8 md:mb-12 gap-2">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveMarket(tab.id)}
                className={`relative px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                  activeMarket === tab.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
                aria-label={`View ${tab.label} market data`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeMarket === tab.id && (
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full blur-md"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>
          
          {/* Crypto tab now uses backend/provider quotes; no external strip */}

          {/* Market Data Cards */}
          <div className="grid gap-3 md:gap-4">
            {currentData.map((item, index) => (
              <motion.div
                key={item.symbol}
                className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-6 hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Mobile Layout */}
                <div className="relative z-10 md:hidden">
                  {/* Top Row - Asset and Action */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center text-sm font-bold text-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <span className="font-display font-semibold text-base text-foreground">{item.symbol}</span>
                        <div className="text-xs text-muted-foreground">
                          {activeMarket.charAt(0).toUpperCase() + activeMarket.slice(1)}
                        </div>
                      </div>
                    </div>
                    <motion.button
                      className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Trade
                    </motion.button>
                  </div>
                  
                  {/* Bottom Row - Data */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Price</div>
                      <div className="font-mono text-sm font-bold text-foreground">{formatFxPrice(item.price, item.symbol)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">24h Change</div>
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                        item.isPositive 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}>
                        <span className="text-xs">{item.isPositive ? '↗' : '↘'}</span>
                        {item.change}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Volume</div>
                      <div className="font-medium text-sm text-foreground">{item.volume}</div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="relative z-10 hidden md:grid grid-cols-5 gap-4 items-center">
                  {/* Asset */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-lg font-bold text-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <span className="font-display font-semibold text-lg text-foreground">{item.symbol}</span>
                      <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {activeMarket.charAt(0).toUpperCase() + activeMarket.slice(1)}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground mb-1">Price</div>
                    <div className="font-mono text-xl font-bold text-foreground">{formatFxPrice(item.price, item.symbol)}</div>
                  </div>

                  {/* Change */}
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground mb-1">24h Change</div>
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                      item.isPositive 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      <span className="text-xs">{item.isPositive ? '↗' : '↘'}</span>
                      {item.change}
                    </div>
                  </div>

                  {/* Volume */}
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground mb-1">Volume</div>
                    <div className="font-medium text-foreground">{item.volume}</div>
                  </div>

                  {/* Action */}
                  <div className="flex justify-end">
                    <motion.a href="https://my.tradercorners.com/en/register/account-types" target="_blank" rel="noopener noreferrer"
                      className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Trade Now
                    </motion.a>
                  </div>
                </div>

                {/* Pulse Animation */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-80" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
