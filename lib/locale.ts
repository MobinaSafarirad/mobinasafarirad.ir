import { hasLocale } from "next-intl";
import { routing, type Locale } from "@/i18n/routing";

export function asLocale(value: string): Locale {
  if (hasLocale(routing.locales, value)) {
    return value;
  }
  return routing.defaultLocale;
}
