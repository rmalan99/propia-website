import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { imagePlaceholders } from "@/lib/image-placeholders";
import { Search, Camera, Globe, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Valuación Exacta",
    description: "Análisis profundo del mercado local y tendencias actuales para fijar el precio óptimo.",
  },
  {
    icon: Camera,
    title: "Producción Profesional",
    description: "Sesión fotográfica, video y tour virtual para destacar cada espacio.",
  },
  {
    icon: Globe,
    title: "Exposición Global",
    description: "Tu propiedad en +50 portales internacionales y red de compradores calificados.",
  },
  {
    icon: Handshake,
    title: "Cierre Seguro",
    description: "Asesoría legal y negociación experta hasta que tengas las llaves en mano.",
  },
];

export function SellWithUsSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Card className="relative overflow-hidden rounded-[40px] border-border/60 bg-card shadow-[0_24px_80px_-48px_rgba(79,86,60,0.35)]">
          <CardContent className="flex flex-col-reverse items-center gap-12 p-12 pt-12 md:flex-row md:p-20 md:pt-20">
          <div className="relative z-10 w-full md:w-3/5">
            <h2 className="text-3xl font-semibold mb-2">
              ¿Quieres vender tu propiedad al mejor precio?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              Te acompañamos en cada paso del proceso para que vendas tranquilo y al mejor valor de mercado.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-accent/5 rounded-2xl transition-opacity group-hover:bg-accent/10" />
                  <div className="relative flex items-start gap-3 p-4 rounded-2xl">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Paso {index + 1}
                      </span>
                      <h3 className="font-semibold text-foreground leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-snug">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button type="button" size="lg" className="w-full md:w-auto rounded-xl px-6 md:px-8 font-bold hover:shadow-lg">
              Quiero vender mi propiedad
            </Button>
          </div>
          <div className="md:w-2/5">
            <div className="bg-background p-2 rounded-2xl shadow-xl rotate-3">
              <Image
                src="/images/home/vender-agente.avif"
                alt="Real estate agent reviewing a property listing with a for sale sign"
                width={400}
                height={300}
                className="rounded-xl"
                quality={85}
                sizes="(max-width: 768px) 100vw, 400px"
                placeholder="blur"
                blurDataURL={imagePlaceholders["vender-agente"]}
                loading="lazy"
              />
            </div>
          </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
