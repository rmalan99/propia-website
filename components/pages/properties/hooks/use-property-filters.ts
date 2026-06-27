"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useRouter } from "next/navigation";

import type {
  PropertiesFiltersFormValues,
  PropertiesSearchMode,
} from "../models/filter-form.types";

export function usePropertyFilters() {
  const { control, getValues, resetField, setValue } =
    useFormContext<PropertiesFiltersFormValues>();
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isFirstRender = useRef(true);

  const allValues = useWatch({ control });

  const searchMode = allValues.searchMode;
  const selectedStatus = allValues.selectedStatus;
  const selectedAmenities = allValues.selectedAmenities;
  const location = allValues.location;
  const operation = allValues.operation;
  const propertyType = allValues.propertyType;
  const aiQuery = allValues.aiQuery;
  const view = allValues.view;

  const activeFilters = useMemo(
    (): string[] =>
      searchMode === "ai"
        ? [aiQuery].filter((f): f is string => Boolean(f))
        : [location, operation, propertyType].filter((f): f is string => Boolean(f)),
    [aiQuery, location, operation, propertyType, searchMode],
  );

  const setSearchMode = useCallback(
    (mode: PropertiesSearchMode) => {
      setValue("searchMode", mode, { shouldDirty: true });
    },
    [setValue],
  );

  const setAiQuery = useCallback(
    (query: string) => {
      setValue("aiQuery", query, { shouldDirty: true, shouldTouch: true });
    },
    [setValue],
  );

  const setStatus = useCallback(
    (status: string) => {
      setValue("selectedStatus", status, { shouldDirty: true });
    },
    [setValue],
  );

  const toggleAmenity = useCallback(
    (amenity: string) => {
      const current = getValues("selectedAmenities");
      const next = current.includes(amenity)
        ? current.filter((item) => item !== amenity)
        : [...current, amenity];
      setValue("selectedAmenities", next, { shouldDirty: true });
    },
    [getValues, setValue],
  );

  const resetAdvancedFilters = useCallback(() => {
    resetField("priceRange");
    resetField("selectedStatus");
    resetField("selectedAmenities");
  }, [resetField]);

  const setView = useCallback(
    (value: PropertiesFiltersFormValues["view"]) => {
      setValue("view", value, { shouldDirty: true });
    },
    [setValue],
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const params = new URLSearchParams();

      (Object.entries(allValues) as [keyof PropertiesFiltersFormValues, unknown][])
        .filter(([key]) => key !== "view")
        .forEach(([key, value]) => {
          if (value === null || value === undefined || value === "") return;
          if (Array.isArray(value) && value.length === 0) return;
          if (Array.isArray(value)) {
            value.forEach((v) => params.append(key, v));
          } else {
            params.set(key, String(value));
          }
        });

      const searchString = params.toString();
      const newUrl = searchString ? `?${searchString}` : window.location.pathname;
      router.push(newUrl, { scroll: false });
    }, 300);
  }, [allValues, router]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    searchMode,
    selectedStatus,
    selectedAmenities,
    location,
    operation,
    propertyType,
    aiQuery,
    view,
    activeFilters,
    setSearchMode,
    setAiQuery,
    setStatus,
    toggleAmenity,
    resetAdvancedFilters,
    setView,
  };
}