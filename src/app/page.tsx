'use client'

import { VideoProvider } from '@/context/VideoContext'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import ForWhomSection from '@/components/ForWhomSection'
import PortalSection from '@/components/PortalSection'
import CaseStudy from '@/components/CaseStudy'
import Methodology from '@/components/Methodology'
import AboutSection from '@/components/AboutSection'
import CTAForm from '@/components/CTAForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <VideoProvider>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ForWhomSection />
        <PortalSection />
        <CaseStudy />
        <Methodology />
        <AboutSection />
        <CTAForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </VideoProvider>
  )
}
