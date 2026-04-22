'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react'

type FormData = {
  nombre: string
  email: string
  telefono: string
  url_tienda: string
  facturacion: string
  invierte_ads: string
  desafio: string
}

const WEBHOOK_URL = process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL || ''
const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/agencia-bepartner/30min'

const bullets = [
  'Auditoría sin compromiso ni costo',
  'Plan personalizado para tu tienda',
  'Resultados predecibles, no promesas',
]

export default function CTAForm() {
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [qualified, setQualified] = useState<boolean | null>(null)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    trigger,
  } = useForm<FormData>()

  const goToStep2 = async () => {
    const valid = await trigger(['nombre', 'email', 'telefono'])
    if (valid) setStep(2)
  }

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)

    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            timestamp: new Date().toISOString(),
            qualified: data.facturacion !== 'no_vendo' && data.url_tienda.length > 0,
          }),
        })
      } catch (e) {
        console.error('Webhook error:', e)
      }
    }

    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', { content_name: 'Formulario CTA' })
    }

    const isQualified =
      data.facturacion !== 'no_vendo' && data.url_tienda.trim().length > 0
    setQualified(isQualified)
    setStep(3)
    setSubmitting(false)
  }

  const values = getValues()
  const inputClass =
    'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-text-primary outline-none transition-all focus:border-brand-violet focus:ring-2 focus:ring-brand-violet/20'

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-gradient-to-br from-[#2d1b4e] to-[#1a1a2e] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            ¿Tu tienda está lista para escalar?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Contanos sobre tu negocio. Si hay match, te mostramos exactamente dónde podés crecer.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
            {bullets.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-violet">
                  <Check size={12} className="text-white" strokeWidth={3} />
                </div>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-lg rounded-2xl bg-white p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] sm:p-8"
        >
          {/* Progress dots with numbers */}
          <div className="mb-6 flex items-center justify-center gap-3">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all ${
                    s === step
                      ? 'bg-brand-violet text-white'
                      : s < step
                      ? 'bg-brand-violet/30 text-brand-violet'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`h-0.5 w-8 transition-all ${
                      s < step ? 'bg-brand-violet' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mb-1 text-lg font-semibold text-text-heading">
                  Datos de contacto
                </h3>
                <p className="mb-5 text-sm text-text-secondary">
                  Para poder contactarte con el diagnóstico.
                </p>

                <div className="flex flex-col gap-4">
                  <div>
                    <input
                      {...register('nombre', { required: 'Tu nombre es obligatorio' })}
                      placeholder="Nombre"
                      className={inputClass}
                    />
                    {errors.nombre && (
                      <span className="mt-1 text-xs text-red-500">{errors.nombre.message}</span>
                    )}
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
                    {errors.email && (
                      <span className="mt-1 text-xs text-red-500">{errors.email.message}</span>
                    )}
                  </div>
                  <div>
                    <input
                      {...register('telefono', { required: 'Tu teléfono es obligatorio' })}
                      placeholder="Teléfono (con código de área)"
                      type="tel"
                      className={inputClass}
                    />
                    {errors.telefono && (
                      <span className="mt-1 text-xs text-red-500">{errors.telefono.message}</span>
                    )}
                  </div>

                  <button onClick={goToStep2} className="btn-primary w-full gap-2">
                    Siguiente <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mb-1 text-lg font-semibold text-text-heading">Sobre tu negocio</h3>
                <p className="mb-5 text-sm text-text-secondary">
                  Así preparamos un diagnóstico personalizado.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  <div>
                    <input
                      {...register('url_tienda', {
                        required: 'La URL de tu tienda es obligatoria',
                      })}
                      placeholder="URL de tu tienda online"
                      type="url"
                      className={inputClass}
                    />
                    {errors.url_tienda && (
                      <span className="mt-1 text-xs text-red-500">
                        {errors.url_tienda.message}
                      </span>
                    )}
                  </div>

                  <select
                    {...register('facturacion', { required: true })}
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Facturación mensual aproximada
                    </option>
                    <option value="no_vendo">Todavía no vendo online</option>
                    <option value="menos_1m">Menos de $1M ARS/mes</option>
                    <option value="1m_5m">$1M - $5M ARS/mes</option>
                    <option value="5m_10m">$5M - $10M ARS/mes</option>
                    <option value="mas_10m">Más de $10M ARS/mes</option>
                  </select>

                  <select {...register('invierte_ads')} defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      ¿Invertís en publicidad actualmente?
                    </option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                    <option value="no_seguro">No estoy seguro</option>
                  </select>

                  <select {...register('desafio')} defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      ¿Cuál es tu mayor desafío hoy?
                    </option>
                    <option value="trafico_no_convierte">Tengo tráfico pero no convierte</option>
                    <option value="no_se_anuncios">No sé qué anuncios me funcionan</option>
                    <option value="quiero_escalar">Quiero escalar pero no sé cómo</option>
                    <option value="agencias_no_funciono">Probé agencias y no me funcionó</option>
                    <option value="otro">Otro</option>
                  </select>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-secondary flex-1 gap-2"
                    >
                      <ArrowLeft size={18} /> Atrás
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary flex-1 gap-2"
                    >
                      {submitting ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        <>
                          Ver disponibilidad <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 3A: Qualified */}
            {step === 3 && qualified === true && (
              <motion.div
                key="step3a"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                  <Check size={28} className="text-emerald-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-text-heading">
                  ¡Perfecto! Elegí un horario para tu auditoría gratuita
                </h3>
                <p className="mb-6 text-sm text-text-secondary">
                  Reservá 30 minutos y te mostramos exactamente cómo escalar tu tienda.
                </p>

                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <iframe
                    src={`${CALENDLY_URL}?name=${encodeURIComponent(
                      values.nombre || ''
                    )}&email=${encodeURIComponent(values.email || '')}`}
                    width="100%"
                    height="650"
                    frameBorder="0"
                    title="Agendar auditoría"
                  />
                </div>

                <p className="mt-4 text-xs text-text-secondary">
                  Cupos limitados — Solo trabajamos con ecommerce que ya venden
                </p>
              </motion.div>
            )}

            {/* STEP 3B: Not Qualified — warm handoff */}
            {step === 3 && qualified === false && (
              <motion.div
                key="step3b"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-violet-light">
                  <Check size={28} className="text-brand-violet" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-text-heading">
                  Todavía no es el momento para el servicio principal, pero tenemos algo hecho
                  exactamente para vos.
                </h3>
                <p className="mb-6 text-text-secondary">
                  En 6 semanas construís la base para que después podamos trabajar juntos.
                  Estructurás tu ecommerce desde cero, publicás tu tienda, conseguís tus primeras
                  ventas online y dejás listo el sistema para escalar.
                </p>
                <a href="/programa" className="btn-primary inline-flex gap-2">
                  Ver programa para empezar desde cero <ArrowRight size={18} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <p className="mt-5 text-center text-sm text-white/50">
          Cupos limitados — Solo trabajamos con ecommerce que ya venden
        </p>
      </div>
    </section>
  )
}
