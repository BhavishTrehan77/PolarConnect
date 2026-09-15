"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import RecordCard from '@/components/RecordCard';
import SearchFilterBar from '@/components/SearchFilterBar';

const MOCK_EXPEDITIONS = [
  {
    id: "ISEA-43",
    type: "Expedition",
    title: "43rd Indian Scientific Expedition to Antarctica",
    description: "Multidisciplinary research focusing on ice-sheet dynamics, atmospheric physics, and polar biology near Maitri and Bharati stations.",
    region: "Antarctica",
    year: "2023",
    theme: "Glaciology",
    imageUrl: "https://images.unsplash.com/photo-1518557984649-7b161c230cfa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ISEA-42",
    type: "Expedition",
    title: "42nd Indian Scientific Expedition to Antarctica",
    description: "Continued long-term monitoring of climate change impact on the Antarctic environment.",
    region: "Antarctica",
    year: "2022",
    theme: "Climate Change",
    imageUrl: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ARC-20",
    type: "Expedition",
    title: "20th Indian Arctic Expedition",
    description: "Summer expedition at Himadri station studying Arctic sea ice reduction and marine ecosystems.",
    region: "Arctic",
    year: "2023",
    theme: "Marine Biology",
    imageUrl: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "HIM-15",
    type: "Expedition",
    title: "Himalayan Cryosphere Program",
    description: "Monitoring the health of Himalayan glaciers and their hydrological variations.",
    region: "Himalayas",
    year: "2023",
    theme: "Glaciology",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
  }
];

export default function ExpeditionsPage() {
  const [search, setSearch] = useState("");
  
  const filtered = MOCK_EXPEDITIONS.filter(e => 
    e.title.toLowerCase().includes(search.toLowerCase()) || 
    e.region.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: 'var(--bg-page)', minHeight: '100vh', paddingBottom: '5rem' }}>
      <div className="hero-container" style={{ padding: '6rem 1.5rem 4rem' }}>
        <div className="hero-pattern"></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ marginBottom: '1.5rem' }}>
             <span className="badge badge-expedition" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
                Directory
             </span>
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.25rem', color: 'var(--polar-navy-950)', letterSpacing: '-0.03em' }}>
            Expeditions
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--polar-navy-700)', maxWidth: '600px', lineHeight: 1.6 }}>
            Explore the historical and ongoing scientific journeys to the Earth&apos;s extremes. 
            Discover research that helps us understand our planet&apos;s changing climate.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 20 }}>
        <div className="search-bar-card glass-panel" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ fontSize: '1.5rem' }}>🔍</span>
          <input 
            type="text" 
            placeholder="Search expeditions by name or region..." 
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
            Featured Expeditions
          </h2>
          <span style={{ color: 'var(--text-light)', fontWeight: 500 }}>
            {filtered.length} found
          </span>
        </div>

        <div className="grid-cards">
          {filtered.map(exp => (
            <RecordCard key={exp.id} record={exp} />
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div style={{ padding: '4rem', textAlign: 'center', background: 'white', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>No expeditions found matching &quot;{search}&quot;</p>
          </div>
        )}
      </div>
    </div>
  );
}
