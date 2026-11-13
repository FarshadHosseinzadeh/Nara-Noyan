export const BRANDS = ["Hyundai", "Hitachi", "SB", "iHunter"];

export const PRODUCTS = [
  {
    slug: "hyundai-mib-10",
    brand: "Hyundai",
    image: "/images/m10.webp",
    name: "Hyundai MIB-10",
    type: "سورتر ارزی – ریالی",
    desc: "جداسازی ارز و ریال در یک نوبت، با ۱۳ ارز پیش‌فرض.",
    tags: ["۲ خانه", "۱۳ ارز پیش‌فرض"],
  },
  {
    slug: "hyundai-mib-11",
    brand: "Hyundai",
    image: "/images/m11.webp",
    name: "Hyundai MIB-11 (1+1)",
    type: "سورتر Fitness",
    desc: "دو خانه با قابلیت سورتینگ و ارزیابی کیفیت اسکناس.",
    tags: ["۲ خانه", "فیتنس"],
  },
  {
    slug: "sb-3000",
    brand: "SB",
    image: "/images/s3.webp",
    name: "SB-3000 (2+1)",
    type: "سورتر Fitness",
    desc: "سورتر فیتنس ۳ خانه.",
    tags: ["۳ خانه", "فیتنس"],
  },
  {
    slug: "sb-5000",
    brand: "SB",
    image: "/images/s5.webp",
    name: "SB-5000 (Full 5)",
    type: "سورتر Fitness کامل",
    desc: "سورتر فیتنس ۵ خانه برای مراکز با حجم کار بالا.",
    tags: ["۵ خانه", "فیتنس"],
  },
];

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
