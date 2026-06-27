"use client";

import type { FieldValues, Path } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";

import { ChipToggleGroupBase, type ChipToggleOption } from "./chip-toggle-group";

export { ChipToggleGroupBase, type ChipToggleOption };

type ControlledChipToggleGroupProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  options: ChipToggleOption[];
  label?: string;
};

export function ControlledChipToggleGroup<
  TFieldValues extends FieldValues,
>({
  name,
  label,
  options,
}: ControlledChipToggleGroupProps<TFieldValues>) {
  const { control } = useFormContext<TFieldValues>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid || undefined}>
          {label ? <FieldLabel htmlFor={field.name}>{label}</FieldLabel> : null}
          <ChipToggleGroupBase
            options={options}
            value={field.value ?? []}
            onChange={(option) => {
              const current = (field.value ?? []) as ChipToggleOption[];
              field.onChange(
                current.includes(option)
                  ? current.filter((v) => v !== option)
                  : [...current, option],
              );
            }}
          />
          {fieldState.invalid ? (
            <FieldError errors={[fieldState.error]} />
          ) : null}
        </Field>
      )}
    />
  );
}