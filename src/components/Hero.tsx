'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return controls.stop
  }, [inView, target])

  return <span ref={ref}>{value}{suffix}</span>
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

const stats = [
  { value: 100, prefix: '+$', suffix: 'K', label: 'USD en pauta gestionada' },
  { value: 48, prefix: '+', suffix: '', label: 'casos de éxito' },
  { value: 10, prefix: 'x', suffix: '', label: 'ROAS promedio' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-36">
      {/* Subtle gradient accent behind hero */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-brand-violet/5 blur-3xl" />

      <div className="mx-auto max-w-5xl text-center">
        {/* Pill */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 inline-block rounded-full bg-brand-violet px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white"
        >
          Agencia especializada en ecommerce
        </motion.div>

        {/* Headline — ABOVE the VSL */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-5 font-display text-4xl font-extrabold leading-tight text-text-heading sm:text-5xl lg:text-6xl"
        >
          Ayudamos a escalar tu tienda online a facturar{' '}
          <span className="bg-gradient-to-r from-brand-violet to-[#9b59b6] bg-clip-text text-transparent">
            $50 millones
          </span>{' '}
          en 90 días
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary sm:text-xl"
        >
          Un sistema probado de publicidad digital, optimización de tienda y herramientas exclusivas.
          Sin fórmulas mágicas. Con datos reales.
        </motion.p>

        {/* CTA */}
        <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
          <a href="#contacto" className="btn-primary gap-2 text-lg">
            QUIERO MI AUDITORÍA GRATUITA <ArrowRight size={20} />
          </a>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-text-secondary">
            <span className="inline-block h-2 w-2 rounded-full bg-status-negative" />
            Solo 5 cupos disponibles
          </div>
        </motion.div>

        {/* VSL Placeholder — BELOW the headline */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mb-16 flex aspect-video max-w-3xl items-center justify-center rounded-2xl bg-gradient-to-br from-[#2d1b4e] to-surface-dark shadow-2xl ring-1 ring-white/10"
        >
          {/* Reemplazar con embed de YouTube/Vimeo cuando el VSL esté listo */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform hover:scale-110">
              <Play className="ml-1 text-white" size={28} fill="white" />
            </div>
            <span className="text-sm text-white/60">Video próximamente</span>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        custom={5}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="card flex flex-col items-center gap-1 text-center"
          >
            <span className="font-display text-3xl font-bold text-text-heading sm:text-4xl">
              {stat.prefix === 'x' ? (
                <>x<CountUp target={stat.value} suffix={stat.suffix} /></>
              ) : stat.prefix === '+$' ? (
                <span>+$<CountUp target={stat.value} suffix="K" /></span>
              ) : (
                <>+<CountUp target={stat.value} suffix={stat.suffix} /></>
              )}
            </span>
            <span className="text-sm text-text-secondary">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
