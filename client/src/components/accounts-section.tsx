import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const accounts = [
  {
    name: "Demo",
    description: "Practice without risk",
    features: [
      { label: "Virtual Balance", value: "$100,000" },
      { label: "Spreads", value: "From 0.1 pips" },
      { label: "Leverage", value: "Up to 1:500" },
      { label: "Commission", value: "$0" },
    ],
    buttonText: "Open Demo",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Standard",
    description: "For serious traders",
    features: [
      { label: "Minimum Deposit", value: "$100" },
      { label: "Spreads", value: "From 0.8 pips" },
      { label: "Leverage", value: "Up to 1:500" },
      { label: "Commission", value: "$0" },
    ],
    buttonText: "Open Account",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "VIP",
    description: "Premium experience",
    features: [
      { label: "Minimum Deposit", value: "$10,000" },
      { label: "Spreads", value: "From 0.0 pips" },
      { label: "Leverage", value: "Up to 1:500" },
      { label: "Commission", value: "$3.5/lot" },
    ],
    buttonText: "Contact VIP",
    buttonVariant: "outline" as const,
    popular: false,
  },
];

export default function AccountsSection() {
  return (
    <section id="accounts" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">Account Types</h2>
          <p className="text-xl text-muted-foreground">Choose the perfect account for your trading journey</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {accounts.map((account, index) => (
            <motion.div
              key={account.name}
              className={`neumorphic rounded-2xl p-8 glow-hover scroll-reveal relative group card-tilt ${
                account.popular ? 'ring-2 ring-primary/50 pulse-glow' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 3,
                transition: { duration: 0.3 }
              }}
            >
              {account.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="btn-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="font-space text-2xl font-bold mb-2">{account.name}</h3>
                <p className="text-muted-foreground text-balance">{account.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {account.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature.label}
                    className="flex justify-between p-3 neumorphic rounded-lg"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-muted-foreground">{feature.label}</span>
                    <span className="font-semibold">{feature.value}</span>
                  </motion.div>
                ))}
              </div>
              
              <Button 
                variant={account.buttonVariant}
                className={`w-full py-3 glow-hover ${
                  account.buttonVariant === 'default' 
                    ? 'btn-primary text-primary-foreground hover:shadow-lg' 
                    : account.name === 'VIP'
                    ? 'border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground backdrop-blur-sm'
                    : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground backdrop-blur-sm'
                }`}
              >
                {account.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
