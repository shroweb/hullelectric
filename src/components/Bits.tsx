import { Link } from "@tanstack/react-router";
import { Phone, Star, Check } from "lucide-react";
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
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold sm:text-4xl text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[var(--shadow-card)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={`${service.name} by Abbey Electrical Services in Hull`}
          loading="lazy"
          width={1200}
          height={900}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-ink">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wide text-secondary">
          Learn more
          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

export function ReviewCard({ title, body }: { title: string; body: string }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
      <Stars />
      <figcaption className="mt-3 font-display font-bold text-ink">{title}</figcaption>
      <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        &ldquo;{body}&rdquo;
      </blockquote>
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground/80">
        Verified customer review
      </p>
    </figure>
  );
}

export function RatingBadge({ light = false }: { light?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-2.5 shadow-sm">
      <span className="font-display text-2xl font-bold text-ink">{company.rating}</span>
      <span>
        <Stars />
        <span className="mt-0.5 block text-xs text-muted-foreground">
          From {company.reviewCount} reviews
        </span>
      </span>
    </div>
  );
}

export function CTABand() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            Get a free quote today
          </h2>
          <p className="mt-2 text-primary-foreground/80">
            Free, no-obligation quotes across Hull and East Yorkshire.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
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