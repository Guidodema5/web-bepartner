'use client'

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

type Metric = { value: string; label: string }

type Props = {
  video: string
  poster: string
  title: string
  description: string
  metrics: Metric[]
  brand: string
  brandInitials: string
  brandDescription: string
  /** Pone el video a la derecha, para alternar si hay varios testimonios seguidos. */
  videoRight?: boolean
}

// Tarjeta de testimonio en video: video vertical a un costado y, al lado, el
// resultado, una descripción corta, los números y la marca.
export default function VideoTestimonial({
  video,
  poster,
  title,
  description,
  metrics,
  brand,
  brandInitials,
  brandDescription,
  videoRight = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-6 rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-sm sm:p-8"
    >
      <div className={`flex flex-col items-center gap-6 md:gap-10 ${videoRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="w-full max-w-[280px] flex-shrink-0 overflow-hidden rounded-xl bg-black shadow-2xl">
          <video
            src={video}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            className="aspect-[9/16] w-full object-cover"
          />
        </div>

        <div className="flex w-full flex-col">
          <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-brand-violet px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            <TrendingUp size={12} /> Testimonio
          </span>
          <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl">{title}</h3>
          <p className="mt-3 text-white/70">{description}</p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-lg bg-white/5 p-3 text-center">
                <div className="font-display text-xl font-extrabold text-[#c8a2e8] sm:text-2xl">{m.value}</div>
                <div className="mt-1 text-[11px] text-white/60 sm:text-xs">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#753D94] to-[#c8a2e8] font-display text-xs font-extrabold text-white">
              {brandInitials}
            </div>
            <div>
              <p className="font-semibold text-white">{brand}</p>
              <p className="text-sm text-white/60">{brandDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
