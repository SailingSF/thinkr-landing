import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Timeline() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 pb-24 md:pb-32">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-[36px] md:text-[50px] font-medium mb-4">
          Here&apos;s what you can get done with thinkr in just 30 days.
        </h2>
        <Link href="/signup" className="inline-block">
          <div className="text-primary hover:text-primary/80 transition-colors text-lg font-medium">
            Get started for free →
          </div>
        </Link>
      </div>

      <div className="relative">
        {/* Single connecting line - only visible on desktop */}
        <div className="hidden md:block absolute top-[45px] left-[16%] right-[16%] h-[1px] bg-gray-200" />

        {/* Timeline items */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Today */}
          <div className="relative">
            <div className="flex flex-col items-center">
              {/* Timeline label */}
              <div className="mb-4">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium">
                  DAY 1
                </div>
              </div>

              {/* Timeline dot - only visible on desktop */}
              <div className="hidden md:block absolute top-[45px] left-[50%] -translate-x-[5px]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] relative z-10" />
              </div>
              
              {/* Card content */}
              <div className="bg-white p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] w-full mt-8">
                <h3 className="text-2xl font-medium mb-6">Get started. No excuses.</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-lg">✓</span>
                    <span className="text-gray-600 text-lg">Connect your Shopify store with our App in seconds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-lg">✓</span>
                    <span className="text-gray-600 text-lg">Deploy your first AI agent in TWO MINUTES</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-lg">✓</span>
                    <span className="text-gray-600 text-lg">Launch powerful automation with ONE CLICK - instantly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Day 5 */}
          <div className="relative">
            <div className="flex flex-col items-center">
              {/* Timeline label */}
              <div className="mb-4">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium">
                  DAY 5
                </div>
              </div>

              {/* Timeline dot - only visible on desktop */}
              <div className="hidden md:block absolute top-[45px] left-[50%] -translate-x-[5px]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] relative z-10" />
              </div>

              {/* Card content */}
              <div className="bg-white p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] w-full mt-8">
                <h3 className="text-2xl font-medium mb-6">Get comfortable. Get ahead.</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-lg">✓</span>
                    <span className="text-gray-600 text-lg">Take control with connections to marketing, inventory, and 200+ apps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-lg">✓</span>
                    <span className="text-gray-600 text-lg">Establish ironclad approval workflows and controls - maintain full authority</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-lg">✓</span>
                    <span className="text-gray-600 text-lg">Unleash AI-powered campaigns that crush customer acquisition goals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Day 30 */}
          <div className="relative">
            <div className="flex flex-col items-center">
              {/* Timeline label */}
              <div className="mb-4">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium">
                  DAY 20
                </div>
              </div>

              {/* Timeline dot - only visible on desktop */}
              <div className="hidden md:block absolute top-[45px] left-[50%] -translate-x-[5px]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] relative z-10" />
              </div>

              {/* Card content */}
              <div className="bg-white p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] w-full mt-8">
                <h3 className="text-2xl font-medium mb-6">Ask why you didn&apos;t switch years ago.</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-lg">✓</span>
                    <span className="text-gray-600 text-lg">100% of operations decisions backed by hard data - no more guesswork</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-lg">✓</span>
                    <span className="text-gray-600 text-lg">Management tasks 8.5× more efficient - reclaim your time NOW</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-lg">✓</span>
                    <span className="text-gray-600 text-lg">Store revenue grows 25% faster - watch your competition fall behind</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 