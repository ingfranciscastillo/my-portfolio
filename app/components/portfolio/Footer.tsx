import type { ResumeBasics } from "~/types/resume";
import logo from "~/assets/logo_2_wordmark_stacked.png";

interface FooterProps {
  basics: ResumeBasics;
}

export function Footer({ basics }: FooterProps) {
  return (
    <footer className="no-print border-t-2 border-ink bg-background">
      <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="text-muted-foreground">
          <img src={logo} className="w-28" />
        </div>
        <div className="flex flex-wrap gap-4">
          {basics.profiles.map((p) => (
            <a
              key={p.network}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {p.network}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
