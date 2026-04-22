'use client'

import { VideoProvider } from '@/context/VideoContext'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import ForWhomSection from '@/components/ForWhomSection'
import PortalSection from '@/components/PortalSection'
import CaseStudy from '@/components/CaseStudy'
import AboutSection from '@/components/AboutSection'
import CTAForm from '@/components/CTAForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import SectionConnector from '@/components/SectionConnector'

export default function Home() {
  return (
    <VideoProvider>
      <Navbar />
      <main>
        <Hero />
        {/* Hilo conductor: el recorrido que hace el usuario en el sitio */}
        <SectionConnector step="01" label="El problema" />
        <ProblemSection />
        <SectionConnector step="02" label="Para quién" />
        <ForWhomSection />
        <SectionConnector step="03" label="La solución" />
        <PortalSection />
        {/* El caso de éxito rompe el hilo — sección dark = impacto */}
        <CaseStudy />
        {/* Después del impacto, volvemos al hilo */}
        <SectionConnector step="04" label="Quién está detrás" />
        <AboutSection />
        {/* El formulario es el destino — sección dark = cierre */}
        <CTAForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </VideoProvider>
  )
}
