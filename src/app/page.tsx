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
import ScrollSpyNav from '@/components/ScrollSpyNav'
import LiveVisitors from '@/components/LiveVisitors'

export default function Home() {
  return (
    <VideoProvider>
      <Navbar />
      <ScrollSpyNav />
      <main>
        <Hero />
        <ProblemSection />
        <ForWhomSection />
        <PortalSection />
        <CaseStudy />
        <AboutSection />
        <CTAForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <LiveVisitors />
    </VideoProvider>
  )
}
