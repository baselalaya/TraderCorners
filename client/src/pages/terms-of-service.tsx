import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Shield, 
  CheckCircle,
  AlertTriangle,
  Globe,
  Users
} from "lucide-react";

export default function TermsOfService() {
  const sections = [
    {
      title: "1. Introduction and Acceptance",
      content: [
        "These Terms of Service ('Terms') govern your use of Trader Corners trading platform and services ('Services'). By accessing or using our Services, you agree to be bound by these Terms.",
        "These Terms constitute a legally binding agreement between you and Trader Corners. If you do not agree with any part of these Terms, you must not use our Services.",
        "We may update these Terms from time to time. Continued use of our Services after changes constitutes acceptance of the new Terms."
      ]
    },
    {
      title: "2. Eligibility and Account Registration", 
      content: [
        "You must be at least 18 years old and legally capable of entering into binding contracts to use our Services.",
        "You must provide accurate, complete, and current information during registration and maintain the accuracy of your account information.",
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
        "We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion."
      ]
    },
    {
      title: "3. Trading Services and Risks",
      content: [
        "Our platform provides access to CFDs, forex, commodities, indices, and cryptocurrency trading. All trading involves substantial risk of loss.",
        "Past performance is not indicative of future results. You may lose some or all of your invested capital.",
        "You acknowledge that you understand the risks associated with trading and that you are solely responsible for your trading decisions.",
        "We provide educational materials and risk warnings, but these do not constitute investment advice."
      ]
    },
    {
      title: "4. Fees and Charges",
      content: [
        "Trading fees, spreads, and commissions are clearly displayed on our platform before order execution.",
        "We may charge fees for deposits, withdrawals, account maintenance, or inactivity as specified in our fee schedule.",
        "All fees are subject to change with appropriate notice. Current fee schedules are available on our website.",
        "You are responsible for any taxes or regulatory fees associated with your trading activities."
      ]
    },
    {
      title: "5. Prohibited Activities",
      content: [
        "You may not use our Services for any illegal activities, money laundering, or fraud.",
        "Market manipulation, insider trading, and abusive trading practices are strictly prohibited.",
        "You may not attempt to gain unauthorized access to our systems or interfere with our Services.",
        "Sharing account credentials or allowing third parties to trade on your behalf without authorization is prohibited."
      ]
    },
    {
      title: "6. Intellectual Property",
      content: [
        "All content, software, and materials on our platform are protected by intellectual property rights and owned by Trader Corners or our licensors.",
        "You are granted a limited, non-exclusive license to use our platform for personal trading purposes only.",
        "You may not copy, modify, distribute, or reverse engineer any part of our platform without written permission.",
        "All trademarks, logos, and brand names are the property of their respective owners."
      ]
    },
    {
      title: "7. Limitation of Liability",
      content: [
        "Our liability is limited to the maximum extent permitted by law. We are not liable for any indirect, incidental, or consequential damages.",
        "We do not guarantee uninterrupted or error-free service and are not liable for any losses resulting from system downtime or technical issues.",
        "Our total liability for any claims shall not exceed the fees you have paid to us in the 12 months preceding the claim.",
        "You agree to indemnify and hold us harmless from any claims arising from your use of our Services."
      ]
    },
    {
      title: "8. Dispute Resolution",
      content: [
        "Any disputes arising from these Terms or your use of our Services shall be resolved through binding arbitration.",
        "Arbitration shall be conducted according to the rules of the jurisdiction where Trader Corners is incorporated.",
        "You waive any right to participate in class action lawsuits or class-wide arbitration.",
        "These Terms are governed by the laws of Comoros and any applicable international regulations."
      ]
    }
  ];

  return (
    <>
      <SEO page="terms" />
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
                  <FileText className="w-4 h-4 inline mr-2" />
                  Legal Documentation
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Terms of Service
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
                  Please read these terms carefully before using our trading platform and services.
                </p>
                <div className="text-sm text-muted-foreground">
                  Last updated: January 31, 2025
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Important Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="border-amber-200 bg-amber-50">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                        <AlertTriangle className="text-amber-600" size={20} />
                      </div>
                      <CardTitle className="text-amber-800">Important Notice</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-800 leading-relaxed">
                      By using Trader Corners' services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
                      Trading CFDs and leveraged products involves substantial risk and may not be suitable for all investors.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Terms Sections */}
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="backdrop-blur-xl bg-card/30 border border-border/30">
                      <CardHeader>
                        <CardTitle className="text-xl text-foreground">{section.title}</CardTitle>
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
                ))}
              </div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <Card className="backdrop-blur-xl bg-card/30 border border-border/30">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Questions or Concerns?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      If you have any questions about these Terms of Service, please contact our legal team:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Shield className="text-primary" size={16} />
                        <span className="text-sm text-muted-foreground">Email: legal@tradercorners.com</span>
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
