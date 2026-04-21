import type { IllustrationPair } from './index'

const F = '#2d4a3e'
const FH = '#1a2e26'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const LegRaises: IllustrationPair = {
  // Start: Lying flat on back, legs straight on floor, arms at sides (head LEFT, feet RIGHT)
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head */}
      <circle cx="30" cy="128" r="12" fill={F} />
      {/* Hair */}
      <rect x="20" y="119" width="20" height="8" rx="4" fill={FH} />
      {/* Body — horizontal on mat */}
      <line x1="42" y1="131" x2="180" y2="132" stroke={F} strokeWidth="16" {...r} />
      {/* Left arm at side */}
      <line x1="72" y1="132" x2="68" y2="136" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="65" cy="136" rx="6" ry="4" fill={F} />
      {/* Right arm at side */}
      <line x1="96" y1="132" x2="92" y2="136" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="89" cy="136" rx="5" ry="4" fill={F} />
      {/* Legs — straight on floor (feet right) */}
      <line x1="178" y1="132" x2="230" y2="133" stroke={F} strokeWidth="14" {...r} />
      <circle cx="230" cy="133" r="6.5" fill={F} />
      <line x1="230" y1="133" x2="256" y2="134" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="262" cy="134" rx="8" ry="5" fill={F} />
      {/* Second leg slightly offset */}
      <line x1="180" y1="134" x2="232" y2="135" stroke={F} strokeWidth="11" {...r} />
      <line x1="232" y1="135" x2="258" y2="136" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
  // Mid: Legs raised to ~45°, lower back pressed to mat, head slightly lifted
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — slightly lifted (core engaged) */}
      <circle cx="30" cy="122" r="12" fill={F} />
      {/* Hair */}
      <rect x="20" y="113" width="20" height="8" rx="4" fill={FH} />
      {/* Body — flat on mat */}
      <line x1="42" y1="130" x2="180" y2="132" stroke={F} strokeWidth="16" {...r} />
      {/* Arms flat on mat at sides */}
      <line x1="72" y1="132" x2="68" y2="136" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="65" cy="136" rx="6" ry="4" fill={F} />
      <line x1="96" y1="132" x2="92" y2="136" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="89" cy="136" rx="5" ry="4" fill={F} />
      {/* Legs raised at ~45° — going upper-right */}
      <line x1="178" y1="132" x2="218" y2="104" stroke={F} strokeWidth="14" {...r} />
      <circle cx="218" cy="104" r="6.5" fill={F} />
      <line x1="218" y1="104" x2="248" y2="82" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="254" cy="79" rx="8" ry="5" fill={F} />
      {/* Second leg */}
      <line x1="180" y1="133" x2="220" y2="106" stroke={F} strokeWidth="11" {...r} />
      <line x1="220" y1="106" x2="250" y2="84" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
  // End: Legs fully vertical (90°), toes pointing up, back flat on mat
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — flat on mat */}
      <circle cx="30" cy="128" r="12" fill={F} />
      {/* Hair */}
      <rect x="20" y="119" width="20" height="8" rx="4" fill={FH} />
      {/* Body — flat on mat */}
      <line x1="42" y1="131" x2="180" y2="132" stroke={F} strokeWidth="16" {...r} />
      {/* Arms flat on mat */}
      <line x1="72" y1="132" x2="68" y2="136" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="65" cy="136" rx="6" ry="4" fill={F} />
      <line x1="96" y1="132" x2="92" y2="136" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="89" cy="136" rx="5" ry="4" fill={F} />
      {/* Legs — fully vertical, going straight up from hips */}
      <line x1="192" y1="132" x2="192" y2="80" stroke={F} strokeWidth="14" {...r} />
      <circle cx="192" cy="80" r="6.5" fill={F} />
      <line x1="192" y1="80" x2="192" y2="44" stroke={F} strokeWidth="12" {...r} />
      {/* Toes pointing up */}
      <line x1="186" y1="44" x2="198" y2="44" stroke={F} strokeWidth="8" {...r} />
      {/* Second leg — slightly offset */}
      <line x1="200" y1="132" x2="200" y2="80" stroke={F} strokeWidth="11" {...r} />
      <line x1="200" y1="80" x2="200" y2="44" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
}
