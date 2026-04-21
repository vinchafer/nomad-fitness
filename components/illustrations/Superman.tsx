import type { IllustrationPair } from './index'

const F = '#2d4a3e'
const FH = '#1a2e26'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const Superman: IllustrationPair = {
  // Start: Lying face down, arms extended forward along floor, legs straight (head LEFT, feet RIGHT)
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — face down, looking slightly forward, left side */}
      <circle cx="32" cy="128" r="11" fill={F} />
      {/* Hair on top */}
      <rect x="24" y="120" width="18" height="7" rx="3" fill={FH} />
      {/* Arms extended forward on floor */}
      <line x1="24" y1="130" x2="14" y2="131" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="11" cy="131" rx="6" ry="4" fill={F} />
      {/* Second arm slightly offset */}
      <line x1="26" y1="132" x2="16" y2="133" stroke={F} strokeWidth="8" {...r} />
      {/* Body horizontal — prone */}
      <line x1="43" y1="131" x2="188" y2="132" stroke={F} strokeWidth="16" {...r} />
      {/* Legs straight — extending to right */}
      <line x1="186" y1="132" x2="234" y2="133" stroke={F} strokeWidth="14" {...r} />
      <circle cx="234" cy="133" r="6.5" fill={F} />
      <line x1="234" y1="133" x2="258" y2="133" stroke={F} strokeWidth="12" {...r} />
      {/* Feet — tops of feet on floor */}
      <line x1="258" y1="132" x2="270" y2="135" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="272" cy="136" rx="6" ry="4" fill={F} />
      {/* Second leg */}
      <line x1="188" y1="134" x2="236" y2="135" stroke={F} strokeWidth="11" {...r} />
      <line x1="236" y1="135" x2="262" y2="135" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
  // Mid: Arms and legs simultaneously lift off ground ~20-30°, back arches slightly, head up
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — lifted, looking forward */}
      <circle cx="32" cy="120" r="11" fill={F} />
      {/* Hair */}
      <rect x="24" y="112" width="18" height="7" rx="3" fill={FH} />
      {/* Arms angled upward ~30° forward */}
      <line x1="26" y1="122" x2="14" y2="116" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="10" cy="114" rx="6" ry="4" fill={F} />
      {/* Second arm */}
      <line x1="28" y1="124" x2="16" y2="118" stroke={F} strokeWidth="8" {...r} />
      {/* Body — slight arch (back extension) */}
      <line x1="43" y1="126" x2="188" y2="130" stroke={F} strokeWidth="16" {...r} />
      {/* Legs angled upward ~20° */}
      <line x1="186" y1="129" x2="234" y2="124" stroke={F} strokeWidth="14" {...r} />
      <circle cx="234" cy="124" r="6.5" fill={F} />
      <line x1="234" y1="124" x2="258" y2="120" stroke={F} strokeWidth="12" {...r} />
      {/* Feet angled up */}
      <line x1="258" y1="120" x2="270" y2="117" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="273" cy="115" rx="6" ry="4" fill={F} />
      {/* Second leg */}
      <line x1="188" y1="131" x2="236" y2="126" stroke={F} strokeWidth="11" {...r} />
      <line x1="236" y1="126" x2="262" y2="122" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
  // End: Peak contraction — arms fully raised forward, legs fully raised back, max back extension
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — fully raised, back extended */}
      <circle cx="36" cy="112" r="11" fill={F} />
      {/* Hair */}
      <rect x="28" y="104" width="18" height="7" rx="3" fill={FH} />
      {/* Arms fully forward-upward (~40° above horizontal) */}
      <line x1="28" y1="114" x2="14" y2="106" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="9" cy="103" rx="6" ry="4" fill={F} />
      {/* Second arm */}
      <line x1="30" y1="116" x2="16" y2="108" stroke={F} strokeWidth="8" {...r} />
      {/* Body — strong arch, center elevated from mat */}
      <line x1="47" y1="120" x2="188" y2="128" stroke={F} strokeWidth="16" {...r} />
      {/* Legs fully raised (~30° above horizontal) */}
      <line x1="186" y1="127" x2="232" y2="116" stroke={F} strokeWidth="14" {...r} />
      <circle cx="232" cy="116" r="6.5" fill={F} />
      <line x1="232" y1="116" x2="258" y2="108" stroke={F} strokeWidth="12" {...r} />
      {/* Feet raised */}
      <line x1="258" y1="108" x2="270" y2="104" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="273" cy="102" rx="6" ry="4" fill={F} />
      {/* Second leg */}
      <line x1="188" y1="129" x2="234" y2="118" stroke={F} strokeWidth="11" {...r} />
      <line x1="234" y1="118" x2="260" y2="110" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
}
