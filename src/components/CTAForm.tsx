'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, ArrowRight, Loader2 } from 'lucide-react'
import { IconoWhatsApp, WHATSAPP_URL } from './Llamado'

type FormData = {
  nombre: string
  telefono: string
  email: string
  url_tienda: string
  facturacion: string
}

// Un solo paso (Guido, 29/10/2026): la persona deja sus datos (se guardan en el Google Sheet) y Bepartner le escribe
// para coordinar la llamada. Sin calendario: la barrera de entrada tiene que ser baja para conseguir el contacto.
export default function CTAForm() {
  const [estado, setEstado] = useState<'form' | 'listo' | 'error'>('form')
  const [submitting, setSubmitting] = useState(false)
  const [datos, setDatos] = useState<FormData | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    const telefono = data.telefono.trim().startsWith('+') ? data.telefono.trim() : `+54 ${data.telefono.trim()}`
    const envio = { ...data, telefono }

    // Guarda el contacto en el Google Sheet (ver app/api/contacto).
    let guardado = false
    try {
      const r = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(envio),
      })
      guardado = r.ok
    } catch (e) {
      console.error('No se pudo guardar el contacto:', e)
    }

    // El evento de cliente potencial (Lead) del píxel se dispara solo si el formulario se guardó de verdad
    // (Guido, 28/10/2026): si falla, Meta no cuenta un contacto que no llegó.
    if (guardado && typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', { content_name: 'Formulario CTA' })
      // Completar registro (Guido, 29/10/2026), también solo con el formulario guardado.
      window.fbq('track', 'CompleteRegistration', { content_name: 'Formulario CTA' })
    }

    setDatos(envio)
    setEstado(guardado ? 'listo' : 'error')
    setSubmitting(false)
  }

  const inputClass =
    'w-full rounded-xl border border-linea-fuerte bg-surface-card-2 px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-tenue focus:border-violeta-500 focus:bg-surface-card'
  const error = (msg?: string) => msg && <span className="mt-1 block text-xs text-status-negative">{msg}</span>

  return (
    <section id="contacto" className="relative overflow-hidden bg-noche-fondo px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <span className="section-label-noche inline-flex items-center gap-2 rounded-full border border-noche-linea-fuerte px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-violeta-300" />
            Diagnóstico gratuito · Cupos limitados por mes
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-noche-texto sm:text-4xl lg:text-5xl">
            Pedí tu diagnóstico gratuito
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-noche-suave">
            Dejanos tus datos y te escribimos para coordinar la llamada. Revisamos tu tienda con vos y te mostramos qué la está frenando y qué haríamos para que venda más.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="mx-auto max-w-xl overflow-hidden rounded-tarjeta bg-surface-card shadow-[0_30px_80px_-30px_rgba(164,107,198,0.45)]"
        >
          <AnimatePresence mode="wait">
            {estado === 'form' && (
              <motion.div
                key="paso1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8"
              >
                <h3 className="text-xl font-semibold text-text-heading">Diagnóstico de tu tienda</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  En esta llamada de 30 minutos analizamos tu tienda para mostrarte en qué está fallando y cuál es el plan para resolverlo.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-start gap-2 text-text-primary">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-status-positive" />
                    Si podemos ayudarte, te mostramos el paso a paso para llegar a tu objetivo de facturación.
                  </li>
                  <li className="flex items-start gap-2 text-text-primary">
                    <X size={16} className="mt-0.5 flex-shrink-0 text-status-negative" />
                    Si no, te damos la claridad para que sigas por el mejor camino.
                  </li>
                </ul>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-3">
                  <div>
                    <input {...register('nombre', { required: 'Tu nombre es obligatorio' })} placeholder="Nombre" className={inputClass} />
                    {error(errors.nombre?.message)}
                  </div>
                  <div>
                    <div className="flex">
                      <span className="flex items-center rounded-l-xl border border-r-0 border-linea-fuerte bg-surface-card-2 px-3 text-sm text-text-secondary">
                        +54
                      </span>
                      <input
                        {...register('telefono', { required: 'Tu WhatsApp es obligatorio' })}
                        placeholder="WhatsApp (con código de área)"
                        type="tel"
                        className={`${inputClass} rounded-l-none`}
                      />
                    </div>
                    {error(errors.telefono?.message)}
                  </div>
                  <div>
                    <input
                      {...register('email', {
                        required: 'Tu email es obligatorio',
                        pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' },
                      })}
                      placeholder="Email"
                      type="email"
                      className={inputClass}
                    />
                    {error(errors.email?.message)}
                  </div>
                  <div>
                    <input
                      {...register('url_tienda', { required: 'El link de tu tienda es obligatorio' })}
                      placeholder="Link de tu tienda online"
                      className={inputClass}
                    />
                    {error(errors.url_tienda?.message)}
                  </div>
                  <div>
                    <select {...register('facturacion', { required: 'Elegí una opción' })} defaultValue="" className={inputClass}>
                      <option value="" disabled>Facturación mensual aproximada</option>
                      <option value="no_vendo">Todavía no vendo online</option>
                      <option value="menos_1m">Menos de $1M por mes</option>
                      <option value="1m_5m">$1M a $5M por mes</option>
                      <option value="5m_10m">$5M a $10M por mes</option>
                      <option value="mas_10m">Más de $10M por mes</option>
                    </select>
                    {error(errors.facturacion?.message)}
                  </div>

                  <p className="text-xs text-text-secondary">
                    Usamos tus datos solo para contactarte.
                  </p>

                  <button type="submit" disabled={submitting} className="btn-primary w-full gap-2">
                    {submitting ? <Loader2 size={18} className="animate-spin" /> : <>Quiero mi diagnóstico gratuito <ArrowRight size={18} /></>}
                  </button>
                </form>
              </motion.div>
            )}

            {estado !== 'form' && (
              <motion.div
                key="listo"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="p-8 text-center"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-violet/10">
                  <Check size={28} className="text-brand-violet" />
                </div>
                {estado === 'listo' ? (
                  <>
                    <h3 className="mb-2 text-xl font-semibold text-text-heading">¡Listo, {datos?.nombre}!</h3>
                    <p className="text-text-secondary">Recibimos tus datos. Te vamos a escribir por WhatsApp para coordinar la llamada.</p>
                  </>
                ) : (
                  <>
                    <h3 className="mb-2 text-xl font-semibold text-text-heading">No pudimos guardar tus datos</h3>
                    <p className="text-text-secondary">Escribinos directo por WhatsApp y coordinamos la llamada.</p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 gap-2">
                      <IconoWhatsApp className="h-[18px] w-[18px]" /> Escribir por WhatsApp
                    </a>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
