'use client'

import { motion } from 'framer-motion'

/**
 * El problema en una línea (Guido, 09/11/2026), arriba de "Si sentís que...", con el mismo estilo que el resto de las
 * secciones: etiqueta, título grande y la parte clave en violeta. Guido pidió "el 90%": queda "la mayoría" hasta tener un dato.
 */
export default function LeadsBasura() {
  return (
    <section id="leads-basura" className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-5xl"
      >
        <span className="section-label">El problema</span>
        <h2 className="section-title mt-3 max-w-4xl">
          La mayoría de los negocios que hacen publicidad tienen el mismo problema:{' '}
          <span className="text-violeta-600">muchos leads y poca conversión.</span>
        </h2>
      </motion.div>
    </section>
  )
}
