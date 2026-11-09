'use client'

import { motion } from 'framer-motion'
import Llamado from './Llamado'

// Cómo es trabajar con Bepartner, con los entregables del blueprint (04/11/2026). Es done for you: lo hacemos nosotros.
const steps = [
  { num: '01', title: 'Kick-off e inmersión', description: 'Un cuestionario y una llamada para entender cómo vendés hoy, a quién y qué funciona.' },
  { num: '02', title: 'Auditoría y plan', description: 'Dónde está tu negocio, a dónde querés llegar y el plan para llegar.' },
  { num: '03', title: 'Definimos el lead calificado', description: 'Por escrito y con vos: qué tiene que tener un contacto para que valga la pena.' },
  { num: '04', title: 'Propuesta de valor y ángulos', description: 'Qué decir y a quién, para que te consulten los que de verdad te pueden comprar.' },
  { num: '05', title: 'Anuncios y landing', description: 'Grabás los anuncios con la guía de nuestro equipo y armamos tu landing con formulario.' },
  { num: '06', title: 'Campañas y resultados', description: 'Un especialista gestiona tus campañas. Update semanal y reunión mensual de resultados.' },
]

export default function Process() {
  return (
    <section id="proceso" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="section-label">Cómo trabajamos</span>
          <h2 className="section-title mt-3">Lo hacemos nosotros, con vos al tanto de todo</h2>
          <p className="mt-5 text-lg text-text-secondary">Del primer día a los contactos calificados, en seis pasos.</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (i % 3) * 0.08 }}
              className="tarjeta p-6"
            >
              <span className="font-mono text-[13px] font-medium text-violeta-600">{s.num}</span>
              <h3 className="mt-2 font-semibold text-text-heading">{s.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-text-secondary">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <Llamado texto="El primer paso es la auditoría, y es gratis." />
      </div>
    </section>
  )
}
