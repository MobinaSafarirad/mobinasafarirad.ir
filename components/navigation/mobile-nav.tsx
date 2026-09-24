"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { navItems } from "@/lib/site";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function MobileNav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const slide = locale === "fa" ? 8 : -8;

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-md text-fg"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? t("closeMenu") : t("openMenu")}
        onClick={() => setOpen((value) => !value)}
      >
        {reduce ? (
          open ? (
            <X className="size-5" aria-hidden />
          ) : (
            <Menu className="size-5" aria-hidden />
          )
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex"
              >
                <X className="size-5" aria-hidden />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex"
              >
                <Menu className="size-5" aria-hidden />
              </motion.span>
            )}
          </AnimatePresence>
        )}
      </button>
      {reduce ? (
        open ? (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full border-b border-border bg-bg/95 px-5 py-4 shadow-hairline"
          >
            <nav aria-label={t("home")} className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block rounded-md px-2 py-3 text-base text-fg"
                  onClick={() => setOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        ) : null
      ) : (
        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full border-b border-border bg-bg/95 px-5 py-4 shadow-hairline"
            >
              <nav aria-label={t("home")} className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: slide }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-md px-2 py-3 text-base text-fg"
                      onClick={() => setOpen(false)}
                    >
                      {t(item.key)}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      )}
    </div>
  );
}
