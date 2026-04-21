import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const HipCircles: IllustrationPair = {
  // Start: standing upright, hands on hips
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <ellipse cx="137" cy="16" rx="15" ry="13" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="16" rx="13" ry="14" fill={F} />
      {/* Neck */}
      <rect x="133" y="30" width="14" height="10" rx="4" fill={F} />
      {/* Torso upright */}
      <rect x="126" y="38" width="28" height="58" rx="8" fill={F} />
      {/* Shoulder bar */}
      <rect x="108" y="40" width="64" height="11" rx="5" fill={F} />
      {/* Left arm bent — hand on left hip */}
      <line x1="108" y1="46" x2="96" y2="65" stroke={F} strokeWidth="10" {...r} />
      <line x1="96" y1="65" x2="106" y2="78" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="110" cy="80" rx="7" ry="5" fill={F} />
      {/* Right arm bent — hand on right hip */}
      <line x1="172" y1="46" x2="184" y2="65" stroke={F} strokeWidth="10" {...r} />
      <line x1="184" y1="65" x2="174" y2="78" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="170" cy="80" rx="7" ry="5" fill={F} />
      {/* Hips — centered */}
      <ellipse cx="140" cy="98" rx="22" ry="13" fill={F} />
      {/* Left thigh */}
      <line x1="124" y1="108" x2="118" y2="140" stroke={F} strokeWidth="14" {...r} />
      {/* Left shin */}
      <line x1="118" y1="140" x2="120" y2="167" stroke={F} strokeWidth="12" {...r} />
      {/* Right thigh */}
      <line x1="156" y1="108" x2="162" y2="140" stroke={F} strokeWidth="14" {...r} />
      {/* Right shin */}
      <line x1="162" y1="140" x2="160" y2="167" stroke={F} strokeWidth="12" {...r} />
      {/* Feet */}
      <ellipse cx="119" cy="168" rx="12" ry="5" fill={F} />
      <ellipse cx="161" cy="168" rx="12" ry="5" fill={F} />
    </svg>
  ),

  // Mid: hips shifted to the right, beginning of hip circle, dashed circular arc
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hip circle arc indicator — centered around hip area */}
      <path d="M120,120 Q100,100 120,80 Q140,60 160,80 Q180,100 160,120 Q140,140 120,120Z" stroke={MAT} strokeWidth="2" fill="none" strokeDasharray="5,4" />
      {/* Hair */}
      <ellipse cx="137" cy="16" rx="15" ry="13" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="16" rx="13" ry="14" fill={F} />
      {/* Neck */}
      <rect x="133" y="30" width="14" height="10" rx="4" fill={F} />
      {/* Torso — slight lean as hips go right */}
      <path d="M136,38 Q138,65 152,96 L144,98 Q133,68 130,38 Z" fill={F} />
      {/* Shoulder bar */}
      <rect x="108" y="40" width="64" height="11" rx="5" fill={F} />
      {/* Left arm */}
      <line x1="108" y1="46" x2="98" y2="65" stroke={F} strokeWidth="10" {...r} />
      <line x1="98" y1="65" x2="108" y2="80" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="112" cy="82" rx="7" ry="5" fill={F} />
      {/* Right arm */}
      <line x1="172" y1="46" x2="182" y2="65" stroke={F} strokeWidth="10" {...r} />
      <line x1="182" y1="65" x2="172" y2="80" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="168" cy="82" rx="7" ry="5" fill={F} />
      {/* Hips shifted right */}
      <ellipse cx="152" cy="98" rx="22" ry="13" fill={F} />
      {/* Left thigh — weight shifted */}
      <line x1="136" y1="108" x2="126" y2="140" stroke={F} strokeWidth="14" {...r} />
      <line x1="126" y1="140" x2="126" y2="167" stroke={F} strokeWidth="12" {...r} />
      {/* Right thigh */}
      <line x1="164" y1="108" x2="168" y2="140" stroke={F} strokeWidth="14" {...r} />
      <line x1="168" y1="140" x2="166" y2="167" stroke={F} strokeWidth="12" {...r} />
      {/* Feet */}
      <ellipse cx="125" cy="168" rx="12" ry="5" fill={F} />
      <ellipse cx="167" cy="168" rx="12" ry="5" fill={F} />
    </svg>
  ),

  // End: hips at far left of circle, arrow shows continuing rotation
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hip circle arc — showing the continuing rotation with arrow */}
      <path d="M160,120 Q180,100 160,80 Q140,60 120,80 Q100,100 120,120" stroke={MAT} strokeWidth="2" fill="none" strokeDasharray="5,4" />
      {/* Arrow continuing rotation */}
      <path d="M120,120 Q108,132 118,138" stroke={MAT} strokeWidth="2" fill="none" markerEnd="url(#circleArrow)" />
      <defs>
        <marker id="circleArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke={MAT} strokeWidth="1.5" />
        </marker>
      </defs>
      {/* Hair */}
      <ellipse cx="137" cy="16" rx="15" ry="13" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="16" rx="13" ry="14" fill={F} />
      {/* Neck */}
      <rect x="133" y="30" width="14" height="10" rx="4" fill={F} />
      {/* Torso — slight lean as hips go left */}
      <path d="M144,38 Q142,65 128,96 L136,98 Q147,68 150,38 Z" fill={F} />
      {/* Shoulder bar */}
      <rect x="108" y="40" width="64" height="11" rx="5" fill={F} />
      {/* Arms */}
      <line x1="108" y1="46" x2="98" y2="65" stroke={F} strokeWidth="10" {...r} />
      <line x1="98" y1="65" x2="108" y2="80" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="112" cy="82" rx="7" ry="5" fill={F} />
      <line x1="172" y1="46" x2="182" y2="65" stroke={F} strokeWidth="10" {...r} />
      <line x1="182" y1="65" x2="172" y2="80" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="168" cy="82" rx="7" ry="5" fill={F} />
      {/* Hips shifted left */}
      <ellipse cx="128" cy="98" rx="22" ry="13" fill={F} />
      {/* Left thigh */}
      <line x1="112" y1="108" x2="108" y2="140" stroke={F} strokeWidth="14" {...r} />
      <line x1="108" y1="140" x2="110" y2="167" stroke={F} strokeWidth="12" {...r} />
      {/* Right thigh */}
      <line x1="142" y1="108" x2="152" y2="140" stroke={F} strokeWidth="14" {...r} />
      <line x1="152" y1="140" x2="150" y2="167" stroke={F} strokeWidth="12" {...r} />
      {/* Feet */}
      <ellipse cx="109" cy="168" rx="12" ry="5" fill={F} />
      <ellipse cx="151" cy="168" rx="12" ry="5" fill={F} />
    </svg>
  ),
}
