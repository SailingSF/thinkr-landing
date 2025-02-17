import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const Header = () => {
  return (
    <div className="w-full px-4 pt-8 pb-4">
      <header className="max-w-[1200px] mx-auto bg-header rounded-lg">
        <nav className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/thinkr_black_leftlogo.png"
              alt="Thinkr Logo"
              width={112}
              height={32}
              className="w-28 h-8"
            />
          </Link>

          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <Link href="/company" className="hover:text-gray-600">
              Company
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
            <Link
              href="/signup"
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-6 py-2 rounded-lg transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header

