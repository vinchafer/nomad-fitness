import type { IllustrationPair } from './index'

const F = '#2d4a3e'
const FH = '#1a2e26'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const SidePlank: IllustrationPair = {
  // Start: Person lying on side on the mat, full body horizontal (head LEFT, feet RIGHT)
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — left side */}
      <circle cx="32" cy="130" r="12" fill={F} />
      {/* Hair */}
      <rect x="22" y="122" width="20" height="8" rx="4" fill={FH} />
      {/* Body — horizontal on mat */}
      <line x1="44" y1="133" x2="200" y2="134" stroke={F} strokeWidth="16" {...r} />
      {/* Lower arm resting on mat */}
      <line x1="70" y1="133" x2="56" y2="136" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="52" cy="136" rx="6" ry="4" fill={F} />
      {/* Upper arm resting along body */}
      <line x1="100" y1="132" x2="116" y2="130" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="120" cy="130" rx="5" ry="4" fill={F} />
      {/* Legs — horizontal, feet right */}
      <line x1="198" y1="133" x2="240" y2="134" stroke={F} strokeWidth="14" {...r} />
      <circle cx="240" cy="134" r="6" fill={F} />
      <line x1="240" y1="134" x2="258" y2="135" stroke={F} strokeWidth="12" {...r} />
      <ellipse cx="264" cy="135" rx="8" ry="5" fill={F} />
    </svg>
  ),
  // Mid: Side plank — body lifted, supported on forearm and foot, free arm raised up
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — elevated, left side */}
      <circle cx="32" cy="106" r="12" fill={F} />
      {/* Hair */}
      <rect x="22" y="98" width="20" height="8" rx="4" fill={FH} />
      {/* Body — diagonal line from shoulder (upper-left) to feet (lower-right) */}
      <line x1="44" y1="114" x2="220" y2="134" stroke={F} strokeWidth="16" {...r} />
      {/* Supporting forearm — elbow on mat */}
      <line x1="44" y1="114" x2="36" y2="136" stroke={F} strokeWidth="10" {...r} />
      <circle cx="36" cy="136" r="5" fill={F} />
      <line x1="36" y1="136" x2="58" y2="136" stroke={F} strokeWidth="9" {...r} />
      <circle cx="58" cy="136" r="5" fill={F} />
      {/* Free arm raised straight upward */}
      <line x1="100" y1="120" x2="96" y2="90" stroke={F} strokeWidth="9" {...r} />
      <circle cx="96" cy="90" r="5" fill={F} />
      <line x1="96" y1="90" x2="94" y2="72" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="93" cy="69" rx="5" ry="4" fill={F} />
      {/* Legs — feet stacked on mat */}
      <line x1="218" y1="134" x2="258" y2="135" stroke={F} strokeWidth="13" {...r} />
      <ellipse cx="264" cy="135" rx="8" ry="5" fill={F} />
    </svg>
  ),
  // End: Side plank with hip fully raised — free arm stretched overhead (peak extension)
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — elevated, left side */}
      <circle cx="32" cy="100" r="12" fill={F} />
      {/* Hair */}
      <rect x="22" y="92" width="20" height="8" rx="4" fill={FH} />
      {/* Body — more horizontal (full extension, hip raised) */}
      <line x1="44" y1="108" x2="220" y2="130" stroke={F} strokeWidth="16" {...r} />
      {/* Supporting forearm on mat */}
      <line x1="44" y1="108" x2="36" y2="136" stroke={F} strokeWidth="10" {...r} />
      <circle cx="36" cy="136" r="5" fill={F} />
      <line x1="36" y1="136" x2="58" y2="136" stroke={F} strokeWidth="9" {...r} />
      <circle cx="58" cy="136" r="5" fill={F} />
      {/* Free arm stretched overhead — diagonal upper-left */}
      <line x1="100" y1="114" x2="80" y2="86" stroke={F} strokeWidth="9" {...r} />
      <circle cx="80" cy="86" r="5" fill={F} />
      <line x1="80" y1="86" x2="66" y2="66" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="63" cy="63" rx="5" ry="4" fill={F} />
      {/* Legs — feet on mat */}
      <line x1="218" y1="130" x2="258" y2="134" stroke={F} strokeWidth="13" {...r} />
      <ellipse cx="264" cy="134" rx="8" ry="5" fill={F} />
    </svg>
  ),
}
