import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Check, Zap } from "lucide-react";
import { company, services, areas, images } from "@/lib/site-data";
import { ButtonLink, ButtonAnchor } from "@/components/Button";
import {
  Section,
  SectionHeading,
  ServiceCard,
  ReviewCard,
  RatingBadge,
  CTABand,
  TrustBar,
  homeReviews,
} from "@/components/Bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Electricians in Hull & East Yorkshire | Abbey Electrical Services" },
      {
        name: "description",
        content:
          "NICEIC approved electricians in Hull since 2007. Domestic, commercial and industrial electrical work. Free quotes. Call 01482 440210.",
      },
      { property: "og:title", content: "Electricians in Hull & East Yorkshire | Abbey Electrical Services" },
      {
        property: "og:description",
        content: "NICEIC approved electricians in Hull since 2007. Free quotes. Call 01482 440210.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "2007", label: "Established" },
  { value: "1000+", label: "Happy Customers" },
  { value: "5.0", label: "Star Rated" },
];

const steps = [
  {
    step: "01",
    title: "Call or get in touch",
    text: "Tell us what you need. We'll ask the right questions and arrange a visit at a time that suits you.",
  },
  {
    step: "02",
    title: "Free written quote",
    text: "We visit, assess the job properly and give you everything in writing — clear pricing, no hidden costs, no pressure.",
  },
  {
    step: "03",
    title: "Job done and certified",
    text: "We carry out the work, test it, leave the place tidy and hand you the full certification on the day.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] text-background">
        <img
          src={images.hero}
          alt="Electrician wiring a consumer unit in Hull"
          width={1600}
          height={1067}
          className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-luminosity"
        />
        {/* glow accents */}
        <div className="pointer-events-none absolute -right-32 -top-16 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />
        <div className="relative mx-auto max-w-[1200px] px-4 py-24 sm:px-6 sm:py-40">
          {/* NICEIC trust badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-400">
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">NICEIC Approved Contractor</span>
          </div>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-7xl">
            Electricians in Hull <span className="text-gradient">&amp; East Yorkshire</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-background/75 sm:text-xl">
            Family-run since 2007. Written price before we start, certified on completion — no surprises.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink to="/contact">Get a Free Quote</ButtonLink>
            <ButtonAnchor href={company.phoneHref} variant="ghost-light">
              <Phone className="h-4 w-4" /> Call {company.phone}
            </ButtonAnchor>
          </div>
          {/* Google rating */}
          <a
            href="https://g.page/r/CbkkfdiqdtLjEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-xl border border-background/20 bg-background/10 px-5 py-3 backdrop-blur-sm transition-colors hover:bg-background/20"
          >
            <svg className="h-6 w-6 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="flex items-center gap-1.5">
              <span className="flex">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </span>
              <span className="text-sm font-semibold text-background">5.0</span>
              <span className="text-sm text-background/70">· 50+ Google reviews</span>
            </span>
          </a>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBar />

      {/* Stats */}
      <section className="dot-pattern bg-slate-surface">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6">
          <div className="grid grid-cols-2 divide-x-0 divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0">
            {stats.map((s, i) => (
              <div key={s.label} className={`flex flex-col items-center py-8 text-center ${i % 2 === 0 && i < 2 ? "border-r border-border md:border-r-0" : ""}`}>
                <p className="text-gradient font-display text-5xl font-extrabold sm:text-6xl">{s.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title="Electrical services, large and small"
          subtitle="From replacing a socket to a full commercial installation — domestic, industrial and everything in between."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 1).map((s) => (
            <ServiceCard key={s.slug} service={s} featured />
          ))}
          {services.slice(1, 7).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="mt-10 flex items-center gap-4">
          <ButtonLink to="/services" variant="outline">
            View all services
          </ButtonLink>
          <span className="text-sm text-muted-foreground">{services.length} services available</span>
        </div>
      </Section>

      {/* How it works */}
      <section className="bg-slate-surface">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="How It Works"
            title="From first call to finished job"
            subtitle="No jargon, no surprises. Here's exactly what happens when you get in touch."
          />
          <div className="relative grid gap-10 sm:grid-cols-3 sm:gap-6">
            {/* connecting line — desktop only */}
            <div className="pointer-events-none absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-primary/25 sm:block" style={{ left: "calc(16.67% + 28px)", right: "calc(16.67% + 28px)" }} />
            {steps.map((s, i) => (
              <div key={s.step} className="flex flex-col items-start gap-4 sm:items-center sm:text-center">
                <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white font-display text-xl font-bold text-primary shadow-sm">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink to="/contact">Get a Free Quote</ButtonLink>
          </div>
        </div>
      </section>

      {/* Emergency banner */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-5 px-4 py-9 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            {/* pulsing indicator */}
            <div className="relative mt-1 flex-shrink-0">
              <span className="block h-3 w-3 rounded-full bg-primary" />
              <span className="absolute inset-0 rounded-full bg-primary opacity-60" style={{ animation: "pulse-ring 2s ease-in-out infinite" }} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Emergency Call-outs Available</p>
              <p className="mt-1 text-base font-semibold text-white/90 sm:text-lg">
                Lost power? Tripping fuses? We cover Hull and East Yorkshire — call for honest advice first.
              </p>
            </div>
          </div>
          <ButtonAnchor href={company.phoneHref} variant="ghost-light">
            <Phone className="h-4 w-4" /> {company.phone}
          </ButtonAnchor>
        </div>
      </section>

      {/* About */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Hull electricians since 2007"
              subtitle="Based in Hull, we've spent over 25 years working across the East Riding — domestic, commercial and industrial jobs, large and small."
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every quote is free and in writing. We carry out the work with our own qualified team, certify it on completion, and don't leave until you're happy. That's how we've built up 1,000+ customers across the region.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Independently assessed every year",
                "Work certified to BS 7671",
                "Recognised by insurers and councils",
                "Domestic & commercial approved",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                  <Check className="h-4 w-4 flex-shrink-0 text-trust" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink to="/about" variant="outline">More about us</ButtonLink>
            </div>
          </div>
          {/* Image with floating NICEIC badge */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <img
                src={images.humber}
                alt="Humber Bridge — Hull and East Yorkshire"
                width={800}
                height={600}
                className="h-[380px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent rounded-2xl" />
            </div>
            {/* NICEIC badge */}
            <div className="absolute -bottom-5 -left-4 rounded-xl border border-border bg-white p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink">NICEIC Approved</p>
                  <p className="text-xs text-muted-foreground">Contractor since 2007</p>
                </div>
              </div>
            </div>
            {/* est badge */}
            <div className="absolute -right-3 top-4 rounded-lg border border-border bg-white px-3 py-2 text-center shadow-md">
              <p className="font-display text-2xl font-extrabold leading-none text-primary">25+</p>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-ink/60">Years</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section dark>
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="Rated 5.0 by local customers"
            subtitle="Every review is from a real customer left on Google."
          />
          <div className="flex-shrink-0 sm:mt-1">
            <RatingBadge />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {homeReviews.slice(0, 3).map((r, i) => (
            <ReviewCard key={r.title} title={r.title} body={r.body} index={i} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ButtonLink to="/reviews" variant="outline">
            Read all reviews
          </ButtonLink>
          <a
            href="https://g.page/r/CbkkfdiqdtLjEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-ink"
          >
            Leave us a review on Google
          </a>
        </div>
      </Section>

      {/* Areas teaser */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <SectionHeading
              eyebrow="Areas Covered"
              title="Hull and across East Yorkshire"
              subtitle="We work within roughly a 20-mile radius of Hull. Not sure if we cover you? Give us a call — most of the time the answer is yes."
            />
            <ButtonLink to="/areas" variant="outline">View all areas</ButtonLink>
          </div>
          <div>
            <div className="flex flex-wrap gap-2.5">
              {areas.map((a) => (
                <Link
                  key={a}
                  to="/areas"
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-white px-3.5 py-2 text-sm font-medium text-ink/80 shadow-sm transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:-translate-y-0.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                  {a}
                </Link>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Can't see your area? <a href={company.phoneHref} className="font-medium text-primary underline-offset-2 hover:underline">Call us</a> — we may still be able to help.
            </p>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
