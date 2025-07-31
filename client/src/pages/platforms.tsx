import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Monitor, Smartphone, Globe, BarChart3, Zap, Shield, Users } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const platforms = [
  {
    id: "mt4",
    name: "MetaTrader 4",
    description: "The world's most popular trading platform with advanced charting and automated trading capabilities.",
    features: [
      "Advanced charting tools",
      "Expert Advisors (EAs)",
      "One-click trading",
      "Market analysis tools",
      "Custom indicators",
      "Mobile trading"
    ],
    devices: ["Windows", "Mac", "iOS", "Android", "Web"],
    image: "/api/placeholder/400/300",
    downloadLinks: {
      windows: "#",
      mac: "#",
      ios: "#",
      android: "#",
      web: "#"
    }
  },
  {
    id: "mt5",
    name: "MetaTrader 5",
    description: "Next-generation platform with enhanced features for modern traders and multi-asset trading.",
    features: [
      "Multi-asset trading",
      "Advanced order types",
      "Economic calendar",
      "Market depth",
      "Algorithmic trading",
      "Real-time quotes"
    ],
    devices: ["Windows", "Mac", "iOS", "Android", "Web"],
    image: "/api/placeholder/400/300",
    downloadLinks: {
      windows: "#",
      mac: "#",
      ios: "#",
      android: "#",
      web: "#"
    }
  },
  {
    id: "web",
    name: "WebTrader",
    description: "Browser-based trading platform with no downloads required. Trade from anywhere with internet access.",
    features: [
      "No download required",
      "Cross-platform compatibility",
      "Real-time execution",
      "Advanced charts",
      "Risk management tools",
      "Portfolio tracking"
    ],
    devices: ["Any Browser"],
    image: "/api/placeholder/400/300",
    downloadLinks: {
      web: "#"
    }
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    description: "Trade on-the-go with our feature-rich mobile applications for iOS and Android.",
    features: [
      "Touch-optimized interface",
      "Push notifications",
      "Biometric login",
      "Quick order placement",
      "Market alerts",
      "Account management"
    ],
    devices: ["iOS", "Android"],
    image: "/api/placeholder/400/300",
    downloadLinks: {
      ios: "#",
      android: "#"
    }
  }
];

const stats = [
  { icon: Users, value: "2M+", label: "Active Traders" },
  { icon: BarChart3, value: "150+", label: "Trading Instruments" },
  { icon: Zap, value: "0.1s", label: "Execution Speed" },
  { icon: Shield, value: "99.9%", label: "Uptime" }
];

export default function PlatformsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm mb-6">
                Trading Platforms
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Trade Your Way with Our
                <span className="text-primary block">Premium Platforms</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Choose from our suite of professional trading platforms designed for every trading style and experience level.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        {platform.name}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {platform.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {platform.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Supported Devices */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Available On</h3>
                      <div className="flex flex-wrap gap-2">
                        {platform.devices.map((device, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                          >
                            {device}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Download Buttons */}
                    <div className="flex flex-wrap gap-4">
                      {Object.entries(platform.downloadLinks).map(([type, link]) => (
                        <Button
                          key={type}
                          className="bg-primary hover:bg-primary/90"
                          asChild
                        >
                          <a href={link} className="flex items-center space-x-2">
                            {type === 'web' ? (
                              <Globe size={18} />
                            ) : type === 'ios' || type === 'android' ? (
                              <Smartphone size={18} />
                            ) : (
                              <Monitor size={18} />
                            )}
                            <span>
                              {type === 'web' 
                                ? 'Launch WebTrader'
                                : `Download for ${type.charAt(0).toUpperCase() + type.slice(1)}`
                              }
                            </span>
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Platform Screenshot */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 shadow-2xl">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                          <div className="text-center">
                            <Monitor className="w-16 h-16 text-primary mx-auto mb-4" />
                            <p className="text-muted-foreground font-medium">{platform.name} Interface</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Choose your preferred platform and join millions of traders worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold"
              >
                Open Demo Account
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold"
              >
                Start Live Trading
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}