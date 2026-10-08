import { site } from "@/data/site";
import { businessId } from "@/lib/seo";

type Landing = {
  path: string;
  title: string;
  h1: string;
  description: string;
  faqs: readonly { q: string; a: string }[];
};

export function ServiceJsonLd({ page }: { page: Landing }) {
  const url = `${site.domain}${page.path}`;
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    description: page.description,
    url,
    serviceType: page.h1,
    areaServed: { "@type": "City", name: "Denizli" },
    provider: { "@id": businessId },
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
      {
        "@type": "ListItem",
        position: 2,
        name: page.h1,
        item: url,
      },
    ],
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
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
