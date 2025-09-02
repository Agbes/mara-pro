/*
  Warnings:

  - You are about to drop the `_ArticleTags` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `metaDescription` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metaTitre` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."_ArticleTags" DROP CONSTRAINT "_ArticleTags_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ArticleTags" DROP CONSTRAINT "_ArticleTags_B_fkey";

-- AlterTable
ALTER TABLE "public"."Article" ADD COLUMN     "metaDescription" TEXT NOT NULL,
ADD COLUMN     "metaTitre" TEXT NOT NULL,
ALTER COLUMN "conclusion" SET DEFAULT 'Alors pour tous vos problemes, veuillez contacter le medium Ali Moussa';

-- DropTable
DROP TABLE "public"."_ArticleTags";

-- CreateTable
CREATE TABLE "public"."TagArticle" (
    "articleId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TagArticle_pkey" PRIMARY KEY ("articleId","tagId")
);

-- AddForeignKey
ALTER TABLE "public"."TagArticle" ADD CONSTRAINT "TagArticle_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "public"."Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TagArticle" ADD CONSTRAINT "TagArticle_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
