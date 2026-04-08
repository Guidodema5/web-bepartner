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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Methodology() {
  return (
    <section id="metodologia" className="bg-gradient-to-br from-[#2d1b4e] to-surface-dark px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-brand-violet">Nuestro sistema</span>
          <h2 className="mb-12 mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Metodología BEP — Paso a paso, sin improvisar
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {phases.map((phase) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={phase.num}
                variants={fadeUp}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <span className="absolute right-4 top-4 font-display text-4xl font-bold text-white/5">
                  {phase.num}
                </span>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-violet/20">
                  <Icon size={20} className="text-brand-violet" />
                </div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-violet">
                  Fase {phase.num}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {phase.title}
                </h3>
                <p className="text-sm text-gray-400">{phase.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
