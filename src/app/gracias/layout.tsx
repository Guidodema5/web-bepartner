import type { Metadata } from 'next'

// Página de confirmación del formulario: no tiene que aparecer en Google.
export const metadata: Metadata = {
  title: 'Gracias',
  robots: { index: false, follow: false },
}

export default function GraciasLayout({ children }: { children: React.ReactNode }) {
  return children
}
