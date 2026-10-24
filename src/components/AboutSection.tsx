'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, BadgeCheck } from 'lucide-react'

// Fundador y "por qué nosotros" en una sola sección, a pedido de Guido.
const pillars = [
  {
    icon: Target,
    title: 'Vamos a resultados',
    text: 'No vendemos entregables. Si vos crecés, nosotros crecemos.',
  },
  {
    icon: BadgeCheck,
    title: 'Elegimos a quién aceptamos',
    text: 'Si te aceptamos, es porque sabemos que te podemos hacer crecer.',
  },
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <span className="section-label">Quién está detrás</span>
          <h2 className="section-title mb-8 mt-3">
            No somos un proveedor más. Somos tu equipo de crecimiento.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="tarjeta p-8"
        >
          <div className="mb-6 flex flex-col items-center gap-5 sm:flex-row">
            {/* Profile photo */}
            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full border border-linea bg-surface-card-2 sm:h-36 sm:w-36">
              <Image
                src="/demaria.jpg"
                alt="Guido Demaria — Fundador de Bepartner"
                fill
                className="object-cover object-[30%_30%]"
                sizes="144px"
              />
            </div>
            <div>
              <h3 className="mb-1 text-center text-xl font-semibold text-text-heading sm:text-left">
                Guido Demaria — Fundador
              </h3>
              <p className="text-center text-text-secondary sm:text-left">
                Creé Bepartner porque me cansé de ver cómo les cobran a los dueños de tiendas por hacer anuncios, sin importarles si crecen. Por eso no vendemos entregables: nos metemos de lleno en tu negocio y vamos a resultados. Si vos crecés, nosotros crecemos.
              </p>
            </div>
          </div>

          {/* Por qué nosotros */}
          <div className="grid gap-5 border-t border-linea pt-6 sm:grid-cols-2">
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="flex items-start gap-4">
                  <div className="icono h-11 w-11">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-heading">{p.title}</h4>
                    <p className="mt-1 text-sm text-text-secondary">{p.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
