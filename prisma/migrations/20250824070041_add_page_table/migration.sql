/*
  Warnings:

  - You are about to drop the column `contentBlocks` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `h1` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Page` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Page` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contentBody` to the `Page` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contentMeta` to the `Page` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Page` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Page_slug_key";

-- AlterTable
ALTER TABLE "public"."Page" DROP COLUMN "contentBlocks",
DROP COLUMN "h1",
DROP COLUMN "slug",
ADD COLUMN     "contentBody" JSONB NOT NULL,
ADD COLUMN     "contentMeta" JSONB NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Page_name_key" ON "public"."Page"("name");
