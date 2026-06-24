import { Container } from "@/components/layout/container";
import { Building, Home, Castle, Briefcase } from "lucide-react";

const categories = [
  { icon: Building, label: "Apartamentos", count: "1,240 propiedades" },
  { icon: Home, label: "Casas", count: "850 propiedades" },
  { icon: Castle, label: "Villas", count: "320 propiedades" },
  { icon: Briefcase, label: "Comercial", count: "150 propiedades" },
];

export function QuickCategoriesSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
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
      </Container>
    </section>
  );
}
