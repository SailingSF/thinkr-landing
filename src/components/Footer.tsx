import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="container mx-auto px-4 pb-16">
      <footer className="bg-black text-white py-16 rounded-2xl">
        <div className="container mx-auto px-12">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/thinkr_white_leftlogo.png"
                  alt="Thinkr Logo"
                  width={112}
                  height={32}
                  className="w-28 h-8"
                />
              </Link>
              <p className="text-gray-400 max-w-[300px]">Automate day-to-day ecommerce operations using AI agents.</p>
            </div>
            <div className="flex flex-col items-end space-y-4">
              <Link
                href="/signup"
                className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-6 py-2 rounded-lg transition-colors mb-8"
              >
                Sign Up
              </Link>
              <nav className="flex flex-col items-end space-y-2">
                <Link href="/company" className="hover:text-gray-400 transition-colors">
                  Company
                </Link>
                <Link href="/blog" className="hover:text-gray-400 transition-colors">
                  Blog
                </Link>
                <Link href="/contact" className="hover:text-gray-400 transition-colors">
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>

          <div className="flex gap-4 mb-12">
            <Link href="#" className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors" />
            <Link href="#" className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors" />
            <Link href="#" className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-800">
            <p className="text-gray-400">© 2025 thinkr. All rights reserved.</p>
            <Link href="/privacy" className="hover:text-gray-400 transition-colors mt-4 md:mt-0">
              Privacy Policy.
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

