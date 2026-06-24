import ScaffoldPage from "@/components/scaffold-page";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function AgenteDetailPage({ params }: Props) {
  const { id } = await params;
  return (
    <ScaffoldPage
      title={`Agente ${id}`}
      description="Perfil del agente"
    />
  );
}