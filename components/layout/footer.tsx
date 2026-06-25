import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { SocialIcon } from "@/components/icons/social-icon";

interface FooterProps {
  className?: string;
}

export const navigationLinks = [
  { label: "Inicio", href: "/" },
  { label: "Propiedades", href: "/propiedades" },
  { label: "Comprar", href: "/comprar" },
  { label: "Alquilar", href: "/alquilar" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Agentes", href: "/agentes" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Sitemap", href: "#" },
] as const;

export const socialLinks = [
  { label: "Portfolio", href: "https://alan-hidalgo.online/", icon: "portfolio" as const },
  { label: "GitHub", href: "https://github.com/rmalan99", icon: "github" as const },
  { label: "Email", href: "mailto:rmaaron11@gmail.com", icon: "mail" as const },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alan-hidalgo-medina/", icon: "linkedin" as const },
] as const;

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("bg-card border-t border-border", className)}>
      <Container className="py-8 md:py-10">
        {/* Layout Horizontal Compacto */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Columna Izquierda: Logo y Descripción */}
          <div className="flex flex-col gap-2 min-w-[200px]">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Propia"
                width={127}
                height={44}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px]">
              Inmuebles de lujo y proyectos comerciales en la República Dominicana.
            </p>
          </div>

          {/* Columna Central: Links de Navegación y Legales */}
          <div className="flex flex-col gap-3 items-start lg:items-center">
            {/* Navegación Principal */}
            <nav className="flex flex-wrap gap-x-5 gap-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            {/* Links Legales */}
            <nav className="flex flex-wrap gap-x-5 gap-y-1">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna Derecha: Copyright y Redes Sociales */}
          <div className="flex flex-col gap-3 items-start lg:items-end min-w-[200px]">
            <p className="text-xs text-muted-foreground text-left lg:text-right">
              &copy; {currentYear} Propia. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-left lg:text-right">
              Built for Alan Hidalgo.
            </p>
            
            {/* Redes Sociales */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                >
                  <SocialIcon name={social.icon} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
