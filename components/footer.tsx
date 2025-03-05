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
