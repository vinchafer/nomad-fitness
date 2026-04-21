'use client'

import { useState, useEffect } from 'react'
import { Workout } from '@/lib/types'
import WorkoutPlayer from './WorkoutPlayer'

interface StartWorkoutButtonProps {
  workout: Workout
  autoStart?: boolean
}

export default function StartWorkoutButton({ workout, autoStart = false }: StartWorkoutButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Auto-Start wenn von der Karte mit ?start=1 navigiert wurde
  useEffect(() => {
    if (autoStart) setIsOpen(true)
  }, [autoStart])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-sage text-white py-3.5 rounded-xl font-bold text-sm hover:bg-sage/90 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
        </svg>
        Training starten
      </button>

      {isOpen && (
        <WorkoutPlayer
          workout={workout}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
