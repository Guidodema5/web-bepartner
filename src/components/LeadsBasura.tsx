'use client'

import { motion } from 'framer-motion'

const ecuacion = [
  { texto: 'Muchos leads', tipo: 'dato' },
  { texto: 'y', tipo: 'signo' },
  { texto: 'Poca conversión', tipo: 'dato' },
  { texto: '=', tipo: 'signo' },
  { texto: 'Leads basura', tipo: 'resultado' },
] as const

/**
 * El problema en una línea (Guido, 09/11/2026), arriba de "Si sentís que...". Guido pidió "el 90%": queda "la mayoría"
 * hasta tener un dato que respalde el porcentaje.
 */
export default function LeadsBasura() {
  return (
    <section id="leads-basura" className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-5xl text-center"
      >
        <h2 className="section-title mx-auto max-w-3xl">
          La mayoría de los negocios que hacen publicidad tienen el mismo problema
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {ecuacion.map((x) =>
            x.tipo === 'signo' ? (
              <span key={x.texto} className="font-display text-3xl font-semibold text-text-secondary sm:text-4xl">
                {x.texto}
              </span>
            ) : (
              <span
                key={x.texto}
                className={`rounded-2xl border px-5 py-3 font-display text-xl font-semibold tracking-tight sm:px-6 sm:py-4 sm:text-2xl ${
                  x.tipo === 'resultado'
                    ? 'border-status-negative/30 bg-status-negative/10 text-status-negative'
                    : 'border-linea bg-surface-card text-text-heading'
                }`}
              >
                {x.texto}
              </span>
            ),
          )}
        </div>
      </motion.div>
    </section>
  )
}
