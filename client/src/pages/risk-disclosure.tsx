import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  AlertTriangle, 
  TrendingDown, 
  DollarSign,
  BarChart3,
  Zap,
  CheckCircle,
  Shield,
  Globe
} from "lucide-react";

export default function RiskDisclosure() {
  const riskFactors = [
    {
      title: "Market Risk",
      icon: BarChart3,
      description: "Financial markets are inherently volatile and unpredictable",
      risks: [
        "Market prices can fluctuate rapidly due to economic events, news, or market sentiment",
        "Past performance is not indicative of future results and does not guarantee future profits",
        "Economic indicators, political events, and natural disasters can cause significant market movements",
        "Market gaps and slippage can occur, especially during periods of high volatility or low liquidity"
      ]
    },
    {
      title: "Leverage Risk",
      icon: TrendingDown,
      description: "Leveraged trading amplifies both potential profits and losses",
      risks: [
        "High leverage can result in losses exceeding your initial investment",
        "Small market movements can lead to significant losses when using leverage",
        "Margin calls may require you to deposit additional funds or close positions at a loss",
        "Leverage ratios vary by instrument and can change based on market conditions"
      ]
    },
    {
      title: "CFD-Specific Risks",
      icon: DollarSign,
      description: "Contracts for Difference carry unique risks and characteristics",
      risks: [
        "CFDs are complex instruments with a high risk of losing money rapidly due to leverage",
        "You do not own the underlying asset when trading CFDs",
        "Overnight financing charges apply to positions held overnight",
        "Corporate actions on underlying assets may affect your CFD positions"
      ]
    },
    {
      title: "Technology Risk",
      icon: Zap,
      description: "Technical issues can impact your ability to trade",
      risks: [
        "Internet connectivity issues may prevent you from accessing your account or executing trades",
        "Platform downtime or technical failures could result in missed trading opportunities",
        "System delays may cause orders to be executed at different prices than intended",
        "Cybersecurity threats could potentially compromise account security"
      ]
    },
    {
      title: "Liquidity Risk",
      icon: BarChart3,
      description: "Market liquidity can affect your ability to enter or exit positions",
      risks: [
        "Low liquidity may result in wider spreads and difficulty executing large orders",
        "During volatile market conditions, liquidity can decrease rapidly",
        "Some instruments may have limited trading hours or market access",
        "Position closures may be delayed or executed at unfavorable prices during illiquid periods"
      ]
    },
    {
      title: "Regulatory Risk",
      icon: Shield,
      description: "Changes in regulations can affect trading conditions",
      risks: [
        "Regulatory changes may impact leverage limits, product availability, or trading conditions",
        "Tax implications of trading may change based on regulatory updates",
        "Cross-border regulatory differences may affect international clients",
        "Compliance requirements may result in account restrictions or verification delays"
      ]
    }
  ];

  const importantNotices = [
    {
      title: "Retail Client Statistics",
      content: "Between 74-89% of retail investor accounts lose money when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money."
    },
    {
      title: "Suitability Assessment",
      content: "Trading is not suitable for all investors. Before trading, please ensure you understand the risks involved and consider your investment objectives, level of experience, and risk tolerance."
    },
    {
      title: "Independent Decision Making",
      content: "Any information provided by Trader Corners is for educational purposes only and should not be considered as investment advice. All trading decisions are your own responsibility."
    },
    {
      title: "Regulatory Compliance",
      content: "Trader Corners is regulated by multiple financial authorities. However, regulatory protection may vary depending on your jurisdiction and the specific products you trade."
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
                <div className="inline-block px-4 py-2 bg-red-100 border border-red-200 rounded-full text-sm font-semibold text-red-700 backdrop-blur-sm mb-6">
                  <AlertTriangle className="w-4 h-4 inline mr-2" />
                  Important Risk Information
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Risk Disclosure
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
                  Trading involves significant risk of loss. Please read this disclosure carefully before trading.
                </p>
                <div className="text-sm text-muted-foreground">
                  Last updated: January 31, 2025
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Critical Warning */}
        <section className="py-12 bg-red-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="border-red-300 bg-red-100">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-200 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="text-red-700" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-red-800 text-xl">High Risk Investment Warning</CardTitle>
                      <CardDescription className="text-red-700">Please read carefully before proceeding</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-red-800 font-semibold text-lg mb-4">
                    CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
                  </div>
                  <p className="text-red-700 leading-relaxed">
                    <strong>74-89% of retail investor accounts lose money when trading CFDs with providers.</strong> 
                    You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. 
                    Past performance is not a reliable indicator of future results.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Risk Factors */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Key Risk Factors
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Understanding the various risks involved in trading financial instruments
                </p>
              </motion.div>

              <div className="space-y-8">
                {riskFactors.map((factor, index) => {
                  const IconComponent = factor.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="backdrop-blur-xl bg-card/30 border border-border/30">
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                              <IconComponent className="text-red-600" size={20} />
                            </div>
                            <div>
                              <CardTitle className="text-xl text-foreground">{factor.title}</CardTitle>
                              <CardDescription>{factor.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {factor.risks.map((risk, idx) => (
                              <div key={idx} className="flex items-start space-x-3">
                                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <AlertTriangle className="w-3 h-3 text-red-600" />
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{risk}</p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Important Notices */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Important Notices
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Additional information you should consider before trading
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {importantNotices.map((notice, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="backdrop-blur-xl bg-card/30 border border-border/30 h-full">
                      <CardHeader>
                        <CardTitle className="text-lg text-foreground">{notice.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{notice.content}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="backdrop-blur-xl bg-card/30 border border-border/30">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Need Clarification?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      If you have any questions about these risks or need additional information before trading, please contact our risk management team:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Shield className="text-primary" size={16} />
                        <span className="text-sm text-muted-foreground">Email: risk@tradercorners.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="text-primary" size={16} />
                        <span className="text-sm text-muted-foreground">Phone: +41 44 707 83 88</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}