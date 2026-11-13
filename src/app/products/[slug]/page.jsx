import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { PRODUCTS, getProduct } from "@/data/products";
import { SITE_URL } from "@/data/site";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return pageMetadata({
    title: `${p.name} – ${p.type}`,
    description: `${p.name} (${p.type}) از نارا نویان، نماینده انحصاری Hyundai در ایران. ${p.desc} برای استعلام قیمت و دریافت کاتالوگ تماس بگیرید.`,
    path: `/products/${p.slug}`,
  });
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.desc,
    category: p.type,
    image: [`${SITE_URL}${p.image}`],
    url: `${SITE_URL}/products/${p.slug}`,
    brand: { "@type": "Brand", name: p.brand },
  };

  return (
    <div className="v" id="v-product">
      <div className="w ph mx-auto max-w-[1160px] px-5" style={{ paddingBottom: 70 }}>
        <span className="eb">
          <Link href="/products">محصولات</Link>
        </span>
        <div className="pd">
          <div className="dgb">
            <div className="art">
              <Image
                src={p.image}
                alt={`${p.name} – ${p.type}`}
                width={520}
                height={520}
                sizes="(max-width: 900px) 90vw, 400px"
                priority
              />
            </div>
            <div>
              <span className="tag">{p.type}</span>
              <h1
                style={{
                  fontSize: 22,
                  direction: "ltr",
                  textAlign: "right",
                  lineHeight: 2,
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                <bdi>{p.name}</bdi>
              </h1>
              <p style={{ color: "var(--mut)", margin: "6px 0" }}>{p.desc}</p>
              <div className="tg">
                <i>{p.brand}</i>
              </div>
              <h4>فیلم معرفی</h4>
              <div className="vid">
                <div>
                  <i></i>پخش فیلم
                </div>
              </div>
              <div className="cta" style={{ marginTop: 20 }}>
                <Link className="btn" href={`/contact?product=${p.slug}`}>
                  درخواست استعلام
                </Link>
                <Link className="btn g" href="/contact">
                  دانلود کاتالوگ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JsonLd data={product} />
      <JsonLd
        data={breadcrumbLd([
          { name: "خانه", path: "/" },
          { name: "محصولات", path: "/products" },
          { name: p.name, path: `/products/${p.slug}` },
        ])}
      />
    </div>
  );
}
