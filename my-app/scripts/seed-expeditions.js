import "dotenv/config";
import prisma from "../src/lib/prisma.js";

const researchers = [
  {
    id: "researcher-01",
    name: "Aarav Mehta",
    affiliation: "Polar Climate Research Demo Unit",
    bio: "Synthetic researcher profile for PolarConnect demonstration data.",
  },
  {
    id: "researcher-02",
    name: "Ishita Sharma",
    affiliation: "Ocean Observation Research Demo Unit",
    bio: "Synthetic researcher profile for PolarConnect demonstration data.",
  },
  {
    id: "researcher-03",
    name: "Rohan Kapoor",
    affiliation: "Cryosphere Research Demo Unit",
    bio: "Synthetic researcher profile for PolarConnect demonstration data.",
  },
  {
    id: "researcher-04",
    name: "Ananya Rao",
    affiliation: "Marine Ecosystem Research Demo Unit",
    bio: "Synthetic researcher profile for PolarConnect demonstration data.",
  },
  {
    id: "researcher-05",
    name: "Arjun Verma",
    affiliation: "Remote Sensing Research Demo Unit",
    bio: "Synthetic researcher profile for PolarConnect demonstration data.",
  },
  {
    id: "researcher-06",
    name: "Meera Nair",
    affiliation: "Polar Oceanography Research Demo Unit",
    bio: "Synthetic researcher profile for PolarConnect demonstration data.",
  },
  {
    id: "researcher-07",
    name: "Kabir Singh",
    affiliation: "Climate Systems Research Demo Unit",
    bio: "Synthetic researcher profile for PolarConnect demonstration data.",
  },
  {
    id: "researcher-08",
    name: "Diya Malhotra",
    affiliation: "Antarctic Studies Research Demo Unit",
    bio: "Synthetic researcher profile for PolarConnect demonstration data.",
  },
  {
    id: "researcher-09",
    name: "Aditya Iyer",
    affiliation: "Marine Geoscience Research Demo Unit",
    bio: "Synthetic researcher profile for PolarConnect demonstration data.",
  },
  {
    id: "researcher-10",
    name: "Sara Khan",
    affiliation: "Arctic Research Demo Unit",
    bio: "Synthetic researcher profile for PolarConnect demonstration data.",
  },
  {
    id: "researcher-11",
    name: "Vivaan Joshi",
    affiliation: "Atmospheric Science Research Demo Unit",
    bio: "Synthetic researcher profile for PolarConnect demonstration data.",
  },
  {
    id: "researcher-12",
    name: "Kavya Menon",
    affiliation: "Biodiversity Research Demo Unit",
    bio: "Synthetic researcher profile for PolarConnect demonstration data.",
  },
  {
    id: "researcher-13",
    name: "Yash Thakur",
    affiliation: "Glaciology Research Demo Unit",
    bio: "Synthetic researcher profile for PolarConnect demonstration data.",
  },
  {
    id: "researcher-14",
    name: "Priya Deshmukh",
    affiliation: "Polar Data Research Demo Unit",
    bio: "Synthetic researcher profile for PolarConnect demonstration data.",
  },
  {
    id: "researcher-15",
    name: "Nikhil Bansal",
    affiliation: "Earth Observation Research Demo Unit",
    bio: "Synthetic researcher profile for PolarConnect demonstration data.",
  },
];

const expeditions = [
  {
    id: "expedition-01",
    name: "Antarctic Climate Observation Demo 01",
    description:
      "Synthetic expedition record demonstrating Antarctic climate observations and environmental monitoring.",
    region: "Antarctica",
    startDate: new Date("2026-01-10"),
    endDate: new Date("2026-02-05"),
  },
  {
    id: "expedition-02",
    name: "Antarctic Ocean Survey Demo 02",
    description:
      "Synthetic expedition record demonstrating marine and oceanographic observations in Antarctic waters.",
    region: "Antarctica",
    startDate: new Date("2026-01-20"),
    endDate: new Date("2026-02-18"),
  },
  {
    id: "expedition-03",
    name: "Southern Ocean Ecosystem Study Demo 03",
    description:
      "Synthetic expedition record focused on Southern Ocean ecosystem observation and biodiversity.",
    region: "Southern Ocean",
    startDate: new Date("2026-02-01"),
    endDate: new Date("2026-02-25"),
  },
  {
    id: "expedition-04",
    name: "Antarctic Ice Dynamics Demo 04",
    description:
      "Synthetic expedition record demonstrating glacier and ice-sheet monitoring activities.",
    region: "Antarctica",
    startDate: new Date("2026-02-10"),
    endDate: new Date("2026-03-08"),
  },
  {
    id: "expedition-05",
    name: "Arctic Ocean Observation Demo 05",
    description:
      "Synthetic expedition record focused on Arctic oceanographic observations.",
    region: "Arctic",
    startDate: new Date("2026-03-05"),
    endDate: new Date("2026-03-28"),
  },
  {
    id: "expedition-06",
    name: "Arctic Climate Monitoring Demo 06",
    description:
      "Synthetic expedition record demonstrating Arctic climate and atmospheric monitoring.",
    region: "Arctic",
    startDate: new Date("2026-03-15"),
    endDate: new Date("2026-04-10"),
  },
  {
    id: "expedition-07",
    name: "Indian Ocean Marine Survey Demo 07",
    description:
      "Synthetic expedition record demonstrating marine observations in the Indian Ocean.",
    region: "Indian Ocean",
    startDate: new Date("2026-04-01"),
    endDate: new Date("2026-04-24"),
  },
  {
    id: "expedition-08",
    name: "Indian Ocean Climate Study Demo 08",
    description:
      "Synthetic expedition record focused on ocean and climate observations.",
    region: "Indian Ocean",
    startDate: new Date("2026-04-12"),
    endDate: new Date("2026-05-05"),
  },
  {
    id: "expedition-09",
    name: "Himalaya Cryosphere Study Demo 09",
    description:
      "Synthetic expedition record demonstrating cryosphere and high-altitude environmental research.",
    region: "Himalaya",
    startDate: new Date("2026-05-01"),
    endDate: new Date("2026-05-20"),
  },
  {
    id: "expedition-10",
    name: "Polar Atmospheric Research Demo 10",
    description:
      "Synthetic expedition record demonstrating atmospheric observations across polar regions.",
    region: "Polar Regions",
    startDate: new Date("2026-05-10"),
    endDate: new Date("2026-06-02"),
  },
  {
    id: "expedition-11",
    name: "Southern Ocean Biodiversity Demo 11",
    description:
      "Synthetic expedition record focused on marine biodiversity and ecosystem monitoring.",
    region: "Southern Ocean",
    startDate: new Date("2026-06-01"),
    endDate: new Date("2026-06-24"),
  },
  {
    id: "expedition-12",
    name: "Polar Climate Observation Demo 12",
    description:
      "Synthetic expedition record demonstrating integrated polar climate observations.",
    region: "Polar Regions",
    startDate: new Date("2026-06-15"),
    endDate: new Date("2026-07-10"),
  },
];

