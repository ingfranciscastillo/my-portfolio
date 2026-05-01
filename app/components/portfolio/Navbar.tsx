import { Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import logo from "~/assets/logo_3_badge_circular.png";

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
  return (
    <header className="no-print sticky top-0 z-50 border-b-2 border-ink bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 font-bold z-10">
          <img
            src={logo}
            alt="Francis Castillo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-sm absolute left-1/2 -translate-x-1/2">
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

        <div className="flex items-center gap-2 z-10">
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
