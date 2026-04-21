import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/lib/auth-context'

export const metadata: Metadata = {
  title: 'Nomad Fitness — Sport ohne Equipment, überall auf der Welt',
  description:
    'Kostenlose Fitness-Workouts für Reisende. Pilates, Yoga und Krafttraining ohne Equipment — nur mit Matte oder Boden. Überall auf der Welt trainieren.',
  keywords: ['fitness', 'reisen', 'workout', 'pilates', 'yoga', 'krafttraining', 'kein equipment', 'hotelzimmer'],
  authors: [{ name: 'Nomad Fitness' }],
  openGraph: {
    title: 'Nomad Fitness — Sport ohne Equipment, überall auf der Welt',
    description: 'Kostenlose Fitness-Workouts für Reisende. Pilates, Yoga und Krafttraining ohne Equipment.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-cream min-h-screen flex flex-col">
        <AuthProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
