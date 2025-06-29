import type { Metadata } from "next";
import Hero from "@/components/home/hero";
import HomeBenefits from "@/components/home/benefits";
import HomeAwards from "@/components/home/awards";
import HomeCrew from "@/components/home/crew";
import HomeShop from "@/components/home/shop";
import BookingSteps from "@/components/home/booking-steps";
import HomeServices from "@/components/home/services";
import HomeReviews from "@/components/home/reviews";
import BookingCta from "@/components/home/booking-cta";
import "./home.css";

export const metadata: Metadata = { title: "Home" };

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <HomeServices />
      <HomeAwards />
      <HomeBenefits />
      <HomeCrew />
      <BookingSteps />
      <HomeReviews />
      <HomeShop />
      <BookingCta />
    </div>
  );
}
