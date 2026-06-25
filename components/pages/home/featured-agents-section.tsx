import { Container } from "@/components/layout/container";
import Image from "next/image";
import { imagePlaceholders } from "@/lib/image-placeholders";
import { Globe, GraduationCap, Rocket, Headset } from "lucide-react";

const benefits = [
  { icon: Globe, label: "Visibilidad Global" },
  { icon: GraduationCap, label: "Capacitación de Alto Nivel" },
  { icon: Rocket, label: "Herramientas de Venta" },
  { icon: Headset, label: "Soporte 24/7" },
];

export function FeaturedAgentsSection() {
  return (
    <section className="min-h-[90vh] flex items-center py-16">
      <Container>
        <div className="relative rounded-[40px] overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/images/home/placeholder.svg"
              alt="Background"
              fill
              className="object-cover"
              sizes="100vw"
              loading="lazy"
            />
          </div>
          <div className="relative z-10 p-12 md:p-20 flex flex-col lg:flex-row items-center gap-12">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-secondary font-semibold tracking-[0.2em] text-xs uppercase mb-6 block">
                Oportunidad de Carrera
              </span>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                Únete a la Élite del Real Estate
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-16 max-w-2xl mx-auto">
                Potencia tu carrera con la red inmobiliaria más prestigiosa. Accede a propiedades
                exclusivas, leads calificados y la mejor tecnología del mercado.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {benefits.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10"
                  >
                    <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mb-2">
                      <item.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <span className="text-base font-medium tracking-wide">{item.label}</span>
                  </div>
                ))}
              </div>
              <button className="bg-white text-primary px-12 py-5 rounded-xl font-bold text-lg hover:bg-accent transition-all shadow-2xl hover:scale-105 active:scale-95">
                Convertirme en Agente
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
