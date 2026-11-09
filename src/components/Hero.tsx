'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Script from 'next/script'
import Image from 'next/image'
import { medir } from './Llamado'

const YOUTUBE_VIDEO_ID = 'cPdVI5AvztA'
// Oculto a pedido de Guido (19/10/2026). Para volver a mostrarlo, poner true.
const MOSTRAR_VIDEO = false


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

const aparecer = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
})

/**
 * Portada (Guido, 05/11/2026): en dos. A la izquierda el título, la promesa, el botón y "Marcas como deRentas confiaron en
 * nosotros"; a la derecha el camino: los 4 pasos del método sobre la curva de leads calificados, de hoy al día 60.
 */
export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-noche-fondo px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
      {/* Fondo: cuadrícula tenue que se desvanece y luz violeta */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 60% 40%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 60% 40%, black, transparent)',
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-[-200px] h-[560px] w-[760px] rounded-full bg-brand-violet opacity-25 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* La promesa */}
        <div className="text-center lg:text-left">
          <motion.div
            {...aparecer(0)}
            className="section-label-noche mb-7 inline-flex items-center gap-2 rounded-full border border-noche-linea-fuerte bg-white/[0.03] px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violeta-300" />
            Para negocios de servicios y mayoristas
          </motion.div>

          <motion.h1
            {...aparecer(0.08)}
            className="font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-noche-texto sm:text-[56px] lg:text-[60px]"
          >
            Agencia especializada en adquisición de{' '}
            <span className="bg-gradient-to-r from-violeta-200 via-violeta-300 to-violeta-400 bg-clip-text text-transparent">clientes calificados</span> con anuncios.
          </motion.h1>

          <motion.p {...aparecer(0.16)} className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-noche-suave sm:text-xl lg:mx-0">
            Conseguí clientes calificados en 60 días, sin pagar por consultas que no compran.
          </motion.p>

          <motion.div {...aparecer(0.24)} className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a href="#contacto" onClick={() => medir('ClicAuditoria', { ubicacion: 'Portada' })} className="btn-primary gap-2 px-7 py-4 text-base">
              Quiero mi auditoría gratuita <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Prueba social: "Marcas como deRentas confiaron en nosotros" (Guido, 05/11/2026) */}
          <motion.p
            {...aparecer(0.36)}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[15px] text-noche-suave lg:justify-start"
          >
            Marcas como
            <span className="relative inline-block h-8 w-32">
              <Image src="/images/logo-derentas.svg" alt="deRentas" fill sizes="128px" className="object-contain" />
            </span>
            confiaron en nosotros.
          </motion.p>

          {MOSTRAR_VIDEO && (
            <motion.div {...aparecer(0.4)} className="mt-10 max-w-xl">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-noche-linea bg-noche-superficie">
                <YouTubePlayer videoId={YOUTUBE_VIDEO_ID} />
              </div>
            </motion.div>
          )}
        </div>

        {/* El visual: el método y el crecimiento, de hoy al día 60 */}
        <motion.div {...aparecer(0.2)} className="relative mx-auto w-full max-w-[560px]">
          <Camino />
        </motion.div>
      </div>
    </section>
  )
}

// El visual de la portada (Guido, 05/11/2026): una sola idea, la curva de leads calificados subiendo de hoy al día 60.
// Ilustrativo, sin números. Coordenadas en el mismo sistema que el viewBox del SVG (520x300).
const CURVA = 'M 20 270 C 120 266, 190 252, 250 222 S 360 140, 410 92 S 470 34, 500 26'
const ANCHO = 520
const ALTO = 300

function Camino() {
  return (
    <div className="relative py-6">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violeta-500 opacity-25 blur-[110px]" />

      <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-[#211929]/95 to-noche-superficie/95 p-7 shadow-[0_50px_120px_-40px_rgba(117,61,148,0.8)] backdrop-blur-xl sm:p-8">
        <p className="text-lg font-semibold tracking-tight text-noche-texto">Tus leads calificados</p>

        <div className="relative mt-8" style={{ aspectRatio: `${ANCHO} / ${ALTO}` }}>
          <svg viewBox={`0 0 ${ANCHO} ${ALTO}`} className="absolute inset-0 h-full w-full overflow-visible">
            <defs>
              <linearGradient id="relleno-leads" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#b57bd6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#b57bd6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="trazo-leads" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8e55b0" />
                <stop offset="100%" stopColor="#e6cdf5" />
              </linearGradient>
            </defs>
            <motion.path
              d={`${CURVA} L 500 ${ALTO} L 20 ${ALTO} Z`}
              fill="url(#relleno-leads)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.4 }}
            />
            <motion.path
              d={CURVA}
              fill="none"
              stroke="url(#trazo-leads)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: [0.65, 0, 0.35, 1], delay: 0.4 }}
            />
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.2 }}>
              <circle cx="500" cy="26" r="16" fill="#b57bd6" opacity="0.25">
                <animate attributeName="r" values="10;22;10" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="500" cy="26" r="7" fill="#f4f0f7" />
            </motion.g>
          </svg>

          <div className="absolute rounded-xl border border-violeta-400/40 bg-violeta-600/30 px-3.5 py-2 text-right backdrop-blur" style={{ top: `${(8 / ALTO) * 100}%`, right: `${(54 / ANCHO) * 100}%` }}>
            <p className="text-[13px] font-semibold text-noche-texto">Todos los meses</p>
          </div>
        </div>

        <div className="mt-4 flex justify-between font-mono text-[11px] uppercase tracking-wider text-noche-tenue">
          <span>Hoy</span>
          <span>Día 60</span>
        </div>
      </div>
    </div>
  )
}
