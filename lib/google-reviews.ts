import { business } from "./business";

export type GoogleRatingData = {
  rating: number;
  reviewCount: number;
  mapsUrl: string;
  attributions: { provider: string; uri: string | null }[];
};

let configured = false;
