import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About DuoServices
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A unified platform bringing together two trusted businesses
              committed to excellence in their respective fields. Together, we
              deliver comprehensive solutions for all your gypsum, ceiling, and
              painting needs.
            </p>
          </div>
        </div>
      </section>

      {/* Valiyamannil Section */}
      <section className="bg-secondary/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 overflow-hidden rounded">
              <img
                src="https://images.pexels.com/photos/4178808/pexels-photo-4178808.jpeg"
                alt="Valiyamannil Agencies workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Valiyamannil Agencies
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Established as a premier supplier of gypsum boards and ceiling
                materials, Valiyamannil Agencies has been serving the
                construction and interior design industry with exceptional
                quality and reliability.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Our Journey
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 2 years in business, we've built a strong
                    reputation for delivering premium gypsum boards, suspended
                    ceiling systems, PVC panels, and comprehensive lighting
                    solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Current Impact
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Processing 100+ orders monthly, serving residential and
                    commercial clients across Kerala. We focus on quality
                    materials, professional installation support, and
                    competitive pricing.
                  </p>
                </div>
              </div>
              <Link
                to="/valiyamannil"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Explore Valiyamannil
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded">
              <img
                src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg"
                alt="Colors painting services"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Colors
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A professional painting services company dedicated to
                transforming spaces with high-quality finishes. Colors
                specializes in residential and commercial painting projects with
                attention to detail and customer satisfaction.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Experience & Expertise
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With 10+ years of excellence in the painting industry,
                    Colors has built a reputation for delivering superior
                    results across interior, exterior, spray painting,
                    wallpapering, and finishing services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Scale & Reach
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Completing 300+ projects monthly, Colors serves diverse
                    clientele from residential homeowners to large commercial
                    enterprises, maintaining consistent quality and
                    professionalism.
                  </p>
                </div>
              </div>
              <Link
                to="/colors"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Explore Colors
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Our Shared Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-border rounded p-8 bg-background">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide superior quality materials and professional services
                that exceed customer expectations, enabling beautiful and
                functional spaces for every project.
              </p>
            </div>

            <div className="border border-border rounded p-8 bg-background">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted and preferred platform for
                comprehensive interior solutions, recognized for quality,
                reliability, and customer-centric service.
              </p>
            </div>

            <div className="border border-border rounded p-8 bg-background">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Values
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Quality & Excellence</li>
                <li>✓ Customer Focus</li>
                <li>✓ Reliability & Integrity</li>
                <li>✓ Innovation & Growth</li>
                <li>✓ Professional Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              {
                name: "Abey Jacob",
                role: "Founder, Valiyamannil Agencies",
                image:
                  "https://images.pexels.com/photos/4100672/pexels-photo-4100672.jpeg",
              },
              {
                name: "Anu",
                role: "Founder, Colors",
                image:
                  "https://images.pexels.com/photos/5217852/pexels-photo-5217852.jpeg",
              },
            ].map((member, i) => (
              <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="h-64 mb-4 rounded overflow-hidden bg-muted hover:shadow-lg transition-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.pexels.com/photos/4100672/pexels-photo-4100672.jpeg";
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">1000+</div>
              <p className="text-primary-foreground/80">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">400+</div>
              <p className="text-primary-foreground/80">Monthly Projects</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">12+</div>
              <p className="text-primary-foreground/80">Years Combined</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">100%</div>
              <p className="text-primary-foreground/80">
                Satisfaction Guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Start Your Project Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you need premium materials from Valiyamannil or painting
            services from Colors, our teams are ready to assist.
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
          </div>
        </div>
      </section>
    </Layout>
  );
}
