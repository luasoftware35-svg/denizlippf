import { faqs, site } from "@/data/site";

export function JsonLd() {
  const local = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: site.legalName,
    legalName: site.legalName,
    alternateName: ["Inside", "İnside", "INSIDE", "Inside PPF-PDR", "Denizli PPF", "Denizli Göçük"],
    url: site.domain,
    telephone: site.phoneTel,
    email: site.email,
    image: [
      `${site.domain}/images/shop.jpg`,
      `${site.domain}/images/detail.jpg`,
      `${site.domain}/images/bmw.jpg`,
    ],
    description:
      "Inside, 2017’den beri Denizli’de boyasız göçük düzeltme (PDR), Propel 190 mikron PPF boya koruma filmi ve seramik kaplama. 7 yıl garanti.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.maps,
    areaServed: [
      "Denizli",
      "Pamukkale",
      "Merkezefendi",
      "Servergazi",
      "Acıpayam",
      "Çivril",
    ],
    openingHours: site.openingHours,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:30",
    },
    priceRange: "$$",
    foundingDate: String(site.founded),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(site.rating),
      reviewCount: String(site.reviewCount),
      bestRating: "5",
    },
    sameAs: [site.maps, site.instagramUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Denizli göçük ve PPF hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Denizli Göçük Düzeltme",
            serviceType: "Boyasız göçük düzeltme (PDR)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Denizli PPF Kaplama",
            serviceType: "Propel 190 mikron boya koruma filmi (PPF)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Seramik kaplama",
            serviceType: "Seramik kaplama",
          },
        },
      ],
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(local) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
