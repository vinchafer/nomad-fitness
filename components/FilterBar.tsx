'use client'

import { Category, Level, DurationFilter } from '@/lib/types'

interface FilterBarProps {
  selectedCategory: Category | 'all'
  selectedDuration: DurationFilter
  selectedLevel: Level | 'all'
  searchQuery: string
  onCategoryChange: (category: Category | 'all') => void
  onDurationChange: (duration: DurationFilter) => void
  onLevelChange: (level: Level | 'all') => void
  onSearchChange: (query: string) => void
}

const categoryOptions: { value: Category | 'all'; label: string }[] = [
  { value: 'all', label: 'Alle' },
  { value: 'pilates', label: 'Pilates' },
  { value: 'strength', label: 'Kraft' },
  { value: 'yoga', label: 'Yoga' },
]

const durationOptions: { value: DurationFilter; label: string }[] = [
  { value: 'all', label: 'Alle' },
  { value: 'under15', label: '< 15 Min' },
  { value: '15to30', label: '15–30 Min' },
  { value: 'over30', label: '30+ Min' },
]

const levelOptions: { value: Level | 'all'; label: string }[] = [
  { value: 'all', label: 'Alle' },
  { value: 'Beginner', label: 'Anfänger' },
  { value: 'Intermediate', label: 'Mittel' },
  { value: 'Advanced', label: 'Fortgeschritten' },
]

function TabGroup<T extends string>({
  options,
  value,
  onChange,
  label,
  activeClass,
}: {
  options: { value: T; label: string }[]
  value: T
  onChange: (v: T) => void
  label: string
  activeClass: string
}) {
  return (
    <div>
      <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              value === opt.value
                ? `${activeClass} shadow-sm`
                : 'bg-card text-muted border border-border hover:border-dark/30 hover:text-dark'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function FilterBar({
  selectedCategory,
  selectedDuration,
  selectedLevel,
  searchQuery,
  onCategoryChange,
  onDurationChange,
  onLevelChange,
  onSearchChange,
}: FilterBarProps) {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-5">
      {/* Search */}
      <div>
        <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Suche</p>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            aria-label="Workouts durchsuchen"
            placeholder="Workout suchen..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-cream border border-border rounded-lg text-sm text-dark placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all duration-200"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-dark transition-colors duration-200"
              aria-label="Suche löschen"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Category filter */}
      <TabGroup
        options={categoryOptions}
        value={selectedCategory}
        onChange={onCategoryChange}
        label="Kategorie"
        activeClass="bg-dark text-white border border-dark"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Duration filter */}
        <TabGroup
          options={durationOptions}
          value={selectedDuration}
          onChange={onDurationChange}
          label="Dauer"
          activeClass="bg-sage text-white border border-sage"
        />

        {/* Level filter */}
        <TabGroup
          options={levelOptions}
          value={selectedLevel}
          onChange={onLevelChange}
          label="Level"
          activeClass="bg-terracotta text-white border border-terracotta"
        />
      </div>
    </div>
  )
}
