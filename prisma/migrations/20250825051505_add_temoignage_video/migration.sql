/*
  Warnings:

  - You are about to drop the `Temoignages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Temoignages";

-- CreateTable
CREATE TABLE "public"."TemoignagesTexte" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TemoignagesTexte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TemoignagesVideo" (
    "id" SERIAL NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TemoignagesVideo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TemoignagesTexte_category_idx" ON "public"."TemoignagesTexte"("category");

-- CreateIndex
CREATE INDEX "TemoignagesVideo_category_idx" ON "public"."TemoignagesVideo"("category");
