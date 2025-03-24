import Image from 'next/image'

const testimonials = [
  {
    name: "Karla Lynn",
    role: "Shopify Store Owner",
    quote: "thinkr delivers actionable e-commerce insights straight to my inbox. It's like having a brilliant operations manager working 24/7, boosting my sales while giving me back time to focus on growth.",
    image: "/testimonial/testimonialpic1.png"
  },
  {
    name: "Tomas Campbell",
    role: "Marketing Ads Manager",
    quote: "With thinkr, I've cut my operational time in half. Their AI spots opportunities I'd miss and implements solutions automatically. Now I can focus on strategy instead of tedious admin tasks.",
    image: "/testimonial/testimonialpic2.png"
  },
  {
    name: "Robert Ocampo",
    role: "Shopify Store Owner",
    quote: "thinkr transformed my Shopify store overnight. The AI identifies revenue opportunities I never saw coming and guides me through implementation. It's the teammate I didn't know I needed.",
    image: "/testimonial/testimonialpic3.png"
  }
]

const StarRating = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-4 pb-16 sm:pb-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-medium tracking-tight text-center text-black animate-fade-in motion-reduce:animate-none mb-16 sm:mb-24">
          Every store grows when using thinkr
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg relative mt-16">
              <div className="absolute -top-14 sm:-top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 sm:mt-12">
                <p className="text-gray-600 mb-4 sm:mb-6 text-center text-sm sm:text-base">
                  {testimonial.quote}
                </p>
                <div className="text-center">
                  <h4 className="font-semibold text-base sm:text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm mb-2">{testimonial.role}</p>
                  <div className="flex justify-center">
                    <StarRating />
                  </div>
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
  
  