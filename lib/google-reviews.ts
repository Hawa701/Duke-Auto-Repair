import { business } from "./business";

export type GoogleRatingData = {
  rating: number;
  reviewCount: number;
  mapsUrl: string;
  attributions: { provider: string; uri: string | null }[];
};

let configured = false;
let resolvedPlaceId: string | undefined;
let inFlight: Promise<GoogleRatingData> | undefined;

export function readGoogleRating(
  place: google.maps.places.Place,
): GoogleRatingData {
  const phone = place.internationalPhoneNumber?.replace(/\D/g, "");
  const address = place.formattedAddress ?? "";
  const expectedPhone = business.phoneHref.replace(/\D/g, "");
  const street = new RegExp(
    `\\b${business.street.replaceAll(" ", "\\s+")}\\b`,
    "i",
  );
  if (
    phone !== expectedPhone ||
    !street.test(address) ||
    !address.toLowerCase().includes(business.city.toLowerCase())
  ) {
    throw new Error("Google returned a different business listing.");
  }
  if (
    typeof place.rating !== "number" ||
    !Number.isFinite(place.rating) ||
    place.rating < 1 ||
    place.rating > 5 ||
    typeof place.userRatingCount !== "number" ||
    !Number.isInteger(place.userRatingCount) ||
    place.userRatingCount < 0
  ) {
    throw new Error("Google did not return a valid rating and review count.");
  }
  return {
    rating: place.rating,
    reviewCount: place.userRatingCount,
    mapsUrl: place.googleMapsURI || business.googleReviewsUrl,
    attributions: (place.attributions ?? []).flatMap((item) =>
      item.provider ? [{ provider: item.provider, uri: item.providerURI }] : [],
    ),
  };
}

// Shared by every badge. Values stay in memory for the current page session only.
export function loadGoogleRating(
  apiKey: string,
  placeId?: string,
): Promise<GoogleRatingData> {
  if (!apiKey.trim())
    return Promise.reject(new Error("Google Maps API key is not configured."));
  if (inFlight) return inFlight;
  inFlight = (async () => {
    const { importLibrary, setOptions } =
      await import("@googlemaps/js-api-loader");
    if (!configured) {
      setOptions({ key: apiKey, v: "weekly", language: "en", region: "US" });
      configured = true;
    }
    const { Place } = await importLibrary("places");
    let id = placeId?.trim() || resolvedPlaceId;
    if (!id) {
      const { places } = await Place.searchByText({
        textQuery: business.googlePlaceQuery,
        fields: ["id"],
        maxResultCount: 1,
      });
