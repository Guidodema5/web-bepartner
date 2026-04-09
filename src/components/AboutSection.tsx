'use client'

import { motion } from 'framer-motion'
import { BarChart3, Users, TrendingUp } from 'lucide-react'

const miniStats = [
  { icon: BarChart3, label: '+$100K USD en pauta gestionada' },
  { icon: Users, label: 'Portal de clientes propio' },
  { icon: TrendingUp, label: 'Modelo de comisión alineado' },
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-surface-warm px-4 py-16 lg:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <span className="section-label">Quién está detrás</span>
          <h2 className="section-title mb-8 mt-3">
            No somos una agencia más. Somos tu equipo de crecimiento.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
        >
          <div className="mb-6 flex flex-col items-center gap-5 sm:flex-row">
            {/* Founder avatar placeholder */}
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-brand-violet-light border-2 border-brand-violet/20">
              <span className="font-display text-2xl font-bold text-brand-violet">GD</span>
            </div>
            <p className="text-center text-text-primary sm:text-left">
              Bepartner nació de ver cómo las agencias le venden anuncios a sus
              clientes sin importarles si crecen o no. Construimos un sistema
              propio — con portal, herramientas y metodología — porque creemos que
              si el cliente no crece, nosotros no deberíamos cobrar.
            </p>
          </div>

          {/* Mini stats */}
          <div className="grid gap-4 border-t border-gray-100 pt-6 sm:grid-cols-3">
            {miniStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-violet-light">
                    <Icon size={18} className="text-brand-violet" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">{stat.label}</span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
