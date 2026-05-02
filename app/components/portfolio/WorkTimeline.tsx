import type { ResumeWork } from "~/types/resume";
import { SectionHeader } from "./SectionHeader";
import { formatPeriod } from "~/hooks/useResume";
import { ExternalLink } from "lucide-react";

interface WorkTimelineProps {
  work: ResumeWork[];
}

export function WorkTimeline({ work }: WorkTimelineProps) {
  return (
    <section
      id="work"
      className="no-print container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <SectionHeader
        eyebrow="Experiencia"
        title="Trayectoria"
        highlight="profesional"
        highlightVariant="cyan"
      />

      <div className="mt-14 mx-auto max-w-3xl">
        <ol className="relative border-l-2 border-ink/30 pl-6 md:pl-10 space-y-10">
          {work.map((job) => (
            <li key={`${job.name}-${job.startDate}`} className="relative">
              <span className="absolute left-[-35px] md:left-[-47px] top-2 grid h-5 w-5 place-items-center rounded-full border-2 border-ink bg-brand-cyan shadow-pop-sm" />
              <div className="card-pop p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {job.position}{" "}
                    <span className="text-muted-foreground font-normal">
                      @{" "}
                    </span>
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 underline decoration-brand-cyan decoration-2 underline-offset-4 hover:text-primary"
                      >
                        {job.name}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      job.name
                    )}
                  </h3>
                  <span className="text-sm font-bold text-muted-foreground whitespace-nowrap">
                    {formatPeriod(job.startDate, job.endDate)}
                  </span>
                </div>
                {job.location ? (
                  <div className="mt-1 text-sm text-muted-foreground">
                    {job.location}
                  </div>
                ) : null}
                {job.summary ? (
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {job.summary}
                  </p>
                ) : null}
                {job.highlights && job.highlights.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
