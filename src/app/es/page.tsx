import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import Features from "@/components/Features"
import Pricing from "@/components/Pricing"
import Timeline from "@/components/Timeline"
import SimpleContactForm from "@/components/SimpleContactForm"
import Script from "next/script"
import ChatHero from "@/components/ChatHero"
import CombinedProof from "@/components/CombinedProof"
import AIFeatures from "@/components/AI-Features"
import Testimonials from "@/components/Testimonials"

// Opt into static generation
export const preferredRegion = 'auto';
export const dynamic = 'force-static';

// Page content
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Script id="schema-structured-data" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "thinkr",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web platform",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "thinkr es un agente de IA para ecommerce que pone las operaciones de Shopify en piloto automático. Ahorra tiempo con automatizaciones de un clic para tu tienda.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "ratingCount": "10"
            }
          }
        `}
      </Script>
      <Header />
      <Hero />
      <ChatHero />
      <CombinedProof />
      <Timeline />
      <Features />
      <AIFeatures />
      <Testimonials />
      <Pricing />
      <SimpleContactForm />
      <Footer />
    </main>
  )
} 