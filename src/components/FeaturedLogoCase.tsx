'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TrendingUp } from 'lucide-react'

type Props = {
  logo: string
  brand: string
  tag: string
  title: string
  description: string
  metric: string
  metricLabel: string
}

// Caso destacado con el logo de la marca en grande, para clientes sin video
// de testimonio. Mismo formato que VideoTestimonial: la marca a un costado y
// el resultado al lado.
export default function FeaturedLogoCase({ logo, brand, tag, title, description, metric, metricLabel }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-6 rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-sm sm:p-8"
    >
      <div className="flex flex-col items-center gap-6 md:flex-row-reverse md:gap-10">
        <div className="flex w-full flex-shrink-0 flex-col items-center justify-center gap-6 rounded-xl bg-[#14142a] px-6 py-10 md:w-[380px]">
          <div className="relative h-16 w-64 sm:h-20 sm:w-72">
            <Image src={logo} alt={brand} fill sizes="288px" className="object-contain" />
          </div>
          <div className="text-center">
            <div className="font-display text-5xl font-extrabold text-[#c8a2e8] sm:text-6xl">{metric}</div>
            <div className="mt-1 text-sm text-white/70">{metricLabel}</div>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-brand-violet px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            <TrendingUp size={12} /> {tag}
          </span>
          <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl">{title}</h3>
          <p className="mt-3 text-white/70">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
