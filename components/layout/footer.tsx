import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

// Iconos SVG inline para redes sociales (lucide-react v1.21.0 no los incluye)
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Inicio", href: "/" },
    { label: "Propiedades", href: "/propiedades" },
    { label: "Comprar", href: "/comprar" },
    { label: "Alquilar", href: "/alquilar" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Agentes", href: "/agentes" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Accessibility", href: "#" },
    { label: "Sitemap", href: "#" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "#", icon: InstagramIcon },
    { label: "Facebook", href: "#", icon: FacebookIcon },
    { label: "Twitter", href: "#", icon: TwitterIcon },
    { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  ];

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
              &copy; {currentYear} LuxeRealEstate. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-left lg:text-right">
              Built for Excellence.
            </p>
            
            {/* Redes Sociales */}
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
