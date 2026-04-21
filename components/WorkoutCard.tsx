'use client'

import { useRouter } from 'next/navigation'
import { Workout } from '@/lib/types'
import { categoryConfig, levelConfig } from '@/lib/config'

interface WorkoutCardProps {
  workout: Workout
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  const router = useRouter()
  const cat = categoryConfig[workout.category]
  const lvl = levelConfig[workout.level]

  return (
    <div
      className="group relative bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 overflow-hidden h-full flex flex-col cursor-pointer"
      onClick={() => router.push(`/workouts/${workout.id}`)}
      role="article"
    >
      {/* Category bar */}
      <div className={`px-4 py-2 flex items-center gap-2 ${cat.bg}`}>
        <span className={`w-2 h-2 rounded-full ${cat.dot}`} />
        <span className={`text-xs font-semibold uppercase tracking-wider ${cat.text}`}>
          {cat.label}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-dark text-base leading-snug mb-2 group-hover:text-sage transition-colors duration-200">
          {workout.title}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
          {workout.shortDescription}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {/* Duration */}
          <span className="inline-flex items-center gap-1 text-xs text-muted bg-cream px-2.5 py-1 rounded-full border border-border">
            <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
            </svg>
            {workout.durationMinutes} Min
          </span>

          {/* Level — farblich differenziert */}
          <span className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full ${lvl.bg} ${lvl.text}`}>
            {lvl.label}
          </span>

          {/* Space */}
          <span className="inline-flex items-center gap-1 text-xs text-muted bg-cream px-2.5 py-1 rounded-full border border-border">
            <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {workout.spaceRequired}
          </span>
        </div>

        {/* Actions */}
        <div className="mt-4 pt-3 border-t border-border flex items-center justify-between gap-2">
          <span className="text-xs text-muted group-hover:text-sage transition-colors duration-200 flex items-center gap-1">
            Workout ansehen
            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
          </span>
          {/* "Training starten" navigiert direkt mit ?start=1 */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              router.push(`/workouts/${workout.id}?start=1`)
            }}
            className="text-xs font-semibold text-sage bg-sage-light px-3 py-1.5 rounded-lg hover:bg-sage hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            ▶ Starten
          </button>
        </div>
      </div>
    </div>
  )
}
