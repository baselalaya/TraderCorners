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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-background via-background/98 to-background/90">
      <div className="hero-bg-effect" />
      
      {/* 3D Morphing Background */}
      <div className="morphing-backdrop"></div>
      

      

      
      {/* Floating Financial Icons */}
      <div className="financial-icons">
        <div className="fin-icon icon-1">₿</div>
        <div className="fin-icon icon-2">€</div>
        <div className="fin-icon icon-3">$</div>
        <div className="fin-icon icon-4">¥</div>
        <div className="fin-icon icon-5">£</div>
        <div className="fin-icon icon-6">₹</div>
      </div>
      
      {/* Trading-themed Background Elements */}
      <div className="hero-geometry"></div>
      <div className="hero-geometry"></div>
      <div className="hero-geometry"></div>
      <div className="hero-geometry"></div>
      
      {/* Enhanced Floating Orbs */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={`orb-${i}`}
          className="floating-orb"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${15 + i * 3}s`
          }}
        />
      ))}
      
      {/* Floating Market Particles */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={`particle-${i}`}
          className="hero-particle"
          style={{
            left: `${5 + i * 8}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${10 + i * 1.5}s`
          }}
        />
      ))}
      

      

      
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
        {/* Split Layout Design */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* Left Side - Hero Content */}
          <motion.div 
            className="scroll-reveal space-y-8"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                <div className="relative">
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300">Trade</span>{" "}
                  <span className="text-primary font-bold inline-block transform hover:scale-110 transition-transform duration-300 hover:rotate-1 hero-highlight">Bold.</span>
                </div>
                <div className="relative mt-2">
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300">Win</span>{" "}
                  <span className="text-primary font-bold inline-block transform hover:scale-110 transition-transform duration-300 hover:-rotate-1 hero-highlight">Smart.</span>
                </div>
              </h1>
            </div>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Experience next-generation trading with our revolutionary platform. Lightning-fast execution, 
              real-time insights, and award-winning technology at your fingertips.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button className="cta-button cta-lg group" aria-label="Start trading with premium features">
                <Rocket className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                Start Trading
              </button>
              <button className="cta-button cta-outline cta-lg group" aria-label="Try our trading demo">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Try Demo
              </button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                500K+ Active Traders
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                $2.5B+ Daily Volume
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Market Visualization */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
          >
            {/* Floating Market Cards */}
            <div className="relative h-64 market-constellation">
              {tickerData.map((item, index) => (
                <motion.div 
                  key={item.symbol} 
                  className="market-card absolute"
                  style={{
                    left: `${15 + index * 18}%`,
                    top: `${20 + (index % 2) * 40}%`,
                    zIndex: 10 + index
                  }}
                  initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2 * index,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    rotateY: 10,
                    rotateX: 5,
                    zIndex: 50,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="market-card-inner">
                    <div className="market-card-front">
                      <div className="symbol-badge">{item.symbol}</div>
                      <div className="price-display">{item.price}</div>
                      <div className={`change-indicator ${item.isPositive ? 'positive' : 'negative'}`}>
                        <span className="change-arrow">{item.isPositive ? '↗' : '↘'}</span>
                        {item.change}
                      </div>
                      <div className="market-pulse"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
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
