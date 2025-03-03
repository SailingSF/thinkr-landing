import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function BlogComingSoon() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-24">
        <div className="max-w-3xl w-full text-center">
          <h1 className="section-title mb-6">Our Blog is Coming Soon</h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            We&apos;re working on creating valuable content to help e-commerce entrepreneurs
            use AI to streamline their operations and grow their businesses.
          </p>
          
          <div className="w-24 h-24 mx-auto mb-10">
            <div className="rounded-full bg-primary-100 p-5 flex items-center justify-center">
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary-500"
              >
                <path 
                  d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-medium mb-4">Subscribe for Updates</h2>
            <p className="text-gray-500 mb-6">
              Be the first to know when our blog launches with exclusive insights and tips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          
          <Link 
            href="/"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path 
                d="M19 12H5M5 12L12 19M5 12L12 5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}