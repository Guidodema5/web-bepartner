'use client'

import { motion } from 'framer-motion'
import Llamado from './Llamado'
import { ArrowRight, Briefcase, Building2, Handshake, Home, XCircle } from 'lucide-react'

// Para quién es (Guido, 09/11/2026): inmobiliarias, servicios, mayoristas y B2B. Cada una enlaza a su guía.
const doors = [
  {
    icon: Home,
    title: 'Inmobiliarias y agentes inmobiliarios',
    text: 'Querés captar propietarios y conseguir compradores con presupuesto real, sin depender solo de los portales.',
    guia: '/leads-para/inmobiliarias',
  },
  {
    icon: Briefcase,
    title: 'Negocios de servicios',
    text: 'Vendés bien por recomendación, pero querés clientes nuevos todos los meses sin depender del boca en boca.',
    guia: '/leads-para/empresas-de-servicios',
  },
  {
    icon: Building2,
    title: 'Mayoristas y fábricas',
    text: 'Querés sumar comercios y revendedores que compren por mayor, no consultas de una sola unidad.',
    guia: '/leads-para/mayoristas',
  },
  {
    icon: Handshake,
    title: 'Empresas B2B',
    text: 'Tenés vendedores y querés que la publicidad les traiga reuniones con empresas que pueden comprarte.',
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
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            Trabajamos con negocios que ya venden y quieren clientes calificados todos los meses.
          </p>
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
                className="tarjeta flex flex-col p-6"
              >
                <div className="icono mb-4 h-11 w-11">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-heading">{d.title}</h3>
                <p className="text-text-primary">{d.text}</p>
                {d.guia && (
                  <a href={d.guia} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-violeta-600 hover:text-violeta-700">
                    Cómo lo hacemos <ArrowRight size={15} />
                  </a>
                )}
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
        <Llamado texto="Si te viste en alguna, hablemos." whatsapp />
      </div>
    </section>
  )
}
