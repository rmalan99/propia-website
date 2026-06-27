"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Bed,
  Bath,
  Phone,
  Mail,
  Calendar,
  Compass,
  Check,
  Copy,
  ArrowLeft,
  Square,
  Heart,
  Share2,
  Printer,
  MapPin,
  Building2,
} from "lucide-react";
import { PropertyDetail } from "@/components/mocks/property-detail";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { QRCodeSVG } from "qrcode.react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  smart_toy: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="8.5" cy="15" r="1.5" fill="currentColor" />
      <circle cx="15.5" cy="15" r="1.5" fill="currentColor" />
      <path d="M12 3v4M8 7h8" strokeLinecap="round" />
    </svg>
  ),
  pool: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1" strokeLinecap="round"/><path d="M2 17c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1" strokeLinecap="round"/><path d="M2 7c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1" strokeLinecap="round"/><path d="M2 2v8M22 2v8" strokeLinecap="round"/></svg>,
  wine_bar: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 22h8M12 11v11M5 3l7 8 7-8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  directions_car: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 17h14v-5l-2-5H7l-2 5v5z" strokeLinejoin="round"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/><path d="M3 11l2-5h14l2 5" strokeLinejoin="round"/></svg>,
  theaters: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8h20M7 4v4M12 4v4M17 4v4"/></svg>,
  fitness_center: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6.5 6.5h11M6.5 17.5h11M3 10h3v4H3zM18 10h3v4h-3zM6 12h12M6 12v0M18 12v0" strokeLinecap="round"/></svg>,
  waves: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 6c.6.5 1.2 1 2.5 1C9 7 9 5 11.5 5s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1" strokeLinecap="round"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1" strokeLinecap="round"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1" strokeLinecap="round"/></svg>,
  spa: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z"/><path d="M12 6v4M12 14c2-2 4-2 4 0" strokeLinecap="round"/></svg>,
  restaurant: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" strokeLinecap="round"/></svg>,
  security: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

function getIcon(iconName: string) {
  return iconMap[iconName] || (({ className }) => <span className={className}>{iconName}</span>);
}

interface PropertyDetailClientProps {
  property: PropertyDetail;
}

