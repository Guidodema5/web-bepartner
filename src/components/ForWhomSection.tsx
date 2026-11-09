'use client'

import { motion } from 'framer-motion'
import Llamado from './Llamado'
import { Briefcase, Building2, XCircle } from 'lucide-react'

const doors = [
  {
    icon: Briefcase,
    title: 'Si tenés un negocio de servicios:',
    text: 'Vendés bien por recomendación, pero querés clientes nuevos todos los meses sin depender del boca en boca.',
  },
  {
    icon: Building2,
    title: 'Si sos mayorista o una empresa:',
    text: 'Tenés vendedores y clientes fieles, y querés que la publicidad te traiga contactos que tu equipo pueda cerrar.',
  },
]

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
                className="tarjeta p-6"
              >
                <div className="icono mb-4 h-11 w-11">
                  <Icon size={20} strokeWidth={1.75} />
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
          className="tarjeta p-6"
        >
          <h3 className="mb-5 text-lg font-semibold text-text-heading">No es para vos si:</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {noItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <XCircle size={19} strokeWidth={1.75} className="mt-0.5 flex-shrink-0 text-status-negative" />
                <p className="text-text-primary">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <Llamado texto="Si te viste en alguna de las dos, hablemos." whatsapp />
      </div>
    </section>
  )
}
