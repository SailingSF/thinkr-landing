import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Bell, Shield, Clock, Zap, AlertTriangle, TrendingUp, Settings, Eye, CheckCircle2, Target, Users } from 'lucide-react';

export default function AlertAgentPage() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="w-full container mx-auto px-4 pt-16 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-red-50 rounded-full px-4 py-2 mb-6">
              <Bell className="w-4 h-4 text-red-500 mr-2" />
              <span className="text-red-700 text-sm font-medium">AI-Powered Store Monitoring</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Never Miss a Critical Moment
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl mb-8">
              AI-powered monitoring that catches issues before they hurt your business. 
              Get intelligent alerts that actually matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-red-500 hover:bg-red-600">
                <Link href="https://thinkrapp.com" className="flex items-center">
                  Activate Alert Agent
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="#how-it-works">See Live Demo</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Bell className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-medium text-gray-800 mb-2">Alert Agent Dashboard</h3>
                  <p className="text-gray-600">Real-time monitoring and intelligent alerts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Problems Section */}
        <section className="w-full bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6">
                Stop Playing Catch-Up With Your Business
              </h2>
              <p className="text-gray-600 text-lg">
                Most e-commerce issues are discovered too late. Alert Agent monitors 
                everything 24/7 so you can act before problems become disasters.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {[
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  problem: "Sales Drop Unnoticed",
                  solution: "Instant alerts when conversion rates, traffic, or revenue deviate from normal patterns"
                },
                {
                  icon: <AlertTriangle className="w-6 h-6" />,
                  problem: "Inventory Stockouts",
                  solution: "Smart predictions and alerts before you run out of bestselling products"
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  problem: "Ad Spend Waste",
                  solution: "Real-time monitoring of ROAS drops and budget overspend across all channels"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium text-red-600 mb-2">{item.problem}</h3>
                  <p className="text-gray-600 text-sm">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6">
                Smart Alerts That Actually Help
              </h2>
              <p className="text-gray-600 text-lg">
                Not just notifications - intelligent alerts with context, recommendations, 
                and automated responses when possible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <Eye className="w-6 h-6" />,
                  title: "Performance Monitoring",
                  description: "Track revenue, conversion rates, traffic patterns, and customer behavior anomalies in real-time"
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Risk Detection",
                  description: "Identify potential issues before they impact your business - from inventory to payment processing"
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Time-Sensitive Alerts",
                  description: "Get notified of flash sale opportunities, competitor price changes, and market trends"
                },
                {
                  icon: <Settings className="w-6 h-6" />,
                  title: "Custom Alert Rules",
                  description: "Set personalized thresholds and conditions based on your business goals and KPIs"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Customer Behavior Alerts",
                  description: "Monitor unusual customer patterns, high-value customer activity, and retention risks"
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Automated Actions",
                  description: "Some alerts can trigger automatic responses like pausing ads or sending notifications"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alert Types Section */}
        <section className="w-full bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6">
                Every Alert Category You Need
              </h2>
              <p className="text-gray-600 text-lg">
                Comprehensive monitoring across all aspects of your e-commerce business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  category: "Sales & Revenue",
                  alerts: [
                    "Daily revenue drops",
                    "Conversion rate changes",
                    "Cart abandonment spikes",
                    "Payment failures"
                  ],
                  color: "bg-green-100 text-green-600"
                },
                {
                  category: "Inventory & Products",
                  alerts: [
                    "Low stock warnings",
                    "Out of stock alerts",
                    "Product page errors",
                    "Pricing discrepancies"
                  ],
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  category: "Marketing & Ads",
                  alerts: [
                    "ROAS below threshold",
                    "Budget overspend",
                    "Campaign performance drops",
                    "Email deliverability issues"
                  ],
                  color: "bg-purple-100 text-purple-600"
                },
                {
                  category: "Technical & Operations",
                  alerts: [
                    "Site speed issues",
                    "Integration failures",
                    "Security threats",
                    "API rate limits"
                  ],
                  color: "bg-orange-100 text-orange-600"
                }
              ].map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                    <Bell className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-3">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.alerts.map((alert, alertIndex) => (
                      <li key={alertIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {alert}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6">
                How Alert Agent Works
              </h2>
              <p className="text-gray-600 text-lg">
                Set up once, monitor forever. Here&apos;s how Alert Agent keeps your business protected.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "AI Learns Your Patterns",
                      description: "Alert Agent analyzes your historical data to understand normal business patterns and seasonal trends."
                    },
                    {
                      step: "02", 
                      title: "Continuous Monitoring",
                      description: "24/7 surveillance of all connected platforms, detecting anomalies and potential issues in real-time."
                    },
                    {
                      step: "03",
                      title: "Smart Alert Delivery",
                      description: "Intelligent filtering sends only actionable alerts via your preferred channels with context and recommendations."
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6">
                      <div className="text-3xl font-bold text-red-500">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-12 min-h-[500px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative">
                        <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                          <Bell className="w-16 h-16 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-500 rounded-full animate-bounce delay-100"></div>
                      </div>
                      <h3 className="text-xl font-medium text-gray-800">Always Watching</h3>
                      <p className="text-gray-600 mt-2">Your AI guardian for e-commerce success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Impact Section */}
        <section className="w-full bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6">
                Prevent Problems Before They Cost You
              </h2>
              <p className="text-gray-600 text-lg">
                See the real impact of proactive monitoring on your bottom line
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  metric: "87%",
                  description: "Reduction in revenue-impacting issues",
                  detail: "Catch problems before they affect sales"
                },
                {
                  metric: "4.2hrs",
                  description: "Average time saved per week",
                  detail: "Less time firefighting, more time growing"
                },
                {
                  metric: "23%",
                  description: "Improvement in ad spend efficiency",
                  detail: "Stop wasting money on underperforming campaigns"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-red-50">
                  <div className="text-4xl font-bold text-red-600 mb-2">{stat.metric}</div>
                  <div className="text-lg font-medium text-gray-800 mb-1">{stat.description}</div>
                  <div className="text-sm text-gray-600">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6 text-black">
                Ready to Never Miss Another Issue?
              </h2>
              <p className="text-xl mb-8 text-gray-600">
                Join thousands of e-commerce stores using Alert Agent to protect their business 24/7
              </p>
              <Button size="lg" className="group bg-red-600 hover:bg-red-700" asChild>
                <Link href="https://thinkrapp.com">
                  Start Monitoring Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 