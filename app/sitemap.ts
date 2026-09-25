import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";
import { projects } from "@/lib/projects";
import { getArticles } from "@/lib/writing";

const staticPaths = ["", "/about", "/projects", "/writing", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${siteUrl}/${locale}${path}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            en: `${siteUrl}/en${path}`,
            fa: `${siteUrl}/fa${path}`,
          },
        },
      });
    }

    for (const project of projects) {
      const path = `/projects/${project.slug}`;
      entries.push({
        url: `${siteUrl}/${locale}${path}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            en: `${siteUrl}/en${path}`,
            fa: `${siteUrl}/fa${path}`,
          },
        },
      });
    }

    for (const article of getArticles(locale)) {
      const path = `/writing/${article.slug}`;
      entries.push({
        url: `${siteUrl}/${locale}${path}`,
        lastModified: new Date(article.date),
      });
    }
  }

  return entries;
}
