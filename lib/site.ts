export const siteConfig = {
  name: "Mobina Safarirad",
  nameFa: "مبینا",
  shortRoleEn: "AI Engineer & Developer",
  shortRoleFa: "مهندس هوش مصنوعی و توسعه‌دهنده",
} as const;

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) {
    return "http://localhost:3000";
  }
  return raw.replace(/\/$/, "");
}

export function getSocialLinks() {
  const github = process.env.NEXT_PUBLIC_GITHUB_URL?.trim() ?? "";
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() ?? "";
  const email = process.env.NEXT_PUBLIC_EMAIL?.trim() ?? "";

  return {
    github: github || undefined,
    linkedin: linkedin || undefined,
    email: email || undefined,
  };
}

export const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/projects", key: "projects" },
  { href: "/writing", key: "writing" },
  { href: "/contact", key: "contact" },
] as const;
