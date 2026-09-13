import React from 'react';

export default function TypeBadge({ type = 'News' }) {
  const normalized = (type || 'News').toLowerCase();
  
  let badgeClass = 'badge-news';
  let label = 'News';
  let icon = '📰';

  if (normalized.includes('expedition')) {
    badgeClass = 'badge-expedition';
    label = 'Expedition';
    icon = '🚢';
  } else if (normalized.includes('researcher')) {
    badgeClass = 'badge-researcher';
    label = 'Researcher';
    icon = '👨‍🔬';
  } else if (normalized.includes('photo') || normalized.includes('media') || normalized.includes('gallery')) {
    badgeClass = 'badge-photo';
    label = 'Photo';
    icon = '📸';
  }

  return (
    <span className={`badge ${badgeClass}`}>
      <span>{icon}</span>
      <span>{label}</span>
    </span>
  );
}
