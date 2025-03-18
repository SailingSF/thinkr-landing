import Header from "@/components/Header"
import Hero from "@/components/Hero"
import HeroImage from "@/components/HeroImage"
import Footer from "@/components/Footer"
import Features from "@/components/Features"
import AIFeatures from "@/components/AI-Features"
import Pricing from "@/components/Pricing"
import Timeline from "@/components/Timeline"
import Testimonials from "@/components/Testimonials"
import SimpleContactForm from "@/components/SimpleContactForm"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <HeroImage />
      <Features />
      <Timeline />
      <AIFeatures />
      <Testimonials />
      <Pricing />
      <SimpleContactForm />
      <Footer />
    </main>
  )
}

