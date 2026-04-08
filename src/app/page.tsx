import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import PortalSection from '@/components/PortalSection'
import CaseStudy from '@/components/CaseStudy'
import Methodology from '@/components/Methodology'
import Comparison from '@/components/Comparison'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import CTAForm from '@/components/CTAForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <PortalSection />
        <CaseStudy />
        <Methodology />
        <Comparison />
        <Process />
        <FAQ />
        <CTAForm />
      </main>
      <Footer />
    </>
  )
}
