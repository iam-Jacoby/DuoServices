import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm"></div>
            <span className="font-semibold text-foreground hidden sm:inline">
              StudioHub
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1 sm:gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2"
            >
              Home
            </Link>
            <Link
              to="/shop-a"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2"
            >
              Creative Studio
            </Link>
            <Link
              to="/shop-b"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2"
            >
              Design Lab
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
