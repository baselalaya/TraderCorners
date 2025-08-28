import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, Coins, BarChart3, PieChart, Globe, Zap, Star } from "lucide-react";

const tradingProducts = [
  {
    name: "Forex",
    description: "Trade major, minor, and exotic currency pairs with tight spreads",
    icon: DollarSign,
    instruments: "50+ Currency Pairs",
    spread: "From 0.3 pips",
    leverage: "Up to 1:500",
    features: [
      "EUR/USD, GBP/USD, USD/JPY",
      "24/5 Trading Hours", 
      "High Liquidity",
      "Low Spreads"
    ],
    color: "from-blue-500 to-blue-600",
    popular: true
  },
  {
    name: "Cryptocurrencies", 
    description: "Access major cryptocurrencies with competitive pricing",
    icon: Coins,
    instruments: "20+ Crypto Pairs",
    spread: "From 1%",
    leverage: "Up to 1:10",
    features: [
      "Bitcoin, Ethereum, Litecoin",
      "24/7 Trading",
      "High Volatility",
      "Digital Assets"
    ],
    color: "from-orange-500 to-orange-600",
    popular: false
  },
  {
    name: "Indices",
    description: "Trade global stock indices and diversify your portfolio",
    icon: BarChart3,
    instruments: "25+ Global Indices",
    spread: "From 0.5 points",
    leverage: "Up to 1:200",
    features: [
      "S&P 500, NASDAQ, FTSE 100",
      "Market Hours Trading",
      "Broad Market Exposure", 
      "Portfolio Diversification"
    ],
    color: "from-green-500 to-green-600",
    popular: false
  },
  {
    name: "Commodities",
    description: "Trade precious metals, energy, and agricultural products",
    icon: TrendingUp,
    instruments: "15+ Commodities",
    spread: "From 2 pips",
    leverage: "Up to 1:100",
    features: [
      "Gold, Silver, Oil, Gas",
      "Global Market Access",
      "Inflation Hedge",
      "Physical Asset Exposure"
    ],
    color: "from-yellow-500 to-yellow-600",
    popular: false
  },
  {
    name: "CFDs",
    description: "Contract for Difference on stocks, indices, and more",
    icon: PieChart,
    instruments: "500+ CFD Products",
    spread: "Variable",
    leverage: "Up to 1:30",
    features: [
      "Individual Stocks",
      "Global Markets",
      "No Ownership Required",
      "Short & Long Positions"
    ],
    color: "from-purple-500 to-purple-600",
    popular: false
  },
  {
    name: "Futures",
    description: "Trade standardized futures contracts on global exchanges",
    icon: Globe,
    instruments: "100+ Futures",
    spread: "Exchange Rates",
    leverage: "Margin Based",
    features: [
      "Commodity Futures",
      "Index Futures",
      "Currency Futures",
      "Exchange Traded"
    ],
    color: "from-red-500 to-red-600",
    popular: false
  }
];

const marketStats = [
  { value: "150+", label: "Trading Instruments" },
  { value: "24/7", label: "Market Access" },
  { value: "0.3s", label: "Execution Speed" },
  { value: "99.9%", label: "Uptime Guarantee" }
];

export default function TradingProductsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm mb-6">
            <BarChart3 className="w-4 h-4 inline mr-2" />
            Trading Products
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Diverse Markets,
            <span className="text-primary block">Endless Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access a comprehensive range of trading instruments across global markets with competitive spreads and professional execution
          </p>
        </motion.div>

        {/* Market Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {marketStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Trading Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                <Card className={`h-full relative overflow-hidden ${product.popular ? 'border-primary shadow-lg' : 'border-border'} hover:shadow-xl transition-all duration-300`}>
                  {product.popular && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-primary text-primary-foreground rounded-full p-1">
                        <Star className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl text-center">{product.name}</CardTitle>
                    <CardDescription className="text-center">{product.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-2 text-center">
                      <div className="bg-muted/50 rounded-lg p-2">
                        <div className="font-semibold text-sm">{product.instruments}</div>
                        <div className="text-xs text-muted-foreground">Available</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="bg-muted/30 rounded-lg p-2">
                        <div className="font-semibold text-xs">{product.spread}</div>
                        <div className="text-xs text-muted-foreground">Spreads</div>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-2">
                        <div className="font-semibold text-xs">{product.leverage}</div>
                        <div className="text-xs text-muted-foreground">Leverage</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        variant={product.popular ? "default" : "outline"}
                        className="w-full"
                        size="lg"
                      >
                        {product.popular ? 'Start Trading' : 'Learn More'}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Explore All Markets?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Access global markets with institutional-grade execution and competitive pricing. Start with a demo account to explore our full range of trading products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Zap className="w-5 h-5 mr-2" />
                Open Demo Account
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View All Instruments
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}