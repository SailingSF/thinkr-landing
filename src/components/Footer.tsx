import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-background-dark text-text-dark py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold text-primary">
            thinkr
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-primary">
            Contact
          </Link>
        </div>
        <div className="mt-4 md:mt-0">© {new Date().getFullYear()} thinkr. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer

