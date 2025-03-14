import Link from "next/link"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="pb-2 pt-8 sm:pt-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-[100px] font-medium mb-6 max-w-[1000px] mx-auto leading-tight">
          Automate Everyday Shopify Tasks
        </h1>
        <p className="text-xl sm:text-2xl lg:text-[32px] text-gray-500 font-normal mb-8">Save time with <span className="text-primary">one-click AI Agents</span>.</p>
        <div className="flex justify-center items-center space-x-4">
          <Button
            asChild
            variant="default"
            size="sm"
            className="bg-black hover:bg-primary-400 text-white px-6 py-2.5 text-[11px] sm:text-[14px] font-medium rounded-lg transition-colors flex items-center justify-center"
          >
            <Link href="https://www.thinkrapp.com/" className="flex items-center justify-center">
              Get Started
            </Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="bg-gray-500 hover:bg-primary-400 text-white px-6 py-2.5 text-[11px] sm:text-[14px] font-medium rounded-lg transition-colors flex items-center justify-center"
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

