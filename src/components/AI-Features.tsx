import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const tools = [
  {
    title: "All-in-one Chat",
    description: "Connect and chat with all your tools in one place",
    colorScheme: "blue",
    href: "/all-in-one-chat",
    icon: (
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
    ),
    features: [
      "Ask questions in natural language across all connected platforms",
      "Get instant answers from Shopify, Meta Ads, Google Ads, Klaviyo, and 300+ integrations",
      "Receive contextual insights based on your specific business goals"
    ]
  },
  {
    title: "Autopilot",
    description: "Let AI handle your routine tasks automatically",
    colorScheme: "purple",
    href: "/autopilot",
    icon: (
      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    ),
    features: [
      "Automatically adjust ad spend based on performance metrics",
      "Execute approved growth actions with one-click approval",
      "Monitor and optimize campaigns 24/7 without manual intervention"
    ]
  },
  {
    title: "Deep Reporting",
    description: "Get comprehensive analytics and insights",
    colorScheme: "green",
    href: "/deep-reporting",
    icon: (
      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
    ),
    features: [
      "Analyze cross-channel data to identify revenue opportunities",
      "Track key metrics like ROAS, AOV, and customer lifetime value",
      "Discover patterns and trends across your entire ecommerce stack"
    ]
  },
  {
    title: "Alert Agent",
    description: "Never miss critical business moment with AI monitoring",
    colorScheme: "red",
    href: "/alert-agent",
    icon: (
      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM15 17h5l-5 5v-5zM11 19H6.5A2.5 2.5 0 014 16.5v-9A2.5 2.5 0 016.5 5h11A2.5 2.5 0 0120 7.5v9a2.5 2.5 0 01-2.5 2.5H16" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
        </svg>
      </div>
    ),
    features: [
      "Continuously monitor performance across all marketing channels",
      "Detect drops in ROAS, inventory shortages, and operational risks",
      "Automatically trigger corrective actions before issues impact revenue"
    ]
  },
]

const getColorClasses = (colorScheme: string) => {
  switch (colorScheme) {
    case 'blue':
      return {
        button: 'bg-blue-600 hover:bg-blue-700 text-white'
      }
    case 'purple':
      return {
        button: 'bg-purple-600 hover:bg-purple-700 text-white'
      }
    case 'green':
      return {
        button: 'bg-green-600 hover:bg-green-700 text-white'
      }
    case 'red':
      return {
        button: 'bg-red-600 hover:bg-red-700 text-white'
      }
    default:
      return {
        button: 'bg-gray-900 hover:bg-black text-white'
      }
  }
}

export default function AIFeatures() {
  return (
    <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-32 pb-12 sm:pb-16 md:pb-24 lg:pb-48">
      <div className="w-full container mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium mb-4 text-center leading-tight text-gray-900">
            The latest AI features, for your Ecommerce store.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {tools.map((tool, index) => {
            const colors = getColorClasses(tool.colorScheme)
            return (
              <div 
                key={index} 
                className="group flex flex-col h-full bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gray-100 hover:border-gray-300"
              >
                <div className="flex items-center mb-6">
                  {tool.icon}
                  <h3 className="text-xl font-semibold ml-3 text-gray-900">
                    {tool.title}
                  </h3>
                </div>
                
                <div className="flex-grow mb-6">
                  <p className="text-base text-gray-600 mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button asChild className={`w-full ${colors.button} shadow-sm`} size="default">
                  <Link href={tool.href}>
                    Learn More
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

