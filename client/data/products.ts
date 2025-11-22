export interface Product {
  id: string;
  name: string;
  category: "ceiling-gypsum" | "painting-supplies";
  description: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
  // Ceiling & Gypsum Materials
  {
    id: "gypsum-1",
    name: "Premium Gypsum Boards",
    category: "ceiling-gypsum",
    description:
      "High-quality gypsum boards suitable for interior walls and ceiling applications. Fire-resistant and acoustically optimized for residential and commercial spaces.",
    image: "/Gypsum_Board.jpeg",
    features: [
      "Fire-resistant",
      "Moisture-resistant variants available",
      "Sound-absorbing properties",
      "Easy installation",
    ],
  },
  {
    id: "ceiling-2",
    name: "Suspended Ceiling Systems",
    category: "ceiling-gypsum",
    description:
      "Modern suspended ceiling systems designed for thermal and acoustic insulation. Perfect for offices, retail spaces, and residential interiors.",
    image: "https://images.pexels.com/photos/6473973/pexels-photo-6473973.jpeg",
    features: [
      "Thermal insulation",
      "Acoustic performance",
      "Easy maintenance",
      "Variety of finishes",
    ],
  },
  {
    id: "pvc-3",
    name: "PVC Panels & Profiles",
    category: "ceiling-gypsum",
    description:
      "Durable PVC panels and profiles for wall cladding and ceiling applications. Weather-resistant and low-maintenance solution for modern interiors.",
    image: "https://images.pexels.com/photos/8134772/pexels-photo-8134772.jpeg",
    features: [
      "Waterproof",
      "UV-resistant",
      "Easy installation",
      "Wide color options",
    ],
  },
  {
    id: "lights-4",
    name: "LED Ceiling Lights",
    category: "ceiling-gypsum",
    description:
      "Energy-efficient LED ceiling light fixtures with modern design. Provides optimal illumination while reducing power consumption for commercial and residential spaces.",
    image: "https://images.pexels.com/photos/6010461/pexels-photo-6010461.jpeg",
    features: [
      "Energy-efficient LED technology",
      "Long lifespan",
      "Dimmable options",
      "Modern aesthetic",
    ],
  },
  {
    id: "corner-5",
    name: "Corner & Edge Profiles",
    category: "ceiling-gypsum",
    description:
      "Protective corner profiles and edge trim for gypsum installations. Ensures clean finishes and adds durability to vulnerable corners and edges.",
    image: "https://images.pexels.com/photos/14838208/pexels-photo-14838208.jpeg",
    features: [
      "Protective finish",
      "Easy application",
      "Durable material",
      "Multiple sizes available",
    ],
  },
  // --- NEW PRODUCT 1 ---
  {
    id: "towel-racks",
    name: "Towel Racks & Bathroom Accessories",
    category: "ceiling-gypsum",
    image: "/towel_rack.jpg",
    description:
      "Premium-grade towel racks and bathroom accessories supplied by Valiyamannil Agencies. Designed for durability, style, and long-lasting performance.",
    features: [
      "Rust-resistant durable materials",
      "Easy wall-mount installation",
      "Modern stylish design",
      "Suitable for homes & commercial buildings",
    ],
  },

  // Painting Supplies
  {
    id: "interior-paint-1",
    name: "Premium Interior Paint",
    category: "painting-supplies",
    description:
      "High-quality interior wall paint with excellent coverage and durability. Available in custom colors with low VOC formulation for a healthier indoor environment.",
    image: "https://images.pexels.com/photos/5217852/pexels-photo-5217852.jpeg",
    features: [
      "Low VOC formula",
      "Excellent coverage",
      "Washable finish",
      "Custom colors available",
    ],
  },
  {
    id: "exterior-paint-2",
    name: "Exterior Grade Paint",
    category: "painting-supplies",
    description:
      "Weather-resistant exterior paint engineered to withstand harsh climatic conditions. Provides superior UV protection and long-lasting color vibrancy.",
    image: "https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg",
    features: [
      "Weather-resistant",
      "UV protection",
      "10-year durability",
      "Mildew resistant",
    ],
  },
  {
    id: "spray-paint-3",
    name: "Professional Spray Paint",
    category: "painting-supplies",
    description:
      "Industrial-grade spray paint for professional application equipment. Ideal for detailed work, commercial projects, and high-production painting requirements.",
    image: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg",
    features: [
      "Professional grade",
      "Even coverage",
      "Quick-drying formula",
      "Multiple finishes",
    ],
  },
  {
    id: "wallpaper-4",
    name: "Designer Wallpapers",
    category: "painting-supplies",
    description:
      "Modern designer wallpapers with premium finishes. Offers texture, patterns, and colors to transform any interior space with style and sophistication.",
    image: "https://images.pexels.com/photos/1062025/pexels-photo-1062025.jpeg",
    features: [
      "Designer patterns",
      "Easy installation",
      "Removable options",
      "Washable surfaces",
    ],
  },
  {
    id: "varnish-5",
    name: "Professional Varnish & Sealants",
    category: "painting-supplies",
    description:
      "Premium varnish and sealant products for protective and decorative finishing. Provides enhanced durability and aesthetic appeal for wood and other surfaces.",
    image: "https://images.pexels.com/photos/2360476/pexels-photo-2360476.jpeg",
    features: [
      "Multi-purpose application",
      "Water-resistant",
      "High gloss finish",
      "Professional-grade quality",
    ],
  },
  // --- NEW PRODUCT 2 ---
  {
    id: "house-cleaning-services",
    name: "House Cleaning Services",
    category: "painting-supplies",
    image: "/cleaning_service.jpg",
    description:
      "Professional home cleaning and maintenance services by Colors Painting Shop. Deep cleaning, surface preparation, and post-painting cleanup.",
    features: [
      "Deep home cleaning",
      "Skilled trained cleaning team",
      "Includes pre-painting & post-painting cleanup",
      "Affordable & fast service",
    ],
  },
];
