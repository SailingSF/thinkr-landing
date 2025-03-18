'use client'

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface ContactFormProps {
  showCompanyLink?: boolean;
  fullWidth?: boolean;
  showContactInfo?: boolean;
  simple?: boolean;
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function ContactForm({ 
  showCompanyLink = true, 
  fullWidth = false,
  showContactInfo = true,
  simple = false,
  title,
  description,
  buttonText
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subject = encodeURIComponent('Contact Form Submission')
    const body = encodeURIComponent(`
${simple ? `Name: ${formData.name}` : `Name: ${formData.firstName} ${formData.lastName}`}
Email: ${formData.email}
${!simple ? `Company: ${formData.company}
Job Title: ${formData.jobTitle}` : ''}
Message: ${formData.message}
    `)
    
    window.location.href = `mailto:edu@thinkr.pro?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <div className={`container mx-auto px-4 ${simple ? 'py-6 sm:py-8' : 'py-8 sm:py-12 md:py-16'} ${fullWidth ? 'max-w-7xl' : 'max-w-6xl'}`}>
      <div className={`grid ${showContactInfo ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-8 md:gap-12`}>
        {/* Left Column - Contact Form */}
        <div className="space-y-6 sm:space-y-8">
          {!simple && !title && (
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Get in touch.</h1>
              <p className="text-base sm:text-lg text-muted-foreground">
                thinkr is a productivity game-changer. Teams are using it for everything from marketing to 
                inventory, ultimately saving time and resources.
              </p>
              {showCompanyLink && (
                <Link 
                  href="/company" 
                  className="inline-block text-[#8B5CF6] hover:text-[#7C3AED] font-medium text-sm sm:text-base"
                >
                  Find out more about our company →
                </Link>
              )}
            </div>
          )}

          {title && (
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
              {description && (
                <p className="text-base sm:text-lg text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {!simple && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="mt-1 block w-full rounded-md border border-input bg-background px-4 py-3 min-h-[44px]"
                      placeholder="Jane"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="mt-1 block w-full rounded-md border border-input bg-background px-4 py-3 min-h-[44px]"
                      placeholder="Doe"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              {simple && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border border-input bg-background px-4 py-3 min-h-[44px]"
                    placeholder="Jane Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  {simple ? 'Email' : 'Work Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border border-input bg-background px-4 py-3 min-h-[44px]"
                  placeholder={simple ? 'you@example.com' : 'you@company.com'}
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {!simple && (
                <>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="mt-1 block w-full rounded-md border border-input bg-background px-4 py-3 min-h-[44px]"
                      placeholder="Acme Inc."
                      required
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      className="mt-1 block w-full rounded-md border border-input bg-background px-4 py-3 min-h-[44px]"
                      placeholder="Product Manager"
                      value={formData.jobTitle}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={simple ? 3 : 4}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-4 py-3"
                  placeholder={simple ? "I'm interested in learning more about thinkr..." : "Tell us about your needs and how we can help..."}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full text-white bg-primary hover:bg-primary-300 py-3 min-h-[44px]"
            >
              {buttonText || (simple ? 'Get Started' : 'Submit')}
            </Button>
          </form>
        </div>

        {/* Right Column - Additional Contact Info */}
        {showContactInfo && !simple && (
          <div>
            <div className="bg-muted p-6 sm:p-8 rounded-lg space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold">Get in touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium text-base sm:text-lg">Email</h3>
                    <a 
                      href="mailto:support@thinkrapp.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors text-sm sm:text-base"
                    >
                      support@thinkrapp.com
                    </a>
                    <p className="text-muted-foreground mt-2 text-xs sm:text-sm">
                      We typically respond within 24 hours on business days.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
                <h3 className="font-medium mb-2 text-base">Follow us</h3>
                <div className="flex space-x-3 sm:space-x-4">
                  <a 
                    href="https://x.com/thinkrautopilot" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-muted-foreground/20 rounded-lg hover:bg-muted-foreground/30 transition-colors flex items-center justify-center"
                    aria-label="X (formerly Twitter)"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/thinkr-pro/about/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-muted-foreground/20 rounded-lg hover:bg-muted-foreground/30 transition-colors flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.youtube.com/channel/UC6k2SELVkdzgSqyQ-5nOExw" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-muted-foreground/20 rounded-lg hover:bg-muted-foreground/30 transition-colors flex items-center justify-center"
                    aria-label="YouTube"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 