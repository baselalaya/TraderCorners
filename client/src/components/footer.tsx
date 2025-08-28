import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Mail, Phone, MapPin, Globe, Shield, Award, Users, AlertTriangle } from "lucide-react";
import { FaTwitter, FaLinkedin, FaYoutube, FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 2000);
    }
  };

  const footerSections = [
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Contact", href: "/contact" }
      ],
    },
    {
      title: "Trading",
      links: [
        { text: "Trading Products", href: "/products" },
        { text: "Account Types", href: "/accounts" },
        { text: "Trading Platforms", href: "/platforms" },
        { text: "Education", href: "/education" }
      ],
    },
    {
      title: "Legal & Compliance",
      links: [
        { text: "Terms of Service", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Risk Disclosure", href: "#" },
        { text: "Client Agreement", href: "#" }
      ],
    }
  ];

  const contactInfo = [
    { icon: Mail, text: "info@tradercorners.com", href: "mailto:info@tradercorners.com" },
    { icon: Phone, text: "+41 44 707 83 88", href: "tel:+41447078388" },
    { icon: MapPin, text: "Comoros, Anjouan", href: "#" },
    { icon: Globe, text: "24/7 Global Support", href: "#" },
  ];

  const certifications = [
    { icon: Shield, text: "Multi-Regulated" },
    { icon: Award, text: "ISO 27001 Certified" },
    { icon: Users, text: "500K+ Traders" },
  ];

  const regulatoryInfo = [
    {
      authority: "FCA (UK)",
      license: "Firm Reference Number: 793806",
      description: "Authorized and regulated by the Financial Conduct Authority"
    },
    {
      authority: "CySEC (EU)",
      license: "License Number: 319/17",
      description: "Licensed and regulated by the Cyprus Securities and Exchange Commission"
    },
    {
      authority: "ASIC (AU)",
      license: "AFSL Number: 491139",
      description: "Regulated by the Australian Securities and Investments Commission"
    }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl opacity-20" />
      
      <div className="relative z-10 py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Brand & Newsletter Section */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <img 
                    src="/logo-trader.png" 
                    alt="Trader Corners"
                    className="h-12 w-auto"
                  />
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  The premier destination for digital-first trading. Experience the future of finance 
                  with our cutting-edge platform, advanced analytics, and professional-grade tools.
                </p>
                
                {/* Newsletter Signup */}
                <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-6 mb-8">
                  <h4 className="font-display text-lg font-bold mb-3 text-foreground">Stay Updated</h4>
                  <p className="text-sm text-muted-foreground mb-4">Get market insights and platform updates</p>
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                    <motion.button
                      type="submit"
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        isSubscribed 
                          ? 'bg-green-500 hover:bg-green-600 text-white' 
                          : 'bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubscribed ? 'Subscribed!' : 'Subscribe to Updates'}
                    </motion.button>
                  </form>
                </div>


              </motion.div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {footerSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-display font-bold mb-4 md:mb-6 text-foreground text-sm md:text-base">{section.title}</h4>
                    <ul className="space-y-2 md:space-y-3">
                      {section.links.map((link) => (
                        <li key={link.text}>
                          <motion.a 
                            href={link.href} 
                            className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                            whileHover={{ x: 3 }}
                          >
                            {link.text}
                          </motion.a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Regulatory & Compliance Section */}
          <motion.div 
            className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-2xl p-4 md:p-6 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div key={index} className="flex items-center justify-center space-x-3 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-primary" size={20} />
                    </div>
                    <span className="font-semibold text-foreground">{cert.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Regulatory Information */}
            <div className="border-t border-border/30 pt-6">
              <h4 className="font-display font-bold text-foreground mb-4 text-center">Regulatory Compliance</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {regulatoryInfo.map((reg, index) => (
                  <div key={index} className="bg-background/50 rounded-xl p-4 border border-border/30">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield size={16} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-sm text-foreground mb-1">{reg.authority}</h5>
                        <p className="text-xs text-primary font-medium mb-2">{reg.license}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{reg.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Risk Warning */}
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle size={14} className="text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-amber-800 leading-relaxed">
                      <strong>Risk Warning:</strong> Trading CFDs and leveraged products involves substantial risk of loss and may not be suitable for all investors. 
                      Past performance is not indicative of future results. Please ensure you understand the risks before trading.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Bottom Section */}
          <div className="border-t border-border/50 pt-6 md:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* Copyright */}
              <motion.div 
                className="text-center lg:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-muted-foreground text-xs md:text-sm mb-2">
                  © 2025 Trader Corners. All rights reserved.
                </div>
                <div className="text-xs text-muted-foreground/70">
                  Trading involves risk. Your capital may be at risk. Only trade with money you can afford to lose.
                </div>
              </motion.div>
              
              {/* Social Media */}
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: FaTwitter, href: "#", label: "Twitter" },
                  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                  { icon: FaYoutube, href: "#", label: "YouTube" },
                  { icon: FaInstagram, href: "#", label: "Instagram" },
                  { icon: FaTelegram, href: "#", label: "Telegram" },
                  { icon: FaFacebook, href: "#", label: "Facebook" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-card/50 border border-border/30 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}