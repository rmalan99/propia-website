"use client";

import { notFound } from "next/navigation";
import { getPropertyById } from "@/components/mocks/property-detail";
import { PropertyDetailClient } from "@/components/pages/property-detail/property-detail-client";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) {
    notFound();
  }

  return <PropertyDetailClient property={property} />;
}
