import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { imagePlaceholders } from "@/lib/image-placeholders";

export function NewProjectsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <span className="text-secondary font-semibold tracking-[0.3em] text-xs uppercase mb-4 block">
              Oportunidades de Inversión
            </span>
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
              Nuevos <span className="italic font-light opacity-80">Proyectos</span> en
              Construcción
            </h2>
            <p className="text-white/70 mb-8 max-w-sm leading-relaxed">
              Descubre desarrollos exclusivos en preventa con facilidades de pago y la mayor
              plusvalía del mercado dominicano.
            </p>
            <div className="flex items-center gap-6">
              <div className="pl-6 border-l-2 border-secondary/50 py-2">
                <p className="text-4xl font-bold text-secondary">12+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/60">
                  Proyectos con respaldo
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <Card className="group relative rounded-3xl border-white/10 bg-white/5 p-4 text-primary-foreground backdrop-blur-sm">
              <CardContent className="p-0">
              <div className="relative h-[250px] md:h-[400px] overflow-hidden rounded-2xl mb-6">
                <Image
                  src="/images/home/proyecto-legacy-tower.avif"
                  alt="The Legacy Tower"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={imagePlaceholders["proyecto-legacy-tower"]}
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-semibold">The Legacy Tower</h3>
                  <p className="text-white/60">Piantini, Santo Domingo</p>
                </div>
                <Button type="button" variant="secondary" className="rounded-xl px-6 py-3 font-bold text-primary hover:bg-white/90">
                  Ver proyecto
                </Button>
              </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
