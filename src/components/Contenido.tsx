import Link from 'next/link'
import { Fragment } from 'react'
import type { Bloque } from '@/data/blog'

/** **negrita** y [texto](/ruta) dentro de un texto del blog. */
export function Texto({ children }: { children: string }) {
  const partes = children.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {partes.map((p, i) => {
        if (p.startsWith('**')) return <strong key={i} className="font-semibold text-text-heading">{p.slice(2, -2)}</strong>
        const enlace = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (enlace) {
          return (
            <Link key={i} href={enlace[2]} className="font-medium text-violeta-600 underline decoration-violeta-300 underline-offset-4 hover:text-violeta-700">
              {enlace[1]}
            </Link>
          )
        }
        return <Fragment key={i}>{p}</Fragment>
      })}
    </>
  )
}

export default function Contenido({ bloques }: { bloques: Bloque[] }) {
  return (
    <div className="space-y-5 text-[17px] leading-relaxed text-text-primary">
      {bloques.map((b, i) => {
        if ('h2' in b) return <h2 key={i} className="pt-6 font-display text-2xl font-semibold tracking-tight text-text-heading sm:text-3xl">{b.h2}</h2>
        if ('h3' in b) return <h3 key={i} className="pt-2 font-display text-xl font-semibold tracking-tight text-text-heading">{b.h3}</h3>
        if ('p' in b) return <p key={i}><Texto>{b.p}</Texto></p>
        const Lista = 'pasos' in b ? 'ol' : 'ul'
        const items = 'pasos' in b ? b.pasos : b.lista
        return (
          <Lista key={i} className={`space-y-2 pl-6 ${'pasos' in b ? 'list-decimal' : 'list-disc'} marker:text-violeta-500`}>
            {items.map((x) => (
              <li key={x} className="pl-1"><Texto>{x}</Texto></li>
            ))}
          </Lista>
        )
      })}
    </div>
  )
}
