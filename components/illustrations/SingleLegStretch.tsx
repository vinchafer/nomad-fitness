import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const SingleLegStretch: IllustrationPair = {
  // Start: lying on back, both knees drawn to chest (ball position), head on floor
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="38" cy="123" rx="13" ry="10" fill={FH} />
      {/* Head on floor */}
      <ellipse cx="40" cy="120" rx="11" ry="12" fill={F} />
      {/* Neck */}
      <rect x="49" y="116" width="10" height="9" rx="3" fill={F} />
      {/* Torso flat */}
      <rect x="57" y="114" width="90" height="14" rx="6" fill={F} />
      {/* Both knees drawn to chest — right thigh */}
      <line x1="142" y1="118" x2="120" y2="100" stroke={F} strokeWidth="13" {...r} />
      {/* Right shin curled back */}
      <line x1="120" y1="100" x2="130" y2="118" stroke={F} strokeWidth="11" {...r} />
      {/* Left thigh (behind) */}
      <line x1="148" y1="119" x2="128" y2="102" stroke={F} strokeWidth="11" {...r} />
      {/* Left shin curled */}
      <line x1="128" y1="102" x2="138" y2="120" stroke={F} strokeWidth="10" {...r} />
      {/* Knees */}
      <ellipse cx="120" cy="100" rx="7" ry="6" fill={F} />
      {/* Arms resting on torso / at sides */}
      <line x1="75" y1="114" x2="72" y2="128" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="71" cy="131" rx="6" ry="4" fill={F} />
      <line x1="90" y1="114" x2="87" y2="128" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="86" cy="131" rx="5" ry="4" fill={F} />
    </svg>
  ),

  // Mid: right leg extends to 45°, left knee pulled to chest, head/shoulders in C-curve, hands on bent knee
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Lower back / hips on mat */}
      <ellipse cx="148" cy="128" rx="14" ry="8" fill={F} />
      {/* Torso in C-curve — lifted shoulders */}
      <path d="M148,126 Q128,118 105,115 Q85,113 68,118" stroke={F} strokeWidth="15" fill="none" strokeLinecap="round" />
      {/* Hair */}
      <ellipse cx="53" cy="116" rx="13" ry="10" fill={FH} />
      {/* Head lifted in C-curve */}
      <ellipse cx="56" cy="112" rx="11" ry="12" fill={F} />
      {/* Left knee pulled to chest — thigh */}
      <line x1="145" y1="124" x2="122" y2="104" stroke={F} strokeWidth="13" {...r} />
      {/* Left shin curled */}
      <line x1="122" y1="104" x2="132" y2="122" stroke={F} strokeWidth="11" {...r} />
      {/* Left knee */}
      <ellipse cx="122" cy="104" rx="7" ry="6" fill={F} />
      {/* Right leg extended at 45° */}
      <line x1="152" y1="125" x2="188" y2="111" stroke={F} strokeWidth="13" {...r} />
      <line x1="188" y1="111" x2="226" y2="98" stroke={F} strokeWidth="11" {...r} />
      {/* Hands on bent left knee — one on ankle, one on knee */}
      <line x1="75" y1="118" x2="110" y2="108" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="115" cy="107" rx="6" ry="4" fill={F} />
      <line x1="80" y1="122" x2="118" y2="114" stroke={F} strokeWidth="6" {...r} />
      <ellipse cx="122" cy="113" rx="5" ry="4" fill={F} />
    </svg>
  ),

  // End: switch — left leg extends, right knee to chest, hands switched to right knee
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hips on mat */}
      <ellipse cx="148" cy="128" rx="14" ry="8" fill={F} />
      {/* Torso C-curve */}
      <path d="M148,126 Q128,118 105,115 Q85,113 68,118" stroke={F} strokeWidth="15" fill="none" strokeLinecap="round" />
      {/* Hair */}
      <ellipse cx="53" cy="116" rx="13" ry="10" fill={FH} />
      {/* Head lifted */}
      <ellipse cx="56" cy="112" rx="11" ry="12" fill={F} />
      {/* Right knee pulled to chest */}
      <line x1="148" y1="124" x2="126" y2="105" stroke={F} strokeWidth="13" {...r} />
      {/* Right shin curled */}
      <line x1="126" y1="105" x2="136" y2="123" stroke={F} strokeWidth="11" {...r} />
      {/* Right knee */}
      <ellipse cx="126" cy="105" rx="7" ry="6" fill={F} />
      {/* Left leg extended at 45° */}
      <line x1="144" y1="126" x2="180" y2="112" stroke={F} strokeWidth="13" {...r} />
      <line x1="180" y1="112" x2="218" y2="99" stroke={F} strokeWidth="11" {...r} />
      {/* Hands on right knee */}
      <line x1="75" y1="118" x2="112" y2="108" stroke={F} strokeWidth="7" {...r} />
      <ellipse cx="117" cy="107" rx="6" ry="4" fill={F} />
      <line x1="80" y1="122" x2="118" y2="114" stroke={F} strokeWidth="6" {...r} />
      <ellipse cx="122" cy="113" rx="5" ry="4" fill={F} />
    </svg>
  ),
}
