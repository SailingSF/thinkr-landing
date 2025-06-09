import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"

// Font with preload enabled
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
})

// Get tracking IDs from environment variable
const gaMeasurementId = process.env.NEXT_PUBLIC_GTM_ID || 'G-1234567890'
const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '1234567890'

export const metadata: Metadata = {
  title: 'thinkr | AI Agent for Shopify Store Operations',
  description: 'thinkr is an AI agent for ecommerce that puts Shopify operations on autopilot. Save time with one-click automations for your store.',
  metadataBase: new URL('https://thinkr.pro'),
  keywords: "Shopify automation, AI ecommerce, Shopify operations, ecommerce automation, thinkr, AI agent",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'thinkr | AI Agent for Shopify Store Operations',
    description: 'thinkr is an AI agent for ecommerce that puts Shopify operations on autopilot. Save time with one-click automations for your store.',
    url: 'https://thinkr.pro',
    siteName: 'thinkr',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'thinkr',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: 'thinkr | AI Agent for Shopify Store Operations',
    description: 'thinkr is an AI agent for ecommerce that puts Shopify operations on autopilot. Save time with one-click automations for your store.',
    images: ['/og-image.webp'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification',
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#8C74FF" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.thinkrapp.com" />
        {/* Add preconnect for Google Fonts with crossOrigin */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/hero_image_3.svg" type="image/svg+xml" fetchPriority="high" />
        <link rel="preload" as="image" href="/usecase1-operations.webp" type="image/webp" fetchPriority="high" />
      </head>
      <body className={inter.className}>
        {/* Removed OptimizeLoadingMetrics for performance improvements */}
        
        {/* Google Tag Manager - Body Section (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=${gaMeasurementId}"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `}} />
        {/* Meta Pixel - Body Section (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1" />
        `}} />
        {children}
        {/* Core Analytics only */}
        <Analytics />
        <SpeedInsights />
        {/* Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gaMeasurementId}');`}
        </Script>
        {/* Meta Pixel Script */}
        <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${fbPixelId}');
          fbq('track', 'PageView');
        `}
        </Script>
      </body>
    </html>
  )
}

