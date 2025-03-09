import { business } from "@/lib/business";
import Entrance from "@/components/entrance";
import Link from "next/link";

export default function HomeBenefits({ id }: { id?: string }) {
  return (
    <section className="diff" id={id}>
      <div className="wrap">
        <div className="sec-head">
          <h2>We just do auto care differently.</h2>
          <p>
            Two things most shops don't offer, and neither one costs you
            anything.
          </p>
        </div>

        <Entrance className="perk" pattern="left" inView>
          <div
            className="media"
            style={{ backgroundImage: "url(/images/home/keys.jpg)" }}
          ></div>
          <div className="body">
            <span className="free">Complimentary</span>
            <h3>Concierge vehicle pick-up and drop-off</h3>
            <p>
              Let us come to you. We'll pick up your vehicle, service it, and
              return it to your door.
            </p>
            <ul className="ticks">
              <li>
