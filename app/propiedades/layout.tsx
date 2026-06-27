"use client";

import { FormProvider, useForm } from "react-hook-form";

import {
  defaultPropertiesFiltersFormValues,
  type PropertiesFiltersFormValues,
} from "@/components/pages/properties";

export default function PropiedadesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const form = useForm<PropertiesFiltersFormValues>({
    defaultValues: defaultPropertiesFiltersFormValues,
  });

  return <FormProvider {...form}>{children}</FormProvider>;
}
