import { Container } from "@/components/layout/container";
import ScaffoldPage from "@/components/scaffold/scaffold-page";

export default function Page() {
  return (
    <Container>
      <ScaffoldPage
        title="Bienvenido"
        description="Tu plataforma inmobiliaria de confianza"
      />
    </Container>
  );
}
