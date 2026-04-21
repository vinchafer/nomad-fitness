import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const SpineTwist: IllustrationPair = {
  // Start: seated upright, legs extended forward, arms out to sides at shoulder height (T-shape)
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Seat mat */}
      <rect x="80" y="148" width="120" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <ellipse cx="137" cy="28" rx="15" ry="12" fill={FH} />
      {/* Head upright */}
      <ellipse cx="140" cy="28" rx="13" ry="14" fill={F} />
      {/* Neck */}
      <rect x="133" y="42" width="14" height="10" rx="4" fill={F} />
      {/* Torso upright */}
      <rect x="126" y="50" width="28" height="60" rx="8" fill={F} />
      {/* Shoulder bar */}
      <rect x="96" y="52" width="88" height="12" rx="6" fill={F} />
      {/* Left arm extended to the left */}
      <line x1="96" y1="58" x2="52" y2="60" stroke={F} strokeWidth="10" {...r} />
      <line x1="52" y1="60" x2="18" y2="62" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="14" cy="62" rx="7" ry="5" fill={F} />
      {/* Right arm extended to the right */}
      <line x1="184" y1="58" x2="228" y2="60" stroke={F} strokeWidth="10" {...r} />
      <line x1="228" y1="60" x2="262" y2="62" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="266" cy="62" rx="7" ry="5" fill={F} />
      {/* Hips seated on mat */}
      <ellipse cx="140" cy="112" rx="22" ry="12" fill={F} />
      {/* Left leg extending forward (to the left in front view = our left) */}
      <line x1="122" y1="118" x2="90" y2="120" stroke={F} strokeWidth="13" {...r} />
      <line x1="90" y1="120" x2="50" y2="122" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="44" cy="123" rx="9" ry="5" fill={F} />
      {/* Right leg extending the other way */}
      <line x1="158" y1="118" x2="190" y2="120" stroke={F} strokeWidth="13" {...r} />
      <line x1="190" y1="120" x2="230" y2="122" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="236" cy="123" rx="9" ry="5" fill={F} />
    </svg>
  ),

  // Mid: twisting to the right — upper body rotates 45°, lower body stays facing forward
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Seat mat */}
      <rect x="80" y="148" width="120" height="6" rx="3" fill={MAT} />
      {/* Hair (rotated slightly with torso) */}
      <ellipse cx="148" cy="28" rx="15" ry="12" fill={FH} />
      {/* Head turning right */}
      <ellipse cx="148" cy="28" rx="13" ry="14" fill={F} />
      {/* Neck */}
      <rect x="141" y="42" width="14" height="10" rx="4" fill={F} />
      {/* Torso rotated right — foreshortened */}
      <rect x="132" y="50" width="24" height="60" rx="8" fill={F} />
      {/* Shoulder bar rotated — right shoulder forward, left back */}
      <line x1="108" y1="62" x2="224" y2="52" stroke={F} strokeWidth="12" strokeLinecap="round" />
      {/* Right arm swung forward/right */}
      <line x1="224" y1="52" x2="258" y2="50" stroke={F} strokeWidth="10" {...r} />
      <ellipse cx="263" cy="49" rx="7" ry="5" fill={F} />
      {/* Left arm swept back/left */}
      <line x1="108" y1="62" x2="74" y2="68" stroke={F} strokeWidth="10" {...r} />
      <ellipse cx="68" cy="69" rx="7" ry="5" fill={F} />
      {/* Twist indicator arrow */}
      <path d="M155,75 Q168,68 175,75" stroke="#c9a96e" strokeWidth="2" fill="none" markerEnd="url(#twistArrow)" />
      <defs>
        <marker id="twistArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#c9a96e" strokeWidth="1.5" />
        </marker>
      </defs>
      {/* Hips — stable, facing forward */}
      <ellipse cx="140" cy="112" rx="22" ry="12" fill={F} />
      {/* Legs unchanged */}
      <line x1="122" y1="118" x2="90" y2="120" stroke={F} strokeWidth="13" {...r} />
      <line x1="90" y1="120" x2="50" y2="122" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="44" cy="123" rx="9" ry="5" fill={F} />
      <line x1="158" y1="118" x2="190" y2="120" stroke={F} strokeWidth="13" {...r} />
      <line x1="190" y1="120" x2="230" y2="122" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="236" cy="123" rx="9" ry="5" fill={F} />
      {/* "right" label */}
      <text x="230" y="45" fontSize="9" fill="#c9a96e" fontFamily="sans-serif">right</text>
    </svg>
  ),

  // End: twisting to the left — mirror of mid
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Seat mat */}
      <rect x="80" y="148" width="120" height="6" rx="3" fill={MAT} />
      {/* Hair (turning left) */}
      <ellipse cx="132" cy="28" rx="15" ry="12" fill={FH} />
      {/* Head turning left */}
      <ellipse cx="132" cy="28" rx="13" ry="14" fill={F} />
      {/* Neck */}
      <rect x="125" y="42" width="14" height="10" rx="4" fill={F} />
      {/* Torso rotated left */}
      <rect x="122" y="50" width="24" height="60" rx="8" fill={F} />
      {/* Shoulder bar rotated left — left shoulder forward, right back */}
      <line x1="56" y1="52" x2="172" y2="62" stroke={F} strokeWidth="12" strokeLinecap="round" />
      {/* Left arm swung forward/left */}
      <line x1="56" y1="52" x2="22" y2="50" stroke={F} strokeWidth="10" {...r} />
      <ellipse cx="17" cy="49" rx="7" ry="5" fill={F} />
      {/* Right arm swept back/right */}
      <line x1="172" y1="62" x2="206" y2="68" stroke={F} strokeWidth="10" {...r} />
      <ellipse cx="212" cy="69" rx="7" ry="5" fill={F} />
      {/* Twist indicator arrow */}
      <path d="M125,75 Q112,68 105,75" stroke="#c9a96e" strokeWidth="2" fill="none" markerEnd="url(#twistArrowL)" />
      <defs>
        <marker id="twistArrowL" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#c9a96e" strokeWidth="1.5" />
        </marker>
      </defs>
      {/* Hips stable */}
      <ellipse cx="140" cy="112" rx="22" ry="12" fill={F} />
      {/* Legs unchanged */}
      <line x1="122" y1="118" x2="90" y2="120" stroke={F} strokeWidth="13" {...r} />
      <line x1="90" y1="120" x2="50" y2="122" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="44" cy="123" rx="9" ry="5" fill={F} />
      <line x1="158" y1="118" x2="190" y2="120" stroke={F} strokeWidth="13" {...r} />
      <line x1="190" y1="120" x2="230" y2="122" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="236" cy="123" rx="9" ry="5" fill={F} />
      {/* "left" label */}
      <text x="10" y="45" fontSize="9" fill="#c9a96e" fontFamily="sans-serif">left</text>
    </svg>
  ),
}
