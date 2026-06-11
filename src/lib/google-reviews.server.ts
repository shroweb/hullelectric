// Google Places API (Legacy) — server-only. Never imported by client code.
//
// To enable live reviews:
//  1. Create a Google Cloud project and enable "Places API"
//  2. Create an API key restricted to Places API
//  3. Find the Place ID:
//       https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
//       (search "Abbey Electrical Services Hull" — looks like ChIJ...)
//  4. Add to your .env file:
//       GOOGLE_PLACES_API_KEY=AIza...
//       GOOGLE_PLACE_ID=ChIJ...
//
// Without these env vars the site falls back to the static reviews in site-data.ts.

export type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
};

type PlaceDetailsResponse = {
  status: string;
  result?: {
    reviews?: GoogleReview[];
    rating?: number;
    user_ratings_total?: number;
  };
};

export async function fetchGoogleReviews(): Promise<GoogleReview[] | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const url =
      `https://maps.googleapis.com/maps/api/place/details/json` +
      `?place_id=${encodeURIComponent(placeId)}` +
      `&fields=reviews,rating,user_ratings_total` +
      `&reviews_sort=newest` +
      `&key=${apiKey}`;

    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return null;

    const data: PlaceDetailsResponse = await res.json();
    if (data.status !== "OK" || !data.result?.reviews) return null;

    // Return only 5-star reviews with meaningful text, newest first
    return data.result.reviews
      .filter((r) => r.rating === 5 && r.text.trim().length > 20)
      .slice(0, 9);
  } catch {
    return null;
  }
}
