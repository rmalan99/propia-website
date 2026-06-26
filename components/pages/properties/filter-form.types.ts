export type PropertiesSearchMode = "classic" | "ai";

export type PropertiesFiltersFormValues = {
  searchMode: PropertiesSearchMode;
  aiQuery: string;
  location: string;
  operation: string;
  propertyType: string;
  priceRange: string;
  sortBy: string;
  view: "grid" | "map";
  selectedStatus: string;
  selectedAmenities: string[];
};

export const statusOptions = ["Nueva", "En planos", "Entrega inmediata"];

export const amenityOptions = [
  "Piscina",
  "Gimnasio",
  "Seguridad 24/7",
  "Pet friendly",
  "Terraza",
  "Planta full",
];

export const aiSuggestions = [
  "Quiero un apartamento moderno en Evaristo Morales por menos de US$180,000",
  "Busco una casa familiar con patio y 3 habitaciones en Santiago",
  "Muéstrame proyectos nuevos cerca de colegios y supermercados",
];

export const defaultPropertiesFiltersFormValues: PropertiesFiltersFormValues = {
  searchMode: "classic",
  aiQuery: "",
  location: "Santo Domingo, RD",
  operation: "Venta",
  propertyType: "Apartamento",
  priceRange: "Todos los precios",
  sortBy: "Recomendadas",
  view: "grid",
  selectedStatus: "En planos",
  selectedAmenities: ["Seguridad 24/7", "Piscina"],
};
