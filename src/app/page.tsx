import Header from "@/components/Header"
import Hero from "@/components/Hero"
import HeroImage from "@/components/HeroImage"
import Footer from "@/components/Footer"
import Features from "@/components/Features"
import AIFeatures from "@/components/AI-Features"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"
import ContactForm from "@/components/ContactForm"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <HeroImage />
      <Features />
      <AIFeatures />
      <Testimonials />
      <CTA />
      <ContactForm 
        simple={true}
        showContactInfo={false}
        showCompanyLink={false}
        title="Ready to get started?"
        description="Drop us a message and we'll get back to you within 24 hours."
        buttonText="Contact Us"
      />
      <Footer />
    </main>
  )
}

