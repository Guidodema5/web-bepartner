'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

// Un solo caso, de bandera (Guido, 04/11/2026: oferta para negocios de servicios): deRentas, con sus números reales del
// blueprint. Los casos de tiendas online salieron de la página principal.
const antesDespues = [
  { cuando: 'Antes', numero: 'Unas 1.000', detalle: 'consultas por mes, poco calificadas', destacado: false },
  { cuando: 'Hoy', numero: 'Unos 13.000', detalle: 'leads calificados por mes, y en crecimiento', destacado: true },
]

// Empresas que confiaron en Bepartner (Guido, 05/11/2026). deRentas ya está en el caso de arriba, así que no se repite
// acá (09/11/2026); Para Casa va al centro, más grande y sin atenuar.
const empresas = [
  { nombre: 'Green Power', logo: '/images/logo-greenpower.png', alto: 'h-14', ancho: 'w-24' },
  { nombre: 'Le Mardē', logo: '/images/logo-lemarde.png', alto: 'h-6', ancho: 'w-24' },
  { nombre: 'Para Casa', logo: '/images/logo-paracasa.png', alto: 'h-14', ancho: 'w-48', destacada: true },
  { nombre: 'Pullbag', logo: '/images/logo-pullbag.svg', alto: 'h-6', ancho: 'w-24' },
  { nombre: 'Destore', logo: '/images/logo-destore.png', alto: 'h-4', ancho: 'w-24' },
  { nombre: 'Victor Gemas', logo: '/images/logo-victorgemas.png', alto: 'h-8', ancho: 'w-24' },
]

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null)
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (sectionInView && typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', { content_name: 'Caso de Exito' })
    }
  }, [sectionInView])

  return (
    <section ref={sectionRef} id="caso-exito" className="bg-noche-fondo px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <span className="section-label-noche">Caso de éxito</span>
          <h2 className="mb-3 mt-3 font-display text-3xl font-semibold tracking-tight text-noche-texto sm:text-4xl lg:text-5xl">
            deRentas: de consultas que no servían a leads calificados todos los meses
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="tarjeta-noche overflow-hidden"
        >
          <div className="grid md:grid-cols-[300px_1fr]">
            <div className="flex items-center justify-center border-b border-noche-linea bg-noche-superficie-2 p-8 md:border-b-0 md:border-r">
              <div className="relative h-20 w-56">
                <Image src="/images/logo-derentas.svg" alt="deRentas" fill sizes="224px" className="object-contain" />
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm text-noche-suave">deRentas · La empresa N°1 de alquiler de autos para Uber</p>
              <p className="mt-3 text-lg leading-relaxed text-noche-texto">
                Ya vendían bien, pero sus anuncios les traían gente que no servía. Les manejamos toda la publicidad digital con nuestra metodología.
              </p>
            </div>
          </div>

          <div className="grid border-t border-noche-linea sm:grid-cols-2">
            {antesDespues.map((x) => (
              <div key={x.cuando} className={`p-6 sm:p-8 ${x.destacado ? 'bg-brand-violet/15' : 'border-b border-noche-linea sm:border-b-0 sm:border-r'}`}>
                <p className="section-label-noche">{x.cuando}</p>
                <p className={`mt-2 font-display text-4xl font-semibold tracking-tight ${x.destacado ? 'text-violeta-200' : 'text-noche-suave'}`}>{x.numero}</p>
                <p className="mt-1 text-[15px] text-noche-suave">{x.detalle}</p>
              </div>
            ))}
          </div>
        </motion.article>

        {/* Todas las empresas que confiaron en nosotros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-14"
        >
          <p className="section-label-noche mb-8 text-center">Empresas que confiaron en nosotros</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {empresas.map((e) => (
              <div key={e.nombre} className={`relative ${e.ancho} ${e.alto}`}>
                <Image
                  src={e.logo}
                  alt={e.nombre}
                  fill
                  sizes="192px"
                  className={`object-contain ${e.destacada ? '' : 'opacity-60 transition-opacity hover:opacity-100'}`}
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-12 flex justify-center"
        >
          <a href="#contacto" className="btn-primary gap-2 text-[15px]">
            Quiero resultados así <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
