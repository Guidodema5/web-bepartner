'use client'

import { motion } from 'framer-motion'

const rows = [
  {
    label: 'Cómo cobra',
    agencia: 'Fee fijo, vendas o no',
    freelancer: 'Fee fijo por anuncios',
    bepartner: 'Vamos a porcentaje de lo que crecés',
  },
  {
    label: 'Qué trabaja',
    agencia: 'El pack que contrataste',
    freelancer: 'Solo anuncios',
    bepartner: 'Producto, oferta, anuncios y web',
  },
  {
    label: 'Cuántos clientes',
    agencia: 'Cientos: sos uno más',
    freelancer: 'Muchos, solo',
    bepartner: 'Elegimos a quién aceptamos',
  },
  {
    label: 'Qué te queda si se va',
    agencia: 'Nada',
    freelancer: 'Nada',
    bepartner: 'Un sistema, la app y tus números claros',
  },
]

export default function Comparison() {
  return (
    <section id="comparativa" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <h2 className="section-title">¿Por qué no somos una agencia más?</h2>
        </motion.div>

        {/* Escritorio: tabla */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="hidden overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg md:block"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="w-1/4 p-5" />
                <th className="w-1/4 p-5 text-sm font-semibold text-text-secondary">Agencia tradicional</th>
                <th className="w-1/4 p-5 text-sm font-semibold text-text-secondary">Freelancer</th>
                <th className="w-1/4 bg-brand-violet p-5 text-sm font-bold text-white">Bepartner</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i < rows.length - 1 ? 'border-b border-gray-100' : ''}>
                  <td className="p-5 text-sm font-semibold text-text-heading">{r.label}</td>
                  <td className="p-5 text-sm text-text-secondary">{r.agencia}</td>
                  <td className="p-5 text-sm text-text-secondary">{r.freelancer}</td>
                  <td className="bg-brand-violet-light p-5 text-sm font-semibold text-brand-violet">{r.bepartner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Celular: una tarjeta por fila, sin scroll horizontal */}
        <div className="flex flex-col gap-4 md:hidden">
          {rows.map((r) => (
            <div key={r.label} className="rounded-xl border border-gray-200 bg-white p-5 shadow-md">
              <p className="mb-3 font-semibold text-text-heading">{r.label}</p>
              <div className="space-y-2 text-sm">
                <p className="text-text-secondary"><span className="font-medium">Agencia tradicional:</span> {r.agencia}</p>
                <p className="text-text-secondary"><span className="font-medium">Freelancer:</span> {r.freelancer}</p>
                <p className="rounded-lg bg-brand-violet-light px-3 py-2 font-semibold text-brand-violet">Bepartner: {r.bepartner}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
