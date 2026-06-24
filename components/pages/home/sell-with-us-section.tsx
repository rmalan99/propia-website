import { Container } from "@/components/layout/container";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const features = [
  "Valuación profesional sin costo",
  "Sesión fotográfica y video profesional",
  "Exposición en los principales portales internacionales",
];

export function SellWithUsSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="bg-accent rounded-[40px] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          <div className="relative z-10 md:w-3/5">
            <h2 className="text-3xl font-semibold mb-6">
              ¿Quieres vender tu propiedad al mejor precio?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              Nuestro equipo de expertos utiliza las herramientas de marketing más avanzadas para
              conectar tu inmueble con compradores calificados a nivel global.
            </p>
            <ul className="space-y-4 mb-10">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-shadow">
              Quiero vender mi propiedad
            </button>
          </div>
          <div className="md:w-2/5">
            <div className="bg-white p-2 rounded-2xl shadow-xl rotate-3">
              <Image
                src="/images/home/vender-agente.webp"
                alt="Real estate agent"
                width={400}
                height={300}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
