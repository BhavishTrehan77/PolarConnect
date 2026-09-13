'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchFilterBar from '@/components/SearchFilterBar';
import RecordCard from '@/components/RecordCard';

function ExploreContent() {
  const searchParams = useSearchParams();

  const q = searchParams.get('q') || '';
  const region = searchParams.get('region') || '';
  const theme = searchParams.get('theme') || '';
  const year = searchParams.get('year') || '';
  const type = searchParams.get('type') || 'All';

  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchRecords() {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams();
        if (q) queryParams.set('q', q);
        if (region) queryParams.set('region', region);
        if (theme) queryParams.set('theme', theme);
        if (year) queryParams.set('year', year);
        if (type && type !== 'All') queryParams.set('type', type);

        const res = await fetch(`/api/records/search?${queryParams.toString()}`);
        const data = await res.json();

        if (data.success) {
          setRecords(data.records || []);
          setTotal(data.total || 0);
        }
      } catch (err) {
        console.error('Failed to fetch explore records:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchRecords();
  }, [q, region, theme, year, type]);

  return (
    <div>
      {/* Search & Explore Page Banner */}
      <section style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderBottom: '1px solid #bae6fd', color: 'var(--text-main)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            Explore Polar Knowledge
          </h1>
          <p style={{ color: '#334155', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '640px' }}>
            Search and filter through our unified collection of NCPOR expeditions, researchers, scientific news, and photo records.
          </p>

          <SearchFilterBar
            initialQuery={q}
            initialRegion={region}
            initialTheme={theme}
            initialYear={year}
            initialType={type}
          />
        </div>
      </section>

      {/* Main Results Container */}
      <section style={{ padding: '3rem 0 4rem', background: '#f8fafc' }}>
        <div className="container">
          {/* Active Filter Chips & Counter */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                {loading ? 'Searching repository...' : `Showing ${records.length} of ${total} records`}
              </span>
            </div>

            {/* Active Filters Display */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {q && <span className="tag-chip">Query: "{q}"</span>}
              {region && <span className="tag-chip">Region: {region}</span>}
              {theme && <span className="tag-chip">Theme: {theme}</span>}
              {year && <span className="tag-chip">Year: {year}</span>}
              {type && type !== 'All' && <span className="tag-chip">Type: {type}</span>}
            </div>
          </div>

          {/* Loading Skeleton Grid */}
          {loading ? (
            <div className="grid-cards">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div key={n} style={{ height: '320px', background: '#e2e8f0', borderRadius: '0.75rem', animation: 'pulse 1.5s infinite' }} />
              ))}
            </div>
          ) : records.length > 0 ? (
            <div className="grid-cards">
              {records.map((record) => (
                <RecordCard key={record.id} record={record} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div style={{ textAlign: 'center', padding: '4rem 1.5rem', background: '#ffffff', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧊</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                No records found matching your filters
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Try adjusting your search term, clearing filters, or selecting a different record type.
              </p>
              <a
                href="/explore"
                style={{
                  background: 'var(--polar-blue-600)',
                  color: '#ffffff',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}
              >
                Reset All Filters
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={
      <div style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h2>Loading PolarConnect Knowledge Engine...</h2>
      </div>
    }>
      <ExploreContent />
    </Suspense>
  );
}
