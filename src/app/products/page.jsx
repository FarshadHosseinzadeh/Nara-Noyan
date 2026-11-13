import { Suspense } from "react";
import ProductsView from "@/components/ProductsView";
import ProductsClient from "@/components/ProductsClient";
import JsonLd from "@/components/JsonLd";
import { PRODUCTS } from "@/data/products";
import { SITE_URL } from "@/data/site";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "محصولات؛ سورترهای ارزی – ریالی Hyundai MIB و SB",
  description:
    "مشاهده و مقایسه سورترهای ارزی – ریالی Hyundai MIB و SB با ۲، ۳ و ۵ خانه و قابلیت Fitness؛ استعلام قیمت از نارا نویان، نماینده انحصاری هیوندای در ایران.",
  path: "/products",
});

export default function ProductsPage() {
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "سورترهای ارزی – ریالی",
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE_URL}/products/${p.slug}`,
    })),
  };

  return (
    <div className="v" id="v-products">
      {/* fallback = full static list (SEO); client version adds ?brand= filtering */}
      <Suspense fallback={<ProductsView />}>
        <ProductsClient />
      </Suspense>
      <JsonLd data={list} />
      <JsonLd
        data={breadcrumbLd([
          { name: "خانه", path: "/" },
          { name: "محصولات", path: "/products" },
        ])}
      />
    </div>
  );
}
