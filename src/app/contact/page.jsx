import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/data/site";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "تماس با ما",
  description:
    "تماس با نارا نویان: آدرس در میدان ولیعصر تهران، تلفن، واتساپ و تلگرام. برای مشاوره و استعلام قیمت سورتر ارزی – ریالی هیوندای پیام بگذارید.",
  path: "/contact",
});

export default function ContactPage() {
  const ext = { target: "_blank", rel: "noopener noreferrer" };

  return (
    <div className="v" id="v-contact">
      <div className="w ph mx-auto max-w-[1160px] px-5" style={{ paddingBottom: 70 }}>
        <span className="eb">تماس با ما</span>
        <h1 style={{ fontSize: "clamp(28px,4vw,42px)", margin: "6px 0 8px" }}>
          سلام! چطور می‌توانیم کمکتان کنیم؟
        </h1>
        <p className="sub">پیام بگذارید یا زنگ بزنید؛ معمولاً همان روز جواب می‌دهیم.</p>

        <div className="ct">
          <div>
            <ContactForm />
          </div>
          <div className="mp">
            <div className="map">
              <iframe
                src={SITE.mapsEmbed}
                title="موقعیت نارا نویان روی نقشه"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
              <a className="mlink" href={SITE.mapsLink} {...ext}>
                مشاهده در گوگل‌مپ ↗
              </a>
            </div>
            <div className="info">
              <a className="row" href={SITE.mapsLink} {...ext}>
                <span className="ic">
                  <Icon name="pin" />
                </span>
                <span>
                  <small>آدرس</small>
                  <b>{SITE.address}</b>
                </span>
              </a>
              <a className="row" href={`tel:${SITE.phoneLandlineTel}`}>
                <span className="ic">
                  <Icon name="ph" />
                </span>
                <span>
                  <small>تلفن ثابت</small>
                  <b className="nm">{SITE.phoneLandline}</b>
                </span>
              </a>
              <a className="row" href={`tel:${SITE.phoneMobileTel}`}>
                <span className="ic">
                  <Icon name="ph" />
                </span>
                <span>
                  <small>تلفن همراه</small>
                  <b className="nm">{SITE.phoneMobile}</b>
                </span>
              </a>
              <div className="wt">
                <a className="row wa" href={SITE.whatsapp} {...ext}>
                  <span className="ic">
                    <Image src="/images/wa.webp" alt="" width={120} height={120} sizes="28px" />
                  </span>
                  <span>
                    <small>گفتگوی سریع</small>
                    <b>واتساپ</b>
                  </span>
                </a>
                <a className="row tgb" href={SITE.telegram} aria-label="تلگرام" {...ext}>
                  <span className="ic">
                    <Icon name="tg" />
                  </span>
                  <span>
                    <small>گفتگوی سریع</small>
                    <b>تلگرام</b>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JsonLd
        data={breadcrumbLd([
          { name: "خانه", path: "/" },
          { name: "تماس با ما", path: "/contact" },
        ])}
      />
    </div>
  );
}
