import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kadron.tech | Sites, Sistemas, Automação e IA",

  description:
    "Soluções digitais sob medida para empresas. Sites profissionais, sistemas personalizados, automações, integrações e inteligência artificial.",

  alternates: {
    canonical: "https://www.kadrontech.com.br/",
  },

  keywords: [
    "sites profissionais",
    "sistemas personalizados",
    "automação",
    "inteligência artificial",
    "integrações",
    "desenvolvimento web",
    "soluções digitais",
    "Kadron.tech",
  ],

  authors: [{ name: "Kadron.tech" }],

  openGraph: {
    title: "Kadron.tech | Sites, Sistemas, Automação e IA",
    description:
      "Soluções digitais sob medida para empresas. Sites profissionais, sistemas personalizados, automações, integrações e inteligência artificial.",
    url: "https://www.kadrontech.com.br/",
    siteName: "Kadron.tech",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kadron.tech | Sites, Sistemas, Automação e IA",
    description:
      "Soluções digitais sob medida para empresas. Sites profissionais, sistemas personalizados, automações, integrações e inteligência artificial.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}