import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GoogleReviewsProvider from "@/components/google-reviews-provider";
import PageScrollbar from "@/components/page-scrollbar";
import FloatingWidgets from "@/components/floating-widgets";
import PromoPopup from "@/components/promo-popup";
import { business, integrations } from "@/lib/business";
import { barlow, barlowCondensed } from "./fonts";
import "./globals.css";
import "./responsive.css";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Duke Auto Repair",
    template: "%s | Duke Auto Repair",
  },
  description: `Trusted auto repair in ${business.city}, ${business.region}. ASE-certified mechanics, transparent estimates, and a ${business.warranty.long}.`,
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

// Local business structured data (Web Audit, Part 1 §4).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: business.name,
  image: `${business.siteUrl}/images/home/logo.png`,
  "@id": business.siteUrl,
  url: business.siteUrl,
  telephone: business.phoneE164,
  email: business.email,
  paymentAccepted: business.paymentMethods.join(", "),
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.latitude,
    longitude: business.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
};

/*
 * Runs before Shopgenie's searchgenie.js. That script deletes the page's
 * viewport <meta> (which React owns) and adds its own with
 * user-scalable=no, and blocks iOS pinch gestures. Deleting React's node made
 * the next page change crash ("removeChild" of null): the URL changed but the
 * page didn't. So: put React's original node back where it was, drop
 * Shopgenie's copy, and keep normal zoom (WCAG 1.4.4). Shopgenie only does
 * this once, so the watcher stops after the first fix (or after 60 s).
 */
const viewportGuard = `(function(){
var v="width=device-width, initial-scale=1";
var o=document.querySelector('meta[name="viewport"]');
if(!o)return;
window.addEventListener("gesturestart",function(e){e.stopPropagation()},true);
var restored=false,dropped=false;
var w=new MutationObserver(function(rs){
for(var i=0;i<rs.length;i++){var r=rs[i],k;
for(k=0;k<r.removedNodes.length;k++){if(r.removedNodes[k]===o&&!o.isConnected){var n=r.nextSibling;if(n&&n.parentNode===r.target)r.target.insertBefore(o,n);else r.target.insertBefore(o,r.target.firstChild);restored=true}}
for(k=0;k<r.addedNodes.length;k++){var a=r.addedNodes[k];if(a!==o&&a.nodeType===1&&a.matches('meta[name="viewport"]')){a.remove();dropped=true}}}
if(o.content!==v)o.content=v;
if(restored&&dropped)w.disconnect();
});
w.observe(document.documentElement,{childList:true,subtree:true});
setTimeout(function(){w.disconnect()},60000);
})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <head>
        {integrations.gtmId && (
          // Google's standard GTM install snippet, as high in <head> as possible.
          // Kept inline (not @next/third-parties) so it runs before hydration.
          // eslint-disable-next-line @next/next/next-script-for-ga
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${JSON.stringify(integrations.gtmId)});`,
            }}
          />
        )}
        {integrations.shopgenie && (
          <>
            <script dangerouslySetInnerHTML={{ __html: viewportGuard }} />
            {/* Shopgenie embed code, as supplied by the shop. Deferred so the
                page body exists when it adds the booking popup and chat bubble. */}
            <script
              defer
              src={integrations.shopgenie.src}
              data-shop={integrations.shopgenie.shop}
              data-searchgenie="true"
              data-heap-track="true"
            />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        {integrations.gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${integrations.gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
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
        <FloatingWidgets />
        <PromoPopup />
        <PageScrollbar />
      </body>
    </html>
  );
}
