import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import BookingCta from "@/components/home/booking-cta";
import CopyLinkButton from "@/components/copy-link-button";
import Icon from "@/components/icon";
import RichText from "@/components/rich-text";
import { business, withBookingPopup } from "@/lib/business";
import {
  articleHref,
  findArticle,
  formatArticleDate,
  isPublished,
  type PublishedArticle,
} from "@/lib/articles";
import "@/app/car-tips/car-tips.css";

/** Shared by /car-tips/<slug>/ and the root-level blueprint article URLs. */
export function articleMetadata(article: PublishedArticle): Metadata {
  const description = article.metaDescription ?? article.subheading;
  return {
    // Blueprint meta titles are complete; older articles use the site template.
    title: article.metaTitle
      ? { absolute: article.metaTitle }
      : article.root
        ? { absolute: article.title }
        : article.title,
    description,
    openGraph: {
      type: "article",
      title: article.title,
      description,
      publishedTime: article.date,
      images: [article.image],
    },
  };
}

export default function ArticleView({
  article,
}: {
  article: PublishedArticle;
}) {
  const url = `${business.siteUrl}${articleHref(article)}/`;
  const share = encodeURIComponent(url);
  const related = (article.related ?? []).flatMap((slug) => {
    const item = findArticle(slug);
    return item ? [item] : [];
  });

  return (
    <div className="article-page">
      <PageHeader
        title={article.title}
        breadcrumb="Article"
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/car-tips", label: "Car Tips" },
        ]}
