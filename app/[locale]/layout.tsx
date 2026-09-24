import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeScript } from "@/components/ui/theme-script";
import { routing } from "@/i18n/routing";
import { asLocale } from "@/lib/locale";
import { digiHamishe, rubik } from "@/lib/fonts";
import { getSiteUrl, siteConfig } from "@/lib/site";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = asLocale(locale);
  const t = await getTranslations({ locale: loc, namespace: "meta" });
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("homeTitle"),
      template: "%s",
    },
    description: t("homeDescription"),
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    openGraph: {
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      siteName: `${siteConfig.name} — ${locale === "fa" ? siteConfig.shortRoleFa : siteConfig.shortRoleEn}`,
      title: t("homeTitle"),
      description: t("homeDescription"),
    },
    twitter: {
      card: "summary",
      title: t("homeTitle"),
      description: t("homeDescription"),
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fa: "/fa",
        "x-default": "/en",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const loc = asLocale(locale);
  setRequestLocale(loc);

  const messages = await getMessages();
  const t = await getTranslations("nav");
  const dir = loc === "fa" ? "rtl" : "ltr";

  return (
    <html
      lang={loc}
      dir={dir}
      className={`${rubik.variable} ${digiHamishe.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-dvh flex-col bg-bg font-sans text-fg">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-bg-elevated focus:px-3 focus:py-2"
          >
            {t("skip")}
          </a>
          <Header />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
