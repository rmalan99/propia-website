"use client";

import type { FieldValues, Path } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";

import { ChipGroupBase, type ChipOption } from "./chip-group";

export { ChipGroupBase, type ChipOption };

type ControlledChipGroupProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  options: ChipOption[];
  label?: string;
};

export function ControlledChipGroup<TFieldValues extends FieldValues>({
  name,
  label,
  options,
}: ControlledChipGroupProps<TFieldValues>) {
  const { control } = useFormContext<TFieldValues>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid || undefined}>
          {label ? <FieldLabel htmlFor={field.name}>{label}</FieldLabel> : null}
          <ChipGroupBase
            options={options}
            value={field.value ?? null}
            onChange={field.onChange}
          />
          {fieldState.invalid ? (
            <FieldError errors={[fieldState.error]} />
          ) : null}
        </Field>
      )}
    />
  );
}