import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const RollUp: IllustrationPair = {
  // Start: lying flat, arms extended overhead along floor
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="50" cy="122" rx="13" ry="10" fill={FH} />
      {/* Head flat */}
      <ellipse cx="52" cy="119" rx="11" ry="12" fill={F} />
      {/* Neck */}
      <rect x="61" y="115" width="10" height="9" rx="3" fill={F} />
      {/* Torso flat */}
      <rect x="69" y="113" width="110" height="14" rx="6" fill={F} />
      {/* Right leg straight */}
      <line x1="174" y1="115" x2="225" y2="116" stroke={F} strokeWidth="13" {...r} />
      <line x1="225" y1="116" x2="260" y2="117" stroke={F} strokeWidth="11" {...r} />
      {/* Left leg (behind) */}
      <line x1="170" y1="117" x2="220" y2="118" stroke={F} strokeWidth="11" {...r} />
      {/* Arms extended overhead — reaching toward left edge */}
      <line x1="61" y1="117" x2="38" y2="115" stroke={F} strokeWidth="8" {...r} />
      <line x1="38" y1="115" x2="15" y2="113" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="12" cy="113" rx="5" ry="4" fill={F} />
    </svg>
  ),

  // Mid: C-curve halfway — rolling up, spine articulating, arms reaching forward
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Lower back / sacrum on mat */}
      <ellipse cx="165" cy="130" rx="14" ry="8" fill={F} />
      {/* Torso C-curve — from hips curving up and forward */}
      <path d="M165,128 Q148,115 128,108 Q108,103 88,108" stroke={F} strokeWidth="16" fill="none" strokeLinecap="round" />
      {/* Hair */}
      <ellipse cx="73" cy="111" rx="13" ry="10" fill={FH} />
      {/* Head curled forward (tucked chin) */}
      <ellipse cx="76" cy="107" rx="11" ry="12" fill={F} />
      {/* Arms reaching forward at shoulder level */}
      <line x1="90" y1="109" x2="130" y2="103" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="135" cy="102" rx="6" ry="4" fill={F} />
      <line x1="94" y1="113" x2="134" y2="107" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="139" cy="106" rx="5" ry="3" fill={F} />
      {/* Legs flat on mat */}
      <line x1="158" y1="132" x2="205" y2="133" stroke={F} strokeWidth="13" {...r} />
      <line x1="205" y1="133" x2="248" y2="134" stroke={F} strokeWidth="11" {...r} />
      <line x1="154" y1="134" x2="200" y2="135" stroke={F} strokeWidth="11" {...r} />
    </svg>
  ),

  // End: full sit-up — seated with deep C-curve, arms reaching toward feet, head tucked
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Seated — hips on mat */}
      <ellipse cx="158" cy="130" rx="16" ry="9" fill={F} />
      {/* Deep C-curve spine — fully seated, curled forward */}
      <path d="M158,128 Q138,115 118,108 Q100,104 82,110" stroke={F} strokeWidth="16" fill="none" strokeLinecap="round" />
      {/* Hair */}
      <ellipse cx="68" cy="114" rx="13" ry="10" fill={FH} />
      {/* Head deeply tucked */}
      <ellipse cx="71" cy="110" rx="11" ry="12" fill={F} />
      {/* Arms reaching long toward feet */}
      <line x1="84" y1="113" x2="128" y2="119" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="134" cy="120" rx="6" ry="4" fill={F} />
      <line x1="88" y1="117" x2="132" y2="123" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="137" cy="124" rx="5" ry="3" fill={F} />
      {/* Legs straight, extending toward left */}
      <line x1="148" y1="132" x2="108" y2="133" stroke={F} strokeWidth="13" {...r} />
      <line x1="108" y1="133" x2="70" y2="134" stroke={F} strokeWidth="11" {...r} />
      {/* Feet (toes pointing) */}
      <ellipse cx="65" cy="134" rx="8" ry="4" fill={F} />
      {/* Right leg (behind) */}
      <line x1="168" y1="132" x2="215" y2="133" stroke={F} strokeWidth="11" {...r} />
      <line x1="215" y1="133" x2="250" y2="134" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
}
