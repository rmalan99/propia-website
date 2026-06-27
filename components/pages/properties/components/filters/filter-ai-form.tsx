"use client";

import { Search, Sparkles } from "lucide-react";

import { ControlledInput } from "@/components/form";
import { Button } from "@/components/ui/button";

import { aiSuggestions } from "@/components/mocks/properties";
import { usePropertyFilters } from "../../hooks/use-property-filters";

export function AiFilterForm() {
  const { setAiQuery } = usePropertyFilters();

  return (
    <div className="animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2 space-y-4 rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-4 duration-300 md:p-5">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <ControlledInput
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
              onClick={() => setAiQuery(suggestion)}
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
