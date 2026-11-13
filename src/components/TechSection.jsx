// بخش «فناوری» — فعلاً در صفحه اصلی نمایش داده نمی‌شود.
// برای بازگرداندن: در src/app/page.jsx مقدار SHOW_TECH را true کنید.
export default function TechSection() {
  return (
    <section style={{ paddingTop: 30 }}>
      <div className="w r mx-auto max-w-[1160px] px-5">
        <span className="eb">فناوری</span>
        <h2>دستگاه‌ها چه کارهایی بلدند؟</h2>
        <div className="tech">
          <span>تشخیص نوری کاراکتر (OCR)</span>
          <span>اسکناس پلاستیکی</span>
          <span>مدیریت کوپن</span>
          <span>ارتقای نرم‌افزاری</span>
        </div>
      </div>
    </section>
  );
}
