"use client";

import { useMemo } from "react";

import { mockProperties, type Property } from "@/components/mocks/properties";

export type ListingProperty = Property;

export type SortOption = "recomendadas" | "price-asc" | "price-desc" | "recientes";

export interface UsePropertiesOptions {
  location?: string;
  operation?: string;
  propertyType?: string;
  aiQuery?: string;
  sortBy?: SortOption;
  status?: string;
  amenities?: string[];
}

export interface UsePropertiesReturn {
  properties: ListingProperty[];
  totalCount: number;
  hasActiveFilters: boolean;
}

function parsePrice(price: string): number {
  const numeric = price.replace(/[^0-9.]/g, "");
  return parseFloat(numeric) || 0;
}

function matchesFilter(
  property: ListingProperty,
  options: UsePropertiesOptions,
): boolean {
  const { location, operation, propertyType, aiQuery, status, amenities } =
    options;

  if (location && !property.location.toLowerCase().includes(location.toLowerCase())) {
    return false;
  }

  if (operation && property.type !== operation) {
    return false;
  }

  if (propertyType && propertyType !== "Todos" && !property.title.toLowerCase().includes(propertyType.toLowerCase())) {
    return false;
  }

  if (status && property.status !== status) {
    return false;
  }

  if (amenities && amenities.length > 0) {
    const hasAllAmenities = amenities.every((a) =>
      property.amenities.includes(a as Property["amenities"][number]),
    );
    if (!hasAllAmenities) return false;
  }

  if (aiQuery) {
    const query = aiQuery.toLowerCase();
    const searchableText = `${property.title} ${property.location} ${property.type}`.toLowerCase();
    if (!searchableText.includes(query)) {
      return false;
    }
  }

  return true;
}

function sortProperties(
  properties: ListingProperty[],
  sortBy: SortOption,
): ListingProperty[] {
  const sorted = [...properties];

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    case "price-desc":
      return sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    case "recientes":
      return sorted.sort((a, b) => b.id - a.id);
    case "recomendadas":
    default:
      return sorted;
  }
}

export function useProperties(
  options: UsePropertiesOptions,
): UsePropertiesReturn {
  const {
    location,
    operation,
    propertyType,
    aiQuery,
    sortBy = "recomendadas",
    status,
    amenities,
  } = options;

  const properties = useMemo(() => {
    let filtered = mockProperties;

    if (location || operation || propertyType || aiQuery || status || amenities?.length) {
      filtered = mockProperties.filter((p) =>
        matchesFilter(p, { location, operation, propertyType, aiQuery, status, amenities }),
      );
    }

    return sortProperties(filtered, sortBy);
  }, [location, operation, propertyType, aiQuery, sortBy, status, amenities]);

  const hasActiveFilters = Boolean(
    location || operation || propertyType || aiQuery || status || amenities?.length,
  );

  return {
    properties,
    totalCount: properties.length,
    hasActiveFilters,
  };
}