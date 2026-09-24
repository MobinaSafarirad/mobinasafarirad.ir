"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("common");
  const nav = useTranslations("nav");

  return (
    <div
      className="flex items-center gap-1 text-sm"
      role="group"
      aria-label={nav("language")}
    >
      <Link
        href={pathname}
        locale="en"
        className={cn(
          "rounded-md px-1.5 py-0.5 font-medium tracking-wide",
          locale === "en"
            ? "text-accent"
            : "text-fg-muted hover:text-fg",
        )}
        aria-current={locale === "en" ? "true" : undefined}
      >
        {t("en")}
      </Link>
      <span className="text-fg-muted/50" aria-hidden>
        |
      </span>
      <Link
        href={pathname}
        locale="fa"
        className={cn(
          "rounded-md px-1.5 py-0.5 font-medium tracking-wide",
          locale === "fa"
            ? "text-accent"
            : "text-fg-muted hover:text-fg",
        )}
        aria-current={locale === "fa" ? "true" : undefined}
      >
        {t("fa")}
      </Link>
    </div>
  );
}
