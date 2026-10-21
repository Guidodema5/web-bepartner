'use client'

import { motion } from 'framer-motion'
import { Package, Gift, Megaphone, MonitorSmartphone, Fuel } from 'lucide-react'

const wheels = [
  { icon: Package, title: 'Producto', text: 'Elegimos qué empujar y dejamos claros tus números.' },
  { icon: Gift, title: 'Propuesta de valor', text: 'Armamos una oferta a la que le cueste decir que no.' },
  { icon: Megaphone, title: 'Anuncios', text: 'Que generen ganas de comprar, no solo que se vean lindos.' },
  { icon: MonitorSmartphone, title: 'Página web', text: 'Que la gente que llega, compre.' },
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
          <span className="section-label">El problema no es la publicidad</span>
          <h2 className="section-title mt-3">
            Seguramente te dijeron que el problema es la publicidad.
          </h2>
          <p className="mt-5 text-lg text-text-secondary">
            Que necesitás más anuncios, más inversión, mejores creativos. Lo probaste, y el número siguió igual.
          </p>
          <p className="mt-4 text-lg font-semibold text-text-heading">
            La publicidad es la nafta. Pero si las ruedas están mal, por más nafta que pongas, tu tienda no avanza.
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6 text-center font-display text-2xl font-bold text-brand-violet"
        >
          Método de las 4 Ruedas
        </motion.h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {wheels.map((w, i) => {
            const Icon = w.icon
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-brand-violet-light">
                  <Icon size={22} className="text-brand-violet" />
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
          className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-3 rounded-xl bg-brand-violet px-6 py-4 text-center text-white shadow-lg"
        >
          <Fuel size={22} className="flex-shrink-0" />
          <p className="font-medium">
            Recién ahí ponemos la nafta: la pauta en Meta, TikTok y donde haga falta.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
