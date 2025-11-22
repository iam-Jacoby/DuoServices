import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { Filter } from "lucide-react";
import { useState, useEffect } from "react";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const categories = [
    { id: "ceiling-gypsum", label: "Ceiling & Gypsum Materials" },
    { id: "painting-supplies", label: "Painting Supplies" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Products & Materials
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our comprehensive catalog of premium gypsum boards,
              ceiling materials, and professional painting supplies. Filter by
              category to find exactly what you need.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">
                Filter Products
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded font-medium transition-all ${
                  selectedCategory === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border border-border text-foreground hover:border-primary"
                }`}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === category.id ? null : category.id,
                    )
                  }
                  className={`px-4 py-2 rounded font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border text-foreground hover:border-primary"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-border rounded-lg overflow-hidden bg-background hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {product.name}
                    </h3>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded whitespace-nowrap">
                      {product.category === "ceiling-gypsum"
                        ? "Gypsum"
                        : "Painting"}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-foreground mb-2">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors text-sm">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact-section"
        className="bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Help Finding the Right Product?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our experts are ready to assist you with product selection,
            specifications, and quotations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            {/* Valiyamannil Contact */}
            <a href="tel:+919876543210">
              <button className="px-6 py-3 bg-white text-black font-medium rounded transition-colors hover:bg-gray-800 hover:text-white">
                Contact Valiyamannil
              </button>
            </a>

            {/* Colors Contact */}
            <a href="tel:+91xxxxxxxxxx">
              <button className="px-6 py-3 bg-white text-black font-medium rounded transition-colors hover:bg-gray-800 hover:text-white">
                Contact Colors
              </button>
            </a>

          </div>
        </div>
      </section>
    </Layout>
  );
}
