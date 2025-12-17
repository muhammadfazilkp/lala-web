import { Star, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-display font-bold text-primary">LALA</span>
            <Star className="w-4 h-4 text-accent fill-accent" />
          </div>
          <span className="text-sm text-muted-foreground font-body">Stories</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground/80 hover:text-primary transition-colors font-medium">Home</a>
          <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors font-medium">How It Works</a>
          <a href="#why-lala" className="text-foreground/80 hover:text-primary transition-colors font-medium">Why Lala</a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">Contact Us</a>
        </nav>

        <div className="hidden md:block">
          <Button variant="glow" size="sm">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-card border-t border-border/50 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-colors font-medium py-2">Home</a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors font-medium py-2">How It Works</a>
            <a href="#why-lala" className="text-foreground/80 hover:text-primary transition-colors font-medium py-2">Why Lala</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium py-2">Contact Us</a>
            <Button variant="glow" size="sm" className="w-full mt-2">Get Started</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
