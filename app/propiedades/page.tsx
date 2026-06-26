"use client";

import { useMemo } from "react";
import { Grid2X2, MapPinned } from "lucide-react";
import { FormProvider, useForm, useWatch } from "react-hook-form";

import { Container } from "@/components/layout/container";
import {
  AiFilterForm,
  ClassicFilterFields,
  defaultPropertiesFiltersFormValues,
  FilterSelectField,
  PropertiesAdvancedFiltersSheet,
  type PropertiesFiltersFormValues,
  RenderModeFilter,
  RenderModeFilterToggle,
  RenderModeFilterView,
} from "@/components/pages/properties";
import {
  properties as baseProperties,
  type Property,
} from "@/components/mocks/properties";
import { PropertyCard } from "@/components/property-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ListingProperty = Property & {
  id: number;
  agent: {
    name: string;
    role: string;
    initials: string;
  };
};

const listingProperties: ListingProperty[] = [
  {
    id: 1,
    ...baseProperties[0],
    badge: "Exclusiva",
    badge2: "Vista al mar",
    title: "Ocean View Penthouse",
    location: "Punta Cana, RD",
    agent: {
      name: "Daniela Méndez",
      role: "Asesora Senior",
      initials: "DM",
    },
  },
  {
    id: 2,
    ...baseProperties[1],
    badge: "Destacada",
    badge2: "Entrega 2026",
    title: "Villa Serena Estates",
    location: "Santo Domingo, RD",
    agent: {
      name: "Luis Peralta",
      role: "Luxury Broker",
      initials: "LP",
    },
  },
  {
    id: 3,
    ...baseProperties[2],
    badge: "Nueva",
    badge2: "Amueblada",
    title: "Luxury Sky Apartment",
    location: "Piantini, SD",
    agent: {
      name: "Camila Rojas",
      role: "Rental Specialist",
      initials: "CR",
    },
  },
  {
    id: 4,
    ...baseProperties[3],
    badge: "Inversión",
    badge2: "Alta demanda",
    title: "Luxury Sky Apartment Top",
    location: "Serrallés, SD",
    agent: {
      name: "Marco Gil",
      role: "Investment Advisor",
      initials: "MG",
    },
  },
  {
    id: 5,
    ...baseProperties[1],
    badge: "Exclusiva",
    badge2: "Jardín privado",
    title: "Residencia Palma Real",
    location: "Cap Cana, RD",
    agent: {
      name: "Andrea Castillo",
      role: "Private Client Advisor",
      initials: "AC",
    },
  },
  {
    id: 6,
    ...baseProperties[0],
    badge: "Top Pick",
    badge2: "Llave en mano",
    title: "Coral Bay Residence",
    location: "Juan Dolio, RD",
    agent: {
      name: "José Santana",
      role: "Coastal Properties Lead",
      initials: "JS",
    },
  },
];

export default function PropertiesPage() {
  const form = useForm<PropertiesFiltersFormValues>({
    defaultValues: defaultPropertiesFiltersFormValues,
  });
  const searchMode = useWatch({ control: form.control, name: "searchMode" });
  const aiQuery = useWatch({ control: form.control, name: "aiQuery" });
  const location = useWatch({ control: form.control, name: "location" });
  const operation = useWatch({ control: form.control, name: "operation" });
  const propertyType = useWatch({
    control: form.control,
    name: "propertyType",
  });
  const view = useWatch({ control: form.control, name: "view" });

  const activeFilters = useMemo(
    () =>
      searchMode === "ai"
        ? [aiQuery].filter(Boolean)
        : [location, operation, propertyType].filter(Boolean),
    [aiQuery, location, operation, propertyType, searchMode],
  );

  return (
    <main className="py-10 md:py-6">
      <FormProvider {...form}>
        <Container className="space-y-8 md:space-y-10">
          <section className="sticky top-3 z-20 rounded-3xl border border-border bg-card/95 p-5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/90 md:p-6">
            <RenderModeFilter>
              <div className="space-y-5">
                <RenderModeFilterView mode="ai">
                  <div className="space-y-4">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
                      <RenderModeFilterToggle />
                    </div>
                    <AiFilterForm />
                  </div>
                </RenderModeFilterView>

                <RenderModeFilterView mode="classic">
                  <div className="animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2 grid gap-3 duration-300 xl:grid-cols-[minmax(0,1.45fr)_minmax(0,0.8fr)_minmax(0,0.8fr)_auto] xl:items-end">
                    <ClassicFilterFields />

                    <div className="flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-end">
                      <PropertiesAdvancedFiltersSheet />
                      <RenderModeFilterToggle className="inline-flex w-full rounded-full border border-border/70 bg-background p-1 shadow-sm transition-all duration-300 xl:w-auto" />
                    </div>
                  </div>
                </RenderModeFilterView>
              </div>
            </RenderModeFilter>
          </section>

          <section className="space-y-6">
            <Tabs
              value={view}
              onValueChange={(value) =>
                form.setValue(
                  "view",
                  value as PropertiesFiltersFormValues["view"],
                  {
                    shouldDirty: true,
                  },
                )
              }
              className="space-y-6"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
                      Resultado de búsqueda
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                      {listingProperties.length} propiedades destacadas para ti
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeFilters.map((filter) => (
                      <Badge
                        key={filter}
                        variant="secondary"
                        className="rounded-full px-3 py-1 text-xs"
                      >
                        {filter}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <TabsList className="h-11 rounded-xl bg-muted/70 p-1">
                    <TabsTrigger value="grid" className="gap-2 rounded-lg px-4">
                      <Grid2X2 className="h-4 w-4" />
                      Cuadrícula
                    </TabsTrigger>
                    <TabsTrigger value="map" className="gap-2 rounded-lg px-4">
                      <MapPinned className="h-4 w-4" />
                      Mapa
                    </TabsTrigger>
                  </TabsList>

                  <FilterSelectField
                    name="sortBy"
                    placeholder="Ordenar"
                    items={[
                      "Recomendadas",
                      "Precio: menor a mayor",
                      "Precio: mayor a menor",
                      "Más recientes",
                    ]}
                  />
                </div>
              </div>
              

            <TabsContent value="grid" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {listingProperties.map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    priority={index === 0}
                    agent={property.agent}
                    showDetailLink={false}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="map" className="mt-0">
              <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="grid gap-6 md:grid-cols-2">
                  {listingProperties.slice(0, 4).map((property, index) => (
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
                      <div className="absolute left-[16%] top-[24%] rounded-full bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-md">
                        $1.25M
                      </div>
                      <div className="absolute left-[54%] top-[39%] rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md">
                        $840K
                      </div>
                      <div className="absolute left-[36%] top-[64%] rounded-full bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-md">
                        $2.5K/mo
                      </div>
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
            </TabsContent>
            </Tabs>
          </section>
        </Container>
      </FormProvider>
    </main>
  );
}
