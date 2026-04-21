export type Category = 'pilates' | 'strength' | 'yoga'
export type Level = 'Beginner' | 'Intermediate' | 'Advanced'
export type DurationFilter = 'all' | 'under15' | '15to30' | 'over30'

export interface Exercise {
  name: string
  duration?: string   // e.g. "30 sec" or "45 sec"
  reps?: string       // e.g. "10-12 reps" or "3 sets of 10"
  note?: string       // optional tip (legacy)
  description?: string        // 2-3 sentences, precise execution instructions
  commonMistakes?: string[]   // 1-2 common mistakes to avoid
  tip?: string                // beginner-friendly tip
  muscles?: string[]          // muscle groups worked
}

export interface Workout {
  id: string
  title: string
  category: Category
  level: Level
  durationMinutes: number
  rounds: number              // number of rounds to complete
  restBetweenRounds: number   // seconds of rest between rounds
  shortDescription: string
  spaceRequired: string       // e.g. "Nur Matte" or "Nur Boden"
  exercises: Exercise[]
  youtubeId?: string          // YouTube video ID for embed
  // AI_VIDEO_SLOT: Replace youtubeId with aiVideoUrl when AI videos are ready
  tags: string[]
}
