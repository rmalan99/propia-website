import { MapPin, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function HeroSearchForm() {
  return (
    <Card className="w-full max-w-5xl rounded-[28px] border-white/15 bg-background/95 shadow-2xl backdrop-blur-md">
      <CardContent className="p-6 pt-6 md:p-7 md:pt-7">
        <Tabs defaultValue="buy" className="space-y-6">
          <TabsList className="h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
            <TabsTrigger
              value="buy"
              className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Comprar
            </TabsTrigger>
            <TabsTrigger
              value="rent"
              className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Alquilar
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Proyectos
            </TabsTrigger>
          </TabsList>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="relative md:col-span-5">
              <MapPin className="absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Ubicación, ciudad o zona..."
                className="h-12 rounded-xl border-border/70 bg-background pl-10 pr-4"
              />
            </div>
            <div className="grid grid-cols-1 gap-3 md:col-span-4 md:grid-cols-2">
              <Select defaultValue="all-types">
                <SelectTrigger className="h-12 rounded-xl border-border/70 bg-background">
                  <SelectValue placeholder="Tipo Propiedad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">Tipo Propiedad</SelectItem>
                  <SelectItem value="apartment">Apartamento</SelectItem>
                  <SelectItem value="house">Casa</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="max-price">
                <SelectTrigger className="h-12 rounded-xl border-border/70 bg-background">
                  <SelectValue placeholder="Precio Máx." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="max-price">Precio Máx.</SelectItem>
                  <SelectItem value="500k">$500k</SelectItem>
                  <SelectItem value="1m">$1M+</SelectItem>
                  <SelectItem value="2m">$2M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button size="lg" className="h-12 rounded-xl font-bold md:col-span-3" type="button">
              <Search className="h-5 w-5" />
              Buscar propiedades
            </Button>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}
