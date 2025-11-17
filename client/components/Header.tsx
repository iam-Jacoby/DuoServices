import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleRequestQuote = () => {
    const element = document.getElementById("ready-to-start");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="border-b border-transparent bg-black/20 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded-sm"></div>
            <span className="font-semibold text-foreground hidden sm:inline">
              DuoServices
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2"
            >
              About Us
            </Link>
            <Link
              to="/valiyamannil"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2"
            >
              Gypsum Materials
            </Link>
            <Link
              to="/colors"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2"
            >
              Painting Services
            </Link>
            <Link
              to="/products"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2"
            >
              Products
            </Link>
            <Link
              to="/services"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2"
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
            className="md:hidden p-2 hover:bg-secondary rounded transition-colors"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-2">
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
            <a
              href="https://wa.me/your-number?text=Hi, I would like to request a quote for your services."
              className="block text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded transition-colors mt-2"
            >
              Request Quote
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
