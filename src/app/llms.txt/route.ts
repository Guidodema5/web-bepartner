import { notasRecientes } from '@/data/blog'
import { rubros } from '@/data/rubros'
import { SITIO, DESCRIPCION_EMPRESA } from '@/lib/seo'

// Resumen del sitio para asistentes de IA (ChatGPT, Claude, Perplexity), que cada vez más recomiendan proveedores.
export const dynamic = 'force-static'

export function GET() {
  const texto = [
    '# Bepartner',
    '',
    `> ${DESCRIPCION_EMPRESA} Trabaja con un fee mensual fijo en toda Argentina. Contacto: agencia.bepartner@gmail.com, WhatsApp +54 9 11 4470-9617.`,
    '',
    '## Para cada tipo de negocio',
    ...rubros.map((r) => `- [${r.h1}](${SITIO}/leads-para/${r.slug}): ${r.bajada}`),
    '',
    '## Blog',
    ...notasRecientes().map((n) => `- [${n.titulo}](${SITIO}/blog/${n.slug}): ${n.resumen}`),
    '',
  ].join('\n')
  return new Response(texto, { headers: { 'content-type': 'text/plain; charset=utf-8' } })
}
