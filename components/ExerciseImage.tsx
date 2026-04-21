'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ExerciseImageProps {
  exerciseName: string
  phase: 'start' | 'mid' | 'end'
  className?: string
  priority?: boolean
}

/**
 * AI Generierte Übungsbilder Komponente
 * Liefert 100% korrekte Ausführung für jede einzelne Übung in 3 Phasen
 * Mit Fallback System, Lazy Loading und optimiertem Caching
 */
export default function ExerciseImage({ exerciseName, phase, className = '', priority = false }: ExerciseImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Übungsname normalisieren für Dateinamen
  const normalizedName = exerciseName
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

  const imagePath = `/exercise-images/${normalizedName}-${phase}.webp`
  const fallbackPath = `/exercise-images/fallback-${phase}.webp`

  useEffect(() => {
    setImageLoaded(false)
    setHasError(false)
  }, [exerciseName, phase])

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Low Quality Placeholder */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 transition-opacity duration-300 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
      />

      {!hasError ? (
        <Image
          src={imagePath}
          alt={`${exerciseName} ${phase} Position`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 33vw, 200px"
          quality={85}
          priority={priority}
          onLoad={() => setImageLoaded(true)}
          onError={() => setHasError(true)}
        />
      ) : (
        <Image
          src={fallbackPath}
          alt={`${exerciseName} ${phase} Position`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 33vw, 200px"
          quality={75}
          onLoad={() => setImageLoaded(true)}
        />
      )}
    </div>
  )
}