"use client";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export type ChipToggleOption = string;

type ChipToggleGroupBaseProps = {
  options: ChipToggleOption[];
  value: ChipToggleOption[];
  onChange: (value: ChipToggleOption) => void;
  label?: string;
  className?: string;
};

export function ChipToggleGroupBase({
  options,
  value,
  onChange,
  label,
  className,
}: ChipToggleGroupBaseProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {label ? (
        <p className="text-sm font-medium text-foreground">{label}</p>
      ) : null}
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const active = value.includes(option);

          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
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
              <span className="text-sm">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}