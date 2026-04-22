'use client'

import { motion } from 'framer-motion'

type Props = {
  step?: string
  label?: string
  variant?: 'default' | 'light'
}

/**
 * Conector visual entre secciones.
 * Una línea violeta vertical con un nodo numerado.
 * Crea un hilo conductor/storytelling visual entre secciones con grilla.
 */
export default function SectionConnector({ step, label, variant = 'default' }: Props) {
  return (
    <div className="relative flex justify-center py-6">
      {/* Línea vertical */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ transformOrigin: 'top' }}
        className="h-20 w-px bg-gradient-to-b from-brand-violet/0 via-brand-violet/50 to-brand-violet"
      />

      {/* Nodo numerado */}
      {step && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'backOut' }}
          className="absolute bottom-0 flex flex-col items-center gap-1.5"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-violet bg-white font-display text-sm font-bold text-brand-violet shadow-md">
            {step}
          </div>
          {label && (
            <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-violet">
              {label}
            </span>
          )}
        </motion.div>
      )}
    </div>
  )
}
