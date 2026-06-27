import { imagePlaceholders } from "@/lib/image-placeholders";

export type Property = {
  id: number;
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
  status: PropertyStatus;
  amenities: PropertyAmenity[];
  agent: PropertyAgent;
};

export type PropertyStatus = "Nueva" | "En planos" | "Entrega inmediata";

export type PropertyAmenity =
  | "Piscina"
  | "Gimnasio"
  | "Seguridad 24/7"
  | "Pet friendly"
  | "Terraza"
  | "Planta full";

export type PropertyAgent = {
  name: string;
  role: string;
  initials: string;
};

export const propertyStatusOptions: PropertyStatus[] = [
  "Nueva",
  "En planos",
  "Entrega inmediata",
];

export const propertyAmenityOptions: PropertyAmenity[] = [
  "Piscina",
  "Gimnasio",
  "Seguridad 24/7",
  "Pet friendly",
  "Terraza",
  "Planta full",
];

export const operationOptions = [
  { label: "Venta", value: "Venta" },
  { label: "Alquiler", value: "Alquiler" },
];

export const propertyTypeOptions = [
  { label: "Apartamento", value: "Apartamento" },
  { label: "Villa", value: "Villa" },
  { label: "Penthouse", value: "Penthouse" },
  { label: "Proyecto", value: "Proyecto" },
];

export const priceRangeOptions = [
  { label: "Todos los precios", value: "" },
  { label: "US$ 100k - 300k", value: "100k-300k" },
  { label: "US$ 300k - 700k", value: "300k-700k" },
  { label: "US$ 700k+", value: "700k+" },
];

export const sortOptions = [
  { label: "Recomendadas", value: "recomendadas" },
  { label: "Precio: menor a mayor", value: "price-asc" },
  { label: "Precio: mayor a menor", value: "price-desc" },
  { label: "Más recientes", value: "recientes" },
];

export const aiSuggestions = [
  "Quiero un apartamento moderno en Evaristo Morales por menos de US$180,000",
  "Busco una casa familiar con patio y 3 habitaciones en Santiago",
  "Muéstrame proyectos nuevos cerca de colegios y supermercados",
];

const mockAgents: PropertyAgent[] = [
  { name: "Daniela Méndez", role: "Asesora Senior", initials: "DM" },
  { name: "Luis Peralta", role: "Luxury Broker", initials: "LP" },
  { name: "Camila Rojas", role: "Rental Specialist", initials: "CR" },
  { name: "Marco Gil", role: "Investment Advisor", initials: "MG" },
  { name: "Andrea Castillo", role: "Private Client Advisor", initials: "AC" },
  { name: "José Santana", role: "Coastal Properties Lead", initials: "JS" },
];

export const mockProperties: Property[] = [
  {
    id: 1,
    image: "/images/home/propiedad-1-penthouse.avif",
    placeholder: imagePlaceholders["propiedad-1-penthouse"],
    price: "$1,250,000",
    badge: "Exclusiva",
    badge2: "Vista al mar",
    title: "Ocean View Penthouse",
    location: "Punta Cana, RD",
    beds: 3,
    baths: 3.5,
    sqft: "245m²",
    type: "Venta",
    status: "Entrega inmediata",
    amenities: ["Piscina", "Gimnasio", "Seguridad 24/7"],
    agent: mockAgents[0],
  },
  {
    id: 2,
    image: "/images/home/propiedad-2-villa.avif",
    placeholder: imagePlaceholders["propiedad-2-villa"],
    price: "$840,000",
    badge: "Destacada",
    badge2: "Entrega 2026",
    title: "Villa Serena Estates",
    location: "Santo Domingo, RD",
    beds: 4,
    baths: 4,
    sqft: "410m²",
    type: "Venta",
    status: "En planos",
    amenities: ["Piscina", "Terraza", "Seguridad 24/7"],
    agent: mockAgents[1],
  },
  {
    id: 3,
    image: "/images/home/propiedad-3-apartamento.avif",
    placeholder: imagePlaceholders["propiedad-3-apartamento"],
    price: "$2,500 /mo",
    badge: "Nueva",
    badge2: "Amueblada",
    title: "Luxury Sky Apartment",
    location: "Piantini, SD",
    beds: 2,
    baths: 2,
    sqft: "120m²",
    type: "Alquiler",
    status: "Nueva",
    amenities: ["Gimnasio", "Seguridad 24/7", "Pet friendly"],
    agent: mockAgents[2],
  },
  {
    id: 4,
    image: "/images/home/propiedad-3-apartamento.avif",
    placeholder: imagePlaceholders["propiedad-3-apartamento"],
    price: "$2,500 /mo",
    badge: "Inversión",
    badge2: "Alta demanda",
    title: "Luxury Sky Apartment Top",
    location: "Serrallés, SD",
    beds: 2,
    baths: 2,
    sqft: "120m²",
    type: "Alquiler",
    status: "Nueva",
    amenities: ["Gimnasio", "Seguridad 24/7"],
    agent: mockAgents[3],
  },
  {
    id: 5,
    image: "/images/home/propiedad-2-villa.avif",
    placeholder: imagePlaceholders["propiedad-2-villa"],
    price: "$840,000",
    badge: "Exclusiva",
    badge2: "Jardín privado",
    title: "Residencia Palma Real",
    location: "Cap Cana, RD",
    beds: 4,
    baths: 4,
    sqft: "410m²",
    type: "Venta",
    status: "En planos",
    amenities: ["Piscina", "Terraza", "Planta full"],
    agent: mockAgents[4],
  },
  {
    id: 6,
    image: "/images/home/propiedad-1-penthouse.avif",
    placeholder: imagePlaceholders["propiedad-1-penthouse"],
    price: "$1,250,000",
    badge: "Top Pick",
    badge2: "Llave en mano",
    title: "Coral Bay Residence",
    location: "Juan Dolio, RD",
    beds: 3,
    baths: 3.5,
    sqft: "245m²",
    type: "Venta",
    status: "Entrega inmediata",
    amenities: ["Piscina", "Gimnasio", "Pet friendly"],
    agent: mockAgents[5],
  },
];