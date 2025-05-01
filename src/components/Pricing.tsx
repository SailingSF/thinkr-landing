"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const tiers = [
  {
    name: "Free",
    monthlyPrice: "$0",
    description: "Starting out your business",
    features: [
      "3 Weekly suggestions",
      "0 Integrations",
      "5 Chats per Day",
      "2 Automation per week",
      "2 Accounts per store",
      "Default Goal Setting"
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
      "10 Weekly Suggestions",
      "4 Integrations",
      "100 Chat Query per day",
      "50 Automations a month",
      "4 Accounts per store",
      "5 Deep Research topics per month"
    ],
    cta: "Upgrade",
    ctaLink: "https://apps.shopify.com/thinkr",
  },
  {
    name: "Pro",
    monthlyPrice: "$339",
    description: "Scaling operations",
    features: [
      "Unlimited AI Suggestions",
      "15 Integrations",
      "Unlimited Chats",
      "Unlimited Automations",
      "8 Accounts per store",
      "Custom Goal Settings"
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

  const calculatePrice = (monthlyPrice: string) => {
    if (monthlyPrice === "$0") return "$0"
    const price = parseInt(monthlyPrice.replace("$", ""))
    if (isYearly) {
      const yearlyPrice = price * 12
      const discountedPrice = Math.round(yearlyPrice * 0.6) // 40% discount, rounded to nearest whole number
      return `$${discountedPrice.toLocaleString()}`
    }
    return `$${price.toLocaleString()}`
  }

  return (
    <>
      <section className="py-16 px-4">
        <div className="w-full container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-medium mb-4">Pricing.</h2>
          </div>

          <div className="flex justify-center items-center gap-4 mb-16">
            <span className={`text-lg ${!isYearly ? 'text-primary font-medium' : 'text-gray-600'}`}>Monthly</span>
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
            <span className={`text-lg ${isYearly ? 'text-primary font-medium' : 'text-gray-600'}`}>
              Yearly
              <span className="ml-2 text-sm text-primary">Save 40%</span>
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  tier.popular ? "border-2 border-primary shadow-lg shadow-gray-200/10" : "border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-4xl font-medium mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-xl font-light text-primary-400">
                      {calculatePrice(tier.monthlyPrice)}{isYearly ? '/year' : '/month'}
                    </span>
                  </div>
                  <div className="mb-4">
                    <Link href={tier.ctaLink}>
                      <Button 
                        variant="default" 
                        className="text-white px-6 bg-primary hover:bg-primary/90 focus:ring-primary/70"
                      >
                        {tier.cta}
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-[#8B5CF6] mr-3 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

