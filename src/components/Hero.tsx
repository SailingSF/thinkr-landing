"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { getLocaleFromPath, useTranslations } from "@/lib/i18n"
import { useState } from "react"

const PLACEHOLDER_TEXT = "Create an Agent or ask anything...";

const Hero = () => {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const t = useTranslations(locale)
  const [showIntegrations, setShowIntegrations] = useState(false)
  const [activeTab, setActiveTab] = useState<string | null>('ask')

  const integrations = [
    { name: "Shopify", logo: "/integration-logos/shopify_glyph_white.svg" },
    { name: "Klaviyo", logo: "/integration-logos/klaviyo-white-icon.png" },
    { name: "Facebook Ads", logo: "/integration-logos/meta-icon-2.png" },
    { name: "Mailchimp", logo: "/integration-logos/mailchimp-icon-2.png" },
    { name: "Google Ads", logo: "/integration-logos/google-ads-icon-2.png" },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-4 sm:mb-6 md:mb-8 lg:mb-10 mx-auto leading-tight max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl
          animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out motion-reduce:animate-none motion-reduce:opacity-100"
        >
          The Unfair Advantage of<br />
          Autonomous Ecommerce
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed
        animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-150 motion-reduce:animate-none motion-reduce:opacity-100">
          How can AI automate your store growth?
        </p>
        <div className="w-full max-w-2xl mx-auto bg-zinc-900 rounded-xl shadow-lg px-4 py-4 flex flex-col gap-0
        animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-300 motion-reduce:animate-none motion-reduce:opacity-100">
          {/* First row: textarea only, full width */}
          <div className="flex items-center w-full">
            <textarea
              placeholder={PLACEHOLDER_TEXT}
              rows={3}
              className="flex-1 bg-zinc-800 text-white placeholder-gray-400 rounded-md px-4 py-3 h-auto min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary-500 text-base border border-zinc-700 resize-none"
              style={{ minWidth: 0 }}
            />
          </div>
          {/* Add vertical space between rows */}
          <div className="h-4" />
          {/* Second row: left and right groups */}
          <div className="flex items-center justify-between w-full">
            {/* Left group */}
            <div className="flex items-center gap-x-2">
              <button
                className={`font-semibold px-4 h-10 rounded-md text-sm transition-colors flex items-center ${
                  activeTab === 'ask' 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                }`}
                style={{ minWidth: 80 }}
                onClick={() => setActiveTab(activeTab === 'ask' ? null : 'ask')}
              >
                + Ask
              </button>
              <button 
                className={`font-semibold px-4 h-10 rounded-md text-sm transition-colors flex items-center ${
                  activeTab === 'research' 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                }`}
                style={{ minWidth: 80 }}
                onClick={() => setActiveTab(activeTab === 'research' ? null : 'research')}
              >
                Research
              </button>
              <button 
                className={`font-semibold px-4 h-10 rounded-md text-sm transition-colors flex items-center ${
                  activeTab === 'agents' 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                }`}
                style={{ minWidth: 80 }}
                onClick={() => setActiveTab(activeTab === 'agents' ? null : 'agents')}
              >
                Agents
              </button>
            </div>
            {/* Right group */}
            <div className="flex items-center gap-x-2 relative">
              <button 
                className="flex items-center bg-zinc-800 text-white px-3 h-10 rounded-md gap-1 border border-zinc-700 flex-shrink-0 hover:bg-zinc-700 transition-colors"
                onClick={() => setShowIntegrations(!showIntegrations)}
              >
                Integrations
                <img src="/integration-logos/shopify_glyph_white.svg" alt="Shopify" className="ml-1 w-4 h-4" />
                <img src="/integration-logos/klaviyo-white-icon.png" alt="Klaviyo" className="ml-1 w-4 h-4" />
                <img src="/integration-logos/meta-icon-2.png" alt="Facebook" className="ml-1 w-4 h-4" />
                <img src="/integration-logos/mailchimp-icon-2.png" alt="Mailchimp" className="ml-1 w-4 h-4" />
                <img src="/integration-logos/google-ads-icon-2.png" alt="Google Ads" className="ml-1 w-4 h-4" />
                <span className="ml-1 text-base">^</span>
              </button>
              
              {/* Integrations Popup */}
              {showIntegrations && (
                <div className="absolute top-full right-0 mt-2 bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg p-4 z-50 min-w-[200px]">
                  <div className="text-white text-sm font-medium mb-3">Available Integrations</div>
                  <div className="space-y-2">
                    {integrations.map((integration, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-zinc-700 transition-colors">
                        <img src={integration.logo} alt={integration.name} className="w-5 h-5" />
                        <span className="text-white text-sm">{integration.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

