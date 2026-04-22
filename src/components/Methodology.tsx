'use client'

import { motion } from 'framer-motion'
import {
  Search,
  Filter,
  Store,
  Megaphone,
  LineChart,
  Rocket,
} from 'lucide-react'

const phases = [
  {
    num: '00',
    icon: Search,
    title: 'Diagnóstico',
    description:
      'Miramos tu tienda como si fuéramos a comprar. Encontramos exactamente dónde se van los clientes antes de pagar.',
  },
  {
    num: '01',
    icon: Filter,
    title: 'Análisis de embudo',
    description:
      'Cada clic tiene historia. Te mostramos dónde se rompe el camino hacia la compra.',
  },
  {
    num: '02',
    icon: Store,
    title: 'Optimización de tienda',
    description:
      'Velocidad, estructura, cross-sell, upsell. Tu tienda empieza a trabajar para cerrar, no solo para mostrar.',
  },
  {
    num: '03',
    icon: Megaphone,
    title: 'Meta Ads',
    description:
      'Creativos, segmentación, presupuesto. Campañas construidas para ROAS, no para likes.',
  },
  {
    num: '04',
    icon: LineChart,
    title: 'Optimización semanal',
    description:
      'Cada semana entramos a los datos. Nada queda en piloto automático.',
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Escalado',
    description:
      'El sistema está validado. Ahora sí: más inversión, más retorno, más ventas.',
  },
]

export default function Methodology() {
  return (
    <section id="metodologia" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <span className="section-label">Nuestro sistema</span>
          <h2 className="section-title mt-3">Seis fases. Cero improvisación.</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase, i) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Decorative giant number watermark */}
                <span
                  className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[120px] font-black leading-none text-gray-100"
                  aria-hidden="true"
                >
                  {phase.num}
                </span>

                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-violet-light">
                    <Icon size={22} className="text-brand-violet" />
                  </div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand-violet">
                    Fase {phase.num}
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold text-text-heading">
                    {phase.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
