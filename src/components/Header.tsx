"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X, MessageSquare, Bot, BarChart3, Linkedin, ShoppingBag, BookOpen, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  // Close dropdowns when mobile menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setIsResourcesOpen(false)
      setIsChatOpen(false)
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
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-2 lg:space-x-4 xl:space-x-6 2xl:space-x-8 mx-8">
            <div className="relative group">
              <div 
                className="flex items-center space-x-1 cursor-pointer hover:text-gray-600 transition-colors group-hover:text-gray-600"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180`} />
              </div>
              <div className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-md shadow-lg py-4 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-in-out z-50">
                <div className="grid grid-cols-3 gap-4 px-4">
                  <a 
                    href="https://www.linkedin.com/company/thinkr-pro/about/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start space-x-3 p-4 hover:bg-gray-50 transition-colors rounded-lg group/item"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover/item:bg-blue-100 transition-colors">
                        <Linkedin className="w-5 h-5 text-blue-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover/item:text-blue-600 transition-colors">LinkedIn</h3>
                      <p className="text-sm text-gray-600">Follow our journey and latest updates</p>
                    </div>
                  </a>
                  <a 
                    href="https://apps.shopify.com/thinkr"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start space-x-3 p-4 hover:bg-gray-50 transition-colors rounded-lg group/item"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center group-hover/item:bg-green-100 transition-colors">
                        <ShoppingBag className="w-5 h-5 text-green-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover/item:text-green-600 transition-colors">Shopify App</h3>
                      <p className="text-sm text-gray-600">Install thinkr on your Shopify store</p>
                    </div>
                  </a>
                  <Link 
                    href="/learn-more"
                    className="flex items-start space-x-3 p-4 hover:bg-gray-50 transition-colors rounded-lg group/item"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center group-hover/item:bg-purple-100 transition-colors">
                        <BookOpen className="w-5 h-5 text-purple-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover/item:text-purple-600 transition-colors">Use Cases</h3>
                      <p className="text-sm text-gray-600">See how businesses succeed with thinkr</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div 
                className="flex items-center space-x-1 cursor-pointer hover:text-gray-600 transition-colors group-hover:text-gray-600"
              >
                <span>Features</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180`} />
              </div>
              <div className="absolute top-full mt-2 w-[800px] bg-white rounded-md shadow-lg py-6 left-1/2 -translate-x-1/2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-in-out z-50">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 px-6">
                  <Link 
                    href="/all-in-one-chat"
                    className="flex items-start space-x-3 p-4 hover:bg-gray-50 transition-colors rounded-lg group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <MessageSquare className="w-5 h-5 text-blue-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">All-in-one Chat</h3>
                      <p className="text-sm text-gray-600">Connect and chat with all your tools in one place</p>
                    </div>
                  </Link>
                  <Link 
                    href="/autopilot"
                    className="flex items-start space-x-3 p-4 hover:bg-gray-50 transition-colors rounded-lg group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                        <Bot className="w-5 h-5 text-purple-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Autopilot</h3>
                      <p className="text-sm text-gray-600">Let AI handle your routine tasks automatically</p>
                    </div>
                  </Link>
                  <Link 
                    href="/deep-reporting"
                    className="flex items-start space-x-3 p-4 hover:bg-gray-50 transition-colors rounded-lg group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                        <BarChart3 className="w-5 h-5 text-green-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Deep Reporting</h3>
                      <p className="text-sm text-gray-600">Get comprehensive analytics and insights</p>
                    </div>
                  </Link>
                  <Link 
                    href="/alert-agent"
                    className="flex items-start space-x-3 p-4 hover:bg-gray-50 transition-colors rounded-lg group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                        <Bell className="w-5 h-5 text-red-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">Alert Agent</h3>
                      <p className="text-sm text-gray-600">Never miss critical business moments with AI monitoring</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/company" className="hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/webinars" className="hover:text-gray-600 transition-colors">
              Webinars
            </Link>
            <Link href="/contact" className="hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden lg:block">
            <Button className="bg-primary hover:bg-primary-300 text-white px-5 sm:px-6 py-2 rounded-lg" asChild>
              <Link href="https://www.thinkrapp.com/">
                Sign Up
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-3 sm:space-x-4">
            <Button className="bg-primary hover:bg-primary-300 text-white px-4 sm:px-6 py-2 rounded-lg text-sm whitespace-nowrap" asChild>
              <Link href="https://www.thinkrapp.com/">
                Sign Up
              </Link>
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-200 rounded-md touch-manipulation transition-colors"
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg z-50">
            <div className="p-4 space-y-3">
              <div>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center justify-between w-full py-3 touch-manipulation transition-colors hover:text-gray-600"
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
                      className="flex items-start space-x-3 p-3 hover:bg-gray-50 transition-colors rounded-lg group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                          <Linkedin className="w-5 h-5 text-blue-500" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">LinkedIn</h3>
                        <p className="text-sm text-gray-600">Follow our journey and latest updates</p>
                      </div>
                    </a>
                    <a 
                      href="https://apps.shopify.com/thinkr"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start space-x-3 p-3 hover:bg-gray-50 transition-colors rounded-lg group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                          <ShoppingBag className="w-5 h-5 text-green-500" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Shopify App</h3>
                        <p className="text-sm text-gray-600">Install thinkr on your Shopify store</p>
                      </div>
                    </a>
                    <Link 
                      href="/learn-more"
                      className="flex items-start space-x-3 p-3 hover:bg-gray-50 transition-colors rounded-lg group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                          <BookOpen className="w-5 h-5 text-purple-500" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Use Cases</h3>
                        <p className="text-sm text-gray-600">See how businesses succeed with thinkr</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setIsChatOpen(!isChatOpen)}
                  className="flex items-center justify-between w-full py-3 touch-manipulation transition-colors hover:text-gray-600"
                  aria-expanded={isChatOpen}
                  aria-label="Toggle features menu"
                >
                  <span className="text-base">Features</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isChatOpen ? 'rotate-180' : ''}`} />
                </button>
                {isChatOpen && (
                  <div className="pl-4 py-2 space-y-3">
                    <Link 
                      href="/all-in-one-chat"
                      className="flex items-start space-x-3 p-3 hover:bg-gray-50 transition-colors rounded-lg group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                          <MessageSquare className="w-5 h-5 text-blue-500" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">All-in-one Chat</h3>
                        <p className="text-sm text-gray-600">Connect and chat with all your tools in one place</p>
                      </div>
                    </Link>
                    <Link 
                      href="/autopilot"
                      className="flex items-start space-x-3 p-3 hover:bg-gray-50 transition-colors rounded-lg group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                          <Bot className="w-5 h-5 text-purple-500" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Autopilot</h3>
                        <p className="text-sm text-gray-600">Let AI handle your routine tasks automatically</p>
                      </div>
                    </Link>
                    <Link 
                      href="/deep-reporting"
                      className="flex items-start space-x-3 p-3 hover:bg-gray-50 transition-colors rounded-lg group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                          <BarChart3 className="w-5 h-5 text-green-500" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Deep Reporting</h3>
                        <p className="text-sm text-gray-600">Get comprehensive analytics and insights</p>
                      </div>
                    </Link>
                    <Link 
                      href="/alert-agent"
                      className="flex items-start space-x-3 p-3 hover:bg-gray-50 transition-colors rounded-lg group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                          <Bell className="w-5 h-5 text-red-500" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">Alert Agent</h3>
                        <p className="text-sm text-gray-600">Never miss critical business moments with AI monitoring</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/company" className="block py-3 hover:text-gray-600 transition-colors text-base">
                About
              </Link>
              <Link href="/webinars" className="block py-3 hover:text-gray-600 transition-colors text-base">
                Webinars
              </Link>
              <Link href="/contact" className="block py-3 hover:text-gray-600 transition-colors text-base">
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

