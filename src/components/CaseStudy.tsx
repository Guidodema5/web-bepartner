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

// Casos en el orden que pidió Guido. Formato como Peak: video o logo a un
// costado y la historia al lado. La cifra va una sola vez, en el título.
type Caso = {
  marca: string
  rubro: string
  titulo: string
  historia?: string
  logo?: string
  video?: string
  poster?: string
  oculto?: boolean
}

const casos: Caso[] = [
  {
    marca: 'Green Power',
    rubro: 'Suplementos · Facundo, dueño',
    titulo: 'De 10.000 USD a 50.000 USD por mes',
    historia:
      'En la auditoría vimos que fallaban la propuesta de valor y los anuncios. Armamos una propuesta de valor por producto y por combo, ángulos para cada tipo de cliente, los formatos de anuncios que mejor funcionaban y una estructura de venta. Facturaba 10.000 USD por mes; hoy factura 50.000 USD por mes: cinco veces más.',
    logo: '/images/logo-greenpower.png',
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
      'Tenía buen producto y clientas fieles, pero no un sistema de publicidad que convirtiera en ventas. Armamos ángulos de venta por producto, probamos los anuncios por etapas y los ajustamos cada semana con datos reales. En febrero facturó $12,9 millones.',
    logo: '/images/logo-lemarde.png',
  },
  {
    marca: 'Pullbag',
    rubro: 'Accesorios ecológicos',
    titulo: 'De $0 a $30 millones en 60 días',
    historia:
      'El negocio estaba parado hacía 5 meses, sin ventas. Como había que arrancar de cero, trabajamos el negocio completo: armamos la propuesta de valor alrededor de un ángulo bien específico, la llevamos a formatos de anuncios ganadores y rehicimos la web para que convierta. En 60 días facturó $30 millones, con un retorno de 10 pesos por cada peso invertido en publicidad.',
    logo: '/images/logo-pullbag.svg',
  },
  {
    marca: 'Destore',
    rubro: 'Tienda online multiproducto',
    titulo: 'De $5 millones a $30 millones por mes en 60 días',
    historia:
      'Facturaba $5 millones por mes. Trabajamos la oferta y la persuasión desde el primer día, y en 60 días llegó a facturar $1 millón por día: unos $30 millones por mes.',
    logo: '/images/logo-destore.png',
  },
  {
    marca: 'Victor Gemas',
    rubro: 'Joyería online',
    titulo: 'De $3 millones por mes a $40 millones en 45 días',
    historia:
      'Los anuncios no funcionaban, la propuesta de valor no le hablaba a nadie en particular y tenía muchos productos sin saber el costo de ninguno. Ordenamos los números del catálogo, definimos a quién le vende y armamos la propuesta de valor para ese cliente. Rehicimos los anuncios y optimizamos la web, que estaba muy lenta. Recién con eso funcionando sumamos nuevas estrategias de pauta.',
    logo: '/images/logo-victorgemas.png',
  },
  // Oculto a pedido de Guido (23/10/2026). Para mostrarlo, sacar "oculto".
  {
    marca: 'Tienda de sweaters',
    rubro: 'Moda',
    titulo: 'De $460.000 a $50 millones en 70 días',
    historia: 'Con una estrategia de crecimiento rápido y mensajes distintos para cada temporada.',
    oculto: true,
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
          className="mx-auto mb-10 grid max-w-4xl grid-cols-3 gap-3 rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur-sm"
        >
          <div className="text-center">
            <div className="font-display text-2xl font-extrabold text-white sm:text-4xl">
              <CountUp target={100} prefix="+$" suffix="K" inView={bandInView} />
            </div>
            <div className="mt-1 text-xs text-white/70">USD en pauta gestionada</div>
          </div>
          <div className="text-center">
            <div className="font-display text-2xl font-extrabold text-white sm:text-4xl">
              <CountUp target={48} prefix="+" suffix="" inView={bandInView} />
            </div>
            <div className="mt-1 text-xs text-white/70">Ecommerce escalados</div>
          </div>
          <div className="text-center">
            <div className="font-display text-2xl font-extrabold text-white sm:text-4xl">
              <CountUp target={92} prefix="" suffix="M" inView={bandInView} />
            </div>
            <div className="mt-1 text-xs text-white/70">ARS facturados para clientes</div>
          </div>
        </motion.div>

        {/* CASOS — uno debajo del otro, mismo formato (como Peak) */}
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          {casos.filter((c) => !c.oculto).map((c) => (
            <motion.article
              key={c.marca}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="grid overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] shadow-xl md:grid-cols-[280px_1fr]"
            >
              {/* Costado: video o logo, siempre del mismo tamaño */}
              <div className="flex items-center justify-center bg-[#14142a] p-6">
                {c.video ? (
                  <div className="w-full max-w-[220px] overflow-hidden rounded-xl bg-black shadow-2xl">
                    <video src={c.video} poster={c.poster} controls playsInline preload="metadata" className="aspect-[9/16] w-full object-cover" />
                  </div>
                ) : c.logo ? (
                  <div className="relative h-20 w-52">
                    <Image src={c.logo} alt={c.marca} fill sizes="208px" className="object-contain" />
                  </div>
                ) : (
                  <span className="text-center font-display text-2xl font-bold text-white">{c.marca}</span>
                )}
              </div>

              {/* Historia */}
              <div className="flex flex-col justify-center p-6 sm:p-8">
                {c.video && c.logo && (
                  <div className="relative mb-4 h-12 w-28">
                    <Image src={c.logo} alt={c.marca} fill sizes="112px" className="object-contain object-left" />
                  </div>
                )}
                <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl">{c.titulo}</h3>
                {c.historia && <p className="mt-3 leading-relaxed text-white/70">{c.historia}</p>}
                <div className="mt-6 flex flex-wrap items-center gap-x-2 border-t border-white/10 pt-5 text-sm">
                  <span className="font-semibold text-white">{c.marca}</span>
                  <span className="text-white/50">· {c.rubro}</span>
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
