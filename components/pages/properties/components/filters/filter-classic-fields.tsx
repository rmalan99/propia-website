"use client";

import { MapPinned } from "lucide-react";

import { ControlledInput, ControlledSelect } from "@/components/form";
import {
  operationOptions,
  propertyTypeOptions,
} from "@/components/mocks/properties";

export function ClassicFilterFields() {
  return (
    <>
      <ControlledInput
        name="location"
        label="Ubicación"
        icon={MapPinned}
      />

      <ControlledSelect
        name="operation"
        label="Operación"
        placeholder="Operación"
        options={operationOptions}
      />

      <ControlledSelect
        name="propertyType"
        label="Tipo"
        placeholder="Tipo"
        options={propertyTypeOptions}
      />
    </>
  );
}
