import { Hero } from "@/components/hero"
import { CTA } from "@/components/cta"
import { About } from "@/components/about"
import { HowItWorks } from "@/components/how-it-works"
import { Plans } from "@/components/plans"
import { Comparison } from "@/components/comparison"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { TrustBar } from "@/components/trust-bar"

export default function Home() {
  return (
    <>
      <Hero />
      <CTA />
      <About />
      <HowItWorks />
      <Plans />
      <Comparison />
      <FAQ />
      <Contact />
      <TrustBar />
    </>
  )
}
