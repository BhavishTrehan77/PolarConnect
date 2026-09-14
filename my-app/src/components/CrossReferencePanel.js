import React from 'react';
import RecordCard from './RecordCard';

export default function CrossReferencePanel({ related = [] }) {
  if (!related || related.length === 0) {
    return (
      <div style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-light)' }}>
        No related records found.
      </div>
    );
  }

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--polar-navy-900)' }}>
        Related Records
      </h3>
      <div 
        style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          gap: '1.5rem', 
          paddingBottom: '1.5rem',
        }}
        className="hide-scroll snap-x-mandatory"
      >
        {related.map((record, index) => (
          <div 
            key={record.id || index} 
            className="snap-start"
            style={{ 
              minWidth: '320px', 
              maxWidth: '320px', 
              flex: '0 0 auto', 
              display: 'flex',
              padding: '0.25rem' // Give shadow room to breathe on hover
            }}
          >
            <RecordCard record={record} />
          </div>
        ))}
      </div>
    </div>
  );
}
