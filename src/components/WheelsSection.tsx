'use client'

import { motion } from 'framer-motion'
import { Package, Gift, Megaphone, MonitorSmartphone, TrendingUp } from 'lucide-react'

const pilares = [
  { icon: Package, title: 'Producto', text: 'Definimos qué productos impulsar según margen, demanda y rentabilidad.' },
  { icon: Gift, title: 'Propuesta de valor', text: 'Construimos una oferta clara y diferencial para cada tipo de cliente.' },
  { icon: Megaphone, title: 'Anuncios', text: 'Creatividades basadas en datos, pensadas para generar ventas y no solo alcance.' },
  { icon: MonitorSmartphone, title: 'Sitio web', text: 'Optimizamos la experiencia de compra para que el tráfico se convierta en ventas.' },
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
          <span className="section-label">Nuestro método</span>
          <h2 className="section-title mt-3">
            La publicidad sola no hace crecer una marca.
          </h2>
          <p className="mt-5 text-lg text-text-secondary">
            Antes de invertir en pauta, alineamos los cuatro pilares que definen si una tienda online vende.
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6 text-center font-display text-xl font-semibold tracking-tight text-violeta-600"
        >
          Método de las 4 Ruedas
        </motion.h3>

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
          <TrendingUp size={20} strokeWidth={1.75} className="flex-shrink-0 text-violeta-600" />
          <p className="font-medium">
            Con las cuatro ruedas alineadas, escalamos la inversión en Meta, TikTok y Google.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
