import Link from "next/link"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="pb-32 pt-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-7xl font-medium mb-6 max-w-[900px] mx-auto leading-tight">
          Automate Everyday Shopify Operations
        </h1>
        <p className="text-gray-500 text-xl mb-8">One-click automations for e-commerce.</p>
        <div className="flex justify-center space-x-4">
          <Button
            asChild
            variant="default"
            size="sm"
            className="bg-black hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-colors"
          >
            <Link href="/get-started">
              Get Started
            </Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="bg-gray-500 hover:bg-gray-300 text-white px-4 py-3 rounded-lg transition-colors"
          >
            <Link href="/learn-more">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero

