import "dotenv/config";
import fs from "fs/promises";
import prisma from "../src/lib/prisma.js";

async function main() {
  // Read normalized news data
  const filePath = "./data/normalized/news.json";

  const file = await fs.readFile(filePath, "utf-8");
  const newsRecords = JSON.parse(file);

  console.log(`Found ${newsRecords.length} news records.`);

  let createdOrUpdated = 0;

  for (const record of newsRecords) {
    // Create or update the News record
    const news = await prisma.news.upsert({
      where: {
        sourceItemKey: record.sourceItemKey,
      },

      update: {
        title: record.title,
        slug: record.slug,
        summaryShort: record.summaryShort,
        sourceDescription: record.sourceDescription,
        contentFull: record.contentFull,
        region: record.region,
        theme: record.theme,
        year: record.year,
        publishedDate: new Date(record.publishedDate),
        sourceUrl: record.sourceUrl,
      },

      create: {
        title: record.title,
        slug: record.slug,
        summaryShort: record.summaryShort,
        sourceDescription: record.sourceDescription,
        contentFull: record.contentFull,
        region: record.region,
        theme: record.theme,
        year: record.year,
        publishedDate: new Date(record.publishedDate),
        sourceUrl: record.sourceUrl,
        sourceItemKey: record.sourceItemKey,
      },
    });

    // Create region tag
    const regionTag = await prisma.tag.upsert({
      where: {
        slug: record.region.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      },

      update: {},

      create: {
        name: record.region,
        slug: record.region.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      },
    });

    // Create theme tag
    const themeTag = await prisma.tag.upsert({
      where: {
        slug: record.theme.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      },

      update: {},

      create: {
        name: record.theme,
        slug: record.theme.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      },
    });

    // Connect News ↔ Region Tag
    await prisma.newsTag.upsert({
      where: {
        newsId_tagId: {
          newsId: news.id,
          tagId: regionTag.id,
        },
      },

      update: {},

      create: {
        newsId: news.id,
        tagId: regionTag.id,
      },
    });

    // Connect News ↔ Theme Tag
    await prisma.newsTag.upsert({
      where: {
        newsId_tagId: {
          newsId: news.id,
          tagId: themeTag.id,
        },
      },

      update: {},

      create: {
        newsId: news.id,
        tagId: themeTag.id,
      },
    });

    createdOrUpdated++;

    console.log(
      `${createdOrUpdated}/${newsRecords.length} → ${record.title}`
    );
  }

  console.log("\n✅ News seeding completed.");
}

main()
  .catch((error) => {
    console.error("\n❌ Seed failed:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });