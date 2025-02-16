import Link from "next/link"

const Hero = () => {
  return (
    <section className="py-32 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-medium mb-6 max-w-[900px] mx-auto leading-tight">
          Automate Everyday Shopify Operations
        </h1>
        <p className="text-gray-500 text-xl mb-8">One-click automations for ecommerce.</p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/get-started"
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/learn-more"
            className="bg-[#E5E7EB] hover:bg-gray-300 text-black px-6 py-3 rounded-lg transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero

