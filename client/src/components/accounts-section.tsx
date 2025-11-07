import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const accounts = [
  {
    name: "Basic Account",
    description: "Essential trading with low minimums",
    features: [
      { label: "Minimum Initial Deposit", value: "$20" },
      { label: "Spreads from", value: "1.2 pips" },
      { label: "Minimum Lot Size", value: "0.01" },
      { label: "Leverage up to", value: "1:100" },
      { label: "Commission", value: "$0.0" },
      { label: "Instruments", value: "28 FX pairs, Metals, CFD" },
      { label: "Platforms", value: "MT5" },
      { label: "Stop Out", value: "10%" },
    ],
    buttonText: "Open Demo",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Premium Account",
    description: "Tighter spreads and higher leverage",
    features: [
      { label: "Minimum Initial Deposit", value: "$10,000" },
      { label: "Spreads from", value: "0.8 pips" },
      { label: "Minimum Lot Size", value: "0.01" },
      { label: "Leverage up to", value: "1:400" },
      { label: "Commission", value: "$0.0" },
      { label: "Instruments", value: "28 FX pairs, Metals, CFD" },
      { label: "Platforms", value: "MT5" },
      { label: "Stop Out", value: "10%" },
    ],
    buttonText: "Open Account",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "Institutional Account",
    description: "Institutional-grade conditions",
    features: [
      { label: "Minimum Initial Deposit", value: "$20" },
      { label: "Spreads from", value: "0.5 pips" },
      { label: "Minimum Lot Size", value: "0.01" },
      { label: "Leverage up to", value: "1:400" },
      { label: "Commission", value: "$0.0" },
      { label: "Instruments", value: "28 FX pairs, Metals, CFD" },
      { label: "Platforms", value: "MT5" },
      { label: "Stop Out", value: "10%" },
    ],
    buttonText: "Contact Us",
    buttonVariant: "outline" as const,
    popular: false,
  },
];

export default function AccountsSection() {
  return (
    <section id="accounts" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div 
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Perfect Fit
          </motion.div>
          
          <motion.h2 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Account Types
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Choose the perfect account tailored to your trading experience and investment goals
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {accounts.map((account, index) => (
            <motion.div
              key={account.name}
              className={`group relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:shadow-3xl ${
                account.popular ? 'border-primary/50 ring-2 ring-primary/20 mt-6' : ''
              }`}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              style={{ perspective: "1000px" }}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              
              {account.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
                >
                  <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-xl border border-primary/30">
                    ⭐ Most Popular
                  </div>
                </motion.div>
              )}
              
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.h3 
                    className="font-display text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {account.name}
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {account.description}
                  </motion.p>
                </div>
                
                {/* Features */}
                <div className="space-y-3 mb-10">
                  {account.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.label}
                      className="flex justify-between items-center p-4 bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-muted-foreground font-medium">{feature.label}</span>
                      <span className="font-bold text-foreground bg-primary/10 px-3 py-1 rounded-lg">
                        {feature.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <motion.button 
                  onClick={() => { window.open('https://my.tradercorners.com/en/register/account-types', '_blank', 'noopener,noreferrer'); }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden group/btn ${
                    account.buttonVariant === 'default' 
                      ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:shadow-xl' 
                      : account.name === 'VIP'
                      ? 'bg-gradient-to-r from-secondary to-primary text-primary-foreground shadow-lg hover:shadow-xl'
                      : 'bg-card/50 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                  aria-label={`${account.buttonText} for ${account.name} account`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{account.buttonText}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </div>
              
              {/* Hover Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out overflow-hidden rounded-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
