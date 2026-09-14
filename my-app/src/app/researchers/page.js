"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const MOCK_RESEARCHERS = [
  {
    id: "R-001",
    name: "Dr. Thamban Meloth",
    role: "Director, NCPOR",
    specialty: "Paleoclimatology & Ice Core Studies",
    region: "Antarctica, Himalayas",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "R-002",
    name: "Dr. Rahul Mohan",
    role: "Group Director",
    specialty: "Southern Ocean Paleoceanography",
    region: "Southern Ocean",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "R-003",
    name: "Dr. K. P. Krishnan",
    role: "Scientist F",
    specialty: "Arctic Marine Biogeochemistry",
    region: "Arctic",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "R-004",
    name: "Dr. Parmanand Sharma",
    role: "Scientist E",
    specialty: "Himalayan Glaciology",
    region: "Himalayas",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  }
];

export default function ResearchersPage() {
  const [search, setSearch] = useState("");
  
  const filtered = MOCK_RESEARCHERS.filter(r => 
    r.name.toLowerCase().includes(search.toLowerCase()) || 
    r.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: 'var(--bg-page)', minHeight: '100vh', paddingBottom: '5rem' }}>
      <div className="hero-container" style={{ padding: '6rem 1.5rem 4rem', background: 'linear-gradient(135deg, #f8fafc 0%, #f3e8ff 100%)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ marginBottom: '1.5rem' }}>
             <span className="badge badge-researcher" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
                Directory
             </span>
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.25rem', color: 'var(--polar-navy-950)', letterSpacing: '-0.03em' }}>
            Researchers
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--polar-navy-700)', maxWidth: '600px', lineHeight: 1.6 }}>
            Meet the leading scientists and explorers pushing the boundaries of human knowledge in the Earth&apos;s polar and cryosphere regions.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 20 }}>
        <div className="search-bar-card glass-panel" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ fontSize: '1.5rem' }}>👩‍🔬</span>
          <input 
            type="text" 
            placeholder="Search researchers by name or specialty..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ 
              width: '100%', 
              border: 'none', 
              background: 'transparent', 
              fontSize: '1.1rem', 
              color: 'var(--text-main)', 
              outline: 'none' 
            }}
          />
        </div>
      </div>

      <div className="container" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--polar-navy-900)' }}>
            Scientific Personnel
          </h2>
          <span style={{ color: 'var(--text-light)', fontWeight: 500 }}>
            {filtered.length} found
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {filtered.map(researcher => (
            <Link key={researcher.id} href={`/record/researcher/${researcher.id}`} style={{ display: 'block' }}>
              <div className="stat-card-glow" style={{ padding: '2rem 1.5rem', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img 
                  src={researcher.imageUrl} 
                  alt={researcher.name} 
                  style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', boxShadow: 'var(--shadow-md)', border: '4px solid white' }} 
                />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>{researcher.name}</h3>
                <p style={{ color: 'var(--polar-blue-600)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>{researcher.role}</p>
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                  <span className="tag-chip" style={{ fontSize: '0.75rem', background: 'var(--polar-ice-50)' }}>🔬 {researcher.specialty}</span>
                  <span className="tag-chip" style={{ fontSize: '0.75rem', background: 'var(--polar-ice-50)' }}>📍 {researcher.region}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
