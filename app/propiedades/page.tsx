"use client";

import { Container } from "@/components/layout/container";
import {
  FilterProperties,
  useProperties,
  usePropertyFilters,
  PropertiesGrid,
  PropertiesHeader,
  PropertiesMap,
} from "@/components/pages/properties";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useFormContext, useWatch } from "react-hook-form";
import type { PropertiesFiltersFormValues } from "@/components/pages/properties/models/filter-form.types";
import type { SortOption } from "@/components/pages/properties/hooks/use-properties";

function PropertiesContent() {
  const { control } = useFormContext<PropertiesFiltersFormValues>();
  const { activeFilters } = usePropertyFilters();

  const view = useWatch({ control, name: "view" }) ?? "grid";
  const sortBy = (useWatch({ control, name: "sortBy" }) || "recomendadas") as SortOption;

  const { properties, totalCount } = useProperties({
    location: activeFilters[0] || undefined,
    operation: activeFilters[1] || undefined,
    sortBy,
  });

  return (
    <Tabs value={view} className="space-y-6">
      <PropertiesHeader
        totalCount={totalCount}
        activeFilters={activeFilters}
      />

      <TabsContent value="grid" className="mt-0">
        <PropertiesGrid properties={properties} />
      </TabsContent>

      <TabsContent value="map" className="mt-0">
        <PropertiesMap properties={properties} />
      </TabsContent>
    </Tabs>
  );
}

export default function PropertiesPage() {
  return (
    <main className="py-10 md:py-6">
      <Container className="space-y-8 md:space-y-10">
        <FilterProperties />

        <section className="space-y-6">
          <PropertiesContent />
        </section>
      </Container>
    </main>
  );
}
