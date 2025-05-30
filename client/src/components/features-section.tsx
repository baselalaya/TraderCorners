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
    <section className="relative py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/95"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.02] to-transparent"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20 scroll-reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            ⚡ Next-Generation Features
          </motion.div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground">
            Why Trader Corners?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience revolutionary trading technology designed for the future of finance
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card group relative"
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3, type: "spring", stiffness: 200 }
              }}
            >
              {/* Card Background with Gradient Border */}
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-border/20 group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
                
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -top-1/2 left-1/2 w-1/2 h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Enhanced Icon Container */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-primary/25">
                    <feature.icon className="text-primary-foreground" size={36} />
                    
                    {/* Icon Glow Effect */}
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Enhanced Typography */}
                  <h3 className="font-display text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-balance group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Subtle Animation Indicator */}
                  <div className="mt-6 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">Ready to experience the future of trading?</p>
          <button className="cta-button cta-lg group">
            <span className="mr-2 group-hover:translate-x-1 transition-transform">Get Started Today</span>
            →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
