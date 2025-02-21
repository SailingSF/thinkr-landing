import Link from "next/link"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="pb-2 pt-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl sm:text-[100px] font-medium mb-6 max-w-[1000px] mx-auto leading-tight">
          Automate Everyday Shopify Operations
        </h1>
        <p className="text-2xl sm:text-[32px] text-gray-500 font-normal mb-8">One-click automations for e-commerce.</p>
        <div className="flex justify-center items-center space-x-4">
          <Button
            asChild
            variant="default"
            size="sm"
            className="bg-black hover:bg-[#8c74ff] text-white px-6 py-2.5 font-medium text-[14px] rounded-lg transition-colors flex items-center justify-center"
          >
            <Link href="/get-started" className="flex items-center justify-center">
              Get Started
            </Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="bg-gray-500 hover:bg-[#8c74ff] text-white px-6 py-2.5 font-medium text-[14px] rounded-lg transition-colors flex items-center justify-center"
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

