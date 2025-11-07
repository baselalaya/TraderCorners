import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Menu, X, ChevronDown, BarChart3, Monitor, BookOpen, User, Phone, Building2, Globe } from "lucide-react";
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
          <a href="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Trader Corners"
              className="h-12 w-auto"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="nav-dropdown">
              <button 
                className="nav-link"
                onMouseEnter={() => setShowMarketsDropdown(true)}
                onMouseLeave={() => setShowMarketsDropdown(false)}
              >
                <span>Markets</span>
                <ChevronDown size={14} className={`ml-1 transition-transform ${showMarketsDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className="submenu">
                <div 
                  className="submenu-content markets-dropdown"
                  onMouseEnter={() => setShowMarketsDropdown(true)}
                  onMouseLeave={() => setShowMarketsDropdown(false)}
                >
                  <a href="/markets/forex" className="markets-dropdown-item">
                    <span className="market-icon">FX</span>
                    <span className="market-label">Forex Trading</span>
                  </a>
                  <a href="/markets/crypto" className="markets-dropdown-item">
                    <span className="market-icon">₿</span>
                    <span className="market-label">Cryptocurrency</span>
                  </a>
                  <a href="/markets/stocks" className="markets-dropdown-item">
                    <span className="market-icon">STK</span>
                    <span className="market-label">Stock Markets</span>
                  </a>
                  <a href="/markets/commodities" className="markets-dropdown-item">
                    <span className="market-icon">OIL</span>
                    <span className="market-label">Commodities</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="nav-dropdown">
              <a href="/platforms" className="nav-link">
                <span>Platforms</span>
                <ChevronDown size={14} className="ml-1 transition-transform" />
              </a>
              <div className="submenu">
                <div className="submenu-content">
                  <a href="/platforms#mt5" className="submenu-item">MetaTrader 5</a>
                  <a href="/platforms#web" className="submenu-item">Web Platform</a>
                  <a href="/platforms#mobile" className="submenu-item">Mobile Apps</a>
                </div>
              </div>
            </div>

            {/* Tools top-level menu */}
            <div className="nav-dropdown">
              <a href="#" className="nav-link">
                <span>Tools</span>
                <ChevronDown size={14} className="ml-1 transition-transform" />
              </a>
              <div className="submenu">
                <div className="submenu-content">
                  <a href="/economic-calendar" className="submenu-item">Economic Calendar</a>
                  <a href="/fx-calculator" className="submenu-item">FX Calculator</a>
                </div>
              </div>
            </div>
            
            {/* Education nav hidden per request */}
            
            <div className="nav-dropdown">
              <a href="/accounts" className="nav-link">
                <span>Accounts</span>
                <ChevronDown size={14} className="ml-1 transition-transform" />
              </a>
              <div className="submenu">
                <div className="submenu-content">
                  <a href="https://my.tradercorners.com/en/register/basic" target="_blank" rel="noopener noreferrer" className="submenu-item">Basic Account</a>
                  <a href="https://my.tradercorners.com/en/register/premium" target="_blank" rel="noopener noreferrer" className="submenu-item">Premium Account</a>
                  <a href="https://my.tradercorners.com/en/register/institutional" target="_blank" rel="noopener noreferrer" className="submenu-item">Institutional Account</a>
                </div>
              </div>
            </div>
            {/* Contact link hidden per request (kept in footer only) */}
          </nav>
          
          
          {/* Desktop CTAs (external) */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="https://my.tradercorners.com/en/login"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary bg-transparent px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Login to your trading account"
            >
              <span className="relative z-10 font-bold">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <motion.a
              href="https://my.tradercorners.com/en/register/account-types"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Start trading with Trader Corners"
            >
              <span className="relative z-10 font-bold">Start Trading</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
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
            className="lg:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20 bg-white">
                <img 
                  src="/logo.png" 
                  alt="Trader Corners"
                  className="h-10 w-auto"
                />
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-6 py-10 bg-white">
              <div className="space-y-6">
                {[
                  { label: "About", href: "/about", icon: Building2 },
                  { label: "Products", href: "/products", icon: Globe },
                  { label: "Platforms", href: "/platforms", icon: Monitor },
                  { label: "Tools", href: "/economic-calendar", icon: Globe },
                  { label: "Accounts", href: "/accounts", icon: User },
                  // Education hidden in mobile menu per request
                  // Contact hidden in main nav per request
                ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="mobile-nav-link min-h-[56px]"
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.3 }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="icon-container">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <div className="link-content">
                        <div className="link-title">
                          {item.label}
                        </div>
                        <div className="link-description hidden sm:block">
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
              <div className="p-6 border-t border-gray-300 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <motion.a href="https://my.tradercorners.com/en/login" target="_blank" rel="noopener noreferrer"
                    className="w-full text-center border-2 border-primary text-primary bg-transparent px-6 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Login to your trading account"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="relative z-10 font-bold">Login to Account</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                  
                  <motion.a href="https://my.tradercorners.com/en/register/account-types" target="_blank" rel="noopener noreferrer"
                    className="w-full text-center bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Start trading with Trader Corners"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <span className="relative z-10 font-bold">Start Trading Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
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
