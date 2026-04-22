'use client'

import { motion } from 'framer-motion'
import { X, ArrowDown } from 'lucide-react'

const painPoints = [
  'Pusiste plata en anuncios y no sabés si funcionaron',
  'Tenés visitas pero la gente no compra',
  'No sabés qué número mirar ni qué significa',
  'Probaste una agencia y fue plata tirada',
  'Subís contenido a Instagram pero las ventas son inconsistentes',
  'Sabés que tu producto es bueno, pero tu tienda no lo refleja',
]

export default function ProblemSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-4"
        >
          <span className="section-label">¿Te suena conocido?</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="section-title mb-4"
        >
          Invertís en publicidad y sentís que la plata desaparece.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-lg text-text-secondary"
        >
          No es mala suerte. Es que no tenés el sistema correcto.{' '}
          <span className="font-semibold text-text-heading">Y eso tiene solución.</span>
        </motion.p>

        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          {painPoints.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-50">
                <X size={16} className="text-red-500" strokeWidth={2.5} />
              </div>
              <p className="text-text-primary">{point}</p>
            </motion.div>
          ))}
        </div>

        {/* Transition card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-xl border-l-4 border-brand-violet bg-brand-violet-light p-6"
          style={{ backgroundColor: 'rgba(117,61,148,0.08)' }}
        >
          <p className="text-lg leading-relaxed text-text-heading">
            Si <span className="font-bold">dos de estas te describen</span>, tu tienda tiene
            un techo que nosotros sabemos cómo romper.
          </p>
        </motion.div>

        {/* Bridge arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col items-center gap-2 text-text-secondary"
        >
          <ArrowDown size={20} className="animate-bounce text-brand-violet" />
          <span className="text-sm">Esto es lo que cambia con Bepartner</span>
        </motion.div>
      </div>
    </section>
  )
}
