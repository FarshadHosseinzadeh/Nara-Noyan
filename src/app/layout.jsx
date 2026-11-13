import "./globals.css";
import { Vazirmatn } from "next/font/google";
import Sprite from "@/components/Sprite";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalEffects from "@/components/GlobalEffects";
import JsonLd from "@/components/JsonLd";
import { SITE, SITE_URL } from "@/data/site";
import { organizationLd } from "@/lib/seo";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazir",
});

const fullTitle = `${SITE.name} | ${SITE.tagline}`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: fullTitle, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: SITE.fullName,
    title: fullTitle,
    description: SITE.description,
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: SITE.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1c241f" },
  ],
};

// runs before first paint: theme (no flash) + "js" flag for scroll-reveal
const INIT = `(function(){var d=document.documentElement;d.classList.add("js");var t;try{t=localStorage.getItem("theme")}catch(e){}if(t!=="dark"&&t!=="light")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";d.setAttribute("data-theme",t)})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl" className={vazir.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: INIT }} />
      </head>
      <body>
        <Sprite />
        <Header />
        <main>{children}</main>
        <Footer />
        <GlobalEffects />
        <JsonLd data={organizationLd()} />
      </body>
    </html>
  );
}
