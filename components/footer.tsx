import { business } from "@/lib/business";
import Image from "next/image";
import Link from "next/link";
import GoogleRating from "./google-rating";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <Image
              className="logo"
              src="/images/home/logo-dark.png"
              width={1287}
              height={339}
              alt="Duke Auto Repair & Service"
            />
            <p>
              We make it simple for car owners to find the services they need,
              book with ease, and feel confident they&apos;re in good hands
              every time they visit.
            </p>
          </div>
          <div>
            <h4>Quick links</h4>
            <ul className="quick-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/reviews">Reviews</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul className="two">
              <li>
                <Link href="/services/brakes">Brake service</Link>
              </li>
              <li>
                <Link href="/services/bg-fluids">BG fluid services</Link>
              </li>
              <li>
                <Link href="/services/wheel-alignment">Wheel alignment</Link>
              </li>
              <li>
                <Link href="/services/air-conditioning">
                  Air conditioning repair
                </Link>
              </li>
              <li>
                <Link href="/services/suspension-steering">
                  Suspension and steering
                </Link>
              </li>
              <li>
                <Link href="/services/battery-services">Battery services</Link>
              </li>
              <li>
                <Link href="/services/state-inspection">
                  State safety and emission inspection
                </Link>
              </li>
              <li>
                <Link href="/services/engine-diagnostics">
                  Check engine diagnostics
                </Link>
              </li>
              <li>
                <Link href="/services/heating-system">
                  Heating system service
                </Link>
              </li>
              <li>
                <Link href="/services/oil-change">Oil change</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul className="contact">
              <li>
                <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {business.street},
                  <br />
                  {business.city}, {business.region} {business.postalCode}
                </a>
              </li>
              <li>
                <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
