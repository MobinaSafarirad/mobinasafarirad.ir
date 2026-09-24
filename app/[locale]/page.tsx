import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { AboutTeaser } from "@/components/about/about-teaser";
import { CurrentFocus } from "@/components/about/current-focus";
import { ContactCta } from "@/components/contact/contact-cta";
import { Hero } from "@/components/hero/hero";
import { ProjectGrid } from "@/components/projects/project-grid";
import { Skills } from "@/components/skills/skills";
import { WritingList } from "@/components/writing/writing-list";
import { pageMetadata } from "@/lib/metadata";
import { asLocale } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "/",
    titleKey: "homeTitle",
    descriptionKey: "homeDescription",
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(asLocale(locale));

  return (
    <>
      <Hero />
      <CurrentFocus />
      <ProjectGrid featured />
      <AboutTeaser />
      <WritingList featured />
      <Skills />
      <ContactCta />
    </>
  );
}
