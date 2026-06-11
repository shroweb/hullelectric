import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { services, company } from "@/lib/site-data";
import { Section, CheckList, CTABand } from "@/components/Bits";
import { ButtonLink, ButtonAnchor } from "@/components/Button";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return {};
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:url", content: `/services/${s.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  notFoundComponent: () => (
    <Section>
      <h1 className="font-display text-2xl font-bold text-ink">Service not found</h1>
      <p className="mt-2 text-muted-foreground">
        <Link to="/services" className="text-secondary underline">
          Back to all services
        </Link>
      </p>
    </Section>
  ),
  errorComponent: () => (
    <Section>
      <h1 className="font-display text-2xl font-bold text-ink">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">
        <Link to="/services" className="text-secondary underline">
          Back to all services
        </Link>
      </p>
    </Section>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative bg-ink text-background">
        <img
          src={service.image}
          alt={`${service.name} in Hull and East Yorkshire`}
          width={1200}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {service.category}
          </p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">{service.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-background/80">{service.short}</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">What we do</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.intro}</p>
            <h3 className="mt-8 font-display text-lg font-semibold text-ink">Who it's for</h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{service.forWho}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/contact">Get a Free Quote</ButtonLink>
              <ButtonAnchor href={company.phoneHref} variant="outline">
                <Phone className="h-4 w-4" /> {company.phone}
              </ButtonAnchor>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-ink">What's included</h3>
            <div className="mt-5">
              <CheckList items={service.included} />
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <h2 className="mb-8 font-display text-2xl font-bold text-background">Related services</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              to="/services/$slug"
              params={{ slug: r.slug }}
              className="rounded-xl border border-background/15 bg-ink/40 p-5 transition-colors hover:border-primary"
            >
              <h3 className="font-display font-semibold text-background">{r.name}</h3>
              <p className="mt-2 text-sm text-background/70">{r.short}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}