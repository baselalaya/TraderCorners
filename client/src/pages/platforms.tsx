import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Monitor, Globe, BarChart3, Zap, Shield, Users, Check, Rocket, Play } from "lucide-react";
import { FaApple, FaGooglePlay, FaWindows } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo";

const platforms = [
  {
    id: "mt5",
    name: "MetaTrader 5",
    description: "The most advanced multi-asset platform with enhanced capabilities for professional trading across Forex, stocks, commodities, and futures.",
    features: [
      "Multi-asset trading (Forex, Stocks, Futures)",
      "80+ built-in technical indicators",
      "21 timeframes for analysis",
      "Depth of Market (DOM)",
      "Economic calendar integration",
      "MQL5 algorithmic trading",
      "Strategy backtesting",
      "Copy trading signals",
      "Advanced order management",
      "Market screener and scanner"
    ],
    devices: ["Windows", "Mac", "iOS", "Android", "Web"],
    image: "/mt5-all.png",
    downloadLinks: {
      windows: "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe",
      mac: "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5.pkg",
      ios: "https://apps.apple.com/app/metatrader-5/id413251709",
      android: "https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5",
      web: "https://www.metatrader5.com/en/terminal"
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
    image: "/webtrader.jpg",
    downloadLinks: {
      web: "https://www.metatrader5.com/en/terminal"
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
    image: "/mt5-mobile.webp",
    downloadLinks: {
      ios: "https://apps.apple.com/app/metatrader-5/id413251709",
      android: "https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5"
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
      <SEO page="platforms" />
      <Header />
      <div className="min-h-screen py-20">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-12">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                id={platform.id}
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
                    <TooltipProvider>
                    <div className="flex flex-wrap gap-3">
                      {Object.entries(platform.downloadLinks).map(([type, link]) => {
                        const isWeb = type === 'web';
                        const isStore = type === 'ios' || type === 'android';
                        const label = isWeb
                          ? 'Launch WebTrader'
                          : isStore
                            ? `Get on ${type.charAt(0).toUpperCase() + type.slice(1)}`
                            : `Download for ${type.charAt(0).toUpperCase() + type.slice(1)}`;
                        // Choose icon per platform
                        const Icon = isWeb
                          ? Globe
                          : type === 'ios'
                          ? FaApple
                          : type === 'android'
                          ? FaGooglePlay
                          : type === 'windows'
                          ? FaWindows
                          : Monitor;
                        const aria = `${label} - ${platform.name}`;

                        return (
                          <Tooltip key={type}>
                            <TooltipTrigger asChild>
                              <Button
                            key={type}
                            className={'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:shadow-xl'}
                            variant={undefined}
                            asChild
                          >
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={aria}
                              className="flex items-center justify-center w-12 h-12 rounded-full text-sm font-medium"
                              {...(!isWeb && !isStore ? { download: true } : {})}
                            >
                              <Icon size={20} />
                            </a>
                          </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <span>{label}</span>
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                    </div>
                    </TooltipProvider>
                  </div>
                </div>

                {/* Platform Screenshot */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-0 md:p-0">
                      <div className="overflow-hidden">
                        <img
                          src={platform.image}
                          alt={`${platform.name} screenshot`}
                          className="w-full object-cover"
                          loading="lazy"
                        />
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
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
          >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Start Trading?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Choose your preferred platform and join millions of traders worldwide
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center mb-8 px-4 sm:px-0">
                <motion.a href="https://my.tradercorners.com/en/register/account-types" target="_blank" rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group flex items-center justify-center text-sm lg:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Start trading with premium features"
                >
                  <Rocket className="mr-2 group-hover:translate-x-1 transition-transform" size={18} />
                  <span className="relative z-10 font-bold">Start Trading</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
                
                <motion.a href="https://my.tradercorners.com/en/register/demo/demo-account-types" target="_blank" rel="noopener noreferrer"
                  className="border-2 border-white/80 text-white bg-transparent px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 relative overflow-hidden group flex items-center justify-center text-sm lg:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Try our trading demo"
                >
                  <Play className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                  <span className="relative z-10 font-bold">Try Demo</span>
                </motion.a>
              </div>
              
              <div className="flex items-center justify-center space-x-6 text-white/70 text-sm">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>All Platforms Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>Advanced Charting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>Expert Advisors</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}
