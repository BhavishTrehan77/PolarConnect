import { findNewsById } from "../../repositories/records/newsRepository.js";

export async function getRecordById(id) {
  const record = await findNewsById(id);

  if (!record) {
    const error = new Error("Record not found");
    error.status = 404;
    throw error;
  }

  return {
    id: record.id,
    title: record.title,
    slug: record.slug,
    summaryShort: record.summaryShort,
    description:
      record.sourceDescription ||
      record.summaryShort ||
      "",
    contentFull: record.contentFull,
    region: record.region,
    theme: record.theme,
    year: record.year,
    type: record.type || "News",
    publishedDate: record.publishedDate,
    sourceUrl: record.sourceUrl,

    photos: record.photos,

    tags: record.tags.map((item) => item.tag),

    publicSummary: record.publicSummary,
  };
}