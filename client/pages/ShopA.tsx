import Layout from "@/components/Layout";
import { CheckCircle2 } from "lucide-react";

export default function ShopA() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Creative Studio
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Where imagination meets execution. Our creative studio transforms bold ideas into compelling visual experiences that captivate, inspire, and drive results for brands ready to make an impact.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Full-spectrum creative direction and strategy</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Concept development and visual storytelling</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Brand identity and market positioning</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Campaign execution with measurable impact</span>
                </div>
              </div>
              <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>
            <div className="overflow-hidden rounded h-96 sm:h-full">
              <img
                src="https://images.pexels.com/photos/11440223/pexels-photo-11440223.jpeg"
                alt="Creative Studio workspace"
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
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Brand Strategy
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Develop compelling brand narratives that resonate with your target audience. We conduct thorough market research and competitive analysis to position your brand uniquely in the marketplace.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Market research and competitive analysis</li>
                <li>• Brand positioning and messaging</li>
                <li>• Audience insight development</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="border border-border rounded p-8 bg-background hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Visual Design
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Create stunning visual assets that communicate your brand essence. From logo design to complete visual systems, we ensure consistency and impact across all touchpoints.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Logo and icon design</li>
                <li>• Brand guidelines and systems</li>
                <li>• Print and digital assets</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="border border-border rounded p-8 bg-background hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Content Creation
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Produce engaging content that tells your brand story across multiple channels. Our team creates narratives that connect emotionally with audiences and drive engagement.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Content strategy and planning</li>
                <li>• Photography and videography</li>
                <li>• Editorial and web content</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="border border-border rounded p-8 bg-background hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Campaign Management
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Execute integrated campaigns that achieve measurable results. We manage every aspect from concept through launch, ensuring flawless delivery and maximum impact.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Campaign strategy and planning</li>
                <li>• Multi-channel coordination</li>
                <li>• Performance tracking and optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden bg-muted rounded h-64 mb-4">
                  <img
                    src={`https://images.pexels.com/photos/${11440223 + i * 100}/pexels-photo-${11440223 + i * 100}.jpeg`}
                    alt={`Project ${i}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/11440223/pexels-photo-11440223.jpeg";
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Project Case Study {i}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Strategic creative direction and execution for luxury brand elevation and market presence expansion.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Our Process
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "In-depth consultation to understand your vision, goals, and target audience. We immerse ourselves in your brand story.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Develop comprehensive strategy and creative direction based on insights. Define success metrics and project roadmap.",
              },
              {
                step: "03",
                title: "Execution",
                description: "Create stunning visual assets and compelling content. Iterate based on feedback to ensure excellence.",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Launch campaigns with precision and manage performance. Provide ongoing optimization and support.",
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
      <section className="bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Ready to elevate your brand? Get in touch with our creative team to discuss your next project and unlock your brand's full potential.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors">
            Start a Project
          </button>
        </div>
      </section>
    </Layout>
  );
}
