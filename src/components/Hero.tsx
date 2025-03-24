import Link from "next/link"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 pt-6 sm:pt-8 md:pt-12 lg:pt-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] xl:text-[52px] 2xl:text-[75px] font-medium mb-4 sm:mb-6 max-w-[1000px] mx-auto leading-[1.15] sm:leading-tight">
          Automate Everyday Shopify Tasks in One-Click
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] text-gray-500 font-normal mb-6 sm:mb-8 max-w-[800px] mx-auto">
          Save 3 hours daily with <span className="text-primary">AI Agents</span>.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-xs sm:max-w-none mx-auto">
          <Button
            asChild
            variant="default"
            className="bg-black hover:bg-primary-400 text-white px-6 py-3 text-sm sm:text-base font-medium rounded-lg transition-colors flex items-center justify-center min-h-[44px]"
          >
            <Link href="https://www.thinkrapp.com/" className="flex items-center justify-center">
              Get Started
            </Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="bg-gray-500 hover:bg-primary-400 text-white px-6 py-3 text-sm sm:text-base font-medium rounded-lg transition-colors flex items-center justify-center min-h-[44px]"
          >
            <Link href="/learn-more" className="flex items-center justify-center">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero

