import { getTranslations } from "next-intl/server";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export async function ContactCta() {
  const t = await getTranslations("contact");

  const email = t("email");
  const github = t("github");
  const linkedin = t("linkedin");
   const phone = t("phone");

  const items = [
    email && email.startsWith("mailto:")
      ? {
          href: email,
          label: t("email"), // اینجا "ایمیل" یا "Email" رو نشون میده
          icon: "mail" as const,
        }
      : null,
    github && github.startsWith("http")
      ? {
          href: github,
          label: t("github"), // اینجا "گیت‌هاب" یا "GitHub" رو نشون میده
          icon: "link" as const,
        }
      : null,
    linkedin && linkedin.startsWith("http")
      ? {
          href: linkedin,
          label: t("linkedin"), // اینجا "لینکدین" یا "LinkedIn" رو نشون میده
          icon: "link" as const,
        }
      : null,
    phone && phone.startsWith("+98")
      ? {
          href: phone,
          label: t("phone"), // اینجا "لینکدین" یا "LinkedIn" رو نشون میده
          icon: "link" as const,
        }
      : null
  ].filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <Section id="contact">
      <Container>
        <p className="text-sm font-medium text-fg-muted">{t("eyebrow")}</p>
        <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-balance">
          {t("title")}
        </h2>
        <p className="mt-3 max-w-xl text-fg-muted">{t("intro")}</p>
        
        {items.length > 0 ? (
          <ul className="mt-8 space-y-3">
            {items.map((item, index) => (
              <Reveal key={item.label} index={index} as="li">
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 text-fg-muted hover:text-fg transition-colors duration-200"
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.icon === "mail" ? (
                    <Mail className="size-4 shrink-0" aria-hidden />
                  ) : (
                    <ArrowUpRight className="size-4 shrink-0" aria-hidden />
                  )}
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              </Reveal>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-sm text-fg-muted">{t("unavailable")}</p>
        )}

        {/* ✅ این بخش تکراری رو حذف کردم */}
        {/* <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-fg-muted">{t("ctaTitle")}</p>
        </div> */}
        
      </Container>
    </Section>
  );
}