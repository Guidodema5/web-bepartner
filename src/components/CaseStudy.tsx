'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, TrendingUp } from 'lucide-react'

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

const steps = [
  'Estrategia de comunicación y ángulos de venta por producto',
  'Embudo completo Meta Ads: testeo → validación → escalado → consolidación',
  'Optimización semanal basada en datos reales',
  'Acceso al Portal de Clientes con métricas en tiempo real',
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

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)
  const bandRef = useRef<HTMLDivElement>(null)
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.3 })
  const bandInView = useInView(bandRef, { once: true, amount: 0.3 })
  const [expanded, setExpanded] = useState(false)
  const [expandedSecondary, setExpandedSecondary] = useState<number | null>(null)

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
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-brand-violet">
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
          className="mb-10 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-4"
        >
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-white sm:text-3xl">
              <CountUp target={100} prefix="+$" suffix="K" inView={bandInView} />
            </div>
            <div className="mt-1 text-xs text-white/60">USD en pauta gestionada</div>
          </div>
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-white sm:text-3xl">
              <CountUp target={48} prefix="+" suffix="" inView={bandInView} />
            </div>
            <div className="mt-1 text-xs text-white/60">Ecommerce escalados</div>
          </div>
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-white sm:text-3xl">
              <CountUp target={8} prefix="" suffix="x" inView={bandInView} />
            </div>
            <div className="mt-1 text-xs text-white/60">ROAS promedio</div>
          </div>
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-white sm:text-3xl">
              <CountUp target={92} prefix="" suffix="M" inView={bandInView} />
            </div>
            <div className="mt-1 text-xs text-white/60">ARS facturados para clientes</div>
          </div>
        </motion.div>

        {/* CASO PRINCIPAL — Le Marde */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6 rounded-xl border border-brand-violet/30 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-brand-violet px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Caso destacado
            </span>
            <span className="text-xs font-medium text-brand-violet">E-commerce / Moda femenina</span>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Le Marde: De 4 a 102 ventas/mes en 3 meses
              </h3>
              <p className="mt-2 text-white/60">Ecommerce de carteras artesanales — Argentina</p>
            </div>
            <div className="text-center md:text-right">
              <div className="font-display text-5xl font-bold text-white sm:text-6xl">
                +1.760%
              </div>
              <p className="mt-1 text-sm text-white/60">Crecimiento en ventas</p>
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-violet transition-all hover:bg-white/90 hover:shadow-lg"
          >
            {expanded ? 'Cerrar detalle' : 'Ver caso completo'}
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={16} />
            </motion.div>
          </button>
        </motion.div>

        {/* Expanded detail — Le Marde */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                <p className="mb-6 text-white/80">
                  Buen producto, clientas fieles, pero sin sistema de publicidad que convirtiera en ventas escalables.
                </p>

                {/* Metrics */}
                <div ref={metricsRef}>
                  <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-lg bg-white/10 p-4 text-center backdrop-blur-sm"
                      >
                        <div className="mb-1 font-display text-2xl font-bold text-white sm:text-3xl">
                          <CountUp target={m.value} prefix={m.prefix} suffix={m.suffix} inView={metricsInView} />
                        </div>
                        <div className="text-xs text-white/60">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="mb-8">
                  <h4 className="mb-4 text-xs font-medium uppercase tracking-wider text-white/50">
                    Evolución mes a mes
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {timeline.map((t) => (
                      <div key={t.month} className="rounded-lg bg-white/5 p-4">
                        <div className="mb-1 text-xs font-semibold text-brand-violet">{t.phase}</div>
                        <div className="text-sm font-bold text-white">{t.month}</div>
                        <div className="mt-2 space-y-1 text-xs text-white/60">
                          <div>{t.sales}</div>
                          <div>{t.revenue}</div>
                          <div>{t.roas}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What we did */}
                <div className="mb-6">
                  <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-white/50">
                    Lo que hicimos
                  </h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-violet text-[10px] font-bold text-white">
                          {i + 1}
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-brand-violet transition-all hover:bg-white/90 hover:shadow-lg"
                  >
                    Quiero resultados como estos <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CASOS SECUNDARIOS — Grid 2x2 */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
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
              <div className="mt-3 font-display text-4xl font-bold text-white">{c.metric}</div>
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
