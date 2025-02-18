'use client'

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
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
    <div className={`container mx-auto px-4 ${simple ? 'py-8' : 'py-16'} ${fullWidth ? 'max-w-7xl' : 'max-w-6xl'}`}>
      <div className={`grid ${showContactInfo ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-12`}>
        {/* Left Column - Contact Form */}
        <div className="space-y-8">
          {!simple && !title && (
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight">Get in touch.</h1>
              <p className="text-lg text-muted-foreground">
                thinkr is a productivity game-changer. Teams are using it for everything from marketing to 
                inventory, ultimately saving time and resources.
              </p>
              {showCompanyLink && (
                <Link 
                  href="/company" 
                  className="inline-block text-[#8B5CF6] hover:text-[#7C3AED] font-medium"
                >
                  Find out more about our company →
                </Link>
              )}
            </div>
          )}

          {title && (
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
              {description && (
                <p className="text-lg text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {!simple && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="mt-1 block w-full rounded-md border border-input bg-background px-4 py-2"
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
                      className="mt-1 block w-full rounded-md border border-input bg-background px-4 py-2"
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
                    className="mt-1 block w-full rounded-md border border-input bg-background px-4 py-2"
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
                  className="mt-1 block w-full rounded-md border border-input bg-background px-4 py-2"
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
                      className="mt-1 block w-full rounded-md border border-input bg-background px-4 py-2"
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
                      className="mt-1 block w-full rounded-md border border-input bg-background px-4 py-2"
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
                  className="mt-1 block w-full rounded-md border border-input bg-background px-4 py-2"
                  placeholder={simple ? "I'm interested in learning more about thinkr..." : "Tell us about your needs and how we can help..."}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <Button type="submit" className="w-full text-white bg-primary hover:bg-primary-300">
              {buttonText || (simple ? 'Get Started' : 'Submit')}
            </Button>
          </form>
        </div>

        {/* Right Column - Additional Contact Info */}
        {showContactInfo && !simple && (
          <div>
            <div className="bg-muted p-8 rounded-lg space-y-6">
              <h2 className="text-2xl font-semibold">Other ways to reach us</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">support@thinkrapp.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div>
                    <h3 className="font-medium">Office</h3>
                    <p className="text-muted-foreground">
                      123 Innovation Drive<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 