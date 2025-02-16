import Header from "@/components/Header"
import Hero from "@/components/Hero"
import HeroImage from "@/components/HeroImage"
import Footer from "@/components/Footer"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <HeroImage />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

