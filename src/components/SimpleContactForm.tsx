import { Button } from "@/components/ui/button"

export default function SimpleContactForm() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left column - Text content */}
        <div className="space-y-4">
          <h2 className="text-3xl font-medium tracking-tight">Get in touch.</h2>
          <p className="text-gray-600">
            thinkr is a productivity game-changer. Teams are using it for everything from marketing to 
            inventory, ultimately saving time and resources.
          </p>
        </div>

        {/* Right column - Form */}
        <div>
          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="mt-1 block w-full rounded-md bg-gray-200 text-gray-800 px-4 py-2 placeholder:text-gray-600"
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-200 text-gray-800 px-4 py-2 placeholder:text-gray-600"
                  placeholder="autopilot@thinkrapp.com"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full text-white bg-black hover:bg-gray-800">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
} 