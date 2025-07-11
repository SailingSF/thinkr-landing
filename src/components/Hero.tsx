import Link from "next/link"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="py-2 text-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-2 mx-auto leading-tight max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl
          animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out motion-reduce:animate-none motion-reduce:opacity-100"
        >
          The Unfair Advantage of Autonomous Ecommerce
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-2 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed
        animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-150 motion-reduce:animate-none motion-reduce:opacity-100">
          We figure out how ecommerce stores can <span className="font-bold text-primary-500">grow 30% in 90 days</span> using AI Agents.
        </p>
        <div className="flex flex-col items-center justify-center space-y-3 mx-auto
        animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-300 motion-reduce:animate-none motion-reduce:opacity-100">
          <Button
            asChild
            variant="default"
            size="lg"
            className="bg-black hover:bg-primary text-white font-medium rounded-lg transition-colors w-auto min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5"
          >
            <Link href="https://www.thinkrapp.com/" className="flex items-center justify-center">
              Try thinkr free
            </Link>
          </Button>
          <p className="text-xs sm:text-sm md:text-base text-gray-600">
            No setup fees. No risk. Just results.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

