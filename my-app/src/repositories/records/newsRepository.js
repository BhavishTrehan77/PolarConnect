import prisma from "../../lib/prisma.js";

export async function countNews(where) {
  return prisma.news.count({
    where,
  });
}

export async function findNews(where, skip, take) {
  return prisma.news.findMany({
    where,
    orderBy: {
      publishedDate: "desc",
    },
    skip,
    take,
    select: {
      id: true,
      title: true,
      summaryShort: true,
      sourceDescription: true,
      contentFull: true,
      region: true,
      theme: true,
      year: true,
      publishedDate: true,
      sourceUrl: true,
    },
  });
}
export async function findNewsById(id) {
  return prisma.news.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      slug: true,
      summaryShort: true,
      sourceDescription: true,
      contentFull: true,
      region: true,
      theme: true,
      year: true,
      type: true,
      publishedDate: true,
      sourceUrl: true,
      sourceItemKey: true,
      createdAt: true,
      updatedAt: true,

      photos: {
        select: {
          id: true,
          url: true,
          caption: true,
          altText: true,
          credit: true,
          sourceUrl: true,
          sourceType: true,
        },
      },

      tags: {
        select: {
          tag: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
        },
      },

      publicSummary: {
        select: {
          id: true,
          summary: true,
          language: true,
          model: true,
          generatedAt: true,
        },
      },
    },
  });
}
export async function findNewsBySourceItemKey(sourceItemKey) {
  return prisma.news.findUnique({
    where: {
      sourceItemKey,
    },
  });
}