import Image from 'next/image'

const testimonials = [
  {
    name: "Daniel Pierce",
    role: "CEO Kiera.io",
    quote: "With thinkr, we transformed raw data into actionable insights, improving productivity, streamlining processes, and enhancing strategic planning.",
    image: "/testimonial/testimonialpic1.png"
  },
  {
    name: "Saviera Joeal",
    role: "Founder Lokalane.com",
    quote: "From raw data to real results, thinkr boosts productivity, optimizes operations, and empowers smarter, data-driven business decisions with unmatched efficiency.",
    image: "/testimonial/testimonialpic2.png"
  }
]

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight whitespace-nowrap">
              What Our Customers Say About Their Experience
            </h2>
            <p className="mt-6 text-gray-600 text-lg">
              Genuine feedback showcasing real success and customer satisfaction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start gap-8 bg-gray-100/80 p-8 rounded-2xl">
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="flex-1">
                <blockquote className="text-xl text-gray-900 mb-6 leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>
                <div>
                  <h4 className="font-medium text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
  
  