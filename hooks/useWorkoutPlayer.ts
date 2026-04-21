'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Workout, Exercise } from '@/lib/types'

// ─── Konfiguration ───────────────────────────────────────────────────────────
const REST_BETWEEN_SETS = 30

export type PlayerPhase = 'idle' | 'exercise' | 'rest' | 'roundRest' | 'complete'

export interface ParsedExercise {
  type: 'time' | 'reps'
  totalSeconds: number   // nur bei type==='time'
  sets: number
  exercise: Exercise
}

export interface WorkoutPlayerState {
  phase: PlayerPhase
  exerciseIndex: number
  setIndex: number           // aktuelles Set (0-basiert)
  currentRound: number       // 1-basiert
  totalRounds: number
  timeLeft: number           // Sekunden im aktuellen Phase-Abschnitt
  totalSeconds: number       // Gesamtdauer des aktuellen Abschnitts
  isPaused: boolean
  elapsedSeconds: number     // gesamte Trainingszeit
  soundEnabled: boolean
  showSuccess: boolean       // kurze Erfolgs-Animation
}

export interface WorkoutPlayerActions {
  start: () => void
  togglePause: () => void
  completeSet: () => void
  skipExercise: () => void
  skipRoundRest: () => void
  end: () => void
  toggleSound: () => void
}

// ─── Hilfsfunktionen ─────────────────────────────────────────────────────────

function parseDurationString(str: string): number {
  const m = str.match(/(\d+)\s*(min|m|sec|s)/i)
  if (!m) return 30
  const val = parseInt(m[1])
  return m[2].toLowerCase().startsWith('m') ? val * 60 : val
}

function parseSets(repsStr: string): number {
  const m = repsStr.match(/^(\d+)\s*(sets?|×|x)\s*/i)
  return m ? parseInt(m[1]) : 1
}

export function parseExercise(exercise: Exercise): ParsedExercise {
  if (exercise.duration) {
    return {
      type: 'time',
      totalSeconds: parseDurationString(exercise.duration),
      sets: 1,
      exercise,
    }
  }
  return {
    type: 'reps',
    totalSeconds: 0,
    sets: exercise.reps ? parseSets(exercise.reps) : 1,
    exercise,
  }
}

// ─── Web Audio Beep ───────────────────────────────────────────────────────────

let audioCtx: AudioContext | null = null

function beep(freq = 880, durationMs = 120, gain = 0.25) {
  try {
    if (!audioCtx) audioCtx = new AudioContext()
    const osc = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()
    osc.connect(gainNode)
    gainNode.connect(audioCtx.destination)
    osc.frequency.value = freq
    osc.type = 'sine'
    gainNode.gain.setValueAtTime(gain, audioCtx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durationMs / 1000)
    osc.start(audioCtx.currentTime)
    osc.stop(audioCtx.currentTime + durationMs / 1000)
  } catch {
    // Web Audio nicht verfügbar — kein Ton
  }
}

