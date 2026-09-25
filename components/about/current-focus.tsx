import { getMessages, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { focusItems } from "@/lib/focus";
import type en from "@/messages/en.json";

export async function CurrentFocus() {
  const t = await getTranslations("focus");
  const messages = (await getMessages()) as typeof en;
  const items = messages.focus.items;

  return (
    <Section id="focus">
      <Container>
        <SectionHeading title={t("title")} intro={t("intro")} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusItems.map((id, index) => (
            <Reveal
              key={id}
              index={index}
              as="li"
              className="h-full rounded-lg border border-border bg-bg-elevated/90 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/25 hover:shadow-lift"
            >
              <h3 className="font-medium tracking-tight">{items[id].label}</h3>
              <p className="mt-2 text-sm leading-6 text-fg-muted">
                {items[id].detail}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
