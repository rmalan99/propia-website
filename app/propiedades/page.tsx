"use client";

import { useMemo, useState } from "react";
import {
  Check,
  Grid2X2,
  ListFilter,
  MapPinned,
  Search,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import {
  properties as baseProperties,
  type Property,
} from "@/components/mocks/properties";
import { PropertyCard } from "@/components/property-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

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

const statusOptions = ["Nueva", "En planos", "Entrega inmediata"];
const amenityOptions = [
  "Piscina",
  "Gimnasio",
  "Seguridad 24/7",
  "Pet friendly",
  "Terraza",
  "Planta full",
];

const AI_SUGGESTIONS = [
  "Quiero un apartamento moderno en Evaristo Morales por menos de US$180,000",
  "Busco una casa familiar con patio y 3 habitaciones en Santiago",
  "Muéstrame proyectos nuevos cerca de colegios y supermercados",
];

function FilterSelect({
  value,
  onValueChange,
  placeholder,
  items,
}: {
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  items: string[];
}) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="h-11 rounded-xl border-border bg-background text-sm shadow-none">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function AdvancedFiltersSheet({
  priceRange,
  setPriceRange,
  selectedStatus,
  setSelectedStatus,
  selectedAmenities,
  toggleAmenity,
}: {
  priceRange: string;
  setPriceRange: (value: string) => void;
  selectedStatus: string;
  setSelectedStatus: (value: string) => void;
  selectedAmenities: string[];
  toggleAmenity: (amenity: string) => void;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="h-11 w-full rounded-xl px-5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 md:w-auto"
        >
          <ListFilter className="h-4 w-4" />
          Filtros
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Filtros avanzados</SheetTitle>
          <SheetDescription>
            Ajusta estado, precio y amenidades para afinar la selección.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 space-y-8">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Rango de precio
            </label>
            <FilterSelect
              value={priceRange}
              onValueChange={setPriceRange}
              placeholder="Precio"
              items={[
                "Todos los precios",
                "US$ 100k - 300k",
                "US$ 300k - 700k",
                "US$ 700k+",
              ]}
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium text-foreground">
              Estado del inmueble
            </p>
            <div className="flex flex-wrap gap-2">
              {statusOptions.map((option) => {
                const active = selectedStatus === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedStatus(option)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm transition-colors",
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground",
                    )}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium text-foreground">Amenidades</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {amenityOptions.map((amenity) => {
                const active = selectedAmenities.includes(amenity);
                return (
                  <button
                    key={amenity}
                    type="button"
                    onClick={() => toggleAmenity(amenity)}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-colors",
                      active
                        ? "border-primary/30 bg-primary/10 text-foreground"
                        : "border-border bg-background text-muted-foreground hover:border-primary/30",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-full border",
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-transparent",
                      )}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm">{amenity}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <SheetFooter className="mt-8 gap-3 sm:justify-between">
          <Button variant="ghost">Restablecer</Button>
          <Button>Aplicar filtros</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default function PropertiesPage() {
  const [searchMode, setSearchMode] = useState<"classic" | "ai">("classic");
  const [aiQuery, setAiQuery] = useState("");
  const [location, setLocation] = useState("Santo Domingo, RD");
  const [operation, setOperation] = useState("Venta");
  const [propertyType, setPropertyType] = useState("Apartamento");
  const [priceRange, setPriceRange] = useState("Todos los precios");
  const [sortBy, setSortBy] = useState("Recomendadas");
  const [view, setView] = useState("grid");
  const [selectedStatus, setSelectedStatus] = useState("En planos");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([
    "Seguridad 24/7",
    "Piscina",
  ]);

  const activeFilters = useMemo(
    () =>
      searchMode === "ai"
        ? [aiQuery].filter(Boolean)
        : [location, operation, propertyType].filter(Boolean),
    [aiQuery, location, operation, propertyType, searchMode],
  );

  function toggleAmenity(amenity: string) {
    setSelectedAmenities((current) =>
      current.includes(amenity)
        ? current.filter((item) => item !== amenity)
        : [...current, amenity],
    );
  }

  return (
    <main className="py-10 md:py-6">
      <Container className="space-y-8 md:space-y-10">
        <section className="sticky top-3 z-20 rounded-3xl border border-border bg-card/95 p-5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/90 md:p-6">
          <div className="space-y-5">
            {searchMode === "ai" ? (
              <div className="space-y-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
                 
                  <div className="inline-flex w-full rounded-full border border-border/70 bg-background p-1 shadow-sm transition-all duration-300 md:w-auto">
                    <Button
                      type="button"
                      size="sm"
                      variant={searchMode === "ai" ? "default" : "ghost"}
                      className="flex-1 rounded-full px-4 md:flex-none"
                      onClick={() => setSearchMode("ai")}
                    >
                      <Sparkles className="h-4 w-4" />
                      Modo IA
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant={searchMode === "classic" ? "default" : "ghost"}
                      className="flex-1 rounded-full px-4 md:flex-none"
                      onClick={() => setSearchMode("classic")}
                    >
                      Clásico
                    </Button>
                  </div>
                </div>
                <div className="animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2 space-y-4 rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-4 duration-300 md:p-5">
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                    <div className="relative">
                      <Sparkles className="absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-primary" />
                      <Input
                        type="text"
                        value={aiQuery}
                        onChange={(event) => setAiQuery(event.target.value)}
                        placeholder="Ej: Quiero una casa con patio, 3 habitaciones y cerca del centro"
                        className="h-14 rounded-2xl border-primary/20 bg-background/90 pl-10 pr-4 text-sm transition-all duration-300 focus-visible:border-primary/40 focus-visible:ring-primary/30 md:text-base"
                      />
                    </div>
                    <Button
                      className="h-14 rounded-2xl px-6 font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 active:scale-[0.99]"
                      type="button"
                    >
                      <Search className="h-5 w-5" />
                      Buscar con IA
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <p className="text-left text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Sugerencias
                    </p>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                      {AI_SUGGESTIONS.map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => setAiQuery(suggestion)}
                          className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3 text-left text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/5"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2 grid gap-3 duration-300 xl:grid-cols-[minmax(0,1.45fr)_minmax(0,0.8fr)_minmax(0,0.8fr)_auto] xl:items-end">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Ubicación
                  </label>
                  <div className="relative">
                    <MapPinned className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                      className="h-11 rounded-xl border-border bg-background pl-11 transition-all duration-300 focus-visible:border-primary/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Operación
                  </label>
                  <FilterSelect
                    value={operation}
                    onValueChange={setOperation}
                    placeholder="Operación"
                    items={["Venta", "Alquiler"]}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Tipo
                  </label>
                  <FilterSelect
                    value={propertyType}
                    onValueChange={setPropertyType}
                    placeholder="Tipo"
                    items={["Apartamento", "Villa", "Penthouse", "Proyecto"]}
                  />
                </div>

                <div className="flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-end">
                  <AdvancedFiltersSheet
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}
                    selectedAmenities={selectedAmenities}
                    toggleAmenity={toggleAmenity}
                  />
                  <div className="inline-flex w-full rounded-full border border-border/70 bg-background p-1 shadow-sm transition-all duration-300 xl:w-auto">
                    <Button
                      type="button"
                      size="sm"
                      variant={searchMode === "ai" ? "default" : "ghost"}
                      className="flex-1 rounded-full px-4 xl:flex-none"
                      onClick={() => setSearchMode("ai")}
                    >
                      <Sparkles className="h-4 w-4" />
                      Modo IA
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant={searchMode === "classic" ? "default" : "ghost"}
                      className="flex-1 rounded-full px-4 xl:flex-none"
                      onClick={() => setSearchMode("classic")}
                    >
                      Clásico
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="space-y-6">
          <Tabs value={view} onValueChange={setView} className="space-y-6">
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

                <FilterSelect
                  value={sortBy}
                  onValueChange={setSortBy}
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
    </main>
  );
}
