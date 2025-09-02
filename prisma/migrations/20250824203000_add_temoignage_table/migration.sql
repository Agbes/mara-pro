/*
  Warnings:

  - You are about to drop the `Temoignage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Temoignage";

-- CreateTable
CREATE TABLE "public"."Temoignages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Temoignages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Temoignages_category_idx" ON "public"."Temoignages"("category");
