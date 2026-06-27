import { imagePlaceholders } from "@/lib/image-placeholders";

export type PropertyDetail = {
  id: string;
  mlsNumber: string;
  title: string;
  location: string;
  address: string;
  priceRange: {
    min: string;
    max: string;
  };
  badge: string;
  badge2?: string;
  description: string;
  deliveryDate: string;
  trust: {
    name: string;
    fiduciary: string;
  };
  features: {
    icon: string;
    label: string;
  }[];
  images: {
    main: string;
    thumbnails: string[];
  };
  videoTour?: {
    thumbnailUrl: string;
    videoUrl: string;
    duration?: string;
  };
  mapImage: string;
  agent: {
    name: string;
    role: string;
    initials: string;
  };
  specs: {
    beds: number;
    baths: number;
    sqft: string;
  };
  similarProperties: {
    id: string;
    image: string;
    placeholder: string;
    price: string;
    badge: string;
    title: string;
    location: string;
    beds: number;
    baths: number;
    sqft: string;
  }[];
};

export async function getPropertyById(
  id: string,
): Promise<PropertyDetail | null> {
  const properties = mockProperties;
  const property = properties.find((p) => p.id === id);
  return property ?? null;
}

const mockProperties: PropertyDetail[] = [
  {
    id: "glass-pavilion",
    mlsNumber: "8472910",
    title: "The Glass Pavilion",
    location: "Beverly Hills, CA",
    address: "10425 Revuelta Way, Beverly Hills, CA 90210",
    priceRange: {
      min: "$450,000",
      max: "$1,800,000",
    },
    badge: "Exclusive",
    badge2: "New Listing",
    deliveryDate: "Diciembre 2025",
    trust: {
      name: "Banco Popular",
      fiduciary: "Fiduciaria Popular",
    },
    description: `Perched on a secluded promontory in the prestigious Trousdale Estates, The Glass Pavilion is a masterclass in modern architectural design. Conceived by internationally renowned architect Wallace E. Cunningham, this residence seamlessly blurs the line between indoor and outdoor living.

Constructed primarily of structural glass and steel, the home offers sweeping, unobstructed 270-degree views from Downtown Los Angeles to the Pacific Ocean. The interior spaces feature bespoke finishes, including book-matched marble walls, custom Italian cabinetry, and French oak flooring, curated to create an atmosphere of serene luxury.

The primary suite occupies a private wing, featuring floor-to-ceiling glass walls that dissolve the boundary between interior and exterior. The spa-inspired bathroom offers a floating vanity, soaking tub, and rainfall shower withviews.`,
    features: [
      { icon: "smart_toy", label: "Smart Home System" },
      { icon: "pool", label: "Infinity Pool" },
      { icon: "wine_bar", label: "Wine Cellar" },
      { icon: "directions_car", label: "6-Car Garage" },
      { icon: "theaters", label: "Home Theater" },
      { icon: "fitness_center", label: "Private Gym" },
    ],
    images: {
      main: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      ],
    },
    videoTour: {
      thumbnailUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "2:34",
    },
    mapImage:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80",
    agent: {
      name: "Eleanor Vance",
      role: "Senior Partner, Luxe Estates",
      initials: "EV",
    },
    specs: {
      beds: 6,
      baths: 8,
      sqft: "10,500",
    },
    similarProperties: [
      {
        id: "modernist-estate",
        image: "/images/home/propiedad-1-penthouse.avif",
        placeholder: imagePlaceholders["propiedad-1-penthouse"],
        price: "$12,950,000",
        badge: "New Listing",
        title: "The Modernist Estate",
        location: "Bel Air, CA",
        beds: 6,
        baths: 8,
        sqft: "10,500",
      },
      {
        id: "sunset-view",
        image: "/images/home/propiedad-2-villa.avif",
        placeholder: imagePlaceholders["propiedad-2-villa"],
        price: "$9,200,000",
        badge: "Exclusive",
        title: "Sunset View Architectural",
        location: "Hollywood Hills, CA",
        beds: 4,
        baths: 5.5,
        sqft: "6,800",
      },
      {
        id: "sky-residence",
        image: "/images/home/propiedad-3-apartamento.avif",
        placeholder: imagePlaceholders["propiedad-3-apartamento"],
        price: "$7,850,000",
        badge: "New Listing",
        title: "The Sky Residence",
        location: "West Hollywood, CA",
        beds: 3,
        baths: 4,
        sqft: "4,200",
      },
    ],
  },
  {
    id: "ocean-view-penthouse",
    mlsNumber: "8472911",
    title: "Ocean View Penthouse",
    location: "Punta Cana, RD",
    address: "Avenida Hjulista, Punta Cana 23000",
    priceRange: {
      min: "$1,250,000",
      max: "$1,450,000",
    },
    badge: "Destacada",
    badge2: "Nueva",
    deliveryDate: "Marzo 2026",
    trust: {
      name: "Banco Reservas",
      fiduciary: "Fiduciaria Reservas",
    },
    description: `Experience unparalleled luxury in this stunning ocean view penthouse overlooking the Caribbean Sea. This architectural masterpiece combines contemporary design with the natural beauty of Punta Cana.

Floor-to-ceiling windows frame breathtaking ocean views while flooding the interior with natural light. The open-concept living space features Italian marble floors, a gourmet chef's kitchen with top-of-the-line appliances, and seamless indoor-outdoor flow to multiple terraces.

The primary suite offers a private sanctuary with panoramic ocean views, a spa-like bathroom with soaking tub, and a walk-in closet with custom cabinetry. Additional bedrooms each have en-suite bathrooms and stunning views.`,
    features: [
      { icon: "waves", label: "Beach Access" },
      { icon: "pool", label: "Infinity Pool" },
      { icon: "spa", label: "Spa & Wellness" },
      { icon: "fitness_center", label: "Fitness Center" },
      { icon: "restaurant", label: "Private Restaurant" },
      { icon: "security", label: "24/7 Security" },
    ],
    images: {
      main: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      ],
    },
    mapImage:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80",
    agent: {
      name: "Carlos Mendez",
      role: "Senior Partner, Caribbean Estates",
      initials: "CM",
    },
    specs: {
      beds: 4,
      baths: 4.5,
      sqft: "3,200",
    },
    similarProperties: [
      {
        id: "villa-serena",
        image: "/images/home/propiedad-2-villa.avif",
        placeholder: imagePlaceholders["propiedad-2-villa"],
        price: "$840,000",
        badge: "Exclusiva",
        title: "Villa Serena Estates",
        location: "Santo Domingo, RD",
        beds: 4,
        baths: 4,
        sqft: "410m²",
      },
      {
        id: "luxury-sky",
        image: "/images/home/propiedad-3-apartamento.avif",
        placeholder: imagePlaceholders["propiedad-3-apartamento"],
        price: "$2,500 /mo",
        badge: "Nueva",
        title: "Luxury Sky Apartment",
        location: "Piantini, SD",
        beds: 2,
        baths: 2,
        sqft: "120m²",
      },
      {
        id: "glass-pavilion",
        image:
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        placeholder: imagePlaceholders["propiedad-1-penthouse"],
        price: "$8,500,000",
        badge: "Exclusive",
        title: "The Glass Pavilion",
        location: "Beverly Hills, CA",
        beds: 6,
        baths: 8,
        sqft: "10,500",
      },
    ],
  },
];
