import Link from "next/link"

export default function Timeline() {
  return (
    <div className="w-full container mx-auto px-4 pb-8 md:pb-14">
      <div className="text-center mb-10 sm:mb-16 md:mb-24">
        <h2 className="text-3xl sm:text-4xl md:text-[50px] font-medium mb-4">
          Here's what you can get done with thinkr<br />
          in just 30 days.
        </h2>
        <Link href="https://www.thinkrapp.com/" className="inline-block">
          <div className="text-primary hover:text-primary/80 transition-colors text-base sm:text-lg font-medium">
            Get started for free →
          </div>
        </Link>
      </div>

      <div className="relative">
        {/* Timeline items */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Desktop Timeline connecting lines - only between dots */}
          <div className="hidden md:block absolute top-[42px] left-[calc(16.667%+42px)] right-[calc(50%-21px)] h-[2px] bg-gray-200 z-0" />
          <div className="hidden md:block absolute top-[42px] left-[calc(50%+21px)] right-[calc(16.667%+42px)] h-[2px] bg-gray-200 z-0" />
          
          {/* Day 1 */}
          <div className="relative md:block flex items-start">
            {/* Mobile timeline dot and line for Day 1 */}
            <div className="md:hidden flex flex-col items-center mr-4 flex-shrink-0">
              <div className="w-5 h-5 rounded-full bg-white border-2 border-primary flex items-center justify-center relative z-10 mt-[30px]">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <div className="w-[2px] h-[calc(100%-60px)] bg-gray-200 my-2"></div>
            </div>
            
            <div className="flex flex-col md:items-center">
              {/* Timeline dot and label container */}
              <div className="flex flex-col md:items-center relative z-10">
                {/* Timeline label */}
                <div className="mb-4">
                  <div className="inline-flex px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium">
                    DAY 1
                  </div>
                </div>
                
                {/* Desktop Timeline dot */}
                <div className="hidden md:flex w-5 h-5 rounded-full bg-white border-2 border-primary items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>
              
              {/* Card content */}
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] w-full mt-4 md:mt-8">
                <h3 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6">Get Started.</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-base sm:text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-600 text-sm sm:text-base md:text-lg">Connect your Shopify store and other Apps in seconds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-base sm:text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-600 text-sm sm:text-base md:text-lg">Deploy your personal AI operations agent in under 2 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-base sm:text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-600 text-sm sm:text-base md:text-lg">Implement your first one-click automation instantly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Day 5 */}
          <div className="relative md:block flex items-start">
            {/* Mobile timeline dot and line for Day 5 */}
            <div className="md:hidden flex flex-col items-center mr-4 flex-shrink-0">
              <div className="w-5 h-5 rounded-full bg-white border-2 border-primary flex items-center justify-center relative z-10 mt-[30px]">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <div className="w-[2px] h-[calc(100%-60px)] bg-gray-200 my-2"></div>
            </div>
            
            <div className="flex flex-col md:items-center">
              {/* Timeline dot and label container */}
              <div className="flex flex-col md:items-center relative z-10">
                {/* Timeline label */}
                <div className="mb-4">
                  <div className="inline-flex px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium">
                    DAY 5
                  </div>
                </div>
                
                {/* Desktop Timeline dot */}
                <div className="hidden md:flex w-5 h-5 rounded-full bg-white border-2 border-primary items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>

              {/* Card content */}
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] w-full mt-4 md:mt-8">
                <h3 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6">Growth Accelerating.</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-base sm:text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-600 text-sm sm:text-base md:text-lg">Access personalized AI suggestions tailored to your store's unique data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-base sm:text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-600 text-sm sm:text-base md:text-lg">Launch AI-powered automations that exceed targets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-base sm:text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-600 text-sm sm:text-base md:text-lg">Prevent  revenue losses with intelligent inventory insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Day 30 */}
          <div className="relative md:block flex items-start">
            {/* Mobile timeline dot and line for Day 30 */}
            <div className="md:hidden flex flex-col items-center mr-4 flex-shrink-0">
              <div className="w-5 h-5 rounded-full bg-white border-2 border-primary flex items-center justify-center relative z-10 mt-[30px]">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              {/* No line after the last dot */}
            </div>
            
            <div className="flex flex-col md:items-center">
              {/* Timeline dot and label container */}
              <div className="flex flex-col md:items-center relative z-10">
                {/* Timeline label */}
                <div className="mb-4">
                  <div className="inline-flex px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium">
                    DAY 30
                  </div>
                </div>
                
                {/* Desktop Timeline dot */}
                <div className="hidden md:flex w-5 h-5 rounded-full bg-white border-2 border-primary items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>

              {/* Card content */}
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] w-full mt-4 md:mt-8">
                <h3 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6">Full Operations Manager.</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-base sm:text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-600 text-sm sm:text-base md:text-lg">Experience data-driven decision making across your entire operation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-base sm:text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-600 text-sm sm:text-base md:text-lg">Run your business in minutes per day instead of hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-base sm:text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-600 text-sm sm:text-base md:text-lg">Focus on growth strategy while thinkr handles the day-to-day</span>
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