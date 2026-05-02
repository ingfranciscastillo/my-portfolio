import { Globe, Mail, Phone } from "lucide-react";
import {
  SiGithub,
  SiX,
  SiBehance,
  SiInstagram,
} from "@icons-pack/react-simple-icons";
import type { ResumeBasics } from "~/types/resume";
import { SectionHeader } from "./SectionHeader";

const iconFor = (network: string) => {
  const n = network.toLowerCase();
  if (n.includes("github")) return SiGithub;
  if (n.includes("behance")) return SiBehance;
  if (n.includes("instagram")) return SiInstagram;
  if (n.includes("twitter") || n.includes("x")) return SiX;
  return Globe;
};

interface AboutProps {
  basics: ResumeBasics;
}

export function About({ basics }: AboutProps) {
  return (
    <section
      id="about"
      className="no-print container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <SectionHeader
        eyebrow="Sobre mí"
        title="Diseño con"
        highlight="propósito"
        highlightVariant="teal"
        description="Combino sensibilidad editorial, ingeniería frontend y obsesión por los detalles. Trabajo desde la estrategia hasta el último píxel — y el último componente desplegado."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="card-pop p-6 md:col-span-2">
          <h3 className="text-xl font-bold mb-3">Mi enfoque</h3>
          <p className="text-muted-foreground leading-relaxed">
            {basics.summary}
          </p>
        </div>

        <div className="card-pop p-6 space-y-4 bg-gradient-brand text-primary-foreground border-ink">
          <h3 className="text-xl font-bold text-primary-foreground">
            Contacto
          </h3>
          <div className="space-y-2 text-sm text-primary-foreground">
            <a
              href={`mailto:${basics.email}`}
              className="flex items-center gap-2 hover:underline"
            >
              <Mail className="h-4 w-4" /> {basics.email}
            </a>
            {basics.phone && (
              <a
                href={`tel:${basics.phone}`}
                className="flex items-center gap-2 hover:underline text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> {basics.phone}
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {basics.profiles.map((p) => {
              const Icon = iconFor(p.network);
              return (
                <a
                  key={p.network}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={p.network}
                  className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-surface text-surface-foreground shadow-pop-sm transition-transform hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
