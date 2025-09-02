/*
  Warnings:

  - You are about to drop the `Page` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Page";

-- CreateTable
CREATE TABLE "public"."ContentPage" (
    "id" SERIAL NOT NULL,
    "h1" TEXT NOT NULL,
    "h2" TEXT NOT NULL,
    "description1" TEXT NOT NULL,
    "description2" TEXT,
    "pageName" TEXT NOT NULL,
    "photo1" TEXT NOT NULL,
    "photo2" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContentPage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContentPage_pageName_key" ON "public"."ContentPage"("pageName");
