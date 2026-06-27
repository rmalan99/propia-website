import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { imagePlaceholders } from "@/lib/image-placeholders";

const steps = [
  {
    image: "propiedad-1-penthouse",
    src: "/images/home/propiedad-1-penthouse.webp",
    alt: "Luxury penthouse interior with modern design",
    title: "Tasación Exacta",
    label: "Tasación",
  },
  {
    image: "proyecto-legacy-tower",
    src: "/images/home/proyecto-legacy-tower.webp",
    alt: "Modern real estate development under construction",
    title: "Negociación",
    label: "Negociación",
  },
  {
    image: "propiedad-2-villa",
    src: "/images/home/propiedad-2-villa.webp",
    alt: "Beautiful villa with pool and tropical garden",
    title: "Cierre Seguro",
    label: "Venta",
  },
];

const trustPoints = [
  "Tasación con datos reales del mercado",
  "Marketing profesional y compradores calificados",
  "Negociación y cierre con respaldo legal",
];

export function SellWithUsSection() {
  const [valuation, negotiation, closing] = steps;

  return (
    <section className="py-12 md:py-16">
      <Container>
        <Card className="relative overflow-hidden rounded-[36px] border-border/60 bg-card shadow-[0_24px_80px_-48px_rgba(79,86,60,0.35)]">
          <CardContent className="grid gap-8 p-5 sm:p-7 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:p-12">
            <div className="relative p-3 sm:p-5 lg:min-h-[520px] lg:p-8">
              <div className="relative flex h-full flex-col justify-between gap-10">
                <div>
                  <span className="mb-5 inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Proceso de venta
                  </span>
                  <h2 className="max-w-md text-4xl font-semibold leading-[0.95] tracking-tight text-foreground md:text-5xl">
                    Vende tu propiedad con un equipo que sabe negociar.
                  </h2>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                    Convertimos tu inmueble en una oportunidad clara: tasación precisa,
                    presentación premium, compradores calificados y cierre seguro.
                  </p>
                </div>

                <div>
                  <ul className="mb-7 space-y-3 text-sm text-muted-foreground">
                    {trustPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    type="button"
                    size="lg"
                    className="w-full rounded-full px-6 font-bold sm:w-auto"
                  >
                    Quiero vender mi propiedad
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:grid-rows-[250px_250px] lg:min-h-[520px]">
              <ProcessImageCard step={valuation} />
              <ProcessImageCard
                step={negotiation}
                className="min-h-[340px] md:row-span-2 md:min-h-0"
                titleClassName="text-2xl md:text-3xl"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
              <ProcessImageCard step={closing} />
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}

type ProcessImageCardProps = {
  step: (typeof steps)[number];
  className?: string;
  compact?: boolean;
  titleClassName?: string;
  sizes?: string;
};

function ProcessImageCard({
  step,
  className,
  compact = false,
  titleClassName = "text-xl",
  sizes = "(max-width: 768px) 100vw, 260px",
}: ProcessImageCardProps) {
  return (
    <div
      className={`group relative min-h-[220px] overflow-hidden rounded-[28px] bg-muted shadow-[0_18px_40px_-28px_rgba(0,0,0,0.55)] ${className ?? ""}`}
    >
      <Image
        src={step.src}
        alt={step.alt}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        quality={82}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={imagePlaceholders[step.image]}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/22 to-black/5" />
      <div className={`absolute inset-x-0 bottom-0 text-white ${compact ? "p-4" : "p-5 md:p-6"}`}>
        <span className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur">
          {step.label}
        </span>
        <h3 className={`${titleClassName} font-semibold leading-tight`}>{step.title}</h3>
      </div>
    </div>
  );
}
