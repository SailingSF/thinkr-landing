import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import OptimizeLoadingMetrics from "@/components/OptimizeLoadingMetrics"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Optimize font loading
  fallback: ['system-ui', 'sans-serif'], // Provide fallback fonts
})

// Get GTM ID from environment variable
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-KSLVDRZF'

export const metadata: Metadata = {
  title: "thinkr - Automate Everyday Shopify Operations",
  description: "thinkr is an AI agent for ecommerce that puts Shopify operations on autopilot. Save time with one-click automations for your store.",
  keywords: "Shopify automation, AI ecommerce, Shopify operations, ecommerce automation, thinkr, AI agent",
  openGraph: {
    title: "thinkr - Automate Everyday Shopify Operations",
    description: "thinkr is an AI agent for ecommerce that puts Shopify operations on autopilot. Save time with one-click automations for your store.",
    type: "website",
    locale: "en_US",
    url: "https://www.thinkrapp.com/",
    siteName: "thinkr",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "thinkr - Automate Everyday Shopify Operations"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "thinkr - Automate Everyday Shopify Operations",
    description: "thinkr is an AI agent for ecommerce that puts Shopify operations on autopilot. Save time with one-click automations for your store.",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.thinkrapp.com/",
  },
  verification: {
    google: "google-site-verification-code",
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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#8C74FF" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="author" content="thinkr" />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.thinkrapp.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.thinkrapp.com" />
      </head>
      <body className={inter.className}>
        {/* Performance optimization components */}
        <OptimizeLoadingMetrics />
        
        {/* Google Tag Manager - Body Section (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `}} />
        {children}
        <Analytics />
        {/* Google Tag Manager - Script Section moved here for better performance */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      </body>
    </html>
  )
}

