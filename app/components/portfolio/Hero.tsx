import { ArrowRight, MapPin } from "lucide-react";
import type { ResumeBasics } from "~/types/resume";
import { BadgeWord } from "./BadgeWord";

interface HeroProps {
  basics: ResumeBasics;
}

export function Hero({ basics }: HeroProps) {
  // Try to highlight a keyword from the label
  const labelParts = basics.label.split(" ");
  const lastWord = labelParts.pop() ?? "";
  const labelStart = labelParts.join(" ");

  return (
    <section id="top" className="no-print relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-soft" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--ink)) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="container mx-auto py-20 md:py-28 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-10 animate-fade-up flex flex-col items-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[1.02] tracking-tight">
              Hola, soy{" "}
              <span className="whitespace-nowrap">
                <BadgeWord variant="primary" rotate="left">
                  {basics.name.split(" ")[0]}
                </BadgeWord>
              </span>
              <span className="block mt-4">
                {labelStart}{" "}
                <BadgeWord variant="cyan" rotate="right">
                  {lastWord}
                </BadgeWord>
              </span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${basics.email}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-primary px-6 py-3 font-bold text-primary-foreground shadow-pop transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                Hablemos
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-surface px-6 py-3 font-bold text-surface-foreground shadow-pop-sm transition-transform hover:-translate-y-0.5"
              >
                Ver proyectos
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {basics.location.city}
              {basics.location.region ? `, ${basics.location.region}` : ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
