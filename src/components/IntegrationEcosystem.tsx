import { Button } from "@/components/ui/button"
import Image from "next/image"

const integrations = [
  {
    name: "Shopify",
    icon: "/icons/shopify.svg",
    description: "Seamlessly connect your Shopify store for automated optimization and growth"
  },
  {
    name: "Facebook Ads",
    icon: "/icons/facebook.svg",
    description: "Optimize your ad campaigns with AI-driven insights and automation"
  },
  {
    name: "Klaviyo",
    icon: "/icons/klaviyo.svg",
    description: "Enhance email marketing with smart segmentation and personalization"
  },
  {
    name: "Google Analytics",
    icon: "/icons/google-analytics.svg",
    description: "Make data-driven decisions with integrated analytics insights"
  }
]

export default function IntegrationEcosystem() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Powerful Integrations for Your Growth
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Connect thinkr with your favorite e-commerce tools and platforms to create a seamless, automated workflow that scales your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="p-6 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-300 border border-gray-200"
            >
              <div className="flex items-center justify-center mb-4 h-16 w-16 mx-auto">
                <Image
                  src={integration.icon}
                  alt={`${integration.name} icon`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-medium text-center mb-2">{integration.name}</h3>
              <p className="text-gray-600 text-center text-sm">
                {integration.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            className="bg-black hover:bg-primary text-white font-medium min-w-[200px]"
          >
            Explore All Integrations
          </Button>
        </div>
      </div>
    </section>
  )
} 