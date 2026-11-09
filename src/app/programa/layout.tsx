import type { Metadata } from 'next'

// Página del programa para tiendas online (oferta anterior al 04/11/2026): queda online pero fuera de Google.
export const metadata: Metadata = {
  title: 'Programa',
  robots: { index: false, follow: true },
}

export default function ProgramaLayout({ children }: { children: React.ReactNode }) {
  return children
}