export function PropertyDetailClient({ property }: PropertyDetailClientProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [isShareSheetOpen, setIsShareSheetOpen] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const allImages = [property.images.main, ...property.images.thumbnails];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Immersive Gallery */}
      <section className="w-full mb-12">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row gap-4 h-[60vh] md:h-[80vh]">
            {/* Main Hero Image */}
            <div className="relative flex-[2.5] group overflow-hidden rounded-2xl bg-muted">
              <Image
                src={allImages[currentImageIndex]}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {allImages.length}
              </div>

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={prevImage}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Vertical Thumbnails */}
            <div className="hidden md:flex flex-1 flex-col gap-4">
              {property.images.thumbnails.slice(0, 2).map((thumb, idx) => (
                <div key={idx} className="flex-1 relative group overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={thumb}
                    alt={`Interior view ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
              <div
                className="flex-1 relative group overflow-hidden rounded-xl cursor-pointer bg-muted"
                onClick={() => {}}
              >
                <Image
                  src={property.images.thumbnails[2] || allImages[3] || allImages[0]}
                  alt="More photos"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg font-heading">
                    +{allImages.length - 1} Fotos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <div className="w-full px-4 md:px-10 py-24">
        {/* Header Section (Full Width) */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/30">
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/propiedades" className="hover:text-primary transition-colors">
                Propiedades
              </Link>
              <span className="text-muted-foreground">›</span>
              <Link href="/propiedades" className="hover:text-primary transition-colors">
                {property.location.split(",")[0]}
              </Link>
              <span className="text-muted-foreground">›</span>
              <span className="text-primary font-medium">{property.title}</span>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase">
                {property.badge}
              </span>
              <span className="text-muted-foreground text-sm">MLS# {property.mlsNumber}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl text-primary mb-2 tracking-tight font-heading font-bold">
              {property.title}
            </h1>

            {/* Location */}
            <div className="flex items-center text-muted-foreground text-lg">
              <MapPin className="h-5 w-5 mr-2 text-accent" />
              {property.address}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-accent/10 transition-colors"
              title="Guardar"
              aria-label={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
            >
              <Heart className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
            </button>
            <button
              onClick={() => setIsShareSheetOpen(true)}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-accent/10 transition-colors"
              title="Compartir"
              aria-label="Compartir"
            >
              <Share2 className="h-5 w-5" />
            </button>
            <button
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-accent/10 transition-colors"
              title="Imprimir"
              aria-label="Imprimir"
            >
              <Printer className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
          {/* Key Info Column */}
          <div className="md:col-span-12 lg:col-span-4 grid grid-cols-2 gap-4">
            {/* Price Tile (Prominent) */}
            <div className="col-span-2 bg-primary text-primary-foreground rounded-2xl p-6 flex flex-col justify-center shadow-sm">
              <p className="text-[10px] uppercase tracking-wider font-semibold mb-1 text-primary-foreground opacity-80">
                Rango de Precio
              </p>
              <p className="text-2xl font-bold font-heading text-primary-foreground">
                Desde {property.priceRange.min}
              </p>
              <p className="text-primary-foreground opacity-90">Hasta {property.priceRange.max}</p>
            </div>

            {/* Delivery Date Tile */}
            <div className="col-span-2 bg-card rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-semibold mb-1">
                Fecha de Entrega
              </p>
              <p className="text-2xl font-bold font-heading text-primary">
                {property.deliveryDate}
              </p>
            </div>

            {/* Trust Tile */}
            <div className="col-span-2 bg-muted border border-border/30 rounded-2xl p-6 flex justify-between items-center">
              <div className="flex flex-col gap-3 w-full">
                <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-semibold">Fideicomiso</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold font-heading text-primary">
                      {property.trust.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {property.trust.fiduciary}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-12 lg:col-span-8 bg-card border border-border/30 rounded-2xl p-8">
            <h2 className="text-2xl text-primary mb-4 font-heading font-semibold">
              Acerca de la Propiedad
            </h2>
            <div className="prose prose-lg text-muted-foreground leading-relaxed max-w-none">
              {property.description.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
            <button className="mt-6 text-primary font-bold hover:underline flex items-center gap-1 group">
              Leer Descripción Completa
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Features & Amenities */}
          <div className="md:col-span-12 bg-muted rounded-2xl p-8">
            <h2 className="text-2xl text-primary mb-6 font-heading font-semibold">
              Características y Amenidades
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {property.features.map((feature, idx) => {
                const IconComponent = getIcon(feature.icon);
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-card hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="font-medium text-sm text-foreground text-center">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Location Map */}
          <div className="md:col-span-12 rounded-2xl overflow-hidden relative h-96 group">
            <Image
              src={property.mapImage}
              alt="Map view"
              fill
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
              <div className="bg-card p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-sm">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Compass className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{property.location}</p>
                  <p className="text-sm text-muted-foreground">5 mins to downtown</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mortgage Calculator */}
          <div className="md:col-span-12 bg-muted rounded-2xl p-8">
            <h2 className="text-2xl text-primary mb-6 font-heading font-semibold">
              Calculadora Hipotecaria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] mb-2 text-muted-foreground uppercase tracking-wider font-semibold">
                    Precio de Propiedad (US$)
                  </label>
                  <input
                    type="text"
                    defaultValue={property.priceRange.min.replace("$", "").replace(",", "")}
                    className="w-full border border-border p-3 bg-card rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-[10px] mb-2 text-muted-foreground uppercase tracking-wider font-semibold">
                    Pago Inicial (%)
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <span className="text-sm font-bold text-primary">{downPaymentPercent}%</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] mb-2 text-muted-foreground uppercase tracking-wider font-semibold">
                      Interés (%)
                    </label>
                    <input
                      type="text"
                      defaultValue="6.5"
                      className="w-full border border-border p-3 bg-card rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] mb-2 text-muted-foreground uppercase tracking-wider font-semibold">
                      Plazo (Años)
                    </label>
                    <input
                      type="text"
                      defaultValue="30"
                      className="w-full border border-border p-3 bg-card rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center border-l border-border/30 md:pl-8">
                <p className="text-muted-foreground text-sm mb-2 uppercase tracking-wider font-semibold">
                  Cuota Mensual Estimada
                </p>
                <p className="text-4xl text-primary font-bold font-heading">
                  US$ 42,980
                </p>
                <p className="text-[10px] text-muted-foreground mt-4 text-center max-w-xs">
                  Este cálculo es informativo y no constituye una oferta formal de financiamiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Properties Section */}
      <section className="w-full bg-muted/50 py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl text-primary font-heading">
                Propiedades Similares
              </h2>
              <p className="text-muted-foreground mt-2">
                Inmuebles exclusivos que coinciden con tu gusto refinado.
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full border-border hover:bg-accent/10" aria-label="Anterior">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-border hover:bg-accent/10" aria-label="Siguiente">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {property.similarProperties.map((similar) => (
              <Link href={`/propiedades/${similar.id}`} key={similar.id}>
                <Card className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 bg-card border border-border/20 shadow-sm">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={similar.image}
                      alt={similar.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="rounded px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-card/90 backdrop-blur-sm text-primary shadow-sm">
                        {similar.badge}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                      {similar.location}
                    </p>
                    <h3 className="text-lg text-foreground mb-2 truncate group-hover:text-primary transition-colors font-semibold">
                      {similar.title}
                    </h3>
                    <p className="text-xl font-bold text-primary font-heading mb-6">
                      {similar.price}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border/20 pt-4">
                      <span className="flex items-center gap-1 font-medium">
                        <Bed className="h-4 w-4" /> {similar.beds} Beds
                      </span>
                      <span className="flex items-center gap-1 font-medium">
                        <Bath className="h-4 w-4" /> {similar.baths} Baths
                      </span>
                      <span className="flex items-center gap-1 font-medium">
                        <Square className="h-4 w-4" /> {similar.sqft}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full">
        <div className="bg-primary text-primary-foreground py-24 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl mb-6 font-heading font-bold">
              Asegura tu legado hoy.
            </h2>
            <p className="text-lg mb-10 opacity-90">
              Las oportunidades de poseer Obras Maestras arquitectónicas de esta categoría son extremadamente raras. Contáctanos para coordinar una visita privada.
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-10 py-4 rounded-md shadow-lg text-lg"
            >
              Solicitar Información
            </Button>
          </div>
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }}
          />
        </div>
      </section>

      {/* Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-card border-t border-border/30 shadow-[-8px_-8px_30px_rgba(0,0,0,0.08)] z-50 transform transition-transform duration-300 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Agent Info */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
              {property.agent.initials}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h4 className="font-bold text-foreground text-lg">{property.agent.name}</h4>
                <Check className="h-4 w-4 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground">{property.agent.role}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex w-full md:w-auto gap-3">
            <Button
              variant="outline"
              className="flex-1 md:flex-none gap-2 bg-card border-border text-foreground hover:bg-accent/10"
            >
              <Phone className="h-5 w-5" />
              <span className="hidden sm:inline">Llamar</span>
            </Button>
            <Button
              variant="outline"
              className="flex-1 md:flex-none gap-2 bg-card border-border text-foreground hover:bg-accent/10"
            >
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">Mensaje</span>
            </Button>
            <Button className="flex-[2] md:flex-none gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Calendar className="h-5 w-5" />
              Agendar Visita
            </Button>
          </div>
        </div>
      </div>

      {/* Share Sheet with QR Code */}
      <Sheet open={isShareSheetOpen} onOpenChange={setIsShareSheetOpen}>
        <SheetContent side="bottom" className="sm:max-w-md mx-auto rounded-t-2xl bg-card">
          <SheetHeader className="text-center pb-6">
            <SheetTitle className="text-xl text-foreground font-heading">
              Compartir Propiedad
            </SheetTitle>
            <SheetDescription className="text-muted-foreground">
              Escanea el código QR o copia el enlace para compartir
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col items-center gap-6 py-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-border">
              <QRCodeSVG
                value={`https://propia.com/propiedades/${property.id}`}
                size={180}
                level="M"
                includeMargin
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Escanea para ver en tu teléfono
            </p>
            <Button
              variant="outline"
              className="w-full gap-2 bg-card border-border text-foreground"
              onClick={() => {
                navigator.clipboard.writeText(`https://propia.com/propiedades/${property.id}`);
                setIsLinkCopied(true);
                setTimeout(() => setIsLinkCopied(false), 2000);
              }}
            >
              {isLinkCopied ? (
                <>
                  <Check className="h-4 w-4 text-green-500" />
                  Enlace copiado
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copiar enlace
                </>
              )}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </main>
  );
}