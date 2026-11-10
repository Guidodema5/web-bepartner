'use client'

import { motion } from 'framer-motion'

// 24 consultas: solo una termina comprando. Es un dibujo para explicar la idea, no un dato.
const CONSULTAS = 24
const COMPRA = 17

/**
 * El problema en una línea (Guido, 09/11/2026), arriba de "Si sentís que...": "Muchos leads y poca conversión", con un
 * dibujo de muchas consultas y una sola que compra. Guido pidió "el 90%": queda "la mayoría" hasta tener un dato.
 */
export default function LeadsBasura() {
  return (
    <section id="leads-basura" className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="tarjeta mx-auto max-w-5xl overflow-hidden p-8 text-center sm:p-12"
      >
        <p className="section-label">La mayoría de los negocios que hacen publicidad tienen el mismo problema</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text-heading sm:text-5xl lg:text-6xl">
          Muchos leads <span className="text-text-secondary">y</span>{' '}
          <span className="text-status-negative">poca conversión.</span>
        </h2>

        <div className="mx-auto mt-10 grid max-w-sm grid-cols-8 gap-2.5 sm:gap-3" aria-hidden="true">
          {Array.from({ length: CONSULTAS }, (_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.03 }}
              className={`aspect-square rounded-full ${i === COMPRA ? 'bg-brand-violet shadow-brillo' : 'bg-linea-fuerte'}`}
            />
          ))}
        </div>
        <p className="mt-6 text-[15px] text-text-secondary">
          Te llegan consultas todos los días, pero casi <span className="font-medium text-violeta-600">ninguna compra</span>.
        </p>
      </motion.div>
    </section>
  )
}
