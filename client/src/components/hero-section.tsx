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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-background via-background/98 to-background/95">
      <div className="hero-bg-effect" />
      
      {/* 3D Morphing Background */}
      <div className="morphing-backdrop"></div>
      
      {/* Holographic Grid */}
      <div className="holographic-grid"></div>
      
      {/* Advanced Trading Chart Visualization */}
      <div className="trading-chart-bg">
        {[...Array(20)].map((_, i) => (
          <div 
            key={`bar-${i}`}
            className="chart-bar"
            style={{
              left: `${5 + i * 4.5}%`,
              height: `${Math.random() * 60 + 20}%`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
      
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
      
      {/* Dynamic Grid Lines */}
      <div className="hero-grid-overlay"></div>
      
      {/* Prismatic Light Beams */}
      <div className="light-beam beam-1"></div>
      <div className="light-beam beam-2"></div>
      <div className="light-beam beam-3"></div>
      
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
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div 
          className="scroll-reveal max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
        >
          <h1 className="font-space text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance text-foreground leading-tight relative">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">Trade</span>{" "}
            <span className="text-primary font-bold inline-block transform hover:scale-110 transition-transform duration-300 hover:rotate-1">Bold.</span>
            <br />
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">Win</span>{" "}
            <span className="text-primary font-bold inline-block transform hover:scale-110 transition-transform duration-300 hover:-rotate-1">Smart.</span>
            
            {/* Interactive Typography Effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            Unlock global markets with lightning-fast execution and real-time insights.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="cta-button cta-lg" aria-label="Start trading with premium features">
              <Rocket className="mr-2" size={20} />
              Start Trading
            </button>
            <button className="cta-button cta-outline cta-lg" aria-label="Try our trading demo">
              <Play className="mr-2" size={20} />
              Try Demo
            </button>
          </div>
        </motion.div>
        
        {/* Live Ticker with Advanced Effects */}
        <motion.div 
          className="neumorphic rounded-2xl p-6 max-w-4xl mx-auto scroll-reveal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div className="overflow-hidden">
            <div className="flex space-x-12 ticker-animation">
              {tickerData.concat(tickerData).map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-4 whitespace-nowrap group"
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <span className="font-semibold group-hover:text-primary transition-colors">{item.symbol}</span>
                  <span className="text-primary font-mono">{item.price}</span>
                  <span className={`font-semibold ${item.isPositive ? "text-green-400" : "text-red-400"} group-hover:scale-110 transition-transform`}>
                    {item.change}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
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
