'use client'

import { useEffect, useRef, useState } from 'react'
import { exerciseImageMap, type ExerciseIllustration } from './illustrations/exerciseImageMap'
import { GenericMale } from './illustrations/GenericMale'

const LABELS = ['Start', 'Bewegung', 'Ziel'] as const

interface ApiExerciseData {
  gifUrl?: string
  videoUrl?: string
  images?: string[]
  instructions?: string[]
  targetMuscles?: string[]
}

interface ExerciseImagesProps {
  exerciseName: string
  muscles?: string[]
  description?: string
  commonMistakes?: string[]
  tip?: string
}

export default function ExerciseImages({ exerciseName, muscles, description, commonMistakes, tip }: ExerciseImagesProps) {
  const [apiData, setApiData] = useState<ApiExerciseData | null | undefined>(undefined)
  const [accordionOpen, setAccordionOpen] = useState(false)
  const entry: ExerciseIllustration = exerciseImageMap[exerciseName] ?? { character: 'male' as const, ...GenericMale }
  const frames = [entry.start, entry.mid, entry.end]
  const [activeDot, setActiveDot] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const FRAME_STEP = 152

  useEffect(() => {
    // Load exerciseData.json from public folder
    fetch('/exerciseData.json')
      .then((r) => r.json())
      .then((data: Record<string, ApiExerciseData | null>) => {
        setApiData(data[exerciseName] ?? null)
      })
      .catch(() => setApiData(null))
  }, [exerciseName])

  function onScroll() {
    const el = scrollRef.current
    if (!el) return
    const idx = Math.min(2, Math.round(el.scrollLeft / FRAME_STEP))
    setActiveDot(idx)
  }

  function scrollToFrame(i: number) {
    scrollRef.current?.scrollTo({ left: i * FRAME_STEP, behavior: 'smooth' })
    setActiveDot(i)
  }

  const hasGif = apiData?.gifUrl
  const hasImages = apiData?.images && apiData.images.length > 0
  const hasInstructions = apiData?.instructions && apiData.instructions.length > 0
  const showApiContent = apiData !== undefined && (hasGif || hasImages)

  return (
    <div className="mt-3 pt-3 border-t border-border/50 space-y-3">
      {/* Muskel-Tags */}
      {muscles && muscles.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {muscles.map((m) => (
            <span
              key={m}
              className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full"
            >
              {m}
            </span>
          ))}
        </div>
      )}

      {/* GIF from API */}
      {hasGif && (
        <div className="flex justify-center">
          <img
            src={apiData!.gifUrl}
            alt={exerciseName}
            loading="lazy"
            className="rounded-xl max-w-xs mx-auto border border-border shadow-sm"
          />
        </div>
      )}

      {/* Two images side by side from API */}
      {!hasGif && hasImages && (
        <div className="flex gap-2 justify-center">
          {apiData!.images!.slice(0, 2).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${exerciseName} ${i + 1}`}
              loading="lazy"
              className="rounded-xl w-1/2 max-w-[160px] border border-border shadow-sm object-cover"
            />
          ))}
        </div>
      )}

      {/* SVG Fallback — only show if no API content */}
      {!showApiContent && (
        <>
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {frames.map((svg, i) => (
              <div key={i} className="snap-start flex-none" style={{ width: 144 }}>
                <div
                  className="relative rounded-xl overflow-hidden border border-border bg-cream"
                  style={{ paddingBottom: '75%' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-0.5">
                    {svg}
                  </div>
                </div>
                <p className="text-xs text-muted text-center mt-1.5 font-medium tracking-wide">
                  {LABELS[i]}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-1.5">
            {LABELS.map((label, i) => (
              <button
                key={i}
                onClick={() => scrollToFrame(i)}
                aria-label={label}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === activeDot ? 'w-4 bg-sage' : 'w-1.5 bg-border'
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* Schritt-für-Schritt Accordion */}
      {(description || (hasInstructions && apiData!.instructions!.length > 0) || commonMistakes?.length || tip) && (
        <div className="border border-border rounded-xl overflow-hidden">
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-cream hover:bg-border/30 transition-colors duration-200 text-left"
          >
            <span className="text-xs font-semibold text-dark">Schritt-für-Schritt Anleitung</span>
            <svg
              className={`w-4 h-4 text-muted transition-transform duration-200 ${accordionOpen ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {accordionOpen && (
            <div className="px-4 py-3 space-y-3 bg-white border-t border-border">
              {/* Description from workout data */}
              {description && (
                <p className="text-xs text-muted leading-relaxed">{description}</p>
              )}

              {/* API instructions */}
              {hasInstructions && apiData!.instructions!.length > 0 && (
                <ol className="space-y-1.5">
                  {apiData!.instructions!.map((step, i) => (
                    <li key={i} className="flex gap-2 text-xs text-muted">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-sage-light text-sage-dark text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              )}

              {/* Common mistakes */}
              {commonMistakes && commonMistakes.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-terracotta mb-1.5">Häufige Fehler</p>
                  <ul className="space-y-1">
                    {commonMistakes.map((m, i) => (
                      <li key={i} className="flex gap-1.5 text-xs text-muted">
                        <span className="text-terracotta shrink-0">×</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tip */}
              {tip && (
                <div className="bg-sage-light rounded-lg px-3 py-2">
                  <p className="text-xs text-sage-dark leading-relaxed">
                    <span className="font-semibold">Anfänger-Tipp:</span> {tip}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
