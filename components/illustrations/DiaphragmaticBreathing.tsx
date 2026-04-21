import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const DiaphragmaticBreathing: IllustrationPair = {
  // Start: lying flat on back, one hand on chest, one hand on belly — neutral
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair behind head */}
      <ellipse cx="33" cy="122" rx="13" ry="10" fill={FH} />
      {/* Head */}
      <ellipse cx="35" cy="119" rx="11" ry="12" fill={F} />
      {/* Neck */}
      <rect x="44" y="115" width="10" height="9" rx="3" fill={F} />
      {/* Torso — flat, horizontal */}
      <rect x="52" y="112" width="110" height="16" rx="6" fill={F} />
      {/* Upper legs */}
      <rect x="155" y="114" width="65" height="13" rx="6" fill={F} />
      {/* Lower legs */}
      <rect x="210" y="116" width="55" height="11" rx="5" fill={F} />
      {/* Arm on chest — bent upward, hand resting on chest */}
      <line x1="75" y1="112" x2="72" y2="103" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="71" cy="100" rx="6" ry="4" fill={F} />
      {/* Arm on belly — bent upward, hand resting on belly */}
      <line x1="105" y1="112" x2="102" y2="103" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="101" cy="100" rx="6" ry="4" fill={F} />
      {/* Label: chest hand */}
      <text x="60" y="95" fontSize="9" fill="#888" fontFamily="sans-serif">chest</text>
      {/* Label: belly hand */}
      <text x="90" y="95" fontSize="9" fill="#888" fontFamily="sans-serif">belly</text>
    </svg>
  ),

  // Mid: INHALE — belly rises, hand on belly lifts, belly expansion highlight
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="33" cy="122" rx="13" ry="10" fill={FH} />
      {/* Head */}
      <ellipse cx="35" cy="119" rx="11" ry="12" fill={F} />
      {/* Neck */}
      <rect x="44" y="115" width="10" height="9" rx="3" fill={F} />
      {/* Upper torso (chest — stays relatively flat) */}
      <rect x="52" y="112" width="60" height="15" rx="6" fill={F} />
      {/* Belly region — animated expansion */}
      <g className="anim-belly" style={{ transformOrigin: '140px 122px' }}>
        {/* Belly expanded outward (upward since lying) */}
        <path d="M110,112 Q140,104 170,112 L170,128 Q140,128 110,128 Z" fill={F} />
        {/* Expansion highlight arc */}
        <path d="M112,111 Q140,102 168,111" stroke="#c9a96e" strokeWidth="2.5" fill="none" strokeDasharray="4,3" opacity="0.8" />
        {/* Hand on belly — raised with belly */}
        <line x1="135" y1="112" x2="132" y2="99" stroke={F} strokeWidth="7" {...r} />
        <ellipse cx="131" cy="96" rx="6" ry="4" fill={F} />
      </g>
      {/* Upper legs */}
      <rect x="168" y="114" width="62" height="13" rx="6" fill={F} />
      {/* Lower legs */}
      <rect x="220" y="116" width="45" height="11" rx="5" fill={F} />
      {/* Arm on chest — stays level (chest barely moves) */}
      <line x1="75" y1="112" x2="72" y2="103" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="71" cy="100" rx="6" ry="4" fill={F} />
      {/* Inhale arrow */}
      <path d="M140,88 L140,78" stroke="#c9a96e" strokeWidth="2" markerEnd="url(#arrowUp)" {...r} />
      <defs>
        <marker id="arrowUp" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto">
          <path d="M0,6 L3,0 L6,6" fill="none" stroke="#c9a96e" strokeWidth="1.5" />
        </marker>
      </defs>
      <text x="148" y="81" fontSize="9" fill="#c9a96e" fontFamily="sans-serif">inhale</text>
    </svg>
  ),

  // End: EXHALE — belly falls back, slight draw-in, relaxed
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="33" cy="122" rx="13" ry="10" fill={FH} />
      {/* Head */}
      <ellipse cx="35" cy="119" rx="11" ry="12" fill={F} />
      {/* Neck */}
      <rect x="44" y="115" width="10" height="9" rx="3" fill={F} />
      {/* Torso — belly slightly drawn in */}
      <path d="M52,112 Q110,114 162,113 L162,128 Q110,130 52,128 Z" fill={F} />
      {/* Upper legs */}
      <rect x="155" y="114" width="65" height="13" rx="6" fill={F} />
      {/* Lower legs */}
      <rect x="210" y="116" width="55" height="11" rx="5" fill={F} />
      {/* Arm on chest */}
      <line x1="75" y1="112" x2="72" y2="103" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="71" cy="100" rx="6" ry="4" fill={F} />
      {/* Arm on belly — back down, relaxed */}
      <line x1="105" y1="113" x2="102" y2="104" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="101" cy="101" rx="6" ry="4" fill={F} />
      {/* Exhale arrow */}
      <path d="M140,82 L140,92" stroke="#8aab96" strokeWidth="2" {...r} />
      <defs>
        <marker id="arrowDown" markerWidth="6" markerHeight="6" refX="3" refY="0" orient="auto">
          <path d="M0,0 L3,6 L6,0" fill="none" stroke="#8aab96" strokeWidth="1.5" />
        </marker>
      </defs>
      <text x="148" y="88" fontSize="9" fill="#8aab96" fontFamily="sans-serif">exhale</text>
    </svg>
  ),
}
