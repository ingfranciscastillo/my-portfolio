import type { ResumeEducation } from "../../types/resume";
import { SectionHeader } from "./SectionHeader";
import { formatPeriod } from "~/hooks/useResume";
import { GraduationCap } from "lucide-react";

interface EducationProps {
  education: ResumeEducation[];
}

export function Education({ education }: EducationProps) {
  return (
    <section
      id="education"
      className="no-print container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <SectionHeader
        eyebrow="Formación"
        title="De dónde"
        highlight="vengo"
        highlightVariant="teal"
      />

      <div className="mt-12 mx-auto max-w-3xl space-y-4">
        {education.map((e) => (
          <div
            key={e.institution}
            className="card-pop p-6 flex gap-4 items-start"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border-2 border-ink bg-brand-teal text-brand-teal-foreground shadow-pop-sm">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold">{e.institution}</h3>
                <span className="text-sm font-bold text-muted-foreground">
                  {formatPeriod(e.startDate, e.endDate)}
                </span>
              </div>
              <div className="text-muted-foreground">
                {e.studyType} · {e.area}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
