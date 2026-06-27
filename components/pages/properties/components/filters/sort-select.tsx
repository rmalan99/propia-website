"use client";

import { ControlledSelect } from "@/components/form";
import { sortOptions } from "@/components/mocks/properties";
import { cn } from "@/lib/utils";

interface SortSelectFieldProps {
  name?: "sortBy";
  className?: string;
}

export function SortSelectField({ name = "sortBy", className }: SortSelectFieldProps) {
  return (
    <ControlledSelect
      name={name}
      placeholder="Ordenar"
      options={sortOptions}
      triggerClassName={cn("h-11 min-w-[160px] rounded-xl border-border bg-background px-4 text-sm shadow-none hover:border-primary/30 hover:bg-primary/5", className)}
    />
  );
}
