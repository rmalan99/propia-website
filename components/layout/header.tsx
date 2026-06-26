"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Home,
  Building2,
  ShoppingCart,
  Key,
  FolderKanban,
  Users,
  Newspaper,
  Mail,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigationItems: {
  label: string;
  href: string;
  icon: LucideIcon;
}[] = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Propiedades", href: "/propiedades", icon: Building2 },
  { label: "Comprar", href: "/comprar", icon: ShoppingCart },
  { label: "Alquilar", href: "/alquilar", icon: Key },
  { label: "Proyectos", href: "/proyectos", icon: FolderKanban },
  { label: "Agentes", href: "/agentes", icon: Users },
  { label: "Blog", href: "/blog", icon: Newspaper },
  { label: "Contacto", href: "/contacto", icon: Mail },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border/80 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <Container className="grid h-20 grid-cols-[1fr_auto_1fr] items-center gap-6">
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/logo.svg"
            alt="Propia"
            width={127}
            height={44}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-1 md:flex"
        >
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "inline-flex h-10 items-center justify-center border-b-2 px-3 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:border-primary/40 hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

        <div className="flex items-center justify-end gap-4 lg:gap-8">
          <Button asChild className="hidden md:inline-flex" size="sm">
            <Link href="/login">Login</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Abrir menú"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[82vw] max-w-sm flex flex-col gap-4"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center">
                  <Image
                    src="/logo.svg"
                    alt="Propia"
                    width={127}
                    height={44}
                    className="h-9 w-auto"
                    priority
                  />
                </SheetTitle>
              </SheetHeader>

              <nav
                aria-label="Navegación móvil"
                className="flex flex-1 flex-col gap-1"
              >
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <SheetClose asChild key={`${item.label}-mobile`}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition-colors",
                          pathname === item.href
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-muted hover:text-primary",
                        )}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>

              <Button asChild className="mt-auto">
                <Link href="/login">Login</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
