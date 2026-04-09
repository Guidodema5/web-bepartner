'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

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
  { value: 12.9, prefix: '$', suffix: 'M', label: 'Facturación en febrero' },
]

const bars = [
  { month: 'Nov', sales: 4, revenue: '$694K', height: 5 },
  { month: 'Dic', sales: 15, revenue: '$2.1M', height: 16 },
  { month: 'Ene', sales: 96, revenue: '$10.1M', height: 78 },
  { month: 'Feb', sales: 102, revenue: '$12.9M', height: 100 },
]

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.3 })
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (sectionInView && typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', { content_name: 'Caso de Exito' })
    }
  }, [sectionInView])

  return (
    <section ref={sectionRef} id="caso-exito" className="bg-brand-violet-dark px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/70">
            Casos de éxito comprobados
          </span>
          <h2 className="mb-3 mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Resultados reales de tiendas reales
          </h2>
        </motion.div>

        {/* Cases Gallery */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* CARD 1 — Real case */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
          >
            <span className="text-xs font-medium text-white/60">Moda femenina — Argentina</span>
            <h3 className="mt-2 text-xl font-bold text-white">
              Ecommerce de carteras artesanales
            </h3>
            <div className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
              +1.760%
            </div>
            <p className="mt-1 text-sm text-white/70">en ventas</p>
            <p className="mt-3 text-white/80">
              De 4 a 102 ventas/mes en 3 meses
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-violet transition-all hover:bg-white/90 hover:shadow-lg"
            >
              {expanded ? 'Cerrar detalle' : 'Ver caso completo'}
              <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={16} />
              </motion.div>
            </button>
          </motion.div>

          {/* CARD 2 — Placeholder for future case */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/30 p-6 text-center"
          >
            <p className="mb-3 text-lg font-semibold text-white/80">
              ¿Querés ser nuestro próximo caso?
            </p>
            <p className="mb-4 text-sm text-white/50">
              Estamos sumando nuevos ecommerce al sistema
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-violet transition-all hover:bg-white/90 hover:shadow-lg"
            >
              Aplicar ahora <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Expanded detail panel */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-6 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
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

                {/* Bar Chart */}
                <div className="mb-6 rounded-lg bg-white/5 p-6">
                  <h4 className="mb-4 text-center text-xs font-medium uppercase tracking-wider text-white/50">
                    Evolución de facturación
                  </h4>
                  <div className="flex items-end justify-center gap-4 sm:gap-8" style={{ height: '180px' }}>
                    {bars.map((bar, i) => (
                      <motion.div
                        key={bar.month}
                        className="flex flex-col items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.15, duration: 0.5 }}
                      >
                        <span className="text-xs font-semibold text-white sm:text-sm">{bar.revenue}</span>
                        <motion.div
                          className="w-12 rounded-t-md bg-white sm:w-16"
                          initial={{ height: 0 }}
                          animate={{ height: `${bar.height * 1.4}px` }}
                          transition={{ delay: i * 0.15 + 0.3, duration: 0.8, ease: 'easeOut' }}
                        />
                        <span className="text-xs font-medium text-white/70">{bar.month}</span>
                        <span className="text-[10px] text-white/50">{bar.sales} ventas</span>
                      </motion.div>
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
      </div>
    </section>
  )
}
