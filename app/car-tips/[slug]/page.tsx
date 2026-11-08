import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleView, { articleMetadata } from "@/components/article-view";
import { findArticle, isPublished, publishedArticles } from "@/lib/articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedArticles
    .filter((article) => !article.root)
    .map(({ slug }) => ({ slug }));
}

const load = async (params: PageProps<"/car-tips/[slug]">["params"]) => {
  const article = findArticle((await params).slug);
  return article && !article.root && isPublished(article) ? article : undefined;
};

export async function generateMetadata({
  params,
}: PageProps<"/car-tips/[slug]">): Promise<Metadata> {
  const article = await load(params);
  return article ? articleMetadata(article) : {};
}

export default async function ArticlePage({
  params,
}: PageProps<"/car-tips/[slug]">) {
  const article = await load(params);
  if (!article) notFound();
  return <ArticleView article={article} />;
}
