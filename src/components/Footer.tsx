'use client'

import { Instagram, Mail, ExternalLink } from 'lucide-react'
import { BepartnerLogo } from './Navbar'

const navLinks = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Casos de Éxito', href: '/#caso-exito' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Contacto', href: '/#contacto' },
]

export default function Footer() {
  return (
    <footer className="border-t border-noche-linea bg-noche-fondo px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <BepartnerLogo />
            <p className="mt-3 text-sm text-noche-suave">
              Socios de crecimiento para tiendas online
            </p>
          </div>

          <div>
            <h4 className="section-label-noche mb-4">
              Navegación
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-noche-suave transition-colors hover:text-noche-texto"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label-noche mb-4">
              Contacto
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:agencia.bepartner@gmail.com"
                  className="flex items-center gap-2 text-sm text-noche-suave transition-colors hover:text-noche-texto"
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
                  className="flex items-center gap-2 text-sm text-noche-suave transition-colors hover:text-noche-texto"
                >
                  <Instagram size={16} />
                  @bepartner.lat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="section-label-noche mb-4">
              Clientes
            </h4>
            <a
              href="https://bepartnerclientes.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-noche gap-2 px-4 py-2 text-sm"
            >
              Acceso al portal <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-noche-linea pt-6 text-center">
          <p className="text-sm text-noche-tenue">&copy; 2026 Bepartner Latam</p>
          <div className="mx-auto mt-4 max-w-3xl space-y-2 text-xs leading-relaxed text-noche-tenue">
            <p>
              Este sitio no forma parte de Meta Platforms, Inc. ni de Google, y no está respaldado por ellos.
              Facebook e Instagram son marcas registradas de Meta Platforms, Inc.
            </p>
            <p>
              Los resultados que mostramos son de clientes reales y no están garantizados: cada negocio depende
              de su producto, su mercado y su inversión.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
