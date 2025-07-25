"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { getLocaleFromPath, useTranslations } from "@/lib/i18n"

export default function Features() {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const t = useTranslations(locale)

  const features = [
    {
      title: t('features.inventory.title') as string,
      description: t('features.inventory.description') as string,
      href: "/learn-more#manage-inventory",
      image: "/usecases/ecommerce_agent_1.webp"
    },
    {
      title: t('features.growth.title') as string,
      description: t('features.growth.description') as string,
      href: "/learn-more#update-orders",
      image: "/usecases/ecommerce_agent_3.webp"
    },
    {
      title: t('features.dataAnalyst.title') as string,
      description: t('features.dataAnalyst.description') as string,
      href: "/learn-more#run-promotions",
      image: "/usecases/ecommerce_agent_2.webp"
    },
    {
      title: t('features.sales.title') as string,
      description: t('features.sales.description') as string,
      href: "/learn-more#create-collections",
      image: "/usecases/ecommerce_agent_4.webp"
    },
  ]

  return (
    <section className="py-4 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-16">
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] w-full overflow-hidden rounded-lg mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
              <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-lg mb-6">{feature.description}</p>
              <Link href={feature.href}>
                <Button textColor="hsl(var(--primary))" className="w-fit hover:bg-secondary/80 border-2 border-primary-600 bg-white text-primary-700 hover:bg-primary-50">
                  {t('features.cta') as string}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

