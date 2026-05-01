import type { ResumeSkill } from "~/types/resume";
import { SectionHeader } from "./SectionHeader";

const variantCycle = ["cyan", "teal", "primary", "pink"] as const;
const bgClass: Record<(typeof variantCycle)[number], string> = {
  cyan: "bg-brand-cyan text-brand-cyan-foreground",
  teal: "bg-brand-teal text-brand-teal-foreground",
  primary: "bg-primary text-primary-foreground",
  pink: "bg-brand-pink text-brand-pink-foreground",
};

interface SkillsProps {
  skills: ResumeSkill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="bg-surface border-y-2 border-ink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <SectionHeader
          eyebrow="Skills"
          title="Caja de"
          highlight="herramientas"
          highlightVariant="primary"
          description="Lo que uso a diario para diseñar, construir y enviar productos."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skills.map((group, gi) => (
            <div key={group.name} className="card-pop p-6">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold">{group.name}</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  0{gi + 1}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.keywords.map((kw, ki) => {
                  const v = variantCycle[(gi + ki) % variantCycle.length];
                  return (
                    <span
                      key={kw}
                      className={`inline-block rounded-full border-2 border-ink px-3 py-1 text-sm font-bold shadow-pop-sm ${bgClass[v]}`}
                    >
                      {kw}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
