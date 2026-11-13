import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleView, { articleMetadata } from "@/components/article-view";
import SiloPage from "@/components/silo-page";
import { plainText } from "@/components/rich-text";
import { isPublished, publishedArticles, type Article } from "@/lib/articles";
import { findService, services, type Service } from "@/lib/services";
import { rootVehicles, vehicles, type Vehicle } from "@/lib/vehicles";

// Root-level URLs from the Master SEO Blueprint: the service pages
// (e.g. /brake-repair/), the blueprint vehicle brands (e.g. /toyota-mechanic/)
// and the blueprint Car Tips articles once they are published.

export const dynamicParams = false;

const rootArticles = publishedArticles.filter((article) => article.root);

export function generateStaticParams() {
  return [...services, ...rootVehicles, ...rootArticles].map(({ slug }) => ({
    slug,
  }));
}

type Resolved =
  | { kind: "service"; item: Service }
  | { kind: "vehicle"; item: Vehicle }
  | { kind: "article"; item: Article };

const resolve = async (
  params: PageProps<"/[slug]">["params"],
): Promise<Resolved | undefined> => {
  const { slug } = await params;
  const service = findService(slug);
  if (service) return { kind: "service", item: service };
  const vehicle = rootVehicles.find((item) => item.slug === slug);
  if (vehicle) return { kind: "vehicle", item: vehicle };
  const article = rootArticles.find((item) => item.slug === slug);
  if (article) return { kind: "article", item: article };
};

export async function generateMetadata({
  params,
}: PageProps<"/[slug]">): Promise<Metadata> {
  const page = await resolve(params);
  if (!page) return {};
  if (page.kind === "article") {
    return isPublished(page.item) ? articleMetadata(page.item) : {};
  }
  const { metaTitle, metaDescription, heading, intro } = page.item;
  return {
    title: metaTitle ? { absolute: metaTitle } : heading,
    description: metaDescription ?? plainText(intro),
  };
}

export default async function RootSlugPage({
  params,
}: PageProps<"/[slug]">) {
  const page = await resolve(params);
  if (!page) notFound();

  if (page.kind === "article") {
    if (!isPublished(page.item)) notFound();
    return <ArticleView article={page.item} />;
  }

  if (page.kind === "service") {
    const service = page.item;
    return (
      <SiloPage
        name={service.name}
        heading={service.heading}
        intro={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
        imagePosition={service.imagePosition}
        sections={service.sections}
        banner={service.banner}
        logos={service.logos}
        gallery={service.gallery}
        parent={{ href: "/services", label: "Services" }}
        othersTitle="Other Services"
        others={services
          .filter((item) => item.slug !== service.slug)
          .map((item) => ({ href: item.href, label: item.name }))}
      />
    );
  }

  const vehicle = page.item;
  return (
    <SiloPage
      name={vehicle.name}
      heading={vehicle.heading}
      intro={vehicle.intro}
      image={vehicle.image}
      imageAlt={vehicle.imageAlt}
      imagePosition={vehicle.imagePosition}
      sections={vehicle.sections}
      banner={vehicle.banner}
      parent={{ href: "/vehicles", label: "Vehicles" }}
      othersTitle="Other Vehicles"
      others={vehicles
        .filter((item) => item.slug !== vehicle.slug)
        .map((item) => ({ href: item.href, label: item.name }))}
    />
  );
}
