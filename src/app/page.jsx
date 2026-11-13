import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import FaqList from "@/components/FaqList";
import TechSection from "@/components/TechSection";
import { PRODUCTS } from "@/data/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  description:
    "نارا نویان، نماینده انحصاری سورترهای ارزی – ریالی Hyundai MIB در ایران. مشاهده مدل‌ها، مشاوره انتخاب دستگاه، نصب، آموزش و خدمات پس از فروش.",
  path: "/",
});

const SHOW_TECH = false; // بخش «فناوری» فعلاً مخفی است

const USES = [
  "بانک‌ها",
  "خزانه بانک",
  "مراکز نقدی و حمل پول",
  "مراکز تجاری",
  "صرافی‌ها",
  "فروشگاه‌ها",
];

const OTHER_BRANDS = ["SB", "Hitachi", "iHunter"];
const LOREM = "لورم ایپسوم متن ساختگی برای نمایش چیدمان.";

export default function HomePage() {
  const count = (b) => PRODUCTS.filter((p) => p.brand === b).length;

  return (
    <div className="v" id="v-home">
      <div className="hero">
        <div className="w mx-auto max-w-[1160px] px-5">
          <div>
            <span className="bd">نماینده انحصاری سورترهای ارزی – ریالی Hyundai در ایران</span>
            <h1>
              اسکناس‌هایتان را <em>با خیال راحت</em> بشمارید و جدا کنید
            </h1>
            <p className="lead">
              ما نارا نویان هستیم؛ نماینده سورترهای هیوندای MIB در ایران. نمی‌دانید
              کدام مدل به کار شما می‌آید؟ بپرسید، با کمال میل راهنمایی می‌کنیم.
            </p>
            <div className="cta">
              <Link className="btn" href="/products">
                مشاهده محصولات
              </Link>
              <Link className="btn g" href="/contact">
                با ما صحبت کنید
              </Link>
            </div>
          </div>
          <HeroSlider />
        </div>
      </div>

      {SHOW_TECH && <TechSection />}

      <section style={{ paddingTop: 56 }}>
        <div className="w mx-auto max-w-[1160px] px-5">
          <div className="r">
            <span className="eb">برندها</span>
            <h2>برندهایی که عرضه می‌کنیم</h2>
          </div>
          <div className="bento" id="bn">
            <Link className="bc big r" href="/products?brand=Hyundai">
              <div className="bi">
                <Image
                  src="/images/m11.webp"
                  alt="سورتر Hyundai MIB-11"
                  width={520}
                  height={520}
                  sizes="(max-width: 900px) 90vw, 400px"
                />
              </div>
              <div className="bt">
                <span className="tag">نماینده انحصاری در ایران</span>
                <h3>سورترهای ارزی – ریالی Hyundai</h3>
                <p>مدل‌های Hyundai MIB را از نزدیک ببینید و مقایسه کنید.</p>
                <span className="more">مشاهده مدل‌های Hyundai ←</span>
              </div>
            </Link>
            {OTHER_BRANDS.map((b) => (
              <Link key={b} className="bc sm r" href={`/products?brand=${b}`}>
                <div className="bi gp3">جای عکس</div>
                <div className="bt">
                  <h3>
                    <bdi>{b}</bdi>
                  </h3>
                  {count(b) ? <small>{count(b)} مدل</small> : null}
                  <p>{LOREM}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="cta">
            <Link className="btn g" href="/products">
              مشاهده همه محصولات ←
            </Link>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 10 }}>
        <div className="w r mx-auto max-w-[1160px] px-5">
          <span className="eb">کاربردها</span>
          <h2>این دستگاه‌ها کجا کار می‌کنند؟</h2>
          <div className="ig">
            {USES.map((u) => (
              <div key={u}>
                <i>جای عکس</i>
                <b>{u}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq-s" style={{ paddingTop: 10 }}>
        <div className="w r mx-auto max-w-[1160px] px-5">
          <span className="eb">سوالات متداول</span>
          <h2>پرسش‌هایی که زیاد می‌شنویم</h2>
          <FaqList />
        </div>
      </section>

      <section style={{ paddingTop: 10 }}>
        <div className="w r mx-auto max-w-[1160px] px-5">
          <div className="band">
            <div>
              <h2>انتخاب سخت است؟ کمکتان می‌کنیم</h2>
              <p>نیازتان را برایمان بنویسید یا زنگ بزنید؛ مناسب‌ترین مدل را با هم پیدا می‌کنیم.</p>
            </div>
            <Link className="btn" href="/contact">
              بیایید حرف بزنیم
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
