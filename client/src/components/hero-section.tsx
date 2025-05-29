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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-background/95 via-background/90 to-background/85">
      <div className="hero-bg-effect" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Simple Background Elements */}
      <div className="absolute top-1/3 left-1/4 w-1 h-32 bg-gradient-to-b from-primary/10 to-transparent opacity-30"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-primary/8 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/3 left-1/3 w-16 h-1 bg-gradient-to-r from-secondary/10 to-transparent opacity-25"></div>
      <div className="absolute top-1/4 right-1/4 w-2 h-20 bg-gradient-to-b from-secondary/8 to-transparent opacity-30 transform rotate-45"></div>
      
      {/* Trading-themed Background Elements */}
      <div className="hero-geometry"></div>
      <div className="hero-geometry"></div>
      <div className="hero-geometry"></div>
      <div className="hero-geometry"></div>
      
      {/* Floating Market Particles */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="hero-particle"
          style={{
            left: `${10 + i * 12}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${12 + i * 2}s`
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
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div 
          className="scroll-reveal max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
        >
          <h1 className="font-space text-hero-xl mb-8 text-balance">
            Trade <span className="hero-word">Bold.</span><br />
            Win <span className="hero-word">Smart.</span>
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
