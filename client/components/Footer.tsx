import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Valiyamannil Agencies */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Valiyamannil Agencies
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Premier supplier of gypsum boards, ceiling materials, and PVC
              panels for residential and commercial projects.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919400097977"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  +91 9400097977
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  21/542/B5, Vettiyanickal Building, Erumely
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@valiyamannil.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@valiyamannil.com
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a
                href="https://wa.me/919400097977"
                className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded hover:bg-primary/90 transition-colors"
              >
                WhatsApp
              </a>
              <Link
                to="/valiyamannil"
                className="text-xs border border-border px-3 py-1 rounded hover:bg-secondary transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Colors Painting */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Colors</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Professional painting services including interior, exterior, spray
              painting, wallpapering, and varnishing solutions.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +91 XXXXX XXXXX
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@colors.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@colors.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Valiyamannil, Kerala
                </span>
              </li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a
                href="https://wa.me/your-number"
                className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded hover:bg-primary/90 transition-colors"
              >
                WhatsApp
              </a>
              <Link
                to="/colors"
                className="text-xs border border-border px-3 py-1 rounded hover:bg-secondary transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Products & Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} DuoServices. All rights reserved.
          </p>
          {/* <div className="flex gap-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              WhatsApp
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
