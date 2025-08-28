import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Lock, 
  Eye,
  Database,
  Users,
  CheckCircle,
  AlertTriangle,
  Globe
} from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      icon: Database,
      content: [
        "Personal Information: Name, address, phone number, email address, date of birth, and government-issued identification for account verification and regulatory compliance.",
        "Financial Information: Bank account details, payment method information, trading history, account balances, and transaction records.",
        "Technical Information: IP address, browser type, device information, cookies, and usage data to improve our services and ensure platform security.",
        "Communication Records: Chat logs, email correspondence, phone call recordings, and support ticket interactions for quality assurance and dispute resolution."
      ]
    },
    {
      title: "2. How We Use Your Information",
      icon: Users,
      content: [
        "Account Management: To create and maintain your trading account, verify your identity, and provide customer support services.",
        "Regulatory Compliance: To comply with Know Your Customer (KYC), Anti-Money Laundering (AML), and other regulatory requirements.",
        "Service Provision: To execute trades, process payments, send account statements, and provide market analysis and educational materials.",
        "Security and Fraud Prevention: To monitor suspicious activities, prevent fraud, and protect both you and our platform from unauthorized access."
      ]
    },
    {
      title: "3. Information Sharing and Disclosure",
      icon: Shield,
      content: [
        "Regulatory Authorities: We may share information with financial regulators, law enforcement, and government agencies as required by law.",
        "Service Providers: We work with trusted third-party providers for payment processing, identity verification, and technical services under strict confidentiality agreements.",
        "Legal Requirements: We may disclose information when required by court orders, subpoenas, or other legal processes.",
        "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity with appropriate protections."
      ]
    },
    {
      title: "4. Data Security Measures",
      icon: Lock,
      content: [
        "Encryption: All sensitive data is encrypted both in transit and at rest using industry-standard encryption protocols (AES-256).",
        "Access Controls: Strict access controls ensure only authorized personnel can access your personal information on a need-to-know basis.",
        "Monitoring: We continuously monitor our systems for unauthorized access attempts and suspicious activities.",
        "Regular Audits: We conduct regular security audits and penetration testing to identify and address potential vulnerabilities."
      ]
    },
    {
      title: "5. Your Privacy Rights",
      icon: Eye,
      content: [
        "Access Rights: You have the right to request access to the personal information we hold about you and how it's being used.",
        "Correction Rights: You can request corrections to any inaccurate or incomplete personal information in your account.",
        "Deletion Rights: You may request deletion of your personal information, subject to regulatory retention requirements.",
        "Portability Rights: You can request a copy of your personal data in a structured, machine-readable format for transfer to another service provider."
      ]
    },
    {
      title: "6. Cookies and Tracking Technologies",
      icon: Globe,
      content: [
        "Essential Cookies: We use necessary cookies to provide basic platform functionality, maintain security, and remember your login status.",
        "Analytics Cookies: We collect anonymous usage data to understand how our platform is used and to improve user experience.",
        "Marketing Cookies: With your consent, we may use cookies to show you relevant advertisements and measure campaign effectiveness.",
        "Cookie Management: You can control cookie settings through your browser, though disabling essential cookies may affect platform functionality."
      ]
    },
    {
      title: "7. International Data Transfers",
      icon: Globe,
      content: [
        "Cross-Border Transfers: Your data may be transferred to and processed in countries outside your residence for service provision and regulatory compliance.",
        "Adequate Protection: We ensure appropriate safeguards are in place when transferring data internationally, including standard contractual clauses.",
        "Regulatory Compliance: All international transfers comply with applicable data protection laws and regulations.",
        "Data Localization: Where required by law, we maintain local data storage and processing capabilities in specific jurisdictions."
      ]
    },
    {
      title: "8. Data Retention",
      icon: Database,
      content: [
        "Regulatory Requirements: We retain personal and trading data as required by financial regulations, typically 5-7 years after account closure.",
        "Active Accounts: Information for active accounts is retained for the duration of the business relationship and as required by law.",
        "Deletion Procedures: When data is no longer required, it is securely deleted using industry-standard data destruction methods.",
        "Backup Systems: Data in backup systems is also subject to the same retention and deletion policies."
      ]
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
                  <Shield className="w-4 h-4 inline mr-2" />
                  Privacy & Data Protection
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Privacy Policy
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
                  Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Shield className="text-blue-600" size={20} />
                      </div>
                      <CardTitle className="text-blue-800">Privacy Commitment</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-800 leading-relaxed">
                      Trader Corners is committed to protecting your privacy and ensuring the security of your personal information. 
                      We comply with all applicable data protection regulations including GDPR, CCPA, and local privacy laws.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Privacy Sections */}
              <div className="space-y-8">
                {sections.map((section, index) => {
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

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <Card className="backdrop-blur-xl bg-card/30 border border-border/30">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Data Protection Officer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      For any privacy-related questions or to exercise your privacy rights, please contact our Data Protection Officer:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Shield className="text-primary" size={16} />
                        <span className="text-sm text-muted-foreground">Email: privacy@tradercorners.com</span>
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