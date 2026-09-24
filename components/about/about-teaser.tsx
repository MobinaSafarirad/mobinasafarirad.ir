import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Link } from "@/i18n/navigation";

export async function AboutTeaser() {
  const t = await getTranslations("about");

  return (
    <Section id="about">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-16">
          <div>
            <p className="text-sm font-medium text-fg-muted">{t("eyebrow")}</p>
            <h2 className="mt-3 max-w-sm text-2xl font-semibold tracking-tight text-balance">
              {t("title")}
            </h2>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-medium hover:underline"
            >
              {t("pageTitle")}
            </Link>
          </div>
          <div className="max-w-xl space-y-4 text-[15px] leading-7 text-fg-muted">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
