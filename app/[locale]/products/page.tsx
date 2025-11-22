import { HookahProduct, ProductHero, BBQProduct, CustomShapeProduct, BannerProducct } from '@/components/sections';
import { locales, type Locale } from '@/i18n';
import type { Metadata } from "next";

// Generate static params for all locales (required for static export)
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const metadataMap: Record<string, Metadata> = {
    id: {
      title: "Produk Briket Arang Kelapa Premium — Hookah, BBQ & Custom Shape",
      description: "Jelajahi rangkaian lengkap produk briket arang kelapa premium kami: Hookah Briquettes, BBQ Coconut Charcoal, dan Custom Charcoal Shapes. Semua produk bersertifikat SGS, ISO, dan Halal dengan kualitas ekspor terbaik.",
      keywords: [
        "produk briket arang kelapa",
        "arang hookah premium",
        "arang BBQ kelapa",
        "custom shape charcoal",
        "briket arang ekspor",
        "produk arang kelapa",
        "arang shisha premium",
        "OEM charcoal products"
      ],
      openGraph: {
        locale: "id_ID",
      },
    },
    en: {
      title: "Premium Coconut Charcoal Products — Hookah, BBQ & Custom Shapes",
      description: "Explore our complete range of premium coconut charcoal products: Hookah Briquettes, BBQ Coconut Charcoal, and Custom Charcoal Shapes. All products are SGS, ISO, and Halal certified with export-quality standards.",
      keywords: [
        "coconut charcoal products",
        "premium hookah charcoal",
        "BBQ coconut charcoal",
        "custom shape charcoal",
        "export charcoal briquettes",
        "coconut charcoal products",
        "premium shisha charcoal",
        "OEM charcoal products"
      ],
      openGraph: {
        locale: "en_US",
      },
    },
    zh: {
      title: "优质椰壳炭产品 — 水烟、烧烤和定制形状",
      description: "探索我们完整的优质椰壳炭产品系列：水烟炭砖、烧烤椰壳炭和定制形状炭。所有产品均通过 SGS、ISO 和清真认证，符合出口质量标准。",
      keywords: [
        "椰壳炭产品",
        "优质水烟炭",
        "烧烤椰壳炭",
        "定制形状炭",
        "出口炭砖",
        "椰壳炭产品",
        "优质什沙炭",
        "OEM 炭产品"
      ],
      openGraph: {
        locale: "zh_CN",
      },
    },
    ar: {
      title: "منتجات فحم جوز الهند المميزة — الشيشة والشواء والأشكال المخصصة",
      description: "استكشف مجموعتنا الكاملة من منتجات فحم جوز الهند المميزة: قوالب الشيشة، فحم جوز الهند للشواء، وأشكال الفحم المخصصة. جميع المنتجات معتمدة من SGS و ISO وحلال بمعايير جودة التصدير.",
      keywords: [
        "منتجات فحم جوز الهند",
        "فحم الشيشة المميز",
        "فحم جوز الهند للشواء",
        "فحم بأشكال مخصصة",
        "قوالب الفحم للتصدير",
        "منتجات فحم جوز الهند",
        "فحم الشيشة المميز",
        "منتجات الفحم OEM"
      ],
      openGraph: {
        locale: "ar_SA",
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
      url: `${baseUrl}/${locale}/products`,
      siteName: "Premium Coconut Charcoal Export",
      images: [
        {
          url: `${baseUrl}/assets/images/bg-hero-product.png`,
          width: 1200,
          height: 630,
          alt: locale === 'id' 
            ? "Produk Briket Arang Kelapa Premium"
            : locale === 'zh'
            ? "优质椰壳炭产品"
            : locale === 'ar'
            ? "منتجات فحم جوز الهند المميزة"
            : "Premium Coconut Charcoal Products",
        },
      ],
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image",
      title: currentMetadata.title as string,
      description: currentMetadata.description || undefined,
      images: [`${baseUrl}/assets/images/bg-hero-product.png`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/products`,
      languages: {
        'id': `${baseUrl}/id/products`,
        'en': `${baseUrl}/en/products`,
        'zh': `${baseUrl}/zh/products`,
        'ar': `${baseUrl}/ar/products`,
        'x-default': `${baseUrl}/id/products`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  // Structured Data for SEO - ProductCollection
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": locale === 'id' 
      ? "Produk Briket Arang Kelapa Premium"
      : locale === 'zh'
      ? "优质椰壳炭产品"
      : locale === 'ar'
      ? "منتجات فحم جوز الهند المميزة"
      : "Premium Coconut Charcoal Products",
    "description": locale === 'id'
      ? "Jelajahi rangkaian lengkap produk briket arang kelapa premium kami: Hookah Briquettes, BBQ Coconut Charcoal, dan Custom Charcoal Shapes."
      : locale === 'zh'
      ? "探索我们完整的优质椰壳炭产品系列：水烟炭砖、烧烤椰壳炭和定制形状炭。"
      : locale === 'ar'
      ? "استكشف مجموعتنا الكاملة من منتجات فحم جوز الهند المميزة: قوالب الشيشة، فحم جوز الهند للشواء، وأشكال الفحم المخصصة."
      : "Explore our complete range of premium coconut charcoal products: Hookah Briquettes, BBQ Coconut Charcoal, and Custom Charcoal Shapes.",
    "url": `${baseUrl}/${locale}/products`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 3,
      "itemListElement": [
        {
          "@type": "Product",
          "position": 1,
          "name": locale === 'id' ? "Hookah Briquettes" : locale === 'zh' ? "水烟炭砖" : locale === 'ar' ? "قوالب الشيشة" : "Hookah Briquettes",
          "description": locale === 'id'
            ? "Briket arang kelapa premium untuk hookah dan shisha dengan waktu bakar lama dan kandungan abu rendah."
            : locale === 'zh'
            ? "用于水烟和什沙的优质椰壳炭砖，燃烧时间长，灰分含量低。"
            : locale === 'ar'
            ? "قوالب فحم جوز الهند المميزة للشيشة والشيشة مع وقت احتراق طويل ومحتوى رماد منخفض."
            : "Premium coconut charcoal briquettes for hookah and shisha with long burning time and low ash content.",
          "url": `${baseUrl}/${locale}/products`,
          "brand": {
            "@type": "Brand",
            "name": "Premium Coconut Charcoal Export"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "Product",
          "position": 2,
          "name": locale === 'id' ? "BBQ Coconut Charcoal" : locale === 'zh' ? "烧烤椰壳炭" : locale === 'ar' ? "فحم جوز الهند للشواء" : "BBQ Coconut Charcoal",
          "description": locale === 'id'
            ? "Briket arang kelapa untuk BBQ dan grilling dengan output panas tinggi dan waktu bakar lama."
            : locale === 'zh'
            ? "用于烧烤和烤制的椰壳炭砖，热量输出高，燃烧时间长。"
            : locale === 'ar'
            ? "قوالب فحم جوز الهند للشواء والشواء مع إنتاج حرارة عالي ووقت احتراق طويل."
            : "Coconut charcoal briquettes for BBQ and grilling with high heat output and long burning time.",
          "url": `${baseUrl}/${locale}/products`,
          "brand": {
            "@type": "Brand",
            "name": "Premium Coconut Charcoal Export"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "Product",
          "position": 3,
          "name": locale === 'id' ? "Custom Charcoal Shapes" : locale === 'zh' ? "定制形状炭" : locale === 'ar' ? "أشكال الفحم المخصصة" : "Custom Charcoal Shapes",
          "description": locale === 'id'
            ? "Bentuk dan ukuran arang kustom dengan solusi kemasan yang fleksibel sesuai kebutuhan branding Anda."
            : locale === 'zh'
            ? "定制形状和尺寸的炭，提供灵活的包装解决方案以满足您的品牌需求。"
            : locale === 'ar'
            ? "أشكال وأحجام فحم مخصصة مع حلول تغليف مرنة لتلبية احتياجات العلامة التجارية الخاصة بك."
            : "Custom charcoal shapes and sizes with flexible packaging solutions to meet your branding needs.",
          "url": `${baseUrl}/${locale}/products`,
          "brand": {
            "@type": "Brand",
            "name": "Premium Coconut Charcoal Export"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD"
          }
        }
      ]
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main >
        <ProductHero />
        <div className="space-y-16 md:space-y-24 lg:space-y-32 py-12 md:py-16 lg:py-20">
          <HookahProduct />
          <BBQProduct />
          <CustomShapeProduct />
        </div>
        <BannerProducct />
        
      </main>
    </>
  );
}

