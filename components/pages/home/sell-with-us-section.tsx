import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { imagePlaceholders } from "@/lib/image-placeholders";
import { CheckCircle } from "lucide-react";

const features = [
  "Valuación profesional sin costo",
  "Sesión fotográfica y video profesional",
  "Exposición en los principales portales internacionales",
];

export function SellWithUsSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Card className="relative overflow-hidden rounded-[40px] border-border/60 bg-card shadow-[0_24px_80px_-48px_rgba(79,86,60,0.35)]">
          <CardContent className="flex flex-col-reverse items-center gap-12 p-12 pt-12 md:flex-row md:p-20 md:pt-20">
          <div className="relative z-10 w-full md:w-3/5">
            <h2 className="text-3xl font-semibold mb-6">
              ¿Quieres vender tu propiedad al mejor precio?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              Nuestro equipo de expertos utiliza las herramientas de marketing más avanzadas para
              conectar tu inmueble con compradores calificados a nivel global.
            </p>
            <ul className="space-y-4 mb-10">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="font-medium">{item}</span>
                </li>
                ))}
              </ul>
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
