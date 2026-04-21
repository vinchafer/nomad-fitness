import type { IllustrationPair } from './index'

const F = '#4a3e2d'   // female figure (warm dark brown)
const FH = '#2d261a'  // hair
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const DownwardDog: IllustrationPair = {
  // Start: Standing with slight forward bend — hands reaching toward floor, body ~45°
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="162" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair hangs forward as figure bends */}
      <ellipse cx="88" cy="68" rx="12" ry="15" fill={FH} />
      {/* Head tilted forward-down */}
      <ellipse cx="92" cy="62" rx="11" ry="13" fill={F} />
      {/* Neck */}
      <line x1="98" y1="74" x2="105" y2="82" stroke={F} strokeWidth="8" {...r} />
      {/* Torso angled ~45° from hips down to shoulder area */}
      <line x1="105" y1="82" x2="148" y2="118" stroke={F} strokeWidth="14" {...r} />
      {/* Left arm reaching toward floor (front arm) */}
      <line x1="108" y1="90" x2="88" y2="114" stroke={F} strokeWidth="9" {...r} />
      <line x1="88" y1="114" x2="76" y2="140" stroke={F} strokeWidth="8" {...r} />
      <circle cx="88" cy="114" r="5" fill={F} />
      {/* Right arm reaching down behind */}
      <line x1="115" y1="94" x2="96" y2="118" stroke={F} strokeWidth="9" {...r} />
      <line x1="96" y1="118" x2="85" y2="144" stroke={F} strokeWidth="8" {...r} />
      <circle cx="96" cy="118" r="5" fill={F} />
      {/* Hip joint */}
      <circle cx="148" cy="118" r="7" fill={F} />
      {/* Left leg straight going down to mat */}
      <line x1="144" y1="118" x2="138" y2="148" stroke={F} strokeWidth="12" {...r} />
      <line x1="138" y1="148" x2="136" y2="162" stroke={F} strokeWidth="10" {...r} />
      <circle cx="138" cy="148" r="5" fill={F} />
      {/* Right leg straight */}
      <line x1="152" y1="118" x2="158" y2="148" stroke={F} strokeWidth="12" {...r} />
      <line x1="158" y1="148" x2="160" y2="162" stroke={F} strokeWidth="10" {...r} />
      <circle cx="158" cy="148" r="5" fill={F} />
    </svg>
  ),
  // Mid: Full Downward Dog — clear inverted-V / "A" shape. Hips at apex, hands and feet on mat.
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="162" width="260" height="8" rx="4" fill={MAT} />
      <g className="anim-sway" style={{transformOrigin:'140px 90px'}}>
        {/* Hair hangs down from head between arms */}
        <ellipse cx="76" cy="112" rx="10" ry="14" fill={FH} />
        {/* Head tucked between arms, looking toward navel */}
        <ellipse cx="80" cy="106" rx="11" ry="12" fill={F} />
        {/* Left arm: hand on mat → shoulder at apex-left */}
        <line x1="58" y1="162" x2="100" y2="88" stroke={F} strokeWidth="10" {...r} />
        {/* Right arm: hand on mat slightly behind → shoulder */}
        <line x1="68" y1="162" x2="106" y2="92" stroke={F} strokeWidth="9" {...r} />
        {/* Shoulder area */}
        <circle cx="103" cy="90" r="7" fill={F} />
        {/* Torso from shoulders up to hip apex */}
        <line x1="103" y1="90" x2="140" y2="42" stroke={F} strokeWidth="15" {...r} />
        {/* Hip apex */}
        <circle cx="140" cy="42" r="8" fill={F} />
        {/* Left leg: hip apex down to left foot on mat */}
        <line x1="140" y1="42" x2="192" y2="112" stroke={F} strokeWidth="13" {...r} />
        <circle cx="192" cy="112" r="6" fill={F} />
        <line x1="192" y1="112" x2="212" y2="162" stroke={F} strokeWidth="11" {...r} />
        {/* Right leg (slightly behind, slightly to right) */}
        <line x1="140" y1="42" x2="200" y2="118" stroke={F} strokeWidth="12" {...r} />
        <circle cx="200" cy="118" r="6" fill={F} />
        <line x1="200" y1="118" x2="222" y2="162" stroke={F} strokeWidth="10" {...r} />
      </g>
    </svg>
  ),
  // End: Three-Legged Dog — one leg raised diagonally upward behind
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="162" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair hangs down */}
      <ellipse cx="76" cy="112" rx="10" ry="14" fill={FH} />
      {/* Head tucked between arms */}
      <ellipse cx="80" cy="106" rx="11" ry="12" fill={F} />
      {/* Left arm: hand on mat → shoulder */}
      <line x1="58" y1="162" x2="100" y2="88" stroke={F} strokeWidth="10" {...r} />
      {/* Right arm */}
      <line x1="68" y1="162" x2="106" y2="92" stroke={F} strokeWidth="9" {...r} />
      {/* Shoulder area */}
      <circle cx="103" cy="90" r="7" fill={F} />
      {/* Torso from shoulders up to hip apex */}
      <line x1="103" y1="90" x2="140" y2="42" stroke={F} strokeWidth="15" {...r} />
      {/* Hip apex */}
      <circle cx="140" cy="42" r="8" fill={F} />
      {/* Grounded leg: hip apex down to foot on mat */}
      <line x1="140" y1="42" x2="194" y2="114" stroke={F} strokeWidth="13" {...r} />
      <circle cx="194" cy="114" r="6" fill={F} />
      <line x1="194" y1="114" x2="215" y2="162" stroke={F} strokeWidth="11" {...r} />
      {/* Raised leg: extends diagonally upward and back */}
      <line x1="140" y1="42" x2="182" y2="30" stroke={F} strokeWidth="13" {...r} />
      <circle cx="182" cy="30" r="6" fill={F} />
      <line x1="182" y1="30" x2="236" y2="18" stroke={F} strokeWidth="11" {...r} />
    </svg>
  ),
}
