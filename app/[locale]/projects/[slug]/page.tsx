import type { Metadata } from "next";
import { getLocale, getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/metadata";
import { asLocale } from "@/lib/locale";
import { getProject, projects } from "@/lib/projects";
import type en from "@/messages/en.json";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return projects.flatMap((project) =>
    (["en", "fa"] as const).map((locale) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return {};
  }
  const loc = locale as Locale;
  return pageMetadata({
    locale,
    path: `/projects/${slug}`,
    titleKey: "projectTitle",
    descriptionKey: "projectsDescription",
    titleValues: { title: project.title[loc] },
  });
}

const sectionOrder = [
  "overview",
  "problem",
  "why",
  "approach",
  "architecture",
  "implementation",
  "decisions",
  "challenges",
  "wentWrong",
  "learned",
  "results",
  "limitations",
  "future",
] as const;

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(asLocale(locale));
  const project = getProject(slug);
  if (!project) {
    notFound();
  }

  const loc = (await getLocale()) as Locale;
  const t = await getTranslations("projects");
  const copy = ((await getMessages()) as typeof en).projects;

  return (
    <Container className="py-16 sm:py-20">
      <p className="text-sm text-fg-muted">
        <Link href="/projects" className="hover:underline">
          {t("allTitle")}
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title[loc]}
        </h1>
        <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-fg-muted">
          {copy.status[project.status]}
        </span>
      </div>
      {project.placeholder ? (
        <p className="mt-3 text-sm text-fg-muted">{t("placeholder")}</p>
      ) : null}
      <p className="mt-4 max-w-2xl text-lg text-fg-muted">
        {project.summary[loc]}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li
            key={item}
            className="rounded-md border border-border px-2 py-1 text-xs text-fg-muted"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-12 max-w-2xl space-y-10">
        {sectionOrder.map((key) => (
          <section key={key}>
            <h2 className="text-lg font-semibold tracking-tight">
              {copy.sections[key]}
            </h2>
            <p className="mt-3 leading-7 text-fg-muted">{project[key][loc]}</p>
          </section>
        ))}
        <section>
          <h2 className="text-lg font-semibold tracking-tight">
            {copy.sections.stack}
          </h2>
          <p className="mt-3 leading-7 text-fg-muted">
            {project.stack.join(" · ")}
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold tracking-tight">
            {copy.sections.links}
          </h2>
          <ul className="mt-3 space-y-2 text-fg-muted">
            <li>
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  className="inline-flex items-center gap-1 font-medium text-fg hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("github")}
                  <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden />
                </a>
              ) : (
                t("unavailableGithub")
              )}
            </li>
            <li>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-1 font-medium text-fg hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("live")}
                  <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden />
                </a>
              ) : (
                t("unavailableLive")
              )}
            </li>
          </ul>
        </section>
      </div>
    </Container>
  );
}
