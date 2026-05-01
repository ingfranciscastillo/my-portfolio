import { cn } from "~/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "cyan" | "teal" | "pink" | "surface";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground",
  cyan: "bg-brand-cyan text-brand-cyan-foreground",
  teal: "bg-brand-teal text-brand-teal-foreground",
  pink: "bg-brand-pink text-brand-pink-foreground",
  surface: "bg-surface text-surface-foreground",
};

interface BadgeWordProps {
  children: ReactNode;
  variant?: Variant;
  rotate?: "left" | "right" | "none";
  className?: string;
}

export function BadgeWord({
  children,
  variant = "cyan",
  rotate = "none",
  className,
}: BadgeWordProps) {
  const rotateClass =
    rotate === "left" ? "-rotate-2" : rotate === "right" ? "rotate-2" : "";
  return (
    <span
      className={cn(
        "inline-block px-4 py-0.5 rounded-full border-2 border-ink shadow-pop-sm align-baseline",
        variantClasses[variant],
        rotateClass,
        className,
      )}
    >
      {children}
    </span>
  );
}
