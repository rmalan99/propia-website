export function FinalCtaSection() {
  return (
    <section className="py-24 bg-accent">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          ¿Listo para encontrar tu próxima propiedad?
        </h2>
        <p className="text-muted-foreground mb-12">
          Nuestro equipo está listo para ayudarte a dar el siguiente paso en tu inversión
          inmobiliaria.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-primary text-primary-foreground px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
            Buscar propiedades
          </button>
          <button className="border-2 border-primary text-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-accent transition-colors">
            Contactar agente
          </button>
        </div>
      </div>
    </section>
  );
}
