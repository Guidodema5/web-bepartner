'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Script from 'next/script'
import Link from 'next/link'

const YOUTUBE_VIDEO_ID = 'cPdVI5AvztA'

function CountUp({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
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

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString('es-AR')}
      {suffix}
    </span>
  )
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
  { value: 100, prefix: '+$', suffix: 'K USD', label: 'en pauta gestionada' },
  { value: 10, prefix: '+', suffix: '', label: 'ecommerce escalados con el sistema' },
  { value: 8, prefix: '', suffix: 'x', label: 'ROAS máximo alcanzado' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32"
    >
      {/* Decorative grid — very subtle on light bg */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(117,61,148,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(117,61,148,0.06) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-brand-violet/5 blur-3xl" />

      <div className="mx-auto max-w-5xl text-center">
        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6 inline-block rounded-full bg-brand-violet px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white"
        >
          Agencia especializada en ecommerce
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="mb-5 font-display text-4xl font-extrabold leading-[1.05] text-text-heading sm:text-5xl lg:text-6xl"
        >
          Tu tienda online vende.{' '}
          <span className="text-brand-violet">Pero no escala.</span>{' '}
          Nosotros sabemos por qué.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="mx-auto mb-10 max-w-3xl text-lg text-text-secondary sm:text-xl"
        >
          Instalamos el sistema completo que tu competencia ya tiene: publicidad que
          convierte, tienda optimizada y visibilidad total de tus números. En 90 días.
        </motion.p>

        {/* VSL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="mx-auto mb-8 max-w-4xl"
        >
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-[#2d1b4e] to-[#1a1a2e] shadow-2xl">
            <YouTubePlayer videoId={YOUTUBE_VIDEO_ID} />
          </div>
        </motion.div>

        {/* CTA — always active, scrolls to form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="mb-10 flex flex-col items-center gap-3"
        >
          <a href="#contacto" className="btn-primary gap-2 text-lg">
            QUIERO MI AUDITORÍA GRATUITA <ArrowRight size={20} />
          </a>
          <span className="flex items-center gap-2 text-sm text-text-secondary">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            Solo 5 cupos disponibles este mes
          </span>

          <span className="mt-2 text-sm text-text-secondary">
            ¿Todavía no vendés online de forma constante?{' '}
            <Link href="/programa" className="font-medium text-brand-violet underline">
              Ver programa de 6 semanas
            </Link>
          </span>
        </motion.div>
      </div>

      {/* Stats bar — prominent cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-violet/30 hover:shadow-md"
          >
            <div className="font-display text-3xl font-extrabold text-brand-violet sm:text-4xl">
              <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <div className="text-sm text-text-secondary">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
