import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const PilatesHundred: IllustrationPair = {
  // Start: lying flat, legs straight, arms at sides
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="33" cy="122" rx="13" ry="10" fill={FH} />
      {/* Head flat */}
      <ellipse cx="35" cy="119" rx="11" ry="12" fill={F} />
      {/* Neck */}
      <rect x="44" y="115" width="10" height="9" rx="3" fill={F} />
      {/* Torso flat */}
      <rect x="52" y="113" width="115" height="14" rx="6" fill={F} />
      {/* Right leg straight */}
      <line x1="162" y1="115" x2="215" y2="116" stroke={F} strokeWidth="13" {...r} />
      <line x1="215" y1="116" x2="255" y2="117" stroke={F} strokeWidth="11" {...r} />
      {/* Left leg (behind) */}
      <line x1="158" y1="117" x2="210" y2="118" stroke={F} strokeWidth="11" {...r} />
      <line x1="210" y1="118" x2="250" y2="119" stroke={F} strokeWidth="10" {...r} />
      {/* Arms at sides */}
      <line x1="68" y1="127" x2="140" y2="133" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="144" cy="133" rx="6" ry="4" fill={F} />
    </svg>
  ),

  // Mid: classic Hundred — legs at 45°, head/shoulders in C-curve, arms pumping at ~y=115
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Lower back / hips on mat */}
      <ellipse cx="150" cy="128" rx="14" ry="8" fill={F} />
      {/* Torso in C-curve — curved path from hips up to lifted shoulders */}
      <path d="M150,126 Q130,118 108,115 Q88,114 70,119" stroke={F} strokeWidth="16" fill="none" strokeLinecap="round" />
      {/* Lifted head with C-curve neck */}
      <ellipse cx="55" cy="112" rx="11" ry="12" fill={F} />
      {/* Hair (lifted head — hair flows back) */}
      <ellipse cx="52" cy="115" rx="13" ry="10" fill={FH} />
      <ellipse cx="55" cy="112" rx="11" ry="12" fill={F} />
      {/* Arms pumping parallel to floor — pointing forward, slightly down */}
      <line x1="80" y1="118" x2="115" y2="116" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="120" cy="115" rx="6" ry="4" fill={F} />
      <line x1="85" y1="122" x2="120" y2="120" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="124" cy="119" rx="5" ry="4" fill={F} />
      {/* Legs at 45° — right leg */}
      <line x1="156" y1="124" x2="195" y2="108" stroke={F} strokeWidth="13" {...r} />
      <line x1="195" y1="108" x2="234" y2="93" stroke={F} strokeWidth="11" {...r} />
      {/* Left leg at 45° (slightly behind) */}
      <line x1="152" y1="126" x2="190" y2="111" stroke={F} strokeWidth="11" {...r} />
      <line x1="190" y1="111" x2="229" y2="96" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),

  // End: Hundred position with legs lower (~30°) — more challenging
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hips/lower back on mat */}
      <ellipse cx="150" cy="128" rx="14" ry="8" fill={F} />
      {/* Torso in C-curve */}
      <path d="M150,126 Q130,118 108,115 Q88,114 70,119" stroke={F} strokeWidth="16" fill="none" strokeLinecap="round" />
      {/* Hair */}
      <ellipse cx="52" cy="115" rx="13" ry="10" fill={FH} />
      {/* Lifted head */}
      <ellipse cx="55" cy="112" rx="11" ry="12" fill={F} />
      {/* Arms pumping */}
      <line x1="80" y1="118" x2="115" y2="116" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="120" cy="115" rx="6" ry="4" fill={F} />
      <line x1="85" y1="122" x2="120" y2="120" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="124" cy="119" rx="5" ry="4" fill={F} />
      {/* Legs lower — ~30° — more challenging */}
      <line x1="156" y1="124" x2="198" y2="114" stroke={F} strokeWidth="13" {...r} />
      <line x1="198" y1="114" x2="245" y2="106" stroke={F} strokeWidth="11" {...r} />
      {/* Left leg (behind) */}
      <line x1="152" y1="126" x2="193" y2="116" stroke={F} strokeWidth="11" {...r} />
      <line x1="193" y1="116" x2="240" y2="108" stroke={F} strokeWidth="10" {...r} />
      {/* Challenge indicator */}
      <text x="210" y="102" fontSize="8" fill="#c9a96e" fontFamily="sans-serif">lower</text>
    </svg>
  ),
}
