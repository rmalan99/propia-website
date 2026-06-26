"use client"

import type { LucideIcon } from "lucide-react"
import type { FieldValues, Path, RegisterOptions } from "react-hook-form"
import { Controller, useFormContext } from "react-hook-form"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export type ControlledSelectOption = {
  label: string
  value: string
}

type ControlledSelectProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>
  label?: string
  description?: string
  placeholder: string
  options: ControlledSelectOption[]
  icon?: LucideIcon
  rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>
  className?: string
  triggerClassName?: string
}

export function ControlledSelect<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  placeholder,
  options,
  icon: Icon,
  rules,
  className,
  triggerClassName,
}: ControlledSelectProps<TFieldValues>) {
  const { control } = useFormContext<TFieldValues>()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <Field className={className} data-invalid={fieldState.invalid || undefined}>
          {label ? <FieldLabel htmlFor={field.name}>{label}</FieldLabel> : null}
          <Select
            name={field.name}
            value={typeof field.value === "string" ? field.value : ""}
            onValueChange={(value) => {
              field.onChange(value)
              field.onBlur()
            }}
          >
            <div className="relative">
              {Icon ? (
                <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-muted-foreground">
                  <Icon className="h-4 w-4" />
                </span>
              ) : null}
              <SelectTrigger
                id={field.name}
                aria-invalid={fieldState.invalid}
                className={cn(
                  Icon && "pl-11",
                  fieldState.error && "border-destructive focus:ring-destructive",
                  triggerClassName
                )}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </div>

            <SelectContent>
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {description ? <FieldDescription>{description}</FieldDescription> : null}
          {fieldState.invalid ? <FieldError errors={[fieldState.error]} /> : null}
        </Field>
      )}
    />
  )
}
