import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Shield, Zap, TrendingUp } from "lucide-react";

const accountTypes = [
  {
    name: "Basic Account",
    description: "Essential trading with low minimums and MT5 access",
    specs: {
      minDeposit: "20",
      spreadsFrom: "1.2",
      minLot: "0.01",
      leverage: "1:100",
      commission: "$0.0",
      instruments: "28 currency pairs, Metals, CFD",
      platforms: "MT5",
      stopOut: "10%",
    },
    popular: false,
    color: "from-sky-500 to-sky-600",
    cta: "https://my.tradercorners.com/en/register/basic",
  },
  {
    name: "Premium Account",
    description: "Tighter spreads and higher leverage for active traders",
    specs: {
      minDeposit: "10,000",
      spreadsFrom: "0.8",
      minLot: "0.01",
      leverage: "1:400",
      commission: "$0.0",
      instruments: "28 currency pairs, Metals, CFD",
      platforms: "MT5",
      stopOut: "10%",
    },
    popular: true,
    color: "from-primary to-secondary",
    cta: "https://my.tradercorners.com/en/register/premium",
  },
  {
    name: "Institutional Account",
    description: "Institutional-grade conditions with ultra-low spreads",
    specs: {
      minDeposit: "20",
      spreadsFrom: "0.5",
      minLot: "0.01",
      leverage: "1:400",
      commission: "$0.0",
      instruments: "28 currency pairs, Metals, CFD",
      platforms: "MT5",
      stopOut: "10%",
    },
    popular: false,
    color: "from-violet-500 to-violet-600",
    cta: "https://my.tradercorners.com/en/register/institutional",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                  <div className="text-left p-4 bg-muted/20 rounded-2xl border border-border/50">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center justify-between"><span className="text-muted-foreground">Minimum Initial Deposit</span><span className="font-semibold text-foreground">{account.specs.minDeposit}</span></li>
                      <li className="flex items-center justify-between"><span className="text-muted-foreground">Spreads from pips</span><span className="font-semibold text-foreground">{account.specs.spreadsFrom}</span></li>
                      <li className="flex items-center justify-between"><span className="text-muted-foreground">Minimum Lot Size</span><span className="font-semibold text-foreground">{account.specs.minLot}</span></li>
                      <li className="flex items-center justify-between"><span className="text-muted-foreground">Leverage up to</span><span className="font-semibold text-foreground">{account.specs.leverage}</span></li>
                      <li className="flex items-center justify-between"><span className="text-muted-foreground">Commission</span><span className="font-semibold text-foreground">{account.specs.commission}</span></li>
                      <li className="flex items-center justify-between"><span className="text-muted-foreground">Instruments</span><span className="font-semibold text-foreground text-right">{account.specs.instruments}</span></li>
                      <li className="flex items-center justify-between"><span className="text-muted-foreground">Platforms</span><span className="font-semibold text-foreground">{account.specs.platforms}</span></li>
                      <li className="flex items-center justify-between"><span className="text-muted-foreground">Stop out</span><span className="font-semibold text-foreground">{account.specs.stopOut}</span></li>
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
                      <a href={account.cta} target="_blank" rel="noopener noreferrer">
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
