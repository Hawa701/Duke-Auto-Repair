import { business } from "@/lib/business";
import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact-form";
import BookingCta from "@/components/home/booking-cta";
import Icon from "@/components/icon";
import "./contact.css";

// Title, description, H1 and header alt text: Master SEO Blueprint, section 1.
export const metadata: Metadata = {
  title: {
    absolute: "Contact Us & Reviews | Duke Auto Repair Alexandria, VA",
  },
  description:
    "Visit Duke Auto Repair at 5220 Duke St, Alexandria, VA or call (703) 212-0608. Walk-in VA state inspections Mon–Sat & 24/7 after-hours key drop-off.",
};

// Contact & FAQ: Content & UX Guide (revised), section 7. The payment
// question comes from the shop's Website Information Request answers.
const faqs = [
  {
    question: "What vehicles do you service?",
    answer:
      "Most domestic, Asian, and European cars, SUVs, and light-duty trucks.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "Yes. Virginia safety and emissions inspections are first-come, first-served. Appointments are recommended for other services.",
  },
  {
    question: "How will I know exactly what needs to be fixed?",
    answer:
      "We believe in complete transparency. With every routine service, our ASE-certified mechanics perform a comprehensive Digital Vehicle Inspection (DVI). We will text you photos, videos, and detailed notes of your engine, brakes, and suspension so you can see exactly what we see before approving any flat-rate estimate.",
  },
  {
    question: "Can I drop my car off and get a ride to work/home?",
    answer:
      "Yes! We want to make your auto repair experience as frictionless as possible. We offer a complimentary local shuttle service within a 5-mile radius of the shop. For our European and luxury vehicle clients, we also offer complimentary VIP Uber rides.",
  },
  {
    question: "How long does an oil change take?",
    answer:
      "Service times vary by vehicle and shop availability. Contact us for an estimated wait time.",
  },
  {
    question: "What payment methods do you accept?",
    answer: `${business.paymentMethods.slice(0, -1).join(", ")}, and ${business.paymentMethods[business.paymentMethods.length - 1].toLowerCase()}.`,
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <PageHeader
        title="Contact Duke Auto Repair in Alexandria, VA"
        breadcrumb="Contact us"
        description="Call or stop by. Our front desk is here to help."
        image="/images/about/storefront-square.jpg"
        imageAlt="Duke Auto Repair storefront at 5220 Duke Street Alexandria VA"
        compact
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
              <a className="crow" href={business.emailHref}>
                <span className="ic">
                  <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm18 2-10 7L2 6" />
                  </svg>
                </span>
                <div>
                  <small>Email</small>
                  <b>{business.email}</b>
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
