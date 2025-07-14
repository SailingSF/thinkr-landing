import { Button } from "@/components/ui/button"

const PLACEHOLDER_TEXT = "Build an AI Agent to..."

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-32">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl font-regular text-black mb-3 font-inter leading-tight">
            The Unfair Advantage<br />of Autonomous Ecommerce
          </h1>
          {/* Subheading */}
          <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 font-inter">
            Let's grow your store <span className="text-primary-500 font-bold">4x faster</span> with AI Agents.
          </p>
          {/* Chat/Input Bar */}
          <div className="w-full max-w-2xl mx-auto bg-zinc-900 rounded-xl shadow-lg px-2 sm:px-4 py-3 sm:py-4 flex flex-col gap-0">
            {/* First row: textarea only, full width */}
            <div className="flex items-center w-full">
              <textarea
                placeholder={PLACEHOLDER_TEXT}
                rows={3}
                className="flex-1 bg-zinc-800 text-white placeholder-gray-400 rounded-md px-3 py-2 sm:px-4 sm:py-3 h-auto min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary-500 text-base border border-zinc-700 resize-none w-full"
                style={{ minWidth: 0 }}
              />
            </div>
            {/* Add vertical space between rows */}
            <div className="h-3 sm:h-4" />
            {/* Second row: left and right groups */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between w-full gap-2 sm:gap-0">
              {/* Left group: Centered on mobile */}
              <div className="flex flex-row items-center gap-1 w-full sm:w-auto max-w-full justify-center sm:justify-start">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold h-8 px-3 rounded-md text-xs transition-colors flex items-center min-w-0 w-auto">
                  + Ask
                </Button>
                <span className="text-white font-medium text-xs px-2 cursor-pointer hover:text-primary-400 transition-colors whitespace-nowrap">Research</span>
                <span className="text-white font-medium text-xs px-2 cursor-pointer hover:text-primary-400 transition-colors whitespace-nowrap">Agents</span>
              </div>
              {/* Right group: Integrations and Send button centered as a group on mobile */}
              <div className="flex flex-row items-center gap-1 w-full sm:w-auto mt-2 sm:mt-0 justify-center sm:justify-end">
                <Button variant="secondary" className="flex items-center bg-zinc-800 text-white px-3 h-8 rounded-md gap-1 border border-zinc-700 flex-shrink-0 w-auto justify-center text-xs">
                  Integrations
                  <img src="/integration-logos/gorgias-icon.png" alt="Gorgias" className="ml-1 w-4 h-4" />
                  <img src="/integration-logos/meta-icon-2.png" alt="Meta" className="ml-1 w-4 h-4" />
                  <img src="/integration-logos/mailchimp-icon-2.png" alt="Mailchimp" className="ml-1 w-4 h-4" />
                  <img src="/integration-logos/google-ads-icon-2.png" alt="Google Ads" className="ml-1 w-4 h-4" />
                  <img src="/integration-logos/pinterest-icon.png" alt="Klaviyo" className="ml-1 w-4 h-4" />
                  <span className="ml-1 text-base">^</span>
                </Button>
                <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-md w-8 h-8 flex items-center justify-center transition-colors flex-shrink-0 p-0">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero

