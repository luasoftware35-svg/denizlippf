import type { MetadataRoute } from "next";
import { legalNav, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-08");
  return [
    {
      url: site.domain,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...legalNav.map((item) => ({
      url: `${site.domain}${item.href}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
