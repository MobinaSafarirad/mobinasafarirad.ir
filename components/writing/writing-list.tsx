import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { getArticles } from "@/lib/writing";
import { formatDate } from "@/lib/utils";

type Props = {
  featured?: boolean;
};

export async function WritingList({ featured = false }: Props) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("writing");
  const articles = getArticles(locale);
  const list = featured ? articles.slice(0, 3) : articles;

  return (
    <Section id="writing">
      <Container>
        <SectionHeading
          title={featured ? t("title") : t("allTitle")}
          intro={t("intro")}
          action={
            featured ? (
              <Link
                href="/writing"
                className="text-sm font-medium hover:underline"
              >
                {t("viewAll")}
              </Link>
            ) : undefined
          }
        />
        <ul className="divide-y divide-border border-y border-border">
          {list.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/writing/${article.slug}`}
                className="group flex flex-col gap-2 py-5 transition-colors duration-200 hover:bg-bg-elevated sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:-mx-4 sm:px-4 sm:rounded-lg"
              >
                <div>
                  <p className="font-medium tracking-tight transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                    {article.title}
                  </p>
                  <p className="mt-1 max-w-xl text-sm text-fg-muted">
                    {article.description}
                  </p>
                  {article.placeholder ? (
                    <p className="mt-2 text-xs text-fg-muted">
                      {t("placeholder")}
                    </p>
                  ) : null}
                </div>
                <div className="shrink-0 text-sm text-fg-muted">
                  <span>{article.category}</span>
                  <span className="mx-2" aria-hidden>
                    ·
                  </span>
                  <time dateTime={article.date}>
                    {formatDate(article.date, locale)}
                  </time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
