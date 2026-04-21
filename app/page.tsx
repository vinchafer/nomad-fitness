import Link from 'next/link'
import CategoryCard from '@/components/CategoryCard'
import WorkoutCard from '@/components/WorkoutCard'
import workoutsData from '@/data/workouts.json'
import { Workout } from '@/lib/types'

const workouts = workoutsData as Workout[]

const pilatesCount = workouts.filter((w) => w.category === 'pilates').length
const strengthCount = workouts.filter((w) => w.category === 'strength').length
const yogaCount = workouts.filter((w) => w.category === 'yoga').length

const featuredWorkouts = workouts.filter((w) => w.level === 'Beginner').slice(0, 3)

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream bg-hero-pattern">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            {/* Pre-heading badge */}
            <div className="inline-flex items-center gap-2 bg-sage-light text-sage-dark text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-sage/20">
              <span className="w-1.5 h-1.5 bg-sage rounded-full animate-pulse" />
              100% kostenlos · Kein Equipment · Überall trainieren
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark leading-[1.1] tracking-tight mb-6">
              Sport.{' '}
              <span className="text-sage">Überall.</span>{' '}
              <span className="text-terracotta">Kostenlos.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-xl">
              Trainiere im Hotelzimmer, am Strand oder im Park — ohne ein einziges Gerät.
              Pilates, Yoga und Krafttraining für Reisende, die ihren Körper nicht vernachlässigen möchten.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/workouts"
                className="inline-flex items-center justify-center gap-2 bg-sage text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-sage-dark transition-all duration-200 shadow-lg shadow-sage/20 hover:shadow-sage/30 hover:-translate-y-0.5"
              >
                Workouts entdecken
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/workouts"
                className="inline-flex items-center justify-center gap-2 bg-card text-dark px-8 py-4 rounded-xl font-semibold text-base border border-border hover:border-dark/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                Kategorien ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────── */}
      <section className="bg-dark text-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-gray-700">
            {[
              { number: `${workouts.length}`, label: 'Workouts' },
              { number: '3', label: 'Kategorien' },
              { number: '0', label: 'Equipment nötig' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center py-2 px-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-terracotta">{stat.number}</span>
                <span className="text-sm text-gray-400 mt-1 text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ──────────────────────────────────────── */}
      <section id="kategorien" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-3">
              Wähle deine Kategorie
            </h2>
            <p className="text-muted text-base max-w-xl mx-auto">
              Ob sanfte Dehnung, Kraft oder Achtsamkeit — für jeden Reisestil gibt es das passende Workout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <CategoryCard
              category="pilates"
              icon="🧘"
              name="Pilates"
              description="Tiefenmuskulatur und Körperbewusstsein stärken. Ideal für das Hotelzimmer — nur Matte nötig."
              count={pilatesCount}
              href="/workouts?category=pilates"
            />
            <CategoryCard
              category="strength"
              icon="💪"
              name="Ganzkörper-Kraft"
              description="Effektives Bodyweight-Training ohne Equipment. Von 10 Minuten bis zur 40-Minuten-Session."
              count={strengthCount}
              href="/workouts?category=strength"
            />
            <CategoryCard
              category="yoga"
              icon="🌿"
              name="Yoga"
              description="Flow, Flexibilität und innere Ruhe. Perfekt nach langen Reisetagen im Flugzeug oder Auto."
              count={yogaCount}
              href="/workouts?category=yoga"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURED WORKOUTS ───────────────────────────────── */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-2">
                Empfohlen für Einsteiger
              </h2>
              <p className="text-muted text-base">Perfekte Startpunkte für dein erstes Nomad-Workout.</p>
            </div>
            <Link
              href="/workouts"
              className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-sage hover:text-sage-dark transition-colors duration-200"
            >
              Alle Workouts
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredWorkouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NOMAD FITNESS ───────────────────────────────── */}
      <section id="about" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-3">
              Warum Nomad Fitness?
            </h2>
            <p className="text-muted text-base max-w-xl mx-auto">
              Wir haben Nomad Fitness für alle gebaut, die auch unterwegs nicht auf Sport verzichten wollen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '📍',
                title: 'Überall nutzbar',
                desc: 'Hotelzimmer, Strand, Park oder Airbnb — du brauchst nur dich selbst.',
              },
              {
                icon: '🆓',
                title: '100% kostenlos',
                desc: 'Keine Mitgliedschaft, kein Abo, keine versteckten Kosten. Für immer gratis.',
              },
              {
                icon: '⏱️',
                title: '10 bis 40 Minuten',
                desc: 'Für jeden Zeitplan etwas dabei — von der 10-Minuten-Aktivierung bis zum Deep Stretch.',
              },
              {
                icon: '🌍',
                title: 'Für alle Levels',
                desc: 'Anfänger, Fortgeschrittene und Profis finden je passende Workouts.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl border border-border p-6 text-center shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-dark mb-2">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────── */}
      <section className="bg-terracotta py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Kein Equipment. Kein Gym. Keine Ausreden.
          </h2>
          <p className="text-terracotta-light text-lg mb-8 opacity-90">
            Starte noch heute mit deinem ersten Workout — kostenlos und überall auf der Welt.
          </p>
          <Link
            href="/workouts"
            className="inline-flex items-center justify-center gap-2 bg-white text-terracotta px-8 py-4 rounded-xl font-bold text-base hover:bg-cream transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Jetzt trainieren
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
