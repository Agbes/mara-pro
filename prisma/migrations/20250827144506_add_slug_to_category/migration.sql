/*
  Warnings:

  - Made the column `slug` on table `Category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `Tag` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Category" ALTER COLUMN "slug" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."Tag" ALTER COLUMN "slug" SET NOT NULL;
