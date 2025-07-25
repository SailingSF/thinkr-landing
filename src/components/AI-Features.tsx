"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, Bot, BarChart3, Bell } from "lucide-react"
import { usePathname } from "next/navigation"
import { getLocaleFromPath, useTranslations } from "@/lib/i18n"

const getColorClasses = (colorScheme: string) => {
  switch (colorScheme) {
    case 'blue':
      return {
        button: 'bg-blue-600 hover:bg-blue-700 text-white'
      }
    case 'purple':
      return {
        button: 'bg-purple-600 hover:bg-purple-700 text-white'
      }
    case 'green':
      return {
        button: 'bg-green-600 hover:bg-green-700 text-white'
      }
    case 'red':
      return {
        button: 'bg-red-600 hover:bg-red-700 text-white'
      }
    default:
      return {
        button: 'bg-gray-900 hover:bg-black text-white'
      }
  }
}

export default function AIFeatures() {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const t = useTranslations(locale)

  const tools = [
    {
      title: t('aiFeatures.chat.title') as string,
      description: t('aiFeatures.chat.description') as string,
      colorScheme: "blue",
      href: "/all-in-one-chat",
      icon: (
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-blue-600" />
        </div>
      ),
      features: t('aiFeatures.chat.features') as string[]
    },
    {
      title: t('aiFeatures.autopilot.title') as string,
      description: t('aiFeatures.autopilot.description') as string,
      colorScheme: "purple",
      href: "/autopilot",
      icon: (
        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
          <Bot className="w-5 h-5 text-purple-600" />
        </div>
      ),
      features: t('aiFeatures.autopilot.features') as string[]
    },
    {
      title: t('aiFeatures.reporting.title') as string,
      description: t('aiFeatures.reporting.description') as string,
      colorScheme: "green",
      href: "/deep-reporting",
      icon: (
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-green-600" />
        </div>
      ),
      features: t('aiFeatures.reporting.features') as string[]
    },
    {
      title: t('aiFeatures.alerts.title') as string,
      description: t('aiFeatures.alerts.description') as string,
      colorScheme: "red",
      href: "/alert-agent",
      icon: (
        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
          <Bell className="w-5 h-5 text-red-600" />
        </div>
      ),
      features: t('aiFeatures.alerts.features') as string[]
    },
  ]

  return (
    <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-32 pb-12 sm:pb-16 md:pb-24 lg:pb-48">
      <div className="w-full container mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium mb-4 text-center leading-tight text-gray-900">
            {t('aiFeatures.title') as string}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {tools.map((tool, index) => {
            const colors = getColorClasses(tool.colorScheme)
            return (
              <div 
                key={index} 
                className="group flex flex-col h-full bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gray-100 hover:border-gray-300"
              >
                <div className="flex items-center mb-6">
                  {tool.icon}
                  <h3 className="text-xl font-semibold ml-3 text-gray-900">
                    {tool.title}
                  </h3>
                </div>
                
                <div className="flex-grow mb-6">
                  <p className="text-base text-black mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button asChild className={`w-full ${colors.button} shadow-sm`}>
                  <Link href={tool.href}>
                    {t('common.learnMore') as string}
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

