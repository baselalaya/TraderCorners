import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { marketData } from "@/lib/market-data";

type MarketType = 'forex' | 'crypto' | 'commodities';

export default function MarketsSection() {
  const [activeMarket, setActiveMarket] = useState<MarketType>('forex');

  const tabs = [
    { id: 'forex' as MarketType, label: 'Forex' },
    { id: 'crypto' as MarketType, label: 'Crypto' },
    { id: 'commodities' as MarketType, label: 'Commodities' },
  ];

  const currentData = marketData[activeMarket];

  return (
    <section id="markets" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">Live Markets</h2>
          <p className="text-xl text-muted-foreground">Real-time pricing across all major asset classes</p>
        </div>
        
        <div className="neumorphic rounded-2xl p-8 scroll-reveal">
          {/* Market Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMarket(tab.id)}
                className={`cta-button mx-2 mb-2 ${
                  activeMarket === tab.id
                    ? ''
                    : 'cta-outline'
                }`}
                aria-label={`View ${tab.label} market data`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Market Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4">Asset</th>
                  <th className="text-right py-4 px-4">Price</th>
                  <th className="text-right py-4 px-4">Change</th>
                  <th className="text-right py-4 px-4">Volume</th>
                  <th className="text-center py-4 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <motion.tr
                    key={item.symbol}
                    className="border-b border-border hover:bg-accent/50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 btn-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground shadow-lg">
                          {item.icon}
                        </div>
                        <span className="font-semibold">{item.symbol}</span>
                      </div>
                    </td>
                    <td className="text-right py-4 px-4 font-mono">{item.price}</td>
                    <td className="text-right py-4 px-4">
                      <span className={item.isPositive ? "text-green-400" : "text-red-400"}>
                        {item.change}
                      </span>
                    </td>
                    <td className="text-right py-4 px-4 text-muted-foreground">{item.volume}</td>
                    <td className="text-center py-4 px-4">
                      <Button 
                        size="sm" 
                        className="btn-primary text-primary-foreground hover:shadow-lg glow-hover"
                      >
                        Trade
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
