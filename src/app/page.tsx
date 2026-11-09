'use client'

import { VideoProvider } from '@/context/VideoContext'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WheelsSection from '@/components/WheelsSection'
import ForWhomSection from '@/components/ForWhomSection'
import PorQue from '@/components/PorQue'
import ProblemSection from '@/components/ProblemSection'
import Resultado from '@/components/Resultado'
import CaseStudy from '@/components/CaseStudy'
import CTAForm from '@/components/CTAForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollSpyNav from '@/components/ScrollSpyNav'

export default function Home() {
  return (
    <VideoProvider>
      <Navbar />
      <ScrollSpyNav />
      <main>
        <Hero />
        <ProblemSection />
        <WheelsSection />
        <ForWhomSection />
        <CaseStudy />
        <Resultado />
        <PorQue />
        <CTAForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </VideoProvider>
  )
}
