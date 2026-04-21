import Link from 'next/link'
import { notFound } from 'next/navigation'
import workoutsData from '@/data/workouts.json'
import { Workout } from '@/lib/types'
import { categoryConfig, levelConfig } from '@/lib/config'
import ExerciseImages from '@/components/ExerciseImages'
import WorkoutCard from '@/components/WorkoutCard'
import StartWorkoutButton from '@/components/StartWorkoutButton'

const allWorkouts = workoutsData as Workout[]

interface PageProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export function generateStaticParams() {
  return allWorkouts.map((workout) => ({
    id: workout.id,
  }))
}

export function generateMetadata({ params }: PageProps) {
  const workout = allWorkouts.find((w) => w.id === params.id)
  if (!workout) return { title: 'Workout nicht gefunden' }
  return {
    title: `${workout.title} — Nomad Fitness`,
    description: workout.shortDescription,
  }
}

export default function WorkoutDetailPage({ params, searchParams }: PageProps) {
  const workout = allWorkouts.find((w) => w.id === params.id)

  if (!workout) {
    notFound()
  }

  const cat = categoryConfig[workout.category]
  const lvl = levelConfig[workout.level]
  const autoStart = searchParams.start === '1'

  const relatedWorkouts = allWorkouts
    .filter((w) => w.category === workout.category && w.id !== workout.id)
    .slice(0, 3)

  return (
    <article className="min-h-screen bg-cream">
      {/* ── HERO ── */}
      <div className={`bg-gradient-to-b ${cat.heroBg} pt-8 pb-12`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/workouts"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-dark transition-colors duration-200 mb-8 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform duration-200">←</span>
            Alle Workouts
          </Link>

          {/* Tags row */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className={`inline-flex items-center text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${cat.bg} ${cat.text}`}>
              {cat.label}
            </span>
            <span className={`inline-flex items-center text-xs font-medium px-3 py-1 rounded-full ${lvl.bg} ${lvl.text}`}>
              {lvl.label}
            </span>
            {workout.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center text-xs text-muted bg-card px-2.5 py-1 rounded-full border border-border"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight mb-4">
            {workout.title}
          </h1>

          {/* Description */}
          <p className="text-muted text-lg leading-relaxed mb-6 max-w-2xl">
            {workout.shortDescription}
          </p>

          {/* Meta pills */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2 shadow-sm">
              <svg className="w-4 h-4 text-sage" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
              </svg>
              <span className="text-sm font-semibold text-dark">{workout.durationMinutes} Minuten</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2 shadow-sm">
              <svg className="w-4 h-4 text-sage" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span className="text-sm font-semibold text-dark">{workout.spaceRequired}</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2 shadow-sm">
              <svg className="w-4 h-4 text-sage" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-sm font-semibold text-dark">{workout.exercises.length} Übungen</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Exercise list — takes 3/5 on large screens */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold text-dark mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-sage rounded-full inline-block" />
              Übungen
            </h2>

            <ol className="space-y-3">
              {workout.exercises.map((exercise, index) => (
                <li
                  key={index}
                  className="bg-card rounded-xl border border-border p-4 shadow-sm hover:shadow-card transition-shadow duration-200 scroll-mt-24"
                  id={`exercise-${index}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Number */}
                    <span className="shrink-0 w-7 h-7 rounded-full bg-cream border border-border text-xs font-bold text-muted flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="font-semibold text-dark text-sm">{exercise.name}</h3>
                        <div className="flex items-center gap-2">
                          {exercise.reps && (
                            <span className="text-xs font-medium text-terracotta bg-terracotta-light px-2 py-0.5 rounded-full whitespace-nowrap">
                              {exercise.reps}
                            </span>
                          )}
                          {exercise.duration && (
                            <span className="text-xs font-medium text-sage bg-sage-light px-2 py-0.5 rounded-full whitespace-nowrap">
                              {exercise.duration}
                            </span>
                          )}
                        </div>
                      </div>
                      {exercise.note && (
                        <p className="text-xs text-muted mt-1 flex items-start gap-1">
                          <svg className="w-3 h-3 shrink-0 mt-0.5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {exercise.note}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Übungsbilder + Anleitung */}
                  <ExerciseImages
                    exerciseName={exercise.name}
                    muscles={exercise.muscles}
                    description={exercise.description}
                    commonMistakes={exercise.commonMistakes}
                    tip={exercise.tip}
                  />
                </li>
              ))}
            </ol>
          </div>

          {/* Sidebar — takes 2/5 on large screens */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 space-y-4">

              {/* Training starten */}
              <StartWorkoutButton workout={workout} autoStart={autoStart} />

              {/* Quick info card */}
              <div className="bg-card rounded-xl border border-border p-4 space-y-3">
                <h3 className="font-semibold text-dark text-sm">Auf einen Blick</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <dt className="text-muted">Kategorie</dt>
                    <dd className="font-medium text-dark">{cat.label}</dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-muted">Level</dt>
                    <dd className={`font-medium px-2 py-0.5 rounded-full text-xs ${lvl.bg} ${lvl.text}`}>{lvl.label}</dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-muted">Dauer</dt>
                    <dd className="font-medium text-dark">{workout.durationMinutes} Min</dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-muted">Platz</dt>
                    <dd className="font-medium text-dark">{workout.spaceRequired}</dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-muted">Übungen</dt>
                    <dd className="font-medium text-dark">{workout.exercises.length}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* ── RELATED WORKOUTS ── */}
        {relatedWorkouts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-extrabold text-dark mb-6">
              Weitere {cat.label}-Workouts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedWorkouts.map((related) => (
                <WorkoutCard key={related.id} workout={related} />
              ))}
            </div>
          </section>
        )}

        {/* Back to all */}
        <div className="mt-12 text-center">
          <Link
            href="/workouts"
            className="inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-dark/90 transition-colors duration-200"
          >
            ← Alle Workouts ansehen
          </Link>
        </div>
      </div>
    </article>
  )
}
