import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const CobraPose: IllustrationPair = {
  // Start: Lying flat on stomach. Arms bent, hands under shoulders. Face looking slightly up/forward. (Side view, faces right)
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — slightly raised, facing right */}
      <ellipse cx="238" cy="122" rx="12" ry="11" fill={F} />
      {/* Hair */}
      <ellipse cx="234" cy="118" rx="11" ry="9" fill={FH} />
      {/* Neck */}
      <line x1="227" y1="126" x2="218" y2="128" stroke={F} strokeWidth="8" {...r} />
      {/* Torso — flat on stomach, horizontal */}
      <rect x="80" y="125" width="140" height="12" rx="6" fill={F} />
      {/* Right arm (near side) — bent, hand under right shoulder area */}
      <line x1="200" y1="126" x2="208" y2="118" stroke={F} strokeWidth="9" {...r} />
      <circle cx="208" cy="118" r="5" fill={F} />
      <line x1="208" y1="118" x2="218" y2="126" stroke={F} strokeWidth="8" {...r} />
      {/* Left arm (far side) — bent, hand under left shoulder */}
      <line x1="176" y1="126" x2="184" y2="118" stroke={F} strokeWidth="9" {...r} />
      <circle cx="184" cy="118" r="5" fill={F} />
      <line x1="184" y1="118" x2="196" y2="126" stroke={F} strokeWidth="8" {...r} />
      {/* Right leg — extended, close together */}
      <line x1="82" y1="128" x2="46" y2="130" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="42" cy="131" rx="7" ry="5" fill={F} />
      {/* Left leg — parallel, slightly offset */}
      <line x1="82" y1="132" x2="46" y2="134" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="42" cy="135" rx="7" ry="5" fill={F} />
    </svg>
  ),

  // Mid: Sphinx pose — forearms on floor, upper body raised. Elbows under shoulders. Chest lifted, gentle backbend. Lower body flat.
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — raised, looking forward/right */}
      <ellipse cx="248" cy="102" rx="12" ry="13" fill={F} />
      {/* Hair */}
      <ellipse cx="244" cy="98" rx="11" ry="10" fill={FH} />
      {/* Neck */}
      <line x1="237" y1="110" x2="228" y2="116" stroke={F} strokeWidth="9" {...r} />
      {/* Upper torso — raised at ~30° angle (sphinx) */}
      <line x1="228" y1="114" x2="180" y2="130" stroke={F} strokeWidth="15" {...r} />
      {/* Lower torso — flat on floor */}
      <line x1="180" y1="130" x2="110" y2="132" stroke={F} strokeWidth="13" {...r} />
      {/* Right forearm — flat on floor, elbow under shoulder */}
      <line x1="220" y1="118" x2="220" y2="134" stroke={F} strokeWidth="9" {...r} />
      <line x1="220" y1="134" x2="200" y2="136" stroke={F} strokeWidth="8" {...r} />
      {/* Left forearm — flat on floor */}
      <line x1="196" y1="122" x2="196" y2="134" stroke={F} strokeWidth="9" {...r} />
      <line x1="196" y1="134" x2="174" y2="136" stroke={F} strokeWidth="8" {...r} />
      {/* Right leg — flat on floor */}
      <line x1="112" y1="130" x2="60" y2="132" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="56" cy="133" rx="7" ry="5" fill={F} />
      {/* Left leg */}
      <line x1="112" y1="134" x2="60" y2="136" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="56" cy="137" rx="7" ry="5" fill={F} />
    </svg>
  ),

  // End: Full Cobra — arms nearly straight, chest/upper torso raised high. Pronounced backbend spine arc. Pelvis on floor. Head tilts back. (Side view, faces right)
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — tilted back, looking upward */}
      <ellipse cx="252" cy="80" rx="12" ry="13" fill={F} />
      {/* Hair */}
      <ellipse cx="246" cy="76" rx="12" ry="10" fill={FH} />
      {/* Neck — angled back */}
      <line x1="242" y1="90" x2="232" y2="98" stroke={F} strokeWidth="9" {...r} />
      {/* SPINE ARC — the key visual: curved path showing the pronounced backbend */}
      {/* Torso curves up from pelvis/hips at floor level to the raised chest */}
      <path d="M130,132 Q160,128 190,116 Q212,106 228,96" stroke={F} strokeWidth="15" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Right arm — nearly straight, pressing into floor */}
      <line x1="218" y1="102" x2="222" y2="130" stroke={F} strokeWidth="10" {...r} />
      <circle cx="222" cy="130" r="5" fill={F} />
      <line x1="222" y1="130" x2="234" y2="134" stroke={F} strokeWidth="9" {...r} />
      {/* Left arm — nearly straight */}
      <line x1="200" y1="110" x2="204" y2="130" stroke={F} strokeWidth="10" {...r} />
      <circle cx="204" cy="130" r="5" fill={F} />
      <line x1="204" y1="130" x2="216" y2="134" stroke={F} strokeWidth="9" {...r} />
      {/* Pelvis — on the floor */}
      <ellipse cx="130" cy="132" rx="16" ry="7" fill={F} />
      {/* Right leg — flat and straight on floor */}
      <line x1="118" y1="130" x2="60" y2="132" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="56" cy="133" rx="7" ry="5" fill={F} />
      {/* Left leg — parallel */}
      <line x1="118" y1="134" x2="60" y2="136" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="56" cy="137" rx="7" ry="5" fill={F} />
    </svg>
  ),
}
