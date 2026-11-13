import ProductCard from "./ProductCard";
import { BRANDS, PRODUCTS } from "@/data/products";

// Presentational: used on the server (static HTML with all products)
// and inside the client wrapper (with filtering).
export default function ProductsView({ brand = "", onPick }) {
  const list = brand ? PRODUCTS.filter((p) => p.brand === brand) : PRODUCTS;
  const chips = ["", ...BRANDS];

  return (
    <>
      <div className="w ph mx-auto max-w-[1160px] px-5">
        <span className="eb">محصولات</span>
        <h1 style={{ fontSize: "clamp(28px,4vw,42px)", margin: "6px 0 8px" }}>
          سورترهای Hyundai MIB
        </h1>
        <p className="sub">
          برای دیدن گالری، فیلم و کاتالوگ هر مدل، روی کارت آن بزنید.
        </p>
        <div className="fl">
          {chips.map((b) => (
            <button
              key={b || "all"}
              type="button"
              className={brand === b ? "on" : undefined}
              aria-pressed={brand === b}
              onClick={onPick ? () => onPick(b) : undefined}
            >
              {b || "همه"}
            </button>
          ))}
        </div>
      </div>
      <div className="w mx-auto max-w-[1160px] px-5" style={{ paddingBottom: 70 }}>
        <div className="pg">
          {list.length ? (
            list.map((p, i) => <ProductCard key={p.slug} p={p} priority={i < 2} />)
          ) : (
            <div className="empty">
              هنوز محصولی از برند {brand} در سایت ثبت نشده است؛ برای استعلام با ما
              تماس بگیرید.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
