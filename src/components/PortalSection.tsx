'use client'

import { motion } from 'framer-motion'
import { BarChart3, Sparkles, TrendingUp, Calculator, DollarSign, Target, ShoppingCart, ArrowUpRight } from 'lucide-react'

const benefits = [
  {
    icon: BarChart3,
    title: 'Sabé cuánto vendés y cuánto te cuesta cada venta',
    description: 'Dashboard con tu facturación, ROAS, conversión e inversión actualizado mes a mes. Sin esperar reportes de fin de mes.',
  },
  {
    icon: TrendingUp,
    title: 'Cada semana sabés exactamente qué ajustar',
    description: 'Análisis semanal de tus campañas con diagnóstico y próximos pasos claros. Nunca más adivinar qué está pasando.',
  },
  {
    icon: Sparkles,
    title: 'Ideas de anuncios que venden, en minutos',
    description: 'Generador con metodología propia que crea conceptos creativos para tus productos. Sin depender de la agencia para cada pieza.',
  },
  {
    icon: Calculator,
    title: 'Sabé cuánto podés gastar sin perder margen',
    description: 'Calculadora de ROAS por producto. Ponés tus costos y te dice tu punto de equilibrio exacto.',
  },
]

export default function PortalSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left column — Benefits */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <span className="section-label">Lo que ninguna otra agencia y consultor tiene</span>
              <h2 className="section-title mb-3 mt-3">
                Un portal exclusivo para clientes
              </h2>
              <p className="mb-8 text-text-secondary">
                Tu negocio, tus números, en tiempo real. Todo en un solo lugar.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-violet-light">
                      <Icon size={20} className="text-brand-violet" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-semibold text-text-heading">
                        {benefit.title}
                      </h3>
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
              className="mt-8"
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

          {/* Right column — Portal mockup */}
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

            {/* Dashboard content */}
            <div className="p-4 sm:p-5">
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
