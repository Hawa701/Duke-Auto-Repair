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
