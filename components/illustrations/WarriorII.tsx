import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const WarriorII: IllustrationPair = {
  // Start: Upright standing, feet together (front view)
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair behind head */}
      <ellipse cx="140" cy="30" rx="15" ry="22" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="24" rx="12" ry="14" fill={F} />
      {/* Neck */}
      <rect x="135" y="37" width="10" height="9" rx="4" fill={F} />
      {/* Torso */}
      <polygon points="120,46 160,46 154,98 126,98" fill={F} />
      {/* Left arm — hanging at side */}
      <line x1="122" y1="52" x2="106" y2="78" stroke={F} strokeWidth="10" {...r} />
      <circle cx="106" cy="78" r="5" fill={F} />
      <line x1="106" y1="78" x2="101" y2="104" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="100" cy="107" rx="6" ry="4" fill={F} />
      {/* Right arm — hanging at side */}
      <line x1="158" y1="52" x2="174" y2="78" stroke={F} strokeWidth="10" {...r} />
      <circle cx="174" cy="78" r="5" fill={F} />
      <line x1="174" y1="78" x2="179" y2="104" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="180" cy="107" rx="6" ry="4" fill={F} />
      {/* Left leg — feet together */}
      <line x1="132" y1="98" x2="128" y2="133" stroke={F} strokeWidth="13" {...r} />
      <circle cx="128" cy="133" r="6" fill={F} />
      <line x1="128" y1="133" x2="126" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="124" cy="167" rx="8" ry="4" fill={F} />
      {/* Right leg — feet together */}
      <line x1="148" y1="98" x2="152" y2="133" stroke={F} strokeWidth="13" {...r} />
      <circle cx="152" cy="133" r="6" fill={F} />
      <line x1="152" y1="133" x2="154" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="156" cy="167" rx="8" ry="4" fill={F} />
    </svg>
  ),

  // Mid: Wide stance, arms beginning to extend sideways at shoulder height, front knee slightly bent, face turns left
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair — head turning left */}
      <ellipse cx="137" cy="28" rx="15" ry="21" fill={FH} />
      {/* Head — slightly turned left */}
      <ellipse cx="137" cy="23" rx="12" ry="13" fill={F} />
      {/* Neck */}
      <rect x="132" y="35" width="10" height="8" rx="4" fill={F} />
      {/* Torso upright */}
      <polygon points="120,43 160,43 155,95 125,95" fill={F} />
      {/* Left arm — extending out to the left, elbow slightly raised */}
      <line x1="120" y1="50" x2="88" y2="53" stroke={F} strokeWidth="10" {...r} />
      <circle cx="88" cy="53" r="5" fill={F} />
      <line x1="88" y1="53" x2="58" y2="55" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="55" cy="56" rx="6" ry="4" fill={F} />
      {/* Right arm — extending out to the right */}
      <line x1="160" y1="50" x2="192" y2="53" stroke={F} strokeWidth="10" {...r} />
      <circle cx="192" cy="53" r="5" fill={F} />
      <line x1="192" y1="53" x2="222" y2="55" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="225" cy="56" rx="6" ry="4" fill={F} />
      {/* Left leg — stepping left, knee beginning to bend */}
      <line x1="127" y1="95" x2="100" y2="128" stroke={F} strokeWidth="13" {...r} />
      <circle cx="100" cy="128" r="6" fill={F} />
      <line x1="100" y1="128" x2="88" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="86" cy="167" rx="8" ry="4" fill={F} />
      {/* Right leg — stepping right, straight */}
      <line x1="153" y1="95" x2="182" y2="124" stroke={F} strokeWidth="13" {...r} />
      <circle cx="182" cy="124" r="6" fill={F} />
      <line x1="182" y1="124" x2="194" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="196" cy="167" rx="8" ry="4" fill={F} />
    </svg>
  ),

  // End: Full Warrior II — very wide stance, front (left) knee deeply bent, both arms fully extended in T-shape, head turned left to look over front hand
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair — head turned clearly left */}
      <ellipse cx="132" cy="27" rx="14" ry="20" fill={FH} />
      {/* Head — turned left, looking over front hand */}
      <ellipse cx="132" cy="22" rx="11" ry="13" fill={F} />
      {/* Neck */}
      <rect x="128" y="34" width="10" height="8" rx="4" fill={F} />
      {/* Torso upright */}
      <polygon points="120,42 160,42 155,94 125,94" fill={F} />
      {/* LEFT ARM — fully extended left (front arm — figure looks over this hand) */}
      <line x1="120" y1="49" x2="78" y2="51" stroke={F} strokeWidth="10" {...r} />
      <circle cx="78" cy="51" r="5" fill={F} />
      <line x1="78" y1="51" x2="32" y2="53" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="29" cy="54" rx="6" ry="4" fill={F} />
      {/* RIGHT ARM — fully extended right (back arm) */}
      <line x1="160" y1="49" x2="202" y2="51" stroke={F} strokeWidth="10" {...r} />
      <circle cx="202" cy="51" r="5" fill={F} />
      <line x1="202" y1="51" x2="248" y2="53" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="251" cy="54" rx="6" ry="4" fill={F} />
      {/* LEFT LEG — front leg, deeply bent, thigh nearly parallel to floor */}
      <line x1="127" y1="94" x2="86" y2="122" stroke={F} strokeWidth="14" {...r} />
      <circle cx="86" cy="122" r="7" fill={F} />
      <line x1="86" y1="122" x2="64" y2="164" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="61" cy="167" rx="9" ry="4" fill={F} />
      {/* RIGHT LEG — back leg, fully straight and wide */}
      <line x1="153" y1="94" x2="198" y2="118" stroke={F} strokeWidth="14" {...r} />
      <circle cx="198" cy="118" r="7" fill={F} />
      <line x1="198" y1="118" x2="214" y2="164" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="217" cy="167" rx="9" ry="4" fill={F} />
    </svg>
  ),
}
