import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { ProjectCard } from "@/components/projects/project-card";
import { getFeaturedProjects, projects } from "@/lib/projects";

type Props = {
  featured?: boolean;
};

export async function ProjectGrid({ featured = false }: Props) {
  const t = await getTranslations("projects");
  const list = featured ? getFeaturedProjects() : projects;

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          title={featured ? t("title") : t("allTitle")}
          intro={t("intro")}
          action={
            featured ? (
              <Link
                href="/projects"
                className="text-sm font-medium text-fg hover:underline"
              >
                {t("viewAll")}
              </Link>
            ) : undefined
          }
        />
        <div className="grid gap-4 md:grid-cols-2">
          {list.map((project, index) => (
            <Reveal key={project.slug} index={index}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
