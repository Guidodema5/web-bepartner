'use client'

import { motion } from 'framer-motion'
import Llamado from './Llamado'
import { XCircle } from 'lucide-react'

const noItems = [
  'Todavía no vendés o no sabés a quién le vendés.',
  'Buscás resultados mágicos sin proceso.',
  'No estás dispuesto a invertir en publicidad.',
  'No tenés quién atienda las consultas que lleguen.',
]

export default function ForWhomSection() {
  return (
    <section id="para-quien" className="px-4 py-16 lg:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <h2 className="section-title">Esto no es para vos si…</h2>
        </motion.div>

        {/* Lo que no tomamos como trabajo (Guido, 09/11/2026): es lo central de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {noItems.map((item) => (
              <div key={item} className="tarjeta flex items-center gap-4 p-6">
                <XCircle size={26} strokeWidth={1.75} className="flex-shrink-0 text-status-negative" />
                <p className="text-lg font-medium text-text-heading">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <Llamado texto="Si no es tu caso, hablemos." whatsapp />
      </div>
    </section>
  )
}
