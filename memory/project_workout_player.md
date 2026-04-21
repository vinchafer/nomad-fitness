---
name: Workout Player Implementation
description: Vollständiger Workout-Player mit Timer, SVG-Illustrationen und lokalen Komponenten wurde implementiert
type: project
---

Workout-Player-Feature komplett implementiert und deployed (2026-03-17).

**Umgesetzt:**
- 25 lokale SVG-Illustrationen in `/components/illustrations/` (Start + Ausführung je Übung)
- `ExerciseImages.tsx` auf lokale SVGs umgestellt — keine externen URLs mehr
- `hooks/useWorkoutPlayer.ts` — Timer-Hook mit Zeit/Rep-Erkennung, Web Audio Beeps, Page Visibility API
- `components/WorkoutPlayer.tsx` — Fullscreen-Player mit Timer-Ring, Pause, Skip, Abschluss-Screen
- `components/StartWorkoutButton.tsx` — Client-Component für Detail-Seite Sidebar
- WorkoutCard mit `▶ Starten`-Button (navigiert zu `?start=1`, auto-öffnet Player)

**Why:** User wollte funktionalen Workout-Player als Herzstück der App.
**How to apply:** Bei weiteren Player-Features (Konfiguration, Sounds, Statistiken) auf bestehenden Hook aufbauen. REST_BETWEEN_SETS Konstante in useWorkoutPlayer.ts ist für spätere Konfigurierbarkeit vorbereitet.
