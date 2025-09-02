// lib/getArticles.ts
import { ArticleDTO, ArticleWithRelations, CategoryDTO, mapArticle, TagDTO } from "../../types/articles-tytp";
import prisma from "./prisma";



export async function getArticles(): Promise<ArticleDTO[]> {
    const articlesRaw: ArticleWithRelations[] = await prisma.article.findMany({
        orderBy: { updatedAt: "desc" },
        include: {
            category: { select: { id: true, name: true, slug: true } },
            tagsArticles: {
                select: {
                    tag: { select: { id: true, name: true, slug: true } },
                    assignedAt: true,
                },
            },
        },
    });

    return articlesRaw.map(mapArticle);
}


export async function getArticlesByCategory(categorySlug: string): Promise<{
    category: { id: string; name: string; slug: string; articles: ArticleDTO[] } | null;
    articlesAll: ArticleDTO[];
}> {
    // Articles de la catégorie
    const category = await prisma.category.findUnique({
        where: { slug: categorySlug },
        include: {
            articles: {
                include: {
                    category: { select: { id: true, name: true, slug: true } },
                    tagsArticles: {
                        select: { tag: { select: { id: true, name: true, slug: true } }, assignedAt: true },
                    },
                },
                orderBy: { updatedAt: "desc" },
            },
        },
    });

    // Tous les articles pour suggestions
    const articlesRaw: ArticleWithRelations[] = await prisma.article.findMany({
        orderBy: { updatedAt: "desc" },
        include: {
            category: { select: { id: true, name: true, slug: true } },
            tagsArticles: {
                select: { tag: { select: { id: true, name: true, slug: true } }, assignedAt: true },
            },
        },
    });

    const articlesAll: ArticleDTO[] = articlesRaw.map(mapArticle);

    return {
        category: category
            ? {
                id: category.id.toString(),  // <-- ici on convertit en string
                name: category.name,
                slug: category.slug,
                articles: category.articles.map(mapArticle),
            }
            : null,
        articlesAll,
    };
}

export async function getArticlesByTag(tagSlug: string): Promise<{
    tag: { id: string; name: string; articles: ArticleDTO[] } | null;
    articlesAll: ArticleDTO[];
}> {
    const tagWithArticles = await prisma.tag.findUnique({
        where: { slug: tagSlug },
        include: {
            tagsArticles: {
                include: {
                    article: {
                        include: {
                            category: { select: { id: true, name: true, slug: true } },
                            tagsArticles: {
                                select: { tag: { select: { id: true, name: true, slug: true } }, assignedAt: true }
                            }
                        }
                    }
                },
                orderBy: { article: { updatedAt: "desc" } }
            }
        }
    });

    // Tous les articles pour suggestions
    const articlesRaw: ArticleWithRelations[] = await prisma.article.findMany({
        orderBy: { updatedAt: "desc" },
        include: {
            category: { select: { id: true, name: true, slug: true } },
            tagsArticles: { select: { tag: { select: { id: true, name: true, slug: true } }, assignedAt: true } }
        }
    });
    const articlesAll: ArticleDTO[] = articlesRaw.map(mapArticle);

    return {
        tag: tagWithArticles
            ? {
                id: tagWithArticles.id.toString(),
                name: tagWithArticles.name,
                articles: tagWithArticles.tagsArticles.map((ta) => mapArticle(ta.article))
            }
            : null,
        articlesAll
    };
}


export async function getAllArticles(): Promise<ArticleDTO[]> {
    const articlesRaw: ArticleWithRelations[] = await prisma.article.findMany({
        orderBy: { updatedAt: "desc" },
        include: {
            category: { select: { id: true, name: true, slug: true } },
            tagsArticles: {
                select: { tag: { select: { id: true, name: true, slug: true } }, assignedAt: true },
            },
        },
    });

    return articlesRaw.map(mapArticle);
}



export async function getAllTag(): Promise<TagDTO[]> {
  const tagsRaw = await prisma.tag.findMany({
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      slug: true,
      createdAt: true, // 🔹 obligatoire pour TagDTO
      tagsArticles: { select: { articleId: true } }, // facultatif
    },
  });

  return tagsRaw.map((tag) => ({
    id: tag.id,
    name: tag.name,
    slug: tag.slug,
    createdAt: tag.createdAt.toISOString(),
    articleCount: tag.tagsArticles.length,
  }));
}



export async function getAllCategory(): Promise<CategoryDTO[]> {  // Updated return type to CategoryDTO[]
  const categoriesRaw = await prisma.category.findMany({
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      slug: true,
      createdAt: true,
    },
  });

  return categoriesRaw.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    createdAt: category.createdAt.toISOString(),  
  }));
}