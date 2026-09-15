import styles from "./gallery.module.css";

const galleryItems = [
  {
    id: 1,
    image: "/gallery/polar1.jpg",
    title: "Antarctic Research Expedition",
    type: "Expedition",
    location: "Antarctica",
    year: "2025",
  },
  {
    id: 2,
    image: "/gallery/polar2.jpg",
    title: "Indian Scientists in Antarctica",
    type: "Research",
    location: "Antarctica",
    year: "2025",
  },
  {
    id: 3,
    image: "/gallery/polar3.jpg",
    title: "Polar Ocean Research",
    type: "Research",
    location: "Southern Ocean",
    year: "2024",
  },
  {
    id: 4,
    image: "/gallery/polar4.jpg",
    title: "Research Vessel at Maitri",
    type: "Expedition",
    location: "Antarctica",
    year: "2024",
  },
  {
    id: 5,
    image: "/gallery/polar5.jpg",
    title: "Polar Wildlife",
    type: "Photo",
    location: "Antarctica",
    year: "2025",
  },
  {
    id: 6,
    image: "/gallery/polar6.jpg",
    title: "Iceberg in Weddell Sea",
    type: "Photo",
    location: "Weddell Sea",
    year: "2025",
  },
];

export default function GalleryPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>PolarConnect</p>

          <h1>Polar Gallery</h1>

          <p className={styles.heroText}>
            Explore photographs from polar expeditions, scientific research,
            researchers, and the unique polar environment.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Visual Knowledge</p>

              <h2>Explore the Gallery</h2>

              <p className={styles.sectionDescription}>
                Discover moments from India&apos;s polar research and
                expeditions.
              </p>
            </div>

            <span className={styles.photoCount}>
              {galleryItems.length} Photos
            </span>
          </div>

          <div className={styles.galleryGrid}>
            {galleryItems.map((item) => (
              <article className={styles.galleryCard} key={item.id}>
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt={item.title} />

                  <span className={styles.imageBadge}>
                    {item.type}
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>

                  <p className={styles.location}>
                    {item.location} • {item.year}
                  </p>

                  <button className={styles.viewButton}>
                    View photo →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}