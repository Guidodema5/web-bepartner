'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { ArrowRight, Lock } from 'lucide-react'
import Script from 'next/script'
import { useVideoUnlock } from '@/context/VideoContext'

const YOUTUBE_VIDEO_ID = 'cPdVI5AvztA'

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

function YouTubePlayer({ videoId, onQuarter }: { videoId: string; onQuarter: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YT.Player | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const calledRef = useRef(false)

  const checkProgress = useCallback(() => {
    if (calledRef.current || !playerRef.current) return
    try {
      const current = playerRef.current.getCurrentTime()
      const duration = playerRef.current.getDuration()
      if (current >= 180) { // 3 minutos
        calledRef.current = true
        onQuarter()
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    } catch {}
  }, [onQuarter])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const initPlayer = () => {
      if (!containerRef.current) return
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: { rel: 0, modestbranding: 1 },
        events: {
          onStateChange: (e: YT.OnStateChangeEvent) => {
            if (e.data === window.YT.PlayerState.PLAYING) {
              intervalRef.current = setInterval(checkProgress, 1000)
            } else if (intervalRef.current) {
              clearInterval(intervalRef.current)
            }
          },
        },
      })
    }

    if (window.YT && window.YT.Player) {
      initPlayer()
    } else {
      window.onYouTubeIframeAPIReady = initPlayer
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [videoId, checkProgress])

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
  { value: 8, prefix: '', suffix: 'x', label: 'ROAS promedio' },
]

export default function Hero() {
  const { unlocked, unlock } = useVideoUnlock()

  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32">
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
          className="mb-4 font-display text-4xl font-extrabold leading-tight text-text-heading sm:text-5xl lg:text-6xl"
        >
          ¿Tenés una tienda online y facturás entre{' '}
          <span className="text-brand-violet">4 a 10 millones</span>?
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary sm:text-xl"
        >
          Descubrí la metodología para lograr desde{' '}
          <span className="font-semibold text-text-heading">20 a 50 millones</span> en 90 días
        </motion.p>

        {/* YouTube Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="mx-auto mb-8 max-w-4xl"
        >
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-brand-violet-dark to-surface-dark shadow-2xl">
            <YouTubePlayer videoId={YOUTUBE_VIDEO_ID} onQuarter={unlock} />
          </div>
        </motion.div>

        {/* CTA — locked until 25% video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="mb-8 flex flex-col items-center gap-3"
        >
          {unlocked ? (
            <a href="#contacto" className="btn-primary gap-2 text-lg">
              QUIERO MI AUDITORÍA GRATUITA <ArrowRight size={20} />
            </a>
          ) : (
            <button
              disabled
              className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-gray-300 px-8 py-3 text-lg font-semibold text-gray-500"
            >
              <Lock size={18} />
              QUIERO MI AUDITORÍA GRATUITA
            </button>
          )}
          <span className="flex items-center gap-2 text-sm text-text-secondary">
            {unlocked ? (
              <>
                <span className="inline-block h-2 w-2 rounded-full bg-status-negative" />
                Solo 5 cupos disponibles este mes
              </>
            ) : (
              <>
                <Lock size={12} />
                Mirá el video para desbloquear
              </>
            )}
          </span>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-0"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center gap-1 px-8 py-4 text-center ${
              i < stats.length - 1 ? 'sm:border-r sm:border-gray-200' : ''
            }`}
          >
            <div className="rounded-lg bg-brand-violet/10 px-4 py-2">
              <span className="font-display text-2xl font-bold text-text-heading sm:text-3xl">
                {stat.prefix === '+$' ? (
                  <span>+$<CountUp target={stat.value} suffix="K" /></span>
                ) : stat.prefix === '+' ? (
                  <>+<CountUp target={stat.value} suffix={stat.suffix} /></>
                ) : (
                  <><CountUp target={stat.value} suffix="x" /></>
                )}
              </span>
            </div>
            <span className="text-sm text-text-secondary">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
