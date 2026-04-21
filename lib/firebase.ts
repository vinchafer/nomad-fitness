import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// NEXT_PUBLIC_ vars are public by design — Firebase is secured via Security Rules
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? 'AIzaSyBzZuLzyL1EmpQgB1y1iyD0FV0NJcG5pKI',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? 'nomad-fitness-a817b.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? 'nomad-fitness-a817b',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? 'nomad-fitness-a817b.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? '430442182314',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? '1:430442182314:web:1ce87ed216a0d0c6aec2d3',
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
export const auth = getAuth(app)
export const db = getFirestore(app)
