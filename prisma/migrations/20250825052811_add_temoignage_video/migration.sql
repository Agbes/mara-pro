/*
  Warnings:

  - You are about to drop the column `category` on the `TemoignagesVideo` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."TemoignagesVideo_category_idx";

-- AlterTable
ALTER TABLE "public"."TemoignagesVideo" DROP COLUMN "category";
