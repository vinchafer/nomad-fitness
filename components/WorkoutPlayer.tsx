'use client'

import { useEffect, useRef, useState } from 'react'
import { Workout } from '@/lib/types'
import { useWorkoutPlayer } from '@/hooks/useWorkoutPlayer'
import { useAuth } from '@/lib/auth-context'
import { db } from '@/lib/firebase'
import { collection, addDoc } from 'firebase/firestore'
import ExerciseImage from './ExerciseImage'

interface WorkoutPlayerProps {
  workout: Workout
  onClose: () => void
}

// ─── Timer Ring ───────────────────────────────────────────────────────────────

function TimerRing({
  timeLeft,
  total,
  size = 160,
}: {
  timeLeft: number
  total: number
  size?: number
}) {
  const r = (size / 2) * 0.82
  const circ = 2 * Math.PI * r
  const progress = total > 0 ? Math.max(0, timeLeft / total) : 1
  const offset = circ * (1 - progress)

  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E2D9CC" strokeWidth="8" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#5C8A6E"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.9s linear' }}
      />
    </svg>
  )
}

// ─── Hauptkomponente ──────────────────────────────────────────────────────────

export default function WorkoutPlayer({ workout, onClose }: WorkoutPlayerProps) {
  const { state, parsed, actions } = useWorkoutPlayer(workout)
  const { user } = useAuth()
  const [showConfirmEnd, setShowConfirmEnd] = useState(false)
  const [fadeKey, setFadeKey] = useState(0)
  const savedRef = useRef(false)

  // Fade-Illustration bei Übungswechsel
  useEffect(() => {
    setFadeKey(k => k + 1)
  }, [state.exerciseIndex])

  // Reset save flag on new workout start
  useEffect(() => {
    if (state.phase === 'idle') savedRef.current = false
  }, [state.phase])

  // Save completed workout to Firestore
  useEffect(() => {
    if (state.phase !== 'complete' || !user || savedRef.current) return
    savedRef.current = true
    addDoc(collection(db, 'workout_history'), {
      userId: user.uid,
      workoutSlug: workout.id,
      workoutName: workout.title,
      completedAt: new Date().toISOString(),
      durationMinutes: Math.round(state.elapsedSeconds / 60),
    }).catch(() => {})
  }, [state.phase, user, state.elapsedSeconds, workout.id, workout.title])

  // ESC schließt Player
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setShowConfirmEnd(true)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Body-Scroll sperren
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // ── Idle-Screen ──────────────────────────────────────────────────────────────
  if (state.phase === 'idle') {
    return (
      <div className="fixed inset-0 z-50 bg-dark/95 flex flex-col items-center justify-center px-6 text-center">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Schließen"
        >
          ✕
        </button>
        <p className="text-white/60 text-sm uppercase tracking-widest mb-2">{workout.title}</p>
        <h2 className="text-white text-3xl font-extrabold mb-1">{workout.exercises.length} Übungen</h2>
        <p className="text-white/50 text-sm mb-2">
          {workout.durationMinutes} Minuten · {workout.level}
        </p>
        {workout.rounds > 1 && (
          <p className="text-white/50 text-sm mb-10">
            {workout.rounds} Runden · {workout.restBetweenRounds}s Pause zwischen Runden
          </p>
        )}
        {workout.rounds <= 1 && <div className="mb-10" />}
        <button
          onClick={actions.start}
          className="bg-sage text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-sage/90 transition-colors shadow-lg"
        >
          Training starten →
        </button>
      </div>
    )
  }

  // ── Complete-Screen ──────────────────────────────────────────────────────────
  if (state.phase === 'complete') {
    const minutes = Math.floor(state.elapsedSeconds / 60)
    const calories = Math.round(minutes * 6)

    return (
      <div className="fixed inset-0 z-50 bg-dark/95 flex flex-col items-center justify-center px-6 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-white text-3xl font-extrabold mb-2">Workout abgeschlossen!</h2>
        <p className="text-white/60 text-base mb-8">Super gemacht — du hast es durchgezogen.</p>

        <div className="flex gap-4 mb-10 flex-wrap justify-center">
          {state.totalRounds > 1 && (
            <div className="bg-white/10 rounded-2xl px-6 py-4 text-center">
              <p className="text-white text-2xl font-bold">{state.totalRounds}</p>
              <p className="text-white/50 text-xs mt-1">Runden</p>
            </div>
          )}
          <div className="bg-white/10 rounded-2xl px-6 py-4 text-center">
            <p className="text-white text-2xl font-bold">{workout.exercises.length}</p>
            <p className="text-white/50 text-xs mt-1">Übungen</p>
          </div>
          <div className="bg-white/10 rounded-2xl px-6 py-4 text-center">
            <p className="text-white text-2xl font-bold">{minutes} Min</p>
            <p className="text-white/50 text-xs mt-1">Gesamtzeit</p>
          </div>
          <div className="bg-white/10 rounded-2xl px-6 py-4 text-center">
            <p className="text-white text-2xl font-bold">~{calories}</p>
            <p className="text-white/50 text-xs mt-1">kcal</p>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          <button
            onClick={actions.start}
            className="bg-sage text-white px-8 py-3 rounded-xl font-semibold hover:bg-sage/90 transition-colors"
          >
            Nochmal starten
          </button>
          <button
            onClick={onClose}
            className="bg-white/10 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
          >
            Zurück zur Übersicht
          </button>
        </div>
      </div>
    )
  }

  // ── Aktiver Player ───────────────────────────────────────────────────────────
  const current = parsed[state.exerciseIndex]
  const exercise = current.exercise
  const isRest = state.phase === 'rest'
  const isRoundRest = state.phase === 'roundRest'
  const isReps = current.type === 'reps'

  // Progress over all rounds
  const totalExercises = state.totalRounds * workout.exercises.length
  const completedExercises = (state.currentRound - 1) * workout.exercises.length + state.exerciseIndex
  const progress = completedExercises / totalExercises

  const metaText = exercise.reps
    ? exercise.reps
    : exercise.duration
    ? exercise.duration
    : ''

  return (
    <div className="fixed inset-0 z-50 bg-cream flex flex-col overflow-hidden">

      {/* ── Top Bar ── */}
      <div className="flex-shrink-0 px-4 pt-safe-top pt-4 pb-3 bg-white border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-xs text-muted font-medium">{workout.title}</p>
            {state.totalRounds > 1 ? (
              <p className="text-sm font-bold text-dark">
                Runde {state.currentRound} von {state.totalRounds}
              </p>
            ) : (
              <p className="text-xs text-muted">
                Übung {state.exerciseIndex + 1} von {workout.exercises.length}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={actions.toggleSound}
              className="w-9 h-9 rounded-full bg-cream border border-border flex items-center justify-center text-sm hover:bg-border transition-colors"
              aria-label={state.soundEnabled ? 'Ton aus' : 'Ton an'}
              title={state.soundEnabled ? 'Ton aus' : 'Ton an'}
            >
              {state.soundEnabled ? '🔔' : '🔕'}
            </button>
            <button
              onClick={() => setShowConfirmEnd(true)}
              className="w-9 h-9 rounded-full bg-cream border border-border flex items-center justify-center text-dark hover:bg-border transition-colors font-medium"
              aria-label="Training beenden"
            >
              ✕
            </button>
          </div>
        </div>
        <div className="h-1.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-sage rounded-full transition-all duration-500"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      {/* ── Hauptbereich ── */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">

        {/* Runden-Pause Screen */}
        {isRoundRest ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
            <p className="text-muted text-sm font-medium uppercase tracking-widest mb-1">Pause</p>
            <p className="text-dark text-2xl font-extrabold mb-1">
              Runde {state.currentRound} beginnt gleich
            </p>
            <p className="text-muted text-sm mb-2">Erste Übung:</p>
            <p className="text-sage text-xl font-bold mb-8">
              {parsed[0]?.exercise.name ?? ''}
            </p>
            <div className="relative flex items-center justify-center mb-6">
              <TimerRing timeLeft={state.timeLeft} total={state.totalSeconds} size={180} />
              <div className="absolute flex flex-col items-center">
                <span className="text-5xl font-extrabold text-dark">{state.timeLeft}</span>
                <span className="text-xs text-muted">Sek</span>
              </div>
            </div>
            <button
              onClick={actions.skipRoundRest}
              className="text-sm font-semibold text-sage hover:text-sage/80 underline underline-offset-2 transition-colors"
            >
              Pause überspringen →
            </button>
          </div>
        ) : isRest ? (
          /* Set-Pause Screen */
          <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
            <p className="text-muted text-sm font-medium uppercase tracking-widest mb-2">Pause</p>
            <p className="text-dark text-xl font-bold mb-1">Nächste Übung:</p>
            <p className="text-sage text-2xl font-extrabold mb-8">
              {parsed[state.exerciseIndex]?.exercise.name ?? ''}
            </p>
            <div className="relative flex items-center justify-center">
              <TimerRing timeLeft={state.timeLeft} total={state.totalSeconds} size={160} />
              <div className="absolute flex flex-col items-center">
                <span className="text-4xl font-extrabold text-dark">{state.timeLeft}</span>
                <span className="text-xs text-muted">Sek</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Übungsname + Fortschritt */}
            <div className="text-center">
              {state.totalRounds > 1 && (
                <p className="text-xs text-muted mb-1">
                  Übung {state.exerciseIndex + 1} von {workout.exercises.length}
                </p>
              )}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dark leading-tight">
                {exercise.name}
              </h2>
              {metaText && (
                <p className="text-muted text-sm mt-1">
                  {isReps && current.sets > 1
                    ? `Set ${state.setIndex + 1} von ${current.sets} · ${metaText}`
                    : metaText}
                </p>
              )}
              {exercise.note && (
                <p className="text-xs text-muted mt-1 italic">{exercise.note}</p>
              )}
            </div>

            {/* AI Generierte Übungsbilder */}
            <div key={fadeKey} className="flex gap-3 animate-fade-in">
              {(['start', 'mid', 'end'] as const).map((phase, i) => (
                <div key={phase} className="flex-1 min-w-0">
                  <div
                    className="relative rounded-2xl border border-border bg-white overflow-hidden shadow-sm"
                    style={{ paddingBottom: '75%' }}
                  >
                    <ExerciseImage 
                      exerciseName={exercise.name}
                      phase={phase}
                      priority={i === 1}
                    />
                  </div>
                  <p className="text-xs text-muted text-center mt-2 font-medium">
                    {(['Start Position', 'Ausführung', 'End Position'] as const)[i]}
                  </p>
                </div>
              ))}
            </div>

            {/* Timer-Ring (nur für zeitbasierte Übungen) */}
            {!isReps && (
              <div className="flex flex-col items-center py-2">
                <div className="relative flex items-center justify-center">
                  <TimerRing timeLeft={state.timeLeft} total={state.totalSeconds} size={140} />
                  <div className="absolute flex flex-col items-center">
                    <span className="text-4xl font-extrabold text-dark">{state.timeLeft}</span>
                    <span className="text-xs text-muted">Sek</span>
                  </div>
                </div>
              </div>
            )}

            {/* Erfolgs-Animation */}
            {state.showSuccess && (
              <div className="fixed inset-0 z-60 flex items-center justify-center pointer-events-none">
                <div className="bg-sage text-white text-5xl w-24 h-24 rounded-full flex items-center justify-center shadow-2xl animate-fade-in">
                  ✓
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* ── Bottom Actions ── */}
      <div className="flex-shrink-0 px-4 pb-safe-bottom pb-6 pt-3 bg-white border-t border-border space-y-2">

        {/* Rep-basiert: Set abschließen */}
        {!isRest && !isRoundRest && isReps && (
          <button
            onClick={actions.completeSet}
            className="w-full bg-sage text-white py-4 rounded-2xl text-base font-bold hover:bg-sage/90 active:scale-95 transition-all"
          >
            Set abgeschlossen ✓
          </button>
        )}

        <div className="flex gap-2">
          {/* Pause / Weiter */}
          <button
            onClick={actions.togglePause}
            className={`flex-1 py-3.5 rounded-xl text-sm font-semibold transition-colors border ${
              state.isPaused
                ? 'bg-dark text-white border-dark hover:bg-dark/90'
                : 'bg-cream text-dark border-border hover:bg-border'
            }`}
          >
            {state.isPaused ? '▶ Weiter' : '⏸ Pause'}
          </button>

          {/* Überspringen (nur bei Übungen, nicht bei Pausen) */}
          {!isRest && !isRoundRest && (
            <button
              onClick={actions.skipExercise}
              className="flex-1 py-3.5 rounded-xl text-sm font-medium text-muted bg-cream border border-border hover:bg-border transition-colors"
            >
              Überspringen →
            </button>
          )}
        </div>
      </div>

      {/* ── Bestätigungs-Dialog ── */}
      {showConfirmEnd && (
        <div className="fixed inset-0 z-70 bg-dark/70 flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
            <h3 className="font-bold text-dark text-lg mb-2">Training beenden?</h3>
            <p className="text-muted text-sm mb-5">
              Dein Fortschritt geht verloren. Wirklich aufhören?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  actions.end()
                  onClose()
                }}
                className="flex-1 bg-dark text-white py-3 rounded-xl font-semibold hover:bg-dark/90 transition-colors"
              >
                Ja, beenden
              </button>
              <button
                onClick={() => setShowConfirmEnd(false)}
                className="flex-1 bg-cream text-dark py-3 rounded-xl font-semibold border border-border hover:bg-border transition-colors"
              >
                Weiter trainieren
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
