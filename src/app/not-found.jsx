import Link from "next/link";

export const metadata = {
  title: "صفحه پیدا نشد",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="v nf" id="v-404">
      <div style={{ font: "800 96px/1 system-ui", color: "var(--acc)" }}>404</div>
      <h2>صفحه پیدا نشد</h2>
      <p className="sub" style={{ margin: "0 auto 18px" }}>
        آدرس اشتباه است یا صفحه جابه‌جا شده.
      </p>
      <Link className="btn" href="/">
        بازگشت به خانه
      </Link>
    </div>
  );
}
