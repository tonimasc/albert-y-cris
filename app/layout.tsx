import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Nos casamos y queremos que estés allí",
  description: "El sábado 6 de junio de 2026, a las 18:00 h, nos casamos en el Palacio de la Margarita, en Collado Villalba (Madrid). Nos haría mucha ilusión celebrarlo contigo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${sourceSerif4.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
