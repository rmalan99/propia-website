import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      label: "Privacy Policy",
      href: "#",
    },
    {
      label: "Terms of Service",
      href: "#",
    },
    {
      label: "Cookie Policy",
      href: "#",
    },
  ];

  const secondaryLinks = [
    {
      label: "Accessibility",
      href: "#",
    },
    {
      label: "Sitemap",
      href: "#",
    },
  ];

  return (
    <footer className={cn("bg-[#E5E3DF] py-12 md:py-16", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Left column - Logo and description */}
          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a1a]">
              LuxeRealEstate
            </h2>
            <p className="text-sm text-gray-700 max-w-xs leading-relaxed">
              Inmuebles de lujo y proyectos comerciales en la Republica
              Dominicana.
            </p>
          </div>

          {/* Center column - Links */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-700 hover:text-[#1a1a1a] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
              {secondaryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-700 hover:text-[#1a1a1a] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right column - Copyright */}
          <div className="flex flex-col justify-center md:justify-end">
            <p className="text-sm text-gray-700 text-center md:text-right">
              &copy; {currentYear} LuxeRealEstate. All rights reserved. Built
              for Excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
