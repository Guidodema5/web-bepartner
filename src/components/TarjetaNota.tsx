import Link from 'next/link'
import type { Nota } from '@/data/blog'

export const fechaLarga = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })

export default function TarjetaNota({ nota }: { nota: Nota }) {
  return (
    <Link href={`/blog/${nota.slug}`} className="tarjeta group flex flex-col p-6">
      <span className="section-label">{nota.categoria}</span>
      <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-text-heading group-hover:text-violeta-700">
        {nota.titulo}
      </h3>
      <p className="mt-3 line-clamp-3 text-[15px] text-text-secondary">{nota.descripcion}</p>
      <span className="mt-auto pt-5 text-sm text-text-secondary">{nota.minutos} min de lectura</span>
    </Link>
  )
}
