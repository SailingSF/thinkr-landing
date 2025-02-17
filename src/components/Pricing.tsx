import { Check } from "lucide-react"
import Link from "next/link"

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Ideal for individual store owners getting started with AI automation.",
    features: [
      "2 Weekly AI Suggestions",
      "Basic Shopify Integration",
      "Email Support",
      "Basic Risk Assessment",
      "1 Store Connection",
      "Standard Analytics Dashboard",
      "Limited Chat Access",
      "Limited Deep Research Topics",
    ],
    cta: "Try it free",
    ctaLink: "/signup",
  },
  {
    name: "Growth",
    price: "$50",
    period: "user/month",
    description: "Everything in Free, plus advanced features for growing businesses.",
    popular: true,
    features: [
      "Daily AI Suggestions",
      "Full Platform Integrations",
      "Advanced Analytics",
      "Priority Support",
      "Onboarding Session",
      "Up to 3 Store Connections",
      "Unlimited Chat Access",
      "Unlimited Deep Research Topics",
    ],
    cta: "Upgrade now",
    ctaLink: "/upgrade",
  },
  {
    name: "Autopilot",
    price: "Custom",
    description: "Enterprise-grade AI automation for large-scale operations.",
    features: [
      "AI Autopilot Mode",
      "Custom Integrations",
      "Multi-Store Management",
      "Dedicated Success Manager",
      "24/7 Priority Support",
      "Unlimited Store Connections",
      "Custom AI Model Training",
      "Advanced Security Features",
      "SLA Guarantee",
      "Custom Analytics",
    ],
    cta: "Contact us",
    ctaLink: "/contact",
  },
]

export default function Pricing() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing.</h2>
          <p className="text-xl text-gray-600">Start free and scale as your business grows.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                tier.popular ? "border-2 border-[#8B5CF6] shadow-lg shadow-[#8B5CF6]/10" : "border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#8B5CF6] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && <span className="text-gray-600 ml-2">{tier.period}</span>}
                </div>
                <p className="text-gray-600">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-[#8B5CF6] mr-3 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href={tier.ctaLink}
                className={`block text-center py-3 px-6 rounded-lg transition-colors ${
                  tier.popular
                    ? "bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  )
}

