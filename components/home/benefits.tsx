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
