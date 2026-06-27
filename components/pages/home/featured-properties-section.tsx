"use client";

import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { mockProperties } from "@/components/mocks/properties";
import { PropertyCard } from "@/components/property-card";

export function FeaturedPropertiesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-12">
          <div>
            <span className="text-secondary font-semibold tracking-wider text-xs uppercase">
              Selección Exclusiva
            </span>
            <h2 className="text-3xl font-semibold mt-2">Propiedades Destacadas</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
          <div className="flex gap-6">
            {mockProperties.map((property, index) => (
              <div
                key={property.title}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0"
              >
                <PropertyCard
                  property={property}
                  priority={index === 0}
                  showDetailLink={false}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex md:hidden justify-center gap-2 mt-6">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}