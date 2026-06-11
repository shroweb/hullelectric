import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Check } from "lucide-react";
import { company, services, areas, images } from "@/lib/site-data";
import { ButtonLink, ButtonAnchor } from "@/components/Button";
import {
  Section,
  SectionHeading,
  ServiceCard,
  ReviewCard,
  RatingBadge,
  CTABand,
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
          className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
        />
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
        <div className="relative mx-auto max-w-[1200px] px-4 py-24 sm:px-6 sm:py-36">
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1] sm:text-7xl">
            Electricians in Hull <span className="text-gradient">&amp; East Yorkshire</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-background/80 sm:text-xl">
            NICEIC approved since 2007. We give you a written price before we start, turn up when we say, and leave the place as we found it.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink to="/contact">Get a Free Quote</ButtonLink>
            <ButtonAnchor href={company.phoneHref} variant="ghost-light">
              <Phone className="h-4 w-4" /> Call {company.phone}
            </ButtonAnchor>
          </div>
          <a
            href="https://g.page/r/CbkkfdiqdtLjEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-xl border border-background/20 bg-background/10 px-5 py-3 backdrop-blur-sm transition-colors hover:bg-background/20"
          >
            {/* Google G logo */}
            <svg className="h-6 w-6 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="flex items-center gap-1.5">
              <span className="flex">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="h-4 w-4 fill-[#FBBC05]" viewBox="0 0 20 20" aria-hidden="true">
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

      {/* Stats */}
      <section className="bg-slate-surface">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-4 py-12 sm:px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-gradient font-display text-4xl font-extrabold sm:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title="Electrical services, large and small"
          subtitle="From replacing a socket to a full new-build installation across Hull and East Yorkshire."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 9).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink to="/services" variant="outline">
            View all services
          </ButtonLink>
        </div>
      </Section>

      {/* How it works */}
      <Section dark>
        <SectionHeading
          eyebrow="How It Works"
          title="From first call to finished job"
          subtitle="No jargon, no surprises. Here's exactly what happens when you get in touch."
          light
        />
        <div className="grid gap-10 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="flex flex-col gap-3">
              <span className="font-display text-6xl font-extrabold leading-none text-primary/20">{s.step}</span>
              <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Emergency banner */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-lg font-semibold text-primary-foreground">
            Power gone? We run an emergency call-out service across Hull and East Yorkshire.
          </p>
          <ButtonAnchor href={company.phoneHref} variant="ghost-light">
            <Phone className="h-4 w-4" /> {company.phone}
          </ButtonAnchor>
        </div>
      </section>

      {/* About */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Hull electricians since 2007"
              subtitle="Based in Hull, we've spent over 25 years working across the East Riding — domestic, commercial and industrial jobs, large and small."
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every quote is free and in writing. We carry out the work with our own qualified team, certify it on completion, and don't leave until you're happy. That's how we've built up 1,000+ customers across the region.
            </p>
            <div className="mt-6">
              <ButtonLink to="/about" variant="outline">More about us</ButtonLink>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-lg font-bold text-ink">NICEIC Approved Contractor</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              NICEIC is the UK's leading electrical certification body. Our approved status means our work is independently audited and meets BS 7671 wiring regulations — recognised by insurers, councils and local authorities.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Independently assessed every year",
                "Work certified to BS 7671",
                "Recognised by insurers and councils",
                "Domestic & commercial approved",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                  <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section dark>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Reviews" title="Rated 5.0 by local customers" light />
          <div className="-mt-6 sm:mt-0">
            <RatingBadge />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {homeReviews.slice(0, 3).map((r) => (
            <ReviewCard key={r.title} title={r.title} body={r.body} />
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink to="/reviews" variant="outline">
            Read all reviews
          </ButtonLink>
        </div>
      </Section>

      {/* Areas teaser */}
      <Section>
        <SectionHeading
          eyebrow="Areas Covered"
          title="Hull and across East Yorkshire"
          subtitle="Based in Hull, we work within roughly a 20-mile radius. Not sure if we cover you? Give us a call."
        />
        <div className="flex flex-wrap gap-3">
          {areas.map((a) => (
            <Link
              key={a}
              to="/areas"
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {a}
            </Link>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
