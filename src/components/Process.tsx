'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Aplicás en el formulario',
    description: 'Completás un formulario corto para que conozcamos tu tienda.',
  },
  {
    num: '02',
    title: 'Analizamos tu tienda',
    description: 'Revisamos tu web, tus números y tu competencia en detalle.',
  },
  {
    num: '03',
    title: 'Te contactamos con diagnóstico',
    description: 'Te mostramos exactamente dónde están las oportunidades.',
  },
  {
    num: '04',
    title: 'Discovery call gratuita',
    description: 'Nos sentamos (virtual) a ver si hay match y armamos un plan.',
  },
  {
    num: '05',
    title: 'Si hay match, arrancamos',
    description: 'Empezamos a implementar el sistema completo.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function Process() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <span className="section-label">¿Cómo empezamos?</span>
          <h2 className="section-title mt-3">5 pasos para empezar a escalar</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute bottom-0 left-8 top-0 w-px bg-gray-200 sm:left-10" />

          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="relative flex items-start gap-5 sm:gap-6"
              >
                {/* Number circle */}
                <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-brand-violet bg-white sm:h-20 sm:w-20">
                  <span className="font-display text-xl font-bold text-brand-violet sm:text-2xl">
                    {step.num}
                  </span>
                </div>

                <div className="pt-2 sm:pt-4">
                  <h3 className="mb-1 text-lg font-semibold text-text-heading">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
