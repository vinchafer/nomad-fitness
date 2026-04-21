import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-1">
              <span className="font-bold text-lg tracking-tight">NOMAD FITNESS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block mb-1" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">Sport ohne Grenzen.</p>
            <p className="text-xs text-gray-500 italic">
              Kein Equipment. Kein Gym. Keine Ausreden.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-widest text-gray-400">
              Kategorien
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/workouts?category=pilates"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Pilates
                </Link>
              </li>
              <li>
                <Link
                  href="/workouts?category=strength"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Ganzkörper-Kraft
                </Link>
              </li>
              <li>
                <Link
                  href="/workouts?category=yoga"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Yoga
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-widest text-gray-400">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/workouts"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Alle Workouts
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Über uns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Nomad Fitness. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-gray-600">
            Kostenlose Workouts für Reisende weltweit.
          </p>
        </div>
      </div>
    </footer>
  )
}
