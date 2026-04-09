'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Sparkles, TrendingUp, Calculator } from 'lucide-react'
import Image from 'next/image'

const tabs = [
  { id: 'dashboard', label: 'Dashboard', image: '/images/portal-dashboard.jpg' },
  { id: 'analisis', label: 'Análisis', image: '/images/portal-analisis.jpg' },
  { id: 'calculadora', label: 'Calculadora', image: '/images/portal-calculadora.jpg' },
]

const features = [
  {
    icon: BarChart3,
    title: 'Dashboard de métricas mensuales',
    description: 'Ve tu facturación, ROAS y conversión en tiempo real. Sin esperar reportes de fin de mes.',
  },
  {
    icon: Sparkles,
    title: 'Generador de anuncios ilimitados',
    description: 'Creá conceptos creativos para tus productos en minutos. Sin depender de la agencia para cada pieza.',
  },
  {
    icon: TrendingUp,
    title: 'Análisis semanal de campañas',
    description: 'Cada semana sabés exactamente qué optimizar. Con diagnóstico y próximos pasos claros.',
  },
  {
    icon: Calculator,
    title: 'Calculadora de ROAS por producto',
    description: 'Calculá tu ROAS de corte por producto. Sabé cuánto podés gastar sin perder margen.',
  },
]

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function PortalSection() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="section-label">Lo que ninguna agencia te da</span>
          <h2 className="section-title mb-4 mt-3">
            Un portal exclusivo con tus números en tiempo real
          </h2>
          <p className="mb-10 max-w-2xl text-lg text-text-secondary">
            Construimos una plataforma propia para tiendas online. Tus métricas,
            tus anuncios, tu ROAS — todo en un solo lugar, actualizado en tiempo
            real. Ninguna otra agencia te da esto.
          </p>
        </motion.div>

        {/* Tab pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-4 flex flex-wrap gap-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-brand-violet text-white'
                  : 'border border-gray-200 bg-transparent text-gray-800 hover:border-brand-violet/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Browser mockup with screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl"
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-2 text-xs text-gray-400">bepartnerclientes.com.ar</span>
          </div>
          {/* Screenshot area */}
          <div className="relative aspect-[16/10] bg-gray-100">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  activeTab === tab.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <Image
                  src={tab.image}
                  alt={`Portal de Clientes - ${tab.label}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 1152px"
                />
              </div>
            ))}
            {/* Fallback if images don't exist yet */}
            <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
              <div className="grid w-full max-w-lg grid-cols-2 gap-3 p-8 sm:grid-cols-4">
                {['Facturación', 'ROAS', 'Conversión', 'Inv. Ads'].map((m) => (
                  <div key={m} className="rounded-lg bg-white p-3 text-center shadow-sm">
                    <div className="mb-1 text-lg font-bold text-brand-violet">—</div>
                    <div className="text-xs text-gray-500">{m}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <motion.div key={feat.title} variants={childVariants} className="card">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-8 text-center"
        >
          <a href="#contacto" className="btn-secondary">
            Ver demo del portal
          </a>
        </motion.div>
      </div>
    </section>
  )
}
