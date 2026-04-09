'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const painPoints = [
  'Invertís en publicidad pero no ves retorno claro',
  'No sabés qué anuncios funcionan y cuáles pierden plata',
  'Tenés tráfico pero no convertís lo suficiente',
  'No tenés visibilidad en tiempo real de tus números',
  'Probaste agencias antes y no viste resultados',
  'Add to Cart alto pero pocas compras',
]

export default function ProblemSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-4"
        >
          <span className="section-label">¿Te identificás?</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="section-title mb-10"
        >
          Tu tienda vende, pero no escala
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {painPoints.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="flex items-start gap-3 rounded-lg border border-gray-100 bg-surface-warm p-4 shadow-sm"
            >
              <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-50">
                <X size={14} className="text-status-negative" />
              </div>
              <p className="text-text-primary">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
