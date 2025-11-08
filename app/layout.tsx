import type { Metadata } from "next";
import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Premium Coconut Charcoal Briquettes | Export Worldwide",
    template: "%s | Premium Coconut Charcoal Export"
  },
  description: "Leading manufacturer and exporter of premium coconut charcoal briquettes for hookah and BBQ. Exported worldwide with SGS, Halal, ISO, MSDS, and COA certifications. Long burning time, low ash content, 100% natural.",
  keywords: ["coconut charcoal", "charcoal briquettes", "hookah charcoal", "BBQ charcoal", "export charcoal", "coconut shell charcoal", "shisha charcoal", "premium charcoal", "SGS certified charcoal", "Halal certified charcoal"],
  authors: [{ name: "Premium Coconut Charcoal Export" }],
  creator: "Premium Coconut Charcoal Export",
  publisher: "Premium Coconut Charcoal Export",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Premium Coconut Charcoal Export",
    title: "Premium Coconut Charcoal Briquettes for Hookah & BBQ — Exported Worldwide",
    description: "Leading manufacturer and exporter of premium coconut charcoal briquettes for hookah and BBQ. Exported worldwide with international certifications.",
    images: [
      {
        url: "/assets/images/bg-hero.png",
        width: 1200,
        height: 630,
        alt: "Premium Coconut Charcoal Briquettes for Hookah & BBQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Coconut Charcoal Briquettes for Hookah & BBQ — Exported Worldwide",
    description: "Leading manufacturer and exporter of premium coconut charcoal briquettes. Exported worldwide with SGS, Halal, ISO certifications.",
    images: ["/assets/images/bg-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${figtree.variable} ${urbanist.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
