import Link from 'next/link'
import { notasRecientes } from '@/data/blog'
import { rubros } from '@/data/rubros'
import TarjetaNota from './TarjetaNota'

/** Al final de la portada: enlaces a las guías por rubro y a las últimas notas (Google llega a todo desde la portada). */
export default function BlogPortada() {
  return (
    <section id="blog" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <span className="section-label">Leads para tu negocio</span>
        <div className="mt-4 flex flex-wrap gap-3">
          {rubros.map((r) => (
            <Link key={r.slug} href={`/leads-para/${r.slug}`} className="btn-secondary px-5 py-2.5 text-[15px]">
              {r.nombre}
            </Link>
          ))}
        </div>
        <div className="mt-14 flex items-end justify-between gap-4">
          <h2 className="section-title">Del blog</h2>
          <Link href="/blog" className="text-sm font-medium text-violeta-600 hover:text-violeta-700">Ver todas las notas</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {notasRecientes().slice(0, 3).map((n) => (
            <TarjetaNota key={n.slug} nota={n} />
          ))}
        </div>
      </div>
    </section>
  )
}
