'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

function CountUp({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
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
    <span ref={ref}>
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

const timeline = [
  { month: 'Nov', sales: '4 ventas', revenue: '$694K', size: 'h-3 w-3' },
  { month: 'Dic', sales: '15 ventas', revenue: '$2.1M', size: 'h-4 w-4' },
  { month: 'Ene', sales: '96 ventas', revenue: '$10.1M', size: 'h-6 w-6' },
  { month: 'Feb', sales: '102 ventas', revenue: '$12.9M', size: 'h-8 w-8' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (inView && typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', { content_name: 'Caso de Exito Le Marde' })
    }
  }, [inView])

  return (
    <section ref={sectionRef} id="caso-exito" className="bg-gradient-to-br from-[#2d1b4e] to-surface-dark px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="section-label">Caso de éxito comprobado</span>
          <h2 className="mb-2 mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            De 4 ventas a 102 por mes en 3 meses
          </h2>
          <p className="mb-12 text-lg text-gray-300">
            Ecommerce de carteras artesanales — Le Marde
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              className="rounded-xl bg-white/5 p-5 text-center backdrop-blur-sm sm:p-6"
            >
              <div className="mb-2 font-display text-3xl font-bold text-white sm:text-4xl">
                <CountUp target={m.value} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <div className="text-sm text-gray-400">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="relative"
        >
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 bg-brand-violet/30 sm:block" />

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {timeline.map((item, i) => (
              <motion.div
                key={item.month}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
                  },
                }}
                className="relative flex flex-col items-center text-center"
              >
                <div className={`${item.size} mb-3 rounded-full bg-brand-violet ring-4 ring-brand-violet/20`} />
                <div className="text-xs font-medium uppercase tracking-wider text-brand-violet">
                  {item.month}
                </div>
                <div className="mt-1 font-semibold text-white">{item.sales}</div>
                <div className="text-sm text-gray-400">{item.revenue}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <a href="#contacto" className="btn-primary">
            Quiero resultados como estos
          </a>
        </motion.div>
      </div>
    </section>
  )
}
