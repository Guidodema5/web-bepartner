'use client'

import { motion } from 'framer-motion'
import {
  BarChart3,
  Sparkles,
  TrendingUp,
  Calculator,
  DollarSign,
  Target,
  ShoppingCart,
  ArrowUpRight,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Ves tu crecimiento mes a mes',
    description:
      'Facturación, ROAS, conversión e inversión desde el día 1. Sin planillas. Sin pedirle reportes a nadie.',
  },
  {
    icon: Sparkles,
    title: 'Creás anuncios en minutos, no en días',
    description:
      'Con nuestra metodología propia generás conceptos creativos para cada producto. Ilimitados.',
  },
  {
    icon: TrendingUp,
    title: 'Cada semana sabés exactamente qué ajustar',
    description:
      'Sin jerga técnica. Te decimos qué está funcionando, qué no, y qué hacemos al respecto.',
  },
  {
    icon: Calculator,
    title: 'Sabés cuánto podés invertir sin perder margen',
    description:
      'Calculadora propia por producto con cotización de dólar integrada. Nunca más invertís de más.',
  },
]

export default function PortalSection() {
  return (
    <section
      id="portal"
      className="relative overflow-hidden bg-gradient-to-br from-[#2d1b4e] to-[#1a1a2e] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Grid pattern — visible on dark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="inline-block rounded-full border border-brand-violet/40 bg-brand-violet/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#c8a2e8]">
            El sistema que ninguna agencia te da
          </span>
          <h2 className="mx-auto mb-4 mt-4 max-w-3xl font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Por primera vez, sabés exactamente qué está pasando con tu plata.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Desarrollamos un portal exclusivo para ecommerce que te da visibilidad total
            en tiempo real. No más adivinar. No más confiar a ciegas.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl border border-white/10 bg-[#0f0f1e] shadow-[0_30px_80px_-20px_rgba(117,61,148,0.4)]"
          >
            {/* Browser bar */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-[#151528] px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-white/40">bepartnerclientes.com.ar</span>
            </div>

            <div className="p-4 sm:p-5">
              {/* Algorithm alert */}
              <div className="mb-4 rounded-lg border border-brand-violet/40 bg-brand-violet/15 p-3">
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-[#c8a2e8]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#c8a2e8]">
                    Recomendación del sistema
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-white">
                  Escalar <span className="font-bold">creatividad #3</span> — ROAS 9.4x
                </p>
              </div>

              {/* Metric cards */}
              <div className="mb-4 grid grid-cols-2 gap-2.5">
                {[
                  { label: 'Facturación', value: '$12.9M', icon: DollarSign, change: '+42%' },
                  { label: 'ROAS', value: '8.2x', icon: Target, change: '+1.3x' },
                  { label: 'Conversión', value: '35.3%', icon: ArrowUpRight, change: '+8.1%' },
                  { label: 'Ventas', value: '102', icon: ShoppingCart, change: '+580%' },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg bg-white/5 p-3">
                    <div className="mb-1.5 flex items-center justify-between">
                      <m.icon size={14} className="text-[#c8a2e8]" />
                      <span className="text-[10px] font-medium text-emerald-400">
                        {m.change}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-white">{m.value}</div>
                    <div className="text-[10px] text-white/40">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="rounded-lg bg-white/5 p-3">
                <div className="mb-2 text-[10px] font-semibold text-white/40">
                  Facturación mensual
                </div>
                <div className="flex items-end gap-1.5" style={{ height: '80px' }}>
                  {[30, 45, 38, 60, 52, 75, 90, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-brand-violet/30"
                      style={{ height: `${h}%` }}
                    >
                      <div
                        className="h-full rounded-t bg-brand-violet"
                        style={{ height: `${Math.min(100, h + 10)}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: 2x2 feature cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm transition-all hover:border-brand-violet/40 hover:bg-white/15"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-violet/20">
                    <Icon size={18} className="text-[#c8a2e8]" />
                  </div>
                  <h3 className="mb-2 font-semibold text-white">{f.title}</h3>
                  <p className="text-sm text-gray-300">{f.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://bepartnerclientes.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
          >
            Ver demo del portal
          </a>
        </motion.div>
      </div>
    </section>
  )
}
