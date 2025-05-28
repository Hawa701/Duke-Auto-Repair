import localFont from "next/font/local";

export const barlow = localFont({
  src: [
    { path: "../public/fonts/Barlow-Regular.ttf", weight: "400" },
    { path: "../public/fonts/Barlow-Medium.ttf", weight: "500" },
    { path: "../public/fonts/Barlow-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/Barlow-Bold.ttf", weight: "700" },
  ],
  variable: "--font-barlow",
  display: "block",
  preload: true,
  adjustFontFallback: "Arial",
