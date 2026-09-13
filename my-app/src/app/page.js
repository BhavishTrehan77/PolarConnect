'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SearchFilterBar from '@/components/SearchFilterBar';
import RecordCard from '@/components/RecordCard';

export default function Home() {
  const [featuredRecords, setFeaturedRecords] = useState([]);
  const [activeTab, setActiveTab] = useState('summary'); // 'technical' vs 'summary'
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function loadRecords() {
      try {
        const res = await fetch('/api/records/search?limit=4');
        const data = await res.json();
        if (data.success && data.records) {
          setFeaturedRecords(data.records.slice(0, 4));
        }
      } catch (err) {
        console.error('Failed to load featured records:', err);
      }
    }
    loadRecords();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "Indian scientists in Antarctica are monitoring glacier ice-loss rates to help predict global sea-level trends. Research expeditions from NCPOR provide critical data to safeguard marine ecosystems. #Antarctica #PolarScience #NCPOR #ClimateAction"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* 1. HERO SECTION WITH AURORA GLOW */}
      <section className="hero-container">
        <div className="aurora-bg"></div>
        <div className="hero-pattern"></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '920px' }}>
          {/* Institutional Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(2, 132, 199, 0.08)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(2, 132, 199, 0.2)',
            padding: '0.4rem 1.1rem',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#0284c7',
            marginBottom: '1.75rem',
            boxShadow: '0 4px 15px rgba(2, 132, 199, 0.1)'
          }}>
            <span>🏛️</span> National Centre for Polar and Ocean Research (NCPOR)
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)',
            fontWeight: 900,
            lineHeight: 1.12,
            letterSpacing: '-0.035em',
            marginBottom: '1.25rem',
            background: 'linear-gradient(180deg, #0f172a 0%, #0369a1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Discover. Explore. Understand.
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: '#334155',
            marginBottom: '2.5rem',
            maxWidth: '740px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.6
          }}>
            Your unified, cross-referenced knowledge layer for India's polar research, Antarctic expeditions, scientists, and ocean discoveries.
          </p>

          {/* Interactive Search & Filter Bar */}
          <div style={{ textAlign: 'left' }}>
            <SearchFilterBar />
          </div>

          {/* Quick Region Selector Pills */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Quick Regions:
            </span>
            {[
              { label: '🇦🇶 Antarctica', region: 'Antarctica' },
              { label: '🧊 Arctic', region: 'Arctic' },
              { label: '🌊 Southern Ocean', region: 'Southern Ocean' },
              { label: '🏔️ Himalayas', region: 'Himalayas' }
            ].map((item) => (
              <Link
                key={item.region}
                href={`/explore?region=${encodeURIComponent(item.region)}`}
                style={{
                  background: '#ffffff',
                  border: '1px solid #bae6fd',
                  color: '#0369a1',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 4px rgba(2, 132, 199, 0.05)'
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FEATURED RECORDS GRID */}
      <section style={{ padding: '4.5rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.25rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0284c7' }}></span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Live Repository Feed
                </span>
              </div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                Featured Records
              </h2>
            </div>

            <Link href="/explore" style={{
              background: '#ffffff',
              border: '1px solid var(--border-color)',
              color: 'var(--polar-blue-600)',
              fontWeight: 700,
              fontSize: '0.9rem',
              padding: '0.55rem 1.15rem',
              borderRadius: '0.6rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s ease'
            }}>
              Explore all records <span>→</span>
            </Link>
          </div>

          {/* Card Grid */}
          <div className="grid-cards">
            {featuredRecords.map((record) => (
              <RecordCard key={record.id} record={record} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. GLOWING STATS STRIP - LIGHT ICE DESIGN */}
      <section style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderTop: '1px solid #bae6fd', borderBottom: '1px solid #bae6fd', color: 'var(--text-main)', padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.75rem'
          }}>
            <div className="stat-card-glow">
              <div style={{ fontSize: '2.75rem', fontWeight: 900, color: '#0284c7', lineHeight: 1 }}>520+</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginTop: '0.5rem' }}>Research & News Records</div>
              <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '0.25rem' }}>Indexed from NCPOR RSS feed</div>
            </div>

            <div className="stat-card-glow">
              <div style={{ fontSize: '2.75rem', fontWeight: 900, color: '#0891b2', lineHeight: 1 }}>18</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginTop: '0.5rem' }}>Scientific Expeditions</div>
              <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '0.25rem' }}>Antarctic & Arctic missions</div>
            </div>

            <div className="stat-card-glow">
              <div style={{ fontSize: '2.75rem', fontWeight: 900, color: '#7c3aed', lineHeight: 1 }}>120+</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginTop: '0.5rem' }}>Polar Researchers</div>
              <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '0.25rem' }}>Scientist profiles & bio index</div>
            </div>

            <div className="stat-card-glow">
              <div style={{ fontSize: '2.75rem', fontWeight: 900, color: '#d97706', lineHeight: 1 }}>2,500+</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginTop: '0.5rem' }}>Photos & Media Assets</div>
              <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '0.25rem' }}>High-res polar imagery</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SCIENCE TRANSLATOR WIDGET */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div className="container" style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          borderRadius: '1.25rem',
          padding: '3.25rem 2.5rem',
          border: '1px solid #bae6fd',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          boxShadow: '0 20px 40px -15px rgba(2, 132, 199, 0.15)'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: '#0284c7',
              color: '#ffffff',
              padding: '0.3rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '1rem'
            }}>
              ⚡ Smart Education Multiplier
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0c4a6e', lineHeight: 1.2, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Translating Specialized Science into Public Knowledge
            </h2>

            <p style={{ fontSize: '1.025rem', color: '#0369a1', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              NCPOR research output is written for domain specialists. PolarConnect includes an interactive <strong>Public Summary Engine</strong> that instantly converts dense scientific reports into engaging, plain-language captions for students, educators, and journalists.
            </p>

            {/* Interactive Toggle Pill Switch */}
            <div style={{ display: 'inline-flex', background: '#ffffff', padding: '0.25rem', borderRadius: '0.75rem', border: '1px solid #bae6fd', boxShadow: 'var(--shadow-sm)' }}>
              <button
                onClick={() => setActiveTab('summary')}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  background: activeTab === 'summary' ? '#0284c7' : 'transparent',
                  color: activeTab === 'summary' ? '#ffffff' : '#64748b',
                  transition: 'all 0.2s ease'
                }}
              >
                ✨ AI Public Summary
              </button>
              <button
                onClick={() => setActiveTab('technical')}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  background: activeTab === 'technical' ? '#0c4a6e' : 'transparent',
                  color: activeTab === 'technical' ? '#ffffff' : '#64748b',
                  transition: 'all 0.2s ease'
                }}
              >
                📄 Raw Technical Text
              </button>
            </div>
          </div>

          {/* Interactive Card Preview Display */}
          <div style={{
            background: '#ffffff',
            borderRadius: '1rem',
            padding: '1.75rem',
            boxShadow: '0 10px 30px rgba(11, 19, 41, 0.08)',
            border: '1px solid #e0f2fe',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: activeTab === 'summary' ? '#0284c7' : '#0c4a6e' }}>
                {activeTab === 'summary' ? '✨ Plain-Language Public Summary' : '📄 Technical Source Paper'}
              </span>
              <span style={{ fontSize: '0.725rem', background: '#e0f2fe', padding: '0.2rem 0.6rem', borderRadius: '9999px', color: '#0369a1', fontWeight: 700 }}>
                {activeTab === 'summary' ? 'Source Grounded' : 'Specialist Format'}
              </span>
            </div>

            {activeTab === 'summary' ? (
              <div>
                <p style={{ fontSize: '0.975rem', color: '#1e293b', lineHeight: '1.6', marginBottom: '1.25rem', fontWeight: 500 }}>
                  "Indian scientists in Antarctica are monitoring glacier ice-loss rates to help predict global sea-level trends. Research expeditions from NCPOR provide critical data to safeguard marine ecosystems."
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 700, background: '#f0f9ff', padding: '0.2rem 0.5rem', borderRadius: '0.375rem' }}>#Antarctica</span>
                  <span style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 700, background: '#f0f9ff', padding: '0.2rem 0.5rem', borderRadius: '0.375rem' }}>#PolarScience</span>
                  <span style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 700, background: '#f0f9ff', padding: '0.2rem 0.5rem', borderRadius: '0.375rem' }}>#NCPOR</span>
                  <span style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 700, background: '#f0f9ff', padding: '0.2rem 0.5rem', borderRadius: '0.375rem' }}>#ClimateAction</span>
                </div>
                <button
                  onClick={handleCopy}
                  style={{
                    width: '100%',
                    background: copied ? '#10b981' : '#0284c7',
                    color: '#ffffff',
                    padding: '0.65rem',
                    borderRadius: '0.5rem',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {copied ? '✓ Copied Public Summary!' : '📋 Copy Summary & Hashtags'}
                </button>
              </div>
            ) : (
              <div>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: '1.6', fontFamily: 'monospace', background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                  "Quantitative glaciological mass-balance assessment of Maitri station peripheral ice-sheet dynamics (70°45'S, 11°44'E) via Sentinel-1 SAR interferometry and ground-penetrating radar pulse analysis..."
                </p>
                <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#64748b' }}>
                  ⚠️ Requires domain expertise to interpret for educational outreach.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
