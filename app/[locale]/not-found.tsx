import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";

export default async function LocaleNotFound() {
  const t = await getTranslations("notFound");

  return (
    <Container className="py-24">
      <h1 className="text-2xl font-semibold tracking-tight">{t("title")}</h1>
      <p className="mt-3 max-w-md text-fg-muted">{t("body")}</p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center font-medium hover:underline"
      >
        {t("home")}
      </Link>
    </Container>
  );
}
