"use client";

import { business } from "@/lib/business";
import Icon from "./icon";

type ContactFormProps = { action?: string };

export default function ContactForm({ action }: ContactFormProps) {
  return (
    <form
      action={action}
      method="post"
      aria-labelledby="contact-form-title"
      aria-describedby={!action ? "contact-form-note" : undefined}
      onSubmit={(event) => {
        if (!action) event.preventDefault();
      }}
    >
      <h2 id="contact-form-title">Contact form.</h2>
      {!action && (
        <p id="contact-form-note" className="form-note">
          Online messaging is coming soon. Please call{" "}
          <a href={business.phoneHref}>{business.phoneDisplay}</a> to reach our
          team.
        </p>
      )}
      <div className="fld">
        <label htmlFor="contact-name">Name</label>
        <div className="in-box">
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder="Enter your name"
            required
            maxLength={120}
          />
        </div>
      </div>
      <div className="fld">
        <label htmlFor="contact-email">Email</label>
        <div className="in-box">
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Enter your email"
            required
            maxLength={254}
          />
        </div>
      </div>
      <div className="fld">
        <label htmlFor="contact-phone">Phone number</label>
        <div className="in-box phone-input">
          <span className="cc" aria-hidden="true">
            US +1
          </span>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            autoComplete="tel-national"
            aria-label="Phone number, country code +1"
            placeholder="Enter your phone number"
            maxLength={30}
          />
        </div>
      </div>
      <div className="fld">
        <label htmlFor="contact-message">Message</label>
        <div className="in-box ta">
          <textarea
            id="contact-message"
            name="message"
            placeholder="Enter your message"
            required
            rows={5}
            maxLength={5000}
          />
        </div>
      </div>
      <div className="fsub">
        <button type="submit" className="btn btn-y" disabled={!action}>
          Send message
          <Icon name="arrow" />
        </button>
      </div>
    </form>
  );
}
