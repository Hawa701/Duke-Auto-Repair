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
});

export const barlowCondensed = localFont({
  src: [
    { path: "../public/fonts/BarlowCondensed-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/BarlowCondensed-Bold.ttf", weight: "700" },
    { path: "../public/fonts/BarlowCondensed-ExtraBold.ttf", weight: "800" },
  ],
  variable: "--font-barlow-condensed",
  display: "block",
  preload: true,
  adjustFontFallback: "Arial",
});
