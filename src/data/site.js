export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

export const SITE = {
  name: "نارا نویان",
  fullName: "شرکت بازرگانی نارا نویان",
  tagline: "سورترهای هیوندای MIB",
  description:
    "نارا نویان، نماینده انحصاری سورترهای ارزی – ریالی Hyundai MIB در ایران. مشاهده مدل‌ها، مشاوره انتخاب دستگاه، نصب، آموزش و خدمات پس از فروش.",
  phoneLandline: "021 8845 1026",
  phoneLandlineTel: "+982188451026",
  phoneMobile: "0912 937 4025",
  phoneMobileTel: "+989129374025",
  whatsapp: "https://wa.me/989129374025",
  telegram: "https://t.me/+989129374025",
  address:
    "میدان ولیعصر، خیابان دمشق، خیابان مظفر، پلاک ۱۱۸ طبقه ۲ واحد ۲۱",
  city: "تهران",
  geo: { lat: 35.7095835820969, lng: 51.40322268955023 },
  mapsLink: "https://maps.app.goo.gl/ZBimQHWQHZtXhWnh8",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6479.352514971287!2d51.40322268955023!3d35.7095835820969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e019a4ed5499d%3A0x7b5e687b60ef2f86!2z2KjYp9iy2LHar9in2YbbjCDZhtin2LHYpyDZhtmI24zYp9mG!5e0!3m2!1sen!2sde!4v1794557641931!5m2!1sen!2sde",
};

export const NAV = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "محصولات" },
  { href: "/services", label: "خدمات" },
  { href: "/faq", label: "سوالات متداول" },
  { href: "/contact", label: "تماس با ما" },
];
