import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useCases } from "@/data/learnMoreUseCases";

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-tight text-gray-900">
            Real Results for Real Businesses
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl md:text-2xl mt-2 mb-8 sm:mb-12">
            Discover how e-commerce businesses like yours are using thinkr to automate operations, boost revenue, and deliver exceptional customer experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link href="https://apps.shopify.com/thinkr" target="_blank" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3">
                Start Your Success Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.id}
                id={useCase.id}
                className="scroll-mt-24"
              >
                <div className={`flex flex-col lg:flex-row gap-8 sm:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Image Section - Always First on Mobile */}
                  <div className="flex-1 min-w-0 w-full lg:w-auto order-1 lg:order-none mb-8 lg:mb-0">
                    <div className="relative aspect-square w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={useCase.imagePath}
                        alt={useCase.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 min-w-0 space-y-6 sm:space-y-8 order-2 lg:order-none">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-medium mb-2 sm:mb-3">{useCase.title}</h3>
                      <p className="text-lg sm:text-xl text-primary font-medium">{useCase.subtitle}</p>
                    </div>
                    
                    <p className="text-base sm:text-lg text-gray-600">{useCase.description}</p>
                    
                    <div className="bg-gray-100 rounded-xl p-4 sm:p-6 shadow-sm">
                      <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">The Challenge</h4>
                      <p className="text-sm sm:text-base text-gray-600">{useCase.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">The Solution</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {useCase.solution.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-sm sm:text-base text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">The Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {useCase.results.metrics.map((metric, i) => (
                          <div key={i} className="bg-gray-100 rounded-xl p-4 sm:p-6 text-center shadow-sm">
                            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{metric.value}</div>
                            <div className="text-xs sm:text-sm text-gray-600">{metric.subtext}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 sm:pt-4">
                      <Link href="https://apps.shopify.com/thinkr" target="_blank" className="block w-full sm:w-auto">
                        <Button 
                          size="lg"
                          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
                        >
                          Achieve Similar Results
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your E-commerce Business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Join hundreds of successful businesses using thinkr to automate operations and drive growth
          </p>
          <Link href="https://apps.shopify.com/thinkr" target="_blank" className="block w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
