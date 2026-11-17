import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import QuoteForm from "@/components/quote-form";
import Icon from "@/components/icon";
import { business } from "@/lib/business";
import "./quote.css";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: `Request an auto repair quote from ${business.name} in ${business.city}, ${business.region}. Tell us your vehicle's year, make, model and symptoms.`,
};

export default function QuotePage() {
  return (
    <div className="quote-page">
      <PageHeader
        title="Request a Quote"
        breadcrumb="Request a quote"
        description="Tell us about your vehicle and what's going on. A service advisor will get back to you with an honest, itemized estimate."
        image="/images/about/diagnostics-tech.jpg"
        imagePosition="center 45%"
        compact
      />
      <section className="quote-section">
        <div className="wrap quote-grid">
          {/* Model years run a year ahead; computed at build time. */}
          <QuoteForm newestYear={new Date().getFullYear() + 1} />
          <aside className="quote-aside" aria-label="How quotes work">
            <h2>What to expect</h2>
            <ul>
              <li>
                <Icon name="wrench" />
                <b>A service advisor replies</b>
              </li>
              <li>
                <Icon name="tag" />
                <b>Transparent pricing</b>
              </li>
              <li>
                <Icon name="shield" />
                <b>{business.warranty.long}</b>
              </li>
            </ul>
            <a className="quote-call" href={business.phoneHref}>
              <Icon name="phone" />
              <span>
                <small>Rather talk now?</small>
                <b>{business.phoneLocal}</b>
              </span>
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}
