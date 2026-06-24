import { Container } from "@/components/layout/container";
import Image from "next/image";

export function NewProjectsSection() {
  return (
    <section className="bg-primary text-primary-foreground py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <span className="text-secondary font-semibold tracking-[0.3em] text-xs uppercase mb-4 block">
              Oportunidades de Inversión
            </span>
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
              Nuevos <span className="italic font-light opacity-80">Proyectos</span> en
              Construcción
            </h2>
            <p className="text-white/70 mb-8 max-w-sm leading-relaxed">
              Descubre desarrollos exclusivos en preventa con facilidades de pago y la mayor
              plusvalía del mercado dominicano.
            </p>
            <div className="flex items-center gap-6">
              <div className="pl-6 border-l-2 border-secondary/50 py-2">
                <p className="text-4xl font-bold text-secondary">12+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/60">
                  Proyectos con respaldo
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="group relative bg-white/5 rounded-3xl p-4 border border-white/10 backdrop-blur-sm">
              <div className="relative h-[400px] overflow-hidden rounded-2xl mb-6">
                <Image
                  src="/images/home/proyecto-legacy-tower.webp"
                  alt="The Legacy Tower"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-semibold">The Legacy Tower</h3>
                  <p className="text-white/60">Piantini, Santo Domingo</p>
                </div>
                <button className="bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-white/90 transition-colors">
                  Ver proyecto
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
