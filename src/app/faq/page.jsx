import Link from "next/link";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { FAQ } from "@/data/faq";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "سوالات متداول درباره سورتر ارزی – ریالی",
  description:
    "پاسخ پرسش‌های رایج درباره سورتر ارزی – ریالی: تفاوت مدل‌های ۲، ۳ و ۵ خانه، سورتر Fitness، نصب و آموزش، خدمات پس از فروش و استعلام قیمت.",
  path: "/faq",
});

export default function FaqPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="v" id="v-faq">
      <div className="w ph mx-auto max-w-[1160px] px-5" style={{ paddingBottom: 70 }}>
        <span className="eb">سوالات متداول</span>
        <h1 style={{ fontSize: "clamp(28px,4vw,42px)", margin: "6px 0 8px" }}>
          پرسش‌هایی که زیاد می‌شنویم
        </h1>
        <p className="sub">پاسخ کوتاه به رایج‌ترین سؤال‌ها درباره سورترها و خدمات ما.</p>
        <FaqList />
        <div className="band r" style={{ margin: "56px 0 0" }}>
          <div>
            <h2>پاسخ سؤالتان را پیدا نکردید؟</h2>
            <p>بپرسید؛ کارشناسان ما پاسخگو هستند.</p>
          </div>
          <Link className="btn" href="/contact">
            تماس با ما
          </Link>
        </div>
      </div>
      <JsonLd data={faqLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "خانه", path: "/" },
          { name: "سوالات متداول", path: "/faq" },
        ])}
      />
    </div>
  );
}
