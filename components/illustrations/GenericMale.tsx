import type { IllustrationPair } from './index'

const F = '#2d4a3e'
const FH = '#1a2e26'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const GenericMale: IllustrationPair = {
  // Start: Ready stance — upright, athletic, arms relaxed at sides
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <rect x="127" y="10" width="26" height="10" rx="5" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="26" rx="13" ry="15" fill={F} />
      {/* Torso */}
      <polygon points="116,49 164,49 158,100 122,100" fill={F} />
      {/* Shorts */}
      <polygon points="122,96 158,96 162,116 118,116" fill={FH} opacity="0.45" />
      {/* Left arm at side */}
      <line x1="118" y1="56" x2="100" y2="84" stroke={F} strokeWidth="11" {...r} />
      <circle cx="100" cy="84" r="5.5" fill={F} />
      <line x1="100" y1="84" x2="94" y2="110" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="93" cy="113" rx="6" ry="4" fill={F} />
      {/* Right arm at side */}
      <line x1="162" y1="56" x2="180" y2="84" stroke={F} strokeWidth="11" {...r} />
      <circle cx="180" cy="84" r="5.5" fill={F} />
      <line x1="180" y1="84" x2="186" y2="110" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="187" cy="113" rx="6" ry="4" fill={F} />
      {/* Left leg */}
      <line x1="126" y1="100" x2="116" y2="137" stroke={F} strokeWidth="14" {...r} />
      <circle cx="116" cy="137" r="6.5" fill={F} />
      <line x1="116" y1="137" x2="112" y2="168" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="109" cy="171" rx="9" ry="5" fill={F} />
      {/* Right leg */}
      <line x1="154" y1="100" x2="164" y2="137" stroke={F} strokeWidth="14" {...r} />
      <circle cx="164" cy="137" r="6.5" fill={F} />
      <line x1="164" y1="137" x2="168" y2="168" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="171" cy="171" rx="9" ry="5" fill={F} />
    </svg>
  ),
  // Mid: Slightly active — arms raised slightly, weight forward, engaged posture
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <rect x="127" y="10" width="26" height="10" rx="5" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="26" rx="13" ry="15" fill={F} />
      {/* Torso */}
      <polygon points="116,49 164,49 158,100 122,100" fill={F} />
      {/* Shorts */}
      <polygon points="122,96 158,96 162,116 118,116" fill={FH} opacity="0.45" />
      {/* Left arm — slightly raised/forward */}
      <line x1="118" y1="56" x2="96" y2="78" stroke={F} strokeWidth="11" {...r} />
      <circle cx="96" cy="78" r="5.5" fill={F} />
      <line x1="96" y1="78" x2="86" y2="102" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="84" cy="105" rx="6" ry="4" fill={F} />
      {/* Right arm — slightly raised/forward */}
      <line x1="162" y1="56" x2="184" y2="78" stroke={F} strokeWidth="11" {...r} />
      <circle cx="184" cy="78" r="5.5" fill={F} />
      <line x1="184" y1="78" x2="194" y2="102" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="196" cy="105" rx="6" ry="4" fill={F} />
      {/* Left leg — slight lunge/active stance */}
      <line x1="126" y1="100" x2="114" y2="136" stroke={F} strokeWidth="14" {...r} />
      <circle cx="114" cy="136" r="6.5" fill={F} />
      <line x1="114" y1="136" x2="110" y2="168" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="107" cy="171" rx="9" ry="5" fill={F} />
      {/* Right leg */}
      <line x1="154" y1="100" x2="166" y2="136" stroke={F} strokeWidth="14" {...r} />
      <circle cx="166" cy="136" r="6.5" fill={F} />
      <line x1="166" y1="136" x2="170" y2="168" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="173" cy="171" rx="9" ry="5" fill={F} />
    </svg>
  ),
  // End: Exercise in progress — arms up, slight lunge stance, dynamic athletic position
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <rect x="127" y="8" width="26" height="10" rx="5" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="24" rx="13" ry="15" fill={F} />
      {/* Torso — slight forward lean */}
      <polygon points="116,46 164,46 160,98 120,98" fill={F} />
      {/* Shorts */}
      <polygon points="120,94 160,94 164,114 116,114" fill={FH} opacity="0.45" />
      {/* Left arm raised up overhead */}
      <line x1="118" y1="54" x2="98" y2="32" stroke={F} strokeWidth="11" {...r} />
      <circle cx="98" cy="32" r="5.5" fill={F} />
      <line x1="98" y1="32" x2="88" y2="14" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="86" cy="11" rx="6" ry="4" fill={F} />
      {/* Right arm raised up overhead */}
      <line x1="162" y1="54" x2="182" y2="32" stroke={F} strokeWidth="11" {...r} />
      <circle cx="182" cy="32" r="5.5" fill={F} />
      <line x1="182" y1="32" x2="192" y2="14" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="194" cy="11" rx="6" ry="4" fill={F} />
      {/* Left leg — lunge: forward bent knee */}
      <line x1="124" y1="98" x2="108" y2="132" stroke={F} strokeWidth="14" {...r} />
      <circle cx="108" cy="132" r="6.5" fill={F} />
      <line x1="108" y1="132" x2="102" y2="164" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="99" cy="167" rx="9" ry="5" fill={F} />
      {/* Right leg — back leg in lunge */}
      <line x1="156" y1="98" x2="178" y2="128" stroke={F} strokeWidth="14" {...r} />
      <circle cx="178" cy="128" r="6.5" fill={F} />
      <line x1="178" y1="128" x2="192" y2="164" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="195" cy="167" rx="9" ry="5" fill={F} />
    </svg>
  ),
}
