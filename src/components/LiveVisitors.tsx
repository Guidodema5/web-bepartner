'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Users } from 'lucide-react'

/**
 * Indicador de visitantes en línea (FOMO).
 * Simula número de personas mirando la página.
 * - Aparece a los ~4 segundos
 * - Número oscila entre 34 y 68
 * - Cambia cada 15-30 segundos con ±1-4 de variación
 * - Se puede cerrar
 * - Posición: esquina inferior-izquierda (WhatsApp está en la derecha)
 */

function randomInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Evitar números redondos (acabados en 0 o 5) — se sienten "fake"
function avoidRoundNumbers(n: number) {
  if (n % 10 === 0 || n % 10 === 5) {
    return n + (Math.random() < 0.5 ? -1 : 1)
  }
  return n
}

// Deltas impares para evitar saltos de a 2/4 que se ven artificiales
const DELTAS = [-7, -3, -1, 1, 3, 7]

export default function LiveVisitors() {
  const [count, setCount] = useState(() => avoidRoundNumbers(randomInRange(41, 59)))
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Check dismissed state from sessionStorage
    if (typeof window !== 'undefined' && sessionStorage.getItem('live-visitors-dismissed') === '1') {
      setDismissed(true)
      return
    }

    // Appear after 4s
    const appearTimer = setTimeout(() => setVisible(true), 4000)

    return () => clearTimeout(appearTimer)
  }, [])

  useEffect(() => {
    if (!visible || dismissed) return

    const tick = () => {
      setCount((prev) => {
        // Delta impar aleatorio (nunca ±2, ±4, ±6 ni 0)
        const delta = DELTAS[Math.floor(Math.random() * DELTAS.length)]
        let next = prev + delta
        // Clamp al rango realista y evitar redondos
        if (next < 32) next = 33 + randomInRange(1, 4)
        if (next > 71) next = 68 - randomInRange(0, 3)
        return avoidRoundNumbers(next)
      })
    }

    // Cambia cada 12-28s (intervalo aleatorio no regular)
    let timeoutId: ReturnType<typeof setTimeout>
    const schedule = () => {
      const delay = randomInRange(12000, 28000)
      timeoutId = setTimeout(() => {
        tick()
        schedule()
      }, delay)
    }
    schedule()

    return () => clearTimeout(timeoutId)
  }, [visible, dismissed])

  const handleDismiss = () => {
    setDismissed(true)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('live-visitors-dismissed', '1')
    }
  }

  if (dismissed) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 z-40 flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2.5 shadow-xl sm:gap-3"
          role="status"
          aria-live="polite"
        >
          {/* Live pulse dot */}
          <div className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </div>

          <div className="flex items-center gap-2">
            <Users size={15} className="text-brand-violet" />
            <p className="text-sm text-text-primary">
              <motion.span
                key={count}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block font-bold text-brand-violet"
              >
                {count}
              </motion.span>{' '}
              <span className="hidden sm:inline">personas viendo la página</span>
              <span className="sm:hidden">viendo</span>
            </p>
          </div>

          <button
            onClick={handleDismiss}
            aria-label="Cerrar"
            className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
