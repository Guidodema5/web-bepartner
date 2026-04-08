'use client'

import { Instagram, Mail, ExternalLink } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Casos de Éxito', href: '#caso-exito' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-surface-dark px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Tagline */}
          <div>
            <span className="font-display text-xl font-extrabold tracking-tight text-white">
              BEPARTNER
            </span>
            <p className="mt-3 text-sm text-gray-400">
              Socios de crecimiento para ecommerce
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Navegación
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Contacto
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:agencia.bepartner@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  <Mail size={16} />
                  agencia.bepartner@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bepartner.lat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  <Instagram size={16} />
                  @bepartner.lat
                </a>
              </li>
            </ul>
          </div>

          {/* Portal */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Clientes
            </h4>
            <a
              href="https://bepartnerclientes.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-violet px-4 py-2 text-sm font-medium text-brand-violet transition-all hover:bg-brand-violet hover:text-white"
            >
              Acceso al portal <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-500">&copy; 2026 Bepartner Latam</p>
        </div>
      </div>
    </footer>
  )
}
