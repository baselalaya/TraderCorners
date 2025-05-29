import { motion } from "framer-motion";
import { Zap, Shield, Headphones, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Execution",
    description: "Lightning-fast order execution in milliseconds with advanced algorithms",
  },
  {
    icon: Shield,
    title: "Fully Regulated",
    description: "Tier-1 licensing and military-grade security for your peace of mind",
  },
  {
    icon: Headphones,
    title: "24/5 Support",
    description: "Multilingual expert support whenever markets are open",
  },
  {
    icon: TrendingUp,
    title: "Multi-Asset",
    description: "Trade Forex, Crypto, Commodities, and CFDs on one platform",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">Why Trader Corners?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience next-generation trading with our cutting-edge platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="neumorphic rounded-2xl p-8 text-center glow-hover scroll-reveal group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-cyber rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-primary-foreground" size={32} />
              </div>
              <h3 className="font-space text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
