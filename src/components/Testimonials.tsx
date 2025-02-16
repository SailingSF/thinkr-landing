const testimonials = [
    {
      name: "John Doe",
      role: "Shopify Store Owner",
      quote: "thinkr has revolutionized how I manage my online store. The AI recommendations are spot-on!",
    },
    {
      name: "Jane Smith",
      role: "E-commerce Manager",
      quote: "The customer service chatbot has reduced our response times and improved customer satisfaction.",
    },
  ]
  
  const Testimonials = () => {
    return (
      <section id="testimonials" className="py-20 bg-background text-text">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background-dark text-text-dark p-6 rounded-lg shadow-md">
                <p className="mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Testimonials
  
  