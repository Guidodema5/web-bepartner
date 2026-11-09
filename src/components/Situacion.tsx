'use client'

import { motion } from 'framer-motion'
import { MessageCircleOff, Sprout } from 'lucide-react'
import Llamado from './Llamado'

// "¿Cuál de estas es tu situación?" (Guido, 05/11/2026): las dos puertas de entrada del cliente ideal.
const situaciones = [
  {
    icon: MessageCircleOff,
    titulo: 'Te escriben, pero no te compran.',
    texto:
      'Ponés plata en anuncios y el WhatsApp se llena. Preguntan el precio, les respondés y no contestan más. Tu equipo pierde horas con gente que nunca iba a comprar, y a fin de mes no sabés si la publicidad te dio plata o te la sacó.',
  },
  {
    icon: Sprout,
    titulo: 'Todavía no tenés nada armado.',
    texto:
      'Tu negocio funciona y los clientes llegan porque alguien te recomendó. Pero hay meses buenos y meses flojos, y no dependen de vos. Sabés que tendrías que estar consiguiendo clientes por internet, pero no sabés por dónde empezar.',
  },
]

export default function Situacion() {
  return (
    <section id="situacion" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <span className="section-label">¿Te identificás?</span>
          <h2 className="section-title mt-3">¿Cuál de estas es tu situación?</h2>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2">
          {situaciones.map((x, i) => {
            const Icon = x.icon
            return (
              <motion.div
                key={x.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="tarjeta p-7"
              >
                <div className="icono h-11 w-11">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-text-heading">{x.titulo}</h3>
                <p className="mt-3 leading-relaxed text-text-secondary">{x.texto}</p>
              </motion.div>
            )
          })}
        </div>
        <Llamado />
      </div>
    </section>
  )
}
