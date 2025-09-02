-- CreateTable
CREATE TABLE "public"."Page" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "titleSEO" TEXT NOT NULL,
    "descriptionSEO" TEXT NOT NULL,
    "h1" TEXT NOT NULL,
    "contentBlocks" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Page_slug_key" ON "public"."Page"("slug");
