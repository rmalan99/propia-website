"use client";

import { useFormContext } from "react-hook-form";

import { Grid2X2, MapPinned } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SortSelectField } from "@/components/pages/properties/components/filters/sort-select";
import type { PropertiesFiltersFormValues } from "@/components/pages/properties/models/filter-form.types";

interface PropertiesHeaderProps {
  totalCount: number;
  activeFilters: string[];
}

export function PropertiesHeader({ totalCount, activeFilters }: PropertiesHeaderProps) {
  const { setValue } = useFormContext<PropertiesFiltersFormValues>();

  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
            Resultado de búsqueda
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            {totalCount} {totalCount === 1 ? "propiedad" : "propiedades"} destacadas para ti
          </h2>
        </div>

        {activeFilters.length > 0 && (
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
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <TabsList className="h-11 rounded-xl bg-muted/70 p-1">
          <TabsTrigger
            value="grid"
            onClick={() => setValue("view", "grid", { shouldDirty: true })}
            className="gap-2 rounded-lg px-4 data-[state=active]:bg-background"
          >
            <Grid2X2 className="h-4 w-4" />
            Cuadrícula
          </TabsTrigger>
          <TabsTrigger
            value="map"
            onClick={() => setValue("view", "map", { shouldDirty: true })}
            className="gap-2 rounded-lg px-4 data-[state=active]:bg-background"
          >
            <MapPinned className="h-4 w-4" />
            Mapa
          </TabsTrigger>
        </TabsList>

        <SortSelectField />
      </div>
    </div>
  );
}
