import { NextResponse } from 'next/server'

// Recibe el formulario de contacto y lo guarda como fila en el Google Sheet de
// contactos, a través de un Apps Script publicado como app web. La dirección
// del script vive en la variable SHEET_WEBHOOK_URL de Vercel.
const CAMPOS = ['nombre', 'email', 'telefono', 'url_tienda', 'facturacion', 'invierte_ads', 'desafio'] as const

// El apóstrofo hace que la planilla guarde el valor como texto: así no pierde
// el + ni los ceros de un teléfono y no interpreta nada como fórmula.
function comoTexto(valor: string) {
  return /^[=+\-@0-9]/.test(valor) ? `'${valor}` : valor
}

export async function POST(req: Request) {
  const url = process.env.SHEET_WEBHOOK_URL
  if (!url) {
    console.error('Falta SHEET_WEBHOOK_URL: el contacto no se guardó')
    return NextResponse.json({ ok: false }, { status: 500 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const fecha = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires', hour12: false })
  const fila: Record<string, string> = { fecha }
  for (const campo of CAMPOS) {
    fila[campo] = String(body[campo] ?? '').trim().slice(0, 2000)
  }
  if (!fila.email && !fila.telefono) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
  fila.calificado = fila.facturacion !== 'no_vendo' && fila.url_tienda.trim().length > 0 ? 'si' : 'no'

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(Object.fromEntries(Object.entries(fila).map(([k, v]) => [k, comoTexto(v)]))),
      redirect: 'follow',
      signal: AbortSignal.timeout(15000),
    })
    if (!res.ok) throw new Error(`Apps Script respondió ${res.status}`)
  } catch (e) {
    console.error('No se pudo guardar el contacto en el Sheet:', e)
    return NextResponse.json({ ok: false }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
