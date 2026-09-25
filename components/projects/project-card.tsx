import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";
import type en from "@/messages/en.json";

type Props = {
  project: Project;
};

export async function ProjectCard({ project }: Props) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("projects");
  const statusLabels = ((await getMessages()) as typeof en).projects.status;

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-lg border border-border bg-bg-elevated/90 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/25 hover:shadow-lift",
        project.placeholder && "border-dashed",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">
          {project.title[locale]}
        </h3>
        <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-xs text-fg-muted">
          {statusLabels[project.status]}
        </span>
      </div>
      {project.placeholder ? (
        <p className="mt-2 text-xs uppercase tracking-wide text-fg-muted">
          {t("placeholder")}
        </p>
      ) : null}
      <p className="mt-3 flex-1 text-sm leading-6 text-fg-muted">
        {project.summary[locale]}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li
            key={item}
            className="rounded-md bg-bg px-2 py-1 text-xs text-fg-muted"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
        <Link href={`/projects/${project.slug}`} className="hover:underline">
          {t("caseStudy")}
        </Link>
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            className="inline-flex items-center gap-1 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("github")}
            <ArrowUpRight className="size-3.5 rtl:-scale-x-100" aria-hidden />
          </a>
        ) : null}
      </div>
    </article>
  );
}
