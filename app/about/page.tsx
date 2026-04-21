import Link from 'next/link'

export const metadata = {
  title: 'Über uns — Nomad Fitness',
  description: 'Nomad Fitness — kostenlose Workouts für Menschen, die überall auf der Welt trainieren wollen.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-dark text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-semibold uppercase tracking-widest mb-3">Über uns</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Sport ohne Grenzen.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Kein Equipment. Kein Gym. Keine Ausreden.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* Mission */}
        <section>
          <h2 className="text-2xl font-extrabold text-dark mb-4">Unsere Mission</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Nomad Fitness wurde für alle gebaut, die viel unterwegs sind — ob auf Geschäftsreise, im Urlaub
              oder als Dauernomade. Wir glauben: Fitness sollte an keinen Ort gebunden sein.
            </p>
            <p>
              Unsere Workouts brauchen kein Equipment, keinen Gym-Vertrag und kein großes Budget.
              Nur du, ein bisschen Platz — und die Bereitschaft, anzufangen.
            </p>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-2xl font-extrabold text-dark mb-6">Was uns wichtig ist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: '🌍',
                title: 'Überall trainierbar',
                text: 'Hotelzimmer, Airbnb, Park — alle Workouts funktionieren mit minimalem Platz.',
              },
              {
                icon: '🆓',
                title: 'Für immer kostenlos',
                text: 'Kein Abo, keine Paywall für Inhalte. Fitness ist ein Grundrecht, kein Luxus.',
              },
              {
                icon: '🎯',
                title: 'Wissenschaftlich fundiert',
                text: 'Jedes Workout ist strukturiert und auf echte Trainingsprinzipien aufgebaut.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl border border-border p-5 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-2xl font-extrabold text-dark mb-4">Was wir anbieten</h2>
          <div className="space-y-3 text-muted leading-relaxed">
            <p>
              <span className="font-semibold text-dark">Pilates</span> — für Körperkontrolle,
              Stabilität und ein starkes Core. Perfekt für Anfänger und zur Regeneration.
            </p>
            <p>
              <span className="font-semibold text-dark">Ganzkörper-Kraft</span> — funktionale
              Bodyweight-Übungen, die Muskeln aufbauen und den Körper fordern — ganz ohne Gewichte.
            </p>
            <p>
              <span className="font-semibold text-dark">Yoga</span> — für Flexibilität, Atemkontrolle
              und mentale Ruhe. Ob morgens zum Wachwerden oder abends zum Runterkommen.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center pt-4">
          <Link
            href="/workouts"
            className="inline-flex items-center gap-2 bg-sage text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-sage/90 transition-colors shadow-sm"
          >
            Alle Workouts ansehen →
          </Link>
        </section>
      </div>
    </div>
  )
}
