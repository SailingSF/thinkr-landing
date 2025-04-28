import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Timeline() {
  return (
    <div className="w-full container mx-auto px-4 pb-8 md:pb-14">
      <div className="text-center mb-10 sm:mb-16 md:mb-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-tight">
          <span className="block">All In One Chat</span>
          <span className="block text-gray-600 text-2xl sm:text-3xl md:text-4xl mt-1">Connect to 300+ integrations and understand your store universe.</span>
        </h2>
        <Link href="https://www.thinkrapp.com/" className="inline-block mt-8">
          <div className="text-primary hover:text-primary/80 transition-colors text-base sm:text-lg font-medium">
            Try it now →
          </div>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto flex justify-center mt-8 md:mt-12">
        <Image 
          src="/thinkr chat.png"
          alt="Thinkr chat interface showing connected apps and a chat input field"
          width={1000}
          height={250}
          className="rounded-lg shadow-lg w-full h-auto"
          priority
        />
      </div>
    </div>
  )
} 