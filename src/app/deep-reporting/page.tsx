import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, Database, FileText, Zap, Search, CheckCircle2, LineChart, TrendingUp, BarChart, Shield } from 'lucide-react';

export default function DeepReportingPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-24 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                Advanced AI-powered<br />
                <span className="text-[#8C74FF]">Data Analysis</span>
              </h1>
              
              {/* Connected Icons */}
              <div className="flex justify-center items-center space-x-8 my-16">
                <div className="relative flex items-center">
                  {/* Icons with connecting lines */}
                  <div className="flex items-center justify-between w-full max-w-3xl mx-auto relative">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#8C74FF]/10 flex items-center justify-center">
                        <Database className="w-6 h-6 text-[#8C74FF]" />
                      </div>
                      <span className="text-sm mt-2 text-gray-600">Raw Data</span>
                    </div>
                    
                    {/* Connecting line */}
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-[#8C74FF]/20 to-[#8C74FF]/30 mx-2" />
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#8C74FF]/10 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-[#8C74FF]" />
                      </div>
                      <span className="text-sm mt-2 text-gray-600">Process</span>
                    </div>
                    
                    {/* Connecting line */}
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-[#8C74FF]/30 to-[#8C74FF]/40 mx-2" />
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-[#8C74FF] flex items-center justify-center shadow-lg shadow-[#8C74FF]/20">
                        <BarChart className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm mt-2 text-gray-600">Analysis</span>
                    </div>
                    
                    {/* Connecting line */}
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-[#8C74FF]/40 to-[#8C74FF]/30 mx-2" />
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#8C74FF]/10 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-[#8C74FF]" />
                      </div>
                      <span className="text-sm mt-2 text-gray-600">Insights</span>
                    </div>
                    
                    {/* Connecting line */}
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-[#8C74FF]/30 to-[#8C74FF]/20 mx-2" />
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#8C74FF]/10 flex items-center justify-center">
                        <LineChart className="w-6 h-6 text-[#8C74FF]" />
                      </div>
                      <span className="text-sm mt-2 text-gray-600">Growth</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
                Using cutting-edge machine learning and deep analytics, thinkr helps e-commerce businesses unlock hidden patterns, predict trends, and optimize performance across all channels.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group bg-[#8C74FF] hover:bg-[#8C74FF]/90">
                  <Link href="https://apps.shopify.com/thinkr" className="flex items-center">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Essential Reports for E-commerce Growth
              </h2>
              <p className="text-gray-600 text-lg">
                Get the insights you need to make data-driven decisions and scale your store
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <Database className="w-6 h-6 text-blue-500" />,
                  title: "Performance Reports",
                  description: "Real-time metrics tracking revenue, AOV, conversion rates, and customer LTV across all sales channels"
                },
                {
                  icon: <Zap className="w-6 h-6 text-purple-500" />,
                  title: "Marketing ROI Analysis",
                  description: "Compare ROAS across Meta Ads, Google Ads, and email campaigns with automated attribution modeling"
                },
                {
                  icon: <FileText className="w-6 h-6 text-green-500" />,
                  title: "Inventory Intelligence",
                  description: "Stock forecasting, reorder recommendations, and inventory turnover analysis by SKU and variant"
                },
                {
                  icon: <Search className="w-6 h-6 text-orange-500" />,
                  title: "Customer Cohort Analysis",
                  description: "Track retention, repeat purchase rates, and customer lifetime value segmented by acquisition source"
                },
                {
                  icon: <Clock className="w-6 h-6 text-red-500" />,
                  title: "Product Performance",
                  description: "Best/worst sellers, bundle analysis, price optimization suggestions, and margin contribution reports"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-teal-500" />,
                  title: "Growth Opportunities",
                  description: "AI-identified opportunities in pricing, cross-selling, inventory, and marketing spend allocation"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg">
                  <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accuracy Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Visual Representation */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-square max-w-[500px] mx-auto relative">
                    {/* Outer circle */}
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#8C74FF]/20 animate-[spin_20s_linear_infinite]" />
                    
                    {/* Middle circle */}
                    <div className="absolute inset-8 rounded-full border-4 border-[#8C74FF]/30 flex items-center justify-center">
                      {/* Inner circle with content */}
                      <div className="absolute inset-8 rounded-full bg-[#8C74FF]/5 flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-bold text-4xl text-[#8C74FF]">100%</div>
                          <div className="text-gray-600 mt-2">Accuracy</div>
                        </div>
                      </div>
                      
                      {/* Floating icons */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
                        <Database className="w-6 h-6 text-[#8C74FF]" />
                      </div>
                      <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                        <CheckCircle2 className="w-6 h-6 text-[#8C74FF]" />
                      </div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
                        <Zap className="w-6 h-6 text-[#8C74FF]" />
                      </div>
                      <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                        <ArrowRight className="w-6 h-6 text-[#8C74FF]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-medium mb-6">
                    Accuracy You Can{' '}
                    <span className="text-[#8C74FF]">Trust</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8">
                    thinkr pulls data directly from connected platforms using APIs and cross-checks it using proprietary logic—so your numbers are always up to date and aligned with the source of truth.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#8C74FF]/10 flex items-center justify-center">
                        <Database className="w-5 h-5 text-[#8C74FF]" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Direct API Access</h3>
                        <p className="text-gray-600 text-sm">Real-time data from your platforms</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#8C74FF]/10 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-[#8C74FF]" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Cross-Checking</h3>
                        <p className="text-gray-600 text-sm">Proprietary validation logic</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Time Savings Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-medium mb-6">
                  What{' '}
                  <span className="text-[#8C74FF]">thinkr</span>{' '}
                  Saves You
                </h2>
              </div>

              {/* Before & After Cards */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center justify-center mb-20">
                {/* Before Card */}
                <div className="w-full md:w-5/12 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="text-xl font-medium">Traditional Process</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      Downloading multiple CSVs
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      Switching between tabs
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      Manual deck building
                    </li>
                  </ul>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#8C74FF] flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* After Card */}
                <div className="w-full md:w-5/12 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#8C74FF]/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-[#8C74FF]" />
                    </div>
                    <h3 className="text-xl font-medium">With thinkr</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-[#8C74FF] rounded-full"></span>
                      Automated data collection
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-[#8C74FF] rounded-full"></span>
                      Unified reporting interface
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-[#8C74FF] rounded-full"></span>
                      Error-free calculations
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#8C74FF]/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#8C74FF]" />
                    </div>
                    <h3 className="text-xl font-medium">Save 10+ Hours Monthly</h3>
                  </div>
                  <p className="text-gray-600">
                    Automated reporting cuts hours from your end-of-month process.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#8C74FF]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-[#8C74FF]" />
                    </div>
                    <h3 className="text-xl font-medium">Zero Manual Work</h3>
                  </div>
                  <p className="text-gray-600">
                    No more downloading CSVs or switching between tools.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#8C74FF]/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-[#8C74FF]" />
                    </div>
                    <h3 className="text-xl font-medium">Error-Free Results</h3>
                  </div>
                  <p className="text-gray-600">
                    Eliminate errors from copy-pasting and complex formulas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Ready to transform your reporting?
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl mb-10">
                Join thousands of e-commerce businesses using thinkr to make better decisions, faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group bg-[#8C74FF] hover:bg-[#8C74FF]/90">
                  <Link href="https://apps.shopify.com/thinkr" className="flex items-center">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <Link href="/demo" className="flex items-center">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
} 