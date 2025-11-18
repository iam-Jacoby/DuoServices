import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);

  const handleRequestQuote = () => {
    const element = document.getElementById("ready-to-start");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 600;
      const statsSection = document.querySelector('[style*="bg-primary"]');
      const statsTop = statsSection ? statsSection.getBoundingClientRect().top + scrollPosition : Infinity;

      if ((scrollPosition < heroHeight) || (scrollPosition > statsTop && scrollPosition < statsTop + 300)) {
        setIsDarkBg(true);
      } else {
        setIsDarkBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isDarkBg ? "text-white" : "text-foreground";
  const hoverColor = isDarkBg ? "hover:text-gray-200" : "hover:text-primary";

  return (
    <header className="border-b border-transparent bg-black/20 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Text Only */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <span className={`font-semibold hidden sm:inline transition-colors duration-300 ${textColor}`}>
              DuoServices
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors px-3 py-2 ${textColor} ${hoverColor}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors px-3 py-2 ${textColor} ${hoverColor}`}
            >
              About Us
            </Link>
            <Link
              to="/valiyamannil"
              className={`text-sm font-medium transition-colors px-3 py-2 ${textColor} ${hoverColor}`}
            >
              Gypsum Materials
            </Link>
            <Link
              to="/colors"
              className={`text-sm font-medium transition-colors px-3 py-2 ${textColor} ${hoverColor}`}
            >
              Painting Services
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors px-3 py-2 ${textColor} ${hoverColor}`}
            >
              Products
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors px-3 py-2 ${textColor} ${hoverColor}`}
            >
              Services
            </Link>
            <button
              onClick={handleRequestQuote}
              className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors text-sm"
            >
              Request Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded transition-colors ${isDarkBg ? "hover:bg-white/20" : "hover:bg-secondary"}`}
          >
            {mobileMenuOpen ? (
              <X className={`w-5 h-5 ${textColor}`} />
            ) : (
              <Menu className={`w-5 h-5 ${textColor}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-2 bg-background/95 backdrop-blur-sm animate-fade-in">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-primary hover:bg-secondary px-3 py-2 rounded transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-primary hover:bg-secondary px-3 py-2 rounded transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/valiyamannil"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-primary hover:bg-secondary px-3 py-2 rounded transition-colors"
            >
              Gypsum Materials
            </Link>
            <Link
              to="/colors"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-primary hover:bg-secondary px-3 py-2 rounded transition-colors"
            >
              Painting Services
            </Link>
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-primary hover:bg-secondary px-3 py-2 rounded transition-colors"
            >
              Products
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-primary hover:bg-secondary px-3 py-2 rounded transition-colors"
            >
              Services
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleRequestQuote();
              }}
              className="block w-full text-left text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded transition-colors mt-2"
            >
              Request Quote
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
