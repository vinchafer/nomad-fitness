import type { IllustrationPair } from './index'

const F = '#2d4a3e'   // male figure
const FH = '#1a2e26'  // hair + shorts
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const Plank: IllustrationPair = {
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <rect x="29" y="68" width="16" height="8" rx="4" fill={FH} />
      {/* Head — facing right, entering plank */}
      <ellipse cx="44" cy="82" rx="13" ry="14" fill={F} />
      {/* Neck */}
      <line x1="57" y1="81" x2="68" y2="84" stroke={F} strokeWidth="9" {...r} />
      {/* Torso — body slightly raised, transitioning into plank */}
      <line x1="68" y1="84" x2="185" y2="96" stroke={F} strokeWidth="21" {...r} />
      {/* Shorts hint */}
      <line x1="172" y1="95" x2="190" y2="97" stroke={FH} strokeWidth="14" strokeLinecap="round" opacity="0.5" />
      {/* Left arm — straight, hand on floor */}
      <line x1="80" y1="93" x2="76" y2="136" stroke={F} strokeWidth="11" {...r} />
      <circle cx="76" cy="136" r="6" fill={F} />
      {/* Right arm — straight */}
      <line x1="94" y1="95" x2="90" y2="136" stroke={F} strokeWidth="10" {...r} />
      <circle cx="90" cy="136" r="5" fill={F} />
      {/* Left thigh — knee still on floor (transitioning) */}
      <line x1="185" y1="96" x2="200" y2="108" stroke={F} strokeWidth="14" {...r} />
      <circle cx="200" cy="108" r="6.5" fill={F} />
      {/* Left lower leg — knee bent, shin resting on floor */}
      <line x1="200" y1="108" x2="230" y2="136" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="234" cy="137" rx="8" ry="4" fill={F} />
      {/* Right leg — extended back, foot near floor */}
      <line x1="183" y1="98" x2="220" y2="104" stroke={F} strokeWidth="13" {...r} />
      <circle cx="220" cy="104" r="5.5" fill={F} />
      <line x1="220" y1="104" x2="245" y2="128" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="248" cy="131" rx="7" ry="5" fill={F} />
    </svg>
  ),
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <rect x="29" y="72" width="16" height="8" rx="4" fill={FH} />
      {/* Head — neutral position */}
      <ellipse cx="44" cy="86" rx="13" ry="14" fill={F} />
      {/* Neck */}
      <line x1="57" y1="85" x2="68" y2="88" stroke={F} strokeWidth="9" {...r} />
      {/* Torso with breathing animation — perfect plank, straight diagonal line */}
      <g className="anim-breathe">
        <line x1="68" y1="88" x2="210" y2="102" stroke={F} strokeWidth="21" {...r} />
        {/* Shorts hint */}
        <line x1="196" y1="101" x2="214" y2="103" stroke={FH} strokeWidth="14" strokeLinecap="round" opacity="0.5" />
      </g>
      {/* Left arm — straight down to hand */}
      <line x1="80" y1="96" x2="76" y2="136" stroke={F} strokeWidth="11" {...r} />
      <circle cx="76" cy="136" r="6" fill={F} />
      {/* Right arm — straight down */}
      <line x1="94" y1="98" x2="90" y2="136" stroke={F} strokeWidth="10" {...r} />
      <circle cx="90" cy="136" r="5" fill={F} />
      {/* Left thigh — straight back */}
      <line x1="210" y1="102" x2="235" y2="106" stroke={F} strokeWidth="14" {...r} />
      <circle cx="235" cy="106" r="6.5" fill={F} />
      {/* Left lower leg to toes on floor */}
      <line x1="235" y1="106" x2="250" y2="136" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="253" cy="137" rx="8" ry="4" fill={F} />
      {/* Right leg — slightly behind */}
      <line x1="208" y1="104" x2="230" y2="108" stroke={F} strokeWidth="13" {...r} />
      <circle cx="230" cy="108" r="5.5" fill={F} />
      <line x1="230" y1="108" x2="244" y2="136" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="247" cy="137" rx="7" ry="4" fill={F} />
    </svg>
  ),
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <rect x="29" y="72" width="16" height="8" rx="4" fill={FH} />
      {/* Head — neutral, looking down-forward */}
      <ellipse cx="44" cy="86" rx="13" ry="14" fill={F} />
      {/* Neck */}
      <line x1="57" y1="85" x2="68" y2="88" stroke={F} strokeWidth="9" {...r} />
      {/* Torso — perfect form, back flat */}
      <line x1="68" y1="88" x2="210" y2="102" stroke={F} strokeWidth="21" {...r} />
      {/* Shorts hint */}
      <line x1="196" y1="101" x2="214" y2="103" stroke={FH} strokeWidth="14" strokeLinecap="round" opacity="0.5" />
      {/* Left arm — slightly wider stance for tension */}
      <line x1="80" y1="96" x2="74" y2="136" stroke={F} strokeWidth="11" {...r} />
      <circle cx="74" cy="136" r="6" fill={F} />
      {/* Right arm — slightly wider */}
      <line x1="96" y1="98" x2="92" y2="136" stroke={F} strokeWidth="10" {...r} />
      <circle cx="92" cy="136" r="5" fill={F} />
      {/* Left thigh — straight back, perfect alignment */}
      <line x1="210" y1="102" x2="235" y2="106" stroke={F} strokeWidth="14" {...r} />
      <circle cx="235" cy="106" r="6.5" fill={F} />
      {/* Left lower leg */}
      <line x1="235" y1="106" x2="252" y2="136" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="255" cy="137" rx="8" ry="4" fill={F} />
      {/* Right leg */}
      <line x1="208" y1="104" x2="231" y2="108" stroke={F} strokeWidth="13" {...r} />
      <circle cx="231" cy="108" r="5.5" fill={F} />
      <line x1="231" y1="108" x2="246" y2="136" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="249" cy="137" rx="7" ry="4" fill={F} />
    </svg>
  ),
}
