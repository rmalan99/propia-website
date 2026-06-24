import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Propia",
  description: "Tu plataforma inmobiliaria de confianza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
