'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Check, X } from 'lucide-react'

// Agencias tradicionales vs. Bepartner, con la frase del fundador (Guido, 05/11/2026).
const agencias = [
  'Prenden campañas sin conocer tu negocio.',
  'Te muestran clics y alcance, no clientes.',
  'Te pasan el lead y se olvidan.',
  'Sos uno más entre cientos de clientes.',
]
const bepartner = [
  'Arrancamos por tu cliente ideal, antes de invertir un peso.',
  'Medimos lo único que importa: contactos que te pueden comprar.',
  'Nos ocupamos de que ningún contacto se pierda.',
  'Trabajamos con pocas empresas, y nos involucramos en cada una.',
]

export default function PorQue() {
  return (
    <section id="por-que" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <span className="section-label">Por qué Bepartner</span>
          <h2 className="section-title mt-3">No somos una agencia más</h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="tarjeta p-7"
          >
            <p className="text-lg font-semibold text-text-heading">Las agencias tradicionales</p>
            <ul className="mt-5 space-y-3">
              {agencias.map((x) => (
                <li key={x} className="flex items-start gap-3 text-text-secondary">
                  <X size={18} strokeWidth={1.75} className="mt-0.5 flex-shrink-0 text-status-negative" />
                  {x}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="rounded-tarjeta border border-violeta-500/30 bg-noche-fondo p-7"
          >
            <p className="text-lg font-semibold text-noche-texto">Bepartner</p>
            <ul className="mt-5 space-y-3">
              {bepartner.map((x) => (
                <li key={x} className="flex items-start gap-3 text-noche-texto">
                  <Check size={18} strokeWidth={1.75} className="mt-0.5 flex-shrink-0 text-violeta-300" />
                  {x}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-5 text-center sm:flex-row sm:text-left"
        >
          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border border-linea">
            <Image src="/demaria.jpg" alt="Guido Demaria, fundador de Bepartner" fill sizes="80px" className="object-cover object-[30%_30%]" />
          </div>
          <div>
            <blockquote className="text-xl font-medium leading-snug tracking-tight text-text-heading">
              “Creé Bepartner porque me cansé de ver agencias que cobran por prender campañas y no se involucran en si el negocio crece o no.”
            </blockquote>
            <figcaption className="mt-2 text-sm text-text-secondary">Guido Demaria, fundador</figcaption>
          </div>
        </motion.figure>
      </div>
    </section>
  )
}
