import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const MermaidStretch: IllustrationPair = {
  // Start: Seated upright, legs to one side (Z-sit), hands on mat
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="120" cy="26" rx="15" ry="22" fill={FH} />
      {/* Head */}
      <ellipse cx="120" cy="20" rx="12" ry="14" fill={F} />
      {/* Torso upright, seated */}
      <polygon points="100,42 140,42 144,94 96,94" fill={F} />
      {/* Left arm — hand on mat beside hip, supporting */}
      <line x1="100" y1="50" x2="84" y2="76" stroke={F} strokeWidth="10" {...r} />
      <circle cx="84" cy="76" r="5" fill={F} />
      <line x1="84" y1="76" x2="78" y2="104" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="76" cy="107" rx="5" ry="4" fill={F} />
      {/* Right arm — hand on mat on other side */}
      <line x1="138" y1="50" x2="152" y2="76" stroke={F} strokeWidth="10" {...r} />
      <circle cx="152" cy="76" r="5" fill={F} />
      <line x1="152" y1="76" x2="158" y2="104" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="160" cy="107" rx="5" ry="4" fill={F} />
      {/* Hip */}
      <circle cx="120" cy="94" r="8" fill={F} />
      {/* Legs to the right — Z-sit: one leg forward, one folded back */}
      <line x1="116" y1="94" x2="148" y2="106" stroke={F} strokeWidth="13" {...r} />
      <circle cx="148" cy="106" r="6" fill={F} />
      <line x1="148" y1="106" x2="172" y2="126" stroke={F} strokeWidth="11" {...r} />
      {/* Second leg folded back */}
      <line x1="124" y1="94" x2="158" y2="104" stroke={F} strokeWidth="11" {...r} />
      <circle cx="158" cy="104" r="5" fill={F} />
      <line x1="158" y1="104" x2="180" y2="122" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
  // Mid: One arm lifting overhead, beginning to stretch sideways, torso starting to curve
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair — slight side lean */}
      <ellipse cx="117" cy="24" rx="15" ry="22" fill={FH} />
      {/* Head — beginning to tilt to the right */}
      <ellipse cx="118" cy="18" rx="12" ry="14" fill={F} />
      {/* Torso — slight lateral lean starting */}
      <polygon points="100,40 140,40 142,94 98,94" fill={F} />
      {/* Left arm — rising up overhead */}
      <line x1="100" y1="48" x2="88" y2="30" stroke={F} strokeWidth="10" {...r} />
      <circle cx="88" cy="30" r="5" fill={F} />
      <line x1="88" y1="30" x2="80" y2="14" stroke={F} strokeWidth="8" {...r} />
      {/* Right arm — supporting on mat */}
      <line x1="138" y1="52" x2="154" y2="78" stroke={F} strokeWidth="10" {...r} />
      <circle cx="154" cy="78" r="5" fill={F} />
      <line x1="154" y1="78" x2="162" y2="104" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="164" cy="107" rx="5" ry="4" fill={F} />
      {/* Hip */}
      <circle cx="120" cy="94" r="8" fill={F} />
      {/* Legs — Z-sit to the right */}
      <line x1="114" y1="94" x2="148" y2="106" stroke={F} strokeWidth="13" {...r} />
      <circle cx="148" cy="106" r="6" fill={F} />
      <line x1="148" y1="106" x2="172" y2="126" stroke={F} strokeWidth="11" {...r} />
      <line x1="122" y1="94" x2="156" y2="104" stroke={F} strokeWidth="11" {...r} />
      <circle cx="156" cy="104" r="5" fill={F} />
      <line x1="156" y1="104" x2="180" y2="122" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
  // End: Full Mermaid — arm reaches overhead and arcs to the side creating a C-curve in the torso
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair — head tilted to the right with the arc */}
      <ellipse cx="124" cy="22" rx="15" ry="20" fill={FH} />
      {/* Head — tilted right following the arc */}
      <ellipse cx="126" cy="17" rx="12" ry="13" fill={F} />
      {/* Torso — C-curve to the right: leaning from hip */}
      <polygon points="104,40 144,36 150,92 104,96" fill={F} />
      {/* Left arm — full arc overhead and reaching right, creating the C sweep */}
      <line x1="106" y1="46" x2="88" y2="24" stroke={F} strokeWidth="10" {...r} />
      <circle cx="88" cy="24" r="5" fill={F} />
      {/* The arc continuing overhead to the right */}
      <line x1="88" y1="24" x2="112" y2="10" stroke={F} strokeWidth="8" {...r} />
      <circle cx="112" cy="10" r="4" fill={F} />
      <line x1="112" y1="10" x2="148" y2="12" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="152" cy="13" rx="5" ry="4" fill={F} />
      {/* Right arm — supporting on mat, slightly out from hip */}
      <line x1="148" y1="56" x2="164" y2="82" stroke={F} strokeWidth="10" {...r} />
      <circle cx="164" cy="82" r="5" fill={F} />
      <line x1="164" y1="82" x2="174" y2="108" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="176" cy="111" rx="5" ry="4" fill={F} />
      {/* Hip */}
      <circle cx="127" cy="94" r="8" fill={F} />
      {/* Legs — Z-sit to the right */}
      <line x1="120" y1="94" x2="154" y2="106" stroke={F} strokeWidth="13" {...r} />
      <circle cx="154" cy="106" r="6" fill={F} />
      <line x1="154" y1="106" x2="178" y2="126" stroke={F} strokeWidth="11" {...r} />
      <line x1="128" y1="96" x2="162" y2="106" stroke={F} strokeWidth="11" {...r} />
      <circle cx="162" cy="106" r="5" fill={F} />
      <line x1="162" y1="106" x2="186" y2="124" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
}
