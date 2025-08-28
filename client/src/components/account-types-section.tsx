import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Shield, Zap, TrendingUp } from "lucide-react";

const accountTypes = [
  {
    name: "Starter",
    description: "Perfect for beginners starting their trading journey",
    minDeposit: "$250",
    spread: "From 1.8 pips",
    leverage: "1:100",
    features: [
      "Basic Trading Platform",
      "Educational Resources",
      "Email Support",
      "Market Analysis",
      "Mobile Trading"
    ],
    popular: false,
    color: "from-slate-500 to-slate-600"
  },
  {
    name: "Standard",
    description: "Most popular choice for active traders",
    minDeposit: "$1,000",
    spread: "From 1.2 pips",
    leverage: "1:200",
    features: [
      "Advanced Trading Platform",
      "Priority Support",
      "Daily Market Reports",
      "Trading Signals",
      "Expert Advisors",
      "Risk Management Tools"
    ],
    popular: true,
    color: "from-primary to-secondary"
  },
  {
    name: "Professional",
    description: "Advanced features for experienced traders",
    minDeposit: "$5,000",
    spread: "From 0.8 pips",
    leverage: "1:300",
    features: [
      "Premium Trading Platform",
      "Dedicated Account Manager",
      "Advanced Analytics",
      "Custom Trading Tools",
      "VPS Hosting",
      "Institutional Spreads",
      "Priority Execution"
    ],
    popular: false,
    color: "from-yellow-500 to-yellow-600"
  },
  {
    name: "VIP",
    description: "Exclusive benefits for high-volume traders",
    minDeposit: "$25,000",
    spread: "From 0.3 pips",
    leverage: "1:500",
    features: [
      "Elite Trading Platform",
      "Personal Trading Coach",
      "Exclusive Market Insights",
      "Custom Development",
      "Direct Market Access",
      "Institutional Liquidity",
      "White Glove Service",
      "Private Events Access"
    ],
    popular: false,
    color: "from-purple-500 to-purple-600"
  }
];

export default function AccountTypesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm mb-6">
            <Shield className="w-4 h-4 inline mr-2" />
            Account Types
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your
            <span className="text-primary block">Trading Account</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Select the perfect account type that matches your trading experience and investment goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {accountTypes.map((account, index) => (
            <motion.div
              key={account.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className={`h-full relative overflow-hidden backdrop-blur-sm bg-card/50 border border-border/50 hover:border-primary/30 ${account.popular ? 'border-primary/50 shadow-lg shadow-primary/10' : ''} hover:shadow-xl hover:shadow-primary/5 transition-all duration-300`}>
                {account.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                      <Star className="w-4 h-4 inline mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className={account.popular ? 'pt-12' : ''}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${account.color} flex items-center justify-center mx-auto mb-4`}>
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl text-center">{account.name}</CardTitle>
                  <CardDescription className="text-center">{account.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{account.minDeposit}</div>
                    <div className="text-sm text-muted-foreground">Minimum Deposit</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="font-semibold text-sm">{account.spread}</div>
                      <div className="text-xs text-muted-foreground">Spreads</div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{account.leverage}</div>
                      <div className="text-xs text-muted-foreground">Leverage</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Features:</h4>
                    <ul className="space-y-1">
                      {account.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Check className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      className={`w-full ${account.popular ? 'bg-primary hover:bg-primary/90' : 'bg-muted hover:bg-muted/80 text-foreground'}`}
                      size="lg"
                    >
                      {account.popular ? 'Get Started' : 'Choose Plan'}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Not sure which account is right for you?</h3>
            <p className="text-muted-foreground mb-6">
              Our account specialists can help you choose the perfect trading account based on your experience and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                <Zap className="w-4 h-4 mr-2" />
                Compare All Accounts
              </Button>
              <Button size="lg">
                Get Expert Advice
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}