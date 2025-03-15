import Link from "next/link";
import Entrance from "../entrance";
import { business } from "@/lib/business";

export default function HomeServices() {
  return (
    <section className="svc" id="services">
      <div className="wrap">
        <Entrance className="sec-head" inView>
          <h2>Whatever your car needs, we've got it covered.</h2>
          <p>
            From a quick oil change to brakes, diagnostics and state
            inspections, it's all done here in one garage. No running from shop
            to shop.
          </p>
        </Entrance>
        <div className="board">
          <div className="s hot" id="brake-repair">
            <div className="ic">
              <svg aria-hidden="true" className="i" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3.2" />
                <path d="M12 3a9 9 0 0 1 8.5 6" />
                <path d="M16.5 4.2 19 7.5" />
              </svg>
            </div>
            <h3>Brake repair</h3>
            <p>Free brake inspection and premium brake service.</p>
            <Link href="/services/brakes">
              Learn more
