// lib/seo.ts
import { Article } from "@prisma/client";
import type { Metadata } from "next";
import prisma from "./prisma";

// ----------------------------
// Typage SEO
// ----------------------------
export type SEOProps = {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  other?: Record<string, string>;
  tags?: string[];
  section?: string;
  authorName?: string;
  datePublished?: string;
  dateModified?: string;
  type?: "WebSite" | "Article";
};

// ----------------------------
// Config site
// ----------------------------
const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "",
  url: process.env.NEXT_PUBLIC_URL_SITE_BASE || "",
  other: {
    "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_CONSOLE || "",
  },
  twitter: process.env.NEXT_PUBLIC_TWITER_NAME || "",
  defaultImage: `${process.env.NEXT_PUBLIC_URL_SITE_BASE}/images/ali-moussa.jpg`,
};

// ----------------------------
// Génération Metadata pour Next.js
// ----------------------------
export function generateStaticMetadata({
  title,
  description,
  keywords = [],
  path = "/",
  image,
  other,
  tags = [],
  section,
}: SEOProps): Metadata {
  const fullUrl = `${siteConfig.url}${path}`;
  const imageUrl = image || siteConfig.defaultImage;

  // Combiner tags et section dans keywords pour OG
  const ogKeywords = [...keywords, ...tags];
  if (section) ogKeywords.push(section);

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: ogKeywords,
    other: other || siteConfig.other,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: fullUrl,
      siteName: siteConfig.name,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      locale: "fr_FR",
      type: "article", // suffisant pour OG
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitter,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ----------------------------
// JSON-LD pour Google
// ----------------------------
type JSONLDWebSite = {
  "@context": "https://schema.org";
  "@type": "WebSite" | "Article";
  name: string;
  description: string;
  url: string;
  image?: string;
  author?: { "@type": "Person"; name: string };
  datePublished?: string;
  dateModified?: string;
  keywords?: string;
};

export function generateJSONLD({
  title,
  description,
  path = "/",
  image,
  authorName,
  datePublished,
  dateModified,
  tags = [],
  type = "WebSite",
}: SEOProps) {
  const fullUrl = `${siteConfig.url}${path}`;

  const json: JSONLDWebSite = {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url: fullUrl,
  };

  if (image) json.image = image;
  if (authorName) json.author = { "@type": "Person", name: authorName };
  if (datePublished) json.datePublished = datePublished;
  if (dateModified) json.dateModified = dateModified;
  if (tags.length) json.keywords = tags.join(", ");

  return JSON.stringify(json);
}

// ----------------------------
// Typage exact pour article avec relations
// ----------------------------
export type ArticleWithRelations = Article & {
  category: { id: number; name: string; slug: string } | null;
  tagsArticles: {
    assignedAt: Date;
    tag: { id: number; name: string; slug: string };
  }[];
};

// ----------------------------
// SEO Props depuis un article
// ----------------------------
export function seoPropsFromArticle(article: ArticleWithRelations): SEOProps {
  const tagKeywords = article.tagsArticles.map(t => t.tag.name);
  const categoryKeyword = article.category?.name ? [article.category.name] : [];

  return {
    title: article.metaTitre,
    description: article.metaDescription,
    keywords: [...tagKeywords, ...categoryKeyword],
    path: `/rituels/${article.slug}`,
    image: article.coverImage || undefined,
    tags: tagKeywords,
    section: article.category?.name,
    authorName: "Medium Ali Moussa",
    datePublished: article.createdAt?.toISOString(),
    dateModified: article.updatedAt?.toISOString(),
    type: "Article",
    other: { "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_CONSOLE || "" },
  };
}

// ----------------------------
// SEO Props depuis un tag
// ----------------------------
export async function seoPropsFromTagDynamic(tagSlug: string): Promise<SEOProps> {
  const tag = await prisma.tag.findUnique({ where: { slug: tagSlug } });
  if (!tag) {
    return {
      title: `Tag non trouvé`,
      description: `Ce tag n’existe pas`,
      path: `/tags/${tagSlug}`,
    };
  }

  const articles = await prisma.article.findMany({
    where: { tagsArticles: { some: { tagId: tag.id } } },
    include: { tagsArticles: { select: { tag: { select: { name: true } } } } },
  });

  const allTags = Array.from(new Set(articles.flatMap(a => a.tagsArticles.map(t => t.tag.name))));

  return {
    title: `Articles sur ${tag.name}`,
    description: `Tous les articles liés au tag "${tag.name}"`,
    path: `/tags/${tag.slug}`,
    tags: allTags,
    type: "WebSite",
    other: { "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_CONSOLE || "" },
  };
}

// ----------------------------
// SEO Props depuis une catégorie
// ----------------------------
export async function seoPropsFromCategoryDynamic(categorySlug: string): Promise<SEOProps> {
  const category = await prisma.category.findUnique({ where: { slug: categorySlug } });
  if (!category) {
    return {
      title: `Catégorie non trouvée`,
      description: `Cette catégorie n’existe pas`,
      path: `/category/${categorySlug}`,
    };
  }

  const articles = await prisma.article.findMany({
    where: { categoryId: category.id },
    include: { tagsArticles: { select: { tag: { select: { name: true } } } } },
  });

  const allTags = Array.from(new Set(articles.flatMap(a => a.tagsArticles.map(t => t.tag.name))));

  return {
    title: `Articles dans la catégorie ${category.name}`,
    description: `Tous les articles de la catégorie "${category.name}"`,
    path: `/category/${category.slug}`,
    tags: allTags,
    section: category.name,
    type: "WebSite",
    other: { "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_CONSOLE || "" },
  };
}

// ----------------------------
// Génération dynamique Next.js
// ----------------------------
export async function generateMetadataTag({ params }: { params: { slug: string } }): Promise<Metadata> {
  const seoProps = await seoPropsFromTagDynamic(params.slug);
  return generateStaticMetadata(seoProps);
}

export async function generateMetadataCategory({ params }: { params: { slug: string } }): Promise<Metadata> {
  const seoProps = await seoPropsFromCategoryDynamic(params.slug);
  return generateStaticMetadata(seoProps);
}

export async function generateMetadataArticle({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
    include: {
      category: { select: { id: true, name: true, slug: true } },
      tagsArticles: { select: { tag: { select: { id: true, name: true, slug: true } }, assignedAt: true } },
    },
  });

  if (!article) {
    return generateStaticMetadata({
      title: "Article non trouvé",
      description: "Cet article n’existe pas.",
    });
  }

  return generateStaticMetadata(seoPropsFromArticle(article));
}
