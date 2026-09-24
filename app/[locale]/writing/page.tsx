import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
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
    path: "/writing",
    titleKey: "writingTitle",
    descriptionKey: "writingDescription",
  });
}

export default async function WritingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(asLocale(locale));

  return <WritingList />;
}
