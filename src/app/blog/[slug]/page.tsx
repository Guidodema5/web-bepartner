import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PaginaInterna from '@/components/PaginaInterna'
import Contenido from '@/components/Contenido'
import TarjetaNota, { fechaLarga } from '@/components/TarjetaNota'
import LlamadoInterno from '@/components/LlamadoInterno'
import { notas, notaPorSlug } from '@/data/blog'
import { SITIO, ID_ORGANIZACION, ID_AUTOR, organizacion, autor, migas, grafo } from '@/lib/seo'

export const dynamicParams = false
export const generateStaticParams = () => notas.map((n) => ({ slug: n.slug }))

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const nota = notaPorSlug(params.slug)
  if (!nota) return {}
  const url = `/blog/${nota.slug}`
  return {
    title: nota.tituloSeo,
    description: nota.descripcion,
    alternates: { canonical: url },
    authors: [{ name: 'Guido De Maria', url: '/autor/guido-de-maria' }],
    openGraph: {
      type: 'article',
      url,
      title: nota.titulo,
      description: nota.descripcion,
      publishedTime: nota.fecha,
      modifiedTime: nota.actualizada ?? nota.fecha,
      authors: [`${SITIO}/autor/guido-de-maria`],
      images: ['/og-image.jpg'],
      locale: 'es_AR',
      siteName: 'Bepartner',
    },
  }
}

const palabras = (n: NonNullable<ReturnType<typeof notaPorSlug>>) =>
  [n.resumen, ...n.cuerpo.flatMap((b) => Object.values(b).flat() as string[])].join(' ').split(/\s+/).length

export default function NotaBlog({ params }: { params: { slug: string } }) {
  const nota = notaPorSlug(params.slug)
  if (!nota) notFound()
  const url = `${SITIO}/blog/${nota.slug}`
  const ruta = [
    { nombre: 'Inicio', url: '/' },
    { nombre: 'Blog', url: '/blog' },
    { nombre: nota.categoria, url: `/blog/${nota.slug}` },
  ]
  const datos = grafo(
    {
      '@type': 'BlogPosting',
      '@id': `${url}#nota`,
      headline: nota.titulo,
      description: nota.descripcion,
      abstract: nota.resumen,
      url,
      mainEntityOfPage: url,
      inLanguage: 'es-AR',
      datePublished: nota.fecha,
      dateModified: nota.actualizada ?? nota.fecha,
      wordCount: palabras(nota),
      timeRequired: `PT${nota.minutos}M`,
      articleSection: nota.categoria,
      image: `${SITIO}/og-image.jpg`,
      author: { '@id': ID_AUTOR },
      publisher: { '@id': ID_ORGANIZACION },
    },
    organizacion,
    autor,
    migas(ruta),
  )
  const relacionadas = nota.relacionadas.map(notaPorSlug).filter((n): n is NonNullable<typeof n> => !!n)

  return (
    <PaginaInterna migas={ruta}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: datos }} />
      <article className="mx-auto max-w-3xl">
        <header>
          <span className="section-label">{nota.categoria}</span>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-text-heading sm:text-4xl lg:text-[44px]">
            {nota.titulo}
          </h1>
          <p className="mt-5 text-sm text-text-secondary">
            Por <Link href="/autor/guido-de-maria" className="font-medium text-text-heading hover:text-violeta-700">Guido De Maria</Link>, fundador de Bepartner ·{' '}
            <time dateTime={nota.fecha}>{fechaLarga(nota.fecha)}</time> · {nota.minutos} min de lectura
          </p>
        </header>
        <p className="mt-8 rounded-tarjeta border border-violeta-200 bg-violeta-200/25 p-5 text-[17px] leading-relaxed text-text-heading">
          <strong className="font-semibold">En pocas palabras: </strong>
          {nota.resumen}
        </p>
        <div className="mt-6">
          <Contenido bloques={nota.cuerpo} />
        </div>
      </article>

      <LlamadoInterno />

      {relacionadas.length > 0 && (
        <section className="mx-auto mt-16 max-w-5xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-text-heading">Seguí leyendo</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relacionadas.map((n) => (
              <TarjetaNota key={n.slug} nota={n} />
            ))}
          </div>
        </section>
      )}
    </PaginaInterna>
  )
}
