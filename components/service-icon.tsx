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
