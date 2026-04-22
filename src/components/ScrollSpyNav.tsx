'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Section = {
  id: string
  label: string
  step: string
}

const sections: Section[] = [
  { id: 'inicio', label: 'Inicio', step: '00' },
  { id: 'problema', label: 'El problema', step: '01' },
  { id: 'para-quien', label: 'Para quién', step: '02' },
  { id: 'portal', label: 'El software', step: '03' },
  { id: 'caso-exito', label: 'Casos de éxito', step: '04' },
  { id: 'nosotros', label: 'Nosotros', step: '05' },
  { id: 'contacto', label: 'Contacto', step: '06' },
]

/**
 * Scrollspy: indicador flotante sobre el lado derecho del viewport.
 * Se mueve con el scroll, resalta la sección activa, y permite navegar.
 * Es el "hilo conductor" visual del sitio — siempre presente, nunca interrumpe.
 */
export default function ScrollSpyNav() {
  const [activeId, setActiveId] = useState<string>('inicio')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Mostrar solo después de pasar el hero
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      aria-label="Navegación de la página"
    >
      <ul className="pointer-events-auto flex flex-col items-end gap-4">
        {sections.map((section) => {
          const isActive = activeId === section.id
          return (
            <li key={section.id} className="group relative flex items-center">
              {/* Label tooltip */}
              <span
                className={`pointer-events-none absolute right-8 whitespace-nowrap rounded-md bg-[#1a1a2e] px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-all duration-200 ${
                  isActive
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                }`}
              >
                <span className="mr-2 text-[#c8a2e8]">{section.step}</span>
                {section.label}
              </span>

              {/* Dot */}
              <a
                href={`#${section.id}`}
                aria-label={`Ir a ${section.label}`}
                aria-current={isActive ? 'true' : undefined}
                className={`relative flex items-center justify-center transition-all duration-300 ${
                  isActive ? 'h-3 w-3' : 'h-2 w-2'
                }`}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'h-3 w-3 bg-brand-violet shadow-[0_0_0_4px_rgba(117,61,148,0.2)]'
                      : 'h-2 w-2 bg-gray-400/60 group-hover:bg-brand-violet'
                  }`}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </motion.nav>
  )
}
