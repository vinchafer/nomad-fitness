import type { IllustrationPair } from './index'

const F = '#4a3e2d'
const FH = '#2d261a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const StandingForwardFold: IllustrationPair = {
  // Start: Standing tall, arms at sides
  start: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair */}
      <ellipse cx="140" cy="30" rx="15" ry="22" fill={FH} />
      {/* Head */}
      <ellipse cx="140" cy="24" rx="12" ry="14" fill={F} />
      {/* Torso upright */}
      <polygon points="120,46 160,46 154,98 126,98" fill={F} />
      {/* Left arm at side */}
      <line x1="122" y1="52" x2="106" y2="78" stroke={F} strokeWidth="10" {...r} />
      <circle cx="106" cy="78" r="5" fill={F} />
      <line x1="106" y1="78" x2="101" y2="104" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="100" cy="107" rx="5" ry="4" fill={F} />
      {/* Right arm at side */}
      <line x1="158" y1="52" x2="174" y2="78" stroke={F} strokeWidth="10" {...r} />
      <circle cx="174" cy="78" r="5" fill={F} />
      <line x1="174" y1="78" x2="179" y2="104" stroke={F} strokeWidth="8" {...r} />
      <ellipse cx="180" cy="107" rx="5" ry="4" fill={F} />
      {/* Left leg */}
      <line x1="128" y1="98" x2="120" y2="133" stroke={F} strokeWidth="13" {...r} />
      <circle cx="120" cy="133" r="6" fill={F} />
      <line x1="120" y1="133" x2="117" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="114" cy="167" rx="8" ry="5" fill={F} />
      {/* Right leg */}
      <line x1="152" y1="98" x2="160" y2="133" stroke={F} strokeWidth="13" {...r} />
      <circle cx="160" cy="133" r="6" fill={F} />
      <line x1="160" y1="133" x2="163" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="166" cy="167" rx="8" ry="5" fill={F} />
    </svg>
  ),
  // Mid: Hinging at hips — torso ~45° forward, arms hanging, knees soft
  mid: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair hangs forward */}
      <ellipse cx="116" cy="88" rx="12" ry="16" fill={FH} />
      {/* Head tilting forward */}
      <ellipse cx="120" cy="82" rx="12" ry="13" fill={F} />
      {/* Neck */}
      <line x1="126" y1="94" x2="134" y2="104" stroke={F} strokeWidth="8" {...r} />
      {/* Torso at ~45° — from hip down-left to shoulder upper-left */}
      <line x1="134" y1="104" x2="165" y2="136" stroke={F} strokeWidth="14" {...r} />
      {/* Hip joint */}
      <circle cx="165" cy="136" r="8" fill={F} />
      {/* Left arm hanging from shoulder */}
      <line x1="128" y1="108" x2="118" y2="128" stroke={F} strokeWidth="10" {...r} />
      <circle cx="118" cy="128" r="5" fill={F} />
      <line x1="118" y1="128" x2="112" y2="152" stroke={F} strokeWidth="8" {...r} />
      {/* Right arm hanging */}
      <line x1="140" y1="112" x2="148" y2="132" stroke={F} strokeWidth="10" {...r} />
      <circle cx="148" cy="132" r="5" fill={F} />
      <line x1="148" y1="132" x2="154" y2="156" stroke={F} strokeWidth="8" {...r} />
      {/* Left leg — soft knee */}
      <line x1="160" y1="136" x2="152" y2="153" stroke={F} strokeWidth="13" {...r} />
      <circle cx="152" cy="153" r="6" fill={F} />
      <line x1="152" y1="153" x2="150" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="148" cy="167" rx="8" ry="5" fill={F} />
      {/* Right leg — soft knee */}
      <line x1="170" y1="136" x2="178" y2="153" stroke={F} strokeWidth="13" {...r} />
      <circle cx="178" cy="153" r="6" fill={F} />
      <line x1="178" y1="153" x2="180" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="182" cy="167" rx="8" ry="5" fill={F} />
    </svg>
  ),
  // End: Full forward fold — torso hangs down from hips, arms hang, fingertips toward floor
  end: (
    <svg viewBox="0 0 280 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#f5f0e8" />
      {/* Standing mat */}
      <rect x="20" y="170" width="240" height="6" rx="3" fill={MAT} />
      {/* Hair hangs straight down */}
      <ellipse cx="146" cy="118" rx="12" ry="16" fill={FH} />
      {/* Head hanging down, relaxed */}
      <ellipse cx="148" cy="110" rx="12" ry="13" fill={F} />
      {/* Neck */}
      <line x1="152" y1="122" x2="156" y2="132" stroke={F} strokeWidth="8" {...r} />
      {/* Torso hanging vertically from hips — torso pointing down */}
      <line x1="156" y1="132" x2="160" y2="142" stroke={F} strokeWidth="14" {...r} />
      {/* Hip joint — at center-top, legs go straight down from here */}
      <circle cx="160" cy="142" r="8" fill={F} />
      {/* Arms hanging relaxed, fingertips near floor */}
      <line x1="150" y1="134" x2="140" y2="152" stroke={F} strokeWidth="10" {...r} />
      <circle cx="140" cy="152" r="5" fill={F} />
      <line x1="140" y1="152" x2="136" y2="166" stroke={F} strokeWidth="8" {...r} />
      <line x1="162" y1="136" x2="170" y2="154" stroke={F} strokeWidth="10" {...r} />
      <circle cx="170" cy="154" r="5" fill={F} />
      <line x1="170" y1="154" x2="174" y2="168" stroke={F} strokeWidth="8" {...r} />
      {/* Left leg straight down */}
      <line x1="154" y1="142" x2="150" y2="156" stroke={F} strokeWidth="13" {...r} />
      <circle cx="150" cy="156" r="6" fill={F} />
      <line x1="150" y1="156" x2="148" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="146" cy="167" rx="8" ry="5" fill={F} />
      {/* Right leg straight down */}
      <line x1="166" y1="142" x2="170" y2="156" stroke={F} strokeWidth="13" {...r} />
      <circle cx="170" cy="156" r="6" fill={F} />
      <line x1="170" y1="156" x2="172" y2="164" stroke={F} strokeWidth="11" {...r} />
      <ellipse cx="174" cy="167" rx="8" ry="5" fill={F} />
    </svg>
  ),
}
