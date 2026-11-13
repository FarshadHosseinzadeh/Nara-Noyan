"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ProductsView from "./ProductsView";
import { BRANDS } from "@/data/products";

export default function ProductsClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const raw = sp.get("brand") || "";
  const brand = BRANDS.includes(raw) ? raw : "";

  const pick = (b) =>
    router.replace(b ? `/products?brand=${encodeURIComponent(b)}` : "/products", {
      scroll: false,
    });

  return <ProductsView brand={brand} onPick={pick} />;
}
