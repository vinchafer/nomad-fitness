import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const DoubleLegStretch: IllustrationPair = {
  // Start: ball position — both knees to chest, head/shoulders lifted, hands on shins
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hips on mat */}
      <ellipse cx="150" cy="128" rx="14" ry="8" fill={F} />
      {/* Torso in C-curve */}
      <path d="M150,126 Q130,117 107,114 Q87,113 70,118" stroke={F} strokeWidth="15" fill="none" strokeLinecap="round" />
      {/* Hair */}
      <ellipse cx="55" cy="116" rx="13" ry="10" fill={FH} />
      {/* Head lifted */}
      <ellipse cx="58" cy="112" rx="11" ry="12" fill={F} />
      {/* Both knees drawn in — right thigh */}
      <line x1="148" y1="124" x2="126" y2="105" stroke={F} strokeWidth="13" {...r} />
      {/* Right shin curled */}
      <line x1="126" y1="105" x2="137" y2="123" stroke={F} strokeWidth="11" {...r} />
      {/* Left thigh (behind) */}
      <line x1="154" y1="125" x2="133" y2="107" stroke={F} strokeWidth="11" {...r} />
      {/* Left shin curled */}
      <line x1="133" y1="107" x2="143" y2="125" stroke={F} strokeWidth="10" {...r} />
      {/* Knees */}
      <ellipse cx="126" cy="105" rx="7" ry="6" fill={F} />
      {/* Hands on shins */}
      <line x1="78" y1="118" x2="114" y2="111" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="119" cy="110" rx="6" ry="4" fill={F} />
      <line x1="83" y1="122" x2="119" y2="116" stroke={F} strokeWidth="6" {...r} />
      <ellipse cx="124" cy="115" rx="5" ry="4" fill={F} />
    </svg>
  ),

  // Mid: EXTEND — arms reach overhead, legs extend to 45°, banana/boat shape
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hips / lower back on mat */}
      <ellipse cx="148" cy="128" rx="14" ry="8" fill={F} />
      {/* Torso in C-curve / banana shape — lifted head and shoulders */}
      <path d="M148,126 Q130,118 108,113 Q88,111 70,116" stroke={F} strokeWidth="15" fill="none" strokeLinecap="round" />
      {/* Hair */}
      <ellipse cx="55" cy="114" rx="13" ry="10" fill={FH} />
      {/* Head lifted */}
      <ellipse cx="58" cy="110" rx="11" ry="12" fill={F} />
      {/* Arms reaching overhead — extending back past head */}
      <line x1="72" y1="113" x2="50" y2="105" stroke={F} strokeWidth="8" {...r} />
      <line x1="50" y1="105" x2="26" y2="97" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="22" cy="96" rx="6" ry="4" fill={F} />
      <line x1="76" y1="117" x2="54" y2="109" stroke={F} strokeWidth="7" {...r} />
      <line x1="54" y1="109" x2="30" y2="101" stroke={F} strokeWidth="6" {...r} />
      {/* Legs extended to 45° — right leg */}
      <line x1="154" y1="124" x2="192" y2="110" stroke={F} strokeWidth="13" {...r} />
      <line x1="192" y1="110" x2="232" y2="96" stroke={F} strokeWidth="11" {...r} />
      {/* Left leg (behind) at 45° */}
      <line x1="150" y1="126" x2="187" y2="112" stroke={F} strokeWidth="11" {...r} />
      <line x1="187" y1="112" x2="227" y2="98" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),

  // End: contract back — arms circle around (dashed arc), legs return to chest
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Circular arm motion indicator */}
      <path d="M26,97 Q40,78 70,82 Q100,86 118,110" stroke={MAT} strokeWidth="2" fill="none" strokeDasharray="5,4" />
      {/* Arrow tip for arc direction */}
      <path d="M116,108 L120,112 L113,112" stroke={MAT} strokeWidth="1.5" fill="none" />
      {/* Hips on mat */}
      <ellipse cx="150" cy="128" rx="14" ry="8" fill={F} />
      {/* Torso C-curve */}
      <path d="M150,126 Q130,117 107,114 Q87,113 70,118" stroke={F} strokeWidth="15" fill="none" strokeLinecap="round" />
      {/* Hair */}
      <ellipse cx="55" cy="116" rx="13" ry="10" fill={FH} />
      {/* Head lifted */}
      <ellipse cx="58" cy="112" rx="11" ry="12" fill={F} />
      {/* Arms circling back — now reaching down/forward toward knees */}
      <line x1="78" y1="118" x2="115" y2="112" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="120" cy="111" rx="6" ry="4" fill={F} />
      <line x1="82" y1="122" x2="119" y2="117" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="124" cy="116" rx="5" ry="4" fill={F} />
      {/* Knees returning to chest */}
      <line x1="148" y1="124" x2="127" y2="106" stroke={F} strokeWidth="13" {...r} />
      <line x1="127" y1="106" x2="138" y2="124" stroke={F} strokeWidth="11" {...r} />
      <line x1="153" y1="126" x2="134" y2="109" stroke={F} strokeWidth="11" {...r} />
      <line x1="134" y1="109" x2="144" y2="126" stroke={F} strokeWidth="10" {...r} />
      <ellipse cx="127" cy="106" rx="7" ry="6" fill={F} />
    </svg>
  ),
}
