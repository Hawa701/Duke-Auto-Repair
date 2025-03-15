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
