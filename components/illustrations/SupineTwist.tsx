import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const SupineTwist: IllustrationPair = {
  // Start: Lying on back, knees bent, neutral position, arms out to sides
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair (behind head) */}
      <ellipse cx="28" cy="128" rx="14" ry="10" fill={FH} />
      {/* Head */}
      <ellipse cx="30" cy="122" rx="12" ry="13" fill={F} />
      {/* Torso flat on floor */}
      <line x1="42" y1="124" x2="160" y2="126" stroke={F} strokeWidth="16" {...r} />
      {/* Left arm out to side (toward head direction) */}
      <line x1="80" y1="124" x2="56" y2="112" stroke={F} strokeWidth="9" {...r} />
      <line x1="56" y1="112" x2="36" y2="104" stroke={F} strokeWidth="8" {...r} />
      {/* Right arm out to side (toward feet direction) */}
      <line x1="110" y1="125" x2="130" y2="112" stroke={F} strokeWidth="9" {...r} />
      <line x1="130" y1="112" x2="148" y2="103" stroke={F} strokeWidth="8" {...r} />
      {/* Hip joint */}
      <circle cx="160" cy="126" r="8" fill={F} />
      {/* Left leg — knee bent, thigh up */}
      <line x1="155" y1="124" x2="176" y2="104" stroke={F} strokeWidth="13" {...r} />
      <circle cx="176" cy="104" r="6" fill={F} />
      <line x1="176" y1="104" x2="196" y2="126" stroke={F} strokeWidth="11" {...r} />
      {/* Right leg — knee bent, slightly behind */}
      <line x1="162" y1="126" x2="183" y2="106" stroke={F} strokeWidth="11" {...r} />
      <circle cx="183" cy="106" r="5" fill={F} />
      <line x1="183" y1="106" x2="202" y2="128" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
  // Mid: Knees falling to the RIGHT — both knees drop toward floor on right
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair — head turning left */}
      <ellipse cx="24" cy="126" rx="14" ry="10" fill={FH} />
      {/* Head turned to LEFT */}
      <ellipse cx="28" cy="121" rx="12" ry="13" fill={F} />
      {/* Torso flat with slight twist hint (slightly narrower polygon) */}
      <polygon points="40,118 158,122 156,132 42,130" fill={F} />
      {/* Left arm extended away (counterweight) */}
      <line x1="78" y1="122" x2="52" y2="108" stroke={F} strokeWidth="9" {...r} />
      <line x1="52" y1="108" x2="30" y2="100" stroke={F} strokeWidth="8" {...r} />
      {/* Right arm — hand resting on top knee */}
      <line x1="108" y1="124" x2="188" y2="126" stroke={F} strokeWidth="9" {...r} />
      <circle cx="188" cy="126" r="5" fill={F} />
      {/* Hip */}
      <circle cx="158" cy="127" r="8" fill={F} />
      {/* Both knees falling to right — mid way */}
      <line x1="152" y1="126" x2="180" y2="116" stroke={F} strokeWidth="13" {...r} />
      <circle cx="180" cy="116" r="6" fill={F} />
      <line x1="180" y1="116" x2="208" y2="128" stroke={F} strokeWidth="11" {...r} />
      {/* Second leg behind */}
      <line x1="160" y1="128" x2="188" y2="120" stroke={F} strokeWidth="11" {...r} />
      <circle cx="188" cy="120" r="5" fill={F} />
      <line x1="188" y1="120" x2="214" y2="130" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
  // End: Full twist — knees at floor level on right, arms in T, head turned left, torso twisted
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair — head turned far left */}
      <ellipse cx="22" cy="124" rx="14" ry="10" fill={FH} />
      {/* Head turned left */}
      <ellipse cx="26" cy="119" rx="12" ry="13" fill={F} />
      {/* Torso — twisted, upper body stays flat, lower rotates right */}
      <polygon points="38,114 155,120 153,132 40,128" fill={F} />
      {/* Left arm — T position, extended left */}
      <line x1="78" y1="120" x2="50" y2="108" stroke={F} strokeWidth="9" {...r} />
      <line x1="50" y1="108" x2="26" y2="98" stroke={F} strokeWidth="8" {...r} />
      {/* Right arm — T position, extended right */}
      <line x1="108" y1="122" x2="136" y2="110" stroke={F} strokeWidth="9" {...r} />
      <line x1="136" y1="110" x2="160" y2="100" stroke={F} strokeWidth="8" {...r} />
      {/* Hip (rotated right) */}
      <circle cx="155" cy="126" r="8" fill={F} />
      {/* Knees fully dropped to floor on right */}
      <line x1="148" y1="124" x2="186" y2="128" stroke={F} strokeWidth="13" {...r} />
      <circle cx="186" cy="128" r="6" fill={F} />
      <line x1="186" y1="128" x2="216" y2="135" stroke={F} strokeWidth="11" {...r} />
      {/* Second leg stacked on top */}
      <line x1="156" y1="127" x2="193" y2="131" stroke={F} strokeWidth="11" {...r} />
      <circle cx="193" cy="131" r="5" fill={F} />
      <line x1="193" y1="131" x2="222" y2="136" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
}
