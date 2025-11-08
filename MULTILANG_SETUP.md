# Multi Language Setup - SEO Friendly

## Struktur URL SEO-Friendly

Website ini menggunakan struktur URL dengan locale prefix untuk SEO yang optimal:

- **Indonesia (Default)**: `/id/` atau `/id/about`, `/id/products`, dll
- **English**: `/en/` atau `/en/about`, `/en/products`, dll  
- **Chinese**: `/zh/` atau `/zh/about`, `/zh/products`, dll

## Fitur SEO yang Diimplementasikan

### 1. Hreflang Tags
- Setiap halaman memiliki hreflang alternates untuk semua bahasa
- Membantu search engine memahami versi bahasa yang tersedia
- Mencegah duplicate content issues

### 2. Metadata per Bahasa
- Title, description, dan keywords disesuaikan per bahasa
- Open Graph tags dengan locale yang benar (id_ID, en_US, zh_CN)
- Twitter Card dengan konten yang sesuai bahasa

### 3. Canonical URLs
- Setiap halaman memiliki canonical URL dengan locale
- Mencegah duplicate content

### 4. Language Switcher
- Component untuk switch bahasa dengan mempertahankan path
- URL structure tetap konsisten saat switch bahasa

## File Structure

```
app/
├── [locale]/           # Dynamic locale routing
│   ├── layout.tsx     # Layout dengan NextIntlClientProvider
│   ├── page.tsx        # Home page
│   ├── about/         # About page (perlu dipindahkan)
│   ├── products/      # Products page (perlu dipindahkan)
│   └── ...
├── layout.tsx          # Root layout (redirect ke default locale)
└── page.tsx           # Root page (redirect ke default locale)

messages/
├── id.json            # Indonesian translations
├── en.json            # English translations
└── zh.json            # Chinese translations

components/
├── ui/
│   └── LanguageSwitcher.tsx  # Language switcher component
└── layout/
    └── Navbar.tsx            # Navbar dengan translations
```

## Cara Menggunakan Translations

### Di Server Components
```tsx
import { getTranslations } from 'next-intl/server';

export default async function MyComponent() {
  const t = await getTranslations('namespace');
  return <h1>{t('key')}</h1>;
}
```

### Di Client Components
```tsx
"use client";
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('namespace');
  return <h1>{t('key')}</h1>;
}
```

## Next Steps

1. **Pindahkan folder pages ke [locale]**: 
   - `app/about/` → `app/[locale]/about/`
   - `app/products/` → `app/[locale]/products/`
   - `app/factor-quality/` → `app/[locale]/factor-quality/`
   - `app/export-shipping/` → `app/[locale]/export-shipping/`

2. **Update komponen lain untuk menggunakan translations**:
   - OurStory
   - Product
   - ClientSays
   - Certificates
   - Footer

3. **Update translation files** dengan konten yang lebih lengkap

4. **Setup environment variable**:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

## Testing

1. Test URL structure:
   - `/id/` - Should show Indonesian content
   - `/en/` - Should show English content
   - `/zh/` - Should show Chinese content

2. Test language switcher:
   - Switch bahasa dan pastikan path tetap sama
   - Pastikan konten berubah sesuai bahasa

3. Test SEO:
   - Check hreflang tags di HTML
   - Check canonical URLs
   - Check meta tags per bahasa

