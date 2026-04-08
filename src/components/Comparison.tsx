'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const rows = [
  'Portal de métricas en tiempo real',
  'Análisis semanal de campañas',
  'Calculadora de ROAS por producto',
  'Modelo de comisión (ganan si vos ganás)',
  'Socio estratégico (no proveedor)',
  'Generador de anuncios ilimitados',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Comparison() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <h2 className="section-title">
            ¿Por qué Bepartner y no otra agencia?
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
        >
          {/* Header */}
          <div className="grid grid-cols-4 border-b border-gray-100 bg-gray-50/50">
            <div className="p-4 text-sm font-medium text-text-secondary" />
            <div className="p-4 text-center text-sm font-semibold text-text-heading">
              Agencia común
            </div>
            <div className="p-4 text-center text-sm font-semibold text-text-heading">
              Freelancer
            </div>
            <div className="rounded-tr-xl bg-brand-violet-light p-4 text-center text-sm font-bold text-brand-violet">
              Bepartner
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row}
              className={`grid grid-cols-4 ${i < rows.length - 1 ? 'border-b border-gray-50' : ''}`}
            >
              <div className="flex items-center p-4 text-sm text-text-primary">
                {row}
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50">
                  <X size={14} className="text-status-negative" />
                </div>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50">
                  <X size={14} className="text-status-negative" />
                </div>
              </div>
              <div className="flex items-center justify-center bg-brand-violet-light/50 p-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50">
                  <Check size={14} className="text-status-positive" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
