import type { ReactNode } from "react";
import { BadgeWord } from "./BadgeWord";
import { cn } from "~/lib/utils";

type BadgeVariant = "primary" | "cyan" | "teal" | "pink";

interface SectionHeaderProps {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  highlight?: string;
  highlightVariant?: BadgeVariant;
  description?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  highlightVariant = "cyan",
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center space-y-4", className)}>
      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-bold">
        {eyebrow}
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
        {title}
        {highlight ? (
          <>
            {" "}
            <BadgeWord variant={highlightVariant} rotate="right">
              {highlight}
            </BadgeWord>
          </>
        ) : null}
      </h2>
      {description ? (
        <p className="text-base md:text-lg text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
