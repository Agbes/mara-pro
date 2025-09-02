import prisma from "../src/lib/prisma";
import { slugify } from "../src/lib/slugify";
async function main() {
  // 🔹 Catégories
  const categories = await prisma.category.findMany();

  for (const cat of categories) {
    const slug = slugify(cat.name);

    const existing = await prisma.category.findUnique({ where: { slug } });

    if (!existing) {
      await prisma.category.update({
        where: { id: cat.id },
        data: { slug },
      });
      console.log(`✅ Catégorie "${cat.name}" mise à jour avec slug "${slug}"`);
    } else {
      console.log(`⚠️ Slug "${slug}" déjà existant pour une autre catégorie`);
    }
  }

  // 🔹 Tags
  const tags = await prisma.tag.findMany();

  for (const tag of tags) {
    const slug = slugify(tag.name);

    const existing = await prisma.tag.findUnique({ where: { slug } });

    if (!existing) {
      await prisma.tag.update({
        where: { id: tag.id },
        data: { slug },
      });
      console.log(`✅ Tag "${tag.name}" mis à jour avec slug "${slug}"`);
    } else {
      console.log(`⚠️ Slug "${slug}" déjà existant pour un autre tag`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
  
