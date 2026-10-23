'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, Cog, BadgeCheck, LayoutDashboard, ArrowRight } from 'lucide-react'

// Fundador y "por qué nosotros" en una sola sección, a pedido de Guido.
const pillars = [
  {
    icon: Target,
    title: 'Vamos a resultados',
    text: 'No vendemos entregables. Si vos crecés, nosotros crecemos.',
  },
  {
    icon: Cog,
    title: 'Trabajamos producto, oferta, anuncios y web',
    text: 'Ordenamos las 4 ruedas antes de poner la nafta.',
  },
  {
    icon: BadgeCheck,
    title: 'Elegimos a quién aceptamos',
    text: 'Si te aceptamos, es porque sabemos que te podemos hacer crecer.',
  },
  {
    icon: LayoutDashboard,
    title: 'Te queda un sistema, la app y tus números claros',
    text: 'Ves la evolución desde el día 1, sin esperar reportes.',
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
                Creé Bepartner porque me cansé de ver cómo les cobran a los dueños de tiendas por hacer anuncios, sin importarles si crecen. Por eso no vendemos entregables: nos metemos de lleno en tu negocio y vamos a resultados. Si vos crecés, nosotros crecemos.
              </p>
            </div>
          </div>

          {/* Por qué nosotros */}
          <div className="grid gap-5 border-t border-gray-100 pt-6 sm:grid-cols-2">
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-brand-violet">
                    <Icon size={22} className="text-white" />
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

        <div className="mt-8 text-center">
          <a href="#contacto" className="btn-primary gap-2">
            Agendá tu llamada <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
