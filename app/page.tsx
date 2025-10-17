import { Hero } from "@/components/hero"
import { CTA } from "@/components/cta"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { HowItWorks } from "@/components/how-it-works"
import { Plans } from "@/components/plans"
import { Comparison } from "@/components/comparison"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { TrustBar } from "@/components/trust-bar"

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <CTA />
      <About />
      <HowItWorks />
      <Plans />
      <Comparison />
      <Testimonials />
      <FAQ />
      <Contact />
      <TrustBar />
    </>
  )
}
