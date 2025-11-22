export interface Service {
  id: string;
  name: string;
  shop: "valiyamannil" | "colors";
  category: "gypsum-ceiling" | "painting" | "installation";
  description: string;
  features: string[];
}

export const services: Service[] = [
  // Valiyamannil Agencies - Ceiling/Gypsum Services
  {
    id: "val-gypsum-1",
    name: "Gypsum Board Supply & Installation",
    shop: "valiyamannil",
    category: "gypsum-ceiling",
    description:
      "Complete gypsum board supply and professional installation service for residential and commercial interiors. We handle design consultation, material selection, and expert installation.",
    features: [
      "Free design consultation",
      "Quality materials guaranteed",
      "Expert installation team",
      "Timely project completion",
    ],
  },
  {
    id: "val-ceiling-2",
    name: "Suspended Ceiling Installation",
    shop: "valiyamannil",
    category: "gypsum-ceiling",
    description:
      "Professional suspended ceiling installation with acoustic and thermal properties. Transform your spaces with modern, maintenance-friendly ceiling solutions.",
    features: [
      "Thermal insulation included",
      "Sound-dampening properties",
      "Various finish options",
      "Quick turnaround time",
    ],
  },
  {
    id: "val-pvc-3",
    name: "PVC Ceiling & Wall Panels",
    shop: "valiyamannil",
    category: "gypsum-ceiling",
    description:
      "Installation of high-quality PVC panels for walls and ceilings. Waterproof, durable, and aesthetically pleasing solution for modern interiors.",
    features: [
      "Waterproof installation",
      "Multiple color choices",
      "Easy maintenance",
      "Long-lasting durability",
    ],
  },
  {
    id: "val-lights-4",
    name: "Ceiling Light Installation & Design",
    shop: "valiyamannil",
    category: "installation",
    description:
      "Professional installation of ceiling lights and lighting fixtures. We provide design consultation to optimize lighting for functionality and ambiance.",
    features: [
      "Modern LED options",
      "Energy-efficient solutions",
      "Professional design advice",
      "Electrical compliance guaranteed",
    ],
  },
  {
    id: "val-maintenance-5",
    name: "Ceiling Maintenance & Repair",
    shop: "valiyamannil",
    category: "gypsum-ceiling",
    description:
      "Professional maintenance and repair services for existing ceiling installations. Quick response to any issues ensuring longevity of your ceiling systems.",
    features: [
      "Quick response service",
      "Expert troubleshooting",
      "Quality repairs",
      "Preventive maintenance plans",
    ],
  },
  {
  id: "val-accessories-6",
  name: "Towel Racks & Bathroom Accessories",
  shop: "valiyamannil",
  category: "gypsum-ceiling",
  description:
    "Premium-quality towel racks and essential bathroom accessories supplied by Valiyamannil Agencies. Durable, stylish, and designed for long-lasting performance.",
  features: [
    "High-quality metal and steel options",
    "Rust-resistant materials",
    "Easy installation",
    "Modern and minimal designs",
  ],
},

  // Colors - Painting Services
  {
    id: "col-interior-1",
    name: "Interior Painting Services",
    shop: "colors",
    category: "painting",
    description:
      "Complete interior painting solutions for homes and offices. From wall preparation to final finish, we deliver pristine, long-lasting results with minimal disruption.",
    features: [
      "Professional surface preparation",
      "Premium paint quality",
      "Expert application",
      "Clean, timely execution",
    ],
  },
  {
    id: "col-exterior-2",
    name: "Exterior Painting & Protection",
    shop: "colors",
    category: "painting",
    description:
      "Durable exterior painting service designed to protect and beautify your property. Weather-resistant coatings ensure vibrant colors and protection for years.",
    features: [
      "Weather-resistant coatings",
      "UV protection",
      "10-year durability guarantee",
      "Professional surface preparation",
    ],
  },
  {
    id: "col-spray-3",
    name: "Spray Painting & Finishing",
    shop: "colors",
    category: "painting",
    description:
      "Industrial-grade spray painting for detailed work and commercial projects. Provides even coverage, superior finish, and professional results for any application.",
    features: [
      "Even, seamless coverage",
      "Professional equipment",
      "Quick-drying finishes",
      "Superior aesthetics",
    ],
  },
  {
    id: "col-wallpaper-4",
    name: "Wallpapering & Wall Decoration",
    shop: "colors",
    category: "painting",
    description:
      "Professional wallpaper installation and wall decoration services. Transform your spaces with designer patterns and textures applied by skilled craftsmen.",
    features: [
      "Precise installation",
      "Designer selections available",
      "Surface preparation included",
      "Long-lasting application",
    ],
  },
  {
    id: "col-varnish-5",
    name: "Varnish & Protective Finishing",
    shop: "colors",
    category: "painting",
    description:
      "Professional varnishing and protective finishing services for wood surfaces. Enhances beauty while providing superior protection against damage.",
    features: [
      "High-gloss finishes",
      "Water-resistant protection",
      "Surface preparation included",
      "Professional-grade materials",
    ],
  },
  {
    id: "col-commercial-6",
    name: "Commercial Painting Solutions",
    shop: "colors",
    category: "painting",
    description:
      "Large-scale commercial painting services for offices, retail spaces, and industrial facilities. Minimized disruption with professional project management.",
    features: [
      "Project planning & scheduling",
      "Minimal business disruption",
      "Quality assurance checks",
      "Competitive large-project rates",
    ],
  },
  {
  id: "col-cleaning-7",
  name: "House Cleaning Services",
  shop: "colors",
  category: "painting",
  description:
    "Professional house cleaning services provided by Colors. Deep cleaning for homes and apartments with reliable staff and high-grade cleaning materials.",
  features: [
    "Deep & surface cleaning",
    "Trained and verified staff",
    "Eco-friendly cleaning supplies",
    "Affordable service packages",
  ],
},
];
