'use client'

import { motion } from 'framer-motion'
import Llamado from './Llamado'
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
    <section id="app" className="border-t border-noche-linea bg-noche-fondo px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
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
              <h2 className="section-title mt-2 text-noche-texto">
                Cada semana sabés qué grabar y cuánto te deja cada anuncio.
              </h2>
              <p className="mb-8 mt-4 text-lg text-noche-suave">
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
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-noche-linea bg-noche-superficie-2 text-violeta-300">
                      <Icon size={17} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-noche-texto">{f.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-noche-suave">{f.description}</p>
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
                className="btn-primary text-sm"
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
        <Llamado texto="La app viene incluida cuando trabajás con nosotros." noche />
      </div>
    </section>
  )
}
