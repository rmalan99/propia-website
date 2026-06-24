import ScaffoldPage from "@/components/scaffold/scaffold-page";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function AgenciaDetailPage({ params }: Props) {
  const { id } = await params;
  return (
    <ScaffoldPage
      title={`Agencia ${id}`}
      description="Detalles de la agencia"
    />
  );
}