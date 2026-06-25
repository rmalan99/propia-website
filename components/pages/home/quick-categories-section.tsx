import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
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
            <a key={category.label} href="#" className="group block">
              <Card className="h-full rounded-2xl border-border/70 bg-muted/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-6 pt-6">
                  <category.icon className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{category.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
