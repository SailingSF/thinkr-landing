"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const pricingTiers = [
  {
    name: "Free",
    monthlyPrice: "$0",
    description: "Starting out your business",
    features: [
      "Shopify Store Data Integration",
      "3 Growth Strategy Agents",
      "5 Chats per Day",
      "2 Performance Monitor Agents",
      "2 Accounts Linked"
    ],
    cta: "Install",
    ctaLink: "https://apps.shopify.com/thinkr",
  },
  {
    name: "Growth",
    monthlyPrice: "$25",
    description: "Growing Businesses",
    popular: true,
    features: [
      "Shopify Store Data Integration",
      "3 Linked Data Sources",
      "15 Growth Strategy Agents",
      "100 Chats per Day",
      "5 Performance Monitor Agents",
      "4 Accounts Linked",
      "5 Deep Analytics Agents"
    ],
    cta: "Upgrade",
    ctaLink: "https://apps.shopify.com/thinkr",
  },
  {
    name: "Pro",
    monthlyPrice: "$339",
    description: "Scaling operations",
    features: [
      "Shopify Store Data Integration",
      "Amazon Store Integration (soon)",
      "10 Linked Data Sources",
      "Unlimited Growth Agents",
      "Unlimited Chats",
      "Unlimited Performance Monitor Agents",
      "Unlimited Deep Analytics Agents",
      "8 Accounts Linked"
    ],
    cta: "Upgrade",
    ctaLink: "https://apps.shopify.com/thinkr",
  },
  {
    name: "Autopilot",
    monthlyPrice: "$1500",
    description: "Everything Autopilot+",
    features: [
      "Full AI operations Manager",
      "Custom AI Model Training",
      "Priority API Access",
      "Enterprise SLA",
      "24/7 Premium Support",
      "Custom Feature Development",
    ],
    cta: "Contact us",
    ctaLink: "/contact",
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const getDisplayPrice = (monthlyPrice: string) => {
    if (monthlyPrice === "$0") return "$0"
    const priceNumber = parseInt(monthlyPrice.replace("$", ""))
    if (isYearly) {
      const yearlyPrice = priceNumber * 12
      const discountedPrice = Math.round(yearlyPrice * 0.6) // 40% discount
      return `$${discountedPrice.toLocaleString()}`
    }
    return `$${priceNumber.toLocaleString()}`
  }

  return (
    <section className="py-8 sm:py-16 px-4">
      <div className="w-full container mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-medium mb-4">Pricing.</h2>
        </div>

        <div className="flex justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-16">
          <span className={`text-base sm:text-lg ${!isYearly ? 'text-primary font-medium' : 'text-gray-600'}`}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span
              className={`${
                isYearly ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-primary transition-transform`}
            />
          </button>
          <span className={`text-base sm:text-lg ${isYearly ? 'text-primary font-medium' : 'text-gray-600'}`}>
            Yearly
            <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-primary">Save 40%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-4 sm:p-6 lg:p-8 ${
                tier.popular ? "border-2 border-primary shadow-lg shadow-gray-200/10" : "border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-2">{tier.name}</h3>
                <div className="mb-3 sm:mb-4">
                  <span className="text-lg sm:text-xl font-light text-primary-400">
                    {getDisplayPrice(tier.monthlyPrice)}{isYearly ? '/year' : '/month'}
                    {(tier.name === "Growth" || tier.name === "Pro") && (
                      <span className="text-xs sm:text-sm text-gray-600 ml-1">
                        (per account)
                      </span>
                    )}
                  </span>
                </div>
                <div className="mb-3 sm:mb-4">
                  <Link href={tier.ctaLink}>
                    <Button 
                      variant="default" 
                      className="text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-primary hover:bg-primary/90 focus:ring-primary/70 w-full sm:w-auto"
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B5CF6] mr-2 sm:mr-3 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {tier.name === "Growth" && (
                <div className="text-center">
                  <span className="bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-bold">
                    10 Days Free
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

