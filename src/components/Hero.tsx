import Link from "next/link"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 text-center">
      <div className="container mx-auto px-4">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 sm:mb-6 mx-auto leading-tight max-w-4xl"
        >
          One Platform. Every Answer.<br />Grow at Lightspeed.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl sm:max-w-3xl mx-auto">
          Stores that use thinkr protect revenue, double client retention,<br />
          and save 10+ hours a week.
        </p>
        <div className="flex flex-col items-center justify-center space-y-3 mx-auto">
          <Button
            asChild
            variant="default"
            size="lg"
            className="bg-black hover:bg-primary text-white font-medium rounded-lg transition-colors w-auto min-w-[160px] sm:min-w-[180px] text-sm sm:text-base md:text-lg"
          >
            <Link href="https://www.thinkrapp.com/" className="flex items-center justify-center">
              Try thinkr free
            </Link>
          </Button>
          <p className="text-xs sm:text-sm text-gray-600">
            No setup fees. No risk. Just results.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

