import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/site-data";
import { PageHero, Section, CTABand } from "@/components/Bits";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Our Work | Abbey Electrical Services Hull" },
      {
        name: "description",
        content:
          "A look at electrical work by Abbey Electrical Services across Hull and East Yorkshire, from consumer units to commercial lighting and EV chargers.",
      },
      { property: "og:title", content: "Our Work | Abbey Electrical Services Hull" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const items = [
  { src: images.fuseboard, alt: "New consumer unit install with RCD protection in Hull" },
  { src: images.commercial, alt: "Commercial LED panel lighting installation in East Yorkshire" },
  { src: images.ev, alt: "Home EV charger installation on a house exterior" },
  { src: images.testing, alt: "Electrical testing with a multimeter on a circuit" },
  { src: images.hero, alt: "Electrician wiring a fuse board in a Hull home" },
  { src: images.humber, alt: "The Humber Bridge near Hull" },
];

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="A look at our work"
        intro="Recent electrical work across Hull and East Yorkshire."
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <figure key={item.alt} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-sm text-muted-foreground">{item.alt}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}