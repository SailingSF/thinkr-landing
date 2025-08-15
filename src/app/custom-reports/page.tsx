import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ArrowRight, FileText, CalendarClock, BarChart3, PieChart, ShoppingBag, Facebook, Mail, Sparkles } from "lucide-react"

export default function CustomReportsPage() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="w-full container mx-auto px-4 pt-16 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary-50 rounded-full px-4 py-2 mb-6">
              <FileText className="w-4 h-4 text-primary-500 mr-2" />
              <span className="text-primary-700 text-sm font-medium">Custom Weekly Reports</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6 leading-tight">
              Agency‑quality Reports,
              <br className="hidden sm:block" />
              <span className="text-primary">Automated by AI</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl mb-8">
              Get weekly custom reports with your must‑have metrics from Shopify, Facebook (Meta) Ads, and Google Analytics—delivered automatically by your thinkr AI agent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-black hover:bg-black/90" asChild>
                <Link href="https://apps.shopify.com/thinkr" className="flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>

          {/* Sample Report Preview */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="font-medium">Weekly Executive Summary</div>
                </div>
                <div className="text-sm text-gray-500">Sent via Email • Mondays 9:00 AM</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {/* Shopify Card */}
                <div className="rounded-lg border border-gray-100 p-5 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-gray-800 font-medium">
                      <ShoppingBag className="w-4 h-4 text-emerald-500" />
                      Shopify
                    </div>
                    <span className="text-xs text-gray-500">Last 7 days</span>
                  </div>
                  <div className="text-2xl font-semibold">$128,430</div>
                  <div className="text-sm text-gray-500">Revenue • AOV $78 • CR 2.6%</div>
                </div>

                {/* Meta Ads Card */}
                <div className="rounded-lg border border-gray-100 p-5 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-gray-800 font-medium">
                      <Facebook className="w-4 h-4 text-blue-600" />
                      Meta Ads
                    </div>
                    <span className="text-xs text-gray-500">Last 7 days</span>
                  </div>
                  <div className="text-2xl font-semibold">3.4</div>
                  <div className="text-sm text-gray-500">ROAS • Spend $14,200 • CPA $18.40</div>
                </div>

                {/* Google Analytics Card */}
                <div className="rounded-lg border border-gray-100 p-5 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-gray-800 font-medium">
                      <PieChart className="w-4 h-4 text-orange-500" />
                      Google Analytics
                    </div>
                    <span className="text-xs text-gray-500">Last 7 days</span>
                  </div>
                  <div className="text-2xl font-semibold">82,410</div>
                  <div className="text-sm text-gray-500">Sessions • CR 2.6% • Bounce 39%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="w-full bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6">Agency‑like Clarity, Zero Manual Work</h2>
              <p className="text-gray-600 text-lg">thinkr transforms raw data into executive‑ready reports that mirror the quality of top e‑commerce agencies—without spreadsheets or deck building.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[ 
                { icon: <BarChart3 className="w-6 h-6" />, title: "Your Metrics, Your Way", description: "Choose the KPIs that matter—revenue, AOV, CR, ROAS, CPA, sessions, cohorts, and more" },
                { icon: <CalendarClock className="w-6 h-6" />, title: "Automatic Delivery", description: "Weekly or monthly reports sent via Email and Slack with on‑click deep links" },
                { icon: <Sparkles className="w-6 h-6" />, title: "AI Commentary", description: "Plain‑English insights, risks, and recommendations included in every report" },
                { icon: <ShoppingBag className="w-6 h-6" />, title: "Shopify‑Native", description: "Direct Shopify data for revenue, product performance, orders, and cohorts" },
                { icon: <Facebook className="w-6 h-6" />, title: "Meta Ads Metrics", description: "ROAS, spend pacing, CPA, creative performance, and audience trends" },
                { icon: <PieChart className="w-6 h-6" />, title: "Google Analytics", description: "Sessions, conversion funnels, top pages, and attribution insights" },
              ].map((f, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">{f.icon}</div>
                  <h3 className="text-xl font-medium mb-2">{f.title}</h3>
                  <p className="text-gray-600">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6">How Custom Reports Work</h2>
              <p className="text-gray-600 text-lg">Set it once—your AI agent builds and sends the perfect executive report every week.</p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  {[
                    { step: "01", title: "Connect Data Sources", description: "Link Shopify, Meta Ads, and Google Analytics. Pulls data via official APIs." },
                    { step: "02", title: "Pick Your KPIs", description: "Select metrics and sections you want—sales, ads, web analytics, and notes." },
                    { step: "03", title: "Schedule & Deliver", description: "Choose weekly or monthly cadence and recipients. Delivered via Email/Slack." },
                    { step: "04", title: "AI Adds Insights", description: "Clear narrative: what changed, why it matters, and what to do next." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6">
                      <div className="text-3xl font-bold text-primary-500">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-12 min-h-[420px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
                        <Mail className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-xl font-medium text-gray-800">Sent Every Monday</h3>
                      <p className="text-gray-600 mt-2">Auto‑compiled and delivered by your thinkr agent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-medium mb-6 text-black">Ready for hands‑off, agency‑grade reporting?</h2>
              <p className="text-xl mb-8 text-gray-600">Join brands using thinkr to get clear, actionable weekly reports—without lifting a finger.</p>
              <Button size="lg" className="group bg-black hover:bg-black/90" asChild>
                <Link href="https://apps.shopify.com/thinkr" className="flex items-center">
                  Start Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


