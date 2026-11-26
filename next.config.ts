import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // build plain HTML into /out for SiteGround
  trailingSlash: true, // /about → about/index.html, works on Apache as-is
  images: { unoptimized: true }, // next/image needs a server to resize; this serves the files directly
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
