import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const ThreadTheNeedle: IllustrationPair = {
  // Start: Tabletop position — on all fours, neutral spine. (Side view, faces right)
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — looking slightly down, facing right */}
      <ellipse cx="236" cy="86" rx="12" ry="13" fill={F} />
      {/* Hair */}
      <ellipse cx="232" cy="82" rx="12" ry="11" fill={FH} />
      {/* Neck */}
      <line x1="225" y1="94" x2="214" y2="100" stroke={F} strokeWidth="9" {...r} />
      {/* Torso — horizontal, neutral spine */}
      <line x1="214" y1="98" x2="110" y2="96" stroke={F} strokeWidth="15" {...r} />
      {/* Hips */}
      <ellipse cx="110" cy="96" rx="10" ry="8" fill={F} />
      {/* Right front arm — straight down to mat */}
      <line x1="200" y1="100" x2="200" y2="128" stroke={F} strokeWidth="10" {...r} />
      <circle cx="200" cy="128" r="5" fill={F} />
      <line x1="200" y1="128" x2="208" y2="134" stroke={F} strokeWidth="9" {...r} />
      {/* Left front arm — straight down to mat */}
      <line x1="180" y1="100" x2="180" y2="128" stroke={F} strokeWidth="10" {...r} />
      <circle cx="180" cy="128" r="5" fill={F} />
      <line x1="180" y1="128" x2="188" y2="134" stroke={F} strokeWidth="9" {...r} />
      {/* Right back leg — thigh straight down from hip */}
      <line x1="116" y1="96" x2="120" y2="124" stroke={F} strokeWidth="12" {...r} />
      <circle cx="120" cy="124" r="6" fill={F} />
      {/* Right shin — horizontal back */}
      <line x1="120" y1="124" x2="100" y2="134" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="96" cy="135" rx="8" ry="5" fill={F} />
      {/* Left back leg */}
      <line x1="104" y1="96" x2="96" y2="124" stroke={F} strokeWidth="12" {...r} />
      <circle cx="96" cy="124" r="6" fill={F} />
      <line x1="96" y1="124" x2="76" y2="134" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="72" cy="135" rx="8" ry="5" fill={F} />
    </svg>
  ),

  // Mid: Right arm slides UNDER the body threading motion — right shoulder lowering toward mat. Left arm stays straight supporting.
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — tilting to the right (toward mat), facing right */}
      <ellipse cx="228" cy="92" rx="12" ry="13" fill={F} />
      {/* Hair */}
      <ellipse cx="224" cy="87" rx="12" ry="10" fill={FH} />
      {/* Neck — angled right shoulder dropping */}
      <line x1="218" y1="100" x2="206" y2="104" stroke={F} strokeWidth="9" {...r} />
      {/* Torso — slightly tilted as right shoulder drops */}
      <line x1="206" y1="102" x2="108" y2="96" stroke={F} strokeWidth="15" {...r} />
      {/* Hips — still raised */}
      <ellipse cx="108" cy="96" rx="10" ry="8" fill={F} />
      {/* LEFT arm (near side) — stays straight, supporting on mat */}
      <line x1="182" y1="100" x2="184" y2="128" stroke={F} strokeWidth="10" {...r} />
      <circle cx="184" cy="128" r="5" fill={F} />
      <line x1="184" y1="128" x2="192" y2="134" stroke={F} strokeWidth="9" {...r} />
      {/* RIGHT arm — threading under — slides under body to the LEFT */}
      {/* Upper arm from right shoulder angling DOWN and LEFT */}
      <line x1="196" y1="104" x2="182" y2="116" stroke={F} strokeWidth="10" {...r} />
      <circle cx="182" cy="116" r="5" fill={F} />
      {/* Forearm continuing leftward under body */}
      <line x1="182" y1="116" x2="154" y2="124" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="150" cy="125" rx="6" ry="4" fill={F} />
      {/* Right shoulder lowering indicator — right shoulder closer to mat */}
      <circle cx="196" cy="106" r="6" fill={F} />
      {/* Back legs — knees on mat, hips raised */}
      <line x1="114" y1="96" x2="118" y2="124" stroke={F} strokeWidth="12" {...r} />
      <circle cx="118" cy="124" r="6" fill={F} />
      <line x1="118" y1="124" x2="98" y2="134" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="94" cy="135" rx="8" ry="5" fill={F} />
      <line x1="102" y1="96" x2="94" y2="124" stroke={F} strokeWidth="12" {...r} />
      <circle cx="94" cy="124" r="6" fill={F} />
      <line x1="94" y1="124" x2="74" y2="134" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="70" cy="135" rx="8" ry="5" fill={F} />
    </svg>
  ),

  // End: Full Thread the Needle — right shoulder and right cheek/ear on mat. Right arm extended under body to the left. Left arm pointing up or forward. Hips raised over knees.
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Head — right cheek/ear on mat, facing left/upward slightly */}
      <ellipse cx="210" cy="126" rx="12" ry="10" fill={F} />
      {/* Hair */}
      <ellipse cx="206" cy="122" rx="12" ry="9" fill={FH} />
      {/* RIGHT SHOULDER on mat — the key visual anchor */}
      <circle cx="196" cy="128" r="8" fill={F} />
      {/* RIGHT ARM — threaded fully under body, extended to the LEFT */}
      <line x1="196" y1="128" x2="160" y2="130" stroke={F} strokeWidth="10" {...r} />
      <line x1="160" y1="130" x2="116" y2="132" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="112" cy="133" rx="7" ry="4" fill={F} />
      {/* Torso — angled from right shoulder on mat up to raised hips */}
      <line x1="196" y1="126" x2="126" y2="96" stroke={F} strokeWidth="15" {...r} />
      {/* Hips — raised high over knees */}
      <ellipse cx="126" cy="96" rx="11" ry="9" fill={F} />
      {/* LEFT ARM — extended upward/forward from left shoulder, supporting */}
      {/* Left shoulder area on torso */}
      <line x1="168" y1="108" x2="166" y2="82" stroke={F} strokeWidth="10" {...r} />
      <circle cx="166" cy="82" r="5" fill={F} />
      <line x1="166" y1="82" x2="162" y2="58" stroke={F} strokeWidth="9" {...r} />
      <ellipse cx="161" cy="55" rx="6" ry="4" fill={F} />
      {/* Back legs — knees on mat, hips high */}
      <line x1="132" y1="96" x2="136" y2="124" stroke={F} strokeWidth="12" {...r} />
      <circle cx="136" cy="124" r="6" fill={F} />
      <line x1="136" y1="124" x2="116" y2="134" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="112" cy="135" rx="8" ry="5" fill={F} />
      <line x1="120" y1="96" x2="112" y2="124" stroke={F} strokeWidth="12" {...r} />
      <circle cx="112" cy="124" r="6" fill={F} />
      <line x1="112" y1="124" x2="92" y2="134" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="88" cy="135" rx="8" ry="5" fill={F} />
    </svg>
  ),
}
