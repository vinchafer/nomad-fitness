import type { IllustrationPair } from './index'

const F = '#2d4a3e'
const FH = '#1a2e26'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const ReverseLunges: IllustrationPair = {
  // Start: Upright standing, feet together (front view)
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
      {/* Torso */}
      <polygon points="116,49 164,49 158,100 122,100" fill={F} />
      {/* Shorts */}
      <polygon points="122,96 158,96 162,116 118,116" fill={FH} opacity="0.45" />
      {/* Left arm */}
      <line x1="118" y1="56" x2="100" y2="84" stroke={F} strokeWidth="11" {...r} />
      <circle cx="100" cy="84" r="5.5" fill={F} />
      <line x1="100" y1="84" x2="94" y2="110" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="93" cy="113" rx="5" ry="4" fill={F} />
      {/* Right arm */}
      <line x1="162" y1="56" x2="180" y2="84" stroke={F} strokeWidth="11" {...r} />
      <circle cx="180" cy="84" r="5.5" fill={F} />
      <line x1="180" y1="84" x2="186" y2="110" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="187" cy="113" rx="5" ry="4" fill={F} />
      {/* Left leg */}
      <line x1="126" y1="100" x2="116" y2="137" stroke={F} strokeWidth="14" {...r} />
      <circle cx="116" cy="137" r="6.5" fill={F} />
      <line x1="116" y1="137" x2="112" y2="168" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="109" cy="171" rx="8" ry="4" fill={F} />
      {/* Right leg */}
      <line x1="154" y1="100" x2="164" y2="137" stroke={F} strokeWidth="14" {...r} />
      <circle cx="164" cy="137" r="6.5" fill={F} />
      <line x1="164" y1="137" x2="168" y2="168" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="171" cy="171" rx="8" ry="4" fill={F} />
    </svg>
  ),
  // Mid: Left leg stepped back, right knee slightly bent, arms out for balance
  mid: (
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
      {/* Torso upright */}
      <polygon points="116,49 164,49 158,100 122,100" fill={F} />
      {/* Shorts */}
      <polygon points="122,96 158,96 162,116 118,116" fill={FH} opacity="0.45" />
      {/* Left arm raised slightly for balance */}
      <line x1="118" y1="56" x2="96" y2="76" stroke={F} strokeWidth="11" {...r} />
      <circle cx="96" cy="76" r="5.5" fill={F} />
      <line x1="96" y1="76" x2="88" y2="98" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="87" cy="101" rx="5" ry="4" fill={F} />
      {/* Right arm raised slightly for balance */}
      <line x1="162" y1="56" x2="184" y2="76" stroke={F} strokeWidth="11" {...r} />
      <circle cx="184" cy="76" r="5.5" fill={F} />
      <line x1="184" y1="76" x2="192" y2="98" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="193" cy="101" rx="5" ry="4" fill={F} />
      {/* Right (front) leg — knee slightly bent */}
      <line x1="126" y1="100" x2="122" y2="135" stroke={F} strokeWidth="14" {...r} />
      <circle cx="122" cy="135" r="6.5" fill={F} />
      <line x1="122" y1="135" x2="120" y2="168" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="117" cy="171" rx="8" ry="4" fill={F} />
      {/* Left (back) leg — stepped backward */}
      <line x1="154" y1="100" x2="172" y2="130" stroke={F} strokeWidth="14" {...r} />
      <circle cx="172" cy="130" r="6.5" fill={F} />
      <line x1="172" y1="130" x2="180" y2="168" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="183" cy="171" rx="8" ry="4" fill={F} />
    </svg>
  ),
  // End: Full reverse lunge — left knee near floor, right thigh roughly parallel to floor
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <rect x="127" y="22" width="26" height="10" rx="5" fill={FH} />
      {/* Head — slightly lower in lunge */}
      <ellipse cx="140" cy="38" rx="13" ry="15" fill={F} />
      {/* Neck */}
      <rect x="134" y="52" width="12" height="9" rx="4" fill={F} />
      {/* Torso upright */}
      <polygon points="116,61 164,61 158,108 122,108" fill={F} />
      {/* Shorts */}
      <polygon points="122,104 158,104 162,122 118,122" fill={FH} opacity="0.45" />
      {/* Left arm at side */}
      <line x1="118" y1="68" x2="102" y2="95" stroke={F} strokeWidth="11" {...r} />
      <circle cx="102" cy="95" r="5.5" fill={F} />
      <line x1="102" y1="95" x2="98" y2="120" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="97" cy="123" rx="5" ry="4" fill={F} />
      {/* Right arm at side */}
      <line x1="162" y1="68" x2="178" y2="95" stroke={F} strokeWidth="11" {...r} />
      <circle cx="178" cy="95" r="5.5" fill={F} />
      <line x1="178" y1="95" x2="182" y2="120" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="183" cy="123" rx="5" ry="4" fill={F} />
      {/* Right (front) leg — thigh parallel, knee at ~125 */}
      <line x1="128" y1="108" x2="110" y2="125" stroke={F} strokeWidth="14" {...r} />
      <circle cx="110" cy="125" r="6.5" fill={F} />
      <line x1="110" y1="125" x2="106" y2="168" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="103" cy="171" rx="8" ry="4" fill={F} />
      {/* Left (back) leg — knee near floor at ~162 */}
      <line x1="152" y1="108" x2="178" y2="125" stroke={F} strokeWidth="14" {...r} />
      <circle cx="178" cy="125" r="6.5" fill={F} />
      <line x1="178" y1="125" x2="172" y2="162" stroke={F} strokeWidth="12" {...r} />
      {/* Back knee circle — just above mat */}
      <circle cx="171" cy="162" r="6" fill={F} />
      <ellipse cx="170" cy="168" rx="8" ry="4" fill={F} />
    </svg>
  ),
}