function beepFinish() {
  beep(1047, 200, 0.3)
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useWorkoutPlayer(workout: Workout) {
  const parsed = workout.exercises.map(parseExercise)
  const totalRounds = workout.rounds ?? 1
  const restBetweenRounds = workout.restBetweenRounds ?? 60

  const [state, setState] = useState<WorkoutPlayerState>({
    phase: 'idle',
    exerciseIndex: 0,
    setIndex: 0,
    currentRound: 1,
    totalRounds,
    timeLeft: 0,
    totalSeconds: 0,
    isPaused: false,
    elapsedSeconds: 0,
    soundEnabled: true,
    showSuccess: false,
  })

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const elapsedIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const soundRef = useRef(true)

  useEffect(() => {
    soundRef.current = state.soundEnabled
  }, [state.soundEnabled])

  // ── Elapsed Timer ──
  useEffect(() => {
    if (state.phase === 'idle' || state.phase === 'complete') {
      if (elapsedIntervalRef.current) clearInterval(elapsedIntervalRef.current)
      return
    }
    if (state.isPaused) {
      if (elapsedIntervalRef.current) clearInterval(elapsedIntervalRef.current)
      return
    }
    elapsedIntervalRef.current = setInterval(() => {
      setState(s => ({ ...s, elapsedSeconds: s.elapsedSeconds + 1 }))
    }, 1000)
    return () => {
      if (elapsedIntervalRef.current) clearInterval(elapsedIntervalRef.current)
    }
  }, [state.phase, state.isPaused])

  // ── Main Countdown Timer ──
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    if (state.phase === 'idle' || state.phase === 'complete') return
    if (state.phase === 'exercise' && parsed[state.exerciseIndex]?.type === 'reps') return
    if (state.isPaused) return

    intervalRef.current = setInterval(() => {
      setState(prev => {
        const next = prev.timeLeft - 1

        // Beep bei 3, 2, 1
        if (next <= 3 && next > 0 && soundRef.current) {
          beep(660, 100)
        }

        if (next <= 0) {
          if (soundRef.current) beepFinish()
          return { ...prev, timeLeft: 0, showSuccess: true }
        }
        return { ...prev, timeLeft: next }
      })
    }, 1000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [state.phase, state.isPaused, state.exerciseIndex, state.setIndex, parsed])

  // ── Erfolgs-Animation → Weiter ──
  useEffect(() => {
    if (!state.showSuccess) return
    const t = setTimeout(() => {
      setState(prev => {
        if (!prev.showSuccess) return prev
        return advanceState(prev, parsed, restBetweenRounds)
      })
    }, 600)
    return () => clearTimeout(t)
  }, [state.showSuccess, parsed, restBetweenRounds])

  // ── Page Visibility API: Timer beim Tab-Wechsel korrigieren ──
  const lastVisibleRef = useRef<number | null>(null)
  useEffect(() => {
    function onVisibilityChange() {
      if (document.hidden) {
        lastVisibleRef.current = Date.now()
      } else if (lastVisibleRef.current !== null) {
        const elapsed = Math.round((Date.now() - lastVisibleRef.current) / 1000)
        lastVisibleRef.current = null
        setState(prev => {
          if (prev.isPaused || prev.phase === 'idle' || prev.phase === 'complete') return prev
          if (prev.phase === 'exercise' && parsed[prev.exerciseIndex]?.type === 'reps') return prev
          const newTimeLeft = Math.max(0, prev.timeLeft - elapsed)
          const newElapsed = prev.elapsedSeconds + elapsed
          if (newTimeLeft <= 0) {
            return { ...advanceState({ ...prev, elapsedSeconds: newElapsed }, parsed, restBetweenRounds), showSuccess: true }
          }
          return { ...prev, timeLeft: newTimeLeft, elapsedSeconds: newElapsed }
        })
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [parsed, restBetweenRounds])

  // ─── Aktionen ─────────────────────────────────────────────────────────────

  const start = useCallback(() => {
    const first = parsed[0]
    if (!first) return
    setState({
      phase: 'exercise',
      exerciseIndex: 0,
      setIndex: 0,
      currentRound: 1,
      totalRounds,
      timeLeft: first.type === 'time' ? first.totalSeconds : 0,
      totalSeconds: first.type === 'time' ? first.totalSeconds : 0,
      isPaused: false,
      elapsedSeconds: 0,
      soundEnabled: soundRef.current,
      showSuccess: false,
    })
  }, [parsed, totalRounds])

  const togglePause = useCallback(() => {
    setState(prev => ({ ...prev, isPaused: !prev.isPaused }))
  }, [])

  const completeSet = useCallback(() => {
    if (soundRef.current) beepFinish()
    setState(prev => ({ ...prev, showSuccess: true }))
  }, [])

  const skipExercise = useCallback(() => {
    setState(prev => {
      const nextIdx = prev.exerciseIndex + 1
      if (nextIdx < parsed.length) {
        const next = parsed[nextIdx]
        return {
          ...prev,
          phase: 'exercise',
          exerciseIndex: nextIdx,
          setIndex: 0,
          timeLeft: next.type === 'time' ? next.totalSeconds : 0,
          totalSeconds: next.type === 'time' ? next.totalSeconds : 0,
          showSuccess: false,
          isPaused: false,
        }
      }
      // End of exercises — handle rounds
      const nextRound = prev.currentRound + 1
      if (nextRound <= prev.totalRounds) {
        return {
          ...prev,
          phase: 'roundRest',
          currentRound: nextRound,
          exerciseIndex: 0,
          setIndex: 0,
          timeLeft: restBetweenRounds,
          totalSeconds: restBetweenRounds,
          showSuccess: false,
          isPaused: false,
        }
      }
      return { ...prev, phase: 'complete', showSuccess: false }
    })
  }, [parsed, restBetweenRounds])

  const skipRoundRest = useCallback(() => {
    setState(prev => {
      const first = parsed[0]
      return {
        ...prev,
        phase: 'exercise',
        exerciseIndex: 0,
        setIndex: 0,
        timeLeft: first.type === 'time' ? first.totalSeconds : 0,
        totalSeconds: first.type === 'time' ? first.totalSeconds : 0,
        showSuccess: false,
        isPaused: false,
      }
    })
  }, [parsed])

  const end = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (elapsedIntervalRef.current) clearInterval(elapsedIntervalRef.current)
    setState(prev => ({ ...prev, phase: 'idle', showSuccess: false }))
  }, [])

  const toggleSound = useCallback(() => {
    setState(prev => {
      soundRef.current = !prev.soundEnabled
      return { ...prev, soundEnabled: !prev.soundEnabled }
    })
  }, [])

  return {
    state,
    parsed,
    actions: { start, togglePause, completeSet, skipExercise, skipRoundRest, end, toggleSound },
  }
}

// ─── State-Übergang nach Timer-Ende oder Set-Abschluss ────────────────────────

function advanceState(
  prev: WorkoutPlayerState,
  parsed: ParsedExercise[],
  restBetweenRounds: number,
): WorkoutPlayerState {
  // Coming from roundRest → start first exercise of current (next) round
  if (prev.phase === 'roundRest') {
    const first = parsed[0]
    return {
      ...prev,
      phase: 'exercise',
      exerciseIndex: 0,
      setIndex: 0,
      timeLeft: first.type === 'time' ? first.totalSeconds : 0,
      totalSeconds: first.type === 'time' ? first.totalSeconds : 0,
      showSuccess: false,
      isPaused: false,
    }
  }

  const current = parsed[prev.exerciseIndex]
  if (!current) return { ...prev, phase: 'complete', showSuccess: false }

  // Noch mehr Sets?
  const nextSetIndex = prev.setIndex + 1
  if (nextSetIndex < current.sets) {
    return {
      ...prev,
      phase: 'rest',
      setIndex: nextSetIndex,
      timeLeft: REST_BETWEEN_SETS,
      totalSeconds: REST_BETWEEN_SETS,
      showSuccess: false,
    }
  }

  // Nächste Übung in dieser Runde
  const nextExerciseIndex = prev.exerciseIndex + 1
  if (nextExerciseIndex < parsed.length) {
    const next = parsed[nextExerciseIndex]
    return {
      ...prev,
      phase: 'exercise',
      exerciseIndex: nextExerciseIndex,
      setIndex: 0,
      timeLeft: next.type === 'time' ? next.totalSeconds : 0,
      totalSeconds: next.type === 'time' ? next.totalSeconds : 0,
      showSuccess: false,
      isPaused: false,
    }
  }

  // Ende der Übungen dieser Runde — nächste Runde?
  const nextRound = prev.currentRound + 1
  if (nextRound <= prev.totalRounds) {
    return {
      ...prev,
      phase: 'roundRest',
      currentRound: nextRound,
      exerciseIndex: 0,
      setIndex: 0,
      timeLeft: restBetweenRounds,
      totalSeconds: restBetweenRounds,
      showSuccess: false,
      isPaused: false,
    }
  }

  // Alle Runden abgeschlossen
  return { ...prev, phase: 'complete', showSuccess: false }
}
