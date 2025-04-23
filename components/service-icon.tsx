export type ServiceIconName =
  | "oil"
  | "fluids"
  | "battery"
  | "brakes"
  | "suspension"
  | "air-conditioning"
  | "heating"
  | "alignment"
  | "diagnostics"
  | "inspection";

export default function ServiceIcon({ name }: { name: ServiceIconName }) {
  const icons = {
    oil: (
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z" />
    ),
    fluids: (
      <>
        <path d="M9 3h6M10 3v5L4.5 18.5a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 8V3" />
        <path d="M7 15h10" />
      </>
    ),
    battery: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M7 7V4.5h3V7M14 7V4.5h3V7M7 13.5h4M9 11.5v4M14 13.5h3" />
      </>
    ),
    brakes: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 3a9 9 0 0 1 8.5 6M16.5 4.2 19 7.5" />
      </>
    ),
    suspension: (
      <path d="M12 2v2.5M12 19.5V22M8 4.5h8M8 19.5h8M8 4.5l8 3-8 3 8 3-8 3 8 3" />
    ),
    "air-conditioning": (
      <path d="M2 12h20M12 2v20M20 16l-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4" />
    ),
    heating: (
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />
    ),
    alignment: (
      <>
        <rect x="2" y="4" width="4.5" height="16" rx="1.2" />
        <rect x="17.5" y="4" width="4.5" height="16" rx="1.2" />
        <path d="M6.5 12h11M9.5 9l-3 3 3 3M14.5 9l3 3-3 3" />
