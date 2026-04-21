const F = '#3d5a4a'
const MAT = '#d4c5a9'
const r = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const GenericExercise = {
  // Start: Aufrechter Stand, Grundposition
  start: (
    <svg viewBox="0 0 200 150" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#f5f0e8" />
      <rect x="20" y="137" width="160" height="5" rx="2" fill={MAT} />
      {/* Kopf */}
      <circle cx="100" cy="18" r="11" fill={F} />
      {/* Rumpf */}
      <line x1="100" y1="30" x2="100" y2="90" stroke={F} strokeWidth="16" {...r} />
      {/* Schulterlinie */}
      <line x1="82" y1="42" x2="118" y2="42" stroke={F} strokeWidth="10" {...r} />
      {/* Arme entspannt */}
      <line x1="82" y1="42" x2="74" y2="66" stroke={F} strokeWidth="9" {...r} />
      <line x1="74" y1="66" x2="71" y2="88" stroke={F} strokeWidth="8" {...r} />
      <line x1="118" y1="42" x2="126" y2="66" stroke={F} strokeWidth="9" {...r} />
      <line x1="126" y1="66" x2="129" y2="88" stroke={F} strokeWidth="8" {...r} />
      {/* Beine */}
      <line x1="93" y1="90" x2="88" y2="115" stroke={F} strokeWidth="12" {...r} />
      <line x1="88" y1="115" x2="90" y2="133" stroke={F} strokeWidth="10" {...r} />
      <line x1="107" y1="90" x2="112" y2="115" stroke={F} strokeWidth="12" {...r} />
      <line x1="112" y1="115" x2="110" y2="133" stroke={F} strokeWidth="10" {...r} />
      <circle cx="100" cy="90" r="7" fill={F} />
    </svg>
  ),
  // Ausführung: Aktive Haltung, Arme leicht angehoben
  execution: (
    <svg viewBox="0 0 200 150" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#f5f0e8" />
      <rect x="20" y="137" width="160" height="5" rx="2" fill={MAT} />
      {/* Kopf */}
      <circle cx="100" cy="18" r="11" fill={F} />
      {/* Rumpf */}
      <line x1="100" y1="30" x2="100" y2="90" stroke={F} strokeWidth="16" {...r} />
      {/* Schulterlinie */}
      <line x1="82" y1="42" x2="118" y2="42" stroke={F} strokeWidth="10" {...r} />
      {/* Arme leicht angehoben/aktiviert */}
      <line x1="82" y1="42" x2="68" y2="60" stroke={F} strokeWidth="9" {...r} />
      <line x1="68" y1="60" x2="62" y2="80" stroke={F} strokeWidth="8" {...r} />
      <line x1="118" y1="42" x2="132" y2="60" stroke={F} strokeWidth="9" {...r} />
      <line x1="132" y1="60" x2="138" y2="80" stroke={F} strokeWidth="8" {...r} />
      {/* Beine leicht geöffnet (athletische Haltung) */}
      <line x1="93" y1="90" x2="85" y2="115" stroke={F} strokeWidth="12" {...r} />
      <line x1="85" y1="115" x2="82" y2="133" stroke={F} strokeWidth="10" {...r} />
      <line x1="107" y1="90" x2="115" y2="115" stroke={F} strokeWidth="12" {...r} />
      <line x1="115" y1="115" x2="118" y2="133" stroke={F} strokeWidth="10" {...r} />
      <circle cx="100" cy="90" r="7" fill={F} />
    </svg>
  ),
}
