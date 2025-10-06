import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, TrendingUp, Shield, Users, Zap } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo";

const accountTypes = [
  {
    id: "basic",
    name: "Basic Account",
    description: "Essential trading with low minimums and MT5 access",
    minDeposit: "$20",
    maxLeverage: "1:100",
    spreads: "From 1.2 pips",
    commission: "$0.0",
    features: [
      "Minimum Lot Size: 0.01",
      "Instruments: 28 FX pairs, Metals, CFD",
      "Platforms: MT5",
      "Stop Out: 10%",
    ],
    recommended: false,
    color: "bg-secondary"
  },
  {
    id: "premium",
    name: "Premium Account",
    description: "Tighter spreads and higher leverage for active traders",
    minDeposit: "$10,000",
    maxLeverage: "1:400",
    spreads: "From 0.8 pips",
    commission: "$0.0",
    features: [
      "Minimum Lot Size: 0.01",
      "Instruments: 28 FX pairs, Metals, CFD",
      "Platforms: MT5",
      "Stop Out: 10%",
    ],
    recommended: true,
    color: "bg-secondary"
  },
  {
    id: "institutional",
    name: "Institutional Account",
    description: "Institutional-grade conditions with ultra-low spreads",
    minDeposit: "$20",
    maxLeverage: "1:400",
    spreads: "From 0.5 pips",
    commission: "$0.0",
    features: [
      "Minimum Lot Size: 0.01",
      "Instruments: 28 FX pairs, Metals, CFD",
      "Platforms: MT5",
      "Stop Out: 10%",
    ],
    recommended: false,
    color: "bg-secondary"
  }
];

const comparisonFeatures = [
  "Demo Account",
  "Mobile Trading",
  "Web Platform",
  "Desktop Platform",
  "Educational Content",
  "Market Analysis",
  "Customer Support",
  "Risk Management",
  "Trading Signals",
  "Personal Manager",
  "VPS Hosting",
  "API Access"
];

export default function AccountsPage() {
  return (
    <>
      <SEO page="accounts" />
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
                Account Types
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Choose the Perfect
                <span className="text-primary block">Trading Account</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                From beginners to professionals, we have account types designed to match your trading experience and goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Account Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accountTypes.map((account, index) => (
              <motion.div
                key={account.id}
                id={account.id}
                className={`relative bg-white rounded-3xl shadow-xl border-2 ${
                  account.recommended ? 'border-primary shadow-primary/10' : 'border-border'
                } overflow-hidden`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {account.recommended && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}

                {/* Header */}
                <div className={`${account.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{account.name}</h3>
                  <p className="text-white/90 text-sm">{account.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Key Specs */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground">Minimum Deposit</div>
                      <div className="text-xl font-bold text-foreground">{account.minDeposit}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Max Leverage</div>
                      <div className="text-lg font-semibold text-foreground">{account.maxLeverage}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Spreads</div>
                      <div className="text-lg font-semibold text-foreground">{account.spreads}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Commission</div>
                      <div className="text-lg font-semibold text-foreground">{account.commission}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {account.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${
                      account.recommended
                        ? 'bg-primary hover:bg-primary/90'
                        : 'bg-secondary hover:bg-secondary/90'
                    }`}
                    size="lg"
                    asChild
                  >
                    <a href="https://my.tradercorners.com/en/register/account-types">Open {account.name} Account</a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Compare Account Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what's included with each account type to make the best choice for your trading needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-6 font-semibold text-foreground">Features</th>
                    {accountTypes.map((account) => (
                      <th key={account.id} className="text-center p-6 font-semibold text-foreground min-w-[140px]">
                        {account.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature} className={index % 2 === 0 ? 'bg-white' : 'bg-muted/20'}>
                      <td className="p-4 font-medium text-muted-foreground">{feature}</td>
                      {accountTypes.map((account) => {
                        const hasFeature = account.features.some(f => 
                          f.toLowerCase().includes(feature.toLowerCase().split(' ')[0]) ||
                          (feature === 'Demo Account' && account.features.includes('Demo account included')) ||
                          (feature === 'Mobile Trading' && account.features.includes('Mobile trading app')) ||
                          (feature === 'Web Platform' && account.id !== 'starter') ||
                          (feature === 'Desktop Platform' && account.id !== 'starter') ||
                          (feature === 'Educational Content' && account.features.includes('Educational resources')) ||
                          (feature === 'Customer Support' && account.features.some(f => f.includes('support'))) ||
                          (feature === 'Personal Manager' && account.features.some(f => f.includes('manager'))) ||
                          (feature === 'VPS Hosting' && account.features.includes('VPS hosting included')) ||
                          (feature === 'API Access' && account.features.includes('API access'))
                        );
                        
                        return (
                          <td key={account.id} className="p-4 text-center">
                            {hasFeature ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <div className="w-5 h-5 rounded-full bg-muted mx-auto"></div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Choose Trader Corners?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Regulated & Secure",
                description: "Licensed by top-tier regulators with segregated client funds and negative balance protection."
              },
              {
                icon: Zap,
                title: "Ultra-Fast Execution",
                description: "Lightning-fast order execution with 99.9% uptime and institutional-grade infrastructure."
              },
              {
                icon: TrendingUp,
                title: "Competitive Spreads",
                description: "Industry-leading spreads starting from 0.2 pips with transparent pricing and no hidden fees."
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "24/7 multilingual support from trading experts ready to assist with your questions."
              },
              {
                icon: Star,
                title: "Award-Winning Platform",
                description: "Industry-recognized trading platforms with advanced tools and cutting-edge technology."
              },
              {
                icon: Shield,
                title: "Risk Management",
                description: "Advanced risk management tools including stop loss, take profit, and guaranteed stops."
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
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
                Ready to Open Your Account?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of traders who trust Trader Corners for their trading success
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.button 
                  className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Open Live Account</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
                
                <motion.button 
                  className="border-2 border-white/80 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm bg-white/10 hover:bg-white hover:text-primary transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Try Demo First</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </div>
              
              <div className="flex items-center justify-center space-x-6 text-white/70 text-sm">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>Account Tiers Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>Instant Verification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>Premium Support</span>
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
