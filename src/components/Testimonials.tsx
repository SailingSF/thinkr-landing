const testimonials = [
  {
    name: "Karla Lynn",
    role: "Shopify Store Owner",
    quote: "There are many variations passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected or randomised words which don't look even slightly believable if you are going to use.",
    image: "/testimonials/karla.jpg"
  },
  {
    name: "Tomas Campbell",
    role: "Service Technician",
    quote: "There are many variations passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected or randomised words which don't look even slightly believable if you are going to use.",
    image: "/testimonials/tomas.jpg"
  },
  {
    name: "Robert Ocampo",
    role: "Aquatic biologist",
    quote: "There are many variations passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected or randomised words which don't look even slightly believable if you are going to use.",
    image: "/testimonials/robert.jpg"
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
    <section id="testimonials" className="pt-4 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-[50px] font-medium tracking-tight text-center text-black animate-fade-in motion-reduce:animate-none mb-24">
          What Our Customers Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg relative scale-90 md:scale-100">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-12">
                <p className="text-gray-600 mb-6 text-center">
                  {testimonial.quote}
                </p>
                <div className="text-center">
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm mb-2">{testimonial.role}</p>
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
  
  