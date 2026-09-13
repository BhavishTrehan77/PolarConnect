import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#f1f5f9', color: '#475569', borderTop: '1px solid #e2e8f0', padding: '3.5rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.85rem' }}>
              <span>❄️</span> PolarConnect
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#475569' }}>
              Bridging Polar Science & Public Knowledge. An intelligent, cross-referenced research portal for NCPOR expeditions, researchers, and scientific discoveries.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#0f172a', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Discovery
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <li><Link href="/explore?type=news" style={{ color: '#0284c7' }}>Latest News & Press</Link></li>
              <li><Link href="/expeditions" style={{ color: '#0284c7' }}>Antarctic & Arctic Expeditions</Link></li>
              <li><Link href="/researchers" style={{ color: '#0284c7' }}>NCPOR Scientists Directory</Link></li>
              <li><Link href="/gallery" style={{ color: '#0284c7' }}>Polar Photo & Media Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#0f172a', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Institutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <li><a href="https://ncpor.res.in" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7' }}>NCPOR Official Portal ↗</a></li>
              <li><a href="https://moes.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7' }}>Ministry of Earth Sciences ↗</a></li>
              <li><Link href="/about" style={{ color: '#0284c7' }}>Methodology & Architecture</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#0f172a', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Smart Education
            </h4>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: '#475569' }}>
              Translating specialized polar research output into accessible public summaries for students, educators, and journalists.
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: '#64748b' }}>
          <p>© 2026 PolarConnect (Team CryoNex — SIH 2026 PS 26063). Powered by NCPOR public RSS feed.</p>
          <p>Built with Next.js & React 19</p>
        </div>
      </div>
    </footer>
  );
}
