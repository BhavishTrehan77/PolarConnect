import "dotenv/config";
import prisma from "./src/lib/prisma.js";

async function main() {
  const newsCount = await prisma.news.count();
  const tagCount = await prisma.tag.count();
  const newsTagCount = await prisma.newsTag.count();

  const researcherCount = await prisma.researcher.count();
  const expeditionCount = await prisma.expedition.count();
  const expeditionResearcherCount =
    await prisma.expeditionResearcher.count();
  const expeditionTagCount = await prisma.expeditionTag.count();

  console.log("========== DATABASE VERIFICATION ==========\n");

  console.log("News records:", newsCount);
  console.log("Tag records:", tagCount);
  console.log("News-Tag relationships:", newsTagCount);

  console.log("\n--- Phase 9/10 ---");

  console.log("Researcher records:", researcherCount);
  console.log("Expedition records:", expeditionCount);
  console.log(
    "Expedition-Researcher relationships:",
    expeditionResearcherCount
  );
  console.log(
    "Expedition-Tag relationships:",
    expeditionTagCount
  );

  console.log("\n===========================================");
}

main()
  .catch((error) => {
    console.error("❌ Verification failed:");
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });