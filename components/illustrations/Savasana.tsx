import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const Savasana: IllustrationPair = {
  // Start: Lying down, settling in — slight tension, arms close to body, legs together
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="26" cy="130" rx="14" ry="10" fill={FH} />
      {/* Head */}
      <ellipse cx="28" cy="124" rx="12" ry="13" fill={F} />
      {/* Torso flat */}
      <line x1="40" y1="126" x2="172" y2="128" stroke={F} strokeWidth="16" {...r} />
      {/* Left arm close to body */}
      <line x1="82" y1="126" x2="78" y2="136" stroke={F} strokeWidth="9" {...r} />
      <line x1="78" y1="136" x2="76" y2="144" stroke={F} strokeWidth="8" {...r} />
      {/* Right arm close to body */}
      <line x1="114" y1="127" x2="118" y2="136" stroke={F} strokeWidth="9" {...r} />
      <line x1="118" y1="136" x2="120" y2="144" stroke={F} strokeWidth="8" {...r} />
      {/* Hip */}
      <circle cx="172" cy="128" r="7" fill={F} />
      {/* Left leg straight, together */}
      <line x1="166" y1="127" x2="210" y2="128" stroke={F} strokeWidth="13" {...r} />
      <circle cx="210" cy="128" r="6" fill={F} />
      <line x1="210" y1="128" x2="254" y2="129" stroke={F} strokeWidth="11" {...r} />
      {/* Right leg straight, close to left */}
      <line x1="172" y1="129" x2="216" y2="130" stroke={F} strokeWidth="11" {...r} />
      <circle cx="216" cy="130" r="5" fill={F} />
      <line x1="216" y1="130" x2="260" y2="131" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
  // Mid: Relaxing — arms moving slightly away from body, legs falling open slightly
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="26" cy="130" rx="14" ry="10" fill={FH} />
      {/* Head */}
      <ellipse cx="28" cy="124" rx="12" ry="13" fill={F} />
      {/* Torso flat */}
      <line x1="40" y1="126" x2="172" y2="128" stroke={F} strokeWidth="16" {...r} />
      {/* Left arm moving slightly away ~8° */}
      <line x1="82" y1="125" x2="72" y2="134" stroke={F} strokeWidth="9" {...r} />
      <line x1="72" y1="134" x2="64" y2="142" stroke={F} strokeWidth="8" {...r} />
      {/* Right arm moving slightly away ~8° */}
      <line x1="114" y1="126" x2="124" y2="134" stroke={F} strokeWidth="9" {...r} />
      <line x1="124" y1="134" x2="132" y2="142" stroke={F} strokeWidth="8" {...r} />
      {/* Hip */}
      <circle cx="172" cy="128" r="7" fill={F} />
      {/* Left leg — slight outward rotation */}
      <line x1="166" y1="126" x2="210" y2="125" stroke={F} strokeWidth="13" {...r} />
      <circle cx="210" cy="125" r="6" fill={F} />
      <line x1="210" y1="125" x2="253" y2="122" stroke={F} strokeWidth="11" {...r} />
      {/* Right leg — falling slightly out */}
      <line x1="172" y1="129" x2="216" y2="130" stroke={F} strokeWidth="11" {...r} />
      <circle cx="216" cy="130" r="5" fill={F} />
      <line x1="216" y1="130" x2="259" y2="133" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
  // End: Full Savasana — arms ~18° away from body, legs comfortably apart, completely at rest
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Floor mat */}
      <rect x="10" y="136" width="260" height="8" rx="4" fill={MAT} />
      {/* Hair */}
      <ellipse cx="26" cy="130" rx="14" ry="10" fill={FH} />
      {/* Head — centered, completely relaxed */}
      <ellipse cx="28" cy="124" rx="12" ry="13" fill={F} />
      {/* Torso flat */}
      <line x1="40" y1="126" x2="172" y2="128" stroke={F} strokeWidth="16" {...r} />
      {/* Left arm relaxed ~18° away from body */}
      <line x1="82" y1="124" x2="66" y2="132" stroke={F} strokeWidth="9" {...r} />
      <line x1="66" y1="132" x2="52" y2="140" stroke={F} strokeWidth="8" {...r} />
      {/* Right arm relaxed ~18° away */}
      <line x1="114" y1="125" x2="130" y2="132" stroke={F} strokeWidth="9" {...r} />
      <line x1="130" y1="132" x2="144" y2="140" stroke={F} strokeWidth="8" {...r} />
      {/* Hip */}
      <circle cx="172" cy="128" r="7" fill={F} />
      {/* Left leg — naturally rotated out, toes falling left */}
      <line x1="166" y1="126" x2="208" y2="123" stroke={F} strokeWidth="13" {...r} />
      <circle cx="208" cy="123" r="6" fill={F} />
      <line x1="208" y1="123" x2="250" y2="118" stroke={F} strokeWidth="11" {...r} />
      {/* Right leg — naturally rotated out, toes falling right */}
      <line x1="172" y1="130" x2="214" y2="132" stroke={F} strokeWidth="11" {...r} />
      <circle cx="214" cy="132" r="5" fill={F} />
      <line x1="214" y1="132" x2="256" y2="136" stroke={F} strokeWidth="10" {...r} />
    </svg>
  ),
}