const expeditionResearcherMap = [
  [0, 0],
  [0, 1],
  [0, 2],

  [1, 1],
  [1, 3],
  [1, 5],

  [2, 3],
  [2, 5],
  [2, 7],

  [3, 0],
  [3, 4],
  [3, 12],

  [4, 5],
  [4, 9],
  [4, 10],

  [5, 6],
  [5, 9],
  [5, 11],

  [6, 1],
  [6, 8],
  [6, 14],

  [7, 6],
  [7, 8],
  [7, 13],

  [8, 2],
  [8, 11],
  [8, 13],

  [9, 4],
  [9, 10],
  [9, 14],

  [10, 3],
  [10, 7],
  [10, 12],

  [11, 0],
  [11, 6],
  [11, 14],
];

const expeditionTagMap = [
  [0, ["climate", "polar-research"]],
  [1, ["ocean-science", "polar-research"]],
  [2, ["ocean-conservation", "biodiversity"]],
  [3, ["polar-research", "cryosphere"]],
  [4, ["ocean-science", "arctic"]],
  [5, ["climate", "arctic"]],
  [6, ["ocean-science", "marine-research"]],
  [7, ["climate", "ocean-science"]],
  [8, ["cryosphere", "climate"]],
  [9, ["atmospheric-science", "polar-research"]],
  [10, ["biodiversity", "ocean-conservation"]],
  [11, ["climate", "polar-research"]],
];

async function main() {
  console.log("🌍 Starting expedition/researcher seed...\n");

  // ----------------------------------
  // 1. Create researchers
  // ----------------------------------

  const researcherRecords = [];

  for (const researcher of researchers) {
    const record = await prisma.researcher.upsert({
      where: {
        id: researcher.id,
      },
      update: {
        name: researcher.name,
        affiliation: researcher.affiliation,
        bio: researcher.bio,
      },
      create: researcher,
    });

    researcherRecords.push(record);
  }

  console.log(
    `👨‍🔬 Researchers created/updated: ${researcherRecords.length}`
  );

  // ----------------------------------
  // 2. Create expeditions
  // ----------------------------------

  const expeditionRecords = [];

  for (const expedition of expeditions) {
    const record = await prisma.expedition.upsert({
      where: {
        id: expedition.id,
      },
      update: {
        name: expedition.name,
        description: expedition.description,
        region: expedition.region,
        startDate: expedition.startDate,
        endDate: expedition.endDate,
      },
      create: expedition,
    });

    expeditionRecords.push(record);
  }

  console.log(
    `🚢 Expeditions created/updated: ${expeditionRecords.length}`
  );

  // ----------------------------------
  // 3. Expedition ↔ Researcher
  // ----------------------------------

  let relationshipCount = 0;

  for (const [expeditionIndex, researcherIndex] of expeditionResearcherMap) {
    const expedition = expeditionRecords[expeditionIndex];
    const researcher = researcherRecords[researcherIndex];

    await prisma.expeditionResearcher.upsert({
      where: {
        expeditionId_researcherId: {
          expeditionId: expedition.id,
          researcherId: researcher.id,
        },
      },
      update: {},
      create: {
        expeditionId: expedition.id,
        researcherId: researcher.id,
      },
    });

    relationshipCount++;
  }

  console.log(
    `🔗 Expedition-Researcher relationships: ${relationshipCount}`
  );

  // ----------------------------------
  // 4. Expedition ↔ Tags
  // ----------------------------------

  let expeditionTagCount = 0;

  for (const [expeditionIndex, tagNames] of expeditionTagMap) {
    const expedition = expeditionRecords[expeditionIndex];

    for (const tagName of tagNames) {
      const slug = tagName.toLowerCase().replace(/\s+/g, "-");

      const tag = await prisma.tag.upsert({
        where: {
          slug,
        },
        update: {
          name: tagName,
        },
        create: {
          name: tagName,
          slug,
        },
      });

      await prisma.expeditionTag.upsert({
        where: {
          expeditionId_tagId: {
            expeditionId: expedition.id,
            tagId: tag.id,
          },
        },
        update: {},
        create: {
          expeditionId: expedition.id,
          tagId: tag.id,
        },
      });

      expeditionTagCount++;
    }
  }

  console.log(`🏷️ Expedition-Tag relationships: ${expeditionTagCount}`);

  console.log("\n✅ Seed completed successfully!");
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