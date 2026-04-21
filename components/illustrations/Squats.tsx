import type { IllustrationPair } from './index'

const F = '#2d4a3e'   // male figure
const FH = '#1a2e26'  // hair + shorts
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const Squats: IllustrationPair = {
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <rect x="127" y="10" width="26" height="10" rx="5" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="26" rx="13" ry="15" fill={F} />
      {/* Neck */}
      <rect x="134" y="40" width="12" height="9" rx="4" fill={F} />
      {/* Torso trapezoid */}
      <polygon points="116,49 164,49 158,100 122,100" fill={F} />
      {/* Shorts hint */}
      <polygon points="122,96 158,96 162,116 118,116" fill={FH} opacity="0.45" />
      {/* Left upper arm */}
      <line x1="118" y1="56" x2="100" y2="84" stroke={F} strokeWidth="11" {...r} />
      <circle cx="100" cy="84" r="5.5" fill={F} />
      {/* Left lower arm */}
      <line x1="100" y1="84" x2="94" y2="110" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="93" cy="113" rx="5" ry="4" fill={F} />
      {/* Right upper arm */}
      <line x1="162" y1="56" x2="180" y2="84" stroke={F} strokeWidth="11" {...r} />
      <circle cx="180" cy="84" r="5.5" fill={F} />
      {/* Right lower arm */}
      <line x1="180" y1="84" x2="186" y2="110" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="187" cy="113" rx="5" ry="4" fill={F} />
      {/* Left thigh */}
      <line x1="126" y1="100" x2="116" y2="137" stroke={F} strokeWidth="14" {...r} />
      <circle cx="116" cy="137" r="6.5" fill={F} />
      {/* Left lower leg */}
      <line x1="116" y1="137" x2="112" y2="168" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="109" cy="171" rx="9" ry="4" fill={F} />
      {/* Right thigh */}
      <line x1="154" y1="100" x2="164" y2="137" stroke={F} strokeWidth="14" {...r} />
      <circle cx="164" cy="137" r="6.5" fill={F} />
      {/* Right lower leg */}
      <line x1="164" y1="137" x2="168" y2="168" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="171" cy="171" rx="9" ry="4" fill={F} />
    </svg>
  ),
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <rect x="127" y="14" width="26" height="10" rx="5" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="30" rx="13" ry="15" fill={F} />
      {/* Neck */}
      <rect x="134" y="44" width="12" height="9" rx="4" fill={F} />
      {/* Torso — slightly forward lean */}
      <polygon points="116,53 164,53 160,104 120,104" fill={F} />
      {/* Shorts hint */}
      <polygon points="120,100 160,100 163,118 117,118" fill={FH} opacity="0.45" />
      {/* Left upper arm — extended forward/downward at ~45° for balance */}
      <line x1="118" y1="62" x2="88" y2="86" stroke={F} strokeWidth="11" {...r} />
      <circle cx="88" cy="86" r="5.5" fill={F} />
      {/* Left lower arm — slightly bent, pointing forward */}
      <line x1="88" y1="86" x2="68" y2="100" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="66" cy="102" rx="5" ry="4" fill={F} />
      {/* Right upper arm — extended forward */}
      <line x1="162" y1="62" x2="192" y2="86" stroke={F} strokeWidth="11" {...r} />
      <circle cx="192" cy="86" r="5.5" fill={F} />
      {/* Right lower arm */}
      <line x1="192" y1="86" x2="212" y2="100" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="214" cy="102" rx="5" ry="4" fill={F} />
      {/* Left thigh — slightly bent, knee moved down and outward */}
      <line x1="124" y1="104" x2="110" y2="138" stroke={F} strokeWidth="14" {...r} />
      <circle cx="110" cy="138" r="6.5" fill={F} />
      {/* Left lower leg */}
      <line x1="110" y1="138" x2="108" y2="168" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="106" cy="171" rx="9" ry="4" fill={F} />
      {/* Right thigh — slightly bent */}
      <line x1="156" y1="104" x2="170" y2="138" stroke={F} strokeWidth="14" {...r} />
      <circle cx="170" cy="138" r="6.5" fill={F} />
      {/* Right lower leg */}
      <line x1="170" y1="138" x2="172" y2="168" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="174" cy="171" rx="9" ry="4" fill={F} />
    </svg>
  ),
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <rect x="127" y="30" width="26" height="10" rx="5" fill={FH} />
      {/* Head — lower due to deep squat */}
      <ellipse cx="140" cy="46" rx="13" ry="15" fill={F} />
      {/* Neck */}
      <rect x="134" y="60" width="12" height="9" rx="4" fill={F} />
      {/* Torso — forward lean, hips drop to ~y=120 */}
      <polygon points="118,69 162,69 156,120 122,120" fill={F} />
      {/* Shorts hint */}
      <polygon points="122,116 156,116 158,128 120,128" fill={FH} opacity="0.45" />
      {/* Left arm — extended forward at shoulder height */}
      <line x1="120" y1="78" x2="80" y2="78" stroke={F} strokeWidth="11" {...r} />
      <circle cx="80" cy="78" r="5.5" fill={F} />
      <line x1="80" y1="78" x2="52" y2="80" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="49" cy="80" rx="5" ry="4" fill={F} />
      {/* Right arm — extended forward at shoulder height */}
      <line x1="160" y1="78" x2="200" y2="78" stroke={F} strokeWidth="11" {...r} />
      <circle cx="200" cy="78" r="5.5" fill={F} />
      <line x1="200" y1="78" x2="228" y2="80" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="231" cy="80" rx="5" ry="4" fill={F} />
      {/* Left thigh — deep squat, roughly parallel to floor */}
      <line x1="124" y1="120" x2="92" y2="122" stroke={F} strokeWidth="14" {...r} />
      <circle cx="92" cy="122" r="6.5" fill={F} />
      {/* Left lower leg — near vertical */}
      <line x1="92" y1="122" x2="96" y2="168" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="93" cy="171" rx="9" ry="4" fill={F} />
      {/* Right thigh — deep squat */}
      <line x1="154" y1="120" x2="186" y2="122" stroke={F} strokeWidth="14" {...r} />
      <circle cx="186" cy="122" r="6.5" fill={F} />
      {/* Right lower leg — near vertical */}
      <line x1="186" y1="122" x2="182" y2="168" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="185" cy="171" rx="9" ry="4" fill={F} />
    </svg>
  ),
}
