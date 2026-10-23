'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ChevronDown, TrendingUp } from 'lucide-react'
import VideoTestimonial from './VideoTestimonial'
import FeaturedLogoCase from './FeaturedLogoCase'

function CountUp({ target, prefix = '', suffix = '', inView }: { target: number; prefix?: string; suffix?: string; inView: boolean }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setValue(target >= 100 ? Math.round(v) : Math.round(v * 10) / 10),
    })
    return controls.stop
  }, [inView, target])

  return (
    <span>
      {prefix}{target >= 100 ? value.toLocaleString('es-AR') : value}{suffix}
    </span>
  )
}

const metrics = [
  { value: 1760, prefix: '+', suffix: '%', label: 'Crecimiento en ventas' },
  { value: 8, prefix: '', suffix: 'x', label: 'ROAS máximo alcanzado' },
  { value: 35.3, prefix: '', suffix: '%', label: 'Tasa de conversión' },
  { value: 12.9, prefix: '$', suffix: 'M', label: 'Facturación febrero 2026' },
]

const timeline = [
  { month: 'Nov 2025', sales: '4 ventas', revenue: '$694K', roas: 'ROAS 2.5x', phase: 'Testeo' },
  { month: 'Dic 2025', sales: '15 ventas', revenue: '$2.1M', roas: 'ROAS 2.5x', phase: 'Validación' },
  { month: 'Ene 2026', sales: '96 ventas', revenue: '$10.1M', roas: 'ROAS 8x', phase: 'Escalado' },
  { month: 'Feb 2026', sales: '102 ventas', revenue: '$12.9M', roas: 'ROAS 7x', phase: 'Consolidación' },
]

