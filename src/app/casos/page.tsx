import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Más casos de éxito',
  description: 'Más tiendas online que crecieron con Bepartner.',
  alternates: { canonical: '/casos' },
}

// Casos que no entran en la página principal. Los principales (Green Power,
// Derentas, Le Mardē y Pullbag) están en la home.
type Caso = {
  tag: string
  logo?: string
  marca?: string
  titulo: string
  metrica?: string
  subtitulo?: string
  descripcion?: string
}

const casos: Caso[] = [
  {
    tag: 'E-commerce',
    logo: '/images/logo-destore.png',
    marca: 'Destore',
    titulo: 'En un mes llegó a facturar $1 millón por día',
    metrica: '$1M',
    subtitulo: 'Por día',
  },
  {
    tag: 'Joyería',
    logo: '/images/logo-victorgemas.png',
    marca: 'Victor Gemas',
    titulo: 'Tienda online de joyas y gemas',
  },
  {
    tag: 'Moda',
    titulo: 'Tienda de sweaters: $50M en 70 días',
    metrica: '$50M',
    subtitulo: 'En 70 días · arrancó facturando $460K por mes',
    descripcion:
      'Marca de sweaters que pasó de vender $460.000 por mes a facturar 50 millones en apenas 70 días, con una estrategia de crecimiento rápido y mensajes distintos para cada temporada.',
  },
]

export default function CasosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-surface-dark to-[#0f0f1e] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#c8a2e8]">Casos de éxito</span>
            <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Más tiendas que crecieron con nosotros
            </h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {casos.map((c) => (
              <div key={c.titulo} className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg sm:p-8">
                <div className="mb-3 flex items-center gap-2">
                  <TrendingUp size={14} className="text-[#c8a2e8]" />
                  <span className="text-xs font-medium text-white/50">{c.tag}</span>
                </div>
                {c.logo && (
                  <div className="relative mb-4 h-10 w-40">
                    <Image src={c.logo} alt={c.marca ?? ''} fill sizes="160px" className="object-contain object-left" />
                  </div>
                )}
                <h2 className="text-lg font-bold text-white">{c.titulo}</h2>
                {c.metrica && <div className="mt-3 font-display text-5xl font-extrabold text-[#c8a2e8]">{c.metrica}</div>}
                {c.subtitulo && <p className="mt-1 text-sm text-white/70">{c.subtitulo}</p>}
                {c.descripcion && <p className="mt-4 text-sm text-white/70">{c.descripcion}</p>}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-brand-violet transition-all hover:bg-white/90"
            >
              Quiero resultados así <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
