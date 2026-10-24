'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Casos de Éxito', href: '/#caso-exito' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Contacto', href: '/#contacto' },
]

function BepartnerLogo() {
  return (
    <div className="relative h-10 w-[150px] overflow-hidden sm:h-14 sm:w-[220px]">
      <Image
        src="/logo-white.png"
        alt="Bepartner"
        fill
        className="scale-[2.2] object-contain"
        priority
      />
    </div>
  )
}

export { BepartnerLogo }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-noche-linea bg-noche-fondo/90 backdrop-blur-xl'
            : 'border-b border-transparent bg-noche-fondo'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2 sm:px-6 lg:px-10">
          <a href="/#inicio" className="flex items-center">
            <BepartnerLogo />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-noche-suave transition-colors hover:text-noche-texto"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/bepartner.lat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-noche-suave transition-colors hover:text-noche-texto"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://bepartnerclientes.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-brand-violet px-4 py-2 text-sm font-semibold text-white shadow-brillo transition-colors hover:bg-brand-violet-hover"
            >
              Acceso clientes
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="text-white md:hidden"
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-72 border-l border-noche-linea bg-noche-fondo p-6"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="mb-8 ml-auto block text-white"
                aria-label="Cerrar menú"
              >
                <X size={28} />
              </button>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-noche-texto transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <hr className="border-noche-linea" />
                <a
                  href="https://www.instagram.com/bepartner.lat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-noche-suave hover:text-noche-texto"
                >
                  <Instagram size={20} /> Instagram
                </a>
                <a
                  href="https://bepartnerclientes.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-brand-violet px-5 py-3 text-center text-sm font-semibold text-white shadow-brillo transition-colors hover:bg-brand-violet-hover"
                >
                  Acceso clientes
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