// Le Mardē contado como historia: cómo estaba, qué hicimos y qué pasó.
const historiaLeMarde = [
  { label: 'Antes', text: 'Buen producto y clientas fieles, pero sin un sistema de publicidad que convirtiera en ventas. Vendía 4 carteras por mes.' },
  { label: 'Qué hicimos', text: 'Ángulos de venta por producto, anuncios probados por etapas (testeo, validación, escalado) y ajustes semanales con datos reales.' },
  { label: 'Resultado', text: 'En 4 meses pasó a 102 ventas por mes y a facturar $12,9 millones en febrero.' },
]

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)
  const bandRef = useRef<HTMLDivElement>(null)
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.3 })
  const bandInView = useInView(bandRef, { once: true, amount: 0.3 })
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (sectionInView && typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', { content_name: 'Caso de Exito' })
    }
  }, [sectionInView])

  return (
    <section ref={sectionRef} id="caso-exito" className="bg-gradient-to-br from-surface-dark to-[#0f0f1e] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#c8a2e8]">
            Resultados comprobados
          </span>
          <h2 className="mb-3 mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Resultados reales de tiendas reales
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/60">
            No son casos de hace 5 años ni clientes que no conocemos.
            Son ecommerce que escalaron con nosotros — con números documentados mes a mes.
          </p>
        </motion.div>

        {/* BANDA DE MÉTRICAS AGREGADAS */}
        <motion.div
          ref={bandRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 grid grid-cols-2 gap-3 rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur-sm sm:grid-cols-4"
        >
          <div className="text-center">
            <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              <CountUp target={100} prefix="+$" suffix="K" inView={bandInView} />
            </div>
            <div className="mt-1 text-xs text-white/70">USD en pauta gestionada</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              <CountUp target={48} prefix="+" suffix="" inView={bandInView} />
            </div>
            <div className="mt-1 text-xs text-white/70">Ecommerce escalados</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              <CountUp target={8} prefix="" suffix="x" inView={bandInView} />
            </div>
            <div className="mt-1 text-xs text-white/70">ROAS promedio</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              <CountUp target={92} prefix="" suffix="M" inView={bandInView} />
            </div>
            <div className="mt-1 text-xs text-white/70">ARS facturados para clientes</div>
          </div>
        </motion.div>

        {/* 1. TESTIMONIO EN VIDEO — Green Power */}
        <VideoTestimonial
          video="/videos/testimonio-greenpower.mp4"
          poster="/images/testimonio-greenpower.jpg"
          title="De 10.000 USD a 50.000 USD por mes con su tienda de suplementos"
          description="Pasó de facturar 10.000 USD a 50.000 USD por mes."
          metrics={[
            { value: '10K USD', label: 'Antes, por mes' },
            { value: '50K USD', label: 'Ahora, por mes' },
            { value: 'x5', label: 'Su facturación' },
          ]}
          person="Facundo"
          role="Dueño de Green Power · Suplementos"
          brandLogo="/images/logo-greenpower.png"
          brandName="Green Power"
        />

        {/* 2. CASO CON LOGO — Derentas */}
        <FeaturedLogoCase
          logo="/images/logo-derentas.svg"
          brand="deRentas"
          tag="Alquiler de autos"
          title="La empresa N°1 de alquiler de autos para Uber"
          description="Le manejamos toda la publicidad digital."
        />

        {/* 3. Le Mardē — contado como historia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6 rounded-2xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-sm sm:p-8"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-violet px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              <TrendingUp size={12} /> Carteras artesanales
            </span>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="relative mb-4 h-9 w-44">
                <Image src="/images/logo-lemarde.png" alt="Le Mardé" fill sizes="176px" className="object-contain object-left" />
              </div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                De 4 a 102 ventas por mes en solo 4 meses
              </h3>
            </div>
            <div className="text-center md:text-right">
              <div className="font-display text-6xl font-extrabold text-[#c8a2e8] sm:text-7xl">
                +1.760%
              </div>
              <p className="mt-1 text-sm text-white/70">Crecimiento en ventas</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {historiaLeMarde.map((h, i) => (
              <div key={h.label} className="rounded-xl bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-violet text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#c8a2e8]">{h.label}</span>
                </div>
                <p className="text-sm text-white/75">{h.text}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-violet transition-all hover:bg-white/90 hover:shadow-lg"
          >
            {expanded ? 'Cerrar detalle' : 'Ver los números mes a mes'}
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={16} />
            </motion.div>
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div ref={metricsRef} className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {metrics.map((m) => (
                    <div key={m.label} className="rounded-lg bg-white/10 p-4 text-center">
                      <div className="mb-1 font-display text-3xl font-extrabold text-[#c8a2e8] sm:text-4xl">
                        <CountUp target={m.value} prefix={m.prefix} suffix={m.suffix} inView={metricsInView} />
                      </div>
                      <div className="text-xs text-white/70">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {timeline.map((t) => (
                    <div key={t.month} className="rounded-lg bg-white/5 p-4">
                      <div className="mb-1 text-xs font-semibold text-[#c8a2e8]">{t.phase}</div>
                      <div className="text-sm font-bold text-white">{t.month}</div>
                      <div className="mt-2 space-y-1 text-xs text-white/60">
                        <div>{t.sales}</div>
                        <div>{t.revenue}</div>
                        <div>{t.roas}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 4. Pullbag + enlace al resto de los casos */}
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur-sm sm:p-8"
          >
            <div className="mb-3 flex items-center gap-2">
              <TrendingUp size={14} className="text-[#c8a2e8]" />
              <span className="text-xs font-medium text-white/50">Accesorios ecológicos</span>
            </div>
            <div className="relative mb-3 h-8 w-36">
              <Image src="/images/logo-pullbag.svg" alt="Pullbag" fill sizes="144px" className="object-contain object-left" />
            </div>
            <div className="mt-3 font-display text-5xl font-extrabold text-[#c8a2e8]">$30M</div>
            <h3 className="mt-1 text-lg font-bold text-white">facturados en 60 días</h3>
            <p className="mt-1 text-sm text-white/70">Con un retorno de 10 pesos por cada peso invertido en publicidad.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col justify-center gap-5 rounded-2xl border border-dashed border-[#c8a2e8]/30 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
          >
            <div>
              <p className="font-display text-2xl font-bold text-white">Y hay muchos más</p>
              <p className="mt-1 text-white/60">Ecommerce escalando con el sistema ahora mismo.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-violet shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/90"
              >
                Quiero resultados así <ArrowRight size={16} />
              </a>
              <a
                href="/casos"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Ver más casos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
