# سایت نارا نویان — Next.js + Tailwind CSS

نسخه Next.js (App Router) از همان طرح و ظاهر نسخه HTML/Tailwind. بلاگ و ادمین‌پنل فعلاً حذف شده‌اند.

## راه‌اندازی

```bash
npm install
cp .env.example .env.local      # سپس مقدارها را پر کنید
npm run dev                     # http://localhost:3000
```

ساخت و اجرای نسخه نهایی:

```bash
npm run build
npm start
```

نیازمند Node.js 18.18 یا بالاتر (پیشنهاد: 20+).

## تنظیمات ضروری قبل از انتشار (`.env.local` یا Environment Variables هاست)

| متغیر | توضیح |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | آدرس نهایی سایت، مثل `https://your-domain.ir` (برای canonical، sitemap، OG و schema) |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` | مقصد پیام‌های فرم تماس (ربات از BotFather). بدون این دو، در حالت production فرم خطا می‌دهد تا پیامی بی‌صدا گم نشود |
| `GOOGLE_SITE_VERIFICATION` | اختیاری، برای Search Console |

## ساختار

```
src/app/                 صفحه‌ها: / ، /products ، /products/[slug] ، /services ، /faq ، /contact
src/app/api/contact      ارسال فرم تماس
src/app/globals.css      همان CSS اختصاصی شما + Tailwind (ظاهر بدون تغییر)
src/components/          Header, Footer, HeroSlider, ProductCard, ContactForm, ...
src/data/                محصولات، سوالات متداول، خدمات، اطلاعات تماس (برای ویرایش محتوا)
public/images/           تصاویر (اگر عکسی را عوض کردید، نام فایل را هم عوض کنید؛ کش یک‌ساله دارد)
```

- محصول جدید: یک آیتم به `src/data/products.js` اضافه کنید؛ صفحه، sitemap و فرم خودکار ساخته می‌شوند.
- بخش «فناوری» مثل قبل مخفی است؛ برای نمایش `SHOW_TECH` را در `src/app/page.jsx` برابر `true` کنید.

## سئو و سرعت (اعمال‌شده)

- همه صفحه‌ها Static/SSG هستند؛ HTML کامل برای کراولر (حتی لیست محصولات)
- `title` و `description` و canonical و Open Graph و Twitter برای هر صفحه، `lang="fa-IR"` و `dir="rtl"`
- Schema.org: Organization + WebSite (همه صفحه‌ها)، Product، BreadcrumbList، ItemList، FAQPage
- `sitemap.xml`، `robots.txt`، `manifest.webmanifest`، favicon، apple-icon، تصویر OG
- هر صفحه فقط یک `h1`؛ لینک‌ها `<a>` واقعی (next/link)؛ صفحه 404 واقعی با noindex
- `next/image` (AVIF/WebP، ابعاد مشخص، بدون CLS، preload تصویر اول)، `next/font` برای وزیرمتن (self-host، بدون درخواست به Google Fonts)
- جاوااسکریپت کلاینت فقط برای هدر، اسلایدر، فیلتر محصولات و فرم؛ بقیه صفحه‌ها Server Component
- هدرهای امنیتی و کش طولانی تصاویر

## کارهای دستی بعد از انتشار

1. دامنه را در Google Search Console ثبت و `https://your-domain.ir/sitemap.xml` را ارسال کنید.
2. متن‌ها/تصاویر «جای عکس» و متن لورم برندها را با محتوای واقعی عوض کنید (محتوای placeholder برای سئو ضعیف است).
3. برای هر محصول، متن توضیحات و مشخصات فنی بیشتر در `products.js` اضافه کنید.
4. لوگوی با کیفیت بالاتر (SVG یا PNG بزرگ‌تر) برای OG/آیکون در صورت امکان.

## انتشار

- Vercel یا Netlify: ریپو را وصل کنید، Build command: `npm run build`، و Environment Variables را وارد کنید (Netlify، Next.js را خودکار تشخیص می‌دهد).
- سرور شخصی: `npm run build && npm start` (پشت Nginx/PM2).
