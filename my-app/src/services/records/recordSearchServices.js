import {
  countNews,
  findNews,
} from "../../repositories/records/newsRepository.js";

export async function searchRecords({
  q = "",
  region = "",
  theme = "",
  yearParam = "",
  type = "",
  page = 1,
  limit = 12,
}) {
  const conditions = [];

  /*
   * Full-text-like keyword search.
   *
   * For now we search across the important News fields.
   */
  if (q) {
    conditions.push({
      OR: [
        {
          title: {
            contains: q,
            mode: "insensitive",
          },
        },
        {
          summaryShort: {
            contains: q,
            mode: "insensitive",
          },
        },
        {
          sourceDescription: {
            contains: q,
            mode: "insensitive",
          },
        },
        {
          contentFull: {
            contains: q,
            mode: "insensitive",
          },
        },
        {
          region: {
            contains: q,
            mode: "insensitive",
          },
        },
        {
          theme: {
            contains: q,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  /*
   * Region filter
   */
  if (region) {
    conditions.push({
      region: {
        equals: region,
        mode: "insensitive",
      },
    });
  }

  /*
   * Theme filter
   */
  if (theme) {
    conditions.push({
      theme: {
        equals: theme,
        mode: "insensitive",
      },
    });
  }

  /*
   * Year filter
   */
  if (yearParam) {
    const year = Number(yearParam);

    if (!Number.isInteger(year)) {
      const error = new Error("Year must be a valid number");
      error.status = 400;
      throw error;
    }

    conditions.push({
      year,
    });
  }

  /*
   * At the moment this endpoint retrieves News records.
   *
   * We should NOT recreate the old mock behaviour where
   * Expedition / Researcher / Photo types were artificially
   * assigned based on array indexes.
   */
  if (type && type.toLowerCase() !== "all") {
    if (type.toLowerCase() !== "news") {
      return {
        total: 0,
        page,
        limit,
        totalPages: 0,
        records: [],
      };
    }
  }

  const where =
    conditions.length > 0
      ? {
          AND: conditions,
        }
      : {};

  const skip = (page - 1) * limit;

  const total = await countNews(where);

  const news = await findNews(where, skip, limit);

  /*
   * Convert database records into the response shape
   * expected by the existing frontend.
   */
  const records = news.map((item) => ({
    id: item.id,
    title: item.title,
    description:
      item.sourceDescription ||
      item.summaryShort ||
      "",
    summaryShort: item.summaryShort,
    publishedDate: item.publishedDate,
    year: item.year,
    sourceUrl: item.sourceUrl,
    region: item.region,
    theme: item.theme,

    // Current endpoint represents News records.
    type: "News",

    // Temporary placeholder so the existing frontend
    // does not break while image handling is finalized.
    imageUrl:
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80",
  }));

  return {
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    records,
  };
}