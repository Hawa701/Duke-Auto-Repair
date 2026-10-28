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
        description={article.subheading}
        image={article.image}
        imageAlt={article.imageAlt}
        imagePosition={article.imagePosition}
        compact
      />
      <div className="article-wrap wrap">
        <article className="article">
          <div className="article-meta">
            <span className="article-cat">{article.category}</span>
            <time dateTime={article.date}>
              {formatArticleDate(article.date)}
            </time>
            <span className="article-share">
              Share:
              <a
                className="share-btn"
                href={`https://twitter.com/intent/tweet?url=${share}&text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X (Twitter)"
              >
                <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4l16 16M20 4 4 20" />
                </svg>
              </a>
              <a
                className="share-btn"
                href={`https://www.facebook.com/sharer/sharer.php?u=${share}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
              >
                <svg className="i" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <CopyLinkButton url={url} />
            </span>
          </div>
          <div className="article-body">
            {article.body.map((block, index) => {
              if (block.type === "p") {
                return (
                  <p key={index}>
                    <RichText text={block.text} />
                  </p>
                );
              }
              if (block.type === "h2") {
                return <h2 key={index}>{block.text}</h2>;
              }
              const List = block.ordered ? "ol" : "ul";
              return (
                <List key={index}>
                  {block.items.map((item, itemIndex) => (
                    <li key={item.label ?? item.text}>
                      {block.ordered ? (
                        <span className="article-num" aria-hidden="true">
