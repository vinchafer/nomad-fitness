import type { IllustrationPair } from './index'

const F = '#4a3e2d'   // female figure (warm dark brown)
const FH = '#2d261a'  // hair
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const WarriorI: IllustrationPair = {
  // Start: Standing upright, feet together
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair (long, behind head) */}
      <ellipse cx="140" cy="30" rx="15" ry="22" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="24" rx="12" ry="14" fill={F} />
      {/* Neck */}
      <rect x="135" y="37" width="10" height="9" rx="4" fill={F} />
      {/* Torso */}
      <polygon points="120,46 160,46 154,98 126,98" fill={F} />
      {/* Left arm down at side */}
      <line x1="122" y1="52" x2="106" y2="78" stroke={F} strokeWidth="10" {...r} />
      <circle cx="106" cy="78" r="5" fill={F} />
      <line x1="106" y1="78" x2="101" y2="104" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="100" cy="107" rx="5" ry="4" fill={F} />
      {/* Right arm down at side */}
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
  // Mid: Stepping into lunge — one foot stepped back, arms beginning to rise
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <ellipse cx="140" cy="28" rx="15" ry="22" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="22" rx="12" ry="14" fill={F} />
      {/* Neck */}
      <rect x="135" y="35" width="10" height="9" rx="4" fill={F} />
      {/* Torso upright */}
      <polygon points="120,44 160,44 154,96 126,96" fill={F} />
      {/* Left arm beginning to rise — partway up */}
      <line x1="122" y1="50" x2="108" y2="34" stroke={F} strokeWidth="10" {...r} />
      <circle cx="108" cy="34" r="5" fill={F} />
      <line x1="108" y1="34" x2="110" y2="16" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="110" cy="13" rx="5" ry="4" fill={F} />
      {/* Right arm beginning to rise — partway up */}
      <line x1="158" y1="50" x2="172" y2="34" stroke={F} strokeWidth="10" {...r} />
      <circle cx="172" cy="34" r="5" fill={F} />
      <line x1="172" y1="34" x2="170" y2="16" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="170" cy="13" rx="5" ry="4" fill={F} />
      {/* Front leg (left) — knee slightly bent */}
      <line x1="128" y1="96" x2="108" y2="126" stroke={F} strokeWidth="13" {...r} />
      <circle cx="108" cy="126" r="6" fill={F} />
      <line x1="108" y1="126" x2="100" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="97" cy="167" rx="8" ry="5" fill={F} />
      {/* Back leg (right) stepped back, knee slightly bent */}
      <line x1="152" y1="96" x2="178" y2="122" stroke={F} strokeWidth="13" {...r} />
      <circle cx="178" cy="122" r="6" fill={F} />
      <line x1="178" y1="122" x2="192" y2="158" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="195" cy="162" rx="8" ry="5" fill={F} />
    </svg>
  ),
  // End: Full Warrior I — deep lunge, front knee 90°, BOTH ARMS raised overhead
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair (swept up with arms raised) */}
      <ellipse cx="140" cy="22" rx="14" ry="18" fill={FH} />
      {/* Head looking forward-up */}
      <ellipse cx="140" cy="18" rx="12" ry="13" fill={F} />
      {/* Neck */}
      <rect x="135" y="30" width="10" height="9" rx="4" fill={F} />
      {/* Torso tall and upright */}
      <polygon points="120,39 160,39 154,92 126,92" fill={F} />
      {/* LEFT ARM raised overhead — upper arm */}
      <line x1="122" y1="46" x2="116" y2="24" stroke={F} strokeWidth="10" {...r} />
      <circle cx="116" cy="24" r="5" fill={F} />
      {/* LEFT ARM — forearm reaching up, slightly inward */}
      <line x1="116" y1="24" x2="122" y2="6" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="122" cy="4" rx="5" ry="4" fill={F} />
      {/* RIGHT ARM raised overhead — upper arm */}
      <line x1="158" y1="46" x2="164" y2="24" stroke={F} strokeWidth="10" {...r} />
      <circle cx="164" cy="24" r="5" fill={F} />
      {/* RIGHT ARM — forearm reaching up, slightly inward */}
      <line x1="164" y1="24" x2="158" y2="6" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="158" cy="4" rx="5" ry="4" fill={F} />
      {/* Hip joint */}
      <circle cx="140" cy="92" r="7" fill={F} />
      {/* Front leg (left) — deep 90° lunge, thigh parallel to floor */}
      <line x1="128" y1="92" x2="94" y2="126" stroke={F} strokeWidth="13" {...r} />
      <circle cx="94" cy="126" r="7" fill={F} />
      {/* Front shin — vertical, knee at 90° */}
      <line x1="94" y1="126" x2="88" y2="165" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="85" cy="168" rx="9" ry="5" fill={F} />
      {/* Back leg (right) — straight, extended behind */}
      <line x1="152" y1="92" x2="190" y2="118" stroke={F} strokeWidth="13" {...r} />
      <circle cx="190" cy="118" r="7" fill={F} />
      {/* Back shin — angled to floor */}
      <line x1="190" y1="118" x2="208" y2="158" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="211" cy="162" rx="9" ry="5" fill={F} />
    </svg>
  ),
}
