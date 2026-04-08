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

function BepartnerLogo() {
  return (
    <svg viewBox="0 0 220 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto sm:h-7">
      {/* B */}
      <text x="0" y="22" fontFamily="var(--font-display), 'Plus Jakarta Sans', sans-serif" fontSize="24" fontWeight="800" letterSpacing="2" fill="white">
        BEP
      </text>
      {/* A as triangle */}
      <g transform="translate(62, 2)">
        <polygon points="10,0 20,22 0,22" fill="#753D94" />
        <line x1="5" y1="14" x2="15" y2="14" stroke="white" strokeWidth="2" />
      </g>
      <text x="82" y="22" fontFamily="var(--font-display), 'Plus Jakarta Sans', sans-serif" fontSize="24" fontWeight="800" letterSpacing="2" fill="white">
        RTNER
      </text>
    </svg>
  )
}

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
            ? 'bg-[#1a1a2e]/95 shadow-lg backdrop-blur-xl'
            : 'bg-[#1a1a2e]'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <BepartnerLogo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/bepartner.lat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://bepartnerclientes.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-brand-violet bg-brand-violet/10 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-violet hover:shadow-lg"
            >
              Acceso clientes
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="text-white md:hidden"
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
              className="fixed right-0 top-0 z-50 h-full w-72 bg-[#1a1a2e] p-6 shadow-xl"
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
                    className="text-lg font-medium text-gray-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <hr className="border-white/10" />
                <a
                  href="https://www.instagram.com/bepartner.lat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white"
                >
                  <Instagram size={20} /> Instagram
                </a>
                <a
                  href="https://bepartnerclientes.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-brand-violet bg-brand-violet px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-brand-violet-hover"
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
