import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SERVICES, STEPS } from "@/data/services";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "خدمات؛ نصب، آموزش، ارتقا و تعمیر سورتر",
  description:
    "خدمات نارا نویان: مشاوره انتخاب دستگاه، نصب و راه‌اندازی در محل، آموزش اپراتور، ارتقای نرم‌افزار، تعمیر و نگهداری و تأمین قطعات یدکی سورترهای هیوندای.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="v" id="v-services">
      <div className="w ph mx-auto max-w-[1160px] px-5">
        <span className="eb">خدمات</span>
        <h1 style={{ fontSize: "clamp(28px,4vw,42px)", margin: "6px 0 8px" }}>
          بعد از خرید هم کنارتان هستیم
        </h1>
        <p className="sub">از انتخاب دستگاه تا راه‌اندازی و ارتقا، همراه شما هستیم.</p>

        <div className="sv r">
          {SERVICES.map((s) => (
            <div key={s.n}>
              <span>
                <small className="n">{s.n}</small>
                <b>{s.t}</b>
                <p>{s.d}</p>
              </span>
              <i className="gp2">جای عکس</i>
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: 56 }}>روند همکاری</h2>
        <div className="st r">
          {STEPS.map((s) => (
            <div key={s.t}>
              <b>{s.t}</b>
              <p className="sub">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="band r" style={{ margin: "56px 0 70px" }}>
          <div>
            <h2>سؤال فنی دارید؟</h2>
            <p>کارشناسان ما پاسخگو هستند.</p>
          </div>
          <Link className="btn" href="/contact">
            تماس با ما
          </Link>
        </div>
      </div>
      <JsonLd
        data={breadcrumbLd([
          { name: "خانه", path: "/" },
          { name: "خدمات", path: "/services" },
        ])}
      />
    </div>
  );
}
