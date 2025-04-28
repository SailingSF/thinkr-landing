import Link from "next/link"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 pt-6 sm:pt-8 md:pt-12 lg:pt-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium mb-4 sm:mb-6 mx-auto leading-[1.15] sm:leading-tight">
          One Platform. Every Answer.<br />Grow at Lightspeed.
        </h1>
        <p className="text-lg sm:text-xl md:text-[35px] lg:text-[32px] text-gray-500 font-normal mb-6 sm:mb-8 max-w-[800px] mx-auto">
          Save 3 hours daily with <span className="text-primary">AI Agents</span>.
        </p>
        <div className="flex flex-row justify-center items-center space-x-2 sm:space-x-4 mx-auto">
          <Button
            asChild
            variant="default"
            className="bg-black hover:bg-primary-400 text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-base md:text-lg font-medium rounded-lg transition-colors flex items-center justify-center min-h-[36px] sm:min-h-[44px] w-[120px] sm:w-auto"
          >
            <Link href="https://www.thinkrapp.com/" className="flex items-center justify-center">
              Get Started
            </Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="bg-gray-500 hover:bg-primary-400 text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-base md:text-lg font-medium rounded-lg transition-colors flex items-center justify-center min-h-[36px] sm:min-h-[44px] w-[120px] sm:w-auto"
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

