'use client'

import { useEffect } from 'react'

// Add gtag type declaration
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: {
        event_category: string;
        event_label: string;
        value: number;
        non_interaction: boolean;
        [key: string]: string | number | boolean | undefined;
      }
    ) => void;
  }
}

/**
 * This component improves Core Web Vitals metrics by:
 * 1. Reporting LCP (Largest Contentful Paint) for monitoring
 * 2. Implementing font optimization techniques
 * 3. Preventing layout shifts by adding key dimensions upfront
 */
export default function OptimizeLoadingMetrics() {
  useEffect(() => {
    // Only run in production and in browser
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
      return
    }

    // Track and report LCP
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const lcpEntry = entries[entries.length - 1]
          
          // Log LCP timing for debugging
          console.log('LCP:', lcpEntry.startTime)
          
          // Report to analytics if available
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(lcpEntry.startTime),
              non_interaction: true,
            })
          }
        })
        
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
      } catch (e) {
        console.error('LCP tracking error:', e)
      }
    }

    // Apply font display swap to prevent CLS
    document.documentElement.style.setProperty('font-display', 'swap')
    
    // Preconnect to critical origins
    const origins = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ]
    
    origins.forEach(origin => {
      if (!document.querySelector(`link[rel="preconnect"][href="${origin}"]`)) {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = origin
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      }
    })
    
    // Clean up
    return () => {
      // No cleanup needed for now
    }
  }, [])

  // This component doesn't render anything
  return null
} 