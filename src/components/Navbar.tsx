'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Casos de Éxito', href: '#caso-exito' },
  { label: 'Contacto', href: '#contacto' },
]

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
            ? 'border-b border-gray-200/50 bg-surface-warm/80 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#inicio" className="font-display text-xl font-extrabold tracking-tight text-text-heading sm:text-2xl">
            BEPARTNER
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-primary transition-colors hover:text-brand-violet"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/bepartner.lat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-brand-violet"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://bepartnerclientes.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-5 !py-2 !text-sm"
            >
              Acceso clientes
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="text-text-heading md:hidden"
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
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
              className="fixed right-0 top-0 z-50 h-full w-72 bg-white p-6 shadow-xl"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="mb-8 ml-auto block text-text-heading"
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
                    className="text-lg font-medium text-text-heading transition-colors hover:text-brand-violet"
                  >
                    {link.label}
                  </a>
                ))}
                <hr className="border-gray-200" />
                <a
                  href="https://www.instagram.com/bepartner.lat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary hover:text-brand-violet"
                >
                  <Instagram size={20} /> Instagram
                </a>
                <a
                  href="https://bepartnerclientes.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
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
