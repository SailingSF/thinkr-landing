"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Video, ArrowRight, Zap } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const WebinarsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    webinarInterest: "",
    phone: ""
  })

  const [agreements, setAgreements] = useState({
    notifications: false,
    privacy: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setAgreements(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData, agreements)
  }

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scrollToForm = () => {
    if (!isMounted) return
    const formElement = document.getElementById('webinar-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="order-1 lg:order-1">
              {/* Shopify Logo */}
              <div className="mb-6">
                <img 
                  src="/shopify_logo_black.png" 
                  alt="Shopify" 
                  className="h-16 mb-4"
                />
              </div>
              
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
              <Video className="w-4 h-4 mr-2" />
              Live Learning Sessions for Ecommerce Growth
            </div>
            
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                Master Your Reporting & Alerts{" "}
                <span className="text-primary">with AI-Powered Automation</span>
            </h1>
            
              <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Join our expert-led webinars to discover how thinkr's AI solutions can transform your Shopify store operations, boost sales, and streamline your workflow.
            </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                <div className="flex items-center text-red-600 text-lg font-medium">
                  <Calendar className="w-6 h-6 mr-2 flex-shrink-0 text-red-600" />
                  <span>Wednesday July 30th</span>
                </div>
                <div className="flex items-center text-red-600 text-lg font-medium">
                  <Users className="w-6 h-6 mr-2 flex-shrink-0 text-red-600" />
                  <span>Live Q&A</span>
                </div>
              </div>

            <Button 
              size="lg" 
                className="bg-primary hover:bg-primary-300 text-white px-6 py-3 text-base rounded-lg"
              onClick={scrollToForm}
            >
              Register for Free!
                <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            </div>

            {/* Right Column - Image */}
            <div className="order-2 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/webinar_image.jpg" 
                  alt="E-commerce AI Automation Webinar" 
                  className="w-full h-120 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Two-Column Content & Registration Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  What Will We Cover in Our AI-Powered E-commerce Webinar?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Join our expert-led session where in just 40 minutes, you'll discover how to transform from reactive spreadsheet juggling to masterful AI-powered automation. Learn how to chat with your data, set up proactive alerts, and automate reporting to reclaim up to 16 hours per week.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-700">Introduction to AI-Powered Automation  for E-commerce</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-700">Leveraging Data without the Headache</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-700">Your Automated 24/7 Watchdog: AI Agents and Proactive Alerts</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-700">Automated Reporting: Goodbye Spreadsheets, Hello Freedom</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-700">Live Demo: Setting Up Your First Automated Report in Under 5 Minutes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-700">Q&A Session with thinkr AI Automation Experts</span>
                </div>
              </div>

              {/* Bonus Section */}
              <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Bonus: Exclusive Access</h3>
                    <p className="text-gray-700">
                      All attendees will receive a free 14-day trial of thinkr's AI automation platform and a comprehensive "From Reactive to Masterful" implementation guide valued at $297.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500">
                *Terms and conditions apply. Find complete details in our privacy policy and terms of service.
              </p>
            </div>

            {/* Right Column - Registration Form */}
            <div id="webinar-form" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Register for the Webinar</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    value={formData.role}
                    onChange={handleInputChange}
                  >
                    <option value="">Please Select</option>
                    <option value="owner">Store Owner</option>
                    <option value="manager">Store Manager</option>
                    <option value="marketing">Marketing Manager</option>
                    <option value="operations">Operations Manager</option>
                    <option value="developer">Developer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="webinarInterest" className="block text-sm font-medium text-gray-700 mb-2">
                    Webinar Topics of Interest
                  </label>
                  <select
                    id="webinarInterest"
                    name="webinarInterest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    value={formData.webinarInterest}
                    onChange={handleInputChange}
                  >
                    <option value="">Please Select</option>
                    <option value="ai-automation">AI Automation & Workflows</option>
                    <option value="inventory-management">Inventory Management</option>
                    <option value="customer-service">Customer Service Optimization</option>
                    <option value="marketing-automation">Marketing Automation</option>
                    <option value="analytics-reporting">Analytics & Reporting</option>
                    <option value="all">All Topics</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="notifications"
                      name="notifications"
                      className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      checked={agreements.notifications}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="notifications" className="text-sm text-gray-700">
                      Notify me about upcoming webinars and exclusive e-commerce insights
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      checked={agreements.privacy}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-700">
                      I agree to the{" "}
                      <a href="/privacy" className="text-primary hover:underline">privacy policy</a>
                      {" "}and{" "}
                      <a href="/terms" className="text-primary hover:underline">terms of service</a>
                    </label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-300 text-white py-4 text-lg font-semibold rounded-lg"
                >
                  REGISTER NOW
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Who Will Be the Speakers?
            </h2>
            <p className="text-lg text-gray-600">
              You have at your disposal our <em>dream team</em> in this super informative webinar.
            </p>
          </div>

          <div className="space-y-8">
            {/* Speaker 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img 
                      src="/foto edu.jpg" 
                      alt="Edu Samayoa" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Video className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Edu Samayoa</h3>
                  <p className="text-gray-600 mb-3">Co-Founder & CEO</p>
                  <p className="text-gray-700 leading-relaxed">
                    Will lead this transformative webinar session and demonstrate how AI automation can revolutionize your e-commerce operations. With deep expertise in building AI solutions for Shopify stores, Edu brings real-world insights from helping hundreds of e-commerce businesses scale efficiently. He'll show you exactly how to implement AI-powered automation that saves time, boosts sales, and eliminates the manual work that's holding your business back.
                  </p>
                </div>
              </div>
            </div>

            {/* Surprise Guest */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-primary/20">
              <div className="flex items-start space-x-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">🎉</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Video className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">Special Guest</h3>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">Surprise!</span>
                  </div>
                  <p className="text-gray-600 mb-3">AI & E-commerce Expert</p>
                  <p className="text-gray-700 leading-relaxed">
                    We have a very special surprise guest joining us for this exclusive webinar! This industry expert will share unique insights and real-world case studies that you won't find anywhere else. Stay tuned to discover who will be sharing their expertise on AI automation and e-commerce optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why E-commerce Operators & Owners Should Join This Webinar
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the game-changing benefits that await you in this exclusive AI automation session
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Reason 1 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Save 16+ Hours Weekly
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Transform from reactive spreadsheet juggling to proactive AI automation. Learn how to automate repetitive tasks and focus on what truly matters - growing your business.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Live Implementation Demo
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Watch us set up your first automated report in under 5 minutes. See real-time how AI can transform your data into actionable insights without the technical complexity.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert Q&A Session
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Get your burning questions answered by thinkr's AI automation experts. Learn from real-world case studies and avoid common pitfalls that cost other store owners time and money.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Exclusive Free Trial Access
              </h3>
              <p className="text-gray-700 leading-relaxed">
                All attendees receive a free 14-day trial of thinkr's AI platform plus a comprehensive implementation guide valued at $297. Start automating immediately after the session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Webinars Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Past Webinars
            </h2>
            <p className="text-lg text-gray-600">
              Missed a session? Catch up on our previous webinars
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for past webinars */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-gray-400 mb-4">
                <Video className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-sm text-gray-600">
                Our first webinar recordings will be available here soon
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default WebinarsPage 