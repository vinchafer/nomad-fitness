import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const TreePose: IllustrationPair = {
  // Start: Standing on both feet, arms at sides (front view)
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
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
      {/* Left leg */}
      <line x1="132" y1="98" x2="128" y2="133" stroke={F} strokeWidth="13" {...r} />
      <circle cx="128" cy="133" r="6" fill={F} />
      <line x1="128" y1="133" x2="126" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="124" cy="167" rx="8" ry="4" fill={F} />
      {/* Right leg */}
      <line x1="148" y1="98" x2="152" y2="133" stroke={F} strokeWidth="13" {...r} />
      <circle cx="152" cy="133" r="6" fill={F} />
      <line x1="152" y1="133" x2="154" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="156" cy="167" rx="8" ry="4" fill={F} />
    </svg>
  ),

  // Mid: Weight on left leg. Right foot raised to inner left calf. Hands at heart center (palms together at chest).
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <ellipse cx="140" cy="30" rx="15" ry="22" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="24" rx="12" ry="14" fill={F} />
      {/* Neck */}
      <rect x="135" y="37" width="10" height="9" rx="4" fill={F} />
      {/* Torso */}
      <polygon points="120,46 160,46 154,98 126,98" fill={F} />
      {/* Both arms bent inward — hands at heart center (prayer position at chest) */}
      <line x1="122" y1="52" x2="112" y2="70" stroke={F} strokeWidth="10" {...r} />
      <circle cx="112" cy="70" r="5" fill={F} />
      <line x1="112" y1="70" x2="136" y2="76" stroke={F} strokeWidth="8" {...r} />
      <line x1="158" y1="52" x2="168" y2="70" stroke={F} strokeWidth="10" {...r} />
      <circle cx="168" cy="70" r="5" fill={F} />
      <line x1="168" y1="70" x2="144" y2="76" stroke={F} strokeWidth="8" {...r} />
      {/* Prayer hands indicator at chest */}
      <ellipse cx="140" cy="77" rx="8" ry="5" fill={F} />
      {/* Left standing leg — straight */}
      <line x1="132" y1="98" x2="130" y2="133" stroke={F} strokeWidth="13" {...r} />
      <circle cx="130" cy="133" r="6" fill={F} />
      <line x1="130" y1="133" x2="128" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="126" cy="167" rx="8" ry="4" fill={F} />
      {/* Right leg — raised, knee out to the side, foot at inner left calf */}
      <line x1="148" y1="98" x2="168" y2="118" stroke={F} strokeWidth="13" {...r} />
      <circle cx="168" cy="118" r="6" fill={F} />
      {/* Lower right leg angling inward — foot touching inner calf of standing leg */}
      <line x1="168" y1="118" x2="136" y2="140" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="134" cy="142" rx="6" ry="4" fill={F} />
    </svg>
  ),

  // End: Full Tree Pose — standing on left leg, right foot pressed against inner LEFT THIGH above knee, arms raised overhead forming an oval with palms together
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <ellipse cx="140" cy="14" rx="13" ry="18" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="10" rx="11" ry="13" fill={F} />
      {/* Neck */}
      <rect x="135" y="22" width="10" height="8" rx="4" fill={F} />
      {/* Torso */}
      <polygon points="122,30 158,30 153,84 127,84" fill={F} />
      {/* LEFT ARM — raised overhead, curving left to form oval */}
      <line x1="122" y1="37" x2="108" y2="20" stroke={F} strokeWidth="10" {...r} />
      <circle cx="108" cy="20" r="5" fill={F} />
      <line x1="108" y1="20" x2="130" y2="6" stroke={F} strokeWidth="8" {...r} />
      {/* RIGHT ARM — raised overhead, curving right to form oval, meeting left */}
      <line x1="158" y1="37" x2="172" y2="20" stroke={F} strokeWidth="10" {...r} />
      <circle cx="172" cy="20" r="5" fill={F} />
      <line x1="172" y1="20" x2="150" y2="6" stroke={F} strokeWidth="8" {...r} />
      {/* Palms together at top — oval crown */}
      <ellipse cx="140" cy="5" rx="11" ry="4" fill={F} />
      {/* Left standing leg — perfectly straight */}
      <line x1="133" y1="84" x2="131" y2="120" stroke={F} strokeWidth="14" {...r} />
      <circle cx="131" cy="120" r="7" fill={F} />
      <line x1="131" y1="120" x2="129" y2="164" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="127" cy="167" rx="9" ry="4" fill={F} />
      {/* Right leg — knee out to the side, foot pressed against inner LEFT THIGH (above knee) */}
      <line x1="147" y1="84" x2="170" y2="104" stroke={F} strokeWidth="13" {...r} />
      <circle cx="170" cy="104" r="6" fill={F} />
      {/* Lower right leg — angled sharply inward, foot sole at inner thigh of standing leg */}
      <line x1="170" y1="104" x2="137" y2="112" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="134" cy="113" rx="6" ry="4" fill={F} />
    </svg>
  ),
}
