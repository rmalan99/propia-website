import Image from "next/image";
import { MapPin, Search } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[700px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero-villa.webp"
          alt="Luxury villa"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
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
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-full max-w-4xl">
          <div className="flex flex-wrap gap-4 mb-6 border-b border-border/30 pb-4">
            <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold">
              Comprar
            </button>
            <button className="px-6 py-2 rounded-full text-muted-foreground hover:bg-accent transition-colors">
              Alquilar
            </button>
            <button className="px-6 py-2 rounded-full text-muted-foreground hover:bg-accent transition-colors">
              Proyectos
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                className="w-full pl-10 pr-4 py-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Ubicación, ciudad o zona..."
                type="text"
              />
            </div>
            <div className="md:col-span-4 grid grid-cols-2 gap-2">
              <select className="py-4 px-4 rounded-xl border border-input bg-background text-foreground outline-none">
                <option>Tipo Propiedad</option>
                <option>Apartamento</option>
                <option>Casa</option>
              </select>
              <select className="py-4 px-4 rounded-xl border border-input bg-background text-foreground outline-none">
                <option>Precio Máx.</option>
                <option>$500k</option>
                <option>$1M+</option>
              </select>
            </div>
            <div className="md:col-span-3">
              <button className="w-full h-full bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                <Search className="h-5 w-5" />
                Buscar propiedades
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
