import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/metadata";
import { asLocale } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "/about",
    titleKey: "aboutTitle",
    descriptionKey: "aboutDescription",
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(asLocale(locale));
  const t = await getTranslations("about");

  return (
    <Container className="py-16 sm:py-20">
      <p className="text-sm font-medium text-fg-muted">{t("pageTitle")}</p>
      <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-3 max-w-xl text-fg-muted">{t("pageIntro")}</p>
      <div className="mt-10 max-w-2xl space-y-5 text-[16px] leading-7 text-fg-muted">
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
        <p>{t("p3")}</p>
      </div>
    </Container>
  );
}
