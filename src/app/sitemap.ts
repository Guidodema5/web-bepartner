import type { MetadataRoute } from 'next'
import { notas } from '@/data/blog'
import { rubros } from '@/data/rubros'
import { SITIO } from '@/lib/seo'

// Todas las páginas que queremos en Google (Guido, 09/11/2026). /gracias y /programa quedan afuera a propósito.
// La portada, las guías y el blog llevan la fecha de cada publicación: cada cambio que subimos le avisa a Google que
// vuelva a pasar. Las notas llevan su propia fecha (o la de "actualizada" cuando se corrigen).
const ACTUALIZADO = new Date().toISOString()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITIO, lastModified: ACTUALIZADO, changeFrequency: 'weekly', priority: 1 },
    ...rubros.map((r) => ({ url: `${SITIO}/leads-para/${r.slug}`, lastModified: ACTUALIZADO, changeFrequency: 'monthly' as const, priority: 0.9 })),
    { url: `${SITIO}/blog`, lastModified: ACTUALIZADO, changeFrequency: 'weekly', priority: 0.8 },
    ...notas.map((n) => ({ url: `${SITIO}/blog/${n.slug}`, lastModified: n.actualizada ?? n.fecha, changeFrequency: 'monthly' as const, priority: 0.7 })),
    { url: `${SITIO}/autor/guido-demaria`, lastModified: ACTUALIZADO, changeFrequency: 'yearly', priority: 0.4 },
  ]
}
