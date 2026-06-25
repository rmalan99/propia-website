import { imagePlaceholders } from "@/lib/image-placeholders";

export type Property = {
  image: string;
  placeholder: string;
  price: string;
  badge: string;
  badge2?: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
};

export const properties: Property[] = [
  {
    image: "/images/home/propiedad-1-penthouse.avif",
    placeholder: imagePlaceholders["propiedad-1-penthouse"],
    price: "$1,250,000",
    badge: "Destacada",
    badge2: "Nueva",
    title: "Ocean View Penthouse",
    location: "Punta Cana, RD",
    beds: 3,
    baths: 3.5,
    sqft: "245m²",
    type: "Venta",
  },
  {
    image: "/images/home/propiedad-2-villa.avif",
    placeholder: imagePlaceholders["propiedad-2-villa"],
    price: "$840,000",
    badge: "Exclusiva",
    title: "Villa Serena Estates",
    location: "Santo Domingo, RD",
    beds: 4,
    baths: 4,
    sqft: "410m²",
    type: "Venta",
  },
  {
    image: "/images/home/propiedad-3-apartamento.avif",
    placeholder: imagePlaceholders["propiedad-3-apartamento"],
    price: "$2,500 /mo",
    badge: "Nueva",
    title: "Luxury Sky Apartment",
    location: "Piantini, SD",
    beds: 2,
    baths: 2,
    sqft: "120m²",
    type: "Alquiler",
  },
];
