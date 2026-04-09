'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Sparkles, TrendingUp, Calculator, DollarSign, Target, ShoppingCart, ArrowUpRight } from 'lucide-react'

const tabs = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'analisis', label: 'Análisis' },
  { id: 'calculadora', label: 'Calculadora' },
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
          className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-surface-warm shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-2 text-xs text-gray-400">bepartnerclientes.com.ar</span>
          </div>
          <div className="relative bg-gray-50 p-4 sm:p-6">
            {/* Dashboard tab */}
            <div className={`transition-opacity duration-300 ${activeTab === 'dashboard' ? 'opacity-100' : 'hidden'}`}>
              <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: 'Facturación', value: '$12.9M', icon: DollarSign, change: '+42%' },
                  { label: 'ROAS', value: '8.2x', icon: Target, change: '+1.3x' },
                  { label: 'Conversión', value: '35.3%', icon: ArrowUpRight, change: '+8.1%' },
                  { label: 'Ventas', value: '102', icon: ShoppingCart, change: '+580%' },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg bg-white p-3 shadow-sm sm:p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <m.icon size={16} className="text-brand-violet" />
                      <span className="text-xs font-medium text-emerald-500">{m.change}</span>
                    </div>
                    <div className="text-lg font-bold text-text-heading sm:text-xl">{m.value}</div>
                    <div className="text-xs text-text-secondary">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-3 text-xs font-semibold text-text-secondary">Facturación mensual</div>
                  <div className="flex items-end gap-2 sm:gap-3" style={{ height: '100px' }}>
                    {[30, 45, 38, 60, 52, 75, 90, 100].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t bg-brand-violet/20" style={{ height: `${h}%` }}>
                        <div className="h-full rounded-t bg-brand-violet" style={{ height: `${Math.min(100, h + 10)}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-3 text-xs font-semibold text-text-secondary">Top productos</div>
                  <div className="space-y-2">
                    {['Cartera Roma', 'Bolso Milano', 'Clutch Paris'].map((p, i) => (
                      <div key={p} className="flex items-center gap-2">
                        <div className="h-2 flex-1 rounded-full bg-gray-100">
                          <div className="h-full rounded-full bg-brand-violet" style={{ width: `${100 - i * 25}%` }} />
                        </div>
                        <span className="text-[10px] text-text-secondary">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Análisis tab */}
            <div className={`transition-opacity duration-300 ${activeTab === 'analisis' ? 'opacity-100' : 'hidden'}`}>
              <div className="mb-4 rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-3 text-xs font-semibold text-text-secondary">Análisis semanal — Semana 12</div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'CTR', value: '3.2%', status: 'text-emerald-500' },
                    { label: 'CPA', value: '$2,450', status: 'text-emerald-500' },
                    { label: 'CPM', value: '$1,890', status: 'text-amber-500' },
                  ].map((m) => (
                    <div key={m.label} className="text-center">
                      <div className={`text-lg font-bold ${m.status}`}>{m.value}</div>
                      <div className="text-xs text-text-secondary">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 text-xs font-semibold text-text-secondary">Campañas activas</div>
                  <div className="space-y-2">
                    {['Prospecting - TOF', 'Retargeting - MOF', 'Remarketing - BOF'].map((c) => (
                      <div key={c} className="flex items-center justify-between rounded bg-gray-50 px-3 py-2 text-xs">
                        <span className="text-text-primary">{c}</span>
                        <span className="font-medium text-emerald-500">Activa</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 text-xs font-semibold text-text-secondary">Diagnóstico</div>
                  <div className="space-y-2 text-xs text-text-secondary">
                    <div className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                      <span>ROAS por encima del objetivo</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                      <span>CPM subiendo, optimizar audiencias</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                      <span>Conversión estable en 35%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculadora tab */}
            <div className={`transition-opacity duration-300 ${activeTab === 'calculadora' ? 'opacity-100' : 'hidden'}`}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-3 text-xs font-semibold text-text-secondary">Calculadora de ROAS</div>
                  <div className="space-y-3">
                    {[
                      { label: 'Precio de venta', value: '$45.000' },
                      { label: 'Costo del producto', value: '$18.000' },
                      { label: 'Costo de envío', value: '$3.500' },
                      { label: 'Comisión plataforma', value: '5%' },
                    ].map((f) => (
                      <div key={f.label}>
                        <div className="mb-1 text-[10px] text-text-secondary">{f.label}</div>
                        <div className="rounded border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-text-primary">{f.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="rounded-lg bg-brand-violet p-4 text-white shadow-sm">
                    <div className="mb-1 text-xs text-white/70">ROAS de corte</div>
                    <div className="text-3xl font-bold">2.1x</div>
                    <div className="mt-1 text-xs text-white/70">Mínimo para no perder margen</div>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-1 text-xs text-text-secondary">Margen neto</div>
                    <div className="text-2xl font-bold text-emerald-500">$21.250</div>
                    <div className="text-xs text-text-secondary">por venta</div>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-1 text-xs text-text-secondary">CPA máximo</div>
                    <div className="text-2xl font-bold text-brand-violet">$21.250</div>
                    <div className="text-xs text-text-secondary">antes de perder plata</div>
                  </div>
                </div>
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
