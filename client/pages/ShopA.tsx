import Layout from "@/components/Layout";
import { CheckCircle2, Phone, Mail } from "lucide-react";
import { useEffect } from "react";

export default function ShopA() {
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
                Valiyamannil Agencies
              </h1>
              <p className="text-lg text-primary font-semibold mb-6">
                Premium Gypsum & Ceiling Materials Supplier
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Your trusted partner for high-quality gypsum boards, suspended ceilings, PVC panels, and ceiling lights. With 2+ years of excellence and over 100 orders monthly, we deliver superior materials and reliable service for residential and commercial projects.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Premium quality materials</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Fast delivery and installation support</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Expert technical guidance</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Competitive wholesale pricing</span>
                </div>
              </div>
              <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors">
                Request a Quote
              </button>
            </div>
            <div className="overflow-hidden rounded h-96 sm:h-full">
              <img
                src="https://images.pexels.com/photos/4178808/pexels-photo-4178808.jpeg"
                alt="Gypsum ceiling installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product 1 */}
            <div className="border border-border rounded p-8 bg-background hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Premium Gypsum Boards
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                High-quality gypsum boards for interior walls and ceiling applications. Fire-resistant, moisture-resistant variants available with excellent acoustical properties.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>✓ Fire-resistant options</li>
                <li>✓ Moisture-resistant variants</li>
                <li>✓ Sound-absorbing properties</li>
                <li>✓ Easy installation</li>
              </ul>
              <button className="text-primary font-medium text-sm hover:text-primary/80">
                Inquire →
              </button>
            </div>

            {/* Product 2 */}
            <div className="border border-border rounded p-8 bg-background hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Suspended Ceiling Systems
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Modern suspended ceiling systems with thermal and acoustic insulation. Perfect for offices, retail spaces, and residential interiors with various finish options.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>✓ Thermal insulation</li>
                <li>✓ Acoustic performance</li>
                <li>✓ Easy maintenance</li>
                <li>✓ Multiple finish options</li>
              </ul>
              <button className="text-primary font-medium text-sm hover:text-primary/80">
                Inquire →
              </button>
            </div>

            {/* Product 3 */}
            <div className="border border-border rounded p-8 bg-background hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                PVC Panels & Profiles
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Durable PVC panels and profiles for wall cladding and ceiling applications. Weather-resistant, low-maintenance solution for modern interiors and exteriors.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>✓ Waterproof construction</li>
                <li>✓ UV-resistant coating</li>
                <li>✓ Easy installation</li>
                <li>✓ Wide color options</li>
              </ul>
              <button className="text-primary font-medium text-sm hover:text-primary/80">
                Inquire →
              </button>
            </div>

            {/* Product 4 */}
            <div className="border border-border rounded p-8 bg-background hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                LED Ceiling Lights
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Energy-efficient LED ceiling light fixtures with modern design. Optimal illumination while reducing power consumption for commercial and residential spaces.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>✓ Energy-efficient LED</li>
                <li>✓ Long lifespan (50,000 hours)</li>
                <li>✓ Dimmable options</li>
                <li>✓ Modern aesthetic design</li>
              </ul>
              <button className="text-primary font-medium text-sm hover:text-primary/80">
                Inquire →
              </button>
            </div>

            {/* Product 5 */}
            <div className="border border-border rounded p-8 bg-background hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Towel Racks & Bathroom Accessories
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Stylish and durable towel racks ranging from small ring designs to large multi-purpose storage solutions. Perfect for bathrooms, kitchens, and utility areas.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>✓ Small ring to multi-purpose designs</li>
                <li>✓ Stainless steel and chrome options</li>
                <li>✓ Wall-mounted installation</li>
                <li>✓ Premium finish and durability</li>
              </ul>
              <button className="text-primary font-medium text-sm hover:text-primary/80">
                Inquire →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Why Choose Valiyamannil Agencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">2+</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Years of Excellence
              </h3>
              <p className="text-muted-foreground">
                Established and trusted supplier with consistent quality and customer satisfaction since our inception.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">100+</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Monthly Orders
              </h3>
              <p className="text-muted-foreground">
                Serving hundreds of customers every month with reliable delivery and excellent service standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Quality Guarantee
              </h3>
              <p className="text-muted-foreground">
                Every product meets international standards with comprehensive warranty and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-secondary/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-6">
            Get in Touch
          </h2>
          <p className="text-center text-muted-foreground mb-8 leading-relaxed">
            Need premium gypsum materials or ceiling solutions? Our team is ready to assist with quotes, technical guidance, and fast delivery.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-background border border-border rounded p-6 text-center">
              <Phone className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-2">Phone</p>
              <a href="tel:+919400097977" className="text-foreground font-semibold hover:text-primary transition-colors">
                +91 9400097977
              </a>
            </div>

            <div className="bg-background border border-border rounded p-6 text-center">
              <span className="text-2xl text-primary mx-auto mb-3 inline-block">📍</span>
              <p className="text-sm text-muted-foreground mb-2">Address</p>
              <p className="text-foreground font-semibold">
                21/542/B5, Vettiyanickal Building, Erumely
              </p>
            </div>

            <div className="bg-background border border-border rounded p-6 text-center">
              <span className="text-2xl text-primary mx-auto mb-3 inline-block">💬</span>
              <p className="text-sm text-muted-foreground mb-2">WhatsApp</p>
              <a href="https://wa.me/919400097977" className="text-foreground font-semibold hover:text-primary transition-colors">
                Message Us
              </a>
            </div>
          </div>

          <button className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors">
            Request a Quotation
          </button>
        </div>
      </section>
    </Layout>
  );
}
