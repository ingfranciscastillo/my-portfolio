import { Moon, Sun } from "lucide-react";
import { useTheme } from "~/hooks/useTheme";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Activar modo oscuro" : "Activar modo claro"
      }
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-surface text-surface-foreground shadow-pop-sm transition-transform hover:-translate-y-0.5"
    >
      {theme === "light" && <Moon className="h-4 w-4" />}
      {theme === "dark" && <Sun className="h-4 w-4" />}
    </button>
  );
}
