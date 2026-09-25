import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { navItems, siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { HeaderShell } from "@/components/layout/header-shell";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileNav } from "@/components/navigation/mobile-nav";

export async function Header() {
  const t = await getTranslations("nav");

  return (
    <HeaderShell>
      <Container className="relative flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight transition-opacity hover:opacity-70"
        >
          {siteConfig.name}.
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm text-fg-muted md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="group relative py-1 transition-colors hover:text-fg"
            >
              {t(item.key)}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 rtl:origin-right" />
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        <MobileNav />
      </Container>
    </HeaderShell>
  );
}
