import { ProductGallery, DescriptGallery, ContactCatalog } from "@/components/sections";
import { locales, type Locale } from '@/i18n';
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Generate static params for all locales and product types
export function generateStaticParams() {
  const productTypes = ['hookah', 'bbq', 'oem'];
  const params: Array<{ locale: string; catalogProduct: string }> = [];
  
  locales.forEach((locale) => {
    productTypes.forEach((productType) => {
      params.push({ locale, catalogProduct: productType });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; catalogProduct: string }> }): Promise<Metadata> {
  const { locale, catalogProduct } = await params;
  
  // Validate product type
  const validProductTypes = ['hookah', 'bbq', 'oem'];
  if (!validProductTypes.includes(catalogProduct)) {
    return {};
  }

  const metadataMap: Record<string, Record<string, Metadata>> = {
    hookah: {
      id: {
        title: "Briket Hookah / Shisha | Katalog Produk Premium",
        description: "Briket arang kelapa premium khusus untuk hookah dan shisha. Waktu bakar 3+ jam, abu rendah (<2%), 100% tempurung kelapa alami. Siap ekspor dengan sertifikasi SGS, ISO, dan Halal. MOQ 1×20ft dengan opsi branding kustom.",
        keywords: [
          "briket hookah",
          "briket shisha",
          "arang hookah premium",
          "arang shisha Indonesia",
          "briket arang kelapa hookah",
          "ekspor arang hookah",
          "arang hookah bersertifikat",
          "OEM arang hookah"
        ],
      },
      en: {
        title: "Hookah / Shisha Briquettes | Premium Product Catalog",
        description: "Premium coconut charcoal briquettes specifically for hookah and shisha. 3+ hours burning time, low ash (<2%), 100% natural coconut shell. Export ready with SGS, ISO, and Halal certifications. MOQ 1×20ft with custom branding options.",
        keywords: [
          "hookah briquettes",
          "shisha briquettes",
          "premium hookah charcoal",
          "Indonesia shisha charcoal",
          "coconut charcoal hookah briquettes",
          "hookah charcoal export",
          "certified hookah charcoal",
          "OEM hookah charcoal"
        ],
      },
      zh: {
        title: "水烟 / 什沙炭砖 | 优质产品目录",
        description: "专为水烟和什沙设计的优质椰壳炭砖。燃烧时间 3+ 小时，低灰分 (<2%)，100% 天然椰壳。准备出口，具有 SGS、ISO 和清真认证。最小订购量 1×20ft，提供定制品牌选项。",
        keywords: [
          "水烟炭砖",
          "什沙炭砖",
          "优质水烟炭",
          "印尼什沙炭",
          "椰壳炭水烟砖",
          "水烟炭出口",
          "认证水烟炭",
          "OEM 水烟炭"
        ],
      },
      ar: {
        title: "فحم الشيشة | كتالوج المنتجات الفاخر",
        description: "فحم جوز الهند المضغوط الفاخر خصيصًا للشيشة. وقت احتراق 3+ ساعات، رماد منخفض (<2%)، 100% قشر جوز الهند الطبيعي. جاهز للتصدير مع شهادات SGS و ISO وحلال. الحد الأدنى للطلب: حاوية 20 قدم مع خيارات علامة تجارية مخصصة.",
        keywords: [
          "فحم الشيشة المضغوط",
          "فحم الشيشة الفاخر",
          "فحم الشيشة إندونيسيا",
          "فحم جوز الهند للشيشة",
          "تصدير فحم الشيشة",
          "فحم الشيشة المعتمد",
          "OEM فحم الشيشة"
        ],
      },
    },
    bbq: {
      id: {
        title: "Arang Ramah Lingkungan untuk BBQ | Katalog Produk Premium",
        description: "Briket arang kelapa premium untuk BBQ dan grilling. Panas merata, waktu bakar lama, abu minimal. Ideal untuk restoran, katering, dan grilling di rumah. Siap ekspor dengan sertifikasi SGS, ISO, dan Halal. MOQ 1×20ft dengan kemasan 5–10 kg.",
        keywords: [
          "arang BBQ",
          "briket arang BBQ",
          "arang grilling premium",
          "arang kelapa untuk BBQ",
          "ekspor arang BBQ",
          "arang BBQ bersertifikat",
          "OEM arang BBQ"
        ],
      },
      en: {
        title: "Eco-Friendly Charcoal for BBQ | Premium Product Catalog",
        description: "Premium coconut charcoal briquettes for BBQ and grilling. Even heat, long burn, minimal ash. Ideal for restaurants, catering, and home grilling. Export ready with SGS, ISO, and Halal certifications. MOQ 1×20ft with 5–10 kg packaging.",
        keywords: [
          "BBQ charcoal",
          "BBQ briquettes",
          "premium grilling charcoal",
          "coconut charcoal for BBQ",
          "BBQ charcoal export",
          "certified BBQ charcoal",
          "OEM BBQ charcoal"
        ],
      },
      zh: {
        title: "环保烧烤炭 | 优质产品目录",
        description: "用于烧烤的优质椰壳炭砖。热量均匀，燃烧时间长，灰分最少。非常适合餐厅、餐饮服务和家庭烧烤。准备出口，具有 SGS、ISO 和清真认证。最小订购量 1×20ft，包装 5–10 公斤。",
        keywords: [
          "烧烤炭",
          "烧烤炭砖",
          "优质烧烤炭",
          "椰壳烧烤炭",
          "烧烤炭出口",
          "认证烧烤炭",
          "OEM 烧烤炭"
        ],
      },
      ar: {
        title: "فحم صديق للبيئة للشواء | كتالوج المنتجات الفاخر",
        description: "فحم جوز الهند المضغوط الفاخر للشواء. حرارة متساوية، احتراق طويل، رماد قليل. مثالي للمطاعم وخدمات التموين والشواء المنزلي. جاهز للتصدير مع شهادات SGS و ISO وحلال. الحد الأدنى للطلب: حاوية 20 قدم مع عبوات 5–10 كجم.",
        keywords: [
          "فحم الشواء",
          "فحم الشواء المضغوط",
          "فحم الشواء الفاخر",
          "فحم جوز الهند للشواء",
          "تصدير فحم الشواء",
          "فحم الشواء المعتمد",
          "OEM فحم الشواء"
        ],
      },
    },
    oem: {
      id: {
        title: "Bentuk & Kemasan Arang Kustom | Katalog Produk OEM",
        description: "Layanan OEM dan private label lengkap untuk produk arang bermerek Anda. Bentuk, ukuran, dan kemasan kustom. Konsultasi desain dan branding. Sertifikasi SGS, ISO, dan Halal. MOQ fleksibel dengan opsi kotak Kraft & cetak.",
        keywords: [
          "OEM arang",
          "private label arang",
          "arang kustom",
          "kemasan arang kustom",
          "bentuk arang kustom",
          "OEM arang Indonesia",
          "private label arang kelapa"
        ],
      },
      en: {
        title: "Custom Charcoal Shapes & Packaging | OEM Product Catalog",
        description: "Complete OEM and private label services for your branded charcoal products. Custom shapes, sizes, and packaging. Design and branding consultation. SGS, ISO, and Halal certified. Flexible MOQ with Kraft & printed box options.",
        keywords: [
          "OEM charcoal",
          "private label charcoal",
          "custom charcoal",
          "custom charcoal packaging",
          "custom charcoal shapes",
          "OEM charcoal Indonesia",
          "private label coconut charcoal"
        ],
      },
      zh: {
        title: "定制炭形状和包装 | OEM 产品目录",
        description: "为您的品牌炭产品提供完整的 OEM 和私人标签服务。定制形状、尺寸和包装。设计和品牌咨询。SGS、ISO 和清真认证。灵活的最小订购量，提供牛皮纸和印刷盒选项。",
        keywords: [
          "OEM 炭",
          "私人标签炭",
          "定制炭",
          "定制炭包装",
          "定制炭形状",
          "印尼 OEM 炭",
          "私人标签椰壳炭"
        ],
      },
      ar: {
        title: "أشكال وتغليف فحم مخصص | كتالوج منتجات OEM",
        description: "خدمات OEM والعلامة الخاصة الكاملة لمنتجات الفحم الخاصة بعلامتك التجارية. أشكال وأحجام وتغليف مخصص. استشارة التصميم والعلامة التجارية. معتمد SGS و ISO وحلال. حد أدنى مرن للطلب مع خيارات صناديق كرافت ومطبوعة.",
        keywords: [
          "OEM فحم",
          "فحم العلامة الخاصة",
          "فحم مخصص",
          "تغليف فحم مخصص",
          "أشكال فحم مخصص",
          "OEM فحم إندونيسيا",
          "فحم جوز الهند العلامة الخاصة"
        ],
      },
    },
  };

  const currentMetadata = metadataMap[catalogProduct]?.[locale] || metadataMap[catalogProduct]?.en || {};
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return {
    ...currentMetadata,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}/products/${catalogProduct}`,
      languages: {
        id: `${baseUrl}/id/products/${catalogProduct}`,
        en: `${baseUrl}/en/products/${catalogProduct}`,
        zh: `${baseUrl}/zh/products/${catalogProduct}`,
        ar: `${baseUrl}/ar/products/${catalogProduct}`,
      },
    },
    openGraph: {
      ...currentMetadata.openGraph,
      title: currentMetadata.title as string,
      description: currentMetadata.description || undefined,
      url: `/${locale}/products/${catalogProduct}`,
      siteName: "Premium Coconut Charcoal Export",
      images: [
        {
          url: `/assets/images/product-${catalogProduct === 'hookah' ? '1' : catalogProduct === 'bbq' ? '2' : '3'}.png`,
          width: 1200,
          height: 630,
          alt: currentMetadata.title as string,
        },
      ],
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image",
      title: currentMetadata.title as string,
      description: currentMetadata.description || undefined,
      images: [`/assets/images/product-${catalogProduct === 'hookah' ? '1' : catalogProduct === 'bbq' ? '2' : '3'}.png`],
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
  };
}

export default async function CatalogProductPage({ params }: { params: Promise<{ locale: string; catalogProduct: string }> }) {
  const { catalogProduct } = await params;
  
  // Validate product type
  const validProductTypes: Array<'hookah' | 'bbq' | 'oem'> = ['hookah', 'bbq', 'oem'];
  if (!validProductTypes.includes(catalogProduct as 'hookah' | 'bbq' | 'oem')) {
    notFound();
  }

  const productType = catalogProduct as 'hookah' | 'bbq' | 'oem';

  return (
    <main>
      <ProductGallery productType={productType} />
      <DescriptGallery productType={productType} />
      <ContactCatalog productType={productType} />
    </main>
  );
} 