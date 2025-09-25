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
              <Card className={`h-full relative overflow-hidden backdrop-blur-xl bg-card/30 border ${account.popular ? 'border-primary/50 shadow-2xl shadow-primary/20 ring-2 ring-primary/10' : 'border-border/30'} hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group`}>
                {account.popular && (
                  <div className="absolute top-0 left-0 right-0 z-10">
                    <div className="bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground text-center py-3 text-sm font-bold relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-50"></div>
                      <Star className="w-4 h-4 inline mr-1 relative z-10" />
                      <span className="relative z-10">Most Popular</span>
                    </div>
                  </div>
                )}
                
                <CardHeader className={`${account.popular ? 'pt-16' : 'pt-8'} pb-6`}>
                  <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all duration-500">
                    <TrendingUp className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
                  </div>
                  <CardTitle className="text-2xl text-center font-bold">{account.name}</CardTitle>
                  <CardDescription className="text-center text-base">{account.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6 px-6">
                  <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
                    <div className="text-3xl font-bold text-primary mb-1">{account.minDeposit}</div>
                    <div className="text-sm font-medium text-muted-foreground">Minimum Deposit</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-muted/30 rounded-xl border border-border/50">
                      <div className="font-bold text-sm text-foreground">{account.spread}</div>
                      <div className="text-xs text-muted-foreground">Spreads</div>
                    </div>
                    <div className="text-center p-3 bg-muted/30 rounded-xl border border-border/50">
                      <div className="font-bold text-sm text-foreground">{account.leverage}</div>
                      <div className="text-xs text-muted-foreground">Leverage</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-sm text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {account.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm group/item">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:bg-primary/30 transition-colors">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      asChild
                      className={`w-full h-12 text-base font-bold rounded-xl shadow-lg transition-all duration-300 ${
                        account.popular 
                          ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-xl hover:shadow-primary/25' 
                          : 'bg-gradient-to-r from-muted to-muted/80 text-foreground hover:from-muted/90 hover:to-muted/70 hover:shadow-lg'
                      }`}
                      size="lg"
                    >
                      <a href="https://my.tradercorners.com/en/register/account-types">
                        {account.popular ? 'Get Started Now' : 'Choose This Plan'}
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
