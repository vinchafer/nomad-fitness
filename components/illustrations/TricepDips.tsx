import type { IllustrationPair } from './index'

const F = '#2d4a3e'
const FH = '#1a2e26'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const TricepDips: IllustrationPair = {
  // Start: Sitting on bench edge, arms straight, legs extended forward, heels on floor
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor */}
      <rect x="10" y="168" width="260" height="6" rx="3" fill={MAT} />
      {/* Bench */}
      <rect x="80" y="105" width="110" height="12" rx="4" fill={MAT} />
      {/* Hair */}
      <rect x="147" y="28" width="24" height="9" rx="4" fill={FH} />
      {/* Head — side view, facing left */}
      <ellipse cx="152" cy="43" rx="12" ry="14" fill={F} />
      {/* Neck */}
      <rect x="146" y="56" width="11" height="8" rx="3" fill={F} />
      {/* Torso upright */}
      <polygon points="134,64 166,64 168,106 130,106" fill={F} />
      {/* Shorts */}
      <polygon points="130,100 168,100 170,116 128,116" fill={FH} opacity="0.45" />
      {/* Left arm (front arm) — straight down to bench */}
      <line x1="134" y1="72" x2="118" y2="105" stroke={F} strokeWidth="11" {...r} />
      <circle cx="118" cy="105" r="5" fill={F} />
      {/* Right arm (back arm) — straight down to bench */}
      <line x1="164" y1="72" x2="178" y2="105" stroke={F} strokeWidth="11" {...r} />
      <circle cx="178" cy="105" r="5" fill={F} />
      {/* Legs extended forward — thigh horizontal from hip */}
      <line x1="132" y1="108" x2="72" y2="110" stroke={F} strokeWidth="13" {...r} />
      <circle cx="72" cy="110" r="6" fill={F} />
      {/* Shin — angled slightly down to heel on floor */}
      <line x1="72" y1="110" x2="38" y2="165" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="34" cy="167" rx="9" ry="4" fill={F} />
      {/* Second leg (slightly offset) */}
      <line x1="136" y1="110" x2="76" y2="112" stroke={F} strokeWidth="10" {...r} />
      <line x1="76" y1="112" x2="42" y2="167" stroke={F} strokeWidth="9" {...r} />
    </svg>
  ),
  // Mid: Arms bent ~90°, body dipped below bench, elbows point backward
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor */}
      <rect x="10" y="168" width="260" height="6" rx="3" fill={MAT} />
      {/* Bench */}
      <rect x="80" y="105" width="110" height="12" rx="4" fill={MAT} />
      {/* Hair */}
      <rect x="147" y="50" width="24" height="9" rx="4" fill={FH} />
      {/* Head — lowered ~25px */}
      <ellipse cx="152" cy="65" rx="12" ry="14" fill={F} />
      {/* Neck */}
      <rect x="146" y="78" width="11" height="8" rx="3" fill={F} />
      {/* Torso — body dipped, hips below bench */}
      <polygon points="134,86 166,86 168,128 130,128" fill={F} />
      {/* Shorts */}
      <polygon points="130,122 168,122 170,138 128,138" fill={FH} opacity="0.45" />
      {/* Left arm bent ~90°, elbow backward */}
      <line x1="134" y1="94" x2="110" y2="100" stroke={F} strokeWidth="11" {...r} />
      <circle cx="110" cy="100" r="5.5" fill={F} />
      <line x1="110" y1="100" x2="118" y2="105" stroke={F} strokeWidth="11" {...r} />
      {/* Right arm bent ~90°, elbow backward */}
      <line x1="164" y1="94" x2="188" y2="100" stroke={F} strokeWidth="11" {...r} />
      <circle cx="188" cy="100" r="5.5" fill={F} />
      <line x1="188" y1="100" x2="178" y2="105" stroke={F} strokeWidth="11" {...r} />
      {/* Legs extended forward */}
      <line x1="132" y1="130" x2="72" y2="132" stroke={F} strokeWidth="13" {...r} />
      <circle cx="72" cy="132" r="6" fill={F} />
      <line x1="72" y1="132" x2="38" y2="165" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="34" cy="167" rx="9" ry="4" fill={F} />
      {/* Second leg */}
      <line x1="136" y1="132" x2="76" y2="134" stroke={F} strokeWidth="10" {...r} />
      <line x1="76" y1="134" x2="42" y2="167" stroke={F} strokeWidth="9" {...r} />
    </svg>
  ),
  // End: Back to start position, arms slightly bent (completed rep)
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor */}
      <rect x="10" y="168" width="260" height="6" rx="3" fill={MAT} />
      {/* Bench */}
      <rect x="80" y="105" width="110" height="12" rx="4" fill={MAT} />
      {/* Hair */}
      <rect x="147" y="28" width="24" height="9" rx="4" fill={FH} />
      {/* Head — back to start height */}
      <ellipse cx="152" cy="43" rx="12" ry="14" fill={F} />
      {/* Neck */}
      <rect x="146" y="56" width="11" height="8" rx="3" fill={F} />
      {/* Torso upright */}
      <polygon points="134,64 166,64 168,106 130,106" fill={F} />
      {/* Shorts */}
      <polygon points="130,100 168,100 170,116 128,116" fill={FH} opacity="0.45" />
      {/* Left arm — slightly bent (showing completed rep) */}
      <line x1="134" y1="72" x2="112" y2="90" stroke={F} strokeWidth="11" {...r} />
      <circle cx="112" cy="90" r="5.5" fill={F} />
      <line x1="112" y1="90" x2="118" y2="105" stroke={F} strokeWidth="11" {...r} />
      {/* Right arm — slightly bent */}
      <line x1="164" y1="72" x2="186" y2="90" stroke={F} strokeWidth="11" {...r} />
      <circle cx="186" cy="90" r="5.5" fill={F} />
      <line x1="186" y1="90" x2="178" y2="105" stroke={F} strokeWidth="11" {...r} />
      {/* Legs extended forward */}
      <line x1="132" y1="108" x2="72" y2="110" stroke={F} strokeWidth="13" {...r} />
      <circle cx="72" cy="110" r="6" fill={F} />
      <line x1="72" y1="110" x2="38" y2="165" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="34" cy="167" rx="9" ry="4" fill={F} />
      {/* Second leg */}
      <line x1="136" y1="110" x2="76" y2="112" stroke={F} strokeWidth="10" {...r} />
      <line x1="76" y1="112" x2="42" y2="167" stroke={F} strokeWidth="9" {...r} />
    </svg>
  ),
}
