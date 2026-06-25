import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
                  <Card
                    key={item.label}
                    className="border-white/10 bg-white/5 text-primary-foreground backdrop-blur-sm transition-all hover:bg-white/10"
                  >
                    <CardContent className="flex flex-col items-center gap-4 p-6 pt-6 text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/20">
                        <item.icon className="h-8 w-8 text-secondary" />
                      </div>
                      <span className="text-base font-medium tracking-wide">{item.label}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button
                type="button"
                variant="secondary"
                size="lg"
                className="rounded-xl px-12 text-lg font-bold text-primary shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                Convertirme en Agente
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
