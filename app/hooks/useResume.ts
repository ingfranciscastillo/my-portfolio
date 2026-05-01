import resumeData from "~/data/resume.json";
import type { Resume } from "~/types/resume";

export function useResume(): Resume {
  return resumeData as Resume;
}

export function formatPeriod(start?: string, end?: string): string {
  if (!start) return "";
  const fmt = (d: string) => {
    const [y, m] = d.split("-");
    if (!m) return y;
    const date = new Date(Number(y), Number(m) - 1);
    return date.toLocaleDateString("es-ES", { month: "short", year: "numeric" });
  };
  return `${fmt(start)} — ${end ? fmt(end) : "Presente"}`;
}
