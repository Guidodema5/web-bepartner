'use client'

import { motion } from 'framer-motion'
import Llamado from './Llamado'
import Image from 'next/image'
import { Cpu, Sparkles, BarChart3, Target } from 'lucide-react'

// La app para clientes, con lo que ve un cliente de leads (Guido, 09/11/2026: vuelve a la portada después del caso).
const features = [
  {
    icon: Sparkles,
    title: 'Qué grabar cada semana, con la guía de cada video.',
  },
  {
    icon: BarChart3,
    title: 'Tus leads y tu costo por lead, al día.',
  },
  {
    icon: Target,
    title: 'Qué campaña te trae los mejores leads.',
  },
]

export default function PortalSection() {
  return (
    <section id="app" className="bg-noche-fondo px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-noche-linea-fuerte px-3 py-1.5">
                <Cpu size={13} className="text-violeta-300" />
                <span className="section-label-noche">Nuestra app</span>
              </div>
              <h2 className="section-title mb-8 mt-2 text-noche-texto">
                Tu contenido y tus leads, en una sola app.
              </h2>
            </motion.div>

            <div className="space-y-4">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.05 }}
                    className="flex gap-3"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-noche-linea bg-noche-superficie-2 text-violeta-300">
                      <Icon size={17} strokeWidth={1.75} />
                    </div>
                    <p className="self-center font-medium text-noche-texto">{f.title}</p>
                  </motion.div>
                )
              })}
            </div>

          </div>

          {/* La app con datos de ejemplo de un cliente de leads (09/11/2026); dice "Datos de ejemplo" en la imagen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            <Image
              src="/images/app-leads-ejemplo.png"
              alt="App de Bepartner con datos de ejemplo: inversión, leads calificados y costo por lead por campaña y por mes"
              width={2640}
              height={1280}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="h-auto w-full"
            />
          </motion.div>
        </div>
        <Llamado texto="La app viene incluida cuando trabajás con nosotros." noche />
      </div>
    </section>
  )
}
