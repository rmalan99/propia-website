"use client";

import { cn } from "@/lib/utils";

export type ChipOption = string;

type ChipGroupBaseProps = {
  options: ChipOption[];
  value: ChipOption | null;
  onChange: (value: ChipOption) => void;
  label?: string;
  className?: string;
};

export function ChipGroupBase({
  options,
  value,
  onChange,
  label,
  className,
}: ChipGroupBaseProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {label ? (
        <p className="text-sm font-medium text-foreground">{label}</p>
      ) : null}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = value === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
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
  );
}