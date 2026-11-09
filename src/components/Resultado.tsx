'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Llamado from './Llamado'

// "Así cambia tu negocio" (Guido, 05/11/2026): reemplaza "Cómo trabajamos". Los bonos (tablero semanal y seguimiento
// post-lead) van como resultado, no como característica: son las filas 3 y 5.
const cambios = [
  { hoy: 'Te escriben, preguntan el precio y desaparecen.', con: 'Te consultan personas que de verdad pueden comprarte.' },
  { hoy: 'Tu equipo pierde horas respondiendo a curiosos.', con: 'Tu equipo solo habla con gente interesada.' },
  { hoy: 'No sabés si la publicidad te dio plata o te la sacó.', con: 'Cada semana ves cuánto invertiste y qué te trajo.' },
  { hoy: 'Hay meses buenos y meses flojos, según quién te recomiende.', con: 'Te llegan clientes nuevos todos los meses, sin depender del boca en boca.' },
  { hoy: 'Los contactos se pierden en el WhatsApp.', con: 'Cada contacto tiene seguimiento hasta que compra.' },
]

export default function Resultado() {
  return (
    <section id="resultado" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <span className="section-label">El resultado</span>
          <h2 className="section-title mt-3">Así cambia tu negocio cuando trabajás con nosotros</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="tarjeta overflow-hidden"
        >
          <div className="hidden grid-cols-[1fr_auto_1fr] border-b border-linea bg-surface-card-2 px-6 py-3 md:grid">
            <span className="section-label">Hoy</span>
            <span className="w-10" />
            <span className="section-label text-violeta-600">Con Bepartner</span>
          </div>
          {cambios.map((c) => (
            <div key={c.hoy} className="grid items-center gap-2 border-b border-linea px-6 py-5 last:border-b-0 md:grid-cols-[1fr_auto_1fr] md:gap-4">
              <p className="text-text-secondary">
                <span className="section-label mr-2 md:hidden">Hoy</span>
                {c.hoy}
              </p>
              <ArrowRight size={18} className="hidden text-violeta-500 md:block" />
              <p className="font-medium text-text-heading">
                <span className="section-label mr-2 text-violeta-600 md:hidden">Con Bepartner</span>
                {c.con}
              </p>
            </div>
          ))}
        </motion.div>

        <Llamado />
      </div>
    </section>
  )
}
