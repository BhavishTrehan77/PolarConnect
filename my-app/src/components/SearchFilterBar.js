'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchFilterBar({ initialQuery = '', initialRegion = '', initialTheme = '', initialYear = '', initialType = 'All' }) {
  const router = useRouter();

  const [q, setQ] = useState(initialQuery);
  const [region, setRegion] = useState(initialRegion);
  const [theme, setTheme] = useState(initialTheme);
  const [year, setYear] = useState(initialYear);
  const [type, setType] = useState(initialType);
  const [isFocused, setIsFocused] = useState(false);

  // Suggested search terms for instant discovery
  const suggestions = ['Antarctica Expedition', 'Glacial Ice Loss', 'Dr. Thamban Meloth', 'Weddell Sea Photos', 'SCAR 2026'];

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set('q', q.trim());
    if (region) params.set('region', region);
    if (theme) params.set('theme', theme);
    if (year) params.set('year', year);
    if (type && type !== 'All') params.set('type', type.toLowerCase());

    router.push(`/explore?${params.toString()}`);
  };

  const applySuggestion = (term) => {
    setQ(term);
    const params = new URLSearchParams();
    params.set('q', term);
    router.push(`/explore?${params.toString()}`);
  };

  return (
    <div className="search-bar-card">
      <form onSubmit={handleSearch}>
        {/* Main Search Input & Shortcut Badge */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', position: 'relative' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input
              type="text"
              placeholder="Search expeditions, scientists, climate news, ocean photography..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              style={{
                width: '100%',
                padding: '0.9rem 4rem 0.9rem 2.8rem',
                borderRadius: '0.65rem',
                border: '1px solid var(--border-color)',
                fontSize: '0.975rem',
                outline: 'none',
                background: '#f8fafc',
                color: 'var(--text-main)',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.03)'
              }}
            />
            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.6, fontSize: '1.1rem' }}>
              🔍
            </span>
            <span style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#e2e8f0',
              color: '#64748b',
              padding: '0.2rem 0.5rem',
              borderRadius: '0.3rem',
              fontSize: '0.7rem',
              fontWeight: 700,
              pointerEvents: 'none'
            }}>
              Ctrl + K
            </span>
          </div>

          <button
            type="submit"
            style={{
              background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
              color: '#ffffff',
              padding: '0.9rem 1.85rem',
              borderRadius: '0.65rem',
              fontWeight: 800,
              fontSize: '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.35)'
            }}
          >
            Search
          </button>

          {/* Instant Suggestions Dropdown */}
          {isFocused && (
            <div style={{
              position: 'absolute',
              top: '105%',
              left: 0,
              right: 0,
              background: '#ffffff',
              borderRadius: '0.75rem',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--border-color)',
              zIndex: 30,
              padding: '0.75rem',
              animation: 'fadeIn 0.15s ease'
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                💡 Popular Polar Searches
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {suggestions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onMouseDown={() => applySuggestion(item)}
                    style={{
                      background: '#f1f5f9',
                      color: '#0284c7',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      border: '1px solid #e2e8f0'
                    }}
                  >
                    + {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Filter Controls Row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
          {/* Region Select */}
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            style={{
              padding: '0.55rem 0.85rem',
              borderRadius: '0.55rem',
              border: '1px solid var(--border-color)',
              fontSize: '0.85rem',
              fontWeight: 600,
              background: '#ffffff',
              color: 'var(--text-main)',
              cursor: 'pointer'
            }}
          >
            <option value="">📍 All Regions</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Arctic">Arctic</option>
            <option value="Southern Ocean">Southern Ocean</option>
            <option value="Himalayas">Himalayas (Cryosphere)</option>
          </select>

          {/* Theme Select */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{
              padding: '0.55rem 0.85rem',
              borderRadius: '0.55rem',
              border: '1px solid var(--border-color)',
              fontSize: '0.85rem',
              fontWeight: 600,
              background: '#ffffff',
              color: 'var(--text-main)',
              cursor: 'pointer'
            }}
          >
            <option value="">🔬 All Themes</option>
            <option value="Climate Change">Climate Change</option>
            <option value="Oceanography">Oceanography</option>
            <option value="Glaciology">Glaciology</option>
            <option value="Biodiversity">Biodiversity</option>
            <option value="Hydrography">Hydrography</option>
          </select>

          {/* Year Select */}
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={{
              padding: '0.55rem 0.85rem',
              borderRadius: '0.55rem',
              border: '1px solid var(--border-color)',
              fontSize: '0.85rem',
              fontWeight: 600,
              background: '#ffffff',
              color: 'var(--text-main)',
              cursor: 'pointer'
            }}
          >
            <option value="">📅 All Years</option>
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>

          {/* Type Toggle Pills */}
          <div style={{ display: 'flex', gap: '0.35rem', marginLeft: 'auto', flexWrap: 'wrap' }}>
            {['All', 'News', 'Expedition', 'Researcher', 'Photo'].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  border: '1px solid',
                  borderColor: type === t ? 'var(--polar-blue-600)' : 'var(--border-color)',
                  background: type === t ? 'var(--badge-news-bg)' : '#ffffff',
                  color: type === t ? 'var(--badge-news-text)' : 'var(--text-muted)',
                  transition: 'all 0.15s ease'
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
