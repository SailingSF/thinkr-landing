import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from 'lucide-react';

export default function AllInOneChatPage() {
  return (
    <>
      <Header />
      <main>
        <div className="w-full container mx-auto px-4 py-12 md:py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-tight">
              Unify Your E-commerce World with All-In-One Chat
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl mt-2 mb-8 sm:mb-12">
              Connect Shopify, Facebook Ads, Klaviyo, Google Analytics, Gorgias, and 300+ other integrations to chat directly with your entire store universe using AI.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto group">
                <Link href="https://www.thinkrapp.com/">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto flex justify-center mt-12 md:mt-16 lg:mt-20">
            <Image 
              src="/thinkr chat.png"
              alt="Thinkr chat interface showing connected apps like Shopify, Klaviyo, Facebook Ads, and a chat input field"
              width={1000}
              height={250}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Revenue-First Agencies Section */}
          <div className="max-w-6xl mx-auto mt-24 md:mt-32 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-4">
              AI Chat built for Driving Revenue
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl text-center max-w-3xl mx-auto mb-10 md:mb-16">
              Transform your store data into actionable insights with AI that understands your business goals
            </p>
            
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="w-full lg:w-1/2 flex items-center justify-center rounded-lg">
                <Image 
                  src="/thinkr-chat-black.png"
                  alt="Thinkr chat interface showing AI-powered revenue insights"
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
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-1">One source of truth</h3>
                        <p className="text-gray-600 text-base">No more bouncing between dashboards.</p>
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
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-purple-600 transition-colors mb-1">Agent-powered intelligence</h3>
                        <p className="text-gray-600 text-base">thinkr spots risks and opportunities automatically.</p>
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
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-green-600 transition-colors mb-1">Chat-driven insights</h3>
                        <p className="text-gray-600 text-base">Just ask — and act instantly.</p>
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
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition-colors mb-1">Designed for real outcomes</h3>
                        <p className="text-gray-600 text-base">Revenue, retention, profitability.</p>
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
              Chat with Your Favorite Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[ // Array of integration data
                {
                  logo: "/integration-logos/meta-icon-2.png",
                  name: "Facebook (Meta) Ads",
                  description: "Analyze ad spend, track campaign performance, and get AI insights on ROAS without leaving the chat.",
                },
                {
                  logo: "/integration-logos/google-ads-icon-2.png",
                  name: "Google Ads",
                  description: "Ask about keyword performance, cost-per-click, conversion rates, and optimize bids with AI suggestions.",
                },
                {
                  logo: "/integration-logos/google-analytics-icon.png",
                  name: "Google Analytics",
                  description: "Get quick summaries of website traffic, user behavior, top landing pages, and conversion funnels.",
                },
                {
                  logo: "/integration-logos/klaviyo-icon-black.png",
                  name: "Klaviyo",
                  description: "Check email campaign metrics, segment performance, and identify top-performing flows through simple chat commands.",
                },
                {
                  logo: "/integration-logos/gorgias-icon.png",
                  name: "Gorgias",
                  description: "Summarize support tickets, track response times, and understand customer sentiment with AI analysis.",
                },
                {
                  logo: "/integration-logos/pinterest-icon.png",
                  name: "Pinterest Ads",
                  description: "Monitor pin performance, audience engagement, and ad spend effectiveness directly within the chat interface.",
                },
                {
                  logo: "/integration-logos/mailchimp-icon-2.png",
                  name: "Mailchimp",
                  description: "Retrieve campaign results, list growth trends, and audience engagement metrics effortlessly via chat.",
                },
                // Add more integrations here as needed
              ].map((integration) => (
                <div key={integration.name} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center">
                  <Image 
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    width={48} // Standardized logo size
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
                 <p className="text-gray-600 text-sm">Connect to your entire e-commerce stack.</p>
                 <Button variant="outline" size="sm" className="mt-4" asChild>
                   <Link href="/contact">
                     Request an integration
                   </Link>
                 </Button>
              </div>
            </div>
          </div>

          {/* Real-World Impact Section */}
          <div className="max-w-6xl mx-auto mt-24 md:mt-32 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-4">
              Real-World Impact, Real-Time Results
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl text-center max-w-3xl mx-auto mb-12">
              See how e-commerce businesses are transforming their operations with thinkr&apos;s AI-powered chat
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Impact Cards */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Revenue Optimization</h3>
                <p className="text-gray-700 mb-4">
                  &quot;We identified a 23% revenue opportunity by asking thinkr to analyze our cross-channel data and suggest optimizations.&quot;
                </p>
                <p className="text-sm text-gray-500 italic">- Fashion retailer, $5M/year</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Time Savings</h3>
                <p className="text-gray-700 mb-4">
                    &quot;What used to take our team 4 hours of dashboard analysis now takes 5 minutes with a simple chat conversation.&quot;
                </p>
                <p className="text-sm text-gray-500 italic">- Beauty brand, $10M/year</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-full mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Growth Insights</h3>
                <p className="text-gray-700 mb-4">
                  &quot;thinkr spotted a trending product category we hadn&apos;t noticed, leading to a 40% increase in sales for that segment.&quot;
                </p>
                <p className="text-sm text-gray-500 italic">- Home goods store, $3M/year</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-medium mb-6">Ready to Transform Your E-commerce Operations?</h3>
              <Button size="lg" className="group">
                <Link href="/contact" className="flex items-center">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
