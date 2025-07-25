"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { usePathname } from "next/navigation"
import { getLocaleFromPath, useTranslations } from "@/lib/i18n"

export default function Timeline() {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const t = useTranslations(locale)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="w-full container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4 leading-tight">
            {t('timeline.title') as string}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: t('timeline.subtitle') as string }} />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
            <Button asChild size="lg" className="w-full sm:w-auto group">
              <Link href="https://www.thinkr-app.com/">
                {t('timeline.cta') as string}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/all-in-one-chat">
                {t('common.learnMore') as string}
              </Link>
            </Button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex justify-center mt-8 [perspective:1000px]">
          <div className="transition-transform duration-500 ease-out hover:rotate-x-[-2deg] hover:rotate-y-[3deg]">
            <Image 
              src="/thinkr chat.png"
              alt={t('timeline.imageAlt') as string}
              width={1000}
              height={250}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 