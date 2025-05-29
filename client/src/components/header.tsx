import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 neumorphic backdrop-blur-xl header-shimmer">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 btn-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="text-primary-foreground" size={20} />
            </div>
            <span className="font-space text-xl font-bold">Trader Corners</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#markets" className="hover:text-primary transition-all duration-300 relative group">
              Markets
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#platforms" className="hover:text-primary transition-all duration-300 relative group">
              Platforms
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#education" className="hover:text-primary transition-all duration-300 relative group">
              Education
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#accounts" className="hover:text-primary transition-all duration-300 relative group">
              Accounts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:block border-white/20 hover:border-primary backdrop-blur-sm glow-hover">
              Login
            </Button>
            <Button className="btn-primary text-primary-foreground hover:shadow-lg glow-hover magnetic-btn spotlight">
              Start Trading
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden glow-hover"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#markets" className="hover:text-primary transition-colors">Markets</a>
              <a href="#platforms" className="hover:text-primary transition-colors">Platforms</a>
              <a href="#education" className="hover:text-primary transition-colors">Education</a>
              <a href="#accounts" className="hover:text-primary transition-colors">Accounts</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
