'use client'

import { motion } from 'framer-motion'
import { Store, Factory, XCircle } from 'lucide-react'

const doors = [
  {
    icon: Store,
    title: 'Si tenés una tienda online:',
    text: 'Ya vendés por internet, tenés web y una marca cuidada, pero hace meses que no pasás del mismo número. Ya probaste agencias o freelancers y no viste el cambio.',
  },
  {
    icon: Factory,
    title: 'Si tenés un showroom o una fábrica:',
    text: 'Vendés bien en persona, pero online no despega. Querés que internet venda tu producto tan bien como lo vendés vos.',
  },
]

const noItems = [
  'Todavía no tenés producto validado.',
  'Buscás resultados mágicos sin proceso.',
  'No estás dispuesto a invertir en publicidad.',
  'Querés a alguien que solo "suba posteos".',
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
          <h2 className="section-title">¿Esto es para vos?</h2>
        </motion.div>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {doors.map((d, i) => {
            const Icon = d.icon
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="rounded-xl border-2 border-brand-violet/20 bg-white p-6 shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-violet">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-heading">{d.title}</h3>
                <p className="text-text-primary">{d.text}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-md"
        >
          <h3 className="mb-5 text-lg font-semibold text-text-heading">No es para vos si:</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {noItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <XCircle size={20} className="mt-0.5 flex-shrink-0 text-status-negative" />
                <p className="text-text-primary">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
