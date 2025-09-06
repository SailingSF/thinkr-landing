"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { getLocaleFromPath, useTranslations } from "@/lib/i18n"

const Hero = () => {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const t = useTranslations(locale)

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 text-center overflow-hidden">
      {/* Enhanced gradient background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-yellow-50/30 to-pink-50/40"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-pulse"></div>
      
      {/* Floating geometric elements for visual interest */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100/20 rounded-full blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-100/30 rounded-full blur-lg animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-pink-100/25 rounded-full blur-md animate-bounce" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Modern status indicator */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-100">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 font-medium">Live & Autonomous</span>
          </div>
        </div>

        {/* Main headline with enhanced typography */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 sm:mb-8 md:mb-10 lg:mb-12 mx-auto leading-[0.9] max-w-4xl lg:max-w-6xl
          animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out motion-reduce:animate-none motion-reduce:opacity-100"
        >
          <span className="block text-gray-900">The unfair advantage of</span>
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-light">
            Autonomous Ecommerce
          </span>
        </h1>
        
        {/* Enhanced subheading with better spacing */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-10 sm:mb-12 md:mb-16 lg:mb-20 max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed font-light
        animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out delay-200 motion-reduce:animate-none motion-reduce:opacity-100">
          <span className="block md:hidden">The world's first AI that builds, manages,</span>
          <span className="block md:hidden">and scales your online business for you.</span>
          <span className="hidden md:block">The world's first AI that builds, manages, and scales your online business for you.</span>
        </p>
        
        {/* Enhanced CTA section */}
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 mx-auto
        animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out delay-400 motion-reduce:animate-none motion-reduce:opacity-100">
          <Button
            asChild
            variant="default"
            size="lg"
            className="group bg-black hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300 w-auto min-w-[200px] sm:min-w-[220px] md:min-w-[240px] lg:min-w-[260px] text-base sm:text-lg md:text-xl lg:text-2xl px-8 sm:px-10 md:px-12 lg:px-14 py-4 sm:py-5 md:py-6 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Link href="https://www.thinkrapp.com/">
              Start free trial
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Button>
          
          {/* Trust indicator */}
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>10-day free trial</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

