import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Seamless Integration",
    description: "Thinkr integrates directly with your Shopify store, providing immediate value without complex setup processes. Start optimizing your store operations in minutes."
  },
  {
    title: "AI-Powered Insights",
    description: "Leverage advanced AI technology to gain valuable insights about your store's performance, customer behavior, and optimization opportunities."
  },
  {
    title: "Automated Shopify Tasks",
    description: "Automate repetitive tasks like order processing, inventory management, and customer support with our AI agent."
  },
  {
    title: "Chat with your Shopify data",
    description: "Ask questions about your store's performance, customer behavior, and optimization opportunities with our AI agent, and ask for research reports to explore strategies to make your store grow."
  }
];

const usesCases = [
  {
    id: "manage-inventory",
    title: "Manage inventory with AI-driven insights",
    description: "Automate inventory tracking, get low stock alerts, and optimize reorder points with AI-driven predictions based on historical sales data and seasonality.",
    details: [
      "Real-time inventory tracking across all your sales channels",
      "Smart reorder point calculations based on historical data",
      "Seasonal demand prediction to optimize stock levels",
      "Automated low stock alerts with customizable thresholds",
      "Inventory valuation and cost tracking"
    ],
    imagePath: "/images/inventory-diagram.svg" // You'll need to create these diagrams
  },
  {
    id: "update-orders",
    title: "Streamline order management",
    description: "Automatically process and update order statuses, sync shipping information, and manage fulfillment across multiple sales channels in real-time.",
    details: [
      "Automated order processing and status updates",
      "Multi-channel order synchronization",
      "Smart fulfillment routing and optimization",
      "Real-time shipping updates and tracking",
      "Bulk order processing capabilities"
    ],
    imagePath: "/images/orders-diagram.svg"
  },
  {
    id: "store-analysis",
    title: "Data-driven store analytics",
    description: "Get deep insights into your store's performance with AI-powered analytics, automated report tracking, and actionable recommendations for growth.",
    details: [
      "Comprehensive sales and revenue analytics",
      "Customer behavior and purchase pattern analysis",
      "Product performance metrics and insights",
      "Automated report generation and scheduling",
      "AI-powered growth recommendations"
    ],
    imagePath: "/images/analytics-diagram.svg"
  },
  {
    id: "create-promotions",
    title: "Smart promotional campaigns",
    description: "Automatically generate and optimize promotional campaigns based on customer segments, purchase history, and market trends.",
    details: [
      "AI-driven customer segmentation",
      "Personalized promotion recommendations",
      "Campaign performance tracking",
      "Automated A/B testing",
      "ROI analysis and optimization"
    ],
    imagePath: "/images/promotions-diagram.svg"
  }
];

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Enhance Your Shopify Store with Thinkr
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Transform your e-commerce experience with our powerful AI-driven solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://apps.shopify.com/thinkr" target="_blank">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Install on Shopify
              </Button>
            </Link>
            <Link href="https://thinkrapp.com" target="_blank">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 px-8 py-3"
              >
                Open Web App
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            AI that goes beyond search and chat
          </h2>
          <p className="text-xl md:text-2xl text-center text-muted-foreground mb-16">
            Discover how Thinkr transforms your Shopify operations
          </p>
          
          <div className="space-y-24">
            {usesCases.map((useCase, index) => (
              <div
                key={useCase.id}
                id={useCase.id}
                className="scroll-mt-24"
              >
                <div className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-3xl font-semibold mb-6">{useCase.title}</h3>
                    <p className="text-lg text-muted-foreground mb-8">{useCase.description}</p>
                    <ul className="space-y-4">
                      {useCase.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                          <span className="text-gray-600 flex-1">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link href="https://apps.shopify.com/thinkr" target="_blank">
                        <Button 
                          variant="outlineCustom" 
                          textColor="hsl(var(--primary))"
                          className="hover:bg-primary/10"
                        >
                          Try it Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="relative aspect-square w-full max-w-[500px] mx-auto">
                      <Image
                        src={useCase.imagePath}
                        alt={useCase.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
