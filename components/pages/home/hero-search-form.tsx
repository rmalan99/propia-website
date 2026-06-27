"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Search, SlidersHorizontal, Sparkles } from "lucide-react";

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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const AI_SUGGESTIONS = [
  "Quiero un apartamento moderno en Evaristo Morales por menos de US$180,000",
  "Busco una casa familiar con patio y 3 habitaciones en Santiago",
  "Muéstrame proyectos nuevos cerca de colegios y supermercados",
];

export function HeroSearchForm() {
  const [searchMode, setSearchMode] = useState<"classic" | "ai">("classic");
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [aiQuery, setAiQuery] = useState("");

  return (
    <Card className="w-full max-w-5xl rounded-[28px] border-white/15 bg-background/95 shadow-2xl backdrop-blur-md">
      <CardContent className="p-6 pt-6 md:p-7 md:pt-7">
        <Tabs defaultValue="buy" className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {searchMode === "classic" ? (
              <TabsList className="h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
                <TabsTrigger
                  value="buy"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Comprar
                </TabsTrigger>
                <TabsTrigger
                  value="rent"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Alquilar
                </TabsTrigger>
                <TabsTrigger
                  value="projects"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Proyectos
                </TabsTrigger>
              </TabsList>
            ) : (
              <div className="hidden md:block" />
            )}
            <div className="inline-flex w-full rounded-full border border-border/70 bg-background p-1 shadow-sm transition-all duration-300 md:w-auto">
              <Button
                type="button"
                size="sm"
                variant={searchMode === "ai" ? "default" : "ghost"}
                className="flex-1 rounded-full px-3 md:px-4 md:flex-none"
                onClick={() => setSearchMode("ai")}
              >
                <Sparkles className="h-4 w-4" />
                <span className="hidden sm:inline">Modo IA</span>
              </Button>
              <Button
                type="button"
                size="sm"
                variant={searchMode === "classic" ? "default" : "ghost"}
                className="flex-1 rounded-full px-3 md:px-4 md:flex-none"
                onClick={() => setSearchMode("classic")}
              >
                <span className="hidden sm:inline">Clásico</span>
                <span className="sm:hidden">IA</span>
              </Button>
            </div>
          </div>
          {searchMode === "ai" ? (
            <div className="animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2 space-y-4 rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-4 md:p-5">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_auto] md:items-center">
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
                  size="lg"
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
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
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
          ) : (
            <div className="animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2 space-y-4 duration-300">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                <div className="relative md:col-span-5">
                  <MapPin className="absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Ubicación, ciudad o zona..."
                    className="h-12 rounded-xl border-border/70 bg-background pl-10 pr-4 transition-all duration-300 focus-visible:border-primary/30"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:col-span-4">
                  <Select defaultValue="all-types">
                    <SelectTrigger className="h-12 rounded-xl border-border/70 bg-background">
                      <SelectValue placeholder="Tipo Propiedad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-types">Tipo Propiedad</SelectItem>
                      <SelectItem value="apartment">Apartamento</SelectItem>
                      <SelectItem value="house">Casa</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="max-price">
                    <SelectTrigger className="h-12 rounded-xl border-border/70 bg-background">
                      <SelectValue placeholder="Precio Máx." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="max-price">Precio Máx.</SelectItem>
                      <SelectItem value="500k">$500k</SelectItem>
                      <SelectItem value="1m">$1M+</SelectItem>
                      <SelectItem value="2m">$2M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  size="lg"
                  className="h-12 rounded-xl font-bold transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/10 active:scale-[0.99] md:col-span-3"
                  type="button"
                >
                  <Search className="h-5 w-5" />
                  <span className="hidden sm:inline">Buscar propiedades</span>
                  <span className="sm:hidden">Buscar</span>
                </Button>
              </div>
              <div className="flex justify-start">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full border-border/70 bg-background/80 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                  onClick={() => setShowMoreFilters((current) => !current)}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span className="hidden sm:inline">Filtros</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      showMoreFilters && "rotate-180"
                    )}
                  />
                </Button>
              </div>
              <div
                className={cn(
                  "grid overflow-hidden transition-all duration-300 ease-out",
                  showMoreFilters ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="grid grid-cols-1 gap-3 pt-1 md:grid-cols-3">
                    <Select defaultValue="bedrooms-any">
                      <SelectTrigger className="h-12 rounded-xl border-border/70 bg-background transition-all duration-300">
                        <SelectValue placeholder="Habitaciones" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bedrooms-any">Habitaciones</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="bathrooms-any">
                      <SelectTrigger className="h-12 rounded-xl border-border/70 bg-background transition-all duration-300">
                        <SelectValue placeholder="Baños" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bathrooms-any">Baños</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="condition-any">
                      <SelectTrigger className="h-12 rounded-xl border-border/70 bg-background transition-all duration-300">
                        <SelectValue placeholder="Condición" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="condition-any">Condición</SelectItem>
                        <SelectItem value="new">Nuevo</SelectItem>
                        <SelectItem value="renovated">Remodelado</SelectItem>
                        <SelectItem value="ready">Listo para entrega</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
}
