import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import FloatingWhatsAppButton from "./component/FloatingBtn";

const montserrat = Montserrat({ subsets: ["latin"], weight: ['400','700'] });

export const metadata: Metadata = {
  title: "B.tool Consulting | Expert en Immobilier,Immigration, Visas, RH, et Voyages",
  description: "Découvrez B.tool Consulting, votre partenaire pour l'immobilier, l'assistance visa, les services RH, et la gestion de voyages. Obtenez des conseils personnalisés et un accompagnement 24/7 pour réussir vos projets."
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>
        <Header/>
          {children}
        <Footer/>
        <FloatingWhatsAppButton/>
      </body>
    </html>
  );
}
