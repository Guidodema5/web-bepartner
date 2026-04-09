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

export default function Comparison() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
            ¿Por qué Bepartner y no otra agencia?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="overflow-hidden rounded-xl border border-gray-200 bg-surface-warm shadow-sm"
        >
          {/* Header */}
          <div className="grid grid-cols-4 border-b border-gray-200">
            <div className="p-4 text-sm font-medium text-text-secondary" />
            <div className="p-4 text-center text-sm font-semibold text-text-secondary">
              Agencia común
            </div>
            <div className="p-4 text-center text-sm font-semibold text-text-secondary">
              Freelancer
            </div>
            <div className="bg-brand-violet p-4 text-center text-sm font-bold text-white">
              Bepartner
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row}
              className={`grid grid-cols-4 ${i < rows.length - 1 ? 'border-b border-gray-100' : ''}`}
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
              <div className="flex items-center justify-center bg-brand-violet-light p-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50">
                  <Check size={14} className="text-status-positive" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-8 text-center"
        >
          <a href="#contacto" className="btn-primary">
            Quiero trabajar con Bepartner
          </a>
        </motion.div>
      </div>
    </section>
  )
}
