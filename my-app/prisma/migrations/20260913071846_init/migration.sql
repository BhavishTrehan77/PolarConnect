-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "summaryShort" TEXT,
    "sourceDescription" TEXT,
    "contentFull" TEXT,
    "region" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "type" TEXT,
    "publishedDate" TIMESTAMP(3) NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "sourceItemKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expedition" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "sourceUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Expedition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Researcher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "affiliation" TEXT,
    "bio" TEXT,
    "profileUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Researcher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "caption" TEXT,
    "altText" TEXT,
    "credit" TEXT,
    "sourceUrl" TEXT,
    "sourceType" TEXT,
    "newsId" TEXT,
    "expeditionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublicSummary" (
    "id" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'en',
    "model" TEXT,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "newsId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PublicSummary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsTag" (
    "newsId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "NewsTag_pkey" PRIMARY KEY ("newsId","tagId")
);

-- CreateTable
CREATE TABLE "ExpeditionResearcher" (
    "expeditionId" TEXT NOT NULL,
    "researcherId" TEXT NOT NULL,

    CONSTRAINT "ExpeditionResearcher_pkey" PRIMARY KEY ("expeditionId","researcherId")
);

-- CreateTable
CREATE TABLE "ExpeditionTag" (
    "expeditionId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "ExpeditionTag_pkey" PRIMARY KEY ("expeditionId","tagId")
);

-- CreateTable
CREATE TABLE "ResearcherTag" (
    "researcherId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "ResearcherTag_pkey" PRIMARY KEY ("researcherId","tagId")
);

-- CreateIndex
CREATE UNIQUE INDEX "News_slug_key" ON "News"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "News_sourceItemKey_key" ON "News"("sourceItemKey");

-- CreateIndex
CREATE INDEX "News_region_idx" ON "News"("region");

-- CreateIndex
CREATE INDEX "News_theme_idx" ON "News"("theme");

-- CreateIndex
CREATE INDEX "News_year_idx" ON "News"("year");

-- CreateIndex
CREATE INDEX "News_type_idx" ON "News"("type");

-- CreateIndex
CREATE INDEX "News_region_theme_year_idx" ON "News"("region", "theme", "year");

-- CreateIndex
CREATE INDEX "Expedition_region_idx" ON "Expedition"("region");

-- CreateIndex
CREATE INDEX "Expedition_startDate_idx" ON "Expedition"("startDate");

-- CreateIndex
CREATE INDEX "Researcher_name_idx" ON "Researcher"("name");

-- CreateIndex
CREATE INDEX "Photo_newsId_idx" ON "Photo"("newsId");

-- CreateIndex
CREATE INDEX "Photo_expeditionId_idx" ON "Photo"("expeditionId");

-- CreateIndex
CREATE UNIQUE INDEX "PublicSummary_newsId_key" ON "PublicSummary"("newsId");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_slug_key" ON "Tag"("slug");

-- CreateIndex
CREATE INDEX "NewsTag_tagId_idx" ON "NewsTag"("tagId");

-- CreateIndex
CREATE INDEX "ExpeditionResearcher_researcherId_idx" ON "ExpeditionResearcher"("researcherId");

-- CreateIndex
CREATE INDEX "ExpeditionTag_tagId_idx" ON "ExpeditionTag"("tagId");

-- CreateIndex
CREATE INDEX "ResearcherTag_tagId_idx" ON "ResearcherTag"("tagId");

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_expeditionId_fkey" FOREIGN KEY ("expeditionId") REFERENCES "Expedition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicSummary" ADD CONSTRAINT "PublicSummary_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsTag" ADD CONSTRAINT "NewsTag_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsTag" ADD CONSTRAINT "NewsTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpeditionResearcher" ADD CONSTRAINT "ExpeditionResearcher_expeditionId_fkey" FOREIGN KEY ("expeditionId") REFERENCES "Expedition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpeditionResearcher" ADD CONSTRAINT "ExpeditionResearcher_researcherId_fkey" FOREIGN KEY ("researcherId") REFERENCES "Researcher"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpeditionTag" ADD CONSTRAINT "ExpeditionTag_expeditionId_fkey" FOREIGN KEY ("expeditionId") REFERENCES "Expedition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpeditionTag" ADD CONSTRAINT "ExpeditionTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearcherTag" ADD CONSTRAINT "ResearcherTag_researcherId_fkey" FOREIGN KEY ("researcherId") REFERENCES "Researcher"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearcherTag" ADD CONSTRAINT "ResearcherTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
