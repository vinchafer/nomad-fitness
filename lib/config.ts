import { Category, Level } from './types'

export const categoryConfig: Record<
  Category,
  { label: string; bg: string; text: string; dot: string; heroBg: string }
> = {
  pilates: {
    label: 'Pilates',
    bg: 'bg-sage-light',
    text: 'text-sage-dark',
    dot: 'bg-sage',
    heroBg: 'from-sage/10 to-cream',
  },
  strength: {
    label: 'Kraft',
    bg: 'bg-terracotta-light',
    text: 'text-terracotta-dark',
    dot: 'bg-terracotta',
    heroBg: 'from-terracotta/10 to-cream',
  },
  yoga: {
    label: 'Yoga',
    bg: 'bg-yoga-light',
    text: 'text-yoga-dark',
    dot: 'bg-yoga-blue',
    heroBg: 'from-yoga-blue/10 to-cream',
  },
}

export const levelConfig: Record<Level, { label: string; bg: string; text: string }> = {
  Beginner: { label: 'Anfänger', bg: 'bg-green-50', text: 'text-green-700' },
  Intermediate: { label: 'Mittel', bg: 'bg-amber-50', text: 'text-amber-700' },
  Advanced: { label: 'Fortgeschritten', bg: 'bg-red-50', text: 'text-red-700' },
}
