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
import { Button } from "@/components/ui/button"

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
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="mt-4 text-center">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 mb-2 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-tight
        animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-150 motion-reduce:animate-none motion-reduce:opacity-100">
              We figure out how ecommerce stores can <span className="font-bold text-primary-500">grow 60% in 60 days</span> using AI Agents.
            </p>
            <div className="space-y-2 pt-8">
              <Button 
                asChild 
                className="text-black font-semibold text-xl font-inter bg-white hover:bg-gray-50 border-2 border-primary-500 hover:border-primary-600 px-8 py-3 rounded-lg transition-all duration-200"
              >
                <a href="https://apps.shopify.com/thinkr" target="_blank" rel="noopener noreferrer">
                  Try thinkr free
                </a>
              </Button>
              <p className="text-gray-600 text-sm font-inter">No setup fees. No risk. Just results.</p>
            </div>
          </div>
        </div>
      </section>
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

