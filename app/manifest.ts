import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Duke Auto Repair & Service",
    short_name: "Duke Auto",
    description: "Auto repair and maintenance in Alexandria, Virginia.",
    start_url: "/",
    display: "standalone",
    background_color: "#1e2845",
    theme_color: "#1e2845",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
