import { Container } from "@/components/layout/container";
import Image from "next/image";
import { imagePlaceholders } from "@/lib/image-placeholders";
import { MapPin, Bed, Bath, Maximize, Heart, ArrowRight } from "lucide-react";

const properties = [
  {
    image: "/images/home/propiedad-1-penthouse.avif",
    placeholder: imagePlaceholders["propiedad-1-penthouse"],
    price: "$1,250,000",
    badge: "Destacada",
    badge2: "Nueva",
    title: "Ocean View Penthouse",
    location: "Punta Cana, RD",
    beds: 3,
    baths: 3.5,
    sqft: "245m²",
    type: "Venta",
  },
  {
    image: "/images/home/propiedad-2-villa.avif",
    placeholder: imagePlaceholders["propiedad-2-villa"],
    price: "$840,000",
    badge: "Exclusiva",
    title: "Villa Serena Estates",
    location: "Santo Domingo, RD",
    beds: 4,
    baths: 4,
    sqft: "410m²",
    type: "Venta",
  },
  {
    image: "/images/home/propiedad-3-apartamento.avif",
    placeholder: imagePlaceholders["propiedad-3-apartamento"],
    price: "$2,500 /mo",
    badge: "Nueva",
    title: "Luxury Sky Apartment",
    location: "Piantini, SD",
    beds: 2,
    baths: 2,
    sqft: "120m²",
    type: "Alquiler",
  },
];

export function FeaturedPropertiesSection() {
  return (
    <section className="py-16 bg-accent">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-secondary font-semibold tracking-wider text-xs uppercase">
              Selección Exclusiva
            </span>
            <h2 className="text-3xl font-semibold mt-2">Propiedades Destacadas</h2>
          </div>
          <a
            href="#"
            className="text-primary font-bold flex items-center gap-2 hover:underline"
          >
            Ver todas las propiedades <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-background rounded-xl overflow-hidden border border-border transition-all hover:shadow-xl group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholder="blur"
                  blurDataURL={property.placeholder}
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded uppercase">
                    {property.badge}
                  </span>
                  {property.badge2 && (
                    <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded uppercase">
                      {property.badge2}
                    </span>
                  )}
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-white transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-secondary font-bold text-xl">{property.price}</p>
                  <span className="bg-accent text-foreground px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                    {property.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{property.title}</h3>
                <p className="text-muted-foreground flex items-center gap-1 mb-4">
                  <MapPin className="h-4 w-4" /> {property.location}
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="flex gap-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <Bed className="h-4 w-4" /> {property.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="h-4 w-4" /> {property.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize className="h-4 w-4" /> {property.sqft}
                    </span>
                  </div>
                  <a href="#" className="text-primary font-bold hover:underline">
                    Ver detalle
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
