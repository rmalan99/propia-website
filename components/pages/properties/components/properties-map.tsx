"use client";

import { Card, CardContent } from "@/components/ui/card";
import { PropertyCard } from "@/components/property-card";
import type { ListingProperty } from "@/components/pages/properties/hooks/use-properties";

interface PropertiesMapProps {
  properties: ListingProperty[];
  maxDisplay?: number;
}

interface MapMarker {
  price: string;
  left: string;
  top: string;
  variant: "default" | "primary";
}

const mapMarkers: MapMarker[] = [
  { price: "$1.25M", left: "16%", top: "24%", variant: "default" },
  { price: "$840K", left: "54%", top: "39%", variant: "primary" },
  { price: "$2.5K/mo", left: "36%", top: "64%", variant: "default" },
];

export function PropertiesMap({ properties, maxDisplay = 4 }: PropertiesMapProps) {
  const displayProperties = properties.slice(0, maxDisplay);

  return (
    <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <div className="grid gap-6 md:grid-cols-2">
        {displayProperties.map((property, index) => (
          <PropertyCard
            key={property.id}
            property={property}
            priority={index === 0}
            agent={property.agent}
            showDetailLink={false}
          />
        ))}
      </div>

      <Card className="overflow-hidden border-border bg-card shadow-sm">
        <CardContent className="relative flex h-[540px] flex-col justify-between overflow-hidden p-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,86,60,0.18),_transparent_36%),linear-gradient(135deg,_rgba(239,231,224,0.75),_rgba(207,188,165,0.4))]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(79,86,60,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(79,86,60,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />

          <div className="relative flex-1 p-6">
            {mapMarkers.map((marker, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-md"
                style={{ left: marker.left, top: marker.top }}
              >
                {marker.price}
              </div>
            ))}
          </div>

          <div className="relative border-t border-border bg-card/90 p-6 backdrop-blur">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
              Vista contextual
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">
              Santo Domingo y zonas premium
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Usa esta vista para relacionar ubicación, ticket
              promedio y densidad de inventario.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
