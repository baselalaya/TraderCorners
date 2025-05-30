import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendingUp } from "lucide-react";
import { FaTwitter, FaLinkedin, FaYoutube, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";

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
      links: ["About Us", "Careers", "Press", "Contact"],
    },
    {
      title: "Products",
      links: ["Forex", "Crypto", "CFDs", "Commodities"],
    },
    {
      title: "Platforms",
      links: ["MT4 Desktop", "Web Platform", "Mobile App", "API"],
    },
    {
      title: "Resources",
      links: ["Education", "Market Analysis", "Economic Calendar", "Trading Tools"],
    },
  ];

  return (
    <footer className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center">
                <TrendingUp className="text-primary-foreground" size={20} />
              </div>
              <span className="font-space text-xl font-bold">Trader Corners</span>
            </div>
            <p className="text-muted-foreground mb-6">
              The premier destination for digital-first trading. Experience the future of finance 
              with our cutting-edge platform.
            </p>
            
            {/* Newsletter Signup */}
            <div className="neumorphic rounded-xl p-4">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border-muted-foreground rounded-r-none focus:border-primary"
                />
                <Button 
                  type="submit"
                  className={`rounded-l-none px-6 transition-all ${
                    isSubscribed 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-gradient-cyber text-primary-foreground hover:shadow-lg'
                  }`}
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </Button>
              </form>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-space font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 Trader Corners. All rights reserved. Trading involves risk.
            </div>
            
            <div className="flex space-x-6">
              {[
                { icon: FaTwitter, href: "#" },
                { icon: FaLinkedin, href: "#" },
                { icon: FaYoutube, href: "#" },
                { icon: FaTelegram, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
