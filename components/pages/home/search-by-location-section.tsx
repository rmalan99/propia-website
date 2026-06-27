import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { imagePlaceholders } from "@/lib/image-placeholders";

const locations = [
  {
    image: "/images/home/zona-punta-cana.avif",
    placeholder: imagePlaceholders["zona-punta-cana"],
    title: "Punta Cana",
    desc: "Playas paradisíacas y alta rentabilidad.",
  },
  {
    image: "/images/home/zona-santo-domingo.avif",
    placeholder: imagePlaceholders["zona-santo-domingo"],
    title: "Santo Domingo",
    desc: "El centro cosmopolita del Caribe.",
  },
  {
    image: "/images/home/zona-las-terrenas.avif",
    placeholder: imagePlaceholders["zona-las-terrenas"],
    title: "Las Terrenas",
    desc: "Naturaleza y exclusividad en Samaná.",
  },
  {
    image: "/images/home/zona-la-romana.avif",
    placeholder: imagePlaceholders["zona-la-romana"],
    title: "La Romana",
    desc: "Residencias de lujo y campos de golf.",
  },
];

export function SearchByLocationSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2 className="text-3xl font-semibold text-center mb-12">
          Explora las mejores zonas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <Card key={index} className="group relative h-56 md:h-96 overflow-hidden rounded-2xl border-0">
              <Image
                src={location.image}
                alt={location.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                quality={85}
                sizes="(max-width: 768px) 100vw, 25vw"
                placeholder="blur"
                blurDataURL={location.placeholder}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <CardContent className="absolute bottom-0 left-0 w-full p-4 md:p-8 pt-4 md:pt-8">
                <h3 className="text-white text-lg md:text-xl font-semibold mb-1 md:mb-2">
                  {location.title}
                </h3>
                <p className="text-white/80 mb-2 md:mb-4 text-xs md:text-sm">{location.desc}</p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="border-white/50 bg-white/20 text-white backdrop-blur-md hover:bg-white/35 hover:text-white"
                >
                  Explorar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
