import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);

  const handleRequestQuote = () => {
    const el =
      document.getElementById("contact-section") ||
      document.getElementById("ready-to-start"); // fallback

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // If user is on another page, first navigate home then scroll
      window.location.href = "/#contact-section";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("header");
      if (!navbar) return;

      const navbarRect = navbar.getBoundingClientRect();
      const navbarMiddle = navbarRect.top + navbarRect.height / 2;

      // HERO SECTION HEIGHT CHECK
      const heroHeight = 600;
      const scrollPosition = window.scrollY;
      const overHero = scrollPosition < heroHeight;

      // QUICK STATS SECTION CHECK
      const statsSection = document.getElementById("quick-stats");
      let overStats = false;

      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (navbarMiddle >= rect.top && navbarMiddle <= rect.bottom) {
          overStats = true;
        }
      }

      // BACKGROUND COLOR DECISION
      if (overHero || overStats) {
        setIsDarkBg(true);   // white navbar text
      } else {
        setIsDarkBg(false);  // black navbar text
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ----------------------------
  // TEXT + HOVER COLOR LOGIC
  // ----------------------------
  const textColor = isDarkBg ? "text-white" : "text-black";
  const hoverColor = isDarkBg ? "hover:text-black" : "hover:text-white";

  return (
    <header className="border-b border-transparent bg-black/40 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <span
              className={`font-semibold hidden sm:inline transition-colors duration-300 ${textColor}`}
            >
              DuoServices
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-6">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/valiyamannil", label: "Gypsum Materials" },
              { to: "/colors", label: "Painting Services" },
              { to: "/products", label: "Products" },
              { to: "/services", label: "Services" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium transition-colors px-3 py-2 ${textColor} ${hoverColor}`}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={handleRequestQuote}
              className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors text-sm"
            >
              Request Quote
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded transition-colors ${
              isDarkBg ? "hover:bg-white/20" : "hover:bg-black/20"
            }`}
          >
            {mobileMenuOpen ? (
              <X className={`w-5 h-5 ${textColor}`} />
            ) : (
              <Menu className={`w-5 h-5 ${textColor}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-2 bg-black/80 backdrop-blur-lg animate-fade-in">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/valiyamannil", label: "Gypsum Materials" },
              { to: "/colors", label: "Painting Services" },
              { to: "/products", label: "Products" },
              { to: "/services", label: "Services" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-white hover:text-black hover:bg-white/30 px-3 py-2 rounded transition-colors"
              >
                {item.label}
              </Link>
            ))}

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
