import { PRODUCTS } from "@/data/products";
import { SITE_URL } from "@/data/site";

export default function sitemap() {
  const now = new Date();
  const page = (path, priority, changeFrequency = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/products", 0.9, "weekly"),
    ...PRODUCTS.map((p) => page(`/products/${p.slug}`, 0.8)),
    page("/services", 0.7),
    page("/faq", 0.6),
    page("/contact", 0.7),
  ];
}
