"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  // Close resource dropdown when mobile menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setIsResourcesOpen(false)
    }
  }, [isMenuOpen])

  return (
    <div className="w-full px-4 pt-6 sm:pt-8 pb-4">
      <header className="max-w-[1200px] mx-auto bg-gray-100 rounded-lg relative">
        <nav className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/thinkr_black_leftlogo.png"
              alt="Thinkr Logo"
              width={112}
              height={32}
              className="w-24 sm:w-28 h-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between space-x-4 sm:space-x-8 md:space-x-16 lg:space-x-32">
            <div className="relative">
              <div 
                className="flex items-center space-x-1 cursor-pointer"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              {isResourcesOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <a 
                    href="https://www.linkedin.com/company/thinkr-pro/about/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://apps.shopify.com/thinkr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Shopify App
                  </a>
                  <a 
                    href="/learn-more"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Learn More
                  </a>
                </div>
              )}
            </div>
            <Link href="/company" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
            <Button className="bg-primary hover:bg-primary-300 text-white px-5 sm:px-6 py-2 rounded-lg" asChild>
              <Link href="https://www.thinkrapp.com/">
                Sign Up
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-3 sm:space-x-4">
            <Button className="bg-primary hover:bg-primary-300 text-white px-4 sm:px-6 py-2 rounded-lg text-sm whitespace-nowrap" asChild>
              <Link href="https://www.thinkrapp.com/">
                Sign Up
              </Link>
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-200 rounded-md touch-manipulation"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg z-50">
            <div className="p-4 space-y-3">
              <div>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center justify-between w-full py-3 touch-manipulation"
                  aria-expanded={isResourcesOpen}
                  aria-label="Toggle resources menu"
                >
                  <span className="text-base">Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isResourcesOpen && (
                  <div className="pl-4 py-2 space-y-3">
                    <a 
                      href="https://www.linkedin.com/company/thinkr-pro/about/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block py-3 hover:text-gray-600"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://apps.shopify.com/thinkr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block py-3 hover:text-gray-600"
                    >
                      Shopify App
                    </a>
                    <a 
                      href="/learn-more"
                      className="block py-3 hover:text-gray-600"
                    >
                      Learn More
                    </a>
                  </div>
                )}
              </div>
              <Link href="/company" className="block py-3 hover:text-gray-600 text-base">
                About
              </Link>
              <Link href="/contact" className="block py-3 hover:text-gray-600 text-base">
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

export default Header

