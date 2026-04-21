import type { IllustrationPair } from './index'

const F = '#4a3e2d'   // female figure (warm dark brown)
const FH = '#2d261a'  // hair
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const CatCow: IllustrationPair = {
  // Start: Neutral spine on all fours (tabletop) — back flat, head neutral
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="150" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair hanging down from head (facing right) */}
      <ellipse cx="222" cy="88" rx="10" ry="16" fill={FH} />
      {/* Head — facing right, neutral */}
      <ellipse cx="226" cy="82" rx="12" ry="13" fill={F} />
      {/* Neck connecting head to shoulder end of spine */}
      <line x1="216" y1="88" x2="210" y2="90" stroke={F} strokeWidth="9" {...r} />
      {/* Flat spine — neutral, horizontal */}
      <line x1="65" y1="90" x2="210" y2="90" stroke={F} strokeWidth="16" {...r} />
      {/* Front left arm (vertical, under shoulders near right side) */}
      <line x1="192" y1="90" x2="192" y2="150" stroke={F} strokeWidth="10" {...r} />
      {/* Front right arm (slightly behind) */}
      <line x1="175" y1="90" x2="175" y2="150" stroke={F} strokeWidth="10" {...r} />
      {/* Back left leg (vertical, under hips near left side) */}
      <line x1="82" y1="90" x2="82" y2="150" stroke={F} strokeWidth="12" {...r} />
      {/* Back right leg */}
      <line x1="65" y1="90" x2="65" y2="150" stroke={F} strokeWidth="12" {...r} />
      {/* Joint circles */}
      <circle cx="192" cy="90" r="6" fill={F} />
      <circle cx="175" cy="90" r="6" fill={F} />
      <circle cx="82" cy="90" r="7" fill={F} />
      <circle cx="65" cy="90" r="7" fill={F} />
    </svg>
  ),
  // Mid (Cat): Back ARCHES UPWARD — spine curves up like a cat, head drops down
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="150" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair hanging down (head dropped) */}
      <ellipse cx="220" cy="112" rx="10" ry="14" fill={FH} />
      {/* Head dropped down */}
      <ellipse cx="222" cy="106" rx="12" ry="12" fill={F} />
      {/* Neck angled down from arched spine end */}
      <line x1="212" y1="100" x2="216" y2="108" stroke={F} strokeWidth="9" {...r} />
      {/* Spine arched UPWARD — Cat pose */}
      <path d="M65,90 Q140,62 215,90" stroke={F} strokeWidth="16" fill="none" strokeLinecap="round" />
      {/* Front left arm (vertical, same position) */}
      <line x1="197" y1="90" x2="197" y2="150" stroke={F} strokeWidth="10" {...r} />
      {/* Front right arm */}
      <line x1="180" y1="90" x2="180" y2="150" stroke={F} strokeWidth="10" {...r} />
      {/* Back left leg */}
      <line x1="82" y1="90" x2="82" y2="150" stroke={F} strokeWidth="12" {...r} />
      {/* Back right leg */}
      <line x1="65" y1="90" x2="65" y2="150" stroke={F} strokeWidth="12" {...r} />
      {/* Joint circles */}
      <circle cx="197" cy="90" r="6" fill={F} />
      <circle cx="180" cy="90" r="6" fill={F} />
      <circle cx="82" cy="90" r="7" fill={F} />
      <circle cx="65" cy="90" r="7" fill={F} />
    </svg>
  ),
  // End (Cow): Back SAGS DOWNWARD — belly drops, head lifts up, neck extends
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="150" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair swept back as head lifts */}
      <ellipse cx="228" cy="68" rx="12" ry="16" fill={FH} />
      {/* Head lifted up, neck extended */}
      <ellipse cx="230" cy="62" rx="12" ry="13" fill={F} />
      {/* Neck angled upward from the sagging spine end */}
      <line x1="214" y1="88" x2="222" y2="74" stroke={F} strokeWidth="9" {...r} />
      {/* Spine sagging DOWNWARD — Cow pose */}
      <path d="M65,90 Q140,110 215,90" stroke={F} strokeWidth="16" fill="none" strokeLinecap="round" />
      {/* Front left arm (vertical, same position) */}
      <line x1="197" y1="90" x2="197" y2="150" stroke={F} strokeWidth="10" {...r} />
      {/* Front right arm */}
      <line x1="180" y1="90" x2="180" y2="150" stroke={F} strokeWidth="10" {...r} />
      {/* Back left leg */}
      <line x1="82" y1="90" x2="82" y2="150" stroke={F} strokeWidth="12" {...r} />
      {/* Back right leg */}
      <line x1="65" y1="90" x2="65" y2="150" stroke={F} strokeWidth="12" {...r} />
      {/* Joint circles */}
      <circle cx="197" cy="90" r="6" fill={F} />
      <circle cx="180" cy="90" r="6" fill={F} />
      <circle cx="82" cy="90" r="7" fill={F} />
      <circle cx="65" cy="90" r="7" fill={F} />
    </svg>
  ),
}
