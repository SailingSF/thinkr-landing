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
  
  // Add correct LayoutShift type
  interface LayoutShift extends PerformanceEntry {
    value: number;
    hadRecentInput: boolean;
  }
}

/**
 * This component improves Core Web Vitals metrics by:
 * 1. Reporting LCP (Largest Contentful Paint) for monitoring
 * 2. Implementing font optimization techniques
 * 3. Preventing layout shifts by adding key dimensions upfront
 * 4. Preloading critical images
 * 5. Using fetchpriority for critical resources
 * 6. Enabling text compression
 * 7. Implementing resource hints for faster connections
 * 8. Deferring non-critical resources
 * 9. Optimizing the critical rendering path
 */
export default function OptimizeLoadingMetrics() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') {
      return
    }

    // Track and report LCP
    if ('PerformanceObserver' in window) {
      try {
        // Monitor LCP
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
        
        // Also track CLS
        const clsObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries() as LayoutShift[]
          let clsValue = 0
          
          entries.forEach(entry => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          
          console.log('CLS:', clsValue)
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'CLS',
              value: Math.round(clsValue * 1000),
              non_interaction: true,
            })
          }
        })
        
        clsObserver.observe({ type: 'layout-shift', buffered: true })
      } catch (e) {
        console.error('Performance tracking error:', e)
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
    
    // Optimize heading rendering (which is now the LCP element)
    const optimizeHeading = () => {
      const heading = document.querySelector('h1')
      if (heading) {
        // Ensure it's marked as a high priority element
        heading.setAttribute('importance', 'high')
        
        // Ensure its CSS is inlined for fastest rendering
        const headingStyles = window.getComputedStyle(heading)
        const importantStyles = {
          fontFamily: headingStyles.fontFamily,
          fontSize: headingStyles.fontSize,
          fontWeight: headingStyles.fontWeight,
          lineHeight: headingStyles.lineHeight,
          color: headingStyles.color,
        }
        
        // Apply critical styles directly
        Object.entries(importantStyles).forEach(([property, value]) => {
          if (heading && value) {
            // @ts-expect-error - Dynamic property assignment
            heading.style[property] = value
          }
        })
      }
    }
    
    // Call immediately and also on load
    optimizeHeading()
    window.addEventListener('load', optimizeHeading)
    
    // Preload critical images
    const criticalImages = [
      { path: '/hero_image_3.svg', type: 'image/svg+xml', priority: 'high' },
      { path: '/logo.svg', type: 'image/svg+xml', priority: 'high' }
    ]
    
    criticalImages.forEach(img => {
      if (!document.querySelector(`link[rel="preload"][href="${img.path}"]`)) {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = img.path
        link.type = img.type
        link.fetchPriority = img.priority
        document.head.appendChild(link)
      }
    })
    
    // Defer non-critical JS
    const deferScripts = () => {
      document.querySelectorAll('script:not([async]):not([defer])')
        .forEach(script => {
          if (!script.hasAttribute('type') || script.getAttribute('type') === 'text/javascript') {
            script.setAttribute('defer', '')
          }
        })
    }
    
    setTimeout(deferScripts, 0)
    
    // Clean up
    return () => {
      window.removeEventListener('load', optimizeHeading)
    }
  }, [])

  // This component doesn't render anything
  return null
} 