import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { Markdown } from "@/components/writing/markdown";
import { pageMetadata } from "@/lib/metadata";
import { asLocale } from "@/lib/locale";
import { formatDate } from "@/lib/utils";
import { getArticle, getArticles } from "@/lib/writing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getArticles(locale).map((article) => ({
      locale,
      slug: article.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(asLocale(locale), slug);
  if (!article) {
    return {};
  }
  return pageMetadata({
    locale,
    path: `/writing/${slug}`,
    titleKey: "articleTitle",
    descriptionKey: "writingDescription",
    titleValues: { title: article.title },
  });
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(asLocale(locale));
  const article = getArticle(asLocale(locale), slug);
  if (!article) {
    notFound();
  }
  const t = await getTranslations("writing");

  return (
    <Container className="py-16 sm:py-20">
      <p className="text-sm text-fg-muted">
        <Link href="/writing" className="hover:underline">
          {t("allTitle")}
        </Link>
      </p>
      <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {article.title}
      </h1>
      <p className="mt-4 text-sm text-fg-muted">
        {article.category}
        <span className="mx-2" aria-hidden>
          ·
        </span>
        <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
      </p>
      {article.placeholder ? (
        <p className="mt-3 text-sm text-fg-muted">{t("placeholder")}</p>
      ) : null}
      {article.tags.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-border px-2 py-0.5 text-xs text-fg-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-10">
        <Markdown content={article.content} />
      </div>
    </Container>
  );
}
