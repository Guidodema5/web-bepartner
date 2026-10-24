'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Navbar from '@/components/Navbar'

export default function GraciasPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-lg text-center"
        >
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-violet/10">
            <Check size={40} className="text-brand-violet" />
          </div>

          <h1 className="mb-4 font-display text-4xl font-semibold text-text-heading sm:text-5xl">
            ¡Gracias!
          </h1>

          <p className="mb-8 text-lg text-text-secondary">
            Recibimos tu consulta. En las próximas 48 horas nos ponemos en contacto con vos con el diagnóstico de tu tienda.
          </p>

          <a
            href="/"
            className="btn-primary inline-flex gap-2"
          >
            Volver al inicio
          </a>
        </motion.div>
      </main>
    </>
  )
}
