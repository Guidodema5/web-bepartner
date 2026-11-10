'use client'

import { VideoProvider } from '@/context/VideoContext'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WheelsSection from '@/components/WheelsSection'
import ForWhomSection from '@/components/ForWhomSection'
import PorQue from '@/components/PorQue'
import ProblemSection from '@/components/ProblemSection'
import LeadsBasura from '@/components/LeadsBasura'
import Resultado from '@/components/Resultado'
import CaseStudy from '@/components/CaseStudy'
import PortalSection from '@/components/PortalSection'
import CTAForm from '@/components/CTAForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollSpyNav from '@/components/ScrollSpyNav'
import BlogPortada from '@/components/BlogPortada'
import { faqs } from '@/data/faqs'

// Preguntas frecuentes para Google: las mismas que se ven en la sección FAQ de la portada.
const datosPreguntas = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
})

export default function Home() {
  return (
    <VideoProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: datosPreguntas }} />
      <Navbar />
      <ScrollSpyNav />
      <main>
        <Hero />
        <LeadsBasura />
        <ProblemSection />
        <WheelsSection />
        <ForWhomSection />
        <CaseStudy />
        <PortalSection />
        <Resultado />
        <PorQue />
        <CTAForm />
        <FAQ />
        <BlogPortada />
      </main>
      <Footer />
      <WhatsAppButton />
    </VideoProvider>
  )
}
