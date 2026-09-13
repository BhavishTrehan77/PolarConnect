import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar-glass">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.25rem' }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', color: 'var(--text-main)' }}>
          <div style={{
            width: '2.4rem',
            height: '2.4rem',
            borderRadius: '0.6rem',
            background: 'linear-gradient(135deg, #0284c7 0%, #22d3ee 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            boxShadow: '0 2px 8px rgba(34, 211, 238, 0.4)'
          }}>
            ❄️
          </div>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', background: 'linear-gradient(90deg, #0f172a 0%, #0284c7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              PolarConnect
            </span>
            <span style={{ display: 'block', fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '-0.2rem' }}>
              NCPOR Knowledge Engine
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem', fontSize: '0.925rem', fontWeight: 600 }} className="desktop-nav">
          <Link href="/" style={{ color: '#0f172a', transition: 'color 0.2s' }}>Home</Link>
          <Link href="/explore" style={{ color: '#475569', transition: 'color 0.2s' }}>Explore</Link>
          <Link href="/expeditions" style={{ color: '#475569', transition: 'color 0.2s' }}>Expeditions</Link>
          <Link href="/researchers" style={{ color: '#475569', transition: 'color 0.2s' }}>Researchers</Link>
          <Link href="/gallery" style={{ color: '#475569', transition: 'color 0.2s' }}>Gallery</Link>
          <Link href="/about" style={{ color: '#475569', transition: 'color 0.2s' }}>About</Link>
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/explore" style={{
            background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
            color: '#ffffff',
            padding: '0.5rem 1.15rem',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            boxShadow: '0 2px 6px rgba(2, 132, 199, 0.3)'
          }}>
            <span>🔍</span> Explore Data
          </Link>
        </div>
      </div>
    </header>
  );
}
