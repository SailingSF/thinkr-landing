import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Starting out your business",
    features: [
      "3 Weekly suggestions",
      "2 Integrations (Shopify + 1)",
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
    price: "$39/per Account",
    description: "Growing Businesses",
    popular: true,
    features: [
      "10 AI Suggestions per Week",
      "Integrations (Shopify + 2)",
      "100 Chats per day",
      "50 Automations a month",
      "4 Accounts per store",
      "Default Goal Setting"
    ],
    cta: "Upgrade",
    ctaLink: "https://apps.shopify.com/thinkr",
  },
  {
    name: "Pro",
    price: "$339/per Account",
    description: "Scaling operations",
    features: [
      "Unlimited AI Suggestions",
      "15 Integrations",
      "Unlimited Chats",
      "Unlimited Automations",
      "8 Accounts per store",
      "Custom Goal Settings"
    ],
    cta: "Contact us",
    ctaLink: "/contact",
  },
  {
    name: "Autopilot",
    price: "$1500/month",
    description: "Everything Autopilot+",
    features: [
      "Complete operations manager AI Agent",
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
  return (
    <>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-medium mb-4">Pricing.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                    <span className="text-xl font-light text-primary-400">{tier.price}</span>
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

