import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import Features from "@/components/Features"
import Pricing from "@/components/Pricing"
import SimpleContactForm from "@/components/SimpleContactForm"
import Script from "next/script"
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
            "description": "thinkr is an AI agent for ecommerce that puts Shopify operations on autopilot. Save time with one-click automations for your store.",
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
      <CombinedProof />
      <Features />
      <AIFeatures />
      <Testimonials />
      <Pricing />
      <SimpleContactForm />
      <Footer />
    </main>
  )
}

