import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactCta } from "@/components/contact/contact-cta";
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
    path: "/contact",
    titleKey: "contactTitle",
    descriptionKey: "contactDescription",
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(asLocale(locale));
  const t = await getTranslations("contact");

  return (
    <>
      <Container className="pt-16 sm:pt-20">
        <h1 className="text-3xl font-semibold tracking-tight">{t("pageTitle")}</h1>
        <p className="mt-3 max-w-xl text-fg-muted">{t("ctaTitle")}</p>
      </Container>
      <ContactCta />
    </>
  );
}
