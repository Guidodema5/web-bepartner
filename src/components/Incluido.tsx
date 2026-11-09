'use client'

import { motion } from 'framer-motion'
import { BarChart3, Route } from 'lucide-react'
import Llamado from './Llamado'

// Las bonificaciones de la oferta (blueprint del 04/11/2026): con Bepartner no queda solo una campaña, queda un sistema.
const bonos = [
  {
    icon: BarChart3,
    title: 'Tablero de métricas semanales',
    text: 'Siempre tenés claros los números de tu negocio: cuánto invertiste y qué te trajo cada campaña, semana a semana, sin esperar reportes.',
  },
  {
    icon: Route,
    title: 'Sistema de seguimiento post-lead',
    text: 'Armado a medida de tu negocio, para saber qué pasa con cada contacto después de que le llega a tu vendedor.',
  },
]

export default function Incluido() {
  return (
    <section id="incluido" className="border-t border-noche-linea bg-noche-fondo px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <span className="section-label-noche">Incluido</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-noche-texto sm:text-4xl lg:text-5xl">
            No te queda una campaña. Te queda un sistema.
          </h2>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2">
          {bonos.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="tarjeta-noche p-6 sm:p-7"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-noche-linea bg-noche-superficie-2 text-violeta-300">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-noche-texto">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-noche-suave">{b.text}</p>
              </motion.div>
            )
          })}
        </div>
        <Llamado texto="Las dos vienen incluidas cuando trabajás con nosotros." noche />
      </div>
    </section>
  )
}
