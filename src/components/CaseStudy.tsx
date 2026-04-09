'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

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

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (sectionInView && typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', { content_name: 'Caso de Exito' })
    }
  }, [sectionInView])

  return (
    <section ref={sectionRef} id="caso-exito" className="bg-gradient-to-br from-[#2d1b4e] to-surface-dark px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="section-label">Caso de éxito comprobado</span>
          <h2 className="mb-2 mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            De 4 ventas a 102 por mes en 3 meses
          </h2>
          <p className="text-lg text-gray-300">
            Ecommerce de carteras artesanales — Argentina
          </p>
          <p className="mb-10 mt-1 text-sm text-gray-400">
            Buen producto, clientas fieles, pero sin sistema de publicidad que convirtiera en ventas escalables.
          </p>
        </motion.div>

        {/* Metrics */}
        <div ref={metricsRef}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="mb-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
          >
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                variants={childVariants}
                className="rounded-xl bg-white/5 p-5 text-center backdrop-blur-sm sm:p-6"
              >
                <div className="mb-2 font-display text-3xl font-bold text-white sm:text-4xl">
                  <CountUp target={m.value} prefix={m.prefix} suffix={m.suffix} inView={metricsInView} />
                </div>
                <div className="text-sm text-gray-400">{m.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 rounded-xl bg-white/5 p-6 backdrop-blur-sm sm:p-8"
        >
          <h3 className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-400">
            Evolución de facturación
          </h3>
          <div className="flex items-end justify-center gap-4 sm:gap-8" style={{ height: '200px' }}>
            {bars.map((bar, i) => (
              <motion.div
                key={bar.month}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <span className="text-xs font-semibold text-white sm:text-sm">{bar.revenue}</span>
                <motion.div
                  className="w-12 rounded-t-md bg-gradient-to-t from-brand-violet to-[#9b59b6] sm:w-16"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${bar.height * 1.6}px` }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.8, ease: 'easeOut' }}
                />
                <span className="text-xs font-medium text-gray-400">{bar.month}</span>
                <span className="text-[10px] text-gray-500">{bar.sales} ventas</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <a href="#contacto" className="btn-primary">
            Quiero resultados como estos
          </a>
        </motion.div>
      </div>
    </section>
  )
}
