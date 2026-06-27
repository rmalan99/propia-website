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

export const defaultPropertiesFiltersFormValues: PropertiesFiltersFormValues = {
  searchMode: "classic",
  aiQuery: "",
  location: "",
  operation: "",
  propertyType: "",
  priceRange: "",
  sortBy: "",
  view: "grid",
  selectedStatus: "",
  selectedAmenities: [],
};