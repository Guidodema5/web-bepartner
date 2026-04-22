'use client'

import { motion } from 'framer-motion'
import {
  Cpu,
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

const secondaryBenefits = [
  {
    icon: BarChart3,
    title: 'Dashboard de métricas en tiempo real',
    description: 'Facturación, ROAS, conversión e inversión actualizado mes a mes. Sin esperar reportes.',
  },
  {
    icon: TrendingUp,
    title: 'Análisis semanal de campañas',
    description: 'Cada semana sabés exactamente qué ajustar. Con diagnóstico y próximos pasos claros.',
  },
  {
    icon: Sparkles,
    title: 'Generador de ideas de anuncios',
    description: 'Crea conceptos creativos para tus productos en minutos. Sin depender de terceros para cada pieza.',
  },
  {
    icon: Calculator,
    title: 'Calculadora de ROAS por producto',
    description: 'Ponés tus costos y te dice tu punto de equilibrio exacto. Sabé cuánto podés gastar sin perder margen.',
  },
]

export default function PortalSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-violet-light px-3 py-1.5">
                <Cpu size={14} className="text-brand-violet" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-violet">
                  Software propio con algoritmo
                </span>
              </div>
              <h2 className="section-title mb-4 mt-2">
                Un algoritmo que optimiza tus campañas mientras dormís
              </h2>
              <p className="mb-6 text-lg text-text-secondary">
                El corazón del Portal de Clientes es un algoritmo propio que analiza
                cada venta de tu tienda, la cruza con los datos de tus campañas de
                Meta Ads, y te dice exactamente qué anuncio está rindiendo y cuál
                está quemando plata — en tiempo real.
              </p>
              <p className="mb-8 text-text-primary">
                No es un dashboard más. Es el sistema que convierte tus números
                en decisiones concretas: qué creatividad escalar, qué audiencia
                pausar, qué producto tiene margen para aumentar la inversión.
              </p>
            </motion.div>

            {/* Core algorithm benefit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="mb-6 rounded-xl border-2 border-brand-violet/20 bg-brand-violet-light p-5"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-violet">
                  <Zap size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-text-heading">
                    Decisiones basadas en datos, no en intuición
                  </h3>
                  <p className="text-sm text-text-secondary">
                    El algoritmo cruza ventas × inversión × creatividad × audiencia
                    y te dice qué mover. Eso es lo que transforma tu inversión
                    en publicidad en ventas reales y predecibles.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Secondary benefits — compact list */}
            <div className="mb-8 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Además incluye
              </p>
              {secondaryBenefits.map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.05 }}
                    className="flex gap-3"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-violet-light">
                      <Icon size={16} className="text-brand-violet" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-heading">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-text-secondary">{benefit.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <a
                href="https://bepartnerclientes.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-violet bg-brand-violet/10 px-6 py-3 text-sm font-semibold text-brand-violet transition-all hover:bg-brand-violet hover:text-white"
              >
                Acceso clientes
              </a>
            </motion.div>
          </div>

          {/* Right column — Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="overflow-hidden rounded-2xl border border-gray-800/20 bg-surface-dark shadow-2xl"
            style={{ transform: 'perspective(1000px) rotateY(-2deg)' }}
          >
            {/* Browser bar */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-[#151528] px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-gray-500">bepartnerclientes.com.ar</span>
            </div>

            <div className="p-4 sm:p-5">
              {/* Algorithm recommendation card */}
              <div className="mb-4 rounded-lg border border-brand-violet/30 bg-brand-violet/10 p-4">
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-brand-violet" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-violet">
                    Recomendación del algoritmo
                  </span>
                </div>
                <p className="mt-2 text-sm text-white">
                  Escalar <span className="font-bold">creatividad #3</span> — ROAS 9.4x, CPA óptimo.
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Pausar audiencia "Lookalike 2% LTV" — CPA 140% por encima del objetivo.
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
                      <m.icon size={14} className="text-brand-violet" />
                      <span className="text-[10px] font-medium text-emerald-400">{m.change}</span>
                    </div>
                    <div className="text-base font-bold text-white sm:text-lg">{m.value}</div>
                    <div className="text-[10px] text-gray-500">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="rounded-lg bg-white/5 p-3">
                <div className="mb-2 text-[10px] font-semibold text-gray-500">Facturación mensual</div>
                <div className="flex items-end gap-1.5" style={{ height: '80px' }}>
                  {[30, 45, 38, 60, 52, 75, 90, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-brand-violet/40" style={{ height: `${h}%` }}>
                      <div className="h-full rounded-t bg-brand-violet" style={{ height: `${Math.min(100, h + 10)}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
