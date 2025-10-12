import { getAllArticles, getAllCategory, getAllTag } from "@/lib/getArticles";
import { MetadataRoute } from "next";


export const dynamic = 'force-static';
export const revalidate = 86400; // 1 jour


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.SITE_URL || "https://www.medium-ali-moussa.com";

  const articles = await getAllArticles();
  const categories = await getAllCategory();
  const tags = await getAllTag();

  const urlArticles: MetadataRoute.Sitemap = articles.map((a) => ({
  url: `${baseUrl}rituels/${encodeURIComponent(a.slug)}`,
lastModified: new Date(a.updatedAt || a.publishedAt || new Date()).toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  const urlCategories: MetadataRoute.Sitemap = categories.map((c) => ({
  url: `${baseUrl}categorie/${encodeURIComponent(c.slug)}`,
  lastModified: new Date(c.createdAt || new Date()).toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  }));

  const urlTags: MetadataRoute.Sitemap = tags.map((t) => ({
  url: `${baseUrl}tag/${encodeURIComponent(t.slug)}`,
  lastModified: new Date(t.createdAt || new Date()).toISOString(),
    changeFrequency: "daily",
    priority: 0.6,
  }));

  const urlStatic: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
  lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/rituels`,
  lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/affaire-justice`,
  lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
  lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/retour-affectif`,
  lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/envoutements`,
  lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/galerie`,
  lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/propos`,
  lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/temoignages`,
  lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  return [...urlStatic, ...urlArticles, ...urlCategories, ...urlTags];
}
