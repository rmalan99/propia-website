import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Header } from "@/components/layout/header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Propia",
  description: "Tu plataforma inmobiliaria de confianza",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${manrope.variable} ${GeistSans.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <Header />
        {children}
      </body>
    </html>
  );
}
