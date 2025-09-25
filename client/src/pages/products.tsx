import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Zap, 
  Globe, 
  Shield,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function Products() {
  const tradingProducts = [
    {
      name: "Forex Trading",
      description: "Trade major, minor, and exotic currency pairs with tight spreads",
      icon: DollarSign,
      instruments: "70+ Currency Pairs",
      spread: "From 0.1 pips",
      leverage: "Up to 1:500",
      features: [
        "Major pairs (EUR/USD, GBP/USD, USD/JPY)",
        "Minor and exotic pairs available",
        "Real-time market data",
        "Expert Advisor compatibility",
        "Mobile trading support"
      ],
      popular: true
    },
    {
      name: "Indices Trading",
      description: "Access global stock indices with competitive conditions",
      icon: BarChart3,
      instruments: "25+ Global Indices",
      spread: "From 0.5 points",
      leverage: "Up to 1:200",
      features: [
        "S&P 500, NASDAQ, DOW Jones",
        "European indices (DAX, FTSE, CAC)",
        "Asian markets (Nikkei, Hang Seng)",
        "Real-time price feeds",
        "Low margin requirements"
      ],
      popular: false
    },
    {
      name: "Commodities",
      description: "Trade precious metals, energy, and agricultural products",
      icon: TrendingUp,
      instruments: "15+ Commodities",
      spread: "From $0.03",
      leverage: "Up to 1:100",
      features: [
        "Gold, Silver, Platinum trading",
        "Oil and Natural Gas",
        "Agricultural commodities",
        "Spot and futures contracts",
        "Hedging opportunities"
      ],
      popular: false
    },
    {
      name: "Cryptocurrency",
      description: "Trade popular cryptocurrencies against major currencies",
      icon: Zap,
      instruments: "20+ Crypto Pairs",
      spread: "From 0.5%",
      leverage: "Up to 1:10",
      features: [
        "Bitcoin, Ethereum, Litecoin",
        "24/7 trading availability",
        "Crypto-to-fiat pairs",
        "Secure cold storage",
        "Real-time market depth"
      ],
      popular: false
    }
  ];

  const platformFeatures = [
    {
      title: "MetaTrader 5 Platform",
      description: "Professional trading platform with advanced features",
      features: [
        "80+ Technical Indicators",
        "Multiple Chart Types",
        "Expert Advisors (EAs)",
        "Strategy Backtesting",
        "Economic Calendar",
        "Market Depth Display"
      ]
    },
    {
      title: "Global Market Access",
      description: "Trade across multiple markets from a single platform",
      features: [
        "Forex Markets",
        "Stock Indices",
        "Commodity Markets",
        "Cryptocurrency",
        "24/7 Market Access",
        "Multiple Asset Classes"
      ]
    },
    {
      title: "Professional Tools",
      description: "Advanced tools for serious traders",
      features: [
        "Real-time Analytics",
        "Risk Management Tools",
        "Automated Trading",
        "Custom Indicators",
        "Trading Signals",
        "VPS Hosting Available"
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">
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
                  <Globe className="w-4 h-4 inline mr-2" />
                  Trading Products
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Global Markets,
                  <span className="text-primary block">Professional Trading</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                  Access a comprehensive range of trading instruments across global markets with institutional-grade execution and competitive pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/signup">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                      Start Trading Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <a href="/accounts">
                    <Button variant="outline" size="lg">
                      View Demo Account
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trading Products Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Our Trading Products
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Diversify your portfolio with our comprehensive range of trading instruments
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {tradingProducts.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="h-full"
                  >
                    <Card className={`h-full relative overflow-hidden backdrop-blur-xl bg-card/30 border ${product.popular ? 'border-primary/50 shadow-2xl shadow-primary/20 ring-2 ring-primary/10' : 'border-border/30'} hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group`}>
                      {product.popular && (
                        <div className="absolute top-4 right-4 z-10">
                          <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                            <Star className="w-3 h-3 mr-1" />
                            Most Popular
                          </Badge>
                        </div>
                      )}
                      
                      <CardHeader className="pb-6">
                        <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all duration-500">
                          <IconComponent className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
                        </div>
                        <CardTitle className="text-2xl text-center font-bold">{product.name}</CardTitle>
                        <CardDescription className="text-center text-base">{product.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-6 px-6">
                        <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
                          <div className="font-bold text-lg text-primary mb-1">{product.instruments}</div>
                          <div className="text-sm font-medium text-muted-foreground">Available Instruments</div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="text-center p-3 bg-muted/30 rounded-xl border border-border/50">
                            <div className="font-bold text-sm text-foreground">{product.spread}</div>
                            <div className="text-xs text-muted-foreground">Spreads</div>
                          </div>
                          <div className="text-center p-3 bg-muted/30 rounded-xl border border-border/50">
                            <div className="font-bold text-sm text-foreground">{product.leverage}</div>
                            <div className="text-xs text-muted-foreground">Leverage</div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-bold text-sm text-foreground">Key Features:</h4>
                          <ul className="space-y-2">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm group/item">
                                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:bg-primary/30 transition-colors">
                                  <CheckCircle className="w-3 h-3 text-primary" />
                                </div>
                                <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <a href="/signup">
                          <Button 
                            className={`w-full h-12 text-base font-bold rounded-xl shadow-lg transition-all duration-300 ${
                              product.popular 
                                ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-xl hover:shadow-primary/25' 
                                : 'bg-gradient-to-r from-muted to-muted/80 text-foreground hover:from-muted/90 hover:to-muted/70 hover:shadow-lg border-2 border-border/50 hover:border-primary/30'
                            }`}
                            size="lg"
                          >
                            Start Trading {product.name}
                          </Button>
                          </a>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Professional Trading Platform
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                MetaTrader 5 platform with advanced features for professional trading
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full backdrop-blur-xl bg-card/30 border border-border/30 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-primary/5 via-card/50 to-secondary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Trading?</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Join thousands of traders who trust Trader Corners for their trading needs. Open your account today and access global markets.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/signup"><Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                    Open Live Account
                  </Button></a>
                  <a href="/accounts"><Button variant="outline" size="lg">
                    Try Demo Account
                  </Button></a>
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
