import { Link } from "@tanstack/react-router";
import { Phone, Star, Check, Zap, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { company, reviews, type Service } from "@/lib/site-data";
import { ButtonAnchor, ButtonLink } from "./Button";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] text-background">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-24">
        {eyebrow && (
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-base text-background/80 sm:text-xl">{intro}</p>}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section className={`${dark ? "bg-slate-surface" : ""} ${className}`}>
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          <Zap className="h-3 w-3 fill-primary" />
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-extrabold sm:text-4xl ${light ? "text-background" : "text-ink"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? "text-background/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

const categoryColour: Record<Service["category"], string> = {
  "Residential & Domestic": "bg-primary/90 text-white",
  "Commercial & Industrial": "bg-secondary/90 text-white",
  "Testing & Inspection": "bg-trust/90 text-white",
};

export function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)] ${featured ? "md:col-span-2" : ""}`}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
        <img
          src={service.image}
          alt={`${service.name} by Abbey Electrical Services in Hull`}
          loading="lazy"
          width={1200}
          height={900}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* dark gradient always visible at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
        {/* Category badge */}
        <span className={`absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${categoryColour[service.category]}`}>
          {service.category}
        </span>
        {/* Hover reveal */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 pb-4">
          <span className="font-display text-base font-bold text-white drop-shadow">{service.name}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:translate-x-0.5">
            <ArrowRight className="h-4 w-4 text-white" />
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold text-ink">{service.name}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      </div>
    </Link>
  );
}

export function Stars({ className = "", size = "sm" }: { className?: string; size?: "sm" | "md" }) {
  const sz = size === "md" ? "h-5 w-5" : "h-4 w-4";
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${sz} fill-amber-400 text-amber-400`} />
      ))}
    </div>
  );
}

const avatarColours = [
  "bg-primary/15 text-primary",
  "bg-secondary/15 text-secondary",
  "bg-trust/15 text-trust",
  "bg-amber-100 text-amber-700",
  "bg-violet-100 text-violet-700",
  "bg-rose-100 text-rose-600",
];

export function ReviewCard({ title, body, index = 0 }: { title: string; body: string; index?: number }) {
  const initial = title.charAt(0).toUpperCase();
  const colour = avatarColours[index % avatarColours.length];
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between">
        <Stars />
        {/* Google G mark */}
        <svg className="h-5 w-5 flex-shrink-0 opacity-70" viewBox="0 0 24 24" aria-label="Google review">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">
        &ldquo;{body}&rdquo;
      </blockquote>
      <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${colour}`}>
          {initial}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{title}</p>
          <p className="text-xs text-muted-foreground">Google review</p>
        </div>
      </div>
    </figure>
  );
}

export function RatingBadge({ light = false }: { light?: boolean }) {
  return (
    <a
      href="https://g.page/r/CbkkfdiqdtLjEBM/review"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-50">
        <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
      <div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-2xl font-bold text-ink">{company.rating}</span>
          <Stars />
        </div>
        <span className="text-xs text-muted-foreground">{company.reviewCount} Google reviews</span>
      </div>
    </a>
  );
}

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* decorative shapes */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-10 right-8 h-48 w-48 rounded-full bg-black/10" />
      <div className="pointer-events-none absolute bottom-4 right-52 h-6 w-6 rotate-45 bg-white/10" />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-white/60">NICEIC Approved · Est. 2007</p>
          <h2 className="text-2xl font-extrabold text-primary-foreground sm:text-3xl">
            Get a free, written quote today
          </h2>
          <p className="mt-2 text-primary-foreground/80">
            No obligation. Clear pricing before we start. Hull &amp; East Yorkshire.
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-wrap gap-3">
          <ButtonLink to="/contact" variant="ghost-light">
            Request a Quote
          </ButtonLink>
          <ButtonAnchor href={company.phoneHref} variant="ghost-light">
            <Phone className="h-4 w-4" /> {company.phone}
          </ButtonAnchor>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const signals = [
    { icon: "🔒", label: "NICEIC Approved" },
    { icon: "📋", label: "Free Written Quotes" },
    { icon: "⚡", label: "Est. 2007 — 25+ Yrs" },
    { icon: "★", label: "5.0 Google Rating" },
    { icon: "🛡️", label: "Fully Insured" },
    { icon: "📞", label: "Emergency Call-outs" },
  ];
  return (
    <div className="border-y border-border bg-white">
      <div className="mx-auto max-w-[1200px] overflow-x-auto px-4 sm:px-6">
        <div className="flex min-w-max items-stretch divide-x divide-border sm:min-w-0 sm:grid sm:grid-cols-3 sm:divide-x-0 md:grid-cols-6">
          {signals.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 px-5 py-4 text-center sm:px-3">
              <span className="text-lg leading-none">{s.icon}</span>
              <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-wide text-ink/70">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-trust" />
          <span className="text-sm text-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export const homeReviews = reviews;