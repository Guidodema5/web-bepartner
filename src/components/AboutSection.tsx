'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BarChart3, Users, TrendingUp } from 'lucide-react'

const miniStats = [
  { icon: BarChart3, label: '+$100K USD en pauta gestionada' },
  { icon: Users, label: 'Portal de clientes propio' },
  { icon: TrendingUp, label: 'Modelo de comisión alineado' },
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">
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
          className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg"
        >
          <div className="mb-6 flex flex-col items-center gap-5 sm:flex-row">
            {/* Profile photo */}
            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full border-4 border-brand-violet/20 bg-brand-violet-light shadow-lg sm:h-36 sm:w-36">
              <Image
                src="/demaria.jpg"
                alt="Guido Demaria — Fundador de Bepartner"
                fill
                className="object-cover object-[30%_30%]"
                sizes="144px"
              />
            </div>
            <div>
              <h3 className="mb-1 text-center text-xl font-bold text-text-heading sm:text-left">
                Guido Demaria — Fundador
              </h3>
              <p className="text-center text-text-secondary sm:text-left">
                Creé Bepartner porque me cansé de ver cómo cobran por hacer anuncios sin importarles si el cliente crece. Acá nos jugamos por tus resultados.
              </p>
            </div>
          </div>

          <p className="mb-6 text-text-primary">
            Bepartner nació de ver cómo le venden anuncios a los dueños de tiendas
            sin importarles si crecen o no. Construimos un sistema
            propio — con portal, herramientas y metodología — porque creemos que
            si el cliente no crece, nosotros no deberíamos cobrar.
          </p>

          {/* Mini stats */}
          <div className="grid gap-4 border-t border-gray-100 pt-6 sm:grid-cols-3">
            {miniStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-violet-light">
                    <Icon size={18} className="text-brand-violet" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">{stat.label}</span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
