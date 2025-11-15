import { useState } from "react";
import Layout from "@/components/Layout";
import { services } from "@/data/services";
import { Wrench, Droplet } from "lucide-react";

export default function Services() {
  const [selectedShop, setSelectedShop] = useState<string | null>(null);

  const filteredServices = selectedShop
    ? services.filter((s) => s.shop === selectedShop)
    : services;

  const valiyamanilServices = services.filter((s) => s.shop === "valiyamannil");
  const colorsServices = services.filter((s) => s.shop === "colors");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive services from gypsum and ceiling solutions to professional painting and finishing. Choose from specialized services offered by both Valiyamannil Agencies and Colors.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-secondary/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedShop(null)}
              className={`px-4 py-2 rounded font-medium transition-all ${
                selectedShop === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-foreground hover:border-primary"
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setSelectedShop("valiyamannil")}
              className={`px-4 py-2 rounded font-medium transition-all flex items-center gap-2 ${
                selectedShop === "valiyamannil"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-foreground hover:border-primary"
              }`}
            >
              <Wrench className="w-4 h-4" />
              Valiyamannil
            </button>
            <button
              onClick={() => setSelectedShop("colors")}
              className={`px-4 py-2 rounded font-medium transition-all flex items-center gap-2 ${
                selectedShop === "colors"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-foreground hover:border-primary"
              }`}
            >
              <Droplet className="w-4 h-4" />
              Colors
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredServices.length} of {services.length} services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="border border-border rounded-lg p-8 bg-secondary/30 hover:shadow-lg hover:border-primary transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded whitespace-nowrap ${
                      service.shop === "valiyamannil"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {service.shop === "valiyamannil"
                      ? "Valiyamannil"
                      : "Colors"}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div>
                  <p className="text-xs font-semibold text-foreground mb-3">
                    Service Highlights:
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No services found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Service Categories Overview */}
      {!selectedShop && (
        <section className="bg-secondary/50 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              Service Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Valiyamannil Services */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-primary" />
                  Valiyamannil Services
                </h3>
                <ul className="space-y-3">
                  {valiyamanilServices.map((service) => (
                    <li key={service.id} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-muted-foreground">{service.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Colors Services */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Droplet className="w-6 h-6 text-primary" />
                  Colors Services
                </h3>
                <ul className="space-y-3">
                  {colorsServices.map((service) => (
                    <li key={service.id} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-muted-foreground">{service.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Contact us for a free consultation and custom quote for your specific project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors">
              Contact Valiyamannil
            </button>
            <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors">
              Contact Colors
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
