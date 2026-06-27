"use client";

import { PropertyCard } from "@/components/property-card";
import type { ListingProperty } from "@/components/pages/properties/hooks/use-properties";

interface PropertiesGridProps {
  properties: ListingProperty[];
  emptyMessage?: string;
}

export function PropertiesGrid({ properties, emptyMessage = "No se encontraron propiedades" }: PropertiesGridProps) {
  if (properties.length === 0) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {properties.map((property, index) => (
        <PropertyCard
          key={property.id}
          property={property}
          priority={index === 0}
          agent={property.agent}
          showDetailLink={true}
          id={property.id}
        />
      ))}
    </div>
  );
}
