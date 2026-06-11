import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost-light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-bold uppercase tracking-wide text-sm sm:text-base px-6 py-3.5 transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-16px_color-mix(in_oklab,var(--primary)_70%,transparent)]",
  outline:
    "border-2 border-ink/15 text-ink hover:-translate-y-0.5 hover:bg-ink hover:text-background",
  "ghost-light":
    "border-2 border-background/40 text-background hover:-translate-y-0.5 hover:bg-background hover:text-ink",
};

export function ButtonLink({
  to,
  variant = "primary",
  children,
}: {
  to: string;
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
}