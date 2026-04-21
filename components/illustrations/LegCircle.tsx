import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const LegCircle: IllustrationPair = {
  // Start: lying on back, one leg raised straight up (90°), other leg flat on floor, arms at sides
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="33" cy="122" rx="13" ry="10" fill={FH} />
      {/* Head flat */}
      <ellipse cx="35" cy="119" rx="11" ry="12" fill={F} />
      {/* Neck */}
      <rect x="44" y="115" width="10" height="9" rx="3" fill={F} />
      {/* Torso flat */}
      <rect x="52" y="113" width="110" height="14" rx="6" fill={F} />
      {/* Right leg flat on mat */}
      <line x1="162" y1="115" x2="212" y2="116" stroke={F} strokeWidth="13" {...r} />
      <line x1="212" y1="116" x2="252" y2="117" stroke={F} strokeWidth="11" {...r} />
      {/* Left leg raised straight up (90°) — from hip at x≈155 */}
      <line x1="155" y1="120" x2="153" y2="88" stroke={F} strokeWidth="13" {...r} />
      <line x1="153" y1="88" x2="152" y2="58" stroke={F} strokeWidth="11" {...r} />
      {/* Foot at top */}
      <ellipse cx="151" cy="54" rx="7" ry="5" fill={F} />
      {/* Arms at sides */}
      <line x1="68" y1="127" x2="135" y2="133" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="139" cy="133" rx="6" ry="4" fill={F} />
    </svg>
  ),

  // Mid: raised leg sweeping across — at 45° angle toward opposite side, dashed arc path
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Dashed arc showing the circular motion path */}
      <path d="M150,60 Q175,90 165,120" stroke={MAT} strokeWidth="2.5" fill="none" strokeDasharray="4,3" />
      {/* Arrow on arc showing direction */}
      <path d="M163,116 L167,122 L160,120" stroke={MAT} strokeWidth="1.5" fill="none" />
      {/* Hair */}
      <ellipse cx="33" cy="122" rx="13" ry="10" fill={FH} />
      {/* Head */}
      <ellipse cx="35" cy="119" rx="11" ry="12" fill={F} />
      {/* Neck */}
      <rect x="44" y="115" width="10" height="9" rx="3" fill={F} />
      {/* Torso — hip stabilized on mat */}
      <rect x="52" y="113" width="110" height="14" rx="6" fill={F} />
      {/* Right leg flat */}
      <line x1="162" y1="115" x2="212" y2="116" stroke={F} strokeWidth="13" {...r} />
      <line x1="212" y1="116" x2="252" y2="117" stroke={F} strokeWidth="11" {...r} />
      {/* Left leg sweeping diagonally across at 45°— toward right */}
      <line x1="155" y1="120" x2="165" y2="90" stroke={F} strokeWidth="13" {...r} />
      <line x1="165" y1="90" x2="175" y2="62" stroke={F} strokeWidth="11" {...r} />
      {/* Foot of moving leg */}
      <ellipse cx="177" cy="58" rx="7" ry="5" fill={F} />
      {/* Arms pressed into mat for stability */}
      <line x1="68" y1="127" x2="135" y2="133" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="139" cy="133" rx="6" ry="4" fill={F} />
    </svg>
  ),

  // End: leg completing circle — back near vertical, small circle indicator near ankle
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Full circle path indicator around the ankle endpoint */}
      <ellipse cx="149" cy="56" rx="10" ry="10" fill="none" stroke={MAT} strokeWidth="2" strokeDasharray="4,3" />
      {/* Arrow on circle to show rotation direction */}
      <path d="M149,46 Q158,48 159,56" stroke={MAT} strokeWidth="1.5" fill="none" markerEnd="url(#legCircleArrow)" />
      <defs>
        <marker id="legCircleArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke={MAT} strokeWidth="1.5" />
        </marker>
      </defs>
      {/* Full arc showing completed circle */}
      <path d="M152,60 Q125,80 132,110 Q140,130 155,120 Q170,110 175,85 Q180,60 152,60" stroke={MAT} strokeWidth="1.5" fill="none" strokeDasharray="5,4" opacity="0.7" />
      {/* Hair */}
      <ellipse cx="33" cy="122" rx="13" ry="10" fill={FH} />
      {/* Head */}
      <ellipse cx="35" cy="119" rx="11" ry="12" fill={F} />
      {/* Neck */}
      <rect x="44" y="115" width="10" height="9" rx="3" fill={F} />
      {/* Torso */}
      <rect x="52" y="113" width="110" height="14" rx="6" fill={F} />
      {/* Right leg flat */}
      <line x1="162" y1="115" x2="212" y2="116" stroke={F} strokeWidth="13" {...r} />
      <line x1="212" y1="116" x2="252" y2="117" stroke={F} strokeWidth="11" {...r} />
      {/* Left leg back to near vertical — circle complete */}
      <line x1="155" y1="120" x2="153" y2="89" stroke={F} strokeWidth="13" {...r} />
      <line x1="153" y1="89" x2="151" y2="62" stroke={F} strokeWidth="11" {...r} />
      {/* Foot */}
      <ellipse cx="150" cy="58" rx="7" ry="5" fill={F} />
      {/* Arms at sides */}
      <line x1="68" y1="127" x2="135" y2="133" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="139" cy="133" rx="6" ry="4" fill={F} />
    </svg>
  ),
}
