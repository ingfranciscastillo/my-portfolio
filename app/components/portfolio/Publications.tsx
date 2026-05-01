import type { ResumePublication } from "~/types/resume";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";

interface PublicationsProps {
  publications: ResumePublication[];
}

function formatDate(d: string) {
  const date = new Date(d);
  return date.toLocaleDateString("es-ES", { month: "long", year: "numeric" });
}

export function Publications({ publications }: PublicationsProps) {
  return (
    <section id="publications" className="bg-surface border-y-2 border-ink">
      <div className="container mx-auto py-20 md:py-28">
        <SectionHeader
          eyebrow="Escritos"
          title="Lo que he"
          highlight="publicado"
          highlightVariant="primary"
        />

        <div className="mt-12 mx-auto max-w-3xl divide-y-2 divide-ink/15 border-y-2 border-ink/15">
          {publications.map((p) => {
            const Wrapper: any = p.url ? "a" : "div";
            const wrapperProps = p.url
              ? { href: p.url, target: "_blank", rel: "noreferrer" }
              : {};
            return (
              <Wrapper
                key={p.name}
                {...wrapperProps}
                className="group flex flex-wrap items-baseline gap-4 py-6 px-2 -mx-2 rounded-md transition-colors hover:bg-background/40"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold leading-snug">
                    {p.name}
                    {p.url ? (
                      <ArrowUpRight className="ml-2 inline h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    ) : null}
                  </h3>
                  {p.summary ? (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {p.summary}
                    </p>
                  ) : null}
                </div>
                <div className="text-sm text-muted-foreground whitespace-nowrap">
                  <span className="font-bold text-foreground">
                    {p.publisher}
                  </span>{" "}
                  · {formatDate(p.releaseDate)}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
