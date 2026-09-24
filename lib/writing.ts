import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "@/i18n/routing";

export type Article = {
  slug: string;
  locale: Locale;
  title: string;
  date: string;
  category: string;
  description: string;
  tags: string[];
  placeholder: boolean;
  content: string;
};

type Frontmatter = {
  title: string;
  date: string;
  category: string;
  description: string;
  tags?: string[];
  placeholder?: boolean;
};

const writingRoot = path.join(process.cwd(), "content", "writing");

export function getArticles(locale: Locale): Article[] {
  const dir = path.join(writingRoot, locale);
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".md"));

  const articles = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    return readArticle(locale, slug);
  });

  return articles
    .filter((article): article is Article => article !== undefined)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(locale: Locale, slug: string): Article | undefined {
  return readArticle(locale, slug);
}

function readArticle(locale: Locale, slug: string): Article | undefined {
  const filePath = path.join(writingRoot, locale, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const data = parsed.data as Frontmatter;

  return {
    slug,
    locale,
    title: data.title,
    date: data.date,
    category: data.category,
    description: data.description,
    tags: data.tags ?? [],
    placeholder: Boolean(data.placeholder),
    content: parsed.content.trim(),
  };
}
