import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
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
    <html lang="es" className={`${manrope.variable} ${GeistSans.variable} ${inter.variable} ${comfortaa.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
