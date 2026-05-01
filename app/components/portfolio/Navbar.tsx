import { Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#publications", label: "Publicaciones" },
];

interface NavbarProps {
  name: string;
  onDownload: () => void;
}

export function Navbar({ name, onDownload }: NavbarProps) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <header className="no-print sticky top-0 z-50 border-b-2 border-ink bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-gradient-brand text-primary-foreground shadow-pop-sm">
            {initials}
          </span>
          <span className="hidden sm:inline text-lg">{name}</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={onDownload}
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-pop-sm transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Descargar CV</span>
          </button>
        </div>
      </div>
    </header>
  );
}
