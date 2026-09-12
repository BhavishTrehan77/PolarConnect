import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>PolarConnect</h2>

          <p>
            Integrated Polar Science Outreach,
            Knowledge Repository and Media
            Dissemination Portal.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
        </div>

        <div className="footer-links">
          <h3>About</h3>

          <a
            href="https://www.ncpor.res.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NCPOR
          </a>

          <span>Polar Research</span>
          <span>Knowledge Repository</span>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 PolarConnect. All rights reserved.
        </p>
      </div>
    </footer>
  );
}