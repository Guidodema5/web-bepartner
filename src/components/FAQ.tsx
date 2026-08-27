'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: '¿Cómo es el proceso de trabajo?',
    answer:
      'Trabajamos 90 días con la metodología BEP en 4 fases: Diagnóstico (encontramos el cuello de botella real de tu tienda), Oferta & Comunicación (definimos qué y cómo comunicar), Ecommerce que Convierte (optimizamos tu sitio y embudo), y Adquisición & Escala (armamos la estrategia de anuncios sobre una base sana). Incluye acceso a curso en Skool, soporte por WhatsApp, 2 llamadas grupales y 1 reunión de onboarding 1 a 1.',
  },
  {
    question: 'Ya probé agencias y no me funcionó',
    answer:
      'Las agencias te cobran un fee mensual sin importar si vendés o no. Sus intereses no están alineados con los tuyos. Nosotros nos metemos adentro de tu negocio, empezamos por las bases (oferta, comunicación, conversión) y recién después encendemos los anuncios. Los ads amplifican lo que ya existe — si el sistema no convierte, más pauta solo significa más plata perdida.',
  },
  {
    question: '¿En cuánto tiempo se ven resultados?',
    answer:
      'La primera fase es diagnóstico y setup (semana 1). Los cambios en oferta, comunicación y conversión empiezan desde la semana 2. Los resultados en ventas se potencian a partir de la fase de anuncios (semana 7). Uno de nuestros casos pasó de 4 a 102 ventas mensuales en 3 meses (+1.760%).',
  },
  {
    question: '¿Qué pasa si no logro los resultados?',
    answer:
      'Tenemos garantía de resultado: si aplicás todo al pie de la letra y no llegás a facturar entre 20 y 50M en 90 días, extendemos el servicio gratis hasta que lo logrés. Nuestro éxito depende del tuyo.',
  },
  {
    question: '¿Necesito saber de publicidad o marketing?',
    answer:
      'No. El programa en Skool te enseña desde la estructura del negocio, propuesta de valor, optimización de tu tienda, hasta la estrategia de anuncios y escala en Meta. Cuando lleguemos a la parte de publicidad, te enseñamos a hacerlo o te conectamos con alguien validado por nosotros.',
  },
]

function AccordionItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: (typeof faqs)[0]
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-lg font-semibold text-text-heading">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-text-secondary" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-text-secondary">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8 text-center"
        >
          <span className="section-label">Preguntas frecuentes</span>
          <h2 className="section-title mt-3">
            Seguramente te estés preguntando...
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-xl border border-gray-200 bg-white px-6 shadow-lg"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
