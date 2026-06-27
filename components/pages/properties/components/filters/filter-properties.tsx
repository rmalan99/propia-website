"use client";

import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  AiFilterForm,
  ClassicFilterFields,
  PropertiesAdvancedFiltersSheet,
} from "../../index";
import type { PropertiesSearchMode } from "../../models/filter-form.types";
import { usePropertyFilters } from "../../hooks/use-property-filters";

const FilterProperties = () => {
  const { searchMode, setSearchMode } = usePropertyFilters();

  return (
    <section className="sticky top-3 z-20 rounded-3xl border border-border bg-card/95 p-5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/90 md:p-6">
      <div className="space-y-5">
        {searchMode === "ai" && (
          <div className="space-y-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
              <SearchModeToggle />
            </div>
            <AiFilterForm />
          </div>
        )}

        {searchMode === "classic" && (
          <div className="animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2 grid gap-3 duration-300 xl:grid-cols-[minmax(0,1.45fr)_minmax(0,0.8fr)_minmax(0,0.8fr)_auto] xl:items-end">
            <ClassicFilterFields />

            <div className="flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-end">
              <PropertiesAdvancedFiltersSheet />
              <SearchModeToggle
                className="inline-flex w-full rounded-full border border-border/70 bg-background p-1 shadow-sm transition-all duration-300 xl:w-auto"
                mode={searchMode}
                onModeChange={setSearchMode}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterProperties;

function SearchModeToggle({
  mode,
  onModeChange,
  className,
}: {
  mode?: PropertiesSearchMode;
  onModeChange?: (mode: PropertiesSearchMode) => void;
  className?: string;
}) {
  const { searchMode, setSearchMode } = usePropertyFilters();
  const currentMode = mode ?? searchMode;
  const handleModeChange = onModeChange ?? setSearchMode;

  return (
    <div
      className={
        className ??
        "inline-flex w-full rounded-full border border-border/70 bg-background p-1 shadow-sm transition-all duration-300 md:w-auto"
      }
    >
      <Button
        type="button"
        size="sm"
        variant={currentMode === "ai" ? "default" : "ghost"}
        className="flex-1 rounded-full px-4 md:flex-none"
        onClick={() => handleModeChange("ai")}
      >
        <Sparkles className="h-4 w-4" />
        Modo IA
      </Button>
      <Button
        type="button"
        size="sm"
        variant={currentMode === "classic" ? "default" : "ghost"}
        className="flex-1 rounded-full px-4 md:flex-none"
        onClick={() => handleModeChange("classic")}
      >
        Clásico
      </Button>
    </div>
  );
}