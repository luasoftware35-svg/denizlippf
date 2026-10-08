import type { MetadataRoute } from "next";
import { landings } from "@/data/landings";
import { legalNav, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-08");
  return [
    {
      url: site.domain,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${site.domain}/images/shot-shop.jpg`,
        `${site.domain}/images/shot-detail.jpg`,
        `${site.domain}/images/shot-wrap.jpg`,
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
