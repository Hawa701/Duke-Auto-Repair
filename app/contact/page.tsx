import { business } from "@/lib/business";
import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact-form";
import BookingCta from "@/components/home/booking-cta";
import Icon from "@/components/icon";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${business.name} in ${business.city} for vehicle care questions, quotes, and service appointments. Call ${business.phoneDisplay} or visit ${business.shortAddress}.`,
};

const faqs = [
  {
    question: "What types of vehicles do you service?",
    answer:
      "We work on everyday cars, SUVs and light trucks. If you're not sure about your vehicle, call the front desk with the make and model and we'll let you know.",
  },
  {
    question: "Do I need an appointment for service?",
    answer: `Call our front desk at ${business.phoneDisplay} to arrange a visit or check availability. We'll find a time that suits you.`,
  },
  {
    question: "How long does a standard oil change take?",
    answer:
      "Most oil changes are done the same day, often while you wait in our lounge. Call the front desk and we'll give you a time for your car.",
  },
  {
    question: "What is a digital vehicle health inspection?",
    answer:
      "It comes free with every visit. We check things like tire wear, brake life and fluids, then show you what's good, what needs attention, and what can wait. The decision is always yours.",
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <PageHeader
        title="Contact Us"
        breadcrumb="Contact us"
        description="Call or stop by. Our front desk is here to help."
        image="/images/about/lounge.jpg"
      />
      <section className="cs" aria-labelledby="contact-details-title">
        <div className="wrap grid">
          <div>
            <h2 id="contact-details-title">Get in touch.</h2>
            <p className="lead">
              Whether you have a question, need a quote, or want to schedule a
              service, we&apos;re here to help. Fast, friendly, and ready when
              you are.
            </p>
            <div className="rows">
              <a className="crow" href={business.phoneHref}>
                <span className="ic">
                  <Icon name="phone" />
                </span>
                <div>
                  <small>Phone</small>
                  <b>{business.phoneDisplay}</b>
                </div>
              </a>
              <a
                className="crow"
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ic">
                  <Icon name="pin" />
                </span>
                <div>
                  <small>Address</small>
                  <address>
                    <b>{business.shortAddress}</b>
                  </address>
                </div>
              </a>
            </div>
          </div>
          <div id="send-message">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="fq" id="faq" aria-labelledby="faq-title">
        <div className="wrap">
          <div>
            <h2 id="faq-title">Need answers? Check out our FAQ.</h2>
            <p className="sub">
              Quick answers to the questions drivers ask us most.
            </p>
          </div>
          <div className="list">
            {faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>
                  {question}
                  <span className="t">
                    <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <BookingCta />
    </div>
  );
}
