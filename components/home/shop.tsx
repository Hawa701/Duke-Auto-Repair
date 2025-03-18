import { business } from "@/lib/business";

export default function HomeShop() {
  return (
    <section className="shop">
      <div className="wrap">
        <div className="sec-head">
          <h2>Stop by and say hello.</h2>
          <p>
            A real neighborhood shop with real people. Our front desk checks you
            in and keeps you posted while our technicians work on your car.
          </p>
        </div>
        <div className="gal">
          <figure className="a">
            <div
              className="ph"
              style={{
                backgroundImage: "url(/images/home/shop/front-desk.jpg)",
                backgroundPosition: "50% 30%",
              }}
            ></div>
            <figcaption>Our front desk team</figcaption>
          </figure>
          <figure className="">
            <div
              className="ph"
              role="img"
              aria-label="Checking you in"
              style={{
                backgroundImage: "url(/images/home/shop/check-in.jpg)",
                backgroundPosition: "50% 35%",
              }}
            ></div>
          </figure>
          <figure className="">
            <div
              className="ph"
              role="img"
              aria-label="Keeping you posted"
              style={{
                backgroundImage: "url(/images/home/shop/updates.jpg)",
