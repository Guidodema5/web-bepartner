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

// Elige un delta realista con distribución sesgada:
// - Mayoría de cambios chicos (±1 a ±3)
// - A veces medianos (±4 a ±7)
// - Ocasionalmente grandes (±8 a ±13) — simula olas de tráfico
// - Tendencia leve a subir (internet tiende a crecer durante el día)
function pickDelta(): number {
  const r = Math.random()
  const sign = Math.random() < 0.55 ? 1 : -1 // 55% chance de subir

  let magnitude: number
  if (r < 0.55) {
    // Cambio chico
    magnitude = randomInRange(1, 3)
  } else if (r < 0.85) {
    // Cambio mediano
    magnitude = randomInRange(4, 7)
  } else {
    // Cambio grande — burst de tráfico
    magnitude = randomInRange(8, 13)
  }

  return sign * magnitude
}

export default function LiveVisitors() {
  // Arranca en los veintis (22-29) — sensación de tráfico real pero no exagerado
  const [count, setCount] = useState(() => avoidRoundNumbers(randomInRange(23, 29)))
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
        const delta = pickDelta()
        let next = prev + delta
        // Clamp: rango realista 18-74 — si se sale, rebota hacia adentro
        if (next < 18) next = 19 + randomInRange(0, 5)
        if (next > 74) next = 72 - randomInRange(0, 4)
        return avoidRoundNumbers(next)
      })
    }

    // Intervalos variables que simulan actividad real:
    // - 70% probabilidad: intervalo corto (3-10s) — momento activo
    // - 30% probabilidad: intervalo largo (15-35s) — momento tranquilo
    let timeoutId: ReturnType<typeof setTimeout>
    const schedule = () => {
      const isActive = Math.random() < 0.7
      const delay = isActive ? randomInRange(3000, 10000) : randomInRange(15000, 35000)
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
