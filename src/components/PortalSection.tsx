'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Cpu, Sparkles, BarChart3, Calculator } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Tus anuncios de la semana, listos para grabar.',
    description:
      'Ideas pensadas para tus productos y tus clientas, con la guía de cada video: cómo arranca, qué mostrar y ejemplos reales. Detrás está el método con el que trabajamos tus campañas.',
  },
  {
    icon: BarChart3,
    title: 'Tus métricas, claras y al día.',
    description:
      'Facturación, ventas, retorno y costo por venta, semana a semana y mes a mes, sin esperar reportes. Ves qué campañas y qué videos te están trayendo plata.',
  },
  {
    icon: Calculator,
    title: 'Calculadora de ROAS por producto.',
    description:
      'Cargás tus costos y sabés cuál es el retorno mínimo para ganar plata y cuánto podés invertir por venta sin perder.',
  },
]

export default function PortalSection() {
  return (
    <section id="app" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-violet-light px-3 py-1.5">
                <Cpu size={14} className="text-brand-violet" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-violet">
                  Nuestra app
                </span>
              </div>
              <h2 className="section-title mt-2">
                Cada semana sabés qué grabar y cuánto te deja cada anuncio.
              </h2>
              <p className="mb-8 mt-4 text-lg text-text-secondary">
                La app que acompaña nuestro servicio: tus ideas de anuncios armadas con la estrategia de Bepartner y tus números claros, todo en un mismo lugar.
              </p>
            </motion.div>

            <div className="mb-8 space-y-5">
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
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-violet-light">
                      <Icon size={18} className="text-brand-violet" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-heading">{f.title}</h4>
                      <p className="mt-1 text-sm text-text-secondary">{f.description}</p>
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
            >
              <a
                href="https://bepartnerclientes.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-violet bg-brand-violet/10 px-6 py-3 text-sm font-semibold text-brand-violet transition-all hover:bg-brand-violet hover:text-white"
              >
                Acceso clientes
              </a>
            </motion.div>
          </div>

          {/* Captura real de la app (docs/web/app-anuncios-green-power.png de la app de anuncios) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            <Image
              src="/images/app-anuncios-green-power.png"
              alt="App de Bepartner: métricas de Green Power por campaña y facturación por mes"
              width={2640}
              height={1460}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
