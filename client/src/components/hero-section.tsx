import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";
import { motion } from "framer-motion";

interface TickerData {
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
}

export default function HeroSection() {
  const [tickerData] = useState<TickerData[]>([
    { symbol: "BTC/USD", price: "$42,851.20", change: "+2.4%", isPositive: true },
    { symbol: "EUR/USD", price: "1.0842", change: "-0.8%", isPositive: false },
    { symbol: "GOLD", price: "$2,048.30", change: "+1.2%", isPositive: true },
    { symbol: "ETH/USD", price: "$2,651.80", change: "+3.1%", isPositive: true },
  ]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>
      
      {/* Subtle Dots Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Minimal Static Elements */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {/* Small Corner Accents - Static */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-primary/30 rounded-full"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-primary/40 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-primary/35 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-primary/30 rounded-full"></div>
      </div>
      
      {/* Financial Data Streams */}
      <div className="absolute top-20 left-4 opacity-5 text-xs font-mono text-primary space-y-1">
        <div>BTC: 42851.20 ↑</div>
        <div>EUR: 1.0842 ↓</div>
        <div>GOLD: 2048.30 ↑</div>
        <div>ETH: 2651.80 ↑</div>
      </div>
      
      <div className="absolute bottom-20 right-4 opacity-5 text-xs font-mono text-primary space-y-1">
        <div>NASDAQ: 15847.23 ↑</div>
        <div>S&P 500: 4567.89 ↑</div>
        <div>DOW: 34892.45 ↑</div>
        <div>FTSE: 7651.32 ↓</div>
      </div>
      
      {/* Subtle Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      

      

      

      
      {/* Financial Data Streams */}
      <div className="absolute top-1/4 left-8 opacity-10 text-xs font-mono text-primary">
        <div className="animate-pulse">BTC: $42,851</div>
        <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>ETH: $2,651</div>
        <div className="animate-pulse" style={{ animationDelay: '1s' }}>EUR/USD: 1.0842</div>
      </div>
      
      <div className="absolute bottom-1/3 right-8 opacity-10 text-xs font-mono text-secondary">
        <div className="animate-pulse" style={{ animationDelay: '1.5s' }}>GOLD: $2,048</div>
        <div className="animate-pulse" style={{ animationDelay: '2s' }}>S&P500: 4,785</div>
        <div className="animate-pulse" style={{ animationDelay: '2.5s' }}>OIL: $78.42</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Mobile-Optimized Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[80vh] lg:min-h-[60vh]">
          {/* Left Side - Hero Content */}
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
                  <span className="text-primary font-bold inline-block transform hover:scale-110 transition-transform duration-300 hover:rotate-1 hero-highlight">Bold.</span>
                </div>
                <div className="relative mt-1 lg:mt-2">
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300">Win</span>{" "}
                  <span className="text-primary font-bold inline-block transform hover:scale-110 transition-transform duration-300 hover:-rotate-1 hero-highlight">Smart.</span>
                </div>
              </h1>
            </div>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-md lg:max-w-lg mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Experience next-generation trading with our revolutionary platform. Lightning-fast execution, 
              real-time insights, and award-winning technology.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a href="/signup"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group flex items-center justify-center text-sm lg:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Start trading with premium features"
              >
                <Rocket className="mr-2 group-hover:translate-x-1 transition-transform" size={18} />
                <span className="relative z-10 font-bold">Start Trading</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              <motion.a href="/accounts"
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

          {/* Right Side - Interactive Market Visualization */}
          <motion.div 
            className="relative w-full order-1 lg:order-2"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
          >
            {/* Modern Market Display */}
            <div className="relative space-y-3 lg:space-y-6">
              {/* Live Market Header - Mobile Only */}
              <motion.div 
                className="flex items-center justify-center space-x-2 mb-3 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Live Markets</span>
              </motion.div>

              {/* Mobile Marquee - Ultra Compact */}
              <div className="block lg:hidden overflow-hidden -mx-6">
                <div className="flex space-x-2 animate-marquee px-6">
                  {[...tickerData, ...tickerData].map((item, index) => (
                    <div
                      key={`${item.symbol}-${index}`}
                      className="flex-shrink-0 bg-white/8 backdrop-blur-xl border border-white/15 rounded-lg p-2 min-w-[100px]"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-primary">
                          {item.symbol}
                        </span>
                        <div className={`w-1 h-1 rounded-full ${item.isPositive ? 'bg-emerald-400' : 'bg-red-400'}`}></div>
                      </div>
                      
                      <div className="text-xs font-bold text-foreground font-mono mb-1">
                        {item.price}
                      </div>
                      
                      <div className={`text-xs font-medium ${
                        item.isPositive 
                          ? 'text-emerald-400' 
                          : 'text-red-400'
                      }`}>
                        {item.isPositive ? '↗' : '↘'} {item.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Header */}
              <motion.div 
                className="hidden lg:flex items-center justify-start space-x-3 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">Live Markets</span>
              </motion.div>

              {/* Desktop Grid */}
              <div className="hidden lg:grid grid-cols-2 gap-4 max-w-none">
                {tickerData.map((item, index) => (
                  <motion.div
                    key={item.symbol}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Glass Card */}
                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl lg:rounded-2xl p-4 lg:p-6 hover:bg-white/15 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Symbol */}
                        <div className="flex items-center justify-between mb-2 lg:mb-3">
                          <span className="text-xs font-semibold text-primary tracking-wider uppercase">
                            {item.symbol}
                          </span>
                          <div className={`w-2 h-2 rounded-full ${item.isPositive ? 'bg-emerald-400' : 'bg-red-400'} animate-pulse`}></div>
                        </div>
                        
                        {/* Price */}
                        <div className="text-lg lg:text-2xl font-bold text-foreground mb-2 font-mono">
                          {item.price}
                        </div>
                        
                        {/* Change */}
                        <div className={`inline-flex items-center space-x-1 px-2 lg:px-3 py-1 rounded-full text-xs font-semibold ${
                          item.isPositive 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}>
                          <span className={`${item.isPositive ? 'rotate-45' : '-rotate-45'} transition-transform duration-300`}>
                            →
                          </span>
                          <span>{item.change}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Market Trend Indicator */}
              <motion.div 
                className="mt-6 lg:mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="inline-flex items-center space-x-2 px-3 lg:px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                  <span className="text-xs lg:text-sm text-emerald-400 font-medium">Markets are up 2.3% today</span>
                </div>
              </motion.div>
              
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 215, 0, 0.6)" />
                    <stop offset="50%" stopColor="rgba(255, 176, 0, 0.3)" />
                    <stop offset="100%" stopColor="rgba(255, 223, 0, 0.1)" />
                  </linearGradient>
                </defs>
                {tickerData.map((_, index) => {
                  if (index < tickerData.length - 1) {
                    const x1 = (15 + index * 18) + 8;
                    const y1 = (20 + (index % 2) * 40) + 12;
                    const x2 = (15 + (index + 1) * 18) + 8;
                    const y2 = (20 + ((index + 1) % 2) * 40) + 12;
                    return (
                      <motion.line
                        key={`line-${index}`}
                        x1={`${x1}%`}
                        y1={`${y1}%`}
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        stroke="url(#connectionGradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 + index * 0.3 }}
                        className="connection-line"
                      />
                    );
                  }
                  return null;
                })}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Premium Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll</div>
        <div className="scroll-line"></div>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}
