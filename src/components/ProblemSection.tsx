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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function ProblemSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="mb-4"
        >
          <span className="section-label">¿Te identificás?</span>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="section-title mb-12"
        >
          Tu tienda vende, pero no escala
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-10 grid gap-4 sm:grid-cols-2"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point}
              variants={fadeUp}
              className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
            >
              <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-50">
                <X size={14} className="text-status-negative" />
              </div>
              <p className="text-text-primary">{point}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="rounded-xl border-2 border-brand-violet/20 bg-brand-violet-light p-6 text-center"
        >
          <p className="text-lg font-semibold text-text-heading">
            Si te pasa al menos 2 de estas, tenemos que hablar.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
