import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const PelvicTilt: IllustrationPair = {
  // Start: lying on back, knees bent, natural lumbar arch (neutral spine)
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="33" cy="122" rx="13" ry="10" fill={FH} />
      {/* Head */}
      <ellipse cx="35" cy="119" rx="11" ry="12" fill={F} />
      {/* Neck */}
      <rect x="44" y="115" width="10" height="9" rx="3" fill={F} />
      {/* Upper torso flat */}
      <rect x="52" y="113" width="85" height="14" rx="6" fill={F} />
      {/* Lumbar arch indicator — dashed line showing gap under lower back */}
      <path d="M95,128 Q120,118 145,128" stroke={MAT} strokeWidth="2" fill="none" strokeDasharray="4,3" />
      {/* Lower back / pelvis */}
      <ellipse cx="148" cy="122" rx="14" ry="9" fill={F} />
      {/* Right thigh angled up ~90° */}
      <line x1="156" y1="118" x2="183" y2="100" stroke={F} strokeWidth="12" {...r} />
      {/* Right shin back to floor */}
      <line x1="183" y1="100" x2="198" y2="130" stroke={F} strokeWidth="10" {...r} />
      {/* Left thigh (slightly behind) */}
      <line x1="150" y1="120" x2="176" y2="103" stroke={F} strokeWidth="10" {...r} />
      {/* Left shin */}
      <line x1="176" y1="103" x2="191" y2="131" stroke={F} strokeWidth="9" {...r} />
      {/* Feet on floor */}
      <ellipse cx="196" cy="133" rx="10" ry="5" fill={F} />
      {/* Arms flat at sides */}
      <line x1="70" y1="127" x2="130" y2="132" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="134" cy="132" rx="6" ry="4" fill={F} />
      {/* Neutral label */}
      <text x="90" y="111" fontSize="8" fill="#aaa" fontFamily="sans-serif">neutral</text>
    </svg>
  ),

  // Mid: posterior pelvic tilt — lower back pressed into mat, arch closes, hips tilt slightly up
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="33" cy="122" rx="13" ry="10" fill={FH} />
      {/* Head */}
      <ellipse cx="35" cy="119" rx="11" ry="12" fill={F} />
      {/* Neck */}
      <rect x="44" y="115" width="10" height="9" rx="3" fill={F} />
      {/* Full torso pressed flat — lower back touching mat */}
      <path d="M52,113 Q100,114 148,117 L148,127 Q100,128 52,127 Z" fill={F} />
      {/* Gap closed indicator */}
      <path d="M95,129 Q120,129 145,129" stroke="#8aab96" strokeWidth="2.5" fill="none" />
      <text x="96" y="141" fontSize="8" fill="#8aab96" fontFamily="sans-serif">flat back</text>
      {/* Pelvis/hip slightly tilted — raised a touch */}
      <ellipse cx="148" cy="119" rx="14" ry="9" fill={F} />
      {/* Right thigh */}
      <line x1="156" y1="115" x2="182" y2="98" stroke={F} strokeWidth="12" {...r} />
      {/* Right shin */}
      <line x1="182" y1="98" x2="197" y2="129" stroke={F} strokeWidth="10" {...r} />
      {/* Left thigh */}
      <line x1="150" y1="117" x2="175" y2="101" stroke={F} strokeWidth="10" {...r} />
      {/* Left shin */}
      <line x1="175" y1="101" x2="190" y2="131" stroke={F} strokeWidth="9" {...r} />
      {/* Feet */}
      <ellipse cx="195" cy="133" rx="10" ry="5" fill={F} />
      {/* Abdominals contracted — tension line */}
      <path d="M75,121 Q112,116 148,118" stroke="#c9a96e" strokeWidth="1.5" fill="none" strokeDasharray="3,3" opacity="0.7" />
      {/* Arms pressing into floor */}
      <line x1="70" y1="127" x2="130" y2="132" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="134" cy="132" rx="6" ry="4" fill={F} />
    </svg>
  ),

  // End: return to neutral — integrated, aware, relaxed
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="33" cy="122" rx="13" ry="10" fill={FH} />
      {/* Head relaxed */}
      <ellipse cx="35" cy="119" rx="11" ry="12" fill={F} />
      {/* Neck */}
      <rect x="44" y="115" width="10" height="9" rx="3" fill={F} />
      {/* Torso back to neutral */}
      <rect x="52" y="113" width="98" height="14" rx="6" fill={F} />
      {/* Gentle lumbar arch — smaller than start (integrated awareness) */}
      <path d="M95,128 Q120,121 145,128" stroke={MAT} strokeWidth="1.5" fill="none" strokeDasharray="4,3" />
      {/* Pelvis neutral */}
      <ellipse cx="148" cy="122" rx="14" ry="9" fill={F} />
      {/* Right thigh */}
      <line x1="156" y1="118" x2="183" y2="100" stroke={F} strokeWidth="12" {...r} />
      {/* Right shin */}
      <line x1="183" y1="100" x2="198" y2="130" stroke={F} strokeWidth="10" {...r} />
      {/* Left thigh */}
      <line x1="150" y1="120" x2="176" y2="103" stroke={F} strokeWidth="10" {...r} />
      {/* Left shin */}
      <line x1="176" y1="103" x2="191" y2="131" stroke={F} strokeWidth="9" {...r} />
      {/* Feet */}
      <ellipse cx="196" cy="133" rx="10" ry="5" fill={F} />
      {/* Arms relaxed */}
      <line x1="70" y1="127" x2="130" y2="132" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="134" cy="132" rx="6" ry="4" fill={F} />
      <text x="88" y="111" fontSize="8" fill="#8aab96" fontFamily="sans-serif">neutral+</text>
    </svg>
  ),
}
