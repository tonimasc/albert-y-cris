import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Montserrat,
  Instrument_Serif,
  Inter,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nos casamos y queremos que estés allí",
  description:
    "El sábado 6 de junio de 2026, a las 18:00 h, nos casamos en el Palacio de la Margarita, en Collado Villalba (Madrid). Nos haría mucha ilusión celebrarlo contigo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} ${instrumentSerif.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
