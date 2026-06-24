import { Container } from "@/components/layout/container";
import Image from "next/image";
import { Shield, Users, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Propiedades Verificadas",
    desc: "Cada listado pasa por un riguroso proceso de validación legal y estructural para garantizar su inversión.",
  },
  {
    icon: Users,
    title: "Agentes Expertos",
    desc: "Asesoría personalizada con profesionales con más de 10 años de trayectoria en el mercado inmobiliario premium.",
  },
  {
    icon: MessageCircle,
    title: "Soporte WhatsApp",
    desc: "Atención inmediata 24/7 para resolver sus dudas en tiempo real con un asesor dedicado.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-accent">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent rounded-[40px] -z-10 transition-transform group-hover:scale-105 duration-700" />
              <Image
                src="/images/home/why-trust.webp"
                alt="Luxury real estate"
                width={600}
                height={600}
                className="w-full h-[600px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="max-w-lg">
              <span className="text-secondary font-semibold tracking-widest text-xs uppercase mb-4 block">
                Excelencia y Seguridad
              </span>
              <h2 className="text-3xl font-semibold mb-10">
                ¿Por qué confiar en Propia?
              </h2>
              <div className="space-y-6">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="group p-6 rounded-2xl border border-border/30 bg-background hover:bg-accent transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-primary text-primary-foreground rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
