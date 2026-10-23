'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Marcas que ya crecieron con Bepartner, justo debajo del inicio.
const logos = [
  { src: '/images/logo-greenpower.png', alt: 'Green Power', w: 'w-28', h: 'h-16' },
  { src: '/images/logo-derentas.svg', alt: 'deRentas', w: 'w-36', h: 'h-9' },
  { src: '/images/logo-lemarde.png', alt: 'Le Mardē', w: 'w-36', h: 'h-8' },
  { src: '/images/logo-pullbag.svg', alt: 'Pullbag', w: 'w-32', h: 'h-8' },
]

export default function LogoBar() {
  return (
    <section className="bg-surface-dark px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-5xl text-center"
      >
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-white/50">
          Marcas que ya crecen con nosotros
        </p>
        <div className="grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-4">
          {logos.map((l) => (
            <div key={l.alt} className={`relative ${l.w} ${l.h} opacity-90`}>
              <Image src={l.src} alt={l.alt} fill sizes="144px" className="object-contain" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
