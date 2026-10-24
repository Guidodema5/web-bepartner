'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Script from 'next/script'

const YOUTUBE_VIDEO_ID = 'cPdVI5AvztA'
// Oculto a pedido de Guido (19/10/2026). Para volver a mostrarlo, poner true.
const MOSTRAR_VIDEO = false

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
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

function YouTubePlayer({ videoId }: { videoId: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YT.Player | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const initPlayer = () => {
      if (!containerRef.current) return
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: { rel: 0, modestbranding: 1 },
      })
    }

    if (window.YT && window.YT.Player) {
      initPlayer()
    } else {
      window.onYouTubeIframeAPIReady = initPlayer
    }
  }, [videoId])

  return (
    <>
      <Script src="https://www.youtube.com/iframe_api" strategy="lazyOnload" />
      <div ref={containerRef} className="h-full w-full" />
    </>
  )
}

const stats = [
  { value: 100, prefix: '+$', suffix: 'K', label: 'USD en pauta gestionada' },
  { value: 48, prefix: '+', suffix: '', label: 'casos de éxito' },
  { value: 6, prefix: '+', suffix: ' años', label: 'de experiencia' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-brand-violet/[0.06] blur-3xl" />

      <div className="mx-auto max-w-5xl text-center">
        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-linea bg-surface-card px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-text-secondary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" />
          Especialistas en tiendas online
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="mb-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text-heading sm:text-5xl lg:text-[64px]"
        >
          ¿Tenés una tienda online y{' '}
          <span className="text-brand-violet">hace meses que facturás lo mismo</span>?
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary sm:text-xl"
        >
          Sabemos cómo llevar tu marca a ser líder en lo que hace.
        </motion.p>

        {/* YouTube Video */}
        {MOSTRAR_VIDEO && <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="mx-auto mb-8 max-w-4xl"
        >
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-linea bg-gradient-to-br from-brand-violet-dark to-surface-dark shadow-2xl">
            <YouTubePlayer videoId={YOUTUBE_VIDEO_ID} />
          </div>
        </motion.div>}

        {/* CTA — locked until 25% video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="mb-8 flex flex-col items-center gap-3"
        >
          <a href="#contacto" className="btn-primary gap-2 text-base">
            Quiero mi auditoría gratuita <ArrowRight size={18} />
          </a>
          <span className="flex items-center gap-2 text-sm text-text-secondary">
            <span className="inline-block h-2 w-2 rounded-full bg-status-negative" />
            Solo 5 cupos disponibles este mes
          </span>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        className="mx-auto grid max-w-4xl grid-cols-3 gap-3 sm:gap-4"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="tarjeta flex flex-col items-center gap-1.5 p-3 text-center sm:p-5"
          >
            <span className="font-display text-xl font-semibold tabular-nums tracking-tight text-text-heading sm:text-3xl">
              {stat.prefix === '+$' ? (
                <span>+$<CountUp target={stat.value} suffix="K" /></span>
              ) : stat.prefix === '+' ? (
                <>+<CountUp target={stat.value} suffix={stat.suffix} /></>
              ) : (
                <><CountUp target={stat.value} suffix="x" /></>
              )}
            </span>
            <span className="text-xs text-text-secondary sm:text-[13px]">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
