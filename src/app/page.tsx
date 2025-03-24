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
import Script from "next/script"

// Opt into partial prerendering for better performance
export const runtime = 'edge';
export const preferredRegion = 'auto';
export const dynamic = 'force-static';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Script id="schema-structured-data" type="application/ld+json">
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
              "ratingValue": "4.8",
              "ratingCount": "125"
            }
          }
        `}
      </Script>
      <Header />
      <Hero />
      <HeroImage />
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

