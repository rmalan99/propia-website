import Image from "next/image";
import { MapPin, Bed, Bath, Maximize, Heart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Property } from "./mocks/properties";


type PropertyCardProps = {
  property: Property;
  priority?: boolean;
};

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  return (
    <Card className="group overflow-hidden border-border transition-shadow hover:shadow-xl">
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
          priority={priority}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant="secondary" className="rounded px-3 py-1 text-[10px] uppercase">
            {property.badge}
          </Badge>
          {property.badge2 && (
            <Badge className="rounded px-3 py-1 text-[10px] uppercase">
              {property.badge2}
            </Badge>
          )}
        </div>
        <Button
          variant="secondary"
          size="icon"
          type="button"
          aria-label={`Guardar ${property.title}`}
          className="absolute top-4 right-4 rounded-full bg-white/90 text-primary shadow-sm hover:bg-white"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <p className="text-secondary font-bold text-xl">{property.price}</p>
          <Badge variant="outline" className="rounded px-2 py-0.5 text-[10px] uppercase">
            {property.type}
          </Badge>
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
          <Button asChild variant="link" className="h-auto p-0 font-bold text-primary">
            <a href="#">Ver detalle</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
