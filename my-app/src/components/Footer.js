import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              ❄
            </div>

            <div>
              <h2>PolarConnect</h2>

              <p>
                Bridging Polar Research and Public Knowledge
              </p>
            </div>
          </div>

          <div className={styles.links}>
            <div>
              <h3>Explore</h3>

              <a href="/">Home</a>
              <a href="/explore">Explore</a>
              <a href="/gallery">Gallery</a>
            </div>

            <div>
              <h3>Learn</h3>

              <a href="/expeditions">Expeditions</a>
              <a href="/researchers">Researchers</a>
              <a href="/about">About</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © 2026 PolarConnect. Built for polar science outreach and
            knowledge sharing.
          </p>

          <div className={styles.socials}>
            <span>LinkedIn</span>
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </footer>
  );
}