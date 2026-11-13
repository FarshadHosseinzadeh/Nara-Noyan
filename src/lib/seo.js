import { SITE, SITE_URL } from "@/data/site";

export function pageMetadata({ title, description, path = "/", image = "/og.png" }) {
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} | ${SITE.tagline}`;
  const meta = {
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "fa_IR",
      siteName: SITE.fullName,
      title: fullTitle,
      description,
      url: path,
      images: [{ url: image, width: 1200, height: 630, alt: SITE.fullName }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
  if (title) meta.title = title;
  return meta;
}

export function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function organizationLd() {
  const orgId = `${SITE_URL}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.fullName,
        alternateName: ["نارا نویان", "Nara Noyan", "NN.Co"],
        url: SITE_URL,
        logo: `${SITE_URL}/icons/icon-512.png`,
        description: SITE.description,
        telephone: SITE.phoneLandlineTel,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address,
          addressLocality: SITE.city,
          addressCountry: "IR",
        },
        location: {
          "@type": "Place",
          name: SITE.fullName,
          geo: {
            "@type": "GeoCoordinates",
            latitude: SITE.geo.lat,
            longitude: SITE.geo.lng,
          },
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE.phoneMobileTel,
            contactType: "sales",
            areaServed: "IR",
            availableLanguage: ["fa"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE.fullName,
        inLanguage: "fa-IR",
        publisher: { "@id": orgId },
      },
    ],
  };
}
