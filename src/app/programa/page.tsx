'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  ChevronDown,
  Shield,
  CheckCircle2,
  XCircle,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import CaseStudy from '@/components/CaseStudy'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''
const WA_MESSAGE = encodeURIComponent('Hola, quiero anotarme al programa de Bepartner')
const WA_LINK = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`
  : '#contacto'

// ============================================================================
// NAVBAR
// ============================================================================

function ProgramaNavbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#1a1a2e]/95 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-2 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center">
          <div className="relative h-14 w-[200px] overflow-hidden sm:h-16 sm:w-[240px]">
            <Image
              src="/logo-white.png"
              alt="Bepartner"
              fill
              className="scale-[2.4] object-contain"
              priority
            />
          </div>
        </Link>

        <Link
          href="/"
          className="hidden items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white md:flex"
        >
          <ArrowLeft size={14} />
          Volver al sitio principal
        </Link>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-brand-violet px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-violet-hover hover:shadow-lg"
        >
          Quiero anotarme
        </a>
      </div>
    </nav>
  )
}

// ============================================================================
// HERO
// ============================================================================

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-brand-violet/5 blur-3xl" />

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6 inline-block rounded-full bg-brand-violet-light px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-violet"
        >
          Programa de acompañamiento · 6 semanas
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="mb-5 font-display text-4xl font-extrabold leading-tight text-text-heading sm:text-5xl lg:text-6xl"
        >
          Construí tu propia tienda online en{' '}
          <span className="text-brand-violet">6 semanas</span> y empezá a vender de forma constante
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary sm:text-xl"
        >
          Descubrí los pilares que tenés que tener para armar y escalar tu propia
          tienda online desde 0.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="mb-6 flex flex-col items-center gap-3"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary gap-2 text-lg"
          >
            QUIERO INGRESAR <ArrowRight size={20} />
          </a>
          <span className="flex items-center gap-2 text-sm text-text-secondary">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            Solo tenemos 3 cupos disponibles
          </span>
        </motion.div>

        {/* Stats — sin precio, con autoridad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            { value: '6 semanas', label: 'Para construir el sistema' },
            { value: '+1.760%', label: 'Crecimiento caso real' },
            { value: '+6 años', label: 'de experiencia' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="font-display text-2xl font-extrabold text-brand-violet sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-text-secondary">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// TRANSFORMACIÓN (antes / después)
// ============================================================================

const beforeItems = [
  'Tus ventas dependen de cuándo posteás o de cuándo abrís el local',
  'No sabés cuánto vas a facturar el mes que viene',
  'No tenés pixel, no tenés datos, no podés escalar con publicidad',
  'Cada venta es manual — DM, acuerdo de pago, coordinar envío uno por uno',
  'Si mañana Instagram cambia el algoritmo, tu negocio tambalea',
]

const afterItems = [
  'Tu tienda online recibe pedidos mientras dormís, viajás o descansás',
  'Tenés un número de ventas predecible que podés planificar',
  'Pixel instalado, datos reales, estructura lista para correr publicidad',
  'Cada compra es automatizada: pago, confirmación, gestión de envío',
  'Tu negocio no depende del algoritmo de nadie',
]

function Transformacion() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="section-label">La diferencia</span>
          <h2 className="section-title mt-3">
            Dónde estás hoy. Dónde vas a estar en 6 semanas.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-gray-200 border-t-4 border-t-red-400 bg-white p-6 shadow-lg sm:p-8"
          >
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-red-500">HOY</h3>
            <div className="flex flex-col gap-3">
              {beforeItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <X size={18} className="mt-0.5 flex-shrink-0 text-red-400" />
                  <p className="text-text-primary">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-gray-200 border-t-4 border-t-emerald-500 bg-white p-6 shadow-lg sm:p-8"
          >
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-emerald-600">
              En 6 semanas
            </h3>
            <div className="flex flex-col gap-3">
              {afterItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                  <p className="text-text-primary">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PARA QUIÉN ES
// ============================================================================

const yesItems = [
  'Vendés por Instagram (DMs, stories, catálogo manual) y querés pasar a una tienda real',
  'Tenés un showroom o local físico y querés que también venda online',
  'Tu facturación online está por debajo de $3M ARS/mes o directamente en $0',
  'Querés entender cómo funciona el ecommerce antes de contratar algo grande',
  'Podés dedicarle 3-4 horas por semana durante 6 semanas',
]

const noItems = [
  'No tenés producto físico propio para vender',
  'Ya superás $3M ARS/mes online y querés escalar → para eso está el servicio principal de Bepartner',
  'Buscás que alguien haga todo por vos sin que vos pongas el trabajo',
  'No podés comprometer 3-4 horas semanales',
]

function ParaQuien() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="section-label">Para quién es</span>
          <h2 className="section-title mt-3">Este programa es para vos si…</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-gray-200 border-t-4 border-t-emerald-500 bg-white p-6 shadow-lg"
          >
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-emerald-600">
              Sí entra
            </h3>
            <div className="flex flex-col gap-4">
              {yesItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                  <p className="text-text-primary">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-gray-200 border-t-4 border-t-red-400 bg-white p-6 shadow-lg"
          >
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-red-500">
              No entra
            </h3>
            <div className="flex flex-col gap-4">
              {noItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle size={20} className="mt-0.5 flex-shrink-0 text-red-400" />
                  <p className="text-text-primary">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// EL RECORRIDO (6 semanas)
// ============================================================================

const weeks = [
  {
    num: '1',
    title: 'Fundamentos',
    tagline: 'Definís qué vendés, a quién, y por dónde empezás',
    bullets: [
      'Tu producto estrella: cuál vas primero y por qué no todos a la vez',
      'Tu cliente online: quién te compra y por qué elige comprarte a vos',
      'Plataforma correcta: Tiendanube, Shopify u otra según tu negocio',
      'Cómo funciona el ecommerce y qué necesitás para que funcione para vos',
    ],
    entregable: 'Hoja de fundamentos — producto, cliente y plataforma definidos en papel',
  },
  {
    num: '2',
    title: 'Tu tienda',
    tagline: 'Publicás tu tienda antes de terminar la semana',
    bullets: [
      'Configuración completa paso a paso (con capturas de pantalla reales)',
      'Fotos de producto con el celular — técnica básica que convierte',
      'Descripciones que hacen querer comprar, no solo informar',
      'Medios de pago y envíos: opciones reales para Argentina',
    ],
    entregable: 'Tienda online publicada y lista para recibir pedidos',
  },
  {
    num: '3',
    title: 'Tu oferta',
    tagline: 'Aprendés a cobrar lo que vale y a presentarlo bien',
    bullets: [
      'Precio para ecommerce: cómo calcularlo con margen real y sin quedarte corta',
      'Cómo presentar el producto para que lo quieran comprar sin que vos lo vendas',
      'Políticas de envío y devolución que construyen confianza y eliminan fricciones',
      'Cómo crear urgencia de verdad sin mentirle a tu cliente',
    ],
    entregable: 'Catálogo completo con precios, descripciones y políticas configuradas',
  },
  {
    num: '4',
    title: 'Primeras ventas',
    tagline: 'Generás tus primeras ventas online sin gastar en publicidad',
    bullets: [
      'WhatsApp marketing a tu base actual: cómo convertir sin molestar',
      'Instagram con estrategia: qué postear para que lleve tráfico a la tienda',
      'Estrategia de lanzamiento para activar tu red de contactos el día de apertura',
      'Las primeras reseñas: por qué son críticas y cómo conseguirlas',
    ],
    entregable: 'Tus primeras ventas online completadas',
  },
  {
    num: '5',
    title: 'Primeros anuncios',
    tagline: 'Invertís en publicidad por primera vez sin perder plata',
    bullets: [
      'Cómo funciona Meta Ads para ecommerce (distinto a lo que hacen para servicios)',
      'Primer anuncio: desde cero hasta publicado, paso a paso',
      'Con cuánto arrancar y cómo saber si está funcionando',
      'El pixel: qué es, por qué importa y cómo verificar que está bien instalado',
    ],
    entregable: 'Primera campaña activa en Meta con datos reales para analizar',
  },
  {
    num: '6',
    title: 'El sistema',
    tagline: 'Armás todo para que las ventas sean constantes, no casuales',
    bullets: [
      'Las 5 métricas que mirás cada semana (y solo esas)',
      'Gestión de pedidos y stock sin que se convierta en un caos',
      'Automatizaciones básicas que te liberan tiempo',
      'Tu plan de los próximos 90 días: qué hacer cuando terminés el programa',
    ],
    entregable: 'Sistema configurado + plan de 90 días + checklist para escalar con Bepartner',
  },
]

function Recorrido() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="section-label">El recorrido</span>
          <h2 className="section-title mt-3">Lo que construís semana a semana</h2>
          <p className="mt-3 text-lg text-text-secondary">
            Cada semana termina con algo concreto hecho. No teoría — implementación real.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {weeks.map((week, i) => (
            <motion.div
              key={week.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="section-label">Semana {week.num}</span>
              <h3 className="mt-2 font-display text-xl font-bold text-text-heading">
                {week.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-brand-violet">
                &ldquo;{week.tagline}&rdquo;
              </p>

              <ul className="mt-4 flex flex-col gap-2">
                {week.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-text-primary">
                    <span className="mt-0.5 font-bold text-brand-violet">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4">
                <div className="rounded-lg bg-brand-violet-light p-3 text-xs text-text-primary">
                  <span className="font-semibold">📋 {week.entregable}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PRECIO
// ============================================================================

const priceIncludes = [
  'Las bases de tu negocio online definidas en papel',
  'Tu tienda online publicada y funcionando',
  'Tus primeras ventas online completadas',
  'Tus primeros anuncios corriendo con datos reales',
  'Un sistema de ventas que no depende de que vos posteés',
  'Acceso permanente a todos los materiales',
]

function Precio() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="section-label">El programa</span>
          <h2 className="section-title mt-3">
            Una inversión. Seis semanas. Ventas que no dependen de si posteaste hoy.
          </h2>
          <p className="mt-3 text-lg text-text-secondary">
            No pagás por contenido. Pagás por el sistema que cambia cómo funciona tu negocio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-md"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <span className="rounded-full bg-red-500 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
              🔥 Precio promocional
            </span>
          </div>

          <div className="rounded-3xl border-2 border-brand-violet bg-white p-8 pt-10 shadow-2xl">
            <h3 className="text-center font-display text-2xl font-bold text-text-heading">
              Estructurá tu Ecommerce
            </h3>
            <p className="mt-2 text-center text-sm text-text-secondary">
              Para negocios que venden por IG o tienen local físico pero sin ventas constantes online
            </p>

            <div className="my-6 text-center">
              {/* Precio original tachado */}
              <div className="mb-1 text-lg text-text-secondary">
                <span className="text-sm">Antes:</span>{' '}
                <span className="line-through decoration-red-400 decoration-2">USD 297</span>
              </div>

              {/* Precio promocional */}
              <div className="flex items-start justify-center gap-1">
                <span className="mt-2 text-xl font-semibold text-brand-violet">USD</span>
                <span className="font-display text-7xl font-extrabold text-brand-violet">48</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-text-heading">pago único</p>
              <p className="mt-1 text-xs text-text-secondary">
                Acceso inmediato · Sin cuotas · Sin renovación
              </p>

              {/* Badge ahorro */}
              <div className="mt-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Ahorrás USD 249 (84% OFF)
              </div>
            </div>

            <ul className="mb-6 flex flex-col gap-3">
              {priceIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-primary">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full gap-2"
            >
              QUIERO INGRESAR — USD 48 <ArrowRight size={18} />
            </a>

            <div className="mt-4 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <Shield size={18} className="mt-0.5 flex-shrink-0 text-emerald-600" />
              <p className="text-sm text-text-primary">
                Si completás el programa y no conseguís ventas online constantes, te devolvemos
                los USD 48. Sin preguntas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// GARANTÍA
// ============================================================================

function Garantia() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-lg"
      >
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-violet-light">
          <Shield size={40} className="text-brand-violet" />
        </div>

        <h2 className="section-title mb-4">Garantía de ventas constantes</h2>

        <p className="text-lg leading-relaxed text-text-secondary">
          Si seguís el programa completo — implementás los entregables de cada semana — y no
          conseguís ventas online constantes en las 6 semanas, te devolvemos los USD 48. Sin
          preguntas, sin formularios raros, sin vueltas. Confiamos en el sistema porque lo
          probamos. El único riesgo real es no arrancar.
        </p>
      </motion.div>
    </section>
  )
}

// ============================================================================
// FAQ
// ============================================================================

const faqs = [
  {
    q: '¿Necesito tener experiencia en tecnología o redes sociales?',
    a: 'No. Si sabés usar WhatsApp e Instagram, tenés todo lo que necesitás. El programa explica paso a paso, con capturas de pantalla, qué hacer en cada momento. No hay nada técnico que no se pueda seguir con esta guía.',
  },
  {
    q: '¿Cuánto tiempo necesito por semana?',
    a: 'Entre 3 y 5 horas. Si podés comprometer ese tiempo, podés hacer el programa. Si no podés, el programa no funciona — y es mejor saberlo antes de empezar. No estamos acá para venderte algo que no vas a terminar.',
  },
  {
    q: '¿Sirve si ya tengo algo de presencia online pero no vendo de forma consistente?',
    a: 'Sí, es exactamente para eso. Si ya vendés por Instagram pero sin sistema, o si ya tenés una tienda pero sin resultados constantes, el programa te da la estructura que falta. El ICP principal son negocios que ya tienen producto y clientes pero sin ventas predecibles.',
  },
  {
    q: '¿En qué plataforma armo la tienda?',
    a: 'En la primera semana definimos cuál es la mejor para tu tipo de negocio. Puede ser Tiendanube, Shopify, WooCommerce o Mercado Libre. El programa se adapta — no te atamos a una plataforma específica.',
  },
  {
    q: '¿Hay alguien que me acompaña o es solo material para leer?',
    a: 'Hay acompañamiento. Las guías están para que tengas el sistema en papel, pero el diferencial es el soporte directo para resolver lo que te traba cada semana. No estás sola. Estás en una cohorte con otros negocios en la misma situación.',
  },
  {
    q: '¿Qué pasa cuando termino el programa?',
    a: 'La semana 6 incluye un checklist para saber si ya estás lista para el servicio completo de Bepartner — donde instalamos el sistema de publicidad, optimizamos la tienda y escalamos las ventas. Los participantes del programa tienen prioridad en los cupos. El programa está diseñado para que el siguiente paso sea obvio.',
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span className="section-label">Preguntas frecuentes</span>
          <h2 className="section-title mt-3">Lo que seguramente te estás preguntando</h2>
        </motion.div>

        <div className="rounded-xl border border-gray-200 bg-white px-6 shadow-lg">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="pr-4 text-base font-semibold text-text-heading">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-text-secondary" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-text-secondary">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// CTA FINAL
// ============================================================================

function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-violet-dark to-surface-dark px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      {/* Grid pattern visible sobre dark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#c8a2e8]">
          ¿Arrancamos?
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Construí tu propia tienda online en 6 semanas.
        </h2>
        <p className="mt-4 text-lg text-white/70">
          El sistema que necesitás para vender online de forma constante existe.
          Son 6 semanas para construirlo.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-violet px-10 py-4 text-lg font-semibold text-white transition-all hover:scale-[1.02] hover:bg-brand-violet-hover hover:shadow-xl"
          >
            QUIERO INGRESAR — USD 48 <ArrowRight size={20} />
          </a>

          {/* Banner cupos destacado */}
          <div className="mt-2 flex items-center justify-center gap-3 rounded-xl border-2 border-red-500/40 bg-red-500/10 px-5 py-3 backdrop-blur-sm">
            <div className="relative flex h-3 w-3 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
            </div>
            <p className="text-sm font-semibold text-white">
              Solo <span className="text-red-300">3 cupos disponibles</span> · Garantía incluida
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// ============================================================================
// FOOTER
// ============================================================================

function ProgramaFooter() {
  return (
    <footer className="bg-surface-dark px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-[180px] overflow-hidden sm:h-12 sm:w-[220px]">
              <Image
                src="/logo-white.png"
                alt="Bepartner"
                fill
                className="scale-[2.2] object-contain"
              />
            </div>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/" className="text-gray-400 transition-colors hover:text-white">
              Sitio principal
            </Link>
            <a
              href="mailto:agencia.bepartner@gmail.com"
              className="text-gray-400 transition-colors hover:text-white"
            >
              agencia.bepartner@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-500">&copy; 2026 Bepartner Latam</p>
        </div>
      </div>
    </footer>
  )
}

// ============================================================================
// PAGE
// ============================================================================

export default function ProgramaPage() {
  return (
    <>
      <ProgramaNavbar />
      <main>
        <Hero />
        <ParaQuien />
        <Transformacion />
        <Recorrido />
        <CaseStudy />
        <Precio />
        <Garantia />
        <FAQSection />
        <CTAFinal />
      </main>
      <ProgramaFooter />
    </>
  )
}
