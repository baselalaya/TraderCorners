// client/src/components/hero-section.tsx
import React, { useEffect } from "react";
import { Rocket, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useQuotes } from "@/providers/QuotesProvider";
import HeroPriceTicket from "@/components/HeroPriceTicket";

const formatNumber = (n: number) => {
  if (Number.isNaN(n)) return "--";
  return Intl.NumberFormat(undefined, { maximumFractionDigits: 4 }).format(n);
};

export default function HeroSection() {
  const quotes = useQuotes();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/tradercorners-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
        {/* White overlay for readability */}
        <div className="absolute inset-0 bg-white/95" aria-hidden></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Live feed status (provider-based) */}
        {/* <div className="mb-4 flex items-center justify-center text-xs text-muted-foreground">
          <div className={`w-2 h-2 rounded-full mr-2 ${Object.keys(quotes).length ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
          <span>{Object.keys(quotes).length ? 'Live quotes active' : 'Waiting for live quotes…'}</span>
        </div> */}

        {/* Centered single-column layout */}
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          <motion.div
            className="scroll-reveal space-y-6 text-center max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }}
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
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Experience next-generation trading with our revolutionary platform. Lightning-fast execution, real-time
              insights, and award-winning technology.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-3 lg:gap-4 px-4"
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
                href="https://my.tradercorners.com/en/register/demo/demo-account-types"
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
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 text-center"
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
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll</div>
        <div className="scroll-line"></div>
        <div className="scroll-arrow"></div>
      </div>

      {/* Bottom live prices ticket */}
      <HeroPriceTicket />
    </section>
  );
}

// TradingView ticker removed; using provider-driven ticket instead
