// client/src/components/hero-section.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Rocket, Play } from "lucide-react";
import { motion } from "framer-motion";

interface TickerData { symbol: string; price: number; change: number; isPositive: boolean }

const formatNumber = (n: number) => {
  if (Number.isNaN(n)) return "--";
  return Intl.NumberFormat(undefined, { maximumFractionDigits: 4 }).format(n);
};

const formatChange = (c: number) => {
  if (Number.isNaN(c)) return "--";
  const sign = c >= 0 ? "+" : "";
  return `${sign}${c.toFixed(2)}%`;
};

export default function HeroSection() {
  const [status, setStatus] = useState<"idle"|"ok"|"polling"|"error">("idle");
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [map, setMap] = useState<Record<string, {symbol:string; price:number; change:number; isPositive:boolean}>>({});
  const wsRef = useRef<WebSocket|null>(null);
  const pollRef = useRef<any>(null);
  const prevPriceRef = useRef<Record<string, number>>({});
  const ORDER = (import.meta as any).env.VITE_QUOTES_ORDER
    ? String((import.meta as any).env.VITE_QUOTES_ORDER).split(',').map((s:string)=>s.trim())
    : ["EURUSD","USDJPY","XAUUSD","BTCUSD"];

  const tickerData: TickerData[] = useMemo(() => {
    const vals = Object.values(map);
    const by = Object.fromEntries(vals.map(v => [v.symbol, v]));
    const ordered: TickerData[] = [];
    for (const s of ORDER) {
      if (by[s]) ordered.push(by[s] as TickerData);
    }
    // limit to first 4 as per ORDER
    return ordered.slice(0, 4);
  }, [map]);
  const feedConnected = tickerData.length > 0;

  useEffect(() => {
    const proto = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const base = (import.meta as any).env.VITE_QUOTES_BASE || '';
    const wsUrl = `${proto}://${(base || window.location.host).replace(/^https?:\/\//,'')}/api/quotes`;
    let triedOnce = false;
    const openWS = () => {
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;
      ws.onopen = () => {
        setStatus("ok");
        if (pollRef.current) { clearInterval(pollRef.current); pollRef.current = null; }
      };
      ws.onmessage = (ev) => {
        try {
          const data = JSON.parse((ev as MessageEvent).data as any);
          const arr = Array.isArray(data?.items) ? data.items : [];
          setMap((prev) => {
            const next = { ...prev } as any;
            for (const it of arr) {
              const sym = (it.symbol || it.display || '').toString();
              const price = Number(it.price ?? NaN);
              const prev = prevPriceRef.current[sym];
              const diff = prev != null ? price - prev : 0;
              const change = Number.isFinite(it.change) ? Number(it.change) : (prev ? (diff / prev) * 100 : 0);
              const isPositive = diff >= 0;
              if (!sym) continue;
              next[sym] = { symbol: sym, price, change, isPositive };
              if (Number.isFinite(price)) prevPriceRef.current[sym] = price;
            }
            return next;
          });
          setLastUpdated(new Date().toLocaleTimeString());
        } catch {}
      };
      ws.onerror = () => setStatus("error");
      ws.onclose = () => {
        setStatus("polling");
        // Try SSE fallback first
        const es = new EventSource(`${base || ''}/api/quotes/events`);
        es.onmessage = (ev) => {
          try {
            const data = JSON.parse(ev.data);
            const arr = Array.isArray(data?.items) ? data.items : [];
            setMap((prev) => {
              const next = { ...prev } as any;
              for (const it of arr) {
                const sym = (it.symbol || it.display || '').toString();
                const price = Number(it.price ?? NaN);
                const prev = prevPriceRef.current[sym];
                const diff = prev != null ? price - prev : 0;
                const change = Number.isFinite(it.change) ? Number(it.change) : (prev ? (diff / prev) * 100 : 0);
                const isPositive = diff >= 0;
                if (!sym) continue;
                next[sym] = { symbol: sym, price, change, isPositive };
                if (Number.isFinite(price)) prevPriceRef.current[sym] = price;
              }
              return next;
            });
            setStatus('ok');
            setLastUpdated(new Date().toLocaleTimeString());
          } catch {}
        };
        es.onerror = () => {
          es.close();
          // fallback to REST polling
          if (!pollRef.current) {
            pollRef.current = setInterval(async () => {
              try {
                const res = await fetch(`${base || ''}/api/quotes`);
                if (!res.ok) return;
                const data = await res.json();
                const arr = Array.isArray(data?.items) ? data.items : [];
                setMap((prev) => {
                  const next = { ...prev } as any;
                  for (const it of arr) {
                    const sym = (it.symbol || it.display || '').toString();
                    const price = Number(it.price ?? NaN);
                    const prev = prevPriceRef.current[sym];
                    const diff = prev != null ? price - prev : 0;
                    const change = Number.isFinite(it.change) ? Number(it.change) : (prev ? (diff / prev) * 100 : 0);
                    const isPositive = diff >= 0;
                    if (!sym) continue;
                    next[sym] = { symbol: sym, price, change, isPositive };
                    if (Number.isFinite(price)) prevPriceRef.current[sym] = price;
                  }
                  return next;
                });
                setLastUpdated(new Date().toLocaleTimeString());
              } catch {}
            }, 5000);
          }
        };
        if (triedOnce) setTimeout(openWS, 1500);
        triedOnce = true;
      };
    };
    openWS();
    return () => {
      if (wsRef.current) wsRef.current.close();
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Static minimal accents */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-20 left-20 w-3 h-3 bg-primary/30 rounded-full"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-primary/40 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-primary/35 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-primary/30 rounded-full"></div>
      </div>

      {/* Subtle glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Live feed status */}
        <div className="mb-4 flex items-center justify-center lg:justify-start text-xs text-muted-foreground">
          <div
            className={`w-2 h-2 rounded-full mr-2 ${feedConnected ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
          />
          <span>
            {status === 'ok' && lastUpdated && `Live quotes updated ${lastUpdated}`}
            {status === 'polling' && 'Fetching live quotes…'}
            {status === 'error' && 'Live quotes error'}
            {status === 'idle' && 'Initializing…'}
          </span>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[80vh] lg:min-h-[60vh]">
          {/* Left */}
          <motion.div
            className="scroll-reveal space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <div className="space-y-3 lg:space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                <div className="relative">
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300">Trade</span>{" "}
                  <span className="text-primary font-bold inline-block transform hover:scale-110 transition-transform duration-300 hover:rotate-1 hero-highlight">
                    Bold.
                  </span>
                </div>
                <div className="relative mt-1 lg:mt-2">
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300">Win</span>{" "}
                  <span className="text-primary font-bold inline-block transform hover:scale-110 transition-transform duration-300 hover:-rotate-1 hero-highlight">
                    Smart.
                  </span>
                </div>
              </h1>
            </div>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-md lg:max-w-lg mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Experience next-generation trading with our revolutionary platform. Lightning-fast execution, real-time
              insights, and award-winning technology.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="https://my.tradercorners.com/en/register/account-types"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group flex items-center justify-center text-sm lg:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Start trading with premium features"
              >
                <Rocket className="mr-2 group-hover:translate-x-1 transition-transform" size={18} />
                <span className="relative z-10 font-bold">Start Trading</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              <motion.a
                href="https://my.tradercorners.com/en/register/account-types"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary bg-transparent px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 relative overflow-hidden group flex items-center justify-center text-sm lg:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Try our trading demo"
              >
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                <span className="relative z-10 font-bold">Try Demo</span>
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                500K+ Active Traders
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                $2.5B+ Daily Volume
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Live Markets */}
          <motion.div
            className="relative w-full order-1 lg:order-2"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <div className="relative space-y-3 lg:space-y-6">
              {/* Mobile Header */}
              <motion.div
                className="flex items-center justify-center space-x-2 mb-3 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className={`w-2 h-2 rounded-full ${feedConnected ? "bg-green-500 animate-pulse" : "bg-gray-400"}`} />
                <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Live Markets</span>
              </motion.div>

              {/* Mobile Marquee */}
              <div className="block lg:hidden overflow-hidden -mx-6">
                {feedConnected ? (
                  <div className="flex space-x-2 animate-marquee px-6">
                    {[...tickerData, ...tickerData].map((item, index) => (
                      <div
                        key={`${item.symbol}-${index}`}
                        className="flex-shrink-0 bg-white/8 backdrop-blur-xl border border-white/15 rounded-lg p-2 min-w-[120px]"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-primary">{item.symbol}</span>
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.isPositive ? "bg-emerald-400" : "bg-red-400"
                            }`}
                          />
                        </div>
                        <div className="text-xs font-bold text-foreground font-mono mb-1">
                          {formatNumber(item.price)}
                        </div>
                        <div
                          className={`text-xs font-medium ${
                            item.isPositive ? "text-emerald-400" : "text-red-400"
                          }`}
                        >
                          {item.isPositive ? "↗" : "↘"} {formatChange(item.change)}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="px-6 py-3 text-center text-xs text-muted-foreground">Waiting for live prices…</div>
                )}
              </div>

              {/* Desktop Header */}
              <motion.div
                className="hidden lg:flex items-center justify-start space-x-3 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div
                  className={`w-3 h-3 rounded-full ${feedConnected ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}
                />
                <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">Live Markets</span>
              </motion.div>

              {/* Desktop Grid */}
              <div className="hidden lg:grid grid-cols-2 gap-4 max-w-none">
                {(feedConnected ? tickerData : Array.from({ length: 6 }, (_, i) => null)).map((item, index) => (
                  <motion.div
                    key={item ? (item as TickerData).symbol : `skeleton-${index}`}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * index, duration: 0.5 }}
                    whileHover={{ scale: item ? 1.02 : 1.0 }}
                  >
                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl lg:rounded-2xl p-4 lg:p-6 hover:bg-white/15 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-2 lg:mb-3">
                          <span className="text-xs font-semibold text-primary tracking-wider uppercase">
                            {item ? (item as TickerData).symbol : "— —"}
                          </span>
                          <div
                            className={`w-2 h-2 rounded-full ${
                              item
                                ? (item as TickerData).isPositive
                                  ? "bg-emerald-400"
                                  : "bg-red-400"
                                : "bg-gray-300 animate-pulse"
                            }`}
                          />
                        </div>
                        <div className="text-lg lg:text-2xl font-bold text-foreground mb-2 font-mono">
                          {item ? formatNumber((item as TickerData).price) : "— — —"}
                        </div>
                        <div
                          className={`inline-flex items-center space-x-1 px-2 lg:px-3 py-1 rounded-full text-xs font-semibold ${
                            item
                              ? (item as TickerData).isPositive
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                : "bg-red-500/20 text-red-400 border border-red-500/30"
                              : "bg-gray-200/40 text-gray-400 border border-gray-300/40"
                          }`}
                        >
                          {item ? (
                            <>
                              <span className={(item as TickerData).isPositive ? "rotate-45" : "-rotate-45"}>→</span>
                              <span>{formatChange((item as TickerData).change)}</span>
                            </>
                          ) : (
                            <span>Loading…</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trend indicator (now dynamic) 
              <motion.div className="mt-6 lg:mt-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                <div
                  className={`inline-flex items-center space-x-2 px-3 lg:px-4 py-2 border rounded-full ${
                    feedConnected ? "bg-emerald-500/10 border-emerald-500/20" : "bg-gray-200/50 border-gray-300/40"
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${feedConnected ? "bg-emerald-400 animate-bounce" : "bg-gray-400"}`} />
                  <span
                    className={`text-xs lg:text-sm font-medium ${
                      feedConnected ? "text-emerald-400" : "text-gray-500"
                    }`}
                  >
                    {feedConnected ? "Live feed connected" : "Awaiting live feed"}
                  </span>
                </div>
                {lastUpdated && feedConnected && (
                  <div className="mt-2 text-xs text-muted-foreground">Last updated: {lastUpdated}</div>
                )}
              </motion.div>*/}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll</div>
        <div className="scroll-line"></div>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}
