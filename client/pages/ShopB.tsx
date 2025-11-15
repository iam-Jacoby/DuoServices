import Layout from "@/components/Layout";
import { Zap, Code2, Lightbulb, TrendingUp } from "lucide-react";

export default function ShopB() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Design Lab
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Innovation through design. Our design lab pushes boundaries with cutting-edge solutions and experimental approaches. We blend strategy with creativity to solve complex design challenges and deliver measurable results.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From interactive prototypes to scalable design systems, we create digital solutions that set industry standards and drive business growth.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>
            <div className="overflow-hidden rounded h-96 sm:h-full">
              <img
                src="https://images.pexels.com/photos/4884116/pexels-photo-4884116.jpeg"
                alt="Design Lab workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-secondary/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Expertise 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded bg-primary/10">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  UX/UI Design
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  User-centered design solutions that prioritize accessibility and engagement. We research, iterate, and validate every design decision.
                </p>
              </div>
            </div>

            {/* Expertise 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded bg-primary/10">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Design Systems
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Scalable, documented design systems that enable consistency and accelerate product development across your organization.
                </p>
              </div>
            </div>

            {/* Expertise 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded bg-primary/10">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Interactive Design
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dynamic, interactive experiences that engage users and communicate your message with impact and innovation.
                </p>
              </div>
            </div>

            {/* Expertise 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded bg-primary/10">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Performance Optimization
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Design with performance in mind. We optimize for speed, accessibility, and user satisfaction across all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Design Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Solution 1 */}
            <div className="border border-border rounded p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Product Design
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                End-to-end product design from concept through launch. We validate assumptions through research and iteration, ensuring your product resonates with users.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• User research and personas</li>
                <li>• Wireframing and prototyping</li>
                <li>• Usability testing and validation</li>
                <li>• Implementation support</li>
              </ul>
            </div>

            {/* Solution 2 */}
            <div className="border border-border rounded p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Digital Transformation
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Modernize your digital presence with thoughtful design and strategic implementation. We help organizations evolve their digital capabilities.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Digital strategy and roadmap</li>
                <li>• Legacy system modernization</li>
                <li>• Change management and adoption</li>
                <li>• Training and documentation</li>
              </ul>
            </div>

            {/* Solution 3 */}
            <div className="border border-border rounded p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Web & App Development
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Full-stack design and development services for web and mobile applications. We create performant, accessible experiences.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Responsive web design</li>
                <li>• Mobile app interface design</li>
                <li>• Progressive web applications</li>
                <li>• Cross-platform optimization</li>
              </ul>
            </div>

            {/* Solution 4 */}
            <div className="border border-border rounded p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Design Consultation
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Expert guidance and support for your internal design initiatives. We provide strategic recommendations and hands-on expertise.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Design strategy and planning</li>
                <li>• Team mentorship and training</li>
                <li>• Design audit and recommendations</li>
                <li>• Continuous optimization support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Design Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden bg-muted rounded h-64 mb-4">
                  <img
                    src={`https://images.pexels.com/photos/${34658645 + i * 100}/pexels-photo-${34658645 + i * 100}.jpeg`}
                    alt={`Design ${i}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/34658645/pexels-photo-34658645.jpeg";
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Design Project {i}
                </h3>
                <p className="text-sm text-muted-foreground">
                  User-centered design solution with measurable impact on engagement and conversion metrics.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Our Design Approach
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Research & Insights",
                description: "Deep dive into your users, market, and competitive landscape. We gather insights that drive informed design decisions.",
              },
              {
                step: "02",
                title: "Strategy & Direction",
                description: "Develop design strategy aligned with business goals. Create clear direction and success metrics for the project.",
              },
              {
                step: "03",
                title: "Design & Iterate",
                description: "Create high-fidelity designs and interactive prototypes. Validate assumptions through user feedback and testing.",
              },
              {
                step: "04",
                title: "Implementation & Support",
                description: "Support implementation and ensure design quality. Provide ongoing optimization based on real-world performance data.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded bg-primary text-primary-foreground font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground border-t border-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Innovate Your Design?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            Let's collaborate to create design solutions that drive business results and delight your users. Explore what's possible.
          </p>
          <button className="px-8 py-3 bg-primary-foreground text-primary font-medium rounded hover:bg-primary-foreground/90 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </Layout>
  );
}
