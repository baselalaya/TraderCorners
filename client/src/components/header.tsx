import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMarketsDropdown, setShowMarketsDropdown] = useState(false);

  return (
    <header className="fixed top-0 w-full z-[100] bg-background/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="text-white" size={22} />
            </div>
            <div className="flex flex-col">
              <span className="font-space text-xl font-bold text-gradient tracking-tight">Trader Corners</span>
              <span className="text-xs text-muted-foreground/60 font-medium">Premium Trading</span>
            </div>
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
                  <a href="#forex" className="flex items-center space-x-3 px-4 py-3 text-white hover:text-primary hover:bg-white/10 rounded-lg transition-all">
                    <span className="text-lg">📈</span>
                    <span className="font-medium">Forex Trading</span>
                  </a>
                  <a href="#crypto" className="flex items-center space-x-3 px-4 py-3 text-white hover:text-primary hover:bg-white/10 rounded-lg transition-all">
                    <span className="text-lg">₿</span>
                    <span className="font-medium">Cryptocurrency</span>
                  </a>
                  <a href="#stocks" className="flex items-center space-x-3 px-4 py-3 text-white hover:text-primary hover:bg-white/10 rounded-lg transition-all">
                    <span className="text-lg">📊</span>
                    <span className="font-medium">Stock Markets</span>
                  </a>
                  <a href="#commodities" className="flex items-center space-x-3 px-4 py-3 text-white hover:text-primary hover:bg-white/10 rounded-lg transition-all">
                    <span className="text-lg">🥇</span>
                    <span className="font-medium">Commodities</span>
                  </a>
                </div>
              </div>
            </div>
            
            <a href="#platforms" className="hover:text-primary transition-colors font-medium">Platforms</a>
            <a href="#education" className="hover:text-primary transition-colors font-medium">Education</a>
            <a href="#accounts" className="hover:text-primary transition-colors font-medium">Accounts</a>
            <a href="#contact" className="hover:text-primary transition-colors font-medium">Contact</a>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="border-white/20 hover:border-primary">
              Login
            </Button>
            <button className="cta-button cta-lg" aria-label="Start trading with Trader Corners">
              Start Trading
            </button>
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
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-6">
              <a href="#markets" className="hover:text-primary transition-colors text-lg">Markets</a>
              <a href="#platforms" className="hover:text-primary transition-colors text-lg">Platforms</a>
              <a href="#education" className="hover:text-primary transition-colors text-lg">Education</a>
              <a href="#accounts" className="hover:text-primary transition-colors text-lg">Accounts</a>
              <a href="#contact" className="hover:text-primary transition-colors text-lg">Contact</a>
              <div className="flex flex-col space-y-3 pt-6 border-t border-white/10">
                <Button variant="outline" className="border-white/20 justify-start">Login</Button>
                <button className="cta-button" aria-label="Start trading with Trader Corners">Start Trading</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
