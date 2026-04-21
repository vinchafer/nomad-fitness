import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const CrescentLunge: IllustrationPair = {
  // Start: Standing upright
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <ellipse cx="140" cy="30" rx="15" ry="22" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="24" rx="12" ry="14" fill={F} />
      {/* Torso upright */}
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
  // Mid: Stepping into lunge — right leg back, left knee bent, arms beginning to rise
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <ellipse cx="138" cy="28" rx="15" ry="22" fill={FH} />
      {/* Head */}
      <ellipse cx="138" cy="22" rx="12" ry="14" fill={F} />
      {/* Torso upright in lunge */}
      <polygon points="118,44 158,44 154,96 122,96" fill={F} />
      {/* Left arm rising — elbow up */}
      <line x1="120" y1="50" x2="108" y2="34" stroke={F} strokeWidth="10" {...r} />
      <circle cx="108" cy="34" r="5" fill={F} />
      <line x1="108" y1="34" x2="100" y2="20" stroke={F} strokeWidth="8" {...r} />
      {/* Right arm rising */}
      <line x1="156" y1="50" x2="168" y2="34" stroke={F} strokeWidth="10" {...r} />
      <circle cx="168" cy="34" r="5" fill={F} />
      <line x1="168" y1="34" x2="176" y2="20" stroke={F} strokeWidth="8" {...r} />
      {/* Hip */}
      <circle cx="138" cy="96" r="8" fill={F} />
      {/* Front leg (left) — knee bent at ~90° */}
      <line x1="130" y1="96" x2="118" y2="130" stroke={F} strokeWidth="13" {...r} />
      <circle cx="118" cy="130" r="6" fill={F} />
      <line x1="118" y1="130" x2="112" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="108" cy="167" rx="8" ry="5" fill={F} />
      {/* Back leg (right) — stepping back, knee lowering */}
      <line x1="146" y1="96" x2="170" y2="124" stroke={F} strokeWidth="13" {...r} />
      <circle cx="170" cy="124" r="6" fill={F} />
      <line x1="170" y1="124" x2="182" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="184" cy="167" rx="8" ry="5" fill={F} />
    </svg>
  ),
  // End: Full Crescent/High Lunge — right leg back, left knee at 90°, both arms raised overhead with slight backbend
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair — head slightly tilted back */}
      <ellipse cx="134" cy="22" rx="15" ry="20" fill={FH} />
      {/* Head tilted back (backbend) */}
      <ellipse cx="136" cy="17" rx="12" ry="13" fill={F} />
      {/* Torso with slight backbend — curves gently back */}
      <polygon points="116,38 156,38 158,92 114,92" fill={F} />
      {/* Left arm raised overhead and back — sweep arc */}
      <line x1="116" y1="46" x2="100" y2="24" stroke={F} strokeWidth="10" {...r} />
      <circle cx="100" cy="24" r="5" fill={F} />
      <line x1="100" y1="24" x2="92" y2="8" stroke={F} strokeWidth="8" {...r} />
      {/* Right arm raised overhead and back */}
      <line x1="154" y1="46" x2="168" y2="22" stroke={F} strokeWidth="10" {...r} />
      <circle cx="168" cy="22" r="5" fill={F} />
      <line x1="168" y1="22" x2="176" y2="8" stroke={F} strokeWidth="8" {...r} />
      {/* Hip */}
      <circle cx="136" cy="92" r="8" fill={F} />
      {/* Front leg (left) — knee at 90°, shin vertical */}
      <line x1="126" y1="92" x2="112" y2="126" stroke={F} strokeWidth="13" {...r} />
      <circle cx="112" cy="126" r="6" fill={F} />
      <line x1="112" y1="126" x2="108" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="104" cy="167" rx="8" ry="5" fill={F} />
      {/* Back leg (right) — extended behind, knee raised off floor */}
      <line x1="146" y1="92" x2="180" y2="120" stroke={F} strokeWidth="13" {...r} />
      <circle cx="180" cy="120" r="6" fill={F} />
      <line x1="180" y1="120" x2="200" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="202" cy="167" rx="8" ry="5" fill={F} />
    </svg>
  ),
}
