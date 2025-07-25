"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { getLocaleFromPath, useTranslations } from "@/lib/i18n"

const Footer = () => {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const t = useTranslations(locale)
  return (
    <div className="container mx-auto px-4 pb-8 sm:pb-16">
      <footer className="bg-black text-white py-8 sm:py-12 md:py-16 rounded-2xl">
        <div className="container mx-auto px-4 sm:px-8 md:px-12">
          <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12 gap-6">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/thinkr_white_leftlogo.png"
                  alt="Thinkr Logo"
                  width={112}
                  height={32}
                  className="w-24 sm:w-28 h-auto"
                  priority
                />
              </Link>
              <p className="text-gray-400 max-w-[300px] text-sm sm:text-base">{t('footer.description') as string}</p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col md:items-end space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-0 md:space-y-4">
                              <Link
                  href="https://www.thinkrapp.com/"
                  className="bg-primary hover:bg-primary-300 text-white px-6 py-3 rounded-lg transition-colors text-center min-h-[44px] flex items-center justify-center sm:max-w-[150px] md:max-w-none w-full md:w-auto"
                >
                  {t('header.cta') as string}
                </Link>
              <Link
                href="https://apps.shopify.com/thinkr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors text-sm sm:text-base"
              >
                Shopify App Store
              </Link>
                              <nav className="hidden md:flex flex-col items-end space-y-2">
                  <Link href="/company" className="hover:text-gray-400 transition-colors">
                    {t('header.nav.company') as string}
                  </Link>
                  <Link href="/blog" className="hover:text-gray-400 transition-colors">
                    {t('header.nav.blog') as string}
                  </Link>
                  <Link href="/contact" className="hover:text-gray-400 transition-colors">
                    {t('header.nav.contact') as string}
                  </Link>
                </nav>
            </div>
          </div>

          {/* Mobile Nav Links */}
          <nav className="md:hidden flex flex-wrap gap-x-6 gap-y-3 mb-8">
            <Link href="/company" className="hover:text-gray-400 transition-colors text-sm">
              {t('header.nav.company') as string}
            </Link>
            <Link href="/blog" className="hover:text-gray-400 transition-colors text-sm">
              {t('header.nav.blog') as string}
            </Link>
            <Link href="/contact" className="hover:text-gray-400 transition-colors text-sm">
              {t('header.nav.contact') as string}
            </Link>
          </nav>

          <div className="flex gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Link 
              href="https://x.com/thinkrautopilot" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
              aria-label="X (formerly Twitter)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
              </svg>
            </Link>
            <Link 
              href="https://www.linkedin.com/company/thinkr-pro/about/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
              </svg>
            </Link>
            <Link 
              href="https://www.youtube.com/channel/UC6k2SELVkdzgSqyQ-5nOExw" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
              aria-label="YouTube"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
              </svg>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 sm:pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-xs sm:text-sm">{t('footer.copyright') as string}</p>
            <Link href="/privacy" className="hover:text-gray-400 transition-colors mt-3 sm:mt-0 text-xs sm:text-sm">
              {t('common.privacyPolicy') as string}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

