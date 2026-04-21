import type { IllustrationPair } from './index'

const F = '#4a3e2d'   // female figure (warm dark brown)
const FH = '#2d261a'  // hair
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const ChildsPose: IllustrationPair = {
  // Start: Kneeling upright (seiza) — sitting on heels, torso upright, hands on thighs
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="162" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair behind head */}
      <ellipse cx="148" cy="36" rx="14" ry="20" fill={FH} />
      {/* Head */}
      <ellipse cx="148" cy="30" rx="12" ry="13" fill={F} />
      {/* Neck */}
      <rect x="143" y="42" width="9" height="8" rx="3" fill={F} />
      {/* Torso upright */}
      <line x1="148" y1="50" x2="148" y2="102" stroke={F} strokeWidth="14" {...r} />
      {/* Shoulder line */}
      <line x1="130" y1="60" x2="166" y2="60" stroke={F} strokeWidth="10" {...r} />
      {/* Left arm resting on thigh */}
      <line x1="130" y1="60" x2="122" y2="82" stroke={F} strokeWidth="9" {...r} />
      <line x1="122" y1="82" x2="128" y2="100" stroke={F} strokeWidth="8" {...r} />
      <circle cx="122" cy="82" r="5" fill={F} />
      {/* Right arm resting on thigh */}
      <line x1="166" y1="60" x2="174" y2="82" stroke={F} strokeWidth="9" {...r} />
      <line x1="174" y1="82" x2="168" y2="100" stroke={F} strokeWidth="8" {...r} />
      <circle cx="174" cy="82" r="5" fill={F} />
      {/* Hip joint */}
      <circle cx="148" cy="102" r="7" fill={F} />
      {/* Thighs folded — sitting on heels, thighs go forward-down */}
      <line x1="142" y1="102" x2="130" y2="130" stroke={F} strokeWidth="12" {...r} />
      <line x1="154" y1="102" x2="166" y2="130" stroke={F} strokeWidth="12" {...r} />
      {/* Shins on mat (horizontal, going toward right/back) */}
      <line x1="130" y1="130" x2="130" y2="162" stroke={F} strokeWidth="10" {...r} />
      <line x1="166" y1="130" x2="166" y2="162" stroke={F} strokeWidth="10" {...r} />
      <circle cx="130" cy="130" r="5" fill={F} />
      <circle cx="166" cy="130" r="5" fill={F} />
    </svg>
  ),
  // Mid: Transitioning into child's pose — torso folding forward, arms reaching forward
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="162" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair falls forward as torso tips */}
      <ellipse cx="112" cy="76" rx="12" ry="16" fill={FH} />
      {/* Head tilting forward */}
      <ellipse cx="116" cy="70" rx="11" ry="12" fill={F} />
      {/* Neck connecting to torso */}
      <line x1="122" y1="80" x2="130" y2="90" stroke={F} strokeWidth="8" {...r} />
      {/* Torso angling forward at ~30° from vertical, hips still above heels */}
      <line x1="130" y1="90" x2="170" y2="118" stroke={F} strokeWidth="14" {...r} />
      {/* Left arm reaching forward toward mat */}
      <line x1="132" y1="96" x2="96" y2="108" stroke={F} strokeWidth="9" {...r} />
      <line x1="96" y1="108" x2="72" y2="126" stroke={F} strokeWidth="8" {...r} />
      <circle cx="96" cy="108" r="5" fill={F} />
      {/* Right arm reaching forward (slightly behind) */}
      <line x1="138" y1="100" x2="104" y2="112" stroke={F} strokeWidth="9" {...r} />
      <line x1="104" y1="112" x2="80" y2="130" stroke={F} strokeWidth="8" {...r} />
      <circle cx="104" cy="112" r="5" fill={F} />
      {/* Hip joint — still raised slightly */}
      <circle cx="170" cy="118" r="7" fill={F} />
      {/* Thighs going down to knees */}
      <line x1="166" y1="118" x2="158" y2="148" stroke={F} strokeWidth="12" {...r} />
      <line x1="174" y1="118" x2="182" y2="148" stroke={F} strokeWidth="12" {...r} />
      <circle cx="158" cy="148" r="5" fill={F} />
      <circle cx="182" cy="148" r="5" fill={F} />
      {/* Shins on mat */}
      <line x1="158" y1="148" x2="158" y2="162" stroke={F} strokeWidth="10" {...r} />
      <line x1="182" y1="148" x2="188" y2="162" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
  // End: Full Child's Pose — hips on heels, torso folded fully forward, forehead on mat
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="162" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair spread on mat at far left */}
      <ellipse cx="54" cy="158" rx="18" ry="6" fill={FH} />
      {/* Head resting on mat (forehead down) */}
      <ellipse cx="64" cy="156" rx="12" ry="7" fill={F} />
      {/* Arms stretched fully forward on mat */}
      <line x1="76" y1="154" x2="44" y2="158" stroke={F} strokeWidth="8" {...r} />
      <line x1="78" y1="158" x2="46" y2="162" stroke={F} strokeWidth="7" {...r} />
      {/* Torso folded fully forward — from hips at right curving to head at left */}
      <path d="M186,130 Q148,140 80,155" stroke={F} strokeWidth="14" fill="none" strokeLinecap="round" />
      {/* Hip on heels */}
      <circle cx="186" cy="130" r="8" fill={F} />
      {/* Thighs folded back under hips, sitting on heels */}
      <line x1="182" y1="130" x2="174" y2="162" stroke={F} strokeWidth="12" {...r} />
      <line x1="190" y1="130" x2="204" y2="162" stroke={F} strokeWidth="12" {...r} />
      <circle cx="174" cy="162" r="5" fill={F} />
      <circle cx="204" cy="162" r="5" fill={F} />
    </svg>
  ),
}
