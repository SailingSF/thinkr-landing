import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Ideal for individual store owners.",
    features: [
      "2 Weekly AI Suggestions",
      "Basic Shopify Integration",
      "Email Support",
      "Basic Risk Assessment",
      "Limited Chat/Deep Research Access",
    ],
    cta: "Install",
    ctaLink: "https://apps.shopify.com/thinkr",
  },
  {
    name: "Growth",
    price: "$30/month",
    description: "Everything Free+",
    popular: true,
    features: [
      "Daily AI Suggestions",
      "Full Integrations",
      "Advanced Analytics",
      "Onboarding Session",
      "High Chat/Deep Research Limits",
    ],
    cta: "Upgrade",
    ctaLink: "https://apps.shopify.com/thinkr",
  },
  {
    name: "Autopilot",
    price: "$800/month",
    description: "Everything Growth+",
    features: [
      "AI Autopilot Mode",
      "Custom Integrations",
      "Multi-Store Management",
      "Dedicated Success Manager",
      "Unlimited Chat/Deep Research Access",
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
            <h2 className="text-6xl font-medium mb-4">Pricing.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                      <Button variant="default" className="text-white px-6">
                          {tier.cta}
                      </Button>
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

          <div className="mt-16 text-center">
            <p className="text-gray-600">All plans include a 14-day free trial.</p>
          </div>
        </div>
      </section>
    </>
  )
}

