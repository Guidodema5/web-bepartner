'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { medir, IconoWhatsApp, WHATSAPP_URL } from './Llamado'

const aparecer = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
})

/**
 * Portada (Guido, 09/11/2026): una sola columna, oscura y centrada, sin gráfico. Etiqueta, título grande, la frase de
 * la oferta, Contactanos y WhatsApp, y deRentas como prueba social. Luz violeta de fondo y una cuadrícula tenue.
 */
export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[92vh] items-center overflow-hidden bg-noche-fondo px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black, transparent)',
        }}
      />
      <div className="pointer-events-none absolute bottom-[-320px] left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-brand-violet opacity-40 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          {...aparecer(0)}
          className="section-label-noche mb-8 inline-flex items-center gap-2 rounded-full border border-noche-linea-fuerte bg-white/[0.03] px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-violeta-300" />
          Agencia especializada en leads
        </motion.div>

        <motion.h1
          {...aparecer(0.08)}
          className="font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.035em] text-noche-texto sm:text-[68px] lg:text-[88px]"
        >
          Conseguí{' '}
          <span className="bg-gradient-to-r from-violeta-200 via-violeta-300 to-violeta-400 bg-clip-text text-transparent">clientes calificados</span>
          <br className="hidden sm:block" /> todos los meses.
        </motion.h1>

        <motion.p {...aparecer(0.16)} className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-noche-suave sm:text-xl">
          Te instalamos un sistema con nuestra propia metodología para que consigas leads de calidad con anuncios, sin que pagues por consultas que no compran.
        </motion.p>

        <motion.div {...aparecer(0.24)} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#contacto" onClick={() => medir('ClicAuditoria', { ubicacion: 'Portada' })} className="btn-primary gap-2 px-8 py-4 text-base">
            Contactanos <ArrowRight size={18} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => medir('Contact', { content_name: 'WhatsApp', ubicacion: 'Portada' }, true)}
            className="btn-noche gap-2 px-6 py-4 text-base"
          >
            <IconoWhatsApp className="h-[18px] w-[18px] text-[#25d366]" /> WhatsApp
          </a>
        </motion.div>

        {/* Prueba social: deRentas (Guido, 09/11/2026: solo deRentas en la portada) */}
        <motion.div {...aparecer(0.36)} className="mt-16 flex flex-col items-center gap-5">
          <p className="section-label-noche">Confiaron en nosotros</p>
          <span className="relative h-10 w-40">
            <Image src="/images/logo-derentas.svg" alt="deRentas" fill sizes="160px" className="object-contain" priority />
          </span>
        </motion.div>
      </div>
    </section>
  )
}
