import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Menu, X, ChevronDown, BarChart3, Monitor, BookOpen, User, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaYoutube, FaTelegram } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMarketsDropdown, setShowMarketsDropdown] = useState(false);

  return (
    <header className="fixed top-0 w-full z-[100] bg-background/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Trader Corners"
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button 
                className="flex items-center space-x-1 hover:text-primary transition-colors font-medium py-2"
                onMouseEnter={() => setShowMarketsDropdown(true)}
                onMouseLeave={() => setShowMarketsDropdown(false)}
              >
                <span>Markets</span>
                <ChevronDown size={14} className={`transition-transform ${showMarketsDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 w-64 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-600/50 transition-all duration-300 ${
                  showMarketsDropdown ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'
                }`}
                style={{ zIndex: 1000 }}
                onMouseEnter={() => setShowMarketsDropdown(true)}
                onMouseLeave={() => setShowMarketsDropdown(false)}
              >
                <div className="p-4 space-y-2">
                  <a href="#forex" className="flex items-center space-x-3 px-4 py-3 text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-all">
                    <span className="text-lg">FX</span>
                    <span className="font-medium">Forex Trading</span>
                  </a>
                  <a href="#crypto" className="flex items-center space-x-3 px-4 py-3 text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-all">
                    <span className="text-lg">₿</span>
                    <span className="font-medium">Cryptocurrency</span>
                  </a>
                  <a href="#stocks" className="flex items-center space-x-3 px-4 py-3 text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-all">
                    <span className="text-lg">STK</span>
                    <span className="font-medium">Stock Markets</span>
                  </a>
                  <a href="#commodities" className="flex items-center space-x-3 px-4 py-3 text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-all">
                    <span className="text-lg">OIL</span>
                    <span className="font-medium">Commodities</span>
                  </a>
                </div>
              </div>
            </div>
            
            <a href="#platforms" className="relative font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105">Platforms</a>
            <a href="#education" className="relative font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105">Education</a>
            <a href="#accounts" className="relative font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105">Accounts</a>
            <a href="#contact" className="relative font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105">Contact</a>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button 
              className="border-2 border-primary text-primary bg-transparent px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Login to your trading account"
            >
              <span className="relative z-10 font-bold">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            <motion.button 
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Start trading with Trader Corners"
            >
              <span className="relative z-10 font-bold">Start Trading</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Full-Screen Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 z-50 bg-slate-900/98 backdrop-blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/20 bg-[#ffffff]">
                <img 
                  src="/logo.png" 
                  alt="Trader Corners"
                  className="h-10 w-auto"
                />
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 rounded-xl bg-card/50 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-8 py-12 bg-[#fff]">
                <div className="space-y-8">
                  {[
                    { label: "Markets", href: "#markets", icon: BarChart3 },
                    { label: "Platforms", href: "#platforms", icon: Monitor },
                    { label: "Education", href: "#education", icon: BookOpen },
                    { label: "Accounts", href: "#accounts", icon: User },
                    { label: "Contact", href: "#contact", icon: Phone },
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center space-x-4 py-4 px-6 rounded-2xl bg-card/30 border border-border/20 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-display text-xl font-semibold text-black group-hover:text-primary transition-colors">
                          {item.label}
                        </div>
                        <div className="text-sm text-gray-600">
                          Explore {item.label.toLowerCase()}
                        </div>
                      </div>
                      <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </div>
                    </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-8 border-t border-gray-300 bg-white">
                <div className="space-y-4">
                  <motion.button 
                    className="w-full border-2 border-primary text-primary bg-transparent px-6 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Login to your trading account"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="relative z-10 font-bold">Login to Account</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                  
                  <motion.button 
                    className="w-full bg-gradient-to-r from-primary to-secondary text-black px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Start trading with Trader Corners"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <span className="relative z-10 font-bold">Start Trading Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </div>

                {/* Social Links */}
                <motion.div 
                  className="flex justify-center space-x-4 mt-8 pt-6 border-t border-border/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {[
                    { icon: FaTwitter, href: "#", label: "Twitter" },
                    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                    { icon: FaYoutube, href: "#", label: "YouTube" },
                    { icon: FaTelegram, href: "#", label: "Telegram" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-gray-100 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
