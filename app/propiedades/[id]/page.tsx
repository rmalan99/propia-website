import ScaffoldPage from "@/components/scaffold-page";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params;
  return (
    <ScaffoldPage
      title={`Propiedad ${id}`}
      description="Detalles de la propiedad"
    />
  );
}