// client/src/components/hero-section.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import TradingViewTickerTape from "@/components/TradingViewTickerTape";
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

          {/* Right - Live Markets removed as requested */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll</div>
        <div className="scroll-line"></div>
        <div className="scroll-arrow"></div>
      </div>

      {/* Slim ticker tape at bottom edge of hero */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="border-t border-white/10 bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-black/10">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <TickerTapeClient />
          </div>
        </div>
      </div>
    </section>
  );
}

// Client-only wrapper to avoid SSR issues and ESM require problems
function TickerTapeClient() {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => setReady(true), []);
  if (!ready) return <div className="h-10 w-full animate-pulse rounded bg-neutral-800/40" aria-hidden />;
  return (
    <TradingViewTickerTape
      symbols={[
        { proName: "NASDAQ:AAPL", title: "AAPL" },
        { proName: "NASDAQ:MSFT", title: "MSFT" },
        { proName: "NASDAQ:TSLA", title: "TSLA" },
        { proName: "BINANCE:BTCUSDT", title: "BTC/USDT" },
        { proName: "BINANCE:ETHUSDT", title: "ETH/USDT" },
        { proName: "FX:EURUSD", title: "EUR/USD" },
      ]}
      colorTheme="light"
      transparent
    />
  );
}
