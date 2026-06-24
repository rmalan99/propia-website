import { Container } from "@/components/layout/container";
import Image from "next/image";
import {
  Search,
  MapPin,
  Building,
  Home,
  Castle,
  Briefcase,
  Bed,
  Bath,
  Maximize,
  Heart,
  ChevronRight,
  CheckCircle,
  Globe,
  GraduationCap,
  Rocket,
  Headset,
  Shield,
  Users,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function Page() {
  return (
    <Container>
      {/* Hero Section */}
      <section className="relative h-[700px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/hero-villa.webp"
            alt="Luxury villa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
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

      {/* Quick Categories */}
      <section className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Building, label: "Apartamentos", count: "1,240 propiedades" },
              { icon: Home, label: "Casas", count: "850 propiedades" },
              { icon: Castle, label: "Villas", count: "320 propiedades" },
              { icon: Briefcase, label: "Comercial", count: "150 propiedades" },
            ].map((category) => (
              <a
                key={category.label}
                href="#"
                className="group p-8 bg-accent rounded-2xl hover:bg-primary transition-all duration-300"
              >
                <category.icon className="h-10 w-10 mb-4 text-primary group-hover:text-primary-foreground" />
                <h3 className="text-xl font-semibold group-hover:text-primary-foreground">
                  {category.label}
                </h3>
                <p className="text-muted-foreground group-hover:text-white/80 text-sm">
                  {category.count}
                </p>
              </a>
            ))}
          </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-accent">
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
            {[
              {
                image: "/images/home/propiedad-1-penthouse.webp",
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
                image: "/images/home/propiedad-2-villa.webp",
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
                image: "/images/home/propiedad-3-apartamento.webp",
                price: "$2,500 /mo",
                badge: "Nueva",
                title: "Luxury Sky Apartment",
                location: "Piantini, SD",
                beds: 2,
                baths: 2,
                sqft: "120m²",
                type: "Alquiler",
              },
            ].map((property, index) => (
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
      </section>

      {/* Search by Location */}
      <section className="py-16">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Explora las mejores zonas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                image: "/images/home/zona-punta-cana.webp",
                title: "Punta Cana",
                desc: "Playas paradisíacas y alta rentabilidad.",
              },
              {
                image: "/images/home/zona-santo-domingo.webp",
                title: "Santo Domingo",
                desc: "El centro cosmopolita del Caribe.",
              },
              {
                image: "/images/home/zona-las-terrenas.webp",
                title: "Las Terrenas",
                desc: "Naturaleza y exclusividad en Samaná.",
              },
              {
                image: "/images/home/zona-la-romana.webp",
                title: "La Romana",
                desc: "Residencias de lujo y campos de golf.",
              },
            ].map((location, index) => (
              <div
                key={index}
                className="relative h-96 rounded-2xl overflow-hidden group"
              >
                <Image
                  src={location.image}
                  alt={location.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {location.title}
                  </h3>
                  <p className="text-white/80 mb-4 text-sm">{location.desc}</p>
                  <button className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white border border-white/50 px-6 py-2 rounded-lg text-sm transition-all">
                    Explorar zona
                  </button>
                </div>
              </div>
            ))}
          </div>
      </section>

      {/* New Projects */}
      <section className="bg-primary text-primary-foreground py-12">
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
      </section>

      {/* Sell with Us */}
      <section className="py-16">
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
                {[
                  "Valuación profesional sin costo",
                  "Sesión fotográfica y video profesional",
                  "Exposición en los principales portales internacionales",
                ].map((item) => (
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
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-accent">
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
                  {[
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
                  ].map((feature) => (
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
      </section>

      {/* Featured Agents */}
      <section className="py-16">
          <div className="relative rounded-[40px] overflow-hidden bg-primary text-primary-foreground">
            <div className="absolute inset-0 z-0 opacity-40">
              <Image
                src="/images/home/placeholder.svg"
                alt="Background"
                fill
                className="object-cover"
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
                  {[
                    { icon: Globe, label: "Visibilidad Global" },
                    { icon: GraduationCap, label: "Capacitación de Alto Nivel" },
                    { icon: Rocket, label: "Herramientas de Venta" },
                    { icon: Headset, label: "Soporte 24/7" },
                  ].map((item) => (
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
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-accent">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Consejos y Tendencias del Mercado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: "/images/home/blog-inversion.webp",
                category: "Inversión",
                title: "5 Razones para invertir en Punta Cana este 2024",
                desc: "Analizamos el crecimiento turístico y las nuevas infraestructuras que impulsan el mercado...",
              },
              {
                image: "/images/home/blog-legal.webp",
                category: "Legal",
                title: "Guía completa para extranjeros comprando en RD",
                desc: "Todo lo que necesitas saber sobre la Ley de Confotur y beneficios fiscales para inversores...",
              },
              {
                image: "/images/home/blog-diseno.webp",
                category: "Diseño",
                title: "Tendencias de arquitectura sostenible en el Caribe",
                desc: "Exploramos cómo los nuevos proyectos integran materiales naturales y eficiencia energética...",
              },
            ].map((article, index) => (
              <article
                key={index}
                className="bg-background rounded-2xl overflow-hidden group border border-border/50"
              >
                <div className="h-56 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={224}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <span className="text-secondary text-xs font-bold uppercase mb-4 block">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-4">{article.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{article.desc}</p>
                  <a
                    href="#"
                    className="text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Leer más <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-accent">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            ¿Listo para encontrar tu próxima propiedad?
          </h2>
          <p className="text-muted-foreground mb-12">
            Nuestro equipo está listo para ayudarte a dar el siguiente paso en tu inversión
            inmobiliaria.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-primary text-primary-foreground px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
              Buscar propiedades
            </button>
            <button className="border-2 border-primary text-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-accent transition-colors">
              Contactar agente
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}
