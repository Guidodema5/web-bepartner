import type { Metadata } from 'next'
import PaginaInterna from '@/components/PaginaInterna'
import TarjetaNota from '@/components/TarjetaNota'
import LlamadoInterno from '@/components/LlamadoInterno'
import { notasRecientes } from '@/data/blog'
import { SITIO, ID_ORGANIZACION, organizacion, migas, grafo } from '@/lib/seo'

const titulo = 'Blog de leads calificados y anuncios para negocios'
const descripcion =
  'Guías prácticas para dueños de negocio: cómo conseguir leads calificados, cuánto pagar por un lead, anuncios para inmobiliarias, mayoristas y empresas de servicios.'

export const metadata: Metadata = {
  title: titulo,
  description: descripcion,
  alternates: { canonical: '/blog' },
  openGraph: { type: 'website', url: '/blog', title: titulo, description: descripcion, images: ['/og-image.jpg'], locale: 'es_AR', siteName: 'Bepartner' },
}

const ruta = [
  { nombre: 'Inicio', url: '/' },
  { nombre: 'Blog', url: '/blog' },
]

export default function Blog() {
  const notas = notasRecientes()
  const datos = grafo(
    organizacion,
    {
      '@type': 'Blog',
      '@id': `${SITIO}/blog#blog`,
      name: 'Blog de Bepartner',
      url: `${SITIO}/blog`,
      description: descripcion,
      inLanguage: 'es-AR',
      publisher: { '@id': ID_ORGANIZACION },
      blogPost: notas.map((n) => ({ '@type': 'BlogPosting', headline: n.titulo, url: `${SITIO}/blog/${n.slug}`, datePublished: n.fecha })),
    },
    migas(ruta),
  )
  return (
    <PaginaInterna migas={ruta}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: datos }} />
      <div className="mx-auto max-w-5xl">
        <header className="mx-auto max-w-3xl">
          <span className="section-label">Blog</span>
          <h1 className="section-title mt-3">Leads calificados y anuncios para negocios</h1>
          <p className="mt-5 text-lg text-text-secondary">{descripcion}</p>
        </header>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {notas.map((n) => (
            <TarjetaNota key={n.slug} nota={n} />
          ))}
        </div>
      </div>
      <LlamadoInterno />
    </PaginaInterna>
  )
}
