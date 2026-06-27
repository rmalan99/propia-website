"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ListingProperty } from "@/components/pages/properties/hooks/use-properties";

interface PropertiesGridProps {
  properties: ListingProperty[];
  emptyMessage?: string;
}

export function PropertiesGrid({ properties, emptyMessage = "No se encontraron propiedades" }: PropertiesGridProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (properties.length === 0) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <div className="hidden md:flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border"
            onClick={scrollPrev}
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border"
            onClick={scrollNext}
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_33%] lg:flex-[0_0_25%] min-w-0"
            >
              <div className="px-2">
                <PropertyCard
                  property={property}
                  priority={index === 0}
                  agent={property.agent}
                  showDetailLink={true}
                  id={property.id}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center md:hidden">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-border"
          onClick={scrollPrev}
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-border"
          onClick={scrollNext}
          aria-label="Siguiente"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
