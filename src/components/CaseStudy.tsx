'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

function CountUp({ target, prefix = '', suffix = '', inView }: { target: number; prefix?: string; suffix?: string; inView: boolean }) {
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
    <span>
      {prefix}{target >= 100 ? value.toLocaleString('es-AR') : value}{suffix}
    </span>
  )
}

// Casos en el orden que pidió Guido, todos con el mismo formato.
// Solo van datos confirmados por él: si falta la historia, se deja vacía.
type Caso = {
  marca: string
  rubro: string
  titulo: string
  historia?: string
  logo?: string
  logoGrande?: boolean
  resultado?: string
  resultadoTexto?: string
  video?: string
  poster?: string
}

const casos: Caso[] = [
  {
    marca: 'Green Power',
    rubro: 'Suplementos · Facundo, dueño',
    titulo: 'De 10.000 USD a 50.000 USD por mes',
    historia: 'Facundo vende suplementos por su tienda online. Facturaba 10.000 USD por mes; hoy factura 50.000 USD por mes.',
    logo: '/images/logo-greenpower.png',
    logoGrande: true,
    resultado: 'x5',
    resultadoTexto: 'su facturación mensual',
    video: '/videos/testimonio-greenpower.mp4',
    poster: '/images/testimonio-greenpower.jpg',
  },
  {
    marca: 'Derentas',
    rubro: 'Alquiler de autos',
    titulo: 'La empresa N°1 de alquiler de autos para Uber',
    historia: 'Le manejamos toda la publicidad digital.',
    logo: '/images/logo-derentas.svg',
  },
  {
    marca: 'Le Mardē',
    rubro: 'Carteras artesanales',
    titulo: 'De 4 a 102 ventas por mes en solo 4 meses',
    historia:
      'Tenía buen producto y clientas fieles, pero no un sistema de publicidad que convirtiera en ventas. Armamos ángulos de venta por producto, probamos los anuncios por etapas y los ajustamos cada semana con datos reales. En 4 meses pasó de 4 a 102 ventas por mes y facturó $12,9 millones en febrero.',
    logo: '/images/logo-lemarde.png',
    resultado: '+1.760%',
    resultadoTexto: 'crecimiento en ventas',
  },
  {
    marca: 'Pullbag',
    rubro: 'Accesorios ecológicos',
    titulo: '$30 millones en 60 días',
    historia: 'Llegó a facturar $30 millones en 60 días, con un retorno de 10 pesos por cada peso invertido en publicidad.',
    logo: '/images/logo-pullbag.svg',
    resultado: '$30M',
    resultadoTexto: 'en 60 días',
  },
  {
    marca: 'Destore',
    rubro: 'Tienda online',
    titulo: '1 millón de pesos por día',
    historia: 'En un mes llegó a facturar 1 millón de pesos por día.',
    logo: '/images/logo-destore.png',
    resultado: '$1M',
    resultadoTexto: 'por día',
  },
  {
    marca: 'Tienda de sweaters',
    rubro: 'Moda',
    titulo: 'De $460.000 a $50 millones en 70 días',
    historia:
      'Vendía $460.000 por mes. Con una estrategia de crecimiento rápido y mensajes distintos para cada temporada, facturó 50 millones en 70 días.',
    resultado: '$50M',
    resultadoTexto: 'en 70 días',
  },
  {
    marca: 'Victor Gemas',
    rubro: 'Joyería',
    titulo: 'Tienda online de joyas y gemas',
    logo: '/images/logo-victorgemas.png',
  },
]

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null)
  const bandRef = useRef<HTMLDivElement>(null)
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const bandInView = useInView(bandRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (sectionInView && typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', { content_name: 'Caso de Exito' })
    }
  }, [sectionInView])

  return (
    <section ref={sectionRef} id="caso-exito" className="bg-gradient-to-br from-surface-dark to-[#0f0f1e] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#c8a2e8]">
            Resultados comprobados
          </span>
          <h2 className="mb-3 mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Resultados reales de tiendas reales
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/60">
            No son casos de hace 5 años ni clientes que no conocemos.
            Son ecommerce que escalaron con nosotros — con números documentados mes a mes.
          </p>
        </motion.div>

        {/* BANDA DE MÉTRICAS AGREGADAS */}
        <motion.div
          ref={bandRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 grid grid-cols-2 gap-3 rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur-sm sm:grid-cols-4"
        >
          <div className="text-center">
            <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              <CountUp target={100} prefix="+$" suffix="K" inView={bandInView} />
            </div>
            <div className="mt-1 text-xs text-white/70">USD en pauta gestionada</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              <CountUp target={48} prefix="+" suffix="" inView={bandInView} />
            </div>
            <div className="mt-1 text-xs text-white/70">Ecommerce escalados</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              <CountUp target={8} prefix="" suffix="x" inView={bandInView} />
            </div>
            <div className="mt-1 text-xs text-white/70">ROAS promedio</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              <CountUp target={92} prefix="" suffix="M" inView={bandInView} />
            </div>
            <div className="mt-1 text-xs text-white/70">ARS facturados para clientes</div>
          </div>
        </motion.div>

        {/* CASOS — uno debajo del otro, mismo formato (como Peak) */}
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          {casos.map((c) => (
            <motion.article
              key={c.marca}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] shadow-xl"
            >
              {/* Panel: video o marca, con el resultado */}
              <div className="flex flex-col items-center gap-6 bg-[#14142a] p-6 sm:flex-row sm:justify-center sm:gap-12 sm:p-8">
                {c.video && (
                  <div className="w-full max-w-[240px] flex-shrink-0 overflow-hidden rounded-xl bg-black shadow-2xl">
                    <video src={c.video} poster={c.poster} controls playsInline preload="metadata" className="aspect-[9/16] w-full object-cover" />
                  </div>
                )}
                <div className="flex flex-col items-center gap-5 py-4 text-center">
                  {c.logo && (
                    <div className={`relative ${c.logoGrande ? 'h-28 w-56' : 'h-14 w-60'}`}>
                      <Image src={c.logo} alt={c.marca} fill sizes="240px" className="object-contain" />
                    </div>
                  )}
                  {c.resultado && (
                    <div>
                      <div className="font-display text-5xl font-extrabold text-[#c8a2e8] sm:text-6xl">{c.resultado}</div>
                      {c.resultadoTexto && <div className="mt-1 text-sm text-white/70">{c.resultadoTexto}</div>}
                    </div>
                  )}
                </div>
              </div>

              {/* Historia */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white sm:text-2xl">{c.titulo}</h3>
                {c.historia && <p className="mt-3 leading-relaxed text-white/70">{c.historia}</p>}
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="font-semibold text-white">{c.marca}</span>
                  <span className="text-sm text-white/50">· {c.rubro}</span>
                </div>
              </div>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center gap-5 rounded-2xl border border-dashed border-[#c8a2e8]/30 bg-white/5 p-6 text-center sm:flex-row sm:justify-between sm:p-8 sm:text-left"
          >
            <div>
              <p className="font-display text-2xl font-bold text-white">Y hay muchos más</p>
              <p className="mt-1 text-white/60">Ecommerce escalando con el sistema ahora mismo.</p>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-violet shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/90"
            >
              Quiero resultados así <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
