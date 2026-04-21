import Link from 'next/link'
import { Category } from '@/lib/types'

interface CategoryCardProps {
  category: Category
  icon: string
  name: string
  description: string
  count: number
  href: string
}

const categoryStyles: Record<Category, { bg: string; iconBg: string; badge: string; hover: string }> = {
  pilates: {
    bg: 'border-sage/30 hover:border-sage',
    iconBg: 'bg-sage-light',
    badge: 'bg-sage text-white',
    hover: 'group-hover:text-sage',
  },
  strength: {
    bg: 'border-terracotta/30 hover:border-terracotta',
    iconBg: 'bg-terracotta-light',
    badge: 'bg-terracotta text-white',
    hover: 'group-hover:text-terracotta',
  },
  yoga: {
    bg: 'border-yoga-blue/30 hover:border-yoga-blue',
    iconBg: 'bg-yoga-light',
    badge: 'bg-yoga-blue text-white',
    hover: 'group-hover:text-yoga-blue',
  },
}

export default function CategoryCard({
  category,
  icon,
  name,
  description,
  count,
  href,
}: CategoryCardProps) {
  const styles = categoryStyles[category]

  return (
    <Link href={href} className="group block">
      <div
        className={`bg-card rounded-2xl border-2 transition-all duration-300 shadow-card hover:shadow-card-hover p-6 h-full ${styles.bg}`}
      >
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 ${styles.iconBg}`}>
          {icon}
        </div>

        {/* Content */}
        <div className="space-y-2 mb-4">
          <h3 className={`font-bold text-lg text-dark transition-colors duration-200 ${styles.hover}`}>
            {name}
          </h3>
          <p className="text-muted text-sm leading-relaxed">{description}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${styles.badge}`}>
            {count} Workouts
          </span>
          <span className="text-muted text-sm group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </div>
      </div>
    </Link>
  )
}
