import type { MetadataRoute } from "next";
import { landings } from "@/data/landings";
import { legalNav, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-09");
  return [
    {
      url: site.domain,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${site.domain}/images/frame-inside-hero.jpg`,
        `${site.domain}/images/frame-inside.jpg`,
        `${site.domain}/images/frame-propel.jpg`,
        `${site.domain}/images/frame-pdr.jpg`,
        `${site.domain}/images/frame-ppf.jpg`,
      ],
    },
    ...landings.map((page) => ({
      url: `${site.domain}${page.path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [`${site.domain}${page.image}`],
    })),
    ...legalNav.map((item) => ({
      url: `${site.domain}${item.href}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
