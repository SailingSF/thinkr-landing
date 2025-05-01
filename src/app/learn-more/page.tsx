import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const usesCases = [
  {
    id: "scale-operations",
    title: "Scale Your Operations Without Growing Your Team",
    subtitle: "From 100 to 1000 orders per day with the same team size",
    description: "See how Fashion Boutique X automated their operations and scaled their business without hiring additional staff.",
    challenge: "Managing increasing order volume was overwhelming their small team, leading to delays and errors.",
    solution: [
      "Automated 80% of customer service inquiries",
      "Reduced order processing time by 65%",
      "Automated inventory forecasting and reordering",
      "Streamlined fulfillment workflows"
    ],
    results: {
      metrics: [
        { label: "Orders Processed", value: "10x", subtext: "increase in daily orders" },
        { label: "Customer Response Time", value: "5min", subtext: "down from 4 hours" },
        { label: "Team Size", value: "Same", subtext: "no additional hires" }
      ]
    },
    imagePath: "/placeholder-dashboard.png"
  },
  {
    id: "boost-revenue",
    title: "Turn Customer Data Into Revenue",
    subtitle: "How a beauty brand increased AOV by 40% using AI insights",
    description: "Discover how Beauty Co. leveraged Thinkr's AI to analyze customer behavior and automatically optimize their marketing strategies.",
    challenge: "Struggling to personalize marketing efforts and increase customer lifetime value in a competitive market.",
    solution: [
      "AI-powered customer segmentation",
      "Automated cross-sell recommendations",
      "Smart promotional campaigns",
      "Personalized email marketing automation"
    ],
    results: {
      metrics: [
        { label: "Average Order Value", value: "+40%", subtext: "increase in 3 months" },
        { label: "Customer LTV", value: "+55%", subtext: "year over year" },
        { label: "Email Revenue", value: "3x", subtext: "increase" }
      ]
    },
    imagePath: "/placeholder-analytics.png"
  },
  {
    id: "inventory-optimization",
    title: "Never Miss a Sale Due to Stock Issues",
    subtitle: "How an electronics store reduced stockouts by 95%",
    description: "Learn how Tech Store Pro eliminated stockouts while reducing inventory holding costs using AI-powered forecasting.",
    challenge: "Frequent stockouts of popular items and excess inventory of slow-moving products were eating into profits.",
    solution: [
      "Predictive inventory forecasting",
      "Automated reorder point optimization",
      "Seasonal demand prediction",
      "Real-time inventory alerts"
    ],
    results: {
      metrics: [
        { label: "Stockouts", value: "-95%", subtext: "reduction" },
        { label: "Inventory Costs", value: "-30%", subtext: "reduction" },
        { label: "Revenue", value: "+25%", subtext: "increase" }
      ]
    },
    imagePath: "/placeholder-inventory.png"
  },
  {
    id: "customer-experience",
    title: "Deliver 24/7 Premium Customer Service",
    subtitle: "How a lifestyle brand achieved 98% customer satisfaction",
    description: "See how Lifestyle Co. provides instant, personalized support around the clock with AI automation.",
    challenge: "Unable to provide consistent customer support outside business hours, leading to customer dissatisfaction.",
    solution: [
      "24/7 AI customer support",
      "Automated order status updates",
      "Smart return processing",
      "Proactive issue resolution"
    ],
    results: {
      metrics: [
        { label: "Response Time", value: "< 1min", subtext: "average" },
        { label: "CSAT Score", value: "98%", subtext: "satisfaction" },
        { label: "Support Costs", value: "-40%", subtext: "reduction" }
      ]
    },
    imagePath: "/placeholder-support.png"
  }
];

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Real Results for Real Businesses
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 px-4 sm:px-8">
            Discover how e-commerce businesses like yours are using Thinkr to automate operations, boost revenue, and deliver exceptional customer experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link href="https://apps.shopify.com/thinkr" target="_blank" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3">
                Start Your Success Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {usesCases.map((useCase, index) => (
              <div
                key={useCase.id}
                id={useCase.id}
                className="scroll-mt-24"
              >
                <div className={`flex flex-col lg:flex-row gap-8 sm:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className="flex-1 min-w-0 space-y-6 sm:space-y-8">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">{useCase.title}</h3>
                      <p className="text-lg sm:text-xl text-primary font-medium">{useCase.subtitle}</p>
                    </div>
                    
                    <p className="text-base sm:text-lg text-gray-600">{useCase.description}</p>
                    
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                      <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">The Challenge</h4>
                      <p className="text-sm sm:text-base text-gray-600">{useCase.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">The Solution</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {useCase.solution.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-sm sm:text-base text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">The Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {useCase.results.metrics.map((metric, i) => (
                          <div key={i} className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm">
                            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{metric.value}</div>
                            <div className="text-xs sm:text-sm text-gray-600">{metric.subtext}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 sm:pt-4">
                      <Link href="https://apps.shopify.com/thinkr" target="_blank" className="block w-full sm:w-auto">
                        <Button 
                          size="lg"
                          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
                        >
                          Achieve Similar Results
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0 w-full lg:w-auto">
                    <div className="relative aspect-square w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={useCase.imagePath}
                        alt={useCase.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your E-commerce Business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Join hundreds of successful businesses using Thinkr to automate operations and drive growth
          </p>
          <Link href="https://apps.shopify.com/thinkr" target="_blank" className="block w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
