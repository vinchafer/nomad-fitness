'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, loading, signOut } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/workouts', label: 'Workouts' },
    { href: '/workouts?section=kategorien', label: 'Kategorien' },
    { href: '/about', label: 'Über uns' },
  ]

  const displayName = user?.displayName?.split(' ')[0] ?? user?.email?.split('@')[0] ?? ''

  return (
    <header
      className={`sticky top-0 z-50 bg-cream transition-shadow duration-300 ${
        scrolled ? 'shadow-nav' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="font-bold text-xl tracking-tight text-dark group-hover:text-sage transition-colors duration-200">
              NOMAD FITNESS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block mb-1 group-hover:scale-125 transition-transform duration-200" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted hover:text-dark font-medium text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sage group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {!loading && (
              user ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-dark">{displayName}</span>
                  <button
                    onClick={() => signOut()}
                    className="text-sm text-muted hover:text-dark font-medium transition-colors duration-200"
                  >
                    Abmelden
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link
                    href="/auth"
                    className="text-sm font-medium text-muted hover:text-dark transition-colors duration-200"
                  >
                    Anmelden
                  </Link>
                  <Link
                    href="/workouts"
                    className="bg-sage text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-sage-dark transition-colors duration-200"
                  >
                    Jetzt starten
                  </Link>
                </div>
              )
            )}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-dark hover:bg-border transition-colors duration-200"
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">{menuOpen ? 'Menü schließen' : 'Menü öffnen'}</span>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current rounded transition-transform duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current rounded transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current rounded transition-transform duration-300 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-card border-t border-border px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 text-dark font-medium rounded-lg hover:bg-cream transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-border mt-2">
            {!loading && (
              user ? (
                <div className="space-y-1">
                  <p className="px-3 py-2 text-sm text-muted">Angemeldet als <strong className="text-dark">{displayName}</strong></p>
                  <button
                    onClick={() => { signOut(); setMenuOpen(false) }}
                    className="block w-full text-left px-3 py-2.5 text-dark font-medium rounded-lg hover:bg-cream transition-colors duration-200"
                  >
                    Abmelden
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link
                    href="/auth"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-center border border-sage text-sage px-4 py-2.5 rounded-lg font-semibold hover:bg-sage-light transition-colors duration-200"
                  >
                    Anmelden
                  </Link>
                  <Link
                    href="/workouts"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-center bg-sage text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-sage-dark transition-colors duration-200"
                  >
                    Jetzt starten
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
