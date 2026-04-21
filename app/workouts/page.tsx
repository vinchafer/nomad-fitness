'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import WorkoutCard from '@/components/WorkoutCard'
import FilterBar from '@/components/FilterBar'
import workoutsData from '@/data/workouts.json'
import { Workout, Category, Level, DurationFilter } from '@/lib/types'
import { useAuth } from '@/lib/auth-context'

const allWorkouts = workoutsData as Workout[]

function UnlockCard() {
  return (
    <div className="col-span-full bg-gradient-to-r from-sage/10 to-sage/5 border-2 border-sage/30 border-dashed rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
      <div className="text-3xl shrink-0">🔓</div>
      <div className="flex-1">
        <p className="font-bold text-dark mb-1">Alle Workouts freischalten — kostenlos & für immer gratis.</p>
        <p className="text-sm text-muted">Sieh auch welche Workouts du bereits gemacht hast.</p>
      </div>
      <Link
        href="/auth"
        className="shrink-0 bg-sage text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-sage-dark transition-colors duration-200 whitespace-nowrap"
      >
        Kostenlos freischalten
      </Link>
    </div>
  )
}

function LockedWorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link href="/auth" className="block group">
      <div className="relative bg-card rounded-2xl border border-border shadow-sm overflow-hidden h-full flex flex-col opacity-60">
        {/* Lock overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-cream/60 backdrop-blur-[1px]">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 bg-dark/10 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-muted bg-white px-3 py-1 rounded-full border border-border shadow-sm">
              Kostenlos freischalten
            </span>
          </div>
        </div>

        {/* Card content (blurred) */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="h-4 bg-muted/20 rounded w-1/3 mb-3" />
          <div className="h-6 bg-muted/20 rounded w-3/4 mb-2" />
          <div className="h-4 bg-muted/20 rounded w-full mb-1" />
          <div className="h-4 bg-muted/20 rounded w-2/3" />
        </div>
      </div>
    </Link>
  )
}

function WorkoutsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()

  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>(
    (searchParams.get('category') as Category | null) ?? 'all'
  )
  const [selectedDuration, setSelectedDuration] = useState<DurationFilter>(
    (searchParams.get('duration') as DurationFilter | null) ?? 'all'
  )
  const [selectedLevel, setSelectedLevel] = useState<Level | 'all'>(
    (searchParams.get('level') as Level | null) ?? 'all'
  )
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') ?? '')

  useEffect(() => {
    const params = new URLSearchParams()
    if (selectedCategory !== 'all') params.set('category', selectedCategory)
    if (selectedDuration !== 'all') params.set('duration', selectedDuration)
    if (selectedLevel !== 'all') params.set('level', selectedLevel)
    if (searchQuery.trim()) params.set('q', searchQuery.trim())
    const qs = params.toString()
    router.replace(qs ? `?${qs}` : '/workouts', { scroll: false })
  }, [selectedCategory, selectedDuration, selectedLevel, searchQuery, router])

  const filteredWorkouts = useMemo(() => {
    return allWorkouts.filter((workout) => {
      if (selectedCategory !== 'all' && workout.category !== selectedCategory) return false
      if (selectedDuration === 'under15' && workout.durationMinutes >= 15) return false
      if (selectedDuration === '15to30' && (workout.durationMinutes < 15 || workout.durationMinutes > 30)) return false
      if (selectedDuration === 'over30' && workout.durationMinutes <= 30) return false
      if (selectedLevel !== 'all' && workout.level !== selectedLevel) return false
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const inTitle = workout.title.toLowerCase().includes(q)
        const inDescription = workout.shortDescription.toLowerCase().includes(q)
        const inTags = workout.tags.some((tag) => tag.toLowerCase().includes(q))
        const inExercises = workout.exercises.some((ex) => ex.name.toLowerCase().includes(q))
        if (!inTitle && !inDescription && !inTags && !inExercises) return false
      }
      return true
    })
  }, [selectedCategory, selectedDuration, selectedLevel, searchQuery])

  const activeFilterCount = [
    selectedCategory !== 'all',
    selectedDuration !== 'all',
    selectedLevel !== 'all',
    searchQuery.trim() !== '',
  ].filter(Boolean).length

  const handleReset = () => {
    setSelectedCategory('all')
    setSelectedDuration('all')
    setSelectedLevel('all')
    setSearchQuery('')
  }

  // Build the render list with paywall logic:
  // - If not logged in: first 3 visible, then unlock card, then rest locked
  // - If logged in: all visible
  const isFiltered = activeFilterCount > 0
  const renderItems = useMemo(() => {
    if (user || isFiltered) {
      // When filtering, show all results normally (paywall only on browse view)
      return filteredWorkouts.map((w) => ({ type: 'workout' as const, workout: w, locked: false }))
    }

    // No filters, not logged in: first 3 free, rest locked with unlock card after index 2
    const items: Array<
      | { type: 'workout'; workout: Workout; locked: false }
      | { type: 'workout'; workout: Workout; locked: true }
      | { type: 'unlock' }
    > = []

    filteredWorkouts.forEach((w, idx) => {
      if (idx === 3) {
        items.push({ type: 'unlock' })
      }
      items.push({ type: 'workout', workout: w, locked: idx >= 3 })
    })
    return items
  }, [filteredWorkouts, user, isFiltered])

  return (
    <div className="min-h-screen bg-cream">
      {/* Page header */}
      <div className="bg-dark text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
            Alle Workouts
          </h1>
          <p className="text-gray-400 text-base">
            {allWorkouts.length} Workouts — ohne Equipment, überall auf der Welt.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <aside className="lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-24">
              <FilterBar
                selectedCategory={selectedCategory}
                selectedDuration={selectedDuration}
                selectedLevel={selectedLevel}
                searchQuery={searchQuery}
                onCategoryChange={setSelectedCategory}
                onDurationChange={setSelectedDuration}
                onLevelChange={setSelectedLevel}
                onSearchChange={setSearchQuery}
              />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-muted">
                <span className="font-semibold text-dark">{filteredWorkouts.length}</span>{' '}
                {filteredWorkouts.length === 1 ? 'Workout gefunden' : 'Workouts gefunden'}
              </p>
              {activeFilterCount > 0 && (
                <button
                  onClick={handleReset}
                  className="text-sm text-terracotta hover:text-terracotta-dark font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  <svg className="w-3.5 h-3.5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Filter zurücksetzen ({activeFilterCount})
                </button>
              )}
            </div>

            {filteredWorkouts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {renderItems.map((item, idx) => {
                  if (item.type === 'unlock') {
                    return <UnlockCard key="unlock" />
                  }
                  if (item.locked) {
                    return <LockedWorkoutCard key={item.workout.id} workout={item.workout} />
                  }
                  return <WorkoutCard key={item.workout.id} workout={item.workout} />
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-20 px-4">
                <div className="w-20 h-20 bg-card rounded-2xl border border-border flex items-center justify-center text-4xl mb-5 shadow-card">
                  🔍
                </div>
                <h3 className="font-bold text-dark text-lg mb-2">Keine Workouts gefunden</h3>
                <p className="text-muted text-sm mb-6 max-w-xs">
                  Mit deinen aktuellen Filtern gibt es keine Treffer. Passe die Filter an oder setze sie zurück.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-sage text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-sage-dark transition-colors duration-200"
                >
                  Filter zurücksetzen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WorkoutsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-muted">Lade Workouts...</div>
      </div>
    }>
      <WorkoutsContent />
    </Suspense>
  )
}
