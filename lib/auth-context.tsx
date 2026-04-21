'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut as firebaseSignOut,
} from 'firebase/auth'
import { auth } from './firebase'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signUp: (name: string, email: string, password: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  async function signIn(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      return { error: null }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Anmeldung fehlgeschlagen'
      return { error: msg }
    }
  }

  async function signUp(name: string, email: string, password: string) {
    try {
      const { user: newUser } = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(newUser, { displayName: name })
      return { error: null }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Registrierung fehlgeschlagen'
      return { error: msg }
    }
  }

  async function signOut() {
    await firebaseSignOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
