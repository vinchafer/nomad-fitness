import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const LegsUpTheWall: IllustrationPair = {
  // Start: Lying on back, legs at 45° angle rising. Body horizontal on floor.
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="26" cy="130" rx="14" ry="10" fill={FH} />
      {/* Head */}
      <ellipse cx="28" cy="124" rx="12" ry="13" fill={F} />
      {/* Torso flat on floor */}
      <line x1="40" y1="126" x2="168" y2="128" stroke={F} strokeWidth="16" {...r} />
      {/* Arms relaxed at sides */}
      <line x1="85" y1="127" x2="82" y2="136" stroke={F} strokeWidth="9" {...r} />
      <line x1="115" y1="127" x2="112" y2="136" stroke={F} strokeWidth="8" {...r} />
      {/* Hip */}
      <circle cx="168" cy="128" r="8" fill={F} />
      {/* Left leg at 45° upward */}
      <line x1="162" y1="126" x2="196" y2="96" stroke={F} strokeWidth="13" {...r} />
      <circle cx="196" cy="96" r="6" fill={F} />
      <line x1="196" y1="96" x2="222" y2="68" stroke={F} strokeWidth="11" {...r} />
      {/* Right leg at 45° (slightly behind) */}
      <line x1="170" y1="128" x2="204" y2="98" stroke={F} strokeWidth="11" {...r} />
      <circle cx="204" cy="98" r="5" fill={F} />
      <line x1="204" y1="98" x2="230" y2="70" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
  // Mid: Legs at 70° — closer to vertical, hips scooting toward wall
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Wall indicator — partially visible as hips approach */}
      <line x1="262" y1="60" x2="262" y2="138" stroke={MAT} strokeWidth="4" />
      {/* Hair */}
      <ellipse cx="26" cy="130" rx="14" ry="10" fill={FH} />
      {/* Head */}
      <ellipse cx="28" cy="124" rx="12" ry="13" fill={F} />
      {/* Torso flat on floor */}
      <line x1="40" y1="126" x2="175" y2="128" stroke={F} strokeWidth="16" {...r} />
      {/* Arms relaxed at sides */}
      <line x1="85" y1="127" x2="82" y2="136" stroke={F} strokeWidth="9" {...r} />
      <line x1="115" y1="127" x2="112" y2="136" stroke={F} strokeWidth="8" {...r} />
      {/* Hip — moved closer to wall */}
      <circle cx="175" cy="128" r="8" fill={F} />
      {/* Left leg at ~70° */}
      <line x1="169" y1="126" x2="208" y2="88" stroke={F} strokeWidth="13" {...r} />
      <circle cx="208" cy="88" r="6" fill={F} />
      <line x1="208" y1="88" x2="240" y2="52" stroke={F} strokeWidth="11" {...r} />
      {/* Right leg at ~70° (slightly behind) */}
      <line x1="177" y1="128" x2="215" y2="90" stroke={F} strokeWidth="11" {...r} />
      <circle cx="215" cy="90" r="5" fill={F} />
      <line x1="215" y1="90" x2="246" y2="55" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
  // End: Full Legs Up the Wall — legs vertical (90°), feet pointing up, hips at wall
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Wall indicator */}
      <line x1="262" y1="30" x2="262" y2="138" stroke={MAT} strokeWidth="4" />
      {/* Hair */}
      <ellipse cx="26" cy="130" rx="14" ry="10" fill={FH} />
      {/* Head */}
      <ellipse cx="28" cy="124" rx="12" ry="13" fill={F} />
      {/* Torso flat, hips touching wall */}
      <line x1="40" y1="126" x2="180" y2="128" stroke={F} strokeWidth="16" {...r} />
      {/* Arms relaxed out to sides in T */}
      <line x1="80" y1="126" x2="58" y2="118" stroke={F} strokeWidth="9" {...r} />
      <line x1="58" y1="118" x2="38" y2="112" stroke={F} strokeWidth="8" {...r} />
      <line x1="115" y1="127" x2="136" y2="118" stroke={F} strokeWidth="9" {...r} />
      <line x1="136" y1="118" x2="155" y2="110" stroke={F} strokeWidth="8" {...r} />
      {/* Hip touching wall */}
      <circle cx="180" cy="128" r="8" fill={F} />
      {/* Left leg vertical going straight up */}
      <line x1="174" y1="126" x2="172" y2="80" stroke={F} strokeWidth="13" {...r} />
      <circle cx="172" cy="80" r="6" fill={F} />
      <line x1="172" y1="80" x2="170" y2="36" stroke={F} strokeWidth="11" {...r} />
      {/* Right leg vertical (slightly behind) */}
      <line x1="182" y1="128" x2="180" y2="82" stroke={F} strokeWidth="11" {...r} />
      <circle cx="180" cy="82" r="5" fill={F} />
      <line x1="180" y1="82" x2="178" y2="38" stroke={F} strokeWidth="10" {...r} />
      {/* Feet at top */}
      <line x1="164" y1="36" x2="184" y2="36" stroke={F} strokeWidth="8" {...r} />
    </svg>
  ),
}
