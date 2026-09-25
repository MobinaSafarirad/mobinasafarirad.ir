import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ProjectGrid } from "@/components/projects/project-grid";
import { pageMetadata } from "@/lib/metadata";
import { asLocale } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "/projects",
    titleKey: "projectsTitle",
    descriptionKey: "projectsDescription",
  });
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(asLocale(locale));

  return <ProjectGrid />;
}
