import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GoogleReviewsProvider from "@/components/google-reviews-provider";
import PageScrollbar from "@/components/page-scrollbar";
import { barlow, barlowCondensed } from "./fonts";
import "./globals.css";
import "./responsive.css";

export const metadata: Metadata = {
  title: {
    default: "Duke Auto Repair",
    template: "%s | Duke Auto Repair",
  },
  description:
    "Expert auto care, complimentary digital inspections, and concierge vehicle pick-up and drop-off at Duke Auto Repair & Service.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>
        <noscript>
          <style>{`.entrance[data-wait-for-fonts] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <GoogleReviewsProvider>
          <Header />
          <main id="main-content" className="site-main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </GoogleReviewsProvider>
        <PageScrollbar />
      </body>
    </html>
  );
}
