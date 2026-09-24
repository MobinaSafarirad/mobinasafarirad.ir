import { getMessages, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { skillGroups } from "@/lib/skills";
import type en from "@/messages/en.json";

export async function Skills() {
  const t = await getTranslations("skills");
  const groups = ((await getMessages()) as typeof en).skills.groups;

  return (
    <Section id="skills">
      <Container>
        <SectionHeading title={t("title")} intro={t("intro")} />
        <div className="grid gap-8 sm:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} index={index}>
              <h3 className="text-sm font-medium text-fg-muted">
                {groups[group.id]}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] transition-transform duration-200 hover:translate-x-1 rtl:hover:-translate-x-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
