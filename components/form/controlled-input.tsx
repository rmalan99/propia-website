"use client"

import type { ComponentProps } from "react"
import type { LucideIcon } from "lucide-react"
import type { FieldValues, Path, RegisterOptions } from "react-hook-form"
import { Controller, useFormContext } from "react-hook-form"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type ControlledInputProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>
  label?: string
  description?: string
  icon?: LucideIcon
  rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>
  className?: string
  inputClassName?: string
  inputProps?: Omit<ComponentProps<typeof Input>, "name">
}

export function ControlledInput<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  icon: Icon,
  rules,
  className,
  inputClassName,
  inputProps,
}: ControlledInputProps<TFieldValues>) {
  const { control } = useFormContext<TFieldValues>()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <Field className={className} data-invalid={fieldState.invalid || undefined}>
          {label ? <FieldLabel htmlFor={field.name}>{label}</FieldLabel> : null}
          <div className="relative">
            {Icon ? (
              <Icon className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            ) : null}
            <Input
              {...inputProps}
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              value={typeof field.value === "string" ? field.value : field.value ?? ""}
              className={cn(Icon && "pl-11", inputClassName, inputProps?.className)}
            />
          </div>
          {description ? <FieldDescription>{description}</FieldDescription> : null}
          {fieldState.invalid ? <FieldError errors={[fieldState.error]} /> : null}
        </Field>
      )}
    />
  )
}
