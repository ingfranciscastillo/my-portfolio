import type { ResumeProject } from "~/types/resume";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";
import { formatPeriod } from "~/hooks/useResume";

interface ProjectsProps {
  projects: ResumeProject[];
}

const accentCycle = [
  "bg-brand-cyan",
  "bg-brand-teal",
  "bg-primary",
  "bg-brand-pink",
];

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="bg-surface border-y-2 border-ink">
      <div className="container mx-auto py-20 md:py-28">
        <SectionHeader
          eyebrow="Proyectos"
          title="Trabajo"
          highlight="seleccionado"
          highlightVariant="pink"
          description="Una muestra de proyectos recientes en producto, branding y desarrollo."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            const Wrapper: any = p.url ? "a" : "article";
            const wrapperProps = p.url
              ? { href: p.url, target: "_blank", rel: "noreferrer" }
              : {};
            return (
              <Wrapper
                key={p.name}
                {...wrapperProps}
                className="card-pop group p-6 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink shadow-pop-sm font-bold text-lg ${accentCycle[i % accentCycle.length]} text-primary-foreground`}
                    >
                      {p.name[0]}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold">{p.name}</h3>
                      {(p.startDate || p.endDate) && (
                        <div className="text-xs text-muted-foreground">
                          {formatPeriod(p.startDate, p.endDate)}
                        </div>
                      )}
                    </div>
                  </div>
                  {p.url ? (
                    <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  ) : null}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                {p.keywords && p.keywords.length > 0 ? (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.keywords.map((k) => (
                      <span
                        key={k}
                        className="inline-block rounded-full border border-ink/30 bg-background px-3 py-0.5 text-xs font-bold text-muted-foreground"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
