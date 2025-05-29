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
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          className="scroll-reveal"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-space text-hero-xl mb-6 text-balance">
            Trade <span className="text-gradient">Bold.</span><br />
            Win <span className="text-gradient">Smart.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            Unlock global markets with lightning-fast execution and real-time insights.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="btn-primary text-primary-foreground cta-primary px-8 py-4"
            >
              <Rocket className="mr-2" size={20} />
              Start Trading
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="cta-secondary px-8 py-4"
            >
              <Play className="mr-2" size={20} />
              Try Demo
            </Button>
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
    </section>
  );
}
