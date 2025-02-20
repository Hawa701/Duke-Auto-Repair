// Editorial sources and review notes: docs/service-content-sources.md.
export type ServiceDetail = {
  id: string;
  title: string;
  description: string;
  image: string;
  imagePosition: string;
  introTitle: string;
  intro: string;
  signsTitle: string;
  signs: string[];
  checks: { title: string; description: string }[];
  bookingTitle: string;
  bookingTag: string;
  bookingDescription: string;
  relatedIds: string[];
  relatedDescription: string;
  helpfulLinks?: { label: string; href: string }[];
};
