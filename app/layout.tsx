import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Invitación Boda Albert y Cris",
  description: "¡Nos Casamos! Nos gustaría que nos acompañaras en este día tan especial.",
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
