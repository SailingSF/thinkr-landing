import Link from "next/link"

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Shopify Store?</h2>
        <p className="text-xl mb-8">Start your free trial today and experience the power of AI-driven e-commerce.</p>
        <Link href="#" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg text-lg font-semibold">
          Get Started Now
        </Link>
      </div>
    </section>
  )
}

export default CTA

