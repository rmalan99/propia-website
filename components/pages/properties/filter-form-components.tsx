"use client";

import { Check, ListFilter, MapPinned, Search, Sparkles } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { ControlledInput, ControlledSelect } from "@/components/form";
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
import { cn } from "@/lib/utils";

import {
  aiSuggestions,
  amenityOptions,
  defaultPropertiesFiltersFormValues,
  statusOptions,
  type PropertiesFiltersFormValues,
} from "./filter-form.types";

type SelectFieldName = "operation" | "propertyType" | "priceRange" | "sortBy";

export function FilterSelectField({
  name,
  label,
  placeholder,
  items,
  triggerClassName,
}: {
  name: SelectFieldName;
  label?: string;
  placeholder: string;
  items: string[];
  triggerClassName?: string;
}) {
  return (
    <ControlledSelect<PropertiesFiltersFormValues>
      name={name}
      label={label}
      placeholder={placeholder}
      options={items.map((item) => ({ label: item, value: item }))}
      triggerClassName={cn(
        "h-11 rounded-xl border-border bg-background text-sm shadow-none",
        triggerClassName,
      )}
    />
  );
}

export function ClassicFilterFields() {
  return (
    <>
      <ControlledInput<PropertiesFiltersFormValues>
        name="location"
        label="Ubicación"
        icon={MapPinned}
        inputClassName="h-11 rounded-xl border-border bg-background transition-all duration-300 focus-visible:border-primary/30"
      />

      <FilterSelectField
        name="operation"
        label="Operación"
        placeholder="Operación"
        items={["Venta", "Alquiler"]}
      />

      <FilterSelectField
        name="propertyType"
        label="Tipo"
        placeholder="Tipo"
        items={["Apartamento", "Villa", "Penthouse", "Proyecto"]}
      />
    </>
  );
}

export function PropertiesAdvancedFiltersSheet() {
  const { getValues, resetField, setValue, watch } =
    useFormContext<PropertiesFiltersFormValues>();
  const selectedStatus = watch("selectedStatus");
  const selectedAmenities = watch("selectedAmenities");

  function toggleAmenity(amenity: string) {
    const currentAmenities = getValues("selectedAmenities");
    const nextAmenities = currentAmenities.includes(amenity)
      ? currentAmenities.filter((item) => item !== amenity)
      : [...currentAmenities, amenity];

    setValue("selectedAmenities", nextAmenities, { shouldDirty: true });
  }

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
          <FilterSelectField
            name="priceRange"
            label="Rango de precio"
            placeholder="Precio"
            items={[
              "Todos los precios",
              "US$ 100k - 300k",
              "US$ 300k - 700k",
              "US$ 700k+",
            ]}
          />

          <div className="space-y-4">
            <p className="text-sm font-medium text-foreground">Estado del inmueble</p>
            <div className="flex flex-wrap gap-2">
              {statusOptions.map((option) => {
                const active = selectedStatus === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      setValue("selectedStatus", option, { shouldDirty: true })
                    }
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
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              resetField("priceRange");
              resetField("selectedStatus");
              resetField("selectedAmenities");
            }}
          >
            Restablecer
          </Button>
          <Button type="button">Aplicar filtros</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function AiFilterForm() {
  const { setValue } = useFormContext<PropertiesFiltersFormValues>();

  return (
    <div className="animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2 space-y-4 rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-4 duration-300 md:p-5">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <ControlledInput<PropertiesFiltersFormValues>
          name="aiQuery"
          icon={Sparkles}
          className="space-y-0"
          inputClassName="h-14 rounded-2xl border-primary/20 bg-background/90 pl-10 pr-4 text-sm transition-all duration-300 focus-visible:border-primary/40 focus-visible:ring-primary/30 md:text-base"
          inputProps={{
            type: "text",
            placeholder:
              "Ej: Quiero una casa con patio, 3 habitaciones y cerca del centro",
          }}
        />
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
          {aiSuggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() =>
                setValue("aiQuery", suggestion, {
                  shouldDirty: suggestion !== defaultPropertiesFiltersFormValues.aiQuery,
                  shouldTouch: true,
                })
              }
              className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3 text-left text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/5"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
