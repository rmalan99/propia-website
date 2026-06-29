"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { imagePlaceholders } from "@/lib/image-placeholders";

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
  {
    image: "/images/home/blog-inversion.avif",
    placeholder: imagePlaceholders["blog-inversion"],
    category: "Inversión",
    title: "El futuro del real estate en Santo Domingo",
    desc: "Las zonas con mayor potencial de plusvalía en la capital dominicana...",
  },
  {
    image: "/images/home/blog-legal.avif",
    placeholder: imagePlaceholders["blog-legal"],
    category: "Legal",
    title: "Cómo evitar errores al comprar sobre plano",
    desc: "Checklist esencial antes de firmar cualquier contrato de preventa...",
  },
];

type Article = (typeof articles)[number];

export function BlogSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-16">
          <h2 className="text-3xl font-semibold">
            Consejos y Tendencias del Mercado
          </h2>
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border"
              onClick={scrollPrev}
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border"
              onClick={scrollNext}
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {articles.map((article: Article, index) => (
              <div
                key={index}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_33%] lg:flex-[0_0_25%] min-w-0"
              >
                <div className="px-2">
                  <Card className="group overflow-hidden rounded-2xl border-border/50 bg-background h-full">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        quality={85}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        placeholder="blur"
                        blurDataURL={article.placeholder}
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6 pt-6">
                      <Badge variant="secondary" className="mb-3 rounded-full px-3 py-1 text-[10px] uppercase tracking-wide">
                        {article.category}
                      </Badge>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.desc}</p>
                      <Button asChild variant="link" className="h-auto p-0 font-bold text-primary">
                        <a href="#" className="flex items-center gap-1 group-hover:gap-2 transition-all">
                          Leer más <ChevronRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex md:hidden justify-center gap-2 mt-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border"
            onClick={scrollPrev}
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border"
            onClick={scrollNext}
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
