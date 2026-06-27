import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { mockProperties } from "@/components/mocks/properties";
import { PropertyCard } from "@/components/property-card";

export function FeaturedPropertiesSection() {
  return (
    <section className="min-h-[90vh] flex items-center  bg-background">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-secondary font-semibold tracking-wider text-xs uppercase">
              Selección Exclusiva
            </span>
            <h2 className="text-3xl font-semibold mt-2">Propiedades Destacadas</h2>
          </div>
          <Button asChild variant="link" className="h-auto p-0 font-bold text-primary">
            <a href="#" className="flex items-center gap-2">
              Ver todas las propiedades <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProperties.map((property, index) => (
            <PropertyCard
              key={property.title}
              property={property}
              priority={index === 0}
              showDetailLink={false}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
