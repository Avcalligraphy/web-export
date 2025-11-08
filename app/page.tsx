import { Hero, Features, OurStory, Product, ClientSays, Certificates } from "@/components/sections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Coconut Charcoal Briquettes for Hookah & BBQ — Exported Worldwide",
  description: "Leading manufacturer and exporter of premium coconut charcoal briquettes for hookah and BBQ. Our products are exported worldwide with SGS, Halal, ISO, MSDS, and COA certifications. Long burning time (3+ hours), low ash content (<2%), 100% natural coconut shell. OEM/Private label available.",
  keywords: [
    "coconut charcoal briquettes",
    "hookah charcoal",
    "shisha charcoal",
    "BBQ charcoal",
    "coconut shell charcoal export",
    "premium charcoal manufacturer",
    "SGS certified charcoal",
    "Halal certified charcoal",
    "ISO certified charcoal",
    "charcoal export Indonesia",
    "OEM charcoal",
    "private label charcoal",
    "long burning charcoal",
    "low ash charcoal"
  ],
  openGraph: {
    title: "Premium Coconut Charcoal Briquettes for Hookah & BBQ — Exported Worldwide",
    description: "Leading manufacturer and exporter of premium coconut charcoal briquettes. Exported worldwide with international certifications. Long burning time, low ash content, 100% natural.",
    url: "/",
    siteName: "Premium Coconut Charcoal Export",
    images: [
      {
        url: "/assets/images/bg-hero.png",
        width: 1200,
        height: 630,
        alt: "Premium Coconut Charcoal Briquettes for Hookah & BBQ - Export Worldwide",
      },
      {
        url: "/assets/images/product-1.png",
        width: 800,
        height: 600,
        alt: "Hookah Shisha Coconut Charcoal Briquettes",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Coconut Charcoal Briquettes for Hookah & BBQ — Exported Worldwide",
    description: "Leading manufacturer and exporter of premium coconut charcoal briquettes. Exported worldwide with SGS, Halal, ISO certifications.",
    images: ["/assets/images/bg-hero.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <OurStory />
      <Product />
      <ClientSays />
      <Certificates />
    </main>
  );
}
