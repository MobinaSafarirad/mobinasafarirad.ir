import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/fade-in";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { getSocialLinks } from "@/lib/site";

export async function Hero() {
  const t = await getTranslations("hero");
  const locale = await getLocale();
  const social = getSocialLinks();

  return (
    <Container className="py-16 sm:py-24 lg:py-28">
      <FadeIn delay={0}>
        <p className="text-sm font-medium text-fg-muted">
          {locale === "fa" ? "مبینا" : "Mobina"}
        </p>
      </FadeIn>
      <FadeIn delay={0.08}>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {t("hello")}
        </h1>
      </FadeIn>
      <FadeIn delay={0.16}>
        <p className="mt-4 max-w-2xl text-lg text-fg-muted text-pretty sm:text-xl">
          {t("role")}
        </p>
      </FadeIn>
      <FadeIn delay={0.24}>
        <p className="mt-5 max-w-xl text-base leading-7 text-fg-muted text-pretty">
          {t("description")}
        </p>
      </FadeIn>
      <FadeIn delay={0.32}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-accent-fg transition-all hover:opacity-90 hover:shadow-md active:scale-[0.98]"
          >
            {t("viewProjects")}
            <ArrowRight
              className="size-4 transition-transform duration-300 rtl:-scale-x-100 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
              aria-hidden
            />
          </Link>
          {social.github ? (
            <ButtonLink href={social.github} variant="secondary" external>
              {t("github")}
            </ButtonLink>
          ) : null}
          {social.linkedin ? (
            <ButtonLink href={social.linkedin} variant="ghost" external>
              LinkedIn
            </ButtonLink>
          ) : null}
        </div>
      </FadeIn>
    </Container>
  );
}
