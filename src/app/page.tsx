import Header from "@/components/Header"
import Hero from "@/components/Hero"
import HeroImage from "@/components/HeroImage"
import Footer from "@/components/Footer"
import Features from "@/components/Features"
import AIFeatures from "@/components/AI-Features"
import Pricing from "@/components/Pricing"
import SimpleContactForm from "@/components/SimpleContactForm"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <HeroImage />
      <Features />
      <AIFeatures />
      <Pricing />
      <SimpleContactForm />
      <Footer />
    </main>
  )
}

