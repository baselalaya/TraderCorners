import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Mail, Phone, MapPin, Globe, Shield, AlertTriangle } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaYoutube, FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  // Newsletter removed

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
        { text: "Trading Platforms", href: "/platforms" }
      ],
    },
    {
      title: "Tools",
      links: [
        { text: "Economic Calendar", href: "/economic-calendar" },
        { text: "FX Calculator", href: "/fx-calculator" }
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms of Service", href: "/terms-of-service" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Risk Disclosure", href: "/risk-disclosure" },
        { text: "Client Agreement", href: "/client-agreement" }
      ],
    }
  ];

  const contactInfo = [
    { icon: Mail, text: "info@tradercorners.com", href: "mailto:info@tradercorners.com" },
    { icon: Phone, text: "+41 44 707 83 88", href: "tel:+41447078388" },
    { icon: MapPin, text: "HAMCHAKO, MUTSAMUDU, ANGOUAN, UNION OF COMOROS", href: "#" },
    { icon: Globe, text: "24/7 Global Support", href: "#" },
  ];

  const certifications = [];

  // Note: Replace the below with actual regulatory details, if any.
  const regulatoryInfo = [
    {
      authority: "Disclosure",
      license: "",
      description: "Trader Corners is not currently listing specific license numbers on this site. Services are provided subject to applicable laws and client eligibility."
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
          <div className="grid grid-cols-1 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Footer Links - expanded to full width */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
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
                  { icon: FaXTwitter, href: "#", label: "X" },
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
                    className="w-10 h-10 bg-card/50 border border-border/30 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 no-underline hover:no-underline"
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
