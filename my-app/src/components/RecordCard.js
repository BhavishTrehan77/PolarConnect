import React from 'react';
import Link from 'next/link';
import TypeBadge from './TypeBadge';

export default function RecordCard({ record }) {
  if (!record) return null;

  const {
    id = '1',
    type = 'News',
    title = 'Polar Research Title',
    summaryShort,
    description = '',
    publishedDate,
    pub_date,
    region = 'Antarctica',
    theme = 'Polar Science',
    imageUrl,
  } = record;

  const rawDate = publishedDate || pub_date;
  const displayDate = rawDate
    ? (isNaN(new Date(rawDate).getTime())
        ? rawDate
        : new Date(rawDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }))
    : 'Sep 2026';

  const typeSlug = (type || 'news').toLowerCase();
  const cardLink = `/record/${typeSlug}/${id}`;

  // Default polar glacier placeholder image if no image provided
  const placeholderImg = "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="record-card">
      <div className="record-card-img-wrapper">
        <img
          src={imageUrl || placeholderImg}
          alt={title}
          className="record-card-img"
          loading="lazy"
        />
      </div>

      <div className="record-card-body">
        <div className="record-card-meta">
          <TypeBadge type={type} />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 500 }}>
            {displayDate}
          </span>
        </div>

        <h3 className="record-card-title">
          <Link href={cardLink} style={{ color: 'inherit' }}>
            {title}
          </Link>
        </h3>

        <p className="record-card-desc">
          {summaryShort || description || 'Scientific observation and documentation record from the National Centre for Polar and Ocean Research.'}
        </p>

        <div className="record-card-footer">
          {region && <span className="tag-chip">📍 {region}</span>}
          {theme && <span className="tag-chip">🔬 {theme}</span>}
        </div>
      </div>
    </div>
  );
}
