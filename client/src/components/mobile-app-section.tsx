import { motion } from "framer-motion";
import { Smartphone, Bell, TrendingUp, Shield, Download, Star } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const features = [
  {
    icon: TrendingUp,
    text: "Real-time market data and charts",
    color: "from-blue-900 to-blue-800"
  },
  {
    icon: Bell,
    text: "Smart price alerts and notifications",
    color: "from-blue-800 to-blue-700"
  },
  {
    icon: Smartphone,
    text: "Touch-optimized trading interface",
    color: "from-blue-700 to-blue-600"
  },
  {
    icon: Shield,
    text: "Biometric security login",
    color: "from-blue-600 to-blue-500"
  },
];

const appStats = [
  { label: "App Store Rating", value: "4.8", icon: Star },
  { label: "Downloads", value: "2M+", icon: Download },
  { label: "User Reviews", value: "50K+", icon: Star },
];

export default function MobileAppSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/10" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl" />
      
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
            📱 Mobile Trading
          </motion.div>
          
          <motion.h2 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Trade On The Go
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Take your trading anywhere with our award-winning mobile app. Full functionality, real-time data, and seamless execution in your pocket.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.text}
                    className="group relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <p className="text-sm font-medium text-foreground leading-relaxed">
                      {feature.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Download Trader Corners app from App Store"
              >
                <FaApple className="text-white" size={24} />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button 
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Download Trader Corners app from Google Play Store"
              >
                <FaGooglePlay className="text-white" size={24} />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </motion.div>
          
          {/* Right Side - Mobile Preview */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-card to-card/50 rounded-3xl p-4 shadow-2xl border border-border/50">
              <div className="w-full h-full bg-background rounded-2xl overflow-hidden relative">
                {/* Screen Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                <div className="relative z-10 p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">Trader Corners</h3>
                  <p className="text-xs text-muted-foreground mb-6">Professional Trading</p>
                  
                  {/* Mock Chart */}
                  <div className="bg-card/50 rounded-xl p-4 mb-4">
                    <div className="h-24 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-end justify-between px-2 py-2">
                      {[...Array(8)].map((_, i) => (
                        <div 
                          key={i} 
                          className="bg-primary rounded-sm" 
                          style={{ height: `${Math.random() * 60 + 20}%`, width: '8px' }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Mock Stats */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-card/50 rounded-lg p-2">
                      <div className="text-xs text-muted-foreground">EUR/USD</div>
                      <div className="text-sm font-bold text-green-400">1.0845</div>
                    </div>
                    <div className="bg-card/50 rounded-lg p-2">
                      <div className="text-xs text-muted-foreground">GBP/USD</div>
                      <div className="text-sm font-bold text-red-400">1.2632</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-lg opacity-40" />
          </motion.div>
        </div>

        {/* App Stats */}
        <motion.div 
          className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-3xl p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {appStats.map((stat, index) => {
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