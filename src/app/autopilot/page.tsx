import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Bot, LineChart, Zap, Bell, Settings, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function AutopilotPage() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="w-full container mx-auto px-4 pt-16 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-6">
              <Bot className="w-4 h-4 text-blue-500 mr-2" />
              <span className="text-blue-700 text-sm font-medium">Autonomous Store Management</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-500">
              Your Store on Autopilot
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl mb-8">
              Let AI handle your store operations while you focus on growth. 
              No manual work required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <Link href="https://app.thinkr.com/signup" className="flex items-center">
                  Enable Autopilot
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              {/* Replace with actual dashboard image */}
              <Image
                src="/placeholder-autopilot-dashboard.png"
                alt="thinkr autopilot dashboard"
                width={1200}
                height={600}
                className="w-full"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6">
                Your 24/7 E-commerce Operator
              </h2>
              <p className="text-gray-600 text-lg">
                Autopilot monitors your store around the clock, making smart decisions 
                to optimize performance and prevent issues before they happen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <LineChart className="w-6 h-6" />,
                  title: "Real-time Monitoring",
                  description: "Continuously tracks sales, inventory, ads, and customer behavior patterns"
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Automatic Optimization",
                  description: "Applies proven growth strategies to improve performance across all channels"
                },
                {
                  icon: <Bell className="w-6 h-6" />,
                  title: "Smart Notifications",
                  description: "Keeps you informed with daily summaries and important alerts"
                },
                {
                  icon: <Settings className="w-6 h-6" />,
                  title: "Flexible Control",
                  description: "Choose between full automation or approval-based actions"
                },
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "Risk Management",
                  description: "Prevents costly mistakes with built-in safety protocols"
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6" />,
                  title: "Proven Results",
                  description: "Average 32% improvement in operational efficiency"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
                How Autopilot Works
              </h2>
              <p className="text-gray-600 text-lg">
                Set it up once, and let AI handle the rest. Here's how thinkr's Autopilot 
                transforms your operations.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "Connect your Platforms",
                      description: "Integrate your e-commerce tools in minutes. Autopilot syncs with Shopify, ads, email, and more."
                    },
                    {
                      step: "02",
                      title: "Set Your Preferences",
                      description: "Choose your automation level and business rules. Autopilot adapts to your strategy."
                    },
                    {
                      step: "03",
                      title: "AI Takes Control",
                      description: "Watch as Autopilot optimizes operations, prevents issues, and drives growth automatically."
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6">
                      <div className="text-3xl font-bold text-purple-500">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  {/* Replace with actual setup flow image */}
                  <Image
                    src="/placeholder-setup-flow.png"
                    alt="thinkr autopilot setup process"
                    width={600}
                    height={800}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6 text-black">
                Ready to Put Your Store on Autopilot?
              </h2>
              <p className="text-xl mb-8 text-gray-600">
                Join thousands of e-commerce stores using thinkr to automate their growth
              </p>
              <Button size="lg" className="group bg-black hover:bg-black/90" asChild>
                <Link href="https://app.thinkr.com/signup">
                  Get Started Free
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