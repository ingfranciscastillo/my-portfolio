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
] as const;

function isLinkable(
  project: ResumeProject,
): project is ResumeProject & { url: string } {
  return !!project.url;
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="no-print bg-surface border-y-2 border-ink"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <SectionHeader
          eyebrow="Proyectos"
          title="Trabajo"
          highlight="seleccionado"
          highlightVariant="pink"
          description="Una muestra de proyectos recientes en producto, branding y desarrollo."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            const accent = accentCycle[i % accentCycle.length];
            const hasUrl = isLinkable(p);

            return (
              <ProjectCard
                key={p.name}
                project={p}
                hasUrl={hasUrl}
                accent={accent}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  hasUrl,
  accent,
}: {
  project: ResumeProject;
  hasUrl: boolean;
  accent: (typeof accentCycle)[number];
}) {
  return hasUrl ? (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="card-pop group p-6 flex flex-col gap-4"
    >
      <ProjectInner project={project} accent={accent} showLinkIcon />
    </a>
  ) : (
    <article className="card-pop group p-6 flex flex-col gap-4">
      <ProjectInner project={project} accent={accent} showLinkIcon={false} />
    </article>
  );
}

function ProjectInner({
  project,
  accent,
  showLinkIcon,
}: {
  project: ResumeProject;
  accent: (typeof accentCycle)[number];
  showLinkIcon: boolean;
}) {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink shadow-pop-sm font-bold text-lg ${accent} text-primary-foreground`}
          >
            {project.name[0]}
          </span>
          <div>
            <h3 className="text-xl font-bold">{project.name}</h3>
            {(project.startDate || project.endDate) && (
              <div className="text-xs text-muted-foreground">
                {formatPeriod(project.startDate, project.endDate)}
              </div>
            )}
          </div>
        </div>
        {showLinkIcon && (
          <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        )}
      </div>

      <p className="text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      {project.keywords && project.keywords.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {project.keywords.map((k) => (
            <span
              key={k}
              className="inline-block rounded-full border border-ink/30 bg-background px-3 py-0.5 text-xs font-bold text-muted-foreground"
            >
              {k}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
