import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const SeatedForwardFold: IllustrationPair = {
  // Start: Seated upright, legs straight in front, hands on thighs
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="98" cy="26" rx="15" ry="22" fill={FH} />
      {/* Head */}
      <ellipse cx="98" cy="20" rx="12" ry="14" fill={F} />
      {/* Torso upright, seated */}
      <polygon points="78,42 118,42 122,96 74,96" fill={F} />
      {/* Left arm — hand resting on left thigh */}
      <line x1="80" y1="50" x2="66" y2="76" stroke={F} strokeWidth="10" {...r} />
      <circle cx="66" cy="76" r="5" fill={F} />
      <line x1="66" y1="76" x2="80" y2="100" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="82" cy="103" rx="5" ry="4" fill={F} />
      {/* Right arm — hand resting on right thigh */}
      <line x1="116" y1="50" x2="130" y2="76" stroke={F} strokeWidth="10" {...r} />
      <circle cx="130" cy="76" r="5" fill={F} />
      <line x1="130" y1="76" x2="148" y2="100" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="150" cy="103" rx="5" ry="4" fill={F} />
      {/* Hip */}
      <circle cx="98" cy="96" r="8" fill={F} />
      {/* Left leg straight in front */}
      <line x1="90" y1="96" x2="148" y2="100" stroke={F} strokeWidth="13" {...r} />
      <circle cx="148" cy="100" r="6" fill={F} />
      <line x1="148" y1="100" x2="206" y2="104" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="210" cy="105" rx="8" ry="5" fill={F} />
      {/* Right leg straight in front (slightly behind) */}
      <line x1="106" y1="98" x2="162" y2="102" stroke={F} strokeWidth="11" {...r} />
      <circle cx="162" cy="102" r="5" fill={F} />
      <line x1="162" y1="102" x2="218" y2="106" stroke={F} strokeWidth="10" {...r} />
      <ellipse cx="222" cy="107" rx="8" ry="5" fill={F} />
    </svg>
  ),
  // Mid: Folding forward — torso at ~45°, arms reaching toward feet
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair hangs forward */}
      <ellipse cx="116" cy="66" rx="13" ry="18" fill={FH} />
      {/* Head tilting forward */}
      <ellipse cx="118" cy="60" rx="12" ry="13" fill={F} />
      {/* Neck */}
      <line x1="124" y1="72" x2="130" y2="82" stroke={F} strokeWidth="8" {...r} />
      {/* Torso at ~45° — hinging at hips */}
      <line x1="130" y1="82" x2="98" y2="100" stroke={F} strokeWidth="14" {...r} />
      {/* Hip */}
      <circle cx="98" cy="100" r="8" fill={F} />
      {/* Left arm reaching toward feet */}
      <line x1="122" y1="86" x2="148" y2="96" stroke={F} strokeWidth="10" {...r} />
      <circle cx="148" cy="96" r="5" fill={F} />
      <line x1="148" y1="96" x2="182" y2="104" stroke={F} strokeWidth="8" {...r} />
      {/* Right arm reaching toward feet */}
      <line x1="132" y1="90" x2="156" y2="100" stroke={F} strokeWidth="10" {...r} />
      <circle cx="156" cy="100" r="5" fill={F} />
      <line x1="156" y1="100" x2="190" y2="108" stroke={F} strokeWidth="8" {...r} />
      {/* Left leg straight */}
      <line x1="90" y1="100" x2="150" y2="104" stroke={F} strokeWidth="13" {...r} />
      <circle cx="150" cy="104" r="6" fill={F} />
      <line x1="150" y1="104" x2="210" y2="108" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="214" cy="109" rx="8" ry="5" fill={F} />
      {/* Right leg straight (slightly behind) */}
      <line x1="106" y1="102" x2="164" y2="106" stroke={F} strokeWidth="11" {...r} />
      <circle cx="164" cy="106" r="5" fill={F} />
      <line x1="164" y1="106" x2="222" y2="110" stroke={F} strokeWidth="10" {...r} />
      <ellipse cx="226" cy="111" rx="8" ry="5" fill={F} />
    </svg>
  ),
  // End: Full fold — torso folded over legs, hands past feet or holding soles, forehead toward shins
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair hangs down toward shins */}
      <ellipse cx="148" cy="88" rx="13" ry="16" fill={FH} />
      {/* Head — forehead toward shins, completely folded */}
      <ellipse cx="150" cy="82" rx="12" ry="12" fill={F} />
      {/* Neck */}
      <line x1="152" y1="94" x2="140" y2="100" stroke={F} strokeWidth="8" {...r} />
      {/* Torso folded fully over legs — nearly horizontal, parallel to legs */}
      <line x1="140" y1="100" x2="96" y2="102" stroke={F} strokeWidth="14" {...r} />
      {/* Hip */}
      <circle cx="96" cy="102" r="8" fill={F} />
      {/* Left arm reaching past feet, hands holding soles */}
      <line x1="128" y1="100" x2="168" y2="102" stroke={F} strokeWidth="10" {...r} />
      <circle cx="168" cy="102" r="5" fill={F} />
      <line x1="168" y1="102" x2="216" y2="104" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="221" cy="104" rx="6" ry="4" fill={F} />
      {/* Right arm reaching past feet */}
      <line x1="136" y1="104" x2="174" y2="106" stroke={F} strokeWidth="10" {...r} />
      <circle cx="174" cy="106" r="5" fill={F} />
      <line x1="174" y1="106" x2="222" y2="108" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="227" cy="108" rx="6" ry="4" fill={F} />
      {/* Left leg straight */}
      <line x1="88" y1="102" x2="152" y2="104" stroke={F} strokeWidth="13" {...r} />
      <circle cx="152" cy="104" r="6" fill={F} />
      <line x1="152" y1="104" x2="216" y2="106" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="222" cy="107" rx="8" ry="5" fill={F} />
      {/* Right leg straight (slightly behind) */}
      <line x1="104" y1="104" x2="166" y2="106" stroke={F} strokeWidth="11" {...r} />
      <circle cx="166" cy="106" r="5" fill={F} />
      <line x1="166" y1="106" x2="228" y2="108" stroke={F} strokeWidth="10" {...r} />
      <ellipse cx="234" cy="109" rx="8" ry="5" fill={F} />
    </svg>
  ),
}
