'use client'

import { motion } from 'framer-motion'
import { BarChart3, Sparkles, TrendingUp, Calculator } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Dashboard de métricas mensuales',
    description:
      'Ve tu facturación, ROAS, tasa de conversión e inversión en ads mes a mes desde el día uno.',
  },
  {
    icon: Sparkles,
    title: 'Generador de anuncios ilimitados',
    description:
      'Creá conceptos creativos para tus productos en minutos con nuestra metodología propia.',
  },
  {
    icon: TrendingUp,
    title: 'Análisis semanal de campañas',
    description:
      'Cada semana sabés exactamente qué optimizar en tus campañas de Meta.',
  },
  {
    icon: Calculator,
    title: 'Calculadora de ROAS por producto',
    description:
      'Calculá cuánto podés gastar por producto sin perder margen. Con cotización de dólar integrada.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function PortalSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="section-label">Lo que ninguna agencia te da</span>
          <h2 className="section-title mb-4 mt-3">
            Un portal exclusivo con tus números en tiempo real
          </h2>
          <p className="mb-12 max-w-2xl text-lg text-text-secondary">
            Construimos una plataforma propia para tiendas online. Tus métricas,
            tus anuncios, tu ROAS — todo en un solo lugar, actualizado en tiempo
            real. Ninguna otra agencia te da esto.
          </p>
        </motion.div>

        {/* Portal Mockup Placeholder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="mb-14 overflow-hidden rounded-2xl bg-gradient-to-br from-[#2d1b4e] to-surface-dark p-8 shadow-2xl sm:p-12"
        >
          {/* Reemplazar con screenshot real del portal */}
          <div className="flex flex-col items-center gap-6">
            <div className="grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
              {['Facturación', 'ROAS', 'Conversión', 'Inv. Ads'].map((metric) => (
                <div key={metric} className="rounded-lg bg-white/10 p-4 text-center backdrop-blur-sm">
                  <div className="mb-1 text-2xl font-bold text-white">--</div>
                  <div className="text-xs text-white/60">{metric}</div>
                </div>
              ))}
            </div>
            <div className="h-32 w-full max-w-3xl rounded-lg bg-white/5">
              <div className="flex h-full items-center justify-center text-sm text-white/40">
                Vista previa del dashboard — Screenshots próximamente
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid gap-6 sm:grid-cols-2"
        >
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <motion.div key={feat.title} variants={fadeUp} className="card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-violet-light">
                  <Icon size={24} className="text-brand-violet" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-heading">
                  {feat.title}
                </h3>
                <p className="text-text-secondary">{feat.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="mt-10 text-center"
        >
          <a href="#contacto" className="btn-secondary">
            Ver demo del portal
          </a>
        </motion.div>
      </div>
    </section>
  )
}
