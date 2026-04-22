'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Ya probé agencias y no me funcionó',
    answer:
      'Esa agencia te daba acceso a tus métricas en tiempo real? Sabía exactamente qué anuncio te generaba cada venta? Nosotros no vendemos anuncios. Instalamos un sistema y vos ves los números en tiempo real. Sin resultados, no cobramos comisión.',
  },
  {
    question: 'No sé si la inversión vale la pena',
    answer:
      'Por eso el modelo es un fee inicial y después solo comisión sobre lo que factures. Si no crecemos, no ganamos. Nuestros intereses están alineados con los tuyos.',
  },
  {
    question: 'No entiendo de publicidad digital',
    answer:
      'No necesitás entenderlo. Para eso estamos nosotros. Tu trabajo es tener buen producto. El nuestro es traerte compradores que quieran comprarte.',
  },
  {
    question: '¿Es caro?',
    answer:
      'Si en 90 días llegás a 50 millones de facturación, el costo del servicio es menos del 2%. La pregunta no es si es caro. Es cuánto te está costando no tener este sistema hoy.',
  },
  {
    question: '¿Cuánto tarda en verse resultados?',
    answer:
      'Depende de dónde arranca tu tienda, pero nuestro caso documentado pasó de 4 a 102 ventas en 3 meses. El primer mes es de diagnóstico y setup. Los resultados empiezan a verse desde el segundo mes.',
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
