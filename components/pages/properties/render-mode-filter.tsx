"use client";

import { createContext, type ReactNode, useContext } from "react";
import { Sparkles } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";

import { Button } from "@/components/ui/button";

import type {
  PropertiesFiltersFormValues,
  PropertiesSearchMode,
} from "./filter-form.types";

type RenderModeFilterContextValue = {
  mode: PropertiesSearchMode;
  setMode: (mode: PropertiesSearchMode) => void;
};

const RenderModeFilterContext = createContext<
  RenderModeFilterContextValue | undefined
>(undefined);

export function RenderModeFilter({ children }: { children: ReactNode }) {
  const { control, setValue } =
    useFormContext<PropertiesFiltersFormValues>();
  const mode = useWatch({ control, name: "searchMode" });

  return (
    <RenderModeFilterContext.Provider
      value={{
        mode,
        setMode: (nextMode) => {
          setValue("searchMode", nextMode, { shouldDirty: true });
        },
      }}
    >
      {children}
    </RenderModeFilterContext.Provider>
  );
}

function useRenderModeFilter() {
  const context = useContext(RenderModeFilterContext);

  if (!context) {
    throw new Error("RenderModeFilter components must be used inside RenderModeFilter.");
  }

  return context;
}

export function RenderModeFilterToggle({
  className,
}: {
  className?: string;
}) {
  const { mode, setMode } = useRenderModeFilter();

  return (
    <div
      className={className ?? "inline-flex w-full rounded-full border border-border/70 bg-background p-1 shadow-sm transition-all duration-300 md:w-auto"}
    >
      <Button
        type="button"
        size="sm"
        variant={mode === "ai" ? "default" : "ghost"}
        className="flex-1 rounded-full px-4 md:flex-none"
        onClick={() => setMode("ai")}
      >
        <Sparkles className="h-4 w-4" />
        Modo IA
      </Button>
      <Button
        type="button"
        size="sm"
        variant={mode === "classic" ? "default" : "ghost"}
        className="flex-1 rounded-full px-4 md:flex-none"
        onClick={() => setMode("classic")}
      >
        Clásico
      </Button>
    </div>
  );
}

export function RenderModeFilterView({
  mode,
  children,
}: {
  mode: PropertiesSearchMode;
  children: ReactNode;
}) {
  const context = useRenderModeFilter();

  if (context.mode !== mode) {
    return null;
  }

  return <>{children}</>;
}
