'use client'

import { motion } from 'framer-motion'
import { Percent, Cog, BadgeCheck, LayoutDashboard } from 'lucide-react'

// Cómo trabajamos. Antes era una tabla contra agencias y freelancers; Guido
// pidió presentar mejor la solución, así que queda solo lo que hace Bepartner.
// Las frases de apoyo salen del resto del copy de la página.
const pillars = [
  {
    icon: Percent,
    title: 'Vamos a porcentaje de lo que crecés',
    text: 'No vendemos entregables. Si vos crecés, nosotros crecemos.',
  },
  {
    icon: Cog,
    title: 'Trabajamos producto, oferta, anuncios y web',
    text: 'Ordenamos las 4 ruedas antes de poner la nafta.',
  },
  {
    icon: BadgeCheck,
    title: 'Elegimos a quién aceptamos',
    text: 'Si te aceptamos, es porque sabemos que te podemos hacer crecer.',
  },
  {
    icon: LayoutDashboard,
    title: 'Te queda un sistema, la app y tus números claros',
    text: 'Ves la evolución desde el día 1, sin esperar reportes.',
  },
]

export default function Comparison() {
  return (
    <section id="comparativa" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <h2 className="section-title">¿Por qué no somos una agencia más?</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-xl border-2 border-brand-violet/20 bg-white p-6 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-violet">
                  <Icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-heading">{p.title}</h3>
                  <p className="mt-1 text-text-secondary">{p.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
