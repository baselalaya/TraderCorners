import { motion } from "framer-motion";
import { Check, Download, Monitor, Smartphone, Globe, TrendingUp, Zap, Shield } from "lucide-react";

export default function PlatformsSection() {
  const platforms = [
    {
      name: "MetaTrader 5",
      description: "Advanced multi-asset platform with enhanced capabilities for professional trading",
      icon: Monitor,
      color: "from-red-900 via-red-800 to-red-700",
      glowColor: "from-red-900/20 to-red-700/20",
      features: [
        "Multi-asset trading",
        "80+ technical indicators",
        "MQL5 algorithmic trading",
        "Strategy backtesting"
      ]
    },
    {
      name: "Web Terminal",
      description: "Trade directly from your browser with full platform functionality",
      icon: Globe,
      color: "from-red-800 via-red-700 to-red-600",
      glowColor: "from-red-800/20 to-red-600/20",
      features: [
        "No downloads required",
        "Cross-platform compatibility",
        "Real-time sync",
        "Secure cloud trading"
      ]
    },
    {
      name: "Mobile App",
      description: "Professional trading on-the-go with mobile-optimized interface",
      icon: Smartphone,
      color: "from-red-700 via-red-600 to-red-500",
      glowColor: "from-red-700/20 to-red-500/20",
      features: [
        "iOS & Android apps",
        "Touch-friendly interface",
        "Push notifications",
        "MT5 mobile features"
      ]
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "99.9%", label: "Uptime" },
    { icon: Zap, value: "<1ms", label: "Latency" },
    { icon: Shield, value: "256-bit", label: "Encryption" }
  ];

  return (
    <section id="platforms" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Advanced Technology
          </motion.div>
          
          <motion.h2 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Trading Platforms
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Professional-grade trading platforms designed for speed, reliability, and precision trading
          </motion.p>
        </div>

        {/* Platform Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <motion.div
                key={platform.name}
                className="group relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500"
                initial={{ opacity: 0, y: 40, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.4 }
                }}
              >

                
                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                    {platform.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {platform.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {platform.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + featureIndex * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <motion.button 
                    className="w-full py-4 px-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group/btn"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center font-bold">
                      <Download className="mr-2" size={18} />
                      Get Started
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-sm opacity-50" />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-primary" size={24} />
                  </div>
                  <div className="font-display text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}