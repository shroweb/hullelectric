import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { reviews as staticReviews } from "@/lib/site-data";
import { PageHero, Section, ReviewCard, RatingBadge, CTABand } from "@/components/Bits";

const getReviews = createServerFn().handler(async () => {
  const { fetchGoogleReviews } = await import("@/lib/google-reviews.server");
  const google = await fetchGoogleReviews();
  if (google && google.length > 0) {
    return {
      source: "google" as const,
      reviews: google.map((r) => ({
        title: r.author_name,
        body: r.text,
      })),
    };
  }
  return {
    source: "static" as const,
    reviews: staticReviews,
  };
});

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | Abbey Electrical Services Hull" },
      {
        name: "description",
        content:
          "Read reviews for Abbey Electrical Services. Rated 5.0 from 50+ customers across Hull and East Yorkshire. Call 01482 440210.",
      },
      { property: "og:title", content: "Reviews | Abbey Electrical Services Hull" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  loader: async () => getReviews(),
  component: Reviews,
});

function Reviews() {
  const { reviews, source } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our customers say"
        intro="Reviews from customers across Hull and East Yorkshire."
      />
      <Section>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <RatingBadge />
          {source === "google" && (
            <p className="text-xs text-muted-foreground">Live from Google Reviews</p>
          )}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={r.title} title={r.title} body={r.body} />
          ))}
        </div>
        <div className="mt-10">
          <a
            href="https://g.page/r/CbkkfdiqdtLjEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Leave us a Google review →
          </a>
        </div>
      </Section>
      <CTABand />
    </>
  );
}
