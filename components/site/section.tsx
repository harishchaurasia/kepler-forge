import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "accent";
}

export function Section({
  className,
  variant = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-24 md:py-32",
        variant === "muted" && "bg-muted/30",
        variant === "accent" && "bg-accent/10",
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
