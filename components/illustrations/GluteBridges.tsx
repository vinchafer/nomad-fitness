import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const GluteBridges: IllustrationPair = {
  // Start: lying on back, knees bent ~90°, feet flat, arms at sides
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="33" cy="122" rx="13" ry="10" fill={FH} />
      {/* Head */}
      <ellipse cx="35" cy="119" rx="11" ry="12" fill={F} />
      {/* Neck */}
      <rect x="44" y="115" width="10" height="9" rx="3" fill={F} />
      {/* Torso flat on mat */}
      <rect x="52" y="113" width="110" height="14" rx="6" fill={F} />
      {/* Right thigh angled up */}
      <line x1="158" y1="117" x2="185" y2="99" stroke={F} strokeWidth="13" {...r} />
      {/* Right shin back to mat */}
      <line x1="185" y1="99" x2="200" y2="130" stroke={F} strokeWidth="11" {...r} />
      {/* Left thigh */}
      <line x1="153" y1="119" x2="179" y2="102" stroke={F} strokeWidth="11" {...r} />
      {/* Left shin */}
      <line x1="179" y1="102" x2="194" y2="131" stroke={F} strokeWidth="10" {...r} />
      {/* Feet flat */}
      <ellipse cx="200" cy="133" rx="11" ry="5" fill={F} />
      <ellipse cx="193" cy="133" rx="9" ry="4" fill={F} />
      {/* Arms at sides */}
      <line x1="68" y1="127" x2="135" y2="133" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="139" cy="133" rx="6" ry="4" fill={F} />
    </svg>
  ),

  // Mid: hips lifted halfway — hips at y≈105, angle between thighs and body
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="33" cy="122" rx="13" ry="10" fill={FH} />
      {/* Head stays on mat */}
      <ellipse cx="35" cy="119" rx="11" ry="12" fill={F} />
      {/* Neck + upper shoulders on mat */}
      <rect x="44" y="115" width="25" height="12" rx="5" fill={F} />
      {/* Torso rising diagonally — half bridge */}
      <line x1="65" y1="120" x2="158" y2="107" stroke={F} strokeWidth="16" {...r} />
      {/* Hip at halfway height */}
      <ellipse cx="158" cy="107" rx="12" ry="9" fill={F} />
      {/* Right thigh descending to foot */}
      <line x1="165" y1="110" x2="192" y2="125" stroke={F} strokeWidth="13" {...r} />
      {/* Right shin vertical to mat */}
      <line x1="192" y1="125" x2="198" y2="132" stroke={F} strokeWidth="11" {...r} />
      {/* Left thigh */}
      <line x1="160" y1="112" x2="186" y2="127" stroke={F} strokeWidth="11" {...r} />
      {/* Left shin */}
      <line x1="186" y1="127" x2="192" y2="133" stroke={F} strokeWidth="10" {...r} />
      {/* Feet flat on mat */}
      <ellipse cx="199" cy="133" rx="11" ry="5" fill={F} />
      {/* Arms pressed into mat */}
      <line x1="60" y1="128" x2="118" y2="134" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="122" cy="134" rx="6" ry="4" fill={F} />
    </svg>
  ),

  // End: full bridge — straight line from knees through hips to shoulders
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="33" cy="122" rx="13" ry="10" fill={FH} />
      {/* Head on mat */}
      <ellipse cx="35" cy="119" rx="11" ry="12" fill={F} />
      {/* Shoulders/upper back on mat */}
      <rect x="44" y="115" width="30" height="13" rx="5" fill={F} />
      {/* Torso ramping up steeply from shoulders to hips */}
      <line x1="70" y1="119" x2="168" y2="98" stroke={F} strokeWidth="17" {...r} />
      {/* Hip at top — straight line */}
      <ellipse cx="168" cy="98" rx="13" ry="9" fill={F} />
      {/* Right thigh descending at steep angle to knee */}
      <line x1="175" y1="101" x2="200" y2="122" stroke={F} strokeWidth="13" {...r} />
      {/* Right shin nearly vertical */}
      <line x1="200" y1="122" x2="204" y2="132" stroke={F} strokeWidth="11" {...r} />
      {/* Left thigh */}
      <line x1="170" y1="103" x2="194" y2="124" stroke={F} strokeWidth="11" {...r} />
      {/* Left shin */}
      <line x1="194" y1="124" x2="198" y2="133" stroke={F} strokeWidth="10" {...r} />
      {/* Feet flat */}
      <ellipse cx="204" cy="133" rx="11" ry="5" fill={F} />
      {/* Arms pressed into mat for stability */}
      <line x1="55" y1="128" x2="115" y2="134" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="119" cy="134" rx="6" ry="4" fill={F} />
      {/* Line showing the straight bridge alignment */}
      <line x1="72" y1="119" x2="200" y2="122" stroke="#c9a96e" strokeWidth="1.5" fill="none" strokeDasharray="5,4" opacity="0.6" />
    </svg>
  ),
}
