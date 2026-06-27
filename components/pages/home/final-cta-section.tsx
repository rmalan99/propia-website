import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          ¿Listo para encontrar tu próxima propiedad?
        </h2>
        <p className="text-primary-foreground/80 mb-12">
          Nuestro equipo está listo para ayudarte a dar el siguiente paso en tu inversión
          inmobiliaria.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button type="button" size="lg" className="rounded-xl bg-accent px-10 text-lg font-bold text-accent-foreground hover:scale-105 hover:bg-accent/90">
            Buscar propiedades
          </Button>
          <Button
            type="button"
            size="lg"
            variant="outline"
            className="rounded-xl border-primary-foreground/70 bg-transparent px-10 text-lg font-bold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            Contactar agente
          </Button>
        </div>
      </div>
    </section>
  );
}
