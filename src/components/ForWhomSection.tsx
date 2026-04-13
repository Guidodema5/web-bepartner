'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react'

const LEADMAGNET_URL = process.env.NEXT_PUBLIC_LEADMAGNET_URL || '#'

const yesItems = [
  'Ya tenés una tienda online con ventas (Tiendanube, Shopify, WooCommerce)',
  'Facturás pero no podés pasar los $10 millones por mes',
  'Invertís en publicidad sin retorno claro o sin estrategia',
  'Querés un socio que se juegue por tus resultados, no un proveedor más',
  'Estás dispuesto a crecer con sistema y datos',
]

const noItems = [
  'Todavía no vendés online ni tenés producto validado',
  'Buscás resultados mágicos sin proceso',
  'No estás dispuesto a invertir en publicidad digital',
  'Querés a alguien que solo "suba posteos"',
]

export default function ForWhomSection() {
  return (
    <section id="para-quien" className="px-4 py-16 lg:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <span className="section-label">¿Esto es para vos?</span>
          <h2 className="section-title mt-3">
            Trabajamos con ecommerce que están listos para escalar
          </h2>
        </motion.div>

        <div className="mb-10 grid gap-8 md:grid-cols-2">
          {/* YES column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-5 text-lg font-semibold text-text-heading">
              Esto ES para vos si:
            </h3>
            <div className="flex flex-col gap-4">
              {yesItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-status-positive" />
                  <p className="text-text-primary">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* NO column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-5 text-lg font-semibold text-text-heading">
              Esto NO es para vos si:
            </h3>
            <div className="flex flex-col gap-4">
              {noItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle size={20} className="mt-0.5 flex-shrink-0 text-status-negative" />
                  <p className="text-text-primary">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA card for beginners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-xl border-2 border-brand-violet/20 bg-brand-violet-light p-6 text-center"
        >
          <p className="mb-4 text-text-heading">
            <span className="font-semibold">¿Recién arrancás a vender online?</span>{' '}
            Tenemos un programa de 6 semanas para construir las bases de tu ecommerce.
          </p>
          <a href={LEADMAGNET_URL} className="btn-secondary inline-flex gap-2">
            Conocer el programa <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
