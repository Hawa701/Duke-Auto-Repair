import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import BookingCta from "@/components/home/booking-cta";
import Icon from "@/components/icon";
import Tabs from "@/components/tabs";
import { business } from "@/lib/business";
import {
  articleHref,
  articles,
  formatArticleDate,
  isPublished,
  serviceAreas,
} from "@/lib/articles";
import { services } from "@/lib/services";
import "./car-tips.css";

export const metadata: Metadata = {
  title: "Car Tips",
  description: `Car care articles and seasonal prep guides from the ASE-certified mechanics at ${business.name} in ${business.city}, ${business.region}.`,
};

// Published articles newest first, then the upcoming titles in blueprint order.
const byDate = [...articles].sort((a, b) =>
  a.date && b.date ? b.date.localeCompare(a.date) : a.date ? -1 : b.date ? 1 : 0,
);
const categories = [...new Set(byDate.map((article) => article.category))];

export default function CarTipsPage() {
  return (
    <div className="car-tips-page">
      <PageHeader
        title="Car Tips"
        description="Educational articles and seasonal prep guides from the mechanics who work on Alexandria's cars every day."
        image="/images/about/techs-under-hood.jpg"
        imagePosition="center 45%"
      />
      <section className="tips-hub" aria-label="Car tips">
        <div className="wrap">
          <Tabs
            id="car-tips"
            label="Car tips sections"
            tabs={[
              {
                id: "articles",
                label: "Automotive Articles",
                content: categories.map((category) => (
                  <section key={category} className="tips-category">
                    <h2>{category}</h2>
                    <ul className="tips-list">
                      {byDate
                        .filter((article) => article.category === category)
                        .map((article) => (
                          <li key={article.slug}>
                            {article.date ? (
                              <time dateTime={article.date}>
                                {formatArticleDate(article.date)}
                              </time>
                            ) : (
