"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import TypeBadge from '@/components/TypeBadge';
import CrossReferencePanel from '@/components/CrossReferencePanel';
import PublicSummaryModal from '@/components/PublicSummaryModal';

// Temporary mock records based on type to test UI
const getMockRecord = (type, id) => {
  const normalizedType = (type || 'news').toLowerCase();

  const baseRecord = {
    id,
    type: normalizedType.charAt(0).toUpperCase() + normalizedType.slice(1),
    region: 'Antarctica',
    year: '2026',
    theme: 'Polar Science',
    imageUrl: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80'
  };

  if (normalizedType === 'news') {
    return {
      ...baseRecord,
      title: `Breaking Discovery at Maitri Station (${id})`,
      description: `Detailed news report regarding recent observations made near Maitri Station in Antarctica. The research highlights significant changes in the ice shelf and global climate implications. This report summarizes the multi-week observation and data collection phase done by the NCPOR science team.`
    };
  }
  if (normalizedType === 'expedition') {
    return {
      ...baseRecord,
      title: `43rd Indian Scientific Expedition to Antarctica (${id})`,
      description: `Comprehensive details of the 43rd expedition, involving multi-disciplinary studies including atmospheric sciences, earth sciences, and biological sciences. The expedition aims to build upon previous years' findings while establishing new remote monitoring stations.`
    };
  }
  if (normalizedType === 'researcher') {
    return {
      ...baseRecord,
      title: `Dr. Example Researcher (${id})`,
      description: `Senior Scientist at NCPOR specializing in glaciology and climate change impact on polar regions. Has participated in 4 major expeditions and published extensively on the changing dynamics of the Antarctic ice sheet.`,
      theme: 'Glaciology',
      imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9db0c204c?auto=format&fit=crop&w=1200&q=80'
    };
  }
  if (normalizedType === 'photo') {
    return {
      ...baseRecord,
      title: `Aurora Australis over Bharati Station (${id})`,
      description: `Stunning visual documentation of the Southern Lights observed during the wintering period at Bharati Station. These atmospheric phenomena were captured during a high solar activity phase.`,
      theme: 'Atmospheric Sciences',
      imageUrl: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=1200&q=80'
    };
  }

  return {
    ...baseRecord,
    title: `Generic Record (${id})`,
    description: `Generic description for record type: ${type}`
  };
};

const getMockRelated = () => [
  {
    id: "E001",
    type: "Expedition",
    title: "42nd Indian Scientific Expedition",
    description: "Previous year's scientific expedition.",
    region: "Antarctica",
    theme: "General"
  },
  {
    id: "R001",
    type: "Researcher",
    title: "Dr. A. Scientist",
    description: "Lead researcher for atmospheric studies.",
    region: "Arctic",
    theme: "Atmospheric"
  },
  {
    id: "P001",
    type: "Photo",
    title: "Ice Core Sampling",
    description: "Extracting ice cores for paleoclimate study.",
    region: "Himalayas",
    theme: "Glaciology"
  },
  {
    id: "N002",
    type: "News",
    title: "New Monitoring Equipment Installed",
    description: "State of the art sensors installed near Bharati.",
    region: "Antarctica",
    theme: "Technology"
  }
];

export default function RecordDetailPage() {
  const params = useParams();
  const { type, id } = params;

  const [record, setRecord] = useState(null);
  const [related, setRelated] = useState([]);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate fetching data based on type and id
    if (type && id) {
      setRecord(getMockRecord(type, id));
      setRelated(getMockRelated());
    }
  }, [type, id]);

  const handleGenerateSummary = () => {
    setSummaryOpen(true);
    setLoading(true);
    setSummary("");

    // Simulate API call to /api/summary/generate
    setTimeout(() => {
      setSummary(`This is an AI-generated public summary for "${record?.title}". \n\nIt translates complex scientific data into accessible knowledge for students, journalists, and the general public. The key takeaway is the significance of the ${record?.theme} research conducted in ${record?.region}, demonstrating NCPOR's continued commitment to polar sciences and climate understanding.`);
      setLoading(false);
    }, 2000);
  };

  if (!record) {
    return (
      <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center', minHeight: '60vh' }}>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>Loading record details...</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-page)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Aurora Hero Header similar to homepage style */}
      <div className="hero-container" style={{ padding: '4rem 1.5rem 3rem' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <Link href="/" style={{
              color: 'var(--polar-blue-600)',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'opacity 0.2s'
            }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
            >
              ← Back to Dashboard
            </Link>
          </div>
          <TypeBadge type={record.type} />
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '1rem', color: 'var(--polar-navy-950)', lineHeight: 1.2 }}>
            {record.title}
          </h1>
        </div>
      </div>

      <div className="container" style={{ marginTop: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start' }}>

          {/* Main Content Area */}
          <div className="stat-card-glow" style={{ padding: '2.5rem', border: '1px solid var(--border-color)' }}>
            <img
              src={record.imageUrl}
              alt={record.title}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '450px',
                objectFit: 'cover',
                borderRadius: '0.75rem',
                marginBottom: '2rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            />

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <span className="tag-chip">📍 {record.region}</span>
              <span className="tag-chip">📅 {record.year}</span>
              <span className="tag-chip">🔬 {record.theme}</span>
            </div>

            <div style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
              <p>{record.description}</p>
            </div>

            {/* AI Summary Section */}
            <div className="glass-panel" style={{
              marginTop: '3rem',
              padding: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
              background: 'rgba(240, 249, 255, 0.65)'
            }}>
              <div>
                <h4 style={{ fontWeight: 700, color: 'var(--polar-navy-900)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
                  Public Outreach
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', margin: 0 }}>
                  Create an easy-to-understand, accessible summary for general audiences.
                </p>
              </div>
              <button
                onClick={handleGenerateSummary}
                style={{
                  padding: '0.75rem 1.75rem',
                  borderRadius: '0.5rem',
                  background: 'linear-gradient(135deg, var(--polar-blue-600), var(--polar-teal-400))',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                  border: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                ✨ Generate Public Summary
              </button>
            </div>
          </div>

        </div>

        {/* Cross Reference Panel */}
        <div style={{ marginTop: '4rem' }}>
          <CrossReferencePanel related={related} />
        </div>
      </div>

      <PublicSummaryModal
        open={summaryOpen}
        onClose={() => setSummaryOpen(false)}
        summary={summary}
        loading={loading}
        onGenerate={handleGenerateSummary}
      />
    </div>
  );
}
