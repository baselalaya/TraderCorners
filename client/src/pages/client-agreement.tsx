import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileSignature, 
  Handshake, 
  DollarSign,
  Shield,
  Clock,
  AlertTriangle,
  CheckCircle,
  Globe,
  Users
} from "lucide-react";

export default function ClientAgreement() {
  const agreementSections = [
    {
      title: "1. Parties and Scope",
      icon: Users,
      content: [
        "This Client Agreement ('Agreement') is between you ('Client') and Trader Corners ('Company'), a regulated financial services provider.",
        "This Agreement governs all trading activities, account services, and business relationships between the Client and Company.",
        "By opening an account, you acknowledge that you have read, understood, and agree to be bound by this Agreement and all applicable terms.",
        "This Agreement supplements and should be read in conjunction with our Terms of Service, Privacy Policy, and Risk Disclosure."
      ]
    },
    {
      title: "2. Account Opening and Verification",
      icon: FileSignature,
      content: [
        "To open an account, you must complete our application process and provide all requested documentation for identity and address verification.",
        "We reserve the right to request additional information or documentation at any time to comply with regulatory requirements.",
        "Your account will be activated only after successful completion of our Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures.",
        "You must immediately notify us of any changes to your personal information, financial circumstances, or contact details."
      ]
    },
    {
      title: "3. Trading Authorization and Instructions",
      icon: Handshake,
      content: [
        "You authorize us to execute trades on your behalf based on instructions received through our authorized trading platforms.",
        "All trading instructions must be clear, complete, and received through our official channels during market hours.",
        "We may refuse to execute any instruction that we consider unclear, incomplete, or potentially harmful to your account.",
        "You acknowledge that market conditions may affect order execution, including price slippage and partial fills."
      ]
    },
    {
      title: "4. Deposits, Withdrawals, and Payments",
      icon: DollarSign,
      content: [
        "Deposits must be made from accounts in your name and may be subject to verification procedures and processing delays.",
        "Withdrawal requests are processed during business hours and may take 1-5 business days depending on the payment method.",
        "We reserve the right to request additional verification before processing withdrawal requests, especially for large amounts.",
        "All fees, charges, and commissions are deducted from your account balance and detailed in your account statements."
      ]
    },
    {
      title: "5. Margin and Leverage",
      icon: Shield,
      content: [
        "Margin trading allows you to open positions larger than your account balance but increases both profit potential and loss risk.",
        "Margin requirements vary by instrument and market conditions and may be changed without prior notice during volatile periods.",
        "If your account equity falls below the required margin level, we may close some or all of your positions to prevent further losses.",
        "You are responsible for monitoring your margin levels and maintaining adequate funds in your account at all times."
      ]
    },
    {
      title: "6. Risk Management and Position Limits",
      icon: AlertTriangle,
      content: [
        "We may impose position limits, trading restrictions, or other risk management measures to protect both you and the Company.",
        "Stop-out levels and margin call procedures are designed to limit losses but do not guarantee protection against market gaps.",
        "During extreme market conditions, we may temporarily restrict trading, modify spreads, or implement additional margin requirements.",
        "You acknowledge that risk management tools like stop-losses may not always be executed at the intended price due to market conditions."
      ]
    },
    {
      title: "7. Reporting and Record Keeping",
      icon: Clock,
      content: [
        "We provide regular account statements, trade confirmations, and other reports as required by regulations and requested by clients.",
        "You should review all statements and reports promptly and notify us immediately of any discrepancies or errors.",
        "We maintain detailed records of all transactions, communications, and account activities as required by regulatory authorities.",
        "Historical data, statements, and reports are available through your client portal for the duration specified in our retention policy."
      ]
    },
    {
      title: "8. Complaints and Dispute Resolution",
      icon: Handshake,
      content: [
        "Any complaints should be submitted in writing to our compliance department for investigation and resolution.",
        "We will acknowledge receipt of complaints within 1 business day and provide a full response within 15 business days.",
        "If you are not satisfied with our response, you may escalate the matter to the relevant financial ombudsman or regulatory authority.",
        "All disputes are subject to the jurisdiction and laws of Comoros, unless otherwise specified by regulatory requirements."
      ]
    }
  ];

  const keyTerms = [
    {
      term: "Margin Call",
      definition: "A demand for additional funds when your account equity falls below the required margin level."
    },
    {
      term: "Stop Out",
      definition: "Automatic closure of positions when account equity reaches a predetermined percentage of required margin."
    },
    {
      term: "Slippage",
      definition: "The difference between the expected price of a trade and the actual executed price."
    },
    {
      term: "Overnight Fees",
      definition: "Charges applied to positions held overnight, based on the interest rate differential between currencies."
    },
    {
      term: "Leverage",
      definition: "The ratio of the position size to the actual margin required to open the position."
    },
    {
      term: "Spread",
      definition: "The difference between the bid (sell) and ask (buy) prices of a financial instrument."
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
                  <FileSignature className="w-4 h-4 inline mr-2" />
                  Legal Agreement
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Client Agreement
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
                  This agreement governs the business relationship between you and Trader Corners.
                </p>
                <div className="text-sm text-muted-foreground">
                  Last updated: January 31, 2025
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="border-blue-300 bg-blue-100">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-200 rounded-xl flex items-center justify-center">
                      <Handshake className="text-blue-700" size={20} />
                    </div>
                    <CardTitle className="text-blue-800">Legal Agreement Notice</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-800 leading-relaxed">
                    This Client Agreement constitutes a legally binding contract between you and Trader Corners. 
                    Please read all sections carefully before opening an account or engaging in trading activities. 
                    By using our services, you acknowledge that you understand and accept all terms outlined in this agreement.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Agreement Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {agreementSections.map((section, index) => {
                  const IconComponent = section.icon;
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
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                              <IconComponent className="text-primary" size={20} />
                            </div>
                            <CardTitle className="text-xl text-foreground">{section.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {section.content.map((paragraph, idx) => (
                              <div key={idx} className="flex items-start space-x-3">
                                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <CheckCircle className="w-3 h-3 text-primary" />
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{paragraph}</p>
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

        {/* Key Terms */}
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
                  Key Terms & Definitions
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Important trading terms you should understand
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {keyTerms.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="backdrop-blur-xl bg-card/30 border border-border/30 h-full">
                      <CardHeader>
                        <CardTitle className="text-lg text-foreground">{item.term}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{item.definition}</p>
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
                    <CardTitle className="text-xl text-foreground">Agreement Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      If you have any questions about this Client Agreement or need clarification on any terms, please contact our legal department:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Shield className="text-primary" size={16} />
                        <span className="text-sm text-muted-foreground">Email: legal@tradercorners.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="text-primary" size={16} />
                        <span className="text-sm text-muted-foreground">Phone: +41 44 707 83 88</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="text-primary" size={16} />
                        <span className="text-sm text-muted-foreground">Address: Comoros, Anjouan</span>
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