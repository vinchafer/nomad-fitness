import type { IllustrationPair } from './index'

const F = '#2d4a3e'
const FH = '#1a2e26'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const BicycleCrunches: IllustrationPair = {
  // Start: Lying on back, hands behind head, knees bent, feet on floor (head LEFT, feet RIGHT)
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head */}
      <circle cx="30" cy="126" r="12" fill={F} />
      {/* Hair */}
      <rect x="20" y="117" width="20" height="8" rx="4" fill={FH} />
      {/* Body flat on mat */}
      <line x1="42" y1="130" x2="170" y2="132" stroke={F} strokeWidth="16" {...r} />
      {/* Left hand behind head */}
      <line x1="36" y1="128" x2="22" y2="118" stroke={F} strokeWidth="9" {...r} />
      <circle cx="22" cy="118" r="5" fill={F} />
      <line x1="22" y1="118" x2="18" y2="108" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="17" cy="105" rx="5" ry="4" fill={F} />
      {/* Right hand behind head */}
      <line x1="42" y1="128" x2="56" y2="118" stroke={F} strokeWidth="9" {...r} />
      <circle cx="56" cy="118" r="5" fill={F} />
      <line x1="56" y1="118" x2="60" y2="108" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="61" cy="105" rx="5" ry="4" fill={F} />
      {/* Left thigh — angled up from hip, knee bent */}
      <line x1="168" y1="132" x2="196" y2="110" stroke={F} strokeWidth="14" {...r} />
      <circle cx="196" cy="110" r="6.5" fill={F} />
      {/* Left shin — back down toward floor */}
      <line x1="196" y1="110" x2="222" y2="134" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="228" cy="135" rx="7" ry="4" fill={F} />
      {/* Right thigh */}
      <line x1="172" y1="133" x2="200" y2="112" stroke={F} strokeWidth="11" {...r} />
      <circle cx="200" cy="112" r="5.5" fill={F} />
      {/* Right shin */}
      <line x1="200" y1="112" x2="228" y2="135" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
  // Mid: Right elbow toward left knee, left knee drives to chest, right leg extends at 45°
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — lifted and rotated toward left knee */}
      <circle cx="38" cy="116" r="12" fill={F} />
      {/* Hair */}
      <rect x="28" y="107" width="20" height="8" rx="4" fill={FH} />
      {/* Torso — upper back lifted, slight rotation */}
      <line x1="50" y1="122" x2="170" y2="132" stroke={F} strokeWidth="16" {...r} />
      {/* Right elbow (back hand) reaching toward left knee — arm forward */}
      <line x1="44" y1="120" x2="72" y2="106" stroke={F} strokeWidth="9" {...r} />
      <circle cx="72" cy="106" r="5" fill={F} />
      <line x1="72" y1="106" x2="94" y2="116" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="98" cy="118" rx="5" ry="4" fill={F} />
      {/* Left arm behind head */}
      <line x1="40" y1="118" x2="24" y2="108" stroke={F} strokeWidth="9" {...r} />
      <circle cx="24" cy="108" r="5" fill={F} />
      <line x1="24" y1="108" x2="20" y2="100" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="19" cy="97" rx="5" ry="4" fill={F} />
      {/* Left knee driving toward chest */}
      <line x1="168" y1="132" x2="148" y2="106" stroke={F} strokeWidth="14" {...r} />
      <circle cx="148" cy="106" r="6.5" fill={F} />
      {/* Left shin (folded — knee near chest) */}
      <line x1="148" y1="106" x2="138" y2="130" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="135" cy="133" rx="6" ry="4" fill={F} />
      {/* Right leg extending at ~45° */}
      <line x1="172" y1="133" x2="214" y2="110" stroke={F} strokeWidth="12" {...r} />
      <circle cx="214" cy="110" r="6" fill={F} />
      <line x1="214" y1="110" x2="248" y2="92" stroke={F} strokeWidth="10" {...r} />
      <ellipse cx="254" cy="89" rx="7" ry="4" fill={F} />
    </svg>
  ),
  // End: Left elbow toward right knee, right knee to chest, left leg extends (mirror of mid)
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — lifted and rotated toward right knee */}
      <circle cx="38" cy="116" r="12" fill={F} />
      {/* Hair */}
      <rect x="28" y="107" width="20" height="8" rx="4" fill={FH} />
      {/* Torso — upper back lifted, opposite rotation */}
      <line x1="50" y1="122" x2="170" y2="132" stroke={F} strokeWidth="16" {...r} />
      {/* Left elbow (front arm) reaching toward right knee */}
      <line x1="50" y1="122" x2="76" y2="108" stroke={F} strokeWidth="9" {...r} />
      <circle cx="76" cy="108" r="5" fill={F} />
      <line x1="76" y1="108" x2="100" y2="118" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="104" cy="120" rx="5" ry="4" fill={F} />
      {/* Right arm behind head */}
      <line x1="44" y1="120" x2="28" y2="110" stroke={F} strokeWidth="9" {...r} />
      <circle cx="28" cy="110" r="5" fill={F} />
      <line x1="28" y1="110" x2="22" y2="102" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="21" cy="99" rx="5" ry="4" fill={F} />
      {/* Right knee driving toward chest */}
      <line x1="168" y1="132" x2="152" y2="106" stroke={F} strokeWidth="14" {...r} />
      <circle cx="152" cy="106" r="6.5" fill={F} />
      {/* Right shin folded */}
      <line x1="152" y1="106" x2="160" y2="130" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="162" cy="133" rx="6" ry="4" fill={F} />
      {/* Left leg extending at ~45° */}
      <line x1="172" y1="133" x2="214" y2="110" stroke={F} strokeWidth="12" {...r} />
      <circle cx="214" cy="110" r="6" fill={F} />
      <line x1="214" y1="110" x2="248" y2="92" stroke={F} strokeWidth="10" {...r} />
      <ellipse cx="254" cy="89" rx="7" ry="4" fill={F} />
    </svg>
  ),
}
