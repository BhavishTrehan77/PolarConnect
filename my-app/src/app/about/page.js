import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>About PolarConnect</p>

            <h1>Connecting Polar Science with Everyone</h1>

            <p>
              A knowledge and outreach platform for discovering India&apos;s
              polar research, expeditions, researchers, and scientific
              discoveries.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div>
              <p className={styles.eyebrow}>About NCPOR</p>

              <h2>
                National Centre for Polar and Ocean Research
              </h2>
            </div>

            <div>
              <p>
                The National Centre for Polar and Ocean Research plays an
                important role in India&apos;s polar and ocean research
                activities.
              </p>

              <p>
                PolarConnect provides a public-facing way to discover and
                understand information connected to polar expeditions,
                scientific research, researchers, photographs, and related
                knowledge.
              </p>

              <a
                href="https://ncpor.res.in/"
                target="_blank"
                rel="noreferrer"
                className={styles.outlineButton}
              >
                Visit NCPOR Website ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* POLARCONNECT */}
      <section className={styles.lightSection}>
        <div className={styles.container}>
          <div className={styles.twoColumn}>
            <div className={styles.infoCard}>
              <div className={styles.iconCircle}>P</div>

              <h2>About PolarConnect</h2>

              <p>
                PolarConnect is designed to bring polar knowledge together in
                one accessible digital platform.
              </p>

              <p>
                It connects records about expeditions, researchers, news,
                photographs, and scientific knowledge so that users can
                explore relationships between them.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconCircle}>K</div>

              <h2>Knowledge for Everyone</h2>

              <p>
                The platform is designed for students, educators,
                researchers, and members of the public.
              </p>

              <p>
                Through structured information and accessible explanations,
                PolarConnect helps make polar science easier to discover and
                understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.methodologyHeader}>
            <p className={styles.eyebrow}>How It Works</p>

            <h2>Our Methodology</h2>

            <p>
              PolarConnect organizes polar knowledge into connected,
              discoverable information.
            </p>
          </div>

          <div className={styles.methodologyGrid}>
            <article className={styles.methodCard}>
              <span className={styles.number}>01</span>

              <h3>Collect</h3>

              <p>
                Bring together information related to polar expeditions,
                research, researchers, news, and photographs.
              </p>
            </article>

            <article className={styles.methodCard}>
              <span className={styles.number}>02</span>

              <h3>Organize</h3>

              <p>
                Structure the information using categories, regions, themes,
                years, and content types.
              </p>
            </article>

            <article className={styles.methodCard}>
              <span className={styles.number}>03</span>

              <h3>Connect</h3>

              <p>
                Link related expeditions, researchers, records, and visual
                resources to create connected knowledge.
              </p>
            </article>

            <article className={styles.methodCard}>
              <span className={styles.number}>04</span>

              <h3>Share</h3>

              <p>
                Present the knowledge through an accessible interface that
                supports learning, exploration, and public outreach.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className={styles.mission}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Our Mission</p>

          <h2>
            Make polar knowledge easier to discover, understand, and share.
          </h2>

          <p>
            PolarConnect aims to bridge the gap between scientific information
            and public understanding through a connected knowledge experience.
          </p>
        </div>
      </section>
    </main>
  );
}