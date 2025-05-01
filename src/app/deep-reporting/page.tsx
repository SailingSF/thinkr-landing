import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from 'lucide-react';

export default function DeepReportingPage() {
  return (
    <>
      <Header />
      <main>
        <div className="w-full container mx-auto px-4 py-12 md:py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-tight">
              Deep Insights for E-commerce Growth
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl mt-2 mb-8 sm:mb-12">
              Get comprehensive analytics and AI-powered insights across Shopify, Facebook Ads, Klaviyo, and 300+ integrations to make data-driven decisions.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto group">
                <Link href="https://www.thinkr-app.com/">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto flex justify-center mt-12 md:mt-16 lg:mt-20">
            <Image 
              src="/thinkr chat.png"
              alt="Thinkr reporting interface showing comprehensive analytics and insights"
              width={1000}
              height={250}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Analytics Features Section */}
          <div className="max-w-6xl mx-auto mt-24 md:mt-32 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-4">
              AI-Powered Analytics for Better Decisions
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl text-center max-w-3xl mx-auto mb-10 md:mb-16">
              Transform complex data into actionable insights with AI-driven analytics and reporting
            </p>
            
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="w-full lg:w-1/2 flex items-center justify-center rounded-lg">
                <Image 
                  src="/thinkr-chat-black.png"
                  alt="Thinkr reporting dashboard showing comprehensive analytics"
                  width={1000}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              <div className="w-full lg:w-1/2">
                <div className="grid gap-6">
                  <div className="group">
                    <div className="flex items-start space-x-4 p-4 rounded-lg transition-colors hover:bg-gray-50">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-1">Unified Analytics</h3>
                        <p className="text-gray-600 text-base">All your data in one place, with cross-platform insights.</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4 p-4 rounded-lg transition-colors hover:bg-gray-50">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-purple-600 transition-colors mb-1">Predictive Analytics</h3>
                        <p className="text-gray-600 text-base">AI forecasting helps you anticipate trends and opportunities.</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4 p-4 rounded-lg transition-colors hover:bg-gray-50">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-green-600 transition-colors mb-1">Custom Reports</h3>
                        <p className="text-gray-600 text-base">Build and automate reports that matter to your business.</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4 p-4 rounded-lg transition-colors hover:bg-gray-50">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition-colors mb-1">Real-time Insights</h3>
                        <p className="text-gray-600 text-base">Live data and alerts keep you ahead of the curve.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integrations Section */}
          <div className="max-w-6xl mx-auto mt-16 md:mt-20 lg:mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-10 md:mb-16">
              Connect Your Data Sources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[ // Array of integration data
                {
                  logo: "/integration-logos/meta-icon-2.png",
                  name: "Facebook (Meta) Ads",
                  description: "Deep dive into ad performance, audience insights, and ROAS analytics.",
                },
                {
                  logo: "/integration-logos/google-ads-icon-2.png",
                  name: "Google Ads",
                  description: "Comprehensive campaign analytics, keyword performance, and conversion tracking.",
                },
                {
                  logo: "/integration-logos/google-analytics-icon.png",
                  name: "Google Analytics",
                  description: "Advanced user behavior analysis, funnel visualization, and attribution modeling.",
                },
                {
                  logo: "/integration-logos/klaviyo-icon-black.png",
                  name: "Klaviyo",
                  description: "Detailed email performance metrics, customer segmentation analysis, and ROI tracking.",
                },
                {
                  logo: "/integration-logos/gorgias-icon.png",
                  name: "Gorgias",
                  description: "Customer support analytics, sentiment analysis, and response time metrics.",
                },
                {
                  logo: "/integration-logos/pinterest-icon.png",
                  name: "Pinterest Ads",
                  description: "In-depth pin analytics, audience engagement metrics, and conversion tracking.",
                },
                {
                  logo: "/integration-logos/mailchimp-icon-2.png",
                  name: "Mailchimp",
                  description: "Comprehensive email analytics, subscriber insights, and campaign performance metrics.",
                },
              ].map((integration) => (
                <div key={integration.name} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center">
                  <Image 
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    width={48}
                    height={48}
                    className="mb-4 h-12 w-12 object-contain"
                  />
                  <h4 className="text-lg font-medium mb-2">{integration.name}</h4>
                  <p className="text-gray-600 text-sm">{integration.description}</p>
                </div>
              ))}
              {/* Placeholder for the '300+' card */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-center text-center">
                 <h4 className="text-lg font-medium mb-2">More on the way</h4>
                 <p className="text-gray-600 text-sm">Connect all your data sources for complete insights.</p>
                 <Button variant="outline" size="sm" className="mt-4" asChild>
                   <Link href="/contact">
                     Request an integration
                   </Link>
                 </Button>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
} 