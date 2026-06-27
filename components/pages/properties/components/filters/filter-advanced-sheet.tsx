"use client";

import { ListFilter } from "lucide-react";

import {
  ControlledSelect,
  ControlledChipToggleGroup,
  ControlledChipGroup,
} from "@/components/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  priceRangeOptions,
  propertyAmenityOptions,
  propertyStatusOptions,
} from "@/components/mocks/properties";
import { usePropertyFilters } from "../../hooks/use-property-filters";

export function PropertiesAdvancedFiltersSheet() {
  const { resetAdvancedFilters } = usePropertyFilters();

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
          <ControlledSelect
            name="priceRange"
            label="Rango de precio"
            placeholder="Precio"
            options={priceRangeOptions}
          />

          <ControlledChipGroup
            options={propertyStatusOptions}
            name="selectedStatus"
            label="Estado del inmueble"
          />

          <ControlledChipToggleGroup
            options={propertyAmenityOptions}
            name="selectedAmenities"
            label="Amenidades"
          />
        </div>

        <SheetFooter className="mt-8 gap-3 sm:justify-between">
          <Button type="button" variant="ghost" onClick={resetAdvancedFilters}>
            Restablecer
          </Button>
          <Button type="button">Aplicar filtros</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
