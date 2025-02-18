import { DollarSign, Users, PieChart, Search, BarChart, LineChart } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Revenue Growth",
    items: [
      "Sales funnel optimization",
      "Conversion rate improvements",
      "Average order value increases",
      "New market expansion opportunities",
    ],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Customer Retention",
    items: [
      "Churn risk analysis",
      "Loyalty program optimization",
      "Customer feedback action items",
      "Repeat purchase incentives",
    ],
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Pricing Optimization",
    items: [
      "Price elasticity analysis",
      "Competitive pricing strategies",
      "Bundle/discount optimization",
      "Free shipping threshold",
    ],
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Content & SEO",
    items: [
      "High-converting product description recommendations",
      "Search ranking optimization opportunities",
      "Content gap analysis",
      "Traffic-driving keyword suggestions",
    ],
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Marketing ROI",
    items: [
      "Ad spend optimization across channels",
      "Campaign performance analysis",
      "Audience targeting recommendations",
      "Customer acquisition cost reduction",
    ],
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "General Insights",
    items: [
      "Market trend analysis and opportunities",
      "Competitive landscape monitoring",
      "Business health indicators",
      "Performance benchmarking against industry",
    ],
  },
]

const tools = [
  {
    title: "Autopilot.",
    description: "Automated inventory and pricing management",
    image: "/features/autopilot.png",
  },
  {
    title: "Chat.",
    description: "AI-powered customer support",
    image: "/features/chat01.png",
  },
  {
    title: "Scheduler.",
    description: "Smart campaign and content scheduling",
    image: "/features/scheduler01.png",
  },
  {
    title: "Deep Search.",
    description: "Intelligent product and customer insights",
    image: "/features/deepsearch01.png",
  },
]

export default function AIFeatures() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-6xl font-medium text-center mb-12">The easiest way to bring AI into your workflow.</h2>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <ul className="space-y-2 text-gray-600">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AI Tools Section */}
        <div className="py-2">
          <h2 className="text-6xl font-medium mb-12">
            The latest AI features,
            <br />
            for your shopify store.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-semibold">{tool.title}</h3>
                <p className="text-gray-600">{tool.description}</p>
                <div className="bg-gray-800 rounded-lg p-6 aspect-square flex items-center justify-center">
                  <Image
                    src={tool.image || "/placeholder.svg"}
                    alt={tool.title}
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

