"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { mockProperties } from "@/components/mocks/properties";
import { PropertyCard } from "@/components/property-card";

export function FeaturedPropertiesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-8 md:py-12 bg-background overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
          <div>
            <span className="text-secondary font-semibold tracking-wider text-xs uppercase">
              Selección Exclusiva
            </span>
            <h2 className="text-3xl font-semibold mt-1">Propiedades Destacadas</h2>
          </div>
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
            {mockProperties.map((property, index) => (
              <div
                key={property.title}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_33%] lg:flex-[0_0_25%] min-w-0"
              >
                <div className="px-2">
                  <PropertyCard
                    property={property}
                    priority={index === 0}
                    showDetailLink={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex md:hidden justify-center gap-2 mt-4">
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
      </Container>
    </section>
  );
}
