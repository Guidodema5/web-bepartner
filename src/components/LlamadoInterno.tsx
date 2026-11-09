import { ArrowRight } from 'lucide-react'

/** Cierre de las notas y guías: lleva al formulario de la portada. */
export default function LlamadoInterno({ titulo = '¿Querés leads calificados para tu negocio?' }: { titulo?: string }) {
  return (
    <aside className="tarjeta-noche mx-auto mt-16 max-w-3xl p-8 text-center sm:p-10">
      <p className="font-display text-2xl font-semibold tracking-tight text-noche-texto sm:text-3xl">{titulo}</p>
      <p className="mx-auto mt-3 max-w-xl text-noche-suave">
        Contanos de tu negocio y vemos juntos cómo conseguir clientes calificados todos los meses.
      </p>
      <a href="/#contacto" className="btn-primary mt-7 gap-2 text-[15px]">
        Contactanos <ArrowRight size={17} />
      </a>
    </aside>
  )
}
