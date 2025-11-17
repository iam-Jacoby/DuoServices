import Layout from "@/components/Layout";
import { Brush, Zap, Shield, Phone, Mail, Star } from "lucide-react";
import { useEffect } from "react";

export default function ShopB() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                Colors
              </h1>
              <p className="text-lg text-primary font-semibold mb-6">
                Professional Painting & Finishing Services
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Transform your spaces with expert painting services. With 10+ years of experience and over 300 orders monthly, Colors delivers superior interior and exterior painting, wallpapering, and finishing solutions for residential and commercial clients.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Brush className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Professional painting techniques</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Quick project completion</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Quality guaranteed with warranty</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Eco-friendly, low-VOC paints</span>
                </div>
              </div>
              <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors">
                Get Free Estimate
              </button>
            </div>
            <div className="overflow-hidden rounded h-96 sm:h-full">
              <img
                src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg"
                alt="Professional painting service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="border border-border rounded p-8 bg-background hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded mb-4 flex items-center justify-center">
                <Brush className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Interior Painting
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Complete interior painting solutions for homes and offices. Professional surface preparation, premium paint application, and impeccable finishes with minimal disruption.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Surface preparation & priming</li>
                <li>✓ Premium paint quality</li>
                <li>✓ Clean, professional execution</li>
                <li>✓ Custom color selection</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="border border-border rounded p-8 bg-background hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Exterior Painting
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Weather-resistant exterior painting that protects and beautifies your property. UV-resistant coatings designed to withstand harsh climatic conditions for 10+ years.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Weather-resistant coatings</li>
                <li>✓ UV protection</li>
                <li>✓ Long-lasting durability</li>
                <li>✓ Mildew resistance</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="border border-border rounded p-8 bg-background hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded mb-4 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Spray Painting
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Industrial-grade spray painting for detailed work and commercial projects. Professional equipment ensures even coverage, superior finish, and exceptional results.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Even, seamless coverage</li>
                <li>✓ Professional-grade equipment</li>
                <li>✓ Quick-drying formulas</li>
                <li>✓ Multiple finish options</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="border border-border rounded p-8 bg-background hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded mb-4 flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Wallpapering & Decoration
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Professional wallpaper installation and wall decoration services. Transform spaces with designer patterns applied by skilled craftsmen with precision.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Precise installation</li>
                <li>✓ Designer selections</li>
                <li>✓ Surface preparation included</li>
                <li>✓ Long-lasting application</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="border border-border rounded p-8 bg-background hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Varnishing & Finishing
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Professional varnishing and protective finishing for wood surfaces and more. Enhances beauty while providing superior protection against damage and wear.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ High-gloss finishes</li>
                <li>✓ Water-resistant protection</li>
                <li>✓ Professional-grade materials</li>
                <li>✓ Multi-purpose application</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="border border-border rounded p-8 bg-background hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Commercial Painting
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Large-scale commercial painting for offices, retail, and industrial facilities. Professional project management ensures minimal disruption to business operations.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Project planning & scheduling</li>
                <li>✓ Minimal business disruption</li>
                <li>✓ Quality assurance checks</li>
                <li>✓ Competitive large-project rates</li>
              </ul>
            </div>

            {/* Service 7 */}
            <div className="border border-border rounded p-8 bg-background hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                House Cleaning Services
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Professional house cleaning services to keep your spaces clean and fresh. Comprehensive cleaning for residential properties with eco-friendly products and attention to detail.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Eco-friendly cleaning products</li>
                <li>✓ Deep cleaning solutions</li>
                <li>✓ Flexible scheduling</li>
                <li>✓ Professional cleaning team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Why Trust Colors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">10+</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Years of Experience
              </h3>
              <p className="text-muted-foreground">
                Over a decade of excellence in painting and finishing services with proven track record.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">300+</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Monthly Projects
              </h3>
              <p className="text-muted-foreground">
                Serving hundreds of satisfied clients every month with consistent quality and reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Quality & Warranty
              </h3>
              <p className="text-muted-foreground">
                Premium materials and expert workmanship backed by comprehensive warranty guarantees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer overflow-hidden rounded">
              <div className="h-64 bg-muted overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5217852/pexels-photo-5217852.jpeg"
                  alt="Residential interior painting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-background border border-t-0 border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">
                  Residential Interior Project
                </h3>
                <p className="text-sm text-muted-foreground">
                  Complete interior painting and finishing for modern home
                </p>
              </div>
            </div>

            <div className="group cursor-pointer overflow-hidden rounded">
              <div className="h-64 bg-muted overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg"
                  alt="Exterior renovation painting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-background border border-t-0 border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">
                  Exterior Renovation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Professional exterior painting with weather-resistant coating
                </p>
              </div>
            </div>

            <div className="group cursor-pointer overflow-hidden rounded">
              <div className="h-64 bg-muted overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8134772/pexels-photo-8134772.jpeg"
                  alt="Commercial office painting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-background border border-t-0 border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">
                  Commercial Office Space
                </h3>
                <p className="text-sm text-muted-foreground">
                  Large-scale commercial painting project completed on schedule
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-6">
            Ready to Paint Your Space?
          </h2>
          <p className="text-center text-muted-foreground mb-8 leading-relaxed">
            Contact Colors for a free estimate and expert consultation. Our team is ready to transform your space with professional painting services.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-secondary border border-border rounded p-6 text-center">
              <Phone className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-2">Phone</p>
              <a href="tel:+91" className="text-foreground font-semibold hover:text-primary transition-colors">
                +91 XXXXX XXXXX
              </a>
            </div>

            <div className="bg-secondary border border-border rounded p-6 text-center">
              <Mail className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <a href="mailto:info@colors.com" className="text-foreground font-semibold hover:text-primary transition-colors">
                info@colors.com
              </a>
            </div>

            <div className="bg-secondary border border-border rounded p-6 text-center">
              <span className="text-2xl text-primary mx-auto mb-3 inline-block">💬</span>
              <p className="text-sm text-muted-foreground mb-2">WhatsApp</p>
              <a href="https://wa.me/your-number" className="text-foreground font-semibold hover:text-primary transition-colors">
                Message Us
              </a>
            </div>
          </div>

          <button className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors">
            Request Free Estimate
          </button>
        </div>
      </section>
    </Layout>
  );
}
