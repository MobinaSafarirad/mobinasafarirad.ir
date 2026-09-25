import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { getSocialLinks, siteConfig } from "@/lib/site";

export async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations("footer");
  const social = getSocialLinks();
  const year = new Date().getFullYear();
  const role = locale === "fa" ? siteConfig.shortRoleFa : siteConfig.shortRoleEn;

  const links = [
    social.github ? { href: social.github, label: "GitHub" } : null,
    social.linkedin ? { href: social.linkedin, label: "LinkedIn" } : null,
    social.email ? { href: `mailto:${social.email}`, label: "Email" } : null,
  ].filter((item): item is { href: string; label: string } => item !== null);

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold tracking-tight">{siteConfig.name}.</p>
          <p className="mt-1 text-sm text-fg-muted">{role}</p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          {links.length > 0 ? (
            <ul className="flex flex-wrap gap-4 text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-fg-muted hover:text-fg"
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <p className="text-xs text-fg-muted">
            © {year} {siteConfig.name}. {t("rights")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
