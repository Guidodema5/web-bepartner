'use client'

import { motion } from 'framer-motion'
import { Users, Gift, Megaphone, MonitorSmartphone, Fuel } from 'lucide-react'

// Por qué pasa y el método (Guido, 05/11/2026): lo que ordenamos antes de invertir en pauta.
const pilares = [
  { icon: Users, title: '1. A quién le vendés', text: 'Quién te compra de verdad y dónde está.' },
  { icon: Gift, title: '2. Por qué te eligen', text: 'Por qué te tiene que elegir a vos y no a otro.' },
  { icon: Megaphone, title: '3. Qué le decís y dónde', text: 'Contenido que le hable solo a ese cliente y que venda.' },
  { icon: MonitorSmartphone, title: '4. Una página que filtra', text: 'Que la visita se convierta en un contacto para tu equipo.' },
]

export default function WheelsSection() {
  return (
    <section id="metodo" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="section-label">Por qué pasa</span>
          <h2 className="section-title mt-3">
            El problema no son los anuncios. Es lo que falta antes de prender la publicidad.
          </h2>
          <p className="mt-5 text-lg text-text-secondary">
            Antes de invertir un peso en pauta, ordenamos lo que hace que te consulte el que te puede comprar:
          </p>
        </motion.div>

        <h3 className="mb-6 text-center font-display text-2xl font-semibold tracking-tight text-text-heading">
          Nuestro sistema de 4 pilares
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {pilares.map((w, i) => {
            const Icon = w.icon
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="tarjeta flex items-start gap-4 p-5"
              >
                <div className="icono h-11 w-11">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="font-semibold text-text-heading">{w.title}</h4>
                  <p className="mt-1 text-text-secondary">{w.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-3 rounded-tarjeta border border-violeta-500/25 bg-brand-violet-light px-6 py-4 text-center text-text-heading"
        >
          <Fuel size={20} strokeWidth={1.75} className="flex-shrink-0 text-violeta-600" />
          <p className="font-medium">
            La publicidad es la nafta: la prendemos cuando el sistema está armado, para que lo multiplique.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
