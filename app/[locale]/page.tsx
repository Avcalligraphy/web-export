import { Hero, Features, OurStory, Product, ClientSays, Certificates } from "@/components/sections";
import type { Metadata } from "next";
import { locales, type Locale } from '@/i18n';

// Generate static params for all locales (required for static export)
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const metadataMap: Record<string, Metadata> = {
    id: {
      title: "Briket Arang Kelapa Premium untuk Hookah & BBQ — Diekspor ke Seluruh Dunia",
      description: "Produsen dan eksportir terkemuka briket arang kelapa premium untuk hookah dan BBQ. Produk kami diekspor ke seluruh dunia dengan sertifikasi SGS, Halal, ISO, MSDS, dan COA. Waktu bakar lama (3+ jam), kandungan abu rendah (<2%), 100% tempurung kelapa alami. OEM/Private label tersedia.",
      keywords: [
        "briket arang kelapa",
        "arang hookah",
        "arang shisha",
        "arang BBQ",
        "ekspor arang kelapa",
        "produsen arang premium",
        "arang bersertifikat SGS",
        "arang bersertifikat Halal",
        "arang bersertifikat ISO",
        "ekspor arang Indonesia",
        "arang OEM",
        "arang private label",
        "arang bakar lama",
        "arang abu rendah"
      ],
      openGraph: {
        locale: "id_ID",
      },
    },
    en: {
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
        locale: "en_US",
      },
    },
    zh: {
      title: "优质椰壳炭砖用于水烟和烧烤 — 全球出口",
      description: "优质椰壳炭砖的领先制造商和出口商，用于水烟和烧烤。我们的产品出口到世界各地，具有 SGS、清真、ISO、MSDS 和 COA 认证。燃烧时间长（3小时以上），灰分含量低（<2%），100% 天然椰壳。OEM/私人标签可用。",
      keywords: [
        "椰壳炭砖",
        "水烟炭",
        "什沙炭",
        "烧烤炭",
        "椰壳炭出口",
        "优质炭制造商",
        "SGS 认证炭",
        "清真认证炭",
        "ISO 认证炭",
        "印尼炭出口",
        "OEM 炭",
        "私人标签炭",
        "长燃烧炭",
        "低灰分炭"
      ],
      openGraph: {
        locale: "zh_CN",
      },
    },
  };

  const currentMetadata = metadataMap[locale] || metadataMap.en;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return {
    ...currentMetadata,
    openGraph: {
      ...currentMetadata.openGraph,
      title: currentMetadata.title as string,
      description: currentMetadata.description || undefined,
      url: `/${locale}`,
      siteName: "Premium Coconut Charcoal Export",
      images: [
        {
          url: "/assets/images/bg-hero.png",
          width: 1200,
          height: 630,
          alt: locale === 'id' 
            ? "Briket Arang Kelapa Premium untuk Hookah & BBQ - Ekspor ke Seluruh Dunia"
            : locale === 'zh'
            ? "优质椰壳炭砖用于水烟和烧烤 - 全球出口"
            : "Premium Coconut Charcoal Briquettes for Hookah & BBQ - Export Worldwide",
        },
        {
          url: "/assets/images/product-1.png",
          width: 800,
          height: 600,
          alt: locale === 'id'
            ? "Briket Arang Hookah Shisha"
            : locale === 'zh'
            ? "水烟什沙椰壳炭砖"
            : "Hookah Shisha Coconut Charcoal Briquettes",
        },
      ],
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image",
      title: currentMetadata.title as string,
      description: currentMetadata.description || undefined,
      images: ["/assets/images/bg-hero.png"],
    },
    alternates: {
      canonical: `/${locale}`,
    },
  };
}

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

