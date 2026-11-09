import type { Metadata } from 'next'
import PaginaInterna from '@/components/PaginaInterna'
import TarjetaNota from '@/components/TarjetaNota'
import { notasRecientes } from '@/data/blog'
import { autor, organizacion, migas, grafo } from '@/lib/seo'

// Página del autor (Guido, 09/11/2026): Google valora saber quién escribe las notas y qué experiencia tiene.
export const metadata: Metadata = {
  title: 'Guido Demaria, fundador de Bepartner',
  description: 'Guido Demaria es el fundador de Bepartner, agencia especializada en leads calificados para negocios de servicios, mayoristas e inmobiliarias.',
  alternates: { canonical: '/autor/guido-demaria' },
}

const ruta = [
  { nombre: 'Inicio', url: '/' },
  { nombre: 'Guido Demaria', url: '/autor/guido-demaria' },
]

export default function Autor() {
  const datos = grafo({ '@type': 'ProfilePage', mainEntity: { '@id': autor['@id'] } }, autor, organizacion, migas(ruta))
  return (
    <PaginaInterna migas={ruta}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: datos }} />
      <div className="mx-auto max-w-3xl">
        <span className="section-label">Autor</span>
        <h1 className="section-title mt-3">Guido Demaria</h1>
        <p className="mt-2 text-lg text-text-secondary">Fundador de Bepartner</p>
        <div className="mt-8 space-y-4 text-[17px] leading-relaxed">
          <p>
            Guido Demaria fundó Bepartner, una agencia especializada en leads: ayuda a negocios que ya venden bien a conseguir
            clientes calificados todos los meses con anuncios en Meta y Google.
          </p>
          <p>
            Trabaja con empresas de servicios, mayoristas, fábricas e inmobiliarias. Su método arranca por el cliente ideal y la
            propuesta de cada negocio, y recién después pasa a los anuncios, con ajustes semana a semana según lo que pasa en las ventas.
          </p>
        </div>
      </div>
      <section className="mx-auto mt-16 max-w-5xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-text-heading">Notas de Guido</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {notasRecientes().map((n) => (
            <TarjetaNota key={n.slug} nota={n} />
          ))}
        </div>
      </section>
    </PaginaInterna>
  )
}
