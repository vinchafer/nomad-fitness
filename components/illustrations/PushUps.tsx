import type { IllustrationPair } from './index'

const F = '#2d4a3e'   // male figure
const FH = '#1a2e26'  // hair + shorts
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const PushUps: IllustrationPair = {
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <rect x="29" y="72" width="16" height="8" rx="4" fill={FH} />
      {/* Head — facing right */}
      <ellipse cx="44" cy="85" rx="13" ry="14" fill={F} />
      {/* Neck */}
      <line x1="57" y1="84" x2="70" y2="88" stroke={F} strokeWidth="9" {...r} />
      {/* Torso — thick diagonal line, high plank, nearly horizontal */}
      <line x1="70" y1="88" x2="192" y2="100" stroke={F} strokeWidth="21" {...r} />
      {/* Shorts hint */}
      <line x1="178" y1="99" x2="196" y2="101" stroke={FH} strokeWidth="14" strokeLinecap="round" opacity="0.5" />
      {/* Left arm (near side) — straight down from shoulder to hand on floor */}
      <line x1="84" y1="97" x2="80" y2="136" stroke={F} strokeWidth="11" {...r} />
      <circle cx="80" cy="136" r="6" fill={F} />
      {/* Right arm (far side) — straight down */}
      <line x1="98" y1="99" x2="94" y2="136" stroke={F} strokeWidth="10" {...r} />
      <circle cx="94" cy="136" r="5" fill={F} />
      {/* Left thigh */}
      <line x1="192" y1="100" x2="218" y2="104" stroke={F} strokeWidth="14" {...r} />
      <circle cx="218" cy="104" r="6" fill={F} />
      {/* Left lower leg to toes */}
      <line x1="218" y1="104" x2="238" y2="136" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="241" cy="137" rx="8" ry="4" fill={F} />
      {/* Right leg (slightly behind) */}
      <line x1="190" y1="102" x2="214" y2="106" stroke={F} strokeWidth="13" {...r} />
      <circle cx="214" cy="106" r="5.5" fill={F} />
      <line x1="214" y1="106" x2="232" y2="136" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="235" cy="137" rx="7" ry="4" fill={F} />
    </svg>
  ),
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <rect x="27" y="87" width="16" height="8" rx="4" fill={FH} />
      {/* Head — tilted slightly forward, 15px lower */}
      <ellipse cx="42" cy="100" rx="13" ry="14" fill={F} />
      {/* Neck */}
      <line x1="55" y1="99" x2="67" y2="103" stroke={F} strokeWidth="9" {...r} />
      {/* Torso — 15px lower overall */}
      <line x1="67" y1="103" x2="192" y2="113" stroke={F} strokeWidth="21" {...r} />
      {/* Shorts hint */}
      <line x1="178" y1="112" x2="196" y2="114" stroke={FH} strokeWidth="14" strokeLinecap="round" opacity="0.5" />
      {/* Left upper arm — bent at ~100°, elbow pointing out/back */}
      <line x1="80" y1="111" x2="68" y2="124" stroke={F} strokeWidth="11" {...r} />
      <circle cx="68" cy="124" r="6" fill={F} />
      {/* Left lower arm — elbow to hand on floor */}
      <line x1="68" y1="124" x2="79" y2="136" stroke={F} strokeWidth="10" {...r} />
      <circle cx="79" cy="136" r="5" fill={F} />
      {/* Right upper arm — bent */}
      <line x1="94" y1="112" x2="82" y2="124" stroke={F} strokeWidth="10" {...r} />
      <circle cx="82" cy="124" r="5.5" fill={F} />
      {/* Right lower arm */}
      <line x1="82" y1="124" x2="93" y2="136" stroke={F} strokeWidth="9" {...r} />
      <circle cx="93" cy="136" r="5" fill={F} />
      {/* Left thigh */}
      <line x1="192" y1="113" x2="218" y2="117" stroke={F} strokeWidth="14" {...r} />
      <circle cx="218" cy="117" r="6" fill={F} />
      {/* Left lower leg */}
      <line x1="218" y1="117" x2="238" y2="136" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="241" cy="137" rx="8" ry="4" fill={F} />
      {/* Right leg */}
      <line x1="190" y1="115" x2="214" y2="119" stroke={F} strokeWidth="13" {...r} />
      <circle cx="214" cy="119" r="5.5" fill={F} />
      <line x1="214" y1="119" x2="232" y2="136" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="235" cy="137" rx="7" ry="4" fill={F} />
    </svg>
  ),
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <rect x="25" y="101" width="16" height="8" rx="4" fill={FH} />
      {/* Head — up, looking forward, chest near floor */}
      <ellipse cx="40" cy="114" rx="13" ry="14" fill={F} />
      {/* Neck */}
      <line x1="53" y1="113" x2="65" y2="117" stroke={F} strokeWidth="9" {...r} />
      {/* Torso — at lowest */}
      <line x1="65" y1="117" x2="192" y2="126" stroke={F} strokeWidth="21" {...r} />
      {/* Shorts hint */}
      <line x1="178" y1="125" x2="196" y2="127" stroke={FH} strokeWidth="14" strokeLinecap="round" opacity="0.5" />
      {/* Left upper arm — fully bent, elbows close to body */}
      <line x1="76" y1="124" x2="66" y2="130" stroke={F} strokeWidth="11" {...r} />
      <circle cx="66" cy="130" r="6" fill={F} />
      {/* Left lower arm — near vertical to hand on floor */}
      <line x1="66" y1="130" x2="76" y2="136" stroke={F} strokeWidth="10" {...r} />
      <circle cx="76" cy="136" r="5" fill={F} />
      {/* Right upper arm — fully bent */}
      <line x1="90" y1="125" x2="80" y2="130" stroke={F} strokeWidth="10" {...r} />
      <circle cx="80" cy="130" r="5.5" fill={F} />
      {/* Right lower arm */}
      <line x1="80" y1="130" x2="90" y2="136" stroke={F} strokeWidth="9" {...r} />
      <circle cx="90" cy="136" r="5" fill={F} />
      {/* Left thigh */}
      <line x1="192" y1="126" x2="218" y2="129" stroke={F} strokeWidth="14" {...r} />
      <circle cx="218" cy="129" r="6" fill={F} />
      {/* Left lower leg */}
      <line x1="218" y1="129" x2="238" y2="136" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="241" cy="137" rx="8" ry="4" fill={F} />
      {/* Right leg */}
      <line x1="190" y1="127" x2="214" y2="130" stroke={F} strokeWidth="13" {...r} />
      <circle cx="214" cy="130" r="5.5" fill={F} />
      <line x1="214" y1="130" x2="232" y2="136" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="235" cy="137" rx="7" ry="4" fill={F} />
    </svg>
  ),
}
