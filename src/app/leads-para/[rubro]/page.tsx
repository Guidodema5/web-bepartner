import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Check, X } from 'lucide-react'
import PaginaInterna from '@/components/PaginaInterna'
import TarjetaNota from '@/components/TarjetaNota'
import LlamadoInterno from '@/components/LlamadoInterno'
import { rubros, rubroPorSlug } from '@/data/rubros'
import { notaPorSlug } from '@/data/blog'
import { SITIO, ID_ORGANIZACION, organizacion, migas, grafo } from '@/lib/seo'

export const dynamicParams = false
export const generateStaticParams = () => rubros.map((r) => ({ rubro: r.slug }))

export function generateMetadata({ params }: { params: { rubro: string } }): Metadata {
  const r = rubroPorSlug(params.rubro)
  if (!r) return {}
  const url = `/leads-para/${r.slug}`
  return {
    title: r.tituloSeo,
    description: r.descripcion,
    alternates: { canonical: url },
    openGraph: { type: 'website', url, title: r.tituloSeo, description: r.descripcion, images: ['/og-image.jpg'], locale: 'es_AR', siteName: 'Bepartner' },
  }
}

export default function GuiaRubro({ params }: { params: { rubro: string } }) {
  const r = rubroPorSlug(params.rubro)
  if (!r) notFound()
  const url = `${SITIO}/leads-para/${r.slug}`
  const ruta = [
    { nombre: 'Inicio', url: '/' },
    { nombre: r.nombre, url: `/leads-para/${r.slug}` },
  ]
  const datos = grafo(
    {
      '@type': 'Service',
      '@id': `${url}#servicio`,
      name: r.h1,
      description: r.descripcion,
      url,
      serviceType: 'Generación de leads calificados',
      audience: { '@type': 'BusinessAudience', name: r.nombre },
      areaServed: { '@type': 'Country', name: 'Argentina' },
      provider: { '@id': ID_ORGANIZACION },
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}#preguntas`,
      mainEntity: r.preguntas.map((p) => ({ '@type': 'Question', name: p.question, acceptedAnswer: { '@type': 'Answer', text: p.answer } })),
    },
    organizacion,
    migas(ruta),
  )
  const notas = r.notas.map(notaPorSlug).filter((n): n is NonNullable<typeof n> => !!n)

  return (
    <PaginaInterna migas={ruta}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: datos }} />
      <div className="mx-auto max-w-3xl">
        <span className="section-label">Agencia especializada en leads · {r.nombre}</span>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-text-heading sm:text-5xl">{r.h1}</h1>
        <p className="mt-5 text-xl leading-relaxed text-text-secondary">{r.bajada}</p>
        <a href="/#contacto" className="btn-primary mt-8 text-[15px]">Contactanos</a>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-text-heading sm:text-3xl">Si te pasa esto, es para vos</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {r.problemas.map((p) => (
              <li key={p} className="tarjeta flex items-start gap-3 p-5">
                <X size={18} className="mt-0.5 flex-shrink-0 text-status-negative" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-text-heading sm:text-3xl">Qué es un lead calificado para {r.nombre.toLowerCase()}</h2>
          <ul className="mt-6 space-y-3">
            {r.calificado.map((c) => (
              <li key={c} className="flex items-start gap-3 text-[17px]">
                <Check size={20} className="mt-0.5 flex-shrink-0 text-violeta-600" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-text-heading sm:text-3xl">Cómo trabajamos</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {r.comoTrabajamos.map((p, i) => (
              <li key={p.titulo} className="tarjeta p-6">
                <span className="section-label">Paso {i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-text-heading">{p.titulo}</h3>
                <p className="mt-2 text-text-secondary">{p.texto}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-text-heading sm:text-3xl">Preguntas frecuentes</h2>
          <div className="mt-6 divide-y divide-linea">
            {r.preguntas.map((p) => (
              <div key={p.question} className="py-5">
                <h3 className="text-[17px] font-semibold text-text-heading">{p.question}</h3>
                <p className="mt-2 text-text-secondary">{p.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <LlamadoInterno titulo={`¿Querés leads calificados para tu ${r.slug === 'mayoristas' ? 'negocio mayorista' : r.slug === 'inmobiliarias' ? 'inmobiliaria' : 'empresa'}?`} />

      {notas.length > 0 && (
        <section className="mx-auto mt-16 max-w-5xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-text-heading">Guías para {r.nombre.toLowerCase()}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {notas.map((n) => (
              <TarjetaNota key={n.slug} nota={n} />
            ))}
          </div>
        </section>
      )}
    </PaginaInterna>
  )
}
