import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const BoatPose: IllustrationPair = {
  // Start: Sitting upright, knees bent, feet on floor, hands on mat beside hips
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="120" cy="28" rx="15" ry="22" fill={FH} />
      {/* Head */}
      <ellipse cx="120" cy="22" rx="12" ry="14" fill={F} />
      {/* Torso upright, sitting */}
      <polygon points="100,44 140,44 144,96 96,96" fill={F} />
      {/* Left arm — hand on mat beside hip */}
      <line x1="102" y1="52" x2="90" y2="78" stroke={F} strokeWidth="10" {...r} />
      <circle cx="90" cy="78" r="5" fill={F} />
      <line x1="90" y1="78" x2="86" y2="100" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="84" cy="103" rx="5" ry="4" fill={F} />
      {/* Right arm — hand on mat beside hip */}
      <line x1="138" y1="52" x2="150" y2="78" stroke={F} strokeWidth="10" {...r} />
      <circle cx="150" cy="78" r="5" fill={F} />
      <line x1="150" y1="78" x2="154" y2="100" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="156" cy="103" rx="5" ry="4" fill={F} />
      {/* Hip / sit bones */}
      <circle cx="120" cy="96" r="8" fill={F} />
      {/* Left leg — knee bent, foot on floor */}
      <line x1="112" y1="96" x2="128" y2="116" stroke={F} strokeWidth="13" {...r} />
      <circle cx="128" cy="116" r="6" fill={F} />
      <line x1="128" y1="116" x2="148" y2="132" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="152" cy="133" rx="7" ry="5" fill={F} />
      {/* Right leg — knee bent, foot on floor (slightly behind) */}
      <line x1="128" y1="96" x2="144" y2="114" stroke={F} strokeWidth="11" {...r} />
      <circle cx="144" cy="114" r="5" fill={F} />
      <line x1="144" y1="114" x2="162" y2="130" stroke={F} strokeWidth="10" {...r} />
      <ellipse cx="166" cy="131" rx="7" ry="5" fill={F} />
    </svg>
  ),
  // Mid: Leaning back, lifting feet — shins parallel to floor, arms extending forward, balancing on sit bones
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="104" cy="50" rx="14" ry="20" fill={FH} />
      {/* Head — leaning back slightly */}
      <ellipse cx="106" cy="44" rx="12" ry="13" fill={F} />
      {/* Neck */}
      <line x1="112" y1="56" x2="118" y2="66" stroke={F} strokeWidth="8" {...r} />
      {/* Torso leaning back ~30° */}
      <line x1="118" y1="66" x2="138" y2="106" stroke={F} strokeWidth="14" {...r} />
      {/* Hip / balance point on sit bones */}
      <circle cx="138" cy="106" r="8" fill={F} />
      {/* Left arm extending forward, parallel-ish to shins */}
      <line x1="112" y1="72" x2="96" y2="84" stroke={F} strokeWidth="10" {...r} />
      <circle cx="96" cy="84" r="5" fill={F} />
      <line x1="96" y1="84" x2="80" y2="96" stroke={F} strokeWidth="8" {...r} />
      {/* Right arm extending forward */}
      <line x1="124" y1="76" x2="112" y2="88" stroke={F} strokeWidth="10" {...r} />
      <circle cx="112" cy="88" r="5" fill={F} />
      <line x1="112" y1="88" x2="98" y2="100" stroke={F} strokeWidth="8" {...r} />
      {/* Left leg — shin parallel to floor (tabletop) */}
      <line x1="132" y1="106" x2="156" y2="96" stroke={F} strokeWidth="13" {...r} />
      <circle cx="156" cy="96" r="6" fill={F} />
      <line x1="156" y1="96" x2="188" y2="96" stroke={F} strokeWidth="11" {...r} />
      {/* Right leg — shin parallel to floor (slightly behind) */}
      <line x1="144" y1="108" x2="166" y2="98" stroke={F} strokeWidth="11" {...r} />
      <circle cx="166" cy="98" r="5" fill={F} />
      <line x1="166" y1="98" x2="196" y2="98" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
  // End: Full Boat Pose — clear V-shape. Legs straight at ~50°, arms parallel reaching forward, balance on tailbone
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="96" cy="62" rx="14" ry="20" fill={FH} />
      {/* Head */}
      <ellipse cx="98" cy="56" rx="12" ry="13" fill={F} />
      {/* Neck */}
      <line x1="104" y1="68" x2="112" y2="80" stroke={F} strokeWidth="8" {...r} />
      {/* Torso leaning back ~40° from vertical — the bottom of the V */}
      <line x1="112" y1="80" x2="140" y2="116" stroke={F} strokeWidth="14" {...r} />
      {/* Tailbone balance point */}
      <circle cx="140" cy="116" r="9" fill={F} />
      {/* Left arm — parallel to legs, reaching forward-up */}
      <line x1="106" y1="86" x2="84" y2="98" stroke={F} strokeWidth="10" {...r} />
      <circle cx="84" cy="98" r="5" fill={F} />
      <line x1="84" y1="98" x2="62" y2="110" stroke={F} strokeWidth="8" {...r} />
      {/* Right arm — parallel to legs, reaching forward-up */}
      <line x1="118" y1="90" x2="100" y2="102" stroke={F} strokeWidth="10" {...r} />
      <circle cx="100" cy="102" r="5" fill={F} />
      <line x1="100" y1="102" x2="80" y2="114" stroke={F} strokeWidth="8" {...r} />
      {/* Left leg — straight, raised ~50° (the top of the V) */}
      <line x1="134" y1="112" x2="172" y2="84" stroke={F} strokeWidth="13" {...r} />
      <circle cx="172" cy="84" r="6" fill={F} />
      <line x1="172" y1="84" x2="214" y2="58" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="218" cy="55" rx="7" ry="5" fill={F} />
      {/* Right leg — straight, slightly behind */}
      <line x1="146" y1="116" x2="182" y2="88" stroke={F} strokeWidth="11" {...r} />
      <circle cx="182" cy="88" r="5" fill={F} />
      <line x1="182" y1="88" x2="222" y2="63" stroke={F} strokeWidth="10" {...r} />
      <ellipse cx="226" cy="60" rx="7" ry="5" fill={F} />
    </svg>
  ),
}
