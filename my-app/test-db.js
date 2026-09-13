import "dotenv/config";
import prisma from "./src/lib/prisma.js";

async function main() {
  const newsCount = await prisma.news.count();
  const tagCount = await prisma.tag.count();
  const newsTagCount = await prisma.newsTag.count();

  console.log("News records:", newsCount);
  console.log("Tag records:", tagCount);
  console.log("News-Tag relationships:", newsTagCount);
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });