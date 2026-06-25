import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { imagePlaceholders } from "@/lib/image-placeholders";
import { ChevronRight } from "lucide-react";

const articles = [
  {
    image: "/images/home/blog-inversion.avif",
    placeholder: imagePlaceholders["blog-inversion"],
    category: "Inversión",
    title: "5 Razones para invertir en Punta Cana este 2024",
    desc: "Analizamos el crecimiento turístico y las nuevas infraestructuras que impulsan el mercado...",
  },
  {
    image: "/images/home/blog-legal.avif",
    placeholder: imagePlaceholders["blog-legal"],
    category: "Legal",
    title: "Guía completa para extranjeros comprando en RD",
    desc: "Todo lo que necesitas saber sobre la Ley de Confotur y beneficios fiscales para inversores...",
  },
  {
    image: "/images/home/blog-diseno.avif",
    placeholder: imagePlaceholders["blog-diseno"],
    category: "Diseño",
    title: "Tendencias de arquitectura sostenible en el Caribe",
    desc: "Exploramos cómo los nuevos proyectos integran materiales naturales y eficiencia energética...",
  },
];

type Article = (typeof articles)[number];

export function BlogSection() {
  return (
    <section className="min-h-[90vh] flex items-center py-16 bg-background">
      <Container>
        <h2 className="text-3xl font-semibold text-center mb-16">
          Consejos y Tendencias del Mercado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article: Article, index) => (
            <Card key={index} className="group overflow-hidden rounded-2xl border-border/50 bg-background">
              <div className="h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={224}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholder="blur"
                  blurDataURL={article.placeholder}
                  loading="lazy"
                />
              </div>
              <CardContent className="p-8 pt-8">
                <Badge variant="secondary" className="mb-4 rounded-full px-3 py-1 text-[10px] uppercase tracking-wide">
                  {article.category}
                </Badge>
                <h3 className="text-xl font-semibold mb-4">{article.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{article.desc}</p>
                <Button asChild variant="link" className="h-auto p-0 font-bold text-primary">
                  <a href="#" className="flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer más <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
