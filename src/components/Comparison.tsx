'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

type Cell = { value: boolean; label?: string }

type Row = {
  label: string
  agencia: Cell
  freelancer: Cell
  bepartner: Cell
}

const rows: Row[] = [
  {
    label: 'Sistema completo instalado (no solo anuncios)',
    agencia: { value: false },
    freelancer: { value: false },
    bepartner: { value: true },
  },
  {
    label: 'Métricas en tiempo real sin tener que pedirlas',
    agencia: { value: false },
    freelancer: { value: false },
    bepartner: { value: true },
  },
  {
    label: 'Análisis semanal con próximos pasos claros',
    agencia: { value: false },
    freelancer: { value: false },
    bepartner: { value: true },
  },
  {
    label: 'Optimización de tu tienda (no solo de los ads)',
    agencia: { value: false },
    freelancer: { value: false },
    bepartner: { value: true },
  },
  {
    label: 'Acceso al Portal de Clientes',
    agencia: { value: false },
    freelancer: { value: false },
    bepartner: { value: true },
  },
  {
    label: 'Modelo de comisión (ganamos si vos ganás)',
    agencia: { value: false },
    freelancer: { value: false },
    bepartner: { value: true },
  },
  {
    label: 'Equipo especializado en ecommerce',
    agencia: { value: false },
    freelancer: { value: false },
    bepartner: { value: true },
  },
]

function Cell({ cell }: { cell: Cell }) {
  if (cell.value) {
    return <Check size={20} className="mx-auto text-emerald-500" strokeWidth={3} />
  }
  return <X size={20} className="mx-auto text-red-400" strokeWidth={2.5} />
}

export default function Comparison() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="section-label">Comparativa</span>
          <h2 className="section-title mt-3">
            ¿Por qué Bepartner y no otra agencia?
          </h2>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="hidden overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm md:block"
        >
          <div className="grid grid-cols-4 gap-0">
            {/* Header row */}
            <div className="border-b border-gray-100 bg-gray-50 p-5" />
            <div className="border-b border-gray-100 bg-gray-50 p-5 text-center">
              <div className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Agencia común
              </div>
            </div>
            <div className="border-b border-gray-100 bg-gray-50 p-5 text-center">
              <div className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Freelancer
              </div>
            </div>
            <div className="relative -mt-2 border-b border-brand-violet/30 bg-brand-violet p-5 text-center shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-violet shadow-md">
                La diferencia
              </div>
              <div className="text-sm font-bold uppercase tracking-wider text-white">
                Bepartner
              </div>
            </div>

            {/* Body rows */}
            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="contents"
              >
                <div
                  className={`flex items-center p-5 text-sm text-text-primary ${
                    i < rows.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  {row.label}
                </div>
                <div
                  className={`flex items-center justify-center p-5 ${
                    i < rows.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <Cell cell={row.agencia} />
                </div>
                <div
                  className={`flex items-center justify-center p-5 ${
                    i < rows.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <Cell cell={row.freelancer} />
                </div>
                <div
                  className={`flex items-center justify-center bg-brand-violet/95 p-5 ${
                    i < rows.length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  {row.bepartner.value ? (
                    <Check size={20} className="text-white" strokeWidth={3} />
                  ) : (
                    <X size={20} className="text-white/50" strokeWidth={2.5} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile stacked */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* Bepartner card first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-brand-violet p-5 text-white shadow-xl"
          >
            <div className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-violet">
              La diferencia
            </div>
            <h3 className="mb-4 text-lg font-bold uppercase tracking-wider">Bepartner</h3>
            <ul className="flex flex-col gap-3">
              {rows.map((row) => (
                <li key={row.label} className="flex items-start gap-2 text-sm">
                  <Check size={18} className="mt-0.5 flex-shrink-0" strokeWidth={3} />
                  {row.label}
                </li>
              ))}
            </ul>
          </motion.div>

          {['Agencia común', 'Freelancer'].map((name) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-secondary">
                {name}
              </h3>
              <ul className="flex flex-col gap-3">
                {rows.map((row) => (
                  <li key={row.label} className="flex items-start gap-2 text-sm text-text-primary">
                    <X size={18} className="mt-0.5 flex-shrink-0 text-red-400" strokeWidth={2.5} />
                    {row.label}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
