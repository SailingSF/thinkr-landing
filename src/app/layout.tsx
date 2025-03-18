import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

// Get GTM ID from environment variable
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-KSLVDRZF'

export const metadata: Metadata = {
  title: "thinkr - Automate Everyday Shopify Operations",
  description: "One-click automations for ecommerce.",
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
      </head>
      {/* Google Tag Manager - Head Section */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');`}
      </Script>
      <body className={inter.className}>
        {/* Google Tag Manager - Body Section (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `}} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

