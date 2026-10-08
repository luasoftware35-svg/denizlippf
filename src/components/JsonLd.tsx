import { faqs, site } from "@/data/site";
import { businessId, seo, websiteId } from "@/lib/seo";

export function JsonLd() {
  const local = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "AutomotiveBusiness"],
    "@id": businessId,
    name: site.legalName,
    legalName: site.legalName,
    alternateName: [
      "Inside",
      "INSIDE",
      "Inside PPF-PDR",
      "Denizli PPF",
      "Denizli Göçük",
      "Denizli göçük düzeltme",
    ],
    url: site.domain,
    telephone: site.phoneTel,
    email: site.email,
    logo: `${site.domain}/images/logo.png`,
    image: [
      `${site.domain}/images/frame-inside-hero.jpg`,
      `${site.domain}/images/frame-inside.jpg`,
      `${site.domain}/images/frame-propel.jpg`,
      `${site.domain}/images/frame-shop.jpg`,
      `${site.domain}/images/frame-pdr.jpg`,
      `${site.domain}/images/frame-ppf.jpg`,
    ],
    description: seo.description,
    slogan: site.tagline,
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
      { "@type": "City", name: "Denizli" },
      { "@type": "AdministrativeArea", name: "Pamukkale" },
      { "@type": "AdministrativeArea", name: "Merkezefendi" },
      { "@type": "AdministrativeArea", name: "Servergazi" },
      { "@type": "AdministrativeArea", name: "Acıpayam" },
      { "@type": "AdministrativeArea", name: "Çivril" },
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
    currenciesAccepted: "TRY",
    paymentAccepted: "Cash, Credit Card",
    foundingDate: String(site.founded),
    sameAs: [site.maps, site.instagramUrl],
    identifier: {
      "@type": "PropertyValue",
      propertyID: "google_kgmid",
      value: "/g/11d_ynn_bq",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneTel,
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish"],
    },
    knowsAbout: [
      "Denizli göçük düzeltme",
      "Boyasız göçük düzeltme (PDR)",
      "Denizli PPF kaplama",
      "Propel 190 mikron PPF",
      "Seramik kaplama",
    ],
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
            areaServed: { "@type": "City", name: "Denizli" },
            provider: { "@id": businessId },
            url: `${site.domain}/denizli-gocuk`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Denizli PPF Kaplama",
            serviceType: "Propel 190 mikron boya koruma filmi (PPF)",
            areaServed: { "@type": "City", name: "Denizli" },
            provider: { "@id": businessId },
            url: `${site.domain}/denizli-ppf`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Seramik kaplama",
            serviceType: "Seramik kaplama",
            areaServed: { "@type": "City", name: "Denizli" },
            provider: { "@id": businessId },
          },
        },
      ],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: site.domain,
    name: "Denizli Göçük ve PPF | Inside",
    alternateName: ["denizlippf.com", "Inside Denizli"],
    inLanguage: "tr-TR",
    publisher: { "@id": businessId },
  };

  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Denizli Göçük ve PPF",
        item: site.domain,
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
