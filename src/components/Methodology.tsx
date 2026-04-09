'use client'

import { motion } from 'framer-motion'
import { Search, Filter, ShoppingCart, Megaphone, LineChart, Rocket } from 'lucide-react'

const phases = [
  {
    num: '00',
    title: 'Diagnóstico',
    description: 'Analizamos tu tienda, tus números y tu competencia para encontrar exactamente dónde estás perdiendo ventas.',
    icon: Search,
  },
  {
    num: '01',
    title: 'Análisis de embudo',
    description: 'Identificamos cada punto de fuga en tu embudo de conversión, desde el primer clic hasta la compra.',
    icon: Filter,
  },
  {
    num: '02',
    title: 'Optimización de tienda',
    description: 'Mejoramos velocidad, UX, cross-sell y upsell para que cada visita tenga más chances de comprar.',
    icon: ShoppingCart,
  },
  {
    num: '03',
    title: 'Meta Ads',
    description: 'Creamos la estrategia publicitaria: creativos, segmentación, estructura de campañas optimizada para ecommerce.',
    icon: Megaphone,
  },
  {
    num: '04',
    title: 'Optimización semanal',
    description: 'Cada semana analizamos los datos reales y ajustamos. Nada queda en piloto automático.',
    icon: LineChart,
  },
  {
    num: '05',
    title: 'Escalado',
    description: 'Una vez validado el sistema, escalamos la inversión para maximizar el retorno.',
    icon: Rocket,
  },
]


export default function Methodology() {
  return (
    <section id="metodologia" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="section-label">Nuestro sistema</span>
          <h2 className="section-title mb-10 mt-3">
            Metodología BEP — Paso a paso, sin improvisar
          </h2>
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
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="absolute right-4 top-4 font-display text-4xl font-bold text-gray-100">
                  {phase.num}
                </span>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-violet-light">
                  <Icon size={20} className="text-brand-violet" />
                </div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-violet">
                  Fase {phase.num}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-heading">
                  {phase.title}
                </h3>
                <p className="text-sm text-text-secondary">{phase.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
