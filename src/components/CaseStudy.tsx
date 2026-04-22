'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, TrendingUp, Quote } from 'lucide-react'

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
  { value: 8, prefix: '', suffix: 'x', label: 'ROAS máximo' },
  { value: 35.3, prefix: '', suffix: '%', label: 'Tasa de conversión' },
  { value: 12.9, prefix: '$', suffix: 'M ARS', label: 'Facturación en febrero 2026' },
]

const timelineNodes = [
  { month: 'Nov', size: 'sm', sales: '4 ventas', revenue: '$694K ARS', highlighted: false },
  { month: 'Dic', size: 'md', sales: '15 ventas', revenue: '$2.1M ARS', highlighted: false },
  { month: 'Ene', size: 'lg', sales: '96 ventas', revenue: '$10.1M ARS', highlighted: true },
  { month: 'Feb', size: 'xl', sales: '102 ventas', revenue: '$12.9M ARS', highlighted: true, isFinal: true },
]

const secondaryCases = [
  {
    tag: 'E-commerce / Moda',
    title: 'Tienda de sweaters: $50M en 70 días',
    metric: '$50M',
    subtitle: 'En 70 días — arrancó facturando $460K',
    description: 'Marca de sweaters que pasó de vender $460.000 por mes a facturar 50 millones en apenas 70 días. Una estrategia de escalado agresivo con ángulos de comunicación segmentados por temporada.',
  },
  {
    tag: 'E-commerce / Productos ecológicos',
    title: 'Ecoproductos: $30M en 60 días con ROAS 10x',
    metric: '+350%',
    subtitle: '$30M en 60 días · ROAS 10x promedio',
    description: 'Tienda online de productos ecológicos que multiplicó su facturación por 3.5x en 60 días manteniendo un ROAS promedio de 10x. El sistema probó que nicho no es limitante cuando la estrategia está bien diseñada.',
  },
  {
    tag: 'E-commerce / Accesorios',
    title: 'Pullbag: +350% facturación y ROAS de 10',
    metric: '350%',
    subtitle: '+350% facturación · ROAS 10x',
    description: 'Marca de mochilas y accesorios que pasó de vender por redes sociales a escalar con Meta Ads. Alcanzaron un ROAS de 10x en su mejor mes.',
  },
  {
    tag: 'Servicio / Movilidad',
    title: 'Derentas: +300% en leads calificados',
    metric: '300%',
    subtitle: '+300% leads calificados',
    description: 'Empresa de alquiler de vehículos que triplicó sus leads calificados con una estrategia de embudo completo en Meta Ads.',
  },
]

const sizeMap = {
  sm: 'h-12 w-12 text-xs',
  md: 'h-16 w-16 text-sm',
  lg: 'h-20 w-20 text-base',
  xl: 'h-24 w-24 text-lg',
} as const

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.3 })
  const [expandedSecondary, setExpandedSecondary] = useState<number | null>(null)

  useEffect(() => {
    if (sectionInView && typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', { content_name: 'Caso de Exito' })
    }
  }, [sectionInView])

  return (
    <section
      ref={sectionRef}
      id="caso-exito"
      className="relative overflow-hidden bg-gradient-to-br from-[#2d1b4e] to-[#1a1a2e] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Grid pattern — visible on dark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full border border-brand-violet/40 bg-brand-violet/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#c8a2e8]">
            Caso de éxito documentado
          </span>
          <h2 className="mb-3 mt-4 font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            De 4 ventas a 102 por mes.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70 sm:text-xl">
            3 meses. 1 sistema. Ecommerce de carteras artesanales — Le Marde.
          </p>
        </motion.div>

        {/* HUGE METRICS — heart of the section */}
        <div ref={metricsRef} className="mb-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all hover:border-brand-violet/40 hover:bg-white/10 sm:p-8"
            >
              <div className="font-display text-4xl font-extrabold leading-none text-[#c8a2e8] sm:text-5xl lg:text-[56px]">
                <CountUp target={m.value} prefix={m.prefix} suffix={m.suffix} inView={metricsInView} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-wider text-white/60 sm:text-sm">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* TIMELINE — growing nodes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
        >
          <h3 className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
            Evolución mes a mes
          </h3>

          {/* Desktop: horizontal */}
          <div className="hidden md:block">
            <div className="relative flex items-center justify-between">
              {/* Connector line */}
              <div className="absolute left-[8%] right-[8%] top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-white/20 via-brand-violet/40 to-brand-violet" />

              {timelineNodes.map((node, i) => (
                <motion.div
                  key={node.month}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className="mb-3 text-xs font-medium text-white/50">{node.month}</div>
                  <div
                    className={`flex items-center justify-center rounded-full font-display font-bold shadow-lg ${sizeMap[node.size as keyof typeof sizeMap]} ${
                      node.highlighted
                        ? node.isFinal
                          ? 'bg-brand-violet text-white ring-4 ring-brand-violet/30'
                          : 'bg-[#c8a2e8] text-[#2d1b4e]'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {node.month}
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-sm font-semibold text-white">{node.sales}</div>
                    <div className="text-xs text-white/50">{node.revenue}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical */}
          <div className="flex flex-col gap-4 md:hidden">
            {timelineNodes.map((node, i) => (
              <motion.div
                key={node.month}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div
                  className={`flex flex-shrink-0 items-center justify-center rounded-full font-display font-bold ${sizeMap[node.size as keyof typeof sizeMap]} ${
                    node.highlighted
                      ? node.isFinal
                        ? 'bg-brand-violet text-white ring-4 ring-brand-violet/30'
                        : 'bg-[#c8a2e8] text-[#2d1b4e]'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  {node.month}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{node.sales}</div>
                  <div className="text-xs text-white/50">{node.revenue}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* QUOTE — client context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-10 rounded-xl border-l-4 border-brand-violet bg-white/5 p-6 backdrop-blur-sm sm:p-8"
        >
          <Quote size={28} className="mb-3 text-brand-violet" />
          <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
            &ldquo;Buen producto, showroom activo, clientas fieles. Pero las ventas online eran
            impredecibles. En 3 meses pasamos a tener un sistema que vende todos los días.&rdquo;
          </p>
          <p className="mt-4 text-sm text-white/50">
            — Le Marde, ecommerce de carteras artesanales, Argentina
          </p>
        </motion.div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-violet px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-violet-hover hover:shadow-xl"
          >
            Quiero resultados como estos <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Secondary cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Y no es el único
          </h3>
          <p className="mt-2 text-white/60">Otros ecommerce que escalaron con el sistema</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {secondaryCases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-brand-violet/30 hover:bg-white/10"
            >
              <div className="mb-3 flex items-center gap-2">
                <TrendingUp size={14} className="text-brand-violet" />
                <span className="text-xs font-medium text-white/50">{c.tag}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{c.title}</h3>
              <div className="mt-3 font-display text-4xl font-bold text-[#c8a2e8]">{c.metric}</div>
              <p className="mt-1 text-sm text-white/60">{c.subtitle}</p>

              <button
                onClick={() => setExpandedSecondary(expandedSecondary === i ? null : i)}
                className="mt-4 text-sm font-medium text-brand-violet transition-colors hover:text-white"
              >
                {expandedSecondary === i ? 'Cerrar' : 'Ver caso completo →'}
              </button>

              <AnimatePresence>
                {expandedSecondary === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm text-white/70">{c.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
