import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Creative Excellence, Design Innovation
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Two complementary studios united under one platform. Discover cutting-edge creative services and design solutions tailored to your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop-a"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors rounded"
              >
                Explore Creative Studio
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/shop-b"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium hover:bg-secondary transition-colors rounded"
              >
                Explore Design Lab
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Studios Section */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Creative Studio Card */}
            <div className="group cursor-pointer">
              <Link to="/shop-a" className="block">
                <div className="mb-6 overflow-hidden bg-muted rounded h-64 sm:h-80">
                  <img
                    src="https://images.pexels.com/photos/14928875/pexels-photo-14928875.jpeg"
                    alt="Creative Studio showcase"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Creative Studio
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Where imagination meets execution. Our creative studio specializes in transforming ideas into compelling visual experiences. From concept to delivery, we craft narratives that resonate with audiences.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Discover More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            {/* Design Lab Card */}
            <div className="group cursor-pointer">
              <Link to="/shop-b" className="block">
                <div className="mb-6 overflow-hidden bg-muted rounded h-64 sm:h-80">
                  <img
                    src="https://images.pexels.com/photos/7185835/pexels-photo-7185835.jpeg"
                    alt="Design Lab showcase"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Design Lab
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Innovation through design. Our lab pushes boundaries with cutting-edge solutions and experimental approaches. We blend strategy with creativity to solve complex design challenges and deliver measurable results.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Discover More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="border border-border rounded p-6 hover:border-primary hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">01</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Visual Identity
              </h3>
              <p className="text-muted-foreground">
                Comprehensive branding solutions that establish your unique presence in the market and create lasting impressions.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="border border-border rounded p-6 hover:border-primary hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">02</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Digital Experience
              </h3>
              <p className="text-muted-foreground">
                User-centered design and development that transforms concepts into intuitive, engaging digital products.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="border border-border rounded p-6 hover:border-primary hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">03</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Strategic Consulting
              </h3>
              <p className="text-muted-foreground">
                Data-driven insights and strategic guidance that align design with business objectives and market opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">150+</div>
              <p className="text-primary-foreground/80">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">50+</div>
              <p className="text-primary-foreground/80">Global Clients</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">12</div>
              <p className="text-primary-foreground/80">Awards Won</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">8+</div>
              <p className="text-primary-foreground/80">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you need creative direction or design innovation, our studios are equipped to bring your vision to life with precision and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop-a"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors rounded"
            >
              Contact Creative Studio
            </Link>
            <Link
              to="/shop-b"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors rounded"
            >
              Contact Design Lab
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
