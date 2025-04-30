import Header from "@/components/Header"
import Hero from "@/components/Hero"
import HeroImage from "@/components/HeroImage"
import CombinedProof from '@/components/CombinedProof'
import Footer from "@/components/Footer"
import Features from "@/components/Features"
import AIFeatures from "@/components/AI-Features"
import Pricing from "@/components/Pricing"
import Timeline from "@/components/Timeline"
import Testimonials from "@/components/Testimonials"
import SimpleContactForm from "@/components/SimpleContactForm"
import Script from "next/script"
import { Suspense } from "react"

// Opt into static generation
export const preferredRegion = 'auto';
export const dynamic = 'force-static';

// Import loading components for Suspense
const LoadingHero = () => <div className="h-[300px] bg-gray-100 animate-pulse rounded-xl" />
const LoadingSection = () => <div className="h-[200px] bg-gray-100 animate-pulse rounded-xl my-8" />

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
              "ratingValue": "4.8",
              "ratingCount": "125"
            }
          }
        `}
      </Script>
      <Header />
      <Hero />
      <Suspense fallback={<LoadingHero />}>
        <HeroImage />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <CombinedProof />
      </Suspense>
      <Timeline />
      <Features />
      <Suspense fallback={<LoadingSection />}>
        <AIFeatures />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Testimonials />
      </Suspense>
      <Pricing />
      <SimpleContactForm />
      <Footer />
    </main>
  )
}

