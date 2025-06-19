import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// Define the testimonial type for clarity
interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
  type: string;
}

const testimonials: Testimonial[] = [
  // Removed Daniel Pierce and Saviera Joeal testimonials
]

const shopifyReviews = [
  {
    name: "Direct Candle Supply",
    location: "United States",
    usage: "3 months using the app",
    rating: 5,
    date: "May 28, 2025",
    quote: "I've been using thinkr for a while now and it's been super useful. It gives clear advice based on my store's data and explains how to actually fix things. I've caught a few issues early thanks to the alerts, and I really like how simple the interface is. It just makes managing everything a lot easier.",
    verified: true
  },
  {
    name: "Maltyverse",
    location: "United Kingdom", 
    usage: "About 1 month using the app",
    rating: 5,
    date: "May 26, 2025",
    quote: "Nice app. It provides useful and actionable advice based on different metrics, and teaches you how to implement the changes. The app also notifies you about some potential issues and ways to fix them. The interface is clean and easy to use.",
    verified: true
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 bg-white font-sans">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight whitespace-nowrap font-sans">
              What Our Customers Say About Their Experience
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
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
                <blockquote className="text-xl text-gray-900 mb-6 leading-relaxed font-sans">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div>
                  <h4 className="font-medium text-lg font-sans">{testimonial.name}</h4>
                  <p className="text-gray-600 font-sans">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 font-sans">Shopify App Store Reviews</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {shopifyReviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-lg text-gray-900 font-sans">{review.name}</h4>
                      {review.verified && (
                        <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-sans">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2 font-sans">
                      <span>{review.location}</span>
                      <span>•</span>
                      <span>{review.usage}</span>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <div className="text-xs text-gray-500 font-sans">{review.date}</div>
                </div>
                <blockquote className="text-gray-800 leading-relaxed font-sans">
                  &quot;{review.quote}&quot;
                </blockquote>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-4">
              <Button 
                asChild
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] min-w-[280px] h-12 font-sans"
              >
                <Link 
                  href="https://apps.shopify.com/thinkr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Shopify App Store</span>
                  </div>
                  View All Reviews
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
  
  