import { Container } from "@/components/layout/container";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const articles = [
  {
    image: "/images/home/blog-inversion.webp",
    category: "Inversión",
    title: "5 Razones para invertir en Punta Cana este 2024",
    desc: "Analizamos el crecimiento turístico y las nuevas infraestructuras que impulsan el mercado...",
  },
  {
    image: "/images/home/blog-legal.webp",
    category: "Legal",
    title: "Guía completa para extranjeros comprando en RD",
    desc: "Todo lo que necesitas saber sobre la Ley de Confotur y beneficios fiscales para inversores...",
  },
  {
    image: "/images/home/blog-diseno.webp",
    category: "Diseño",
    title: "Tendencias de arquitectura sostenible en el Caribe",
    desc: "Exploramos cómo los nuevos proyectos integran materiales naturales y eficiencia energética...",
  },
];

export function BlogSection() {
  return (
    <section className="py-16 bg-accent">
      <Container>
        <h2 className="text-3xl font-semibold text-center mb-16">
          Consejos y Tendencias del Mercado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-background rounded-2xl overflow-hidden group border border-border/50"
            >
              <div className="h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={224}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <span className="text-secondary text-xs font-bold uppercase mb-4 block">
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold mb-4">{article.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{article.desc}</p>
                <a
                  href="#"
                  className="text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Leer más <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
