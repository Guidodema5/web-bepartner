import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

/** Marco de las páginas del blog, las guías por rubro y el autor: menú, migas de pan visibles y pie. */
export default function PaginaInterna({ migas, children }: { migas: { nombre: string; url: string }[]; children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <nav aria-label="Migas de pan" className="mx-auto mb-8 max-w-3xl text-sm text-text-secondary">
          {migas.map((m, i) => (
            <span key={m.url}>
              {i > 0 && <span className="mx-2">/</span>}
              {i < migas.length - 1 ? <Link href={m.url} className="hover:text-text-heading">{m.nombre}</Link> : <span className="text-text-heading">{m.nombre}</span>}
            </span>
          ))}
        </nav>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
