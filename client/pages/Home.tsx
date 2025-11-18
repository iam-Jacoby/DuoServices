import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { ArrowRight, Star, Zap, Shield } from "lucide-react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = () => {
    const element = document.getElementById("ready-to-start");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center animate-fade-in"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Premium Materials. Expert Craftsmanship.
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
            Your one-stop solution for quality gypsum materials and professional
            painting services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToSection}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors rounded"
            >
              Request a Quote
            </button>
            <a
              href="https://wa.me/your-number"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white font-medium hover:bg-white/10 transition-colors rounded"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.266l-.355.192-3.674-.96.992 3.63-.235.374a9.86 9.86 0 .001 15.313l.352.19 3.695.953-.992-3.629.235-.374a9.87 9.87 0 004.946-1.266h.004c5.43 0 9.868-4.438 9.868-9.868 0-5.43-4.438-9.868-9.868-9.868z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Featured Shops Section */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Our Trusted Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Valiyamannil Card */}
            <div className="group cursor-pointer bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <Link to="/valiyamannil" className="block">
                <div className="h-64 overflow-hidden bg-muted">
                  <img
                    src="https://images.pexels.com/photos/4178808/pexels-photo-4178808.jpeg"
                    alt="Valiyamannil Agencies"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Valiyamannil Agencies
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">
                    Gypsum & Ceiling Materials
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Premium supplier of gypsum boards, suspended ceilings, PVC
                    panels, and ceiling lights for residential and commercial
                    projects.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary" />
                      2+ Years
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-primary" />
                      100+ Orders/Month
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Explore Products
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Colors Card */}
            <div className="group cursor-pointer bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <Link to="/colors" className="block">
                <div className="h-64 overflow-hidden bg-muted">
                  <img
                    src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg"
                    alt="Colors Painting Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Colors
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">
                    Professional Painting Services
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Expert painting, wallpapering, spray coating, and finishing
                    services for interiors and exteriors with 10+ years of
                    excellence.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary" />
                      10+ Years
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-primary" />
                      300+ Orders/Month
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Explore Services
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Why Choose DuoServices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-border rounded p-8 hover:border-primary hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Quality Assured
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Premium materials and professional craftsmanship guaranteed.
                Every project meets our high standards of excellence.
              </p>
            </div>

            <div className="border border-border rounded p-8 hover:border-primary hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded mb-4 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Fast Delivery
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Quick turnaround times without compromising quality. We respect
                your schedules and deadlines.
              </p>
            </div>

            <div className="border border-border rounded p-8 hover:border-primary hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded mb-4 flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Expert Support
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated customer service and technical expertise. We guide you
                through every step of your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">1000+</div>
              <p className="text-primary-foreground/80">Satisfied Customers</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">400+</div>
              <p className="text-primary-foreground/80">Monthly Orders</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">12+</div>
              <p className="text-primary-foreground/80">Years Combined</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
              <p className="text-primary-foreground/80">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products & Services */}
      <section className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Featured Products & Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Products Preview */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Gypsum & Ceiling Materials
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                  <span className="text-muted-foreground">
                    Towel Racks & Bathroom Accessories
                  </span>
                  <span className="inline-block px-2 py-0.5 text-xs font-bold text-red-600 animate-pulse bg-red-100 rounded">
                    New
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                  <span className="text-muted-foreground">
                    Premium Gypsum Boards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                  <span className="text-muted-foreground">
                    Suspended Ceiling Systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                  <span className="text-muted-foreground">
                    PVC Panels & Profiles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                  <span className="text-muted-foreground">
                    LED Ceiling Lights
                  </span>
                </li>
              </ul>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Services Preview */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Painting & Finishing Services
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                  <span className="text-muted-foreground">
                    House Cleaning Services
                  </span>
                  <span className="inline-block px-2 py-0.5 text-xs font-bold text-red-600 animate-pulse bg-red-100 rounded">
                    New
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                  <span className="text-muted-foreground">
                    Interior & Exterior Painting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                  <span className="text-muted-foreground">
                    Professional Spray Painting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                  <span className="text-muted-foreground">
                    Wallpapering & Decoration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                  <span className="text-muted-foreground">
                    Varnish & Protective Finishing
                  </span>
                </li>
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="ready-to-start"
        className="bg-secondary/50 border-t border-border"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you need premium ceiling materials or professional painting
            services, our teams are ready to assist you with expert solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/valiyamannil"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors rounded"
            >
              Contact Valiyamannil
            </Link>
            <Link
              to="/colors"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors rounded"
            >
              Contact Colors
            </Link>
            <a
              href="https://wa.me/your-number"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium hover:bg-secondary transition-colors rounded"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
