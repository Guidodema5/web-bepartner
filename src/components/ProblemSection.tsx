'use client'

import { motion } from 'framer-motion'
import Llamado from './Llamado'
import { X } from 'lucide-react'

const painPoints = [
  'Le pagás todos los meses a alguien y seguís facturando lo mismo.',
  'Tu Instagram es lindo, pero no vende.',
  'No sabés si ganás o perdés plata con la publicidad.',
  'Para tu agencia sos uno más.',
]

export default function ProblemSection() {
  return (
    <section id="problema" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
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
          Si sentís que...
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {painPoints.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="tarjeta flex items-start gap-3 p-5"
            >
              <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-status-negative/10">
                <X size={14} className="text-status-negative" />
              </div>
              <p className="text-text-primary">{point}</p>
            </motion.div>
          ))}
        </div>
        <Llamado texto="¿Te identificaste con alguna? En la auditoría vemos qué está frenando tu tienda." />
      </div>
    </section>
  )
}
