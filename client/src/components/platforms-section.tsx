import { Button } from "@/components/ui/button";
import { Download, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function PlatformsSection() {
  const features = [
    "Advanced technical analysis tools",
    "Automated trading with Expert Advisors",
    "Mobile, web, and desktop versions",
  ];

  return (
    <section id="platforms" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">Trading Platforms</h2>
          <p className="text-xl text-muted-foreground">Professional tools for every trading style</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="scroll-reveal"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-space text-3xl font-bold mb-6">MetaTrader 4</h3>
            <p className="text-lg text-muted-foreground mb-8">
              The world's most popular trading platform, now optimized for modern traders. 
              Advanced charting, automated trading, and seamless execution.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Check className="text-primary flex-shrink-0" size={20} />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <button className="cta-button cta-lg" aria-label="Download MetaTrader 4 platform">
              <Download className="mr-2" size={20} />
              Download MT4
            </button>
          </motion.div>
          
          <motion.div 
            className="scroll-reveal"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Trading platform on multiple devices" 
              className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
