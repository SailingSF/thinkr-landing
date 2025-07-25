"use client"

import React from 'react';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';
import { usePathname } from "next/navigation"
import { getLocaleFromPath, useTranslations } from "@/lib/i18n"

// --- Logos Data ---
const logos = [
  { name: 'Dupla', src: '/store-logos/dupla.png' },
  { name: 'Evergreen', src: '/store-logos/evergreen.png' },
  { name: 'Gutt', src: '/store-logos/gutt.png' },
  { name: 'Inside the House of Austria', src: '/store-logos/insidethehouseofaustria.png' },
  { name: 'Iselle', src: '/store-logos/iselle.png' },
  { name: 'Lumen & Leaf', src: '/store-logos/lumenandleaf.png' },
  { name: 'Nomad Threads', src: '/store-logos/nomadthreads.png' },
  { name: 'Velvet Harbor', src: '/store-logos/velvetharbor.png' },
  { name: 'Wewear', src: '/store-logos/wewear.png' },
];

const CombinedProof = () => {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const t = useTranslations(locale)
  const duplicatedLogos = [...logos, ...logos];

  const caseStudies = [
    {
      title: t('combinedProof.case1.title') as string,
      value: t('combinedProof.case1.value') as string,
      label: t('combinedProof.case1.label') as string,
      highlight: t('combinedProof.case1.highlight') as string
    },
    {
      title: t('combinedProof.case2.title') as string,
      value: t('combinedProof.case2.value') as string,
      label: t('combinedProof.case2.label') as string,
      highlight: t('combinedProof.case2.highlight') as string
    },
    {
      title: t('combinedProof.case3.title') as string,
      value: t('combinedProof.case3.value') as string,
      label: t('combinedProof.case3.label') as string,
      highlight: t('combinedProof.case3.highlight') as string
    },
    {
      title: t('combinedProof.case4.title') as string,
      value: t('combinedProof.case4.value') as string,
      label: t('combinedProof.case4.label') as string,
      highlight: t('combinedProof.case4.highlight') as string
    },
  ];

  return (
    <>
      {/* --- Logo Carousel Part --- */}
      <section className="pt-8 sm:pt-12 pb-10 sm:pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-lg sm:text-xl font-medium text-gray-600 tracking-tight">
              {t('combinedProof.logoSection.title') as string}
            </h3>
          </div>
          <div className="w-full overflow-hidden bg-transparent">
            <div className="relative mask-gradient">
              <div className="flex animate-infinite-scroll [animation-duration:40s]">
                {duplicatedLogos.map((logo, index) => (
                  <div key={`logo-${logo.name}-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 px-4 py-2" style={{ minWidth: '150px' }}>
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={150}
                      height={60}
                      className="object-contain h-12 sm:h-16 w-auto mx-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-400"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Section with Dark Cards --- */}
      <section className="pt-10 sm:pt-12 pb-16 sm:pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight">
              {t('combinedProof.statsSection.title') as string}
            </h2>
          </div>
          
          {/* Grid of Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={`case-${index}`} className="bg-gray-900 text-white p-6 rounded-2xl relative overflow-hidden group hover:bg-gray-800 transition-colors">
                {/* Case Study Title */}
                <h3 className="text-sm font-medium text-gray-300 mb-8 leading-relaxed relative z-10">
                  {study.title}
                </h3>
                
                {/* Statistics */}
                <div className="relative z-10 mt-auto">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-6xl sm:text-7xl font-bold text-primary leading-none">
                      {study.value}
                    </span>
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowUp className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    {study.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CombinedProof; 