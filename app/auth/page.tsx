'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'

export default function AuthPage() {
  const [tab, setTab] = useState<'login' | 'register'>('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const { signIn, signUp } = useAuth()
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    if (tab === 'login') {
      const { error } = await signIn(email, password)
      if (error) {
        setError('E-Mail oder Passwort falsch. Bitte erneut versuchen.')
      } else {
        router.push('/workouts')
      }
    } else {
      const { error } = await signUp(name, email, password)
      if (error) {
        setError(error)
      } else {
        router.push('/workouts')
      }
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="bg-card rounded-2xl border border-border p-8 shadow-card max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-flex items-center gap-1 group">
            <span className="font-bold text-xl tracking-tight text-dark">NOMAD FITNESS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block mb-1" />
          </Link>
        </div>

        {/* Tab Switch */}
        <div className="flex bg-cream rounded-xl p-1 mb-6 border border-border">
          <button
            onClick={() => { setTab('login'); setError(null) }}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
              tab === 'login' ? 'bg-white shadow-sm text-dark' : 'text-muted hover:text-dark'
            }`}
          >
            Anmelden
          </button>
          <button
            onClick={() => { setTab('register'); setError(null) }}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
              tab === 'register' ? 'bg-white shadow-sm text-dark' : 'text-muted hover:text-dark'
            }`}
          >
            Registrieren
          </button>
        </div>

        {tab === 'register' && (
          <div className="bg-sage-light rounded-xl p-4 mb-5 border border-sage/20">
            <p className="text-sage-dark text-sm leading-relaxed">
              Alles bleibt kostenlos — für immer. Wir informieren dich gelegentlich über neue Workouts per Newsletter.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {tab === 'register' && (
            <div>
              <label className="block text-sm font-medium text-dark mb-1.5">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Dein Name"
                className="w-full px-4 py-2.5 bg-cream border border-border rounded-xl text-sm text-dark placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors duration-200"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-dark mb-1.5">E-Mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="deine@email.com"
              className="w-full px-4 py-2.5 bg-cream border border-border rounded-xl text-sm text-dark placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark mb-1.5">Passwort</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              placeholder="Mindestens 6 Zeichen"
              className="w-full px-4 py-2.5 bg-cream border border-border rounded-xl text-sm text-dark placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors duration-200"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sage text-white py-3 rounded-xl font-semibold text-sm hover:bg-sage-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading
              ? 'Lädt...'
              : tab === 'login' ? 'Anmelden' : 'Kostenloses Konto erstellen'
            }
          </button>
        </form>

        <p className="text-center text-xs text-muted mt-5">
          {tab === 'login' ? (
            <>Noch kein Konto?{' '}
              <button onClick={() => setTab('register')} className="text-sage hover:underline font-medium">
                Jetzt registrieren
              </button>
            </>
          ) : (
            <>Bereits registriert?{' '}
              <button onClick={() => setTab('login')} className="text-sage hover:underline font-medium">
                Anmelden
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  )
}
