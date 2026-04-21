import type { IllustrationPair } from './index'

const F = '#2d4a3e'
const FH = '#1a2e26'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const DeadBug: IllustrationPair = {
  // Start: Lying on back, arms pointing straight up, knees bent 90° tabletop (head LEFT, feet RIGHT)
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head */}
      <circle cx="30" cy="128" r="12" fill={F} />
      {/* Hair */}
      <rect x="20" y="119" width="20" height="8" rx="4" fill={FH} />
      {/* Body flat on mat */}
      <line x1="42" y1="131" x2="190" y2="132" stroke={F} strokeWidth="16" {...r} />
      {/* Left arm — vertical upward */}
      <line x1="70" y1="130" x2="68" y2="108" stroke={F} strokeWidth="10" {...r} />
      <circle cx="68" cy="108" r="5" fill={F} />
      <line x1="68" y1="108" x2="66" y2="88" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="65" cy="85" rx="5" ry="4" fill={F} />
      {/* Right arm — vertical upward */}
      <line x1="90" y1="130" x2="88" y2="108" stroke={F} strokeWidth="10" {...r} />
      <circle cx="88" cy="108" r="5" fill={F} />
      <line x1="88" y1="108" x2="86" y2="88" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="85" cy="85" rx="5" ry="4" fill={F} />
      {/* Left thigh — vertical upward (tabletop) */}
      <line x1="182" y1="132" x2="182" y2="100" stroke={F} strokeWidth="14" {...r} />
      <circle cx="182" cy="100" r="6.5" fill={F} />
      {/* Left shin — horizontal (90°, extending to right) */}
      <line x1="182" y1="100" x2="218" y2="100" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="224" cy="100" rx="6" ry="5" fill={F} />
      {/* Right thigh — vertical upward */}
      <line x1="198" y1="133" x2="198" y2="101" stroke={F} strokeWidth="12" {...r} />
      <circle cx="198" cy="101" r="5.5" fill={F} />
      {/* Right shin — horizontal */}
      <line x1="198" y1="101" x2="234" y2="101" stroke={F} strokeWidth="10" {...r} />
      <ellipse cx="240" cy="101" rx="6" ry="5" fill={F} />
    </svg>
  ),
  // Mid: Right arm extends back overhead, LEFT leg extends forward/down at 45°
  //      Left arm stays up, right leg stays in tabletop
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head */}
      <circle cx="30" cy="128" r="12" fill={F} />
      {/* Hair */}
      <rect x="20" y="119" width="20" height="8" rx="4" fill={FH} />
      {/* Body flat on mat */}
      <line x1="42" y1="131" x2="190" y2="132" stroke={F} strokeWidth="16" {...r} />
      {/* Left arm — still vertical upward */}
      <line x1="70" y1="130" x2="68" y2="108" stroke={F} strokeWidth="10" {...r} />
      <circle cx="68" cy="108" r="5" fill={F} />
      <line x1="68" y1="108" x2="66" y2="88" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="65" cy="85" rx="5" ry="4" fill={F} />
      {/* Right arm — extended back overhead toward floor (heading upper-left) */}
      <line x1="90" y1="130" x2="66" y2="112" stroke={F} strokeWidth="10" {...r} />
      <circle cx="66" cy="112" r="5" fill={F} />
      <line x1="66" y1="112" x2="44" y2="98" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="40" cy="96" rx="5" ry="4" fill={F} />
      {/* Left leg — extends forward/down at ~45° (toward lower-right) */}
      <line x1="182" y1="132" x2="210" y2="118" stroke={F} strokeWidth="14" {...r} />
      <circle cx="210" cy="118" r="6.5" fill={F} />
      <line x1="210" y1="118" x2="248" y2="110" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="254" cy="108" rx="7" ry="5" fill={F} />
      {/* Right thigh — still vertical (tabletop) */}
      <line x1="198" y1="133" x2="198" y2="101" stroke={F} strokeWidth="12" {...r} />
      <circle cx="198" cy="101" r="5.5" fill={F} />
      {/* Right shin — horizontal */}
      <line x1="198" y1="101" x2="234" y2="101" stroke={F} strokeWidth="10" {...r} />
      <ellipse cx="240" cy="101" rx="6" ry="5" fill={F} />
    </svg>
  ),
  // End: Opposite side — left arm extends back overhead, right leg extends forward/down
  //      Right arm stays up, left leg stays in tabletop
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head */}
      <circle cx="30" cy="128" r="12" fill={F} />
      {/* Hair */}
      <rect x="20" y="119" width="20" height="8" rx="4" fill={FH} />
      {/* Body flat on mat */}
      <line x1="42" y1="131" x2="190" y2="132" stroke={F} strokeWidth="16" {...r} />
      {/* Left arm — extended back overhead (heading upper-left) */}
      <line x1="70" y1="130" x2="50" y2="112" stroke={F} strokeWidth="10" {...r} />
      <circle cx="50" cy="112" r="5" fill={F} />
      <line x1="50" y1="112" x2="30" y2="98" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="26" cy="96" rx="5" ry="4" fill={F} />
      {/* Right arm — still vertical upward */}
      <line x1="90" y1="130" x2="88" y2="108" stroke={F} strokeWidth="10" {...r} />
      <circle cx="88" cy="108" r="5" fill={F} />
      <line x1="88" y1="108" x2="86" y2="88" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="85" cy="85" rx="5" ry="4" fill={F} />
      {/* Left thigh — still vertical (tabletop) */}
      <line x1="182" y1="132" x2="182" y2="100" stroke={F} strokeWidth="14" {...r} />
      <circle cx="182" cy="100" r="6.5" fill={F} />
      {/* Left shin — horizontal */}
      <line x1="182" y1="100" x2="218" y2="100" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="224" cy="100" rx="6" ry="5" fill={F} />
      {/* Right leg — extends forward/down at ~45° */}
      <line x1="198" y1="133" x2="226" y2="119" stroke={F} strokeWidth="12" {...r} />
      <circle cx="226" cy="119" r="5.5" fill={F} />
      <line x1="226" y1="119" x2="258" y2="112" stroke={F} strokeWidth="10" {...r} />
      <ellipse cx="264" cy="110" rx="7" ry="5" fill={F} />
    </svg>
  ),
}
