import type { IllustrationPair } from './index'

const F = '#2d4a3e'   // male figure
const FH = '#1a2e26'  // hair + shorts
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const MountainClimbers: IllustrationPair = {
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <rect x="29" y="72" width="16" height="8" rx="4" fill={FH} />
      {/* Head — facing right */}
      <ellipse cx="44" cy="86" rx="13" ry="14" fill={F} />
      {/* Neck */}
      <line x1="57" y1="85" x2="68" y2="88" stroke={F} strokeWidth="9" {...r} />
      {/* Torso — high plank, body horizontal */}
      <line x1="68" y1="88" x2="210" y2="102" stroke={F} strokeWidth="21" {...r} />
      {/* Shorts hint */}
      <line x1="196" y1="101" x2="214" y2="103" stroke={FH} strokeWidth="14" strokeLinecap="round" opacity="0.5" />
      {/* Left arm — straight down to hand */}
      <line x1="80" y1="96" x2="76" y2="136" stroke={F} strokeWidth="11" {...r} />
      <circle cx="76" cy="136" r="6" fill={F} />
      {/* Right arm — straight down */}
      <line x1="94" y1="98" x2="90" y2="136" stroke={F} strokeWidth="10" {...r} />
      <circle cx="90" cy="136" r="5" fill={F} />
      {/* Left thigh — both feet back, body in plank */}
      <line x1="210" y1="102" x2="236" y2="106" stroke={F} strokeWidth="14" {...r} />
      <circle cx="236" cy="106" r="6.5" fill={F} />
      {/* Left lower leg to toes */}
      <line x1="236" y1="106" x2="252" y2="136" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="255" cy="137" rx="8" ry="4" fill={F} />
      {/* Right leg — slightly behind */}
      <line x1="208" y1="104" x2="231" y2="108" stroke={F} strokeWidth="13" {...r} />
      <circle cx="231" cy="108" r="5.5" fill={F} />
      <line x1="231" y1="108" x2="246" y2="136" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="249" cy="137" rx="7" ry="4" fill={F} />
    </svg>
  ),
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <rect x="29" y="72" width="16" height="8" rx="4" fill={FH} />
      {/* Head — facing right */}
      <ellipse cx="44" cy="86" rx="13" ry="14" fill={F} />
      {/* Neck */}
      <line x1="57" y1="85" x2="68" y2="88" stroke={F} strokeWidth="9" {...r} />
      {/* Torso — high plank */}
      <line x1="68" y1="88" x2="210" y2="102" stroke={F} strokeWidth="21" {...r} />
      {/* Shorts hint */}
      <line x1="196" y1="101" x2="214" y2="103" stroke={FH} strokeWidth="14" strokeLinecap="round" opacity="0.5" />
      {/* Left arm — straight down */}
      <line x1="80" y1="96" x2="76" y2="136" stroke={F} strokeWidth="11" {...r} />
      <circle cx="76" cy="136" r="6" fill={F} />
      {/* Right arm — straight down */}
      <line x1="94" y1="98" x2="90" y2="136" stroke={F} strokeWidth="10" {...r} />
      <circle cx="90" cy="136" r="5" fill={F} />
      {/* Right leg (back leg) — extended straight */}
      <line x1="208" y1="104" x2="240" y2="108" stroke={F} strokeWidth="13" {...r} />
      <circle cx="240" cy="108" r="5.5" fill={F} />
      <line x1="240" y1="108" x2="256" y2="136" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="259" cy="137" rx="7" ry="4" fill={F} />
      {/* Left leg — knee driven forward toward chest, with animation */}
      <g className="anim-knee-l">
        {/* Left thigh — from hip forward toward chest */}
        <line x1="210" y1="102" x2="148" y2="110" stroke={F} strokeWidth="14" {...r} />
        <circle cx="148" cy="110" r="6.5" fill={F} />
        {/* Left lower leg — hanging down, foot raised */}
        <line x1="148" y1="110" x2="140" y2="130" stroke={F} strokeWidth="12" {...r} />
        <ellipse cx="138" cy="133" rx="7" ry="5" fill={F} />
      </g>
    </svg>
  ),
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <rect x="29" y="72" width="16" height="8" rx="4" fill={FH} />
      {/* Head — facing right */}
      <ellipse cx="44" cy="86" rx="13" ry="14" fill={F} />
      {/* Neck */}
      <line x1="57" y1="85" x2="68" y2="88" stroke={F} strokeWidth="9" {...r} />
      {/* Torso — high plank */}
      <line x1="68" y1="88" x2="210" y2="102" stroke={F} strokeWidth="21" {...r} />
      {/* Shorts hint */}
      <line x1="196" y1="101" x2="214" y2="103" stroke={FH} strokeWidth="14" strokeLinecap="round" opacity="0.5" />
      {/* Left arm — straight down */}
      <line x1="80" y1="96" x2="76" y2="136" stroke={F} strokeWidth="11" {...r} />
      <circle cx="76" cy="136" r="6" fill={F} />
      {/* Right arm — straight down */}
      <line x1="94" y1="98" x2="90" y2="136" stroke={F} strokeWidth="10" {...r} />
      <circle cx="90" cy="136" r="5" fill={F} />
      {/* Left leg (back leg) — extended straight */}
      <line x1="210" y1="102" x2="240" y2="107" stroke={F} strokeWidth="14" {...r} />
      <circle cx="240" cy="107" r="6.5" fill={F} />
      <line x1="240" y1="107" x2="254" y2="136" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="257" cy="137" rx="8" ry="4" fill={F} />
      {/* Right leg — knee driven forward toward chest, with animation */}
      <g className="anim-knee-r">
        {/* Right thigh — from hip forward toward chest */}
        <line x1="208" y1="104" x2="146" y2="112" stroke={F} strokeWidth="13" {...r} />
        <circle cx="146" cy="112" r="5.5" fill={F} />
        {/* Right lower leg — hanging down, foot raised */}
        <line x1="146" y1="112" x2="138" y2="132" stroke={F} strokeWidth="11" {...r} />
        <ellipse cx="136" cy="135" rx="7" ry="5" fill={F} />
      </g>
    </svg>
  ),
}
