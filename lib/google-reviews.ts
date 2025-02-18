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
