import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 w-full z-50 neumorphic backdrop-blur-xl header-shimmer border-b border-white/5">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 btn-primary rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="text-primary-foreground" size={22} />
            </div>
            <div className="flex flex-col">
              <span className="font-space text-xl font-bold text-gradient tracking-tight">Trader Corners</span>
              <span className="text-xs text-muted-foreground/60 font-medium">Premium Trading</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('markets')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 hover:text-primary transition-all duration-300 relative group font-medium">
                <span>Markets</span>
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              {activeDropdown === 'markets' && (
                <div className="absolute top-full left-0 mt-4 w-48 bg-background/95 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-white/20" style={{ zIndex: 9999 }}>
                  <a href="#forex" className="block py-3 text-sm hover:text-primary transition-colors border-b border-white/10 last:border-b-0">Forex Trading</a>
                  <a href="#crypto" className="block py-3 text-sm hover:text-primary transition-colors border-b border-white/10 last:border-b-0">Cryptocurrency</a>
                  <a href="#stocks" className="block py-3 text-sm hover:text-primary transition-colors border-b border-white/10 last:border-b-0">Stock Markets</a>
                  <a href="#commodities" className="block py-3 text-sm hover:text-primary transition-colors border-b border-white/10 last:border-b-0">Commodities</a>
                </div>
              )}
            </div>
            <a href="#platforms" className="hover:text-primary transition-all duration-300 relative group font-medium">
              Platforms
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#education" className="hover:text-primary transition-all duration-300 relative group font-medium">
              Education
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#accounts" className="hover:text-primary transition-all duration-300 relative group font-medium">
              Accounts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-primary transition-all duration-300 relative group font-medium">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden lg:block border-white/20 hover:border-primary backdrop-blur-sm font-medium">
              Login
            </Button>
            <Button className="cta-primary text-primary-foreground px-6 py-2.5 rounded-xl font-semibold">
              Start Trading
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-6">
              <a href="#markets" className="hover:text-primary transition-colors text-lg font-medium">Markets</a>
              <a href="#platforms" className="hover:text-primary transition-colors text-lg font-medium">Platforms</a>
              <a href="#education" className="hover:text-primary transition-colors text-lg font-medium">Education</a>
              <a href="#accounts" className="hover:text-primary transition-colors text-lg font-medium">Accounts</a>
              <a href="#contact" className="hover:text-primary transition-colors text-lg font-medium">Contact</a>
              <div className="flex flex-col space-y-3 pt-6 border-t border-white/10">
                <Button variant="outline" className="border-white/20 hover:border-primary backdrop-blur-sm font-medium text-left justify-start">
                  Login
                </Button>
                <Button className="cta-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold">
                  Start Trading
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
