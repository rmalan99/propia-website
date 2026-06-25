import Image from "next/image";
import { HeroSearchForm } from "./hero-search-form";
import { imagePlaceholders } from "@/lib/image-placeholders";

export function HeroSection() {
  return (
    <section className="relative h-[700px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero-villa.avif"
          alt="Luxury villa"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={imagePlaceholders["hero-villa"]}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 max-w-3xl">
          Encuentra la propiedad ideal para ti
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl">
          Explora casas, apartamentos, villas y proyectos en las mejores zonas con asesoría experta.
        </p>
        <HeroSearchForm />
      </div>
    </section>
  );
}
