import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type en from "@/messages/en.json";
import { asLocale } from "@/lib/locale";
import { getSiteUrl } from "@/lib/site";

type MetaKey = keyof typeof en.meta;

export async function pageMetadata({
  locale,
  path,
  titleKey,
  descriptionKey,
  titleValues,
}: {
  locale: string;
  path: string;
  titleKey: MetaKey;
  descriptionKey: MetaKey;
  titleValues?: Record<string, string>;
}): Promise<Metadata> {
  const loc = asLocale(locale);
  const t = await getTranslations({ locale: loc, namespace: "meta" });
  const siteUrl = getSiteUrl();
  const normalized = path === "/" ? "" : path;
  const canonical = `/${locale}${normalized}`;

  const title = titleValues
    ? t(titleKey, titleValues)
    : t(titleKey);
  const description = t(descriptionKey);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `/en${normalized}`,
        fa: `/fa${normalized}`,
        "x-default": `/en${normalized}`,
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === "fa" ? "fa_IR" : "en_US",
      url: `${siteUrl}${canonical}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
