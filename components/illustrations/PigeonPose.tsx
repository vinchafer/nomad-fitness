import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const PigeonPose: IllustrationPair = {
  // Start: Seated upright, legs extended in front (side/angled view, character faces right)
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="218" cy="42" rx="14" ry="20" fill={FH} />
      {/* Head — facing right */}
      <ellipse cx="222" cy="38" rx="12" ry="14" fill={F} />
      {/* Neck */}
      <rect x="217" y="51" width="9" height="8" rx="4" fill={F} />
      {/* Torso — upright, seated */}
      <polygon points="206,59 234,59 230,108 210,108" fill={F} />
      {/* Right arm — resting on side */}
      <line x1="232" y1="65" x2="244" y2="90" stroke={F} strokeWidth="10" {...r} />
      <circle cx="244" cy="90" r="5" fill={F} />
      <line x1="244" y1="90" x2="250" y2="112" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="252" cy="115" rx="6" ry="4" fill={F} />
      {/* Left arm — resting on other side */}
      <line x1="208" y1="65" x2="196" y2="90" stroke={F} strokeWidth="10" {...r} />
      <circle cx="196" cy="90" r="5" fill={F} />
      <line x1="196" y1="90" x2="190" y2="112" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="188" cy="115" rx="6" ry="4" fill={F} />
      {/* Hips/seat on floor */}
      <ellipse cx="218" cy="110" rx="16" ry="8" fill={F} />
      {/* Right leg — extended forward to the right */}
      <line x1="226" y1="112" x2="200" y2="132" stroke={F} strokeWidth="13" {...r} />
      <circle cx="200" cy="132" r="6" fill={F} />
      <line x1="200" y1="132" x2="156" y2="134" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="152" cy="135" rx="8" ry="5" fill={F} />
      {/* Left leg — extended backward/same direction */}
      <line x1="210" y1="112" x2="240" y2="130" stroke={F} strokeWidth="13" {...r} />
      <circle cx="240" cy="130" r="6" fill={F} />
      <line x1="240" y1="130" x2="268" y2="133" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="272" cy="134" rx="7" ry="5" fill={F} />
    </svg>
  ),

  // Mid: Front leg folded in (shin roughly horizontal), back leg extended behind. Torso upright, hands on floor for support.
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="190" cy="38" rx="14" ry="20" fill={FH} />
      {/* Head — facing right */}
      <ellipse cx="194" cy="34" rx="12" ry="14" fill={F} />
      {/* Neck */}
      <rect x="189" y="47" width="9" height="8" rx="4" fill={F} />
      {/* Torso — upright */}
      <polygon points="178,55 208,55 204,104 182,104" fill={F} />
      {/* Right arm — supporting on floor to the right */}
      <line x1="206" y1="62" x2="228" y2="90" stroke={F} strokeWidth="10" {...r} />
      <circle cx="228" cy="90" r="5" fill={F} />
      <line x1="228" y1="90" x2="236" y2="118" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="237" cy="122" rx="7" ry="4" fill={F} />
      {/* Left arm — supporting on floor to the left */}
      <line x1="180" y1="62" x2="162" y2="90" stroke={F} strokeWidth="10" {...r} />
      <circle cx="162" cy="90" r="5" fill={F} />
      <line x1="162" y1="90" x2="152" y2="118" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="150" cy="122" rx="7" ry="4" fill={F} />
      {/* Hips on floor */}
      <ellipse cx="190" cy="106" rx="16" ry="8" fill={F} />
      {/* Front leg — shin horizontal, knee folded out to the left */}
      {/* Thigh angling left-forward */}
      <line x1="182" y1="108" x2="148" y2="120" stroke={F} strokeWidth="13" {...r} />
      <circle cx="148" cy="120" r="6" fill={F} />
      {/* Shin horizontal on mat */}
      <line x1="148" y1="120" x2="114" y2="128" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="110" cy="130" rx="8" ry="5" fill={F} />
      {/* Back leg — extended straight behind to the right */}
      <line x1="198" y1="108" x2="236" y2="118" stroke={F} strokeWidth="13" {...r} />
      <circle cx="236" cy="118" r="6" fill={F} />
      <line x1="236" y1="118" x2="264" y2="130" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="268" cy="132" rx="7" ry="5" fill={F} />
    </svg>
  ),

  // End: Full Pigeon Pose — front leg folded (shin at ~45°, knee out), back leg fully extended, torso FOLDED FORWARD over front leg, arms stretched out, forehead toward mat
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Back leg — fully extended to the right */}
      <line x1="178" y1="120" x2="220" y2="126" stroke={F} strokeWidth="13" {...r} />
      <circle cx="220" cy="126" r="6" fill={F} />
      <line x1="220" y1="126" x2="258" y2="132" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="262" cy="133" rx="8" ry="5" fill={F} />
      {/* Front leg — folded, shin at ~45°, knee out to the side */}
      {/* Thigh angling forward-left */}
      <line x1="168" y1="120" x2="136" y2="128" stroke={F} strokeWidth="13" {...r} />
      <circle cx="136" cy="128" r="6" fill={F} />
      {/* Shin at angle on mat */}
      <line x1="136" y1="128" x2="110" y2="134" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="106" cy="135" rx="8" ry="5" fill={F} />
      {/* Hips — on mat, center of figure */}
      <ellipse cx="172" cy="122" rx="14" ry="7" fill={F} />
      {/* Torso — FOLDED FORWARD over front leg, nearly horizontal */}
      <path d="M172,118 Q152,114 128,118" stroke={F} strokeWidth="14" fill="none" strokeLinecap="round" />
      {/* Head — forehead toward mat, facing down */}
      <ellipse cx="112" cy="126" rx="12" ry="10" fill={F} />
      {/* Hair visible from above */}
      <ellipse cx="108" cy="122" rx="11" ry="8" fill={FH} />
      {/* Left arm — stretched forward on mat */}
      <line x1="118" y1="124" x2="84" y2="126" stroke={F} strokeWidth="9" {...r} />
      <line x1="84" y1="126" x2="52" y2="128" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="48" cy="129" rx="7" ry="4" fill={F} />
      {/* Right arm — stretched forward alongside */}
      <line x1="120" y1="128" x2="86" y2="130" stroke={F} strokeWidth="8" {...r} />
      <line x1="86" y1="130" x2="54" y2="132" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="50" cy="133" rx="7" ry="4" fill={F} />
    </svg>
  ),
}
