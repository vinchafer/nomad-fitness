import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const GenericFemale: IllustrationPair = {
  // Start: Ready stance — upright standing, arms relaxed at sides
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair (behind head) */}
      <ellipse cx="140" cy="30" rx="15" ry="22" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="24" rx="12" ry="14" fill={F} />
      {/* Torso */}
      <polygon points="120,46 160,46 154,98 126,98" fill={F} />
      {/* Left arm at side */}
      <line x1="122" y1="52" x2="106" y2="78" stroke={F} strokeWidth="10" {...r} />
      <circle cx="106" cy="78" r="5" fill={F} />
      <line x1="106" y1="78" x2="101" y2="104" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="100" cy="107" rx="5" ry="4" fill={F} />
      {/* Right arm at side */}
      <line x1="158" y1="52" x2="174" y2="78" stroke={F} strokeWidth="10" {...r} />
      <circle cx="174" cy="78" r="5" fill={F} />
      <line x1="174" y1="78" x2="179" y2="104" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="180" cy="107" rx="5" ry="4" fill={F} />
      {/* Left leg */}
      <line x1="128" y1="98" x2="120" y2="133" stroke={F} strokeWidth="13" {...r} />
      <circle cx="120" cy="133" r="6" fill={F} />
      <line x1="120" y1="133" x2="117" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="114" cy="167" rx="8" ry="5" fill={F} />
      {/* Right leg */}
      <line x1="152" y1="98" x2="160" y2="133" stroke={F} strokeWidth="13" {...r} />
      <circle cx="160" cy="133" r="6" fill={F} />
      <line x1="160" y1="133" x2="163" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="166" cy="167" rx="8" ry="5" fill={F} />
    </svg>
  ),
  // Mid: Arms slightly raised — open, welcoming posture, slight energy in the pose
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <ellipse cx="140" cy="30" rx="15" ry="22" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="24" rx="12" ry="14" fill={F} />
      {/* Torso */}
      <polygon points="120,46 160,46 154,98 126,98" fill={F} />
      {/* Left arm — raised outward ~45° */}
      <line x1="122" y1="52" x2="100" y2="66" stroke={F} strokeWidth="10" {...r} />
      <circle cx="100" cy="66" r="5" fill={F} />
      <line x1="100" y1="66" x2="84" y2="82" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="82" cy="85" rx="5" ry="4" fill={F} />
      {/* Right arm — raised outward ~45° */}
      <line x1="158" y1="52" x2="180" y2="66" stroke={F} strokeWidth="10" {...r} />
      <circle cx="180" cy="66" r="5" fill={F} />
      <line x1="180" y1="66" x2="196" y2="82" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="198" cy="85" rx="5" ry="4" fill={F} />
      {/* Left leg */}
      <line x1="128" y1="98" x2="120" y2="133" stroke={F} strokeWidth="13" {...r} />
      <circle cx="120" cy="133" r="6" fill={F} />
      <line x1="120" y1="133" x2="117" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="114" cy="167" rx="8" ry="5" fill={F} />
      {/* Right leg */}
      <line x1="152" y1="98" x2="160" y2="133" stroke={F} strokeWidth="13" {...r} />
      <circle cx="160" cy="133" r="6" fill={F} />
      <line x1="160" y1="133" x2="163" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="166" cy="167" rx="8" ry="5" fill={F} />
    </svg>
  ),
  // End: Arms up overhead — full reach/stretch, both arms raised high, celebratory or full extension
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <ellipse cx="140" cy="28" rx="15" ry="22" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="22" rx="12" ry="14" fill={F} />
      {/* Torso — slight upward reach in posture */}
      <polygon points="120,44 160,44 154,96 126,96" fill={F} />
      {/* Left arm raised overhead */}
      <line x1="122" y1="50" x2="104" y2="28" stroke={F} strokeWidth="10" {...r} />
      <circle cx="104" cy="28" r="5" fill={F} />
      <line x1="104" y1="28" x2="96" y2="10" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="94" cy="7" rx="5" ry="4" fill={F} />
      {/* Right arm raised overhead */}
      <line x1="158" y1="50" x2="176" y2="28" stroke={F} strokeWidth="10" {...r} />
      <circle cx="176" cy="28" r="5" fill={F} />
      <line x1="176" y1="28" x2="184" y2="10" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="186" cy="7" rx="5" ry="4" fill={F} />
      {/* Left leg */}
      <line x1="128" y1="96" x2="120" y2="131" stroke={F} strokeWidth="13" {...r} />
      <circle cx="120" cy="131" r="6" fill={F} />
      <line x1="120" y1="131" x2="117" y2="162" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="114" cy="165" rx="8" ry="5" fill={F} />
      {/* Right leg */}
      <line x1="152" y1="96" x2="160" y2="131" stroke={F} strokeWidth="13" {...r} />
      <circle cx="160" cy="131" r="6" fill={F} />
      <line x1="160" y1="131" x2="163" y2="162" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="166" cy="165" rx="8" ry="5" fill={F} />
    </svg>
  ),
}
